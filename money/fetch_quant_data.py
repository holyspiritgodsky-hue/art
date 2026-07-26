"""Lightweight quant trap data fetcher based on AkShare.

Usage:
    python fetch_quant_data.py --codes 300476 002384

The script fetches the latest available margin financing data and current
turnover rate, combines them with preset business purity scores, and writes
the result to data.json for frontend consumption.
"""

from __future__ import annotations

import argparse
import json
import logging
import os
import shutil
import sys
import time
from dataclasses import dataclass
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any

import akshare as ak
import pandas as pd


DEFAULT_OUTPUT = Path(__file__).with_name("data.json")
DEFAULT_BACKUP_DIR = Path(__file__).with_name("backups")

STOCK_WHITELIST = [
    "300476", "002384", "300308", "002230", "688256", "603019", "603160", "603986", "603501", "603893",
    "688111", "688041", "688012", "688008", "688169", "688072", "688099", "688027", "688608", "688018",
    "688036", "688047", "688126", "688037", "688213", "688120", "688981", "603296", "300033", "300496",
    "300502", "300223", "300383", "300458", "300474", "300454", "300212", "300251", "300229", "300624",
    "300442", "300803", "300364", "300394", "300570", "300782", "300548", "300604", "300118", "300373",
    "301236", "301269", "301312", "301308", "301095", "301171", "301165", "300059", "002371", "002475",
    "002463", "002555", "002236", "002241", "600050", "002859", "002920", "002456", "002156", "002261",
    "002273", "002281", "002415", "002916", "002517", "002049", "002138", "002185", "000063", "000977",
    "000938", "000988", "000034", "000066", "000725", "000100", "600584", "600570", "600845", "600536",
    "600588", "600602", "600171", "600498", "600183", "600460", "600703", "601138", "601360", "603000",
    "300054", "002192", "002466", "002837", "601869", "002938", "000878", "002155", "600378", "300418",
    "002218", "300617", "300738",
]

STOCK_WHITELIST = list(dict.fromkeys(STOCK_WHITELIST))
STOCK_WHITELIST_SET = set(STOCK_WHITELIST)
DEFAULT_CODES = STOCK_WHITELIST.copy()

# 业务纯度分数: 0-100, 数值越高代表业务概念越纯，越容易形成一致性拥挤。
BUSINESS_PURITY_SCORES = {
    "300476": 82,
    "002384": 68,
    "300308": 88,
}


@dataclass(frozen=True)
class WeightProfile:
    business_purity: float = 0.35
    financing_pressure: float = 0.45
    turnover_heat: float = 0.20


WEIGHTS = WeightProfile()

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
)
LOGGER = logging.getLogger(__name__)


def configure_network_environment() -> None:
    # Bypass implicit system proxies unless the caller explicitly configured one.
    os.environ.setdefault("NO_PROXY", "*")
    os.environ.setdefault("no_proxy", "*")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Fetch margin financing and turnover data, then export trap scores to JSON."
    )
    parser.add_argument(
        "--codes",
        nargs="+",
        default=DEFAULT_CODES,
        help="Stock codes to process, e.g. 300476 002384",
    )
    parser.add_argument(
        "--output",
        default=str(DEFAULT_OUTPUT),
        help="Output JSON path. Default: data.json next to this script.",
    )
    parser.add_argument(
        "--backup-dir",
        default=str(DEFAULT_BACKUP_DIR),
        help="Backup directory for previous data.json files.",
    )
    return parser.parse_args()


def filter_codes(codes: list[str]) -> list[str]:
    normalized_codes = [str(code).zfill(6) for code in codes]
    filtered_codes = [code for code in normalized_codes if code in STOCK_WHITELIST_SET]

    skipped_codes = [code for code in normalized_codes if code not in STOCK_WHITELIST_SET]
    for code in skipped_codes:
        LOGGER.warning("Skip %s: not in STOCK_WHITELIST", code)

    return list(dict.fromkeys(filtered_codes))


def backup_existing_output(output_path: Path, backup_dir: Path) -> Path | None:
    if not output_path.exists():
        return None

    backup_dir.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = backup_dir / f"{output_path.stem}_{timestamp}{output_path.suffix}"
    shutil.copy2(output_path, backup_path)
    LOGGER.info("Backed up existing output to %s", backup_path)
    return backup_path


def browser_data_script_path(output_path: Path) -> Path:
    return output_path.with_name(f"{output_path.stem}.js")


def write_browser_payload_script(payload: dict[str, Any], output_path: Path) -> None:
    script_path = browser_data_script_path(output_path)
    script_body = "window.__QUANT_DATA__ = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"
    script_path.write_text(script_body, encoding="utf-8")
    LOGGER.info("Wrote %s", script_path)


def write_payload_atomic(payload: dict[str, Any], output_path: Path, backup_dir: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    backup_existing_output(output_path, backup_dir)

    temp_path = output_path.with_suffix(f"{output_path.suffix}.tmp")
    temp_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    temp_path.replace(output_path)
    LOGGER.info("Wrote %s", output_path)
    write_browser_payload_script(payload, output_path)


def load_existing_payload(output_path: Path) -> dict[str, Any]:
    if not output_path.exists():
        return {}

    try:
        return json.loads(output_path.read_text(encoding="utf-8-sig"))
    except (OSError, json.JSONDecodeError) as exc:
        LOGGER.warning("Failed to read existing payload from %s: %s", output_path, exc)
        return {}


def detect_market(code: str) -> str:
    if code.startswith(("600", "601", "603", "605", "688", "689", "900")):
        return "sse"
    if code.startswith(("000", "001", "002", "003", "200", "300", "301")):
        return "szse"
    raise ValueError(f"Unsupported stock code market mapping: {code}")


def clamp(value: float, lower: float = 0.0, upper: float = 100.0) -> float:
    return max(lower, min(upper, value))


def safe_float(value: Any) -> float | None:
    if value is None or value == "-":
        return None
    try:
        if pd.isna(value):
            return None
    except TypeError:
        pass
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def normalize_margin_frame(frame: pd.DataFrame, market: str) -> pd.DataFrame:
    renamed = frame.rename(
        columns={
            "标的证券代码": "code",
            "证券代码": "code",
            "股票代码": "code",
            "融资余额": "margin_balance",
            "融资买入额": "margin_buy",
            "融资买入金额": "margin_buy",
            "证券简称": "name",
            "股票简称": "name",
        }
    ).copy()

    if "code" not in renamed.columns:
        raise ValueError(f"Margin data columns missing stock code field for market={market}")

    renamed["code"] = renamed["code"].astype(str).str.zfill(6)
    if "margin_balance" not in renamed.columns or "margin_buy" not in renamed.columns:
        raise ValueError(f"Margin data columns missing financing fields for market={market}")
    if "name" not in renamed.columns:
        renamed["name"] = ""

    return renamed[["code", "name", "margin_balance", "margin_buy"]]


def load_latest_margin_data(market: str, lookback_days: int = 10) -> tuple[pd.DataFrame, str]:
    fetcher = ak.stock_margin_detail_sse if market == "sse" else ak.stock_margin_detail_szse

    for delta in range(lookback_days):
        trade_date = (datetime.now() - timedelta(days=delta)).strftime("%Y%m%d")
        try:
            frame = fetcher(date=trade_date)
        except Exception:
            continue

        if frame is None or frame.empty:
            continue

        normalized = normalize_margin_frame(frame, market)
        if not normalized.empty:
            return normalized, trade_date

    raise RuntimeError(f"No margin data found for market={market} in the last {lookback_days} days")


def load_spot_data() -> tuple[pd.DataFrame, str]:
    try:
        frame = ak.stock_zh_a_spot_em().copy()
        source = "eastmoney:stock_zh_a_spot_em"
    except Exception as exc:
        LOGGER.warning("Fallback to Tencent spot data after Eastmoney failure: %s", exc)
        frame = ak.stock_zh_a_spot_tx().copy()
        frame = frame.rename(columns={"code": "code", "name": "name", "hsl": "turnover_rate"}).copy()
        required_columns = {"code", "name", "turnover_rate"}
        missing = required_columns - set(frame.columns)
        if missing:
            raise ValueError(f"Tencent spot quote data missing required columns: {sorted(missing)}")

        frame["code"] = frame["code"].astype(str).str.extract(r"(\d{6})", expand=False).fillna("")
        frame["turnover_rate"] = (
            frame["turnover_rate"]
            .astype(str)
            .str.replace("%", "", regex=False)
            .str.strip()
            .replace({"": None, "-": None, "None": None, "nan": None})
        )
        return frame[["code", "name", "turnover_rate"]], "tencent:stock_zh_a_spot_tx"

    turnover_column = None
    for candidate in frame.columns:
        if str(candidate).strip() == "换手率":
            turnover_column = candidate
            break
    if turnover_column is None:
        for candidate in frame.columns:
            if "换手率" in str(candidate):
                turnover_column = candidate
                break

    rename_map = {
        "代码": "code",
        "名称": "name",
    }
    if turnover_column is not None:
        rename_map[turnover_column] = "turnover_rate"

    frame = frame.rename(columns=rename_map).copy()
    required_columns = {"code", "name", "turnover_rate"}
    missing = required_columns - set(frame.columns)
    if missing:
        raise ValueError(f"Spot quote data missing required columns: {sorted(missing)}")

    frame["code"] = frame["code"].astype(str).str.extract(r"(\d{6})", expand=False).fillna("")
    frame["turnover_rate"] = (
        frame["turnover_rate"]
        .astype(str)
        .str.replace("%", "", regex=False)
        .str.strip()
        .replace({"": None, "-": None, "None": None, "nan": None})
    )
    missing_ratio = frame["turnover_rate"].isna().mean()
    if missing_ratio >= 0.95:
        LOGGER.warning(
            "Eastmoney spot turnover_rate is mostly missing (%.1f%% null). Available columns: %s",
            missing_ratio * 100,
            list(frame.columns),
        )
    return frame[["code", "name", "turnover_rate"]], source


def compute_financing_pressure_score(margin_balance: float | None, margin_buy: float | None) -> float:
    if not margin_balance or margin_balance <= 0 or margin_buy is None:
        return 0.0

    buy_to_balance_ratio = margin_buy / margin_balance
    return clamp(buy_to_balance_ratio * 1000)


def compute_turnover_heat_score(turnover_rate: float | None) -> float:
    if turnover_rate is None:
        return 0.0
    return clamp(turnover_rate * 8)


def compute_trap_score(
    business_purity: float,
    financing_pressure: float,
    turnover_heat: float,
    weights: WeightProfile = WEIGHTS,
) -> float:
    score = (
        business_purity * weights.business_purity
        + financing_pressure * weights.financing_pressure
        + turnover_heat * weights.turnover_heat
    )
    return round(clamp(score), 2)


def build_daily_warning(stocks: list[dict[str, Any]], generated_at: str) -> dict[str, Any]:
    sorted_stocks = sorted(stocks, key=lambda item: item["trap_score"], reverse=True)
    top_stock = sorted_stocks[0]
    avg_score = sum(item["trap_score"] for item in stocks) / len(stocks)
    high_risk_count = sum(1 for item in stocks if item["trap_score"] >= 70)

    gauge_score = round(top_stock["trap_score"])
    if gauge_score >= 70:
        title = "量化高危区，先看承接，再谈进攻。"
        style_warning = "高纯度科技核心股拥挤度偏高，冲高回落风险更大。"
        discipline = "避免追涨，优先确认量价背离后的承接质量。"
    elif gauge_score >= 45:
        title = "量化分歧区，先看换手再定方向。"
        style_warning = "前排龙头与跟风标的分化增大，追高容错率下降。"
        discipline = "轻仓试错，优先保留强趋势与成交结构更干净的样本。"
    else:
        title = "量化偏稳区，可优先观察低吸确认。"
        style_warning = "整体拥挤度不高，但仍需警惕放量假突破。"
        discipline = "分批验证，不做无量上冲时的追价动作。"

    return {
        "date": generated_at[:10],
        "title": title,
        "gauge_score": gauge_score,
        "prompt": (
            f"当前高风险样本集中在 {top_stock['name']} 等标的，"
            f"样本平均陷阱分约 {avg_score:.1f}，优先防范一致性追高后的回撤兑现。"
        ),
        "signals": [
            {
                "label": "高频异动",
                "value": str(high_risk_count),
                "note": "陷阱分大于等于 70 的样本数",
            },
            {
                "label": "筹码拥挤",
                "value": f"{round(min(100, avg_score))}%",
                "note": "核心样本平均陷阱分映射",
            },
            {
                "label": "两融升温",
                "value": f"{round(top_stock['metrics']['financing_pressure_score'])}%",
                "note": f"{top_stock['name']} 的融资压力得分",
            },
        ],
        "warnings": [
            {
                "label": "风格漂移预警",
                "value": style_warning,
            },
            {
                "label": "量化踩踏窗口",
                "value": "10:05 - 10:40 易放大冲高回落",
            },
            {
                "label": "执行纪律",
                "value": discipline,
            },
        ],
        "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
        "review": {
            "status": "待复盘",
            "note": "次日收盘后可补充验证结论，观察预警是否兑现。",
        },
    }


def merge_warning_history(existing_payload: dict[str, Any], daily_warning: dict[str, Any]) -> list[dict[str, Any]]:
    existing_history = existing_payload.get("warning_history", [])
    filtered_history = [item for item in existing_history if item.get("date") != daily_warning["date"]]
    filtered_history.append(daily_warning)
    return sorted(filtered_history, key=lambda item: item.get("date", ""), reverse=True)


def build_stock_payload(
    code: str,
    spot_row: pd.Series | None,
    margin_row: pd.Series | None,
    margin_date: str,
) -> dict[str, Any]:
    name = ""
    if spot_row is not None:
        name = str(spot_row.get("name", ""))
    if not name and margin_row is not None:
        name = str(margin_row.get("name", ""))

    turnover_rate = safe_float(None if spot_row is None else spot_row.get("turnover_rate"))
    margin_balance = safe_float(None if margin_row is None else margin_row.get("margin_balance"))
    margin_buy = safe_float(None if margin_row is None else margin_row.get("margin_buy"))

    business_purity = BUSINESS_PURITY_SCORES.get(code, 50)
    financing_pressure = compute_financing_pressure_score(margin_balance, margin_buy)
    turnover_heat = compute_turnover_heat_score(turnover_rate)
    trap_score = compute_trap_score(business_purity, financing_pressure, turnover_heat)

    return {
        "code": code,
        "name": name,
        "margin_date": margin_date,
        "metrics": {
            "business_purity_score": business_purity,
            "margin_balance": margin_balance,
            "margin_buy": margin_buy,
            "turnover_rate": turnover_rate,
            "financing_pressure_score": round(financing_pressure, 2),
            "turnover_heat_score": round(turnover_heat, 2),
        },
        "trap_score": trap_score,
    }


def export_data(codes: list[str], output_path: Path, backup_dir: Path) -> dict[str, Any]:
    filtered_codes = filter_codes(codes)
    if not filtered_codes:
        raise ValueError("No valid stock codes remain after STOCK_WHITELIST filtering")

    LOGGER.info("Start export for %s requested codes, %s whitelisted codes", len(codes), len(filtered_codes))
    existing_payload = load_existing_payload(output_path)
    spot_frame, spot_source = load_spot_data()
    spot_total_count = len(spot_frame)
    spot_turnover_missing_count = int(spot_frame["turnover_rate"].isna().sum())
    spot_turnover_available_count = spot_total_count - spot_turnover_missing_count
    spot_map = {row["code"]: row for _, row in spot_frame.iterrows()}

    margin_cache: dict[str, pd.DataFrame] = {}
    margin_dates: dict[str, str] = {}
    failed_codes: list[dict[str, str]] = []

    result_stocks: list[dict[str, Any]] = []
    for normalized_code in filtered_codes:
        time.sleep(0.15)
        try:
            market = detect_market(normalized_code)

            if market not in margin_cache:
                margin_frame, margin_date = load_latest_margin_data(market)
                margin_cache[market] = margin_frame
                margin_dates[market] = margin_date

            margin_frame = margin_cache[market]
            stock_margin_rows = margin_frame.loc[margin_frame["code"] == normalized_code]
            margin_row = None if stock_margin_rows.empty else stock_margin_rows.iloc[0]
            spot_row = spot_map.get(normalized_code)
            result_stocks.append(
                build_stock_payload(normalized_code, spot_row, margin_row, margin_dates[market])
            )
            LOGGER.info("Processed %s", normalized_code)
        except Exception as exc:
            LOGGER.warning("Skip %s: %s", normalized_code, exc)
            failed_codes.append({"code": normalized_code, "reason": str(exc)})
            continue

    if not result_stocks:
        raise RuntimeError("No stock data was exported successfully")

    generated_at = datetime.now().isoformat(timespec="seconds")
    daily_warning = build_daily_warning(result_stocks, generated_at)
    warning_history = merge_warning_history(existing_payload, daily_warning)

    payload = {
        "generated_at": generated_at,
        "run_source": os.environ.get("RUN_SOURCE", "manual"),
        "whitelist_size": len(STOCK_WHITELIST),
        "requested_count": len(codes),
        "requested_codes": [str(code).zfill(6) for code in codes],
        "processed_count": len(result_stocks),
        "processed_codes": filtered_codes,
        "failed_codes": failed_codes,
        "formula": {
            "business_purity_weight": WEIGHTS.business_purity,
            "financing_pressure_weight": WEIGHTS.financing_pressure,
            "turnover_heat_weight": WEIGHTS.turnover_heat,
            "financing_pressure_rule": "min(100, 融资买入额 / 融资余额 * 1000)",
            "turnover_heat_rule": "min(100, 换手率 * 8)",
        },
        "spot_data_health": {
            "source": spot_source,
            "total_rows": spot_total_count,
            "turnover_rate_available_rows": spot_turnover_available_count,
            "turnover_rate_missing_rows": spot_turnover_missing_count,
            "turnover_rate_missing_ratio": round(
                spot_turnover_missing_count / spot_total_count, 4
            ) if spot_total_count else None,
        },
        "daily_warning": daily_warning,
        "warning_history": warning_history,
        "stocks": result_stocks,
    }

    write_payload_atomic(payload, output_path, backup_dir)
    LOGGER.info("Export completed with %s successful stocks", len(result_stocks))
    return payload


def main() -> None:
    configure_network_environment()
    args = parse_args()
    output_path = Path(args.output)
    backup_dir = Path(args.backup_dir)
    existing_payload = load_existing_payload(output_path)
    max_attempts = 3

    payload: dict[str, Any] | None = None
    for attempt in range(1, max_attempts + 1):
        try:
            payload = export_data(args.codes, output_path, backup_dir)
            break
        except Exception as exc:
            LOGGER.warning("Export attempt %s/%s failed: %s", attempt, max_attempts, exc)
            if attempt < max_attempts:
                time.sleep(attempt)
                continue

            if existing_payload.get("stocks"):
                write_browser_payload_script(existing_payload, output_path)
                LOGGER.warning(
                    "Refresh failed after %s attempts. Keeping existing payload with %s stocks.",
                    max_attempts,
                    len(existing_payload.get("stocks", [])),
                )
                return

            LOGGER.error("Export failed: %s", exc)
            sys.exit(1)

    if payload is None:
        LOGGER.error("Export failed without producing a payload")
        sys.exit(1)

    LOGGER.info("Exported %s stocks to %s", len(payload["stocks"]), output_path)


if __name__ == "__main__":
    main()
