"""Lightweight quant trap data fetcher based on AkShare.

Usage:
    python fetch_quant_data.py --codes 300476 002384

The script fetches the latest available margin financing data and current
turnover rate, combines them with preset business purity scores, and writes
the result to data.json for frontend consumption.
"""

from __future__ import annotations

import argparse
import math
import json
import logging
import os
import re
import shutil
import sys
import time
from dataclasses import dataclass
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo

import akshare as ak
import pandas as pd


DEFAULT_OUTPUT = Path(__file__).with_name("data.json")
DEFAULT_BACKUP_DIR = Path(__file__).with_name("backups")
BEIJING_TIME_ZONE = ZoneInfo("Asia/Shanghai")

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
    "002218", "300617", "300738", "002126", "002050", "603075", "603667", "605020", "600160", "603379", "600988",
    "000636", "688825", "600105", "300285",
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
WINDOW_PATTERN = re.compile(r"(\d{2}:\d{2})\s*-\s*(\d{2}:\d{2})")
WATCH_TREND_CANDIDATE_COUNT = 12
WATCH_TREND_FETCH_DELAY_SECONDS = 0.18
INTRADAY_REVIEW_PROXIES = [
    {"symbol": "000001", "name": "上证指数"},
    {"symbol": "399001", "name": "深证成指"},
    {"symbol": "399006", "name": "创业板指"},
]

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


def load_backup_payloads(backup_dir: Path) -> list[dict[str, Any]]:
    if not backup_dir.exists():
        return []

    payloads: list[dict[str, Any]] = []
    for backup_path in sorted(backup_dir.glob("*.json"), reverse=True):
        try:
            payloads.append(json.loads(backup_path.read_text(encoding="utf-8-sig")))
        except (OSError, json.JSONDecodeError) as exc:
            LOGGER.warning("Failed to read backup payload from %s: %s", backup_path, exc)
    return payloads


def detect_market(code: str) -> str:
    if code.startswith(("600", "601", "603", "605", "688", "689", "900")):
        return "sse"
    if code.startswith(("000", "001", "002", "003", "200", "300", "301")):
        return "szse"
    raise ValueError(f"Unsupported stock code market mapping: {code}")


def clamp(value: float, lower: float = 0.0, upper: float = 100.0) -> float:
    return max(lower, min(upper, value))


def next_weekday(value: datetime) -> datetime:
    next_value = value + timedelta(days=1)
    while next_value.weekday() >= 5:
        next_value += timedelta(days=1)
    return next_value


def previous_weekday(value: datetime) -> datetime:
    previous_value = value - timedelta(days=1)
    while previous_value.weekday() >= 5:
        previous_value -= timedelta(days=1)
    return previous_value


def infer_warning_target_date(generated_at: datetime) -> str:
    reference_date = generated_at.replace(hour=0, minute=0, second=0, microsecond=0)

    if reference_date.weekday() >= 5:
        target_date = next_weekday(reference_date)
    elif generated_at.hour >= 15:
        target_date = next_weekday(reference_date)
    else:
        target_date = reference_date

    return target_date.strftime("%Y-%m-%d")


def infer_market_phase(generated_at: datetime) -> str:
    minutes = generated_at.hour * 60 + generated_at.minute

    if generated_at.weekday() >= 5:
        return "weekend"
    if minutes < 9 * 60 + 30:
        return "pre_open"
    if minutes < 11 * 60 + 30:
        return "trading"
    if minutes < 13 * 60:
        return "midday_break"
    if minutes < 15 * 60:
        return "trading"
    return "post_close"


def build_data_freshness(
    generated_at: str,
    generated_at_dt: datetime,
    warning_date: str,
    margin_dates: dict[str, str],
) -> dict[str, Any]:
    unique_margin_dates = sorted({value for value in margin_dates.values() if value})
    latest_margin_date = unique_margin_dates[-1] if unique_margin_dates else ""

    return {
        "warning_target_date": warning_date,
        "spot_snapshot_at": generated_at,
        "margin_data_as_of": latest_margin_date,
        "margin_data_dates_by_market": margin_dates,
        "market_phase": infer_market_phase(generated_at_dt),
    }


def safe_float(value: Any) -> float | None:
    if value is None or value == "-":
        return None
    try:
        if pd.isna(value):
            return None
    except TypeError:
        pass
    try:
        if isinstance(value, str):
            normalized = value.replace(",", "").replace("%", "").strip()
            if normalized in {"", "-", "None", "nan"}:
                return None
            return float(normalized)
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
        frame["float_market_cap"] = None
        return frame[["code", "name", "turnover_rate", "float_market_cap"]], "tencent:stock_zh_a_spot_tx"

    turnover_column = None
    float_market_cap_column = None
    for candidate in frame.columns:
        if str(candidate).strip() == "换手率":
            turnover_column = candidate
            break
    if turnover_column is None:
        for candidate in frame.columns:
            if "换手率" in str(candidate):
                turnover_column = candidate
                break

    for candidate in frame.columns:
        if str(candidate).strip() == "流通市值":
            float_market_cap_column = candidate
            break
    if float_market_cap_column is None:
        for candidate in frame.columns:
            if "流通市值" in str(candidate):
                float_market_cap_column = candidate
                break

    rename_map = {
        "代码": "code",
        "名称": "name",
    }
    if turnover_column is not None:
        rename_map[turnover_column] = "turnover_rate"
    if float_market_cap_column is not None:
        rename_map[float_market_cap_column] = "float_market_cap"

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
    if "float_market_cap" not in frame.columns:
        frame["float_market_cap"] = None
    return frame[["code", "name", "turnover_rate", "float_market_cap"]], source


def compute_financing_pressure_score(margin_balance: float | None, margin_buy: float | None) -> float:
    if not margin_balance or margin_balance <= 0 or margin_buy is None:
        return 0.0

    buy_to_balance_ratio = margin_buy / margin_balance
    if buy_to_balance_ratio <= 0.02:
        return clamp(buy_to_balance_ratio / 0.02 * 35)
    if buy_to_balance_ratio <= 0.05:
        return clamp(35 + (buy_to_balance_ratio - 0.02) / 0.03 * 30)
    if buy_to_balance_ratio <= 0.08:
        return clamp(65 + (buy_to_balance_ratio - 0.05) / 0.03 * 20)
    return clamp(85 + (buy_to_balance_ratio - 0.08) / 0.04 * 15)


def compute_margin_burden_score(margin_balance: float | None, float_market_cap: float | None) -> float:
    if not margin_balance or margin_balance <= 0 or not float_market_cap or float_market_cap <= 0:
        return 0.0

    balance_to_cap_ratio = margin_balance / float_market_cap
    if balance_to_cap_ratio <= 0.01:
        return clamp(balance_to_cap_ratio / 0.01 * 20)
    if balance_to_cap_ratio <= 0.03:
        return clamp(20 + (balance_to_cap_ratio - 0.01) / 0.02 * 25)
    if balance_to_cap_ratio <= 0.05:
        return clamp(45 + (balance_to_cap_ratio - 0.03) / 0.02 * 25)
    if balance_to_cap_ratio <= 0.08:
        return clamp(70 + (balance_to_cap_ratio - 0.05) / 0.03 * 20)
    return clamp(90 + (balance_to_cap_ratio - 0.08) / 0.04 * 10)


def combine_financing_scores(incremental_pressure: float, margin_burden: float) -> float:
    return round(clamp(incremental_pressure * 0.8 + margin_burden * 0.2), 2)


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


def average(values: list[float]) -> float:
    return sum(values) / len(values) if values else 0.0


def build_centered_score(value: float, center: float, penalty_per_point: float) -> float:
    return clamp(100.0 - abs(value - center) * penalty_per_point)


def compute_turnover_z_score(frame: pd.DataFrame | None, current_turnover_rate: float | None) -> float | None:
    if frame is None or frame.empty or current_turnover_rate is None:
        return None

    turnover_series = pd.to_numeric(frame.get("turnover_rate"), errors="coerce").dropna()
    if len(turnover_series) < 8:
        return None

    recent = turnover_series.tail(20)
    mean_value = float(recent.mean())
    std_value = float(recent.std(ddof=0))
    if std_value <= 0:
        return None

    return round((float(current_turnover_rate) - mean_value) / std_value, 2)


def build_relative_turnover_setup_score(turnover_heat_score: float, turnover_z_score: float | None) -> float:
    if turnover_z_score is None:
        return build_centered_score(turnover_heat_score, 52.0, 2.0)

    target_z = 1.2
    penalty = 22.0 if turnover_z_score >= 0 else 30.0
    return build_centered_score(turnover_z_score, target_z, penalty)


def compute_breakout_environment(stocks: list[dict[str, Any]], gauge_score: float) -> dict[str, Any]:
    trend_records = [
        item.get("trend") or {}
        for item in stocks
        if (item.get("trend") or {}).get("available")
    ]
    if len(trend_records) < 4:
        return {
            "state": "neutral",
            "score_multiplier": 1.0,
            "min_return_3d_pct": 0.0,
            "max_ma5_gap_pct": -2.5,
            "note": "趋势样本不足，先按中性环境处理。",
            "positive_ratio": 0.0,
            "weak_ratio": 0.0,
        }

    positive_ratio = sum(
        1
        for item in trend_records
        if float(item.get("return_3d_pct", 0.0) or 0.0) >= 1.0
        and float(item.get("ma5_gap_pct", 0.0) or 0.0) >= -1.0
    ) / len(trend_records)
    weak_ratio = sum(
        1
        for item in trend_records
        if float(item.get("return_5d_pct", 0.0) or 0.0) <= -4.0
        or float(item.get("ma5_gap_pct", 0.0) or 0.0) <= -3.0
    ) / len(trend_records)

    if gauge_score >= 66 or weak_ratio >= 0.5:
        return {
            "state": "tight",
            "score_multiplier": 0.88,
            "min_return_3d_pct": 1.0,
            "max_ma5_gap_pct": -1.0,
            "note": "当前环境偏弱，缩量修复需要更强确认。",
            "positive_ratio": round(positive_ratio, 3),
            "weak_ratio": round(weak_ratio, 3),
        }
    if positive_ratio >= 0.55 and weak_ratio <= 0.25 and gauge_score <= 58:
        return {
            "state": "open",
            "score_multiplier": 1.04,
            "min_return_3d_pct": -0.5,
            "max_ma5_gap_pct": -2.5,
            "note": "当前环境偏强，趋势修复票更容易走成。",
            "positive_ratio": round(positive_ratio, 3),
            "weak_ratio": round(weak_ratio, 3),
        }
    return {
        "state": "neutral",
        "score_multiplier": 1.0,
        "min_return_3d_pct": 0.0,
        "max_ma5_gap_pct": -2.0,
        "note": "当前环境中性，优先看趋势确认更完整的票。",
        "positive_ratio": round(positive_ratio, 3),
        "weak_ratio": round(weak_ratio, 3),
    }


def parse_warning_window(value: str) -> tuple[str, str] | None:
    match = WINDOW_PATTERN.search(str(value or ""))
    if not match:
        return None
    return match.group(1), match.group(2)


def find_warning_value(entry: dict[str, Any], label: str) -> str:
    for item in entry.get("warnings", []):
        if str(item.get("label", "")).strip() == label:
            return str(item.get("value", "")).strip()
    return ""


def normalize_intraday_frame(frame: pd.DataFrame) -> pd.DataFrame:
    rename_map: dict[str, str] = {}
    for column in frame.columns:
        name = str(column).strip()
        if name in {"时间", "日期时间", "datetime", "Datetime", "date", "日期"}:
            rename_map[column] = "timestamp"
        elif name in {"收盘", "最新价", "close", "Close"}:
            rename_map[column] = "price"

    normalized = frame.rename(columns=rename_map).copy()
    if "timestamp" not in normalized.columns or "price" not in normalized.columns:
        raise ValueError(f"Unexpected intraday columns: {list(frame.columns)}")

    normalized["timestamp"] = pd.to_datetime(normalized["timestamp"], errors="coerce")
    normalized["price"] = pd.to_numeric(normalized["price"], errors="coerce")
    normalized = normalized.dropna(subset=["timestamp", "price"]).sort_values("timestamp")
    if normalized.empty:
        raise ValueError("Intraday frame is empty after normalization")
    return normalized[["timestamp", "price"]]


def normalize_daily_history_frame(frame: pd.DataFrame) -> pd.DataFrame:
    rename_map: dict[str, str] = {}
    for column in frame.columns:
        name = str(column).strip()
        if name in {"日期", "date", "Date", "datetime", "Datetime"}:
            rename_map[column] = "date"
        elif name in {"收盘", "close", "Close", "最新价"}:
            rename_map[column] = "close"
        elif name in {"换手率", "turnover", "Turnover"}:
            rename_map[column] = "turnover_rate"

    normalized = frame.rename(columns=rename_map).copy()
    if "date" not in normalized.columns or "close" not in normalized.columns:
        raise ValueError(f"Unexpected daily history columns: {list(frame.columns)}")

    normalized["date"] = pd.to_datetime(normalized["date"], errors="coerce")
    normalized["close"] = pd.to_numeric(normalized["close"], errors="coerce")
    if "turnover_rate" not in normalized.columns:
        normalized["turnover_rate"] = None
    normalized["turnover_rate"] = pd.to_numeric(normalized["turnover_rate"], errors="coerce")
    turnover_values = normalized["turnover_rate"].dropna()
    if not turnover_values.empty and float(turnover_values.abs().max()) <= 1.0:
        normalized["turnover_rate"] = normalized["turnover_rate"] * 100.0
    normalized = normalized.dropna(subset=["date", "close"]).sort_values("date")
    if normalized.empty:
        raise ValueError("Daily history frame is empty after normalization")
    return normalized[["date", "close", "turnover_rate"]]


def load_recent_daily_history(code: str, end_date: datetime, lookback_days: int = 45) -> pd.DataFrame | None:
    start_date = (end_date - timedelta(days=lookback_days)).strftime("%Y%m%d")
    finish_date = end_date.strftime("%Y%m%d")

    try:
        frame = ak.stock_zh_a_hist(
            symbol=code,
            period="daily",
            start_date=start_date,
            end_date=finish_date,
            adjust="qfq",
        )
    except Exception as exc:
        LOGGER.warning("Primary daily history source failed for %s: %s", code, exc)
        frame = None

    if frame is None or frame.empty:
        try:
            frame = ak.stock_zh_a_hist_tx(
                symbol=code,
                start_date=start_date,
                end_date=finish_date,
                adjust="qfq",
            )
        except Exception as exc:
            LOGGER.warning("Fallback daily history source failed for %s: %s", code, exc)
            return None

    if frame is None or frame.empty:
        return None

    try:
        return normalize_daily_history_frame(frame)
    except Exception as exc:
        LOGGER.warning("Failed to normalize daily history for %s: %s", code, exc)
        return None


def compute_price_trend_metrics(frame: pd.DataFrame | None) -> dict[str, Any]:
    if frame is None or frame.empty:
        return {
            "available": False,
            "down_streak": 0,
            "return_3d_pct": 0.0,
            "return_5d_pct": 0.0,
            "return_8d_pct": 0.0,
            "ma5_gap_pct": 0.0,
            "ma10_gap_pct": 0.0,
            "drawdown_8d_pct": 0.0,
            "trend_penalty": 0.0,
            "trend_label": "趋势数据暂缺",
        }

    closes = frame["close"].astype(float).tolist()
    latest_close = closes[-1]

    def pct_change(reference_index: int) -> float:
        if len(closes) <= reference_index:
            return 0.0
        base = closes[-reference_index - 1]
        if not base:
            return 0.0
        return round((latest_close / base - 1) * 100, 2)

    down_streak = 0
    for index in range(len(closes) - 1, 0, -1):
        if closes[index] < closes[index - 1]:
            down_streak += 1
            continue
        break

    ma5 = average(closes[-5:]) if len(closes) >= 5 else average(closes)
    ma10 = average(closes[-10:]) if len(closes) >= 10 else average(closes)
    recent_peak = max(closes[-8:]) if len(closes) >= 8 else max(closes)
    ma5_gap_pct = round((latest_close / ma5 - 1) * 100, 2) if ma5 else 0.0
    ma10_gap_pct = round((latest_close / ma10 - 1) * 100, 2) if ma10 else 0.0
    drawdown_8d_pct = round((latest_close / recent_peak - 1) * 100, 2) if recent_peak else 0.0
    return_3d_pct = pct_change(3)
    return_5d_pct = pct_change(5)
    return_8d_pct = pct_change(8)

    trend_penalty = 0.0
    if down_streak >= 3:
        trend_penalty += min(28.0, 10.0 + (down_streak - 3) * 6.0)
    if return_5d_pct <= -8:
        trend_penalty += 24.0
    elif return_5d_pct <= -5:
        trend_penalty += 14.0
    if ma5_gap_pct <= -4:
        trend_penalty += 18.0
    if ma10_gap_pct <= -7:
        trend_penalty += 14.0
    if drawdown_8d_pct <= -12:
        trend_penalty += 16.0
    trend_penalty = round(clamp(trend_penalty), 2)

    if down_streak >= 4 and return_5d_pct <= -8:
        trend_label = f"已连跌 {down_streak} 天"
    elif ma5_gap_pct <= -4 or ma10_gap_pct <= -7:
        trend_label = "短线趋势走弱"
    elif return_5d_pct <= -5:
        trend_label = "近 5 日明显回撤"
    else:
        trend_label = "趋势中性"

    return {
        "available": True,
        "down_streak": down_streak,
        "return_3d_pct": return_3d_pct,
        "return_5d_pct": return_5d_pct,
        "return_8d_pct": return_8d_pct,
        "ma5_gap_pct": ma5_gap_pct,
        "ma10_gap_pct": ma10_gap_pct,
        "drawdown_8d_pct": drawdown_8d_pct,
        "trend_penalty": trend_penalty,
        "trend_label": trend_label,
    }


def build_preliminary_breakout_setup_score(stock: dict[str, Any], gauge_score: float) -> float:
    metrics = stock.get("metrics", {})
    trap_score = float(stock.get("trap_score", 0) or 0.0)
    purity_score = float(metrics.get("business_purity_score", 0) or 0.0)
    turnover_score = float(metrics.get("turnover_heat_score", 0) or 0.0)
    turnover_z_score = metrics.get("turnover_z_score")
    financing_score = float(metrics.get("financing_pressure_score", 0) or 0.0)
    setup_center = min(58.0, max(46.0, gauge_score - 2.0))
    turnover_setup = build_relative_turnover_setup_score(
        turnover_score,
        None if turnover_z_score is None else float(turnover_z_score),
    )
    activation_score = build_centered_score(trap_score, setup_center, 2.6)
    return (
        purity_score * 0.38
        + turnover_setup * 0.28
        + (100.0 - financing_score) * 0.18
        + activation_score * 0.16
    )


def build_breakout_potential_score(
    stock: dict[str, Any],
    gauge_score: float,
    trend_metrics: dict[str, Any],
    environment: dict[str, Any],
) -> float:
    trap_score = float(stock.get("trap_score", 0) or 0.0)
    setup_score = build_preliminary_breakout_setup_score(stock, gauge_score)
    if not trend_metrics.get("available"):
        crowding_penalty = max(trap_score - 68.0, 0.0) * 0.25
        return round(
            clamp(
                setup_score * 0.84 * float(environment.get("score_multiplier", 1.0) or 1.0)
                - crowding_penalty
            ),
            2,
        )

    trend_score = average([
        clamp((float(trend_metrics.get("return_3d_pct", 0.0) or 0.0) + 2.5) / 6.5 * 100.0),
        clamp((float(trend_metrics.get("return_5d_pct", 0.0) or 0.0) + 4.0) / 9.0 * 100.0),
        clamp((float(trend_metrics.get("ma5_gap_pct", 0.0) or 0.0) + 4.0) / 7.0 * 100.0),
        clamp((float(trend_metrics.get("ma10_gap_pct", 0.0) or 0.0) + 7.0) / 10.0 * 100.0),
    ])
    rebound_bonus = 6.0 if float(trend_metrics.get("return_3d_pct", 0.0) or 0.0) >= 1.5 and float(trend_metrics.get("ma5_gap_pct", 0.0) or 0.0) >= -0.5 else 0.0
    crowding_penalty = max(trap_score - 68.0, 0.0) * 0.25
    environment_multiplier = float(environment.get("score_multiplier", 1.0) or 1.0)
    return round(clamp((setup_score * 0.62 + trend_score * 0.38 + rebound_bonus) * environment_multiplier - crowding_penalty), 2)


def hydrate_breakout_candidate_trends(stocks: list[dict[str, Any]], gauge_score: float, generated_at_dt: datetime) -> int:
    ranked_candidates = sorted(
        stocks,
        key=lambda item: build_preliminary_breakout_setup_score(item, gauge_score),
        reverse=True,
    )
    selected_candidates = ranked_candidates[:WATCH_TREND_CANDIDATE_COUNT]
    hydrated_count = 0

    for item in selected_candidates:
        code = str(item.get("code", "")).strip()
        if not code:
            continue
        existing_trend = item.get("trend") or {}
        if existing_trend.get("available"):
            hydrated_count += 1
            continue
        time.sleep(WATCH_TREND_FETCH_DELAY_SECONDS)
        frame = load_recent_daily_history(code, generated_at_dt)
        item["trend"] = compute_price_trend_metrics(frame)
        item.setdefault("metrics", {})["turnover_z_score"] = compute_turnover_z_score(
            frame,
            safe_float((item.get("metrics") or {}).get("turnover_rate")),
        )
        hydrated_count += 1

    return hydrated_count


def evaluate_watch_trend_gate(trend_metrics: dict[str, Any]) -> tuple[bool, str]:
    if not trend_metrics.get("available"):
        return False, "趋势数据暂缺，先不进观察榜"

    down_streak = int(trend_metrics.get("down_streak", 0) or 0)
    return_3d_pct = float(trend_metrics.get("return_3d_pct", 0.0) or 0.0)
    return_5d_pct = float(trend_metrics.get("return_5d_pct", 0.0) or 0.0)
    return_8d_pct = float(trend_metrics.get("return_8d_pct", 0.0) or 0.0)
    ma5_gap_pct = float(trend_metrics.get("ma5_gap_pct", 0.0) or 0.0)
    ma10_gap_pct = float(trend_metrics.get("ma10_gap_pct", 0.0) or 0.0)
    drawdown_8d_pct = float(trend_metrics.get("drawdown_8d_pct", 0.0) or 0.0)

    if down_streak >= 3 and return_5d_pct <= -4.0:
        return False, f"已连跌 {down_streak} 天，先不进观察榜"
    if down_streak >= 2 and ma5_gap_pct <= -4.0 and return_3d_pct <= -2.5:
        return False, "短线趋势已破位，先不进观察榜"
    if ma10_gap_pct <= -6.0 and drawdown_8d_pct <= -10.0:
        return False, "中短线都在走弱，先不进观察榜"
    if return_8d_pct <= -12.0:
        return False, "近 8 日回撤过大，先不进观察榜"

    if return_3d_pct >= 2.0 and ma5_gap_pct >= -1.0:
        return True, "短线修复已出现，优先等回踩确认再跟"
    if ma5_gap_pct >= -2.0 and drawdown_8d_pct >= -6.0:
        return True, "趋势未坏，优先盯分歧后的承接"
    return True, "先看回踩承接，再决定要不要跟"


def build_daily_rankings(stocks: list[dict[str, Any]], daily_warning: dict[str, Any], generated_at_dt: datetime) -> dict[str, Any]:
    summary = daily_warning.get("summary", {})
    gauge_score = float(daily_warning.get("gauge_score", 0) or summary.get("gauge_score", 55) or 55)
    focus_code = str(summary.get("top_stock_code", "") or "").strip()
    trend_candidate_count = sum(1 for item in stocks if (item.get("trend") or {}).get("available"))
    breakout_environment = summary.get("breakout_environment") or compute_breakout_environment(stocks, gauge_score)

    ranked_records: list[dict[str, Any]] = []
    for stock in stocks:
        metrics = stock.get("metrics", {})
        code = str(stock.get("code", "") or "").strip()
        trap_score = float(stock.get("trap_score", 0) or 0.0)
        purity_score = float(metrics.get("business_purity_score", 0) or 0.0)
        turnover_score = float(metrics.get("turnover_heat_score", 0) or 0.0)
        financing_score = float(metrics.get("financing_pressure_score", 0) or 0.0)
        trend_metrics = stock.get("trend") or compute_price_trend_metrics(None)
        watch_eligible, trend_gate_reason = evaluate_watch_trend_gate(trend_metrics)
        focus_bonus = 8.0 if code == focus_code else 0.0
        avoid_score = (
            trap_score * 0.50
            + financing_score * 0.28
            + turnover_score * 0.17
            + max(trap_score - 65.0, 0.0) * 0.35
            + focus_bonus
        )
        breakout_score = build_breakout_potential_score(stock, gauge_score, trend_metrics, breakout_environment)

        avoid_reason = "前排拥挤度偏高"
        if financing_score >= 85:
            avoid_reason = "杠杆压力过高"
        elif turnover_score >= 80:
            avoid_reason = "换手过热，容易一致性兑现"
        elif trap_score >= 70:
            avoid_reason = "综合陷阱分已进高危区"

        watch_reason = "先看开盘量价，再确认要不要跟"
        if not watch_eligible:
            if not trend_metrics.get("available"):
                watch_reason = "趋势数据暂缺，先盯开盘前 15 分钟量价确认"
            else:
                watch_reason = trend_gate_reason
        elif breakout_environment.get("state") == "tight" and (
            float(trend_metrics.get("return_3d_pct", 0.0) or 0.0) < float(breakout_environment.get("min_return_3d_pct", 0.0) or 0.0)
            or float(trend_metrics.get("ma5_gap_pct", 0.0) or 0.0) < float(breakout_environment.get("max_ma5_gap_pct", -2.0) or -2.0)
        ):
            watch_reason = "环境偏弱，只看最强修复票"
        elif float(trend_metrics.get("return_3d_pct", 0.0) or 0.0) >= 2.0 and float(trend_metrics.get("ma5_gap_pct", 0.0) or 0.0) >= -0.5:
            watch_reason = "短线修复最完整，优先等回踩不破再跟"
        elif trend_gate_reason not in {"", "先看回踩承接再判断"}:
            watch_reason = trend_gate_reason
        elif purity_score >= 70 and turnover_score >= 32 and turnover_score <= 68 and financing_score <= 60:
            turnover_z_score = metrics.get("turnover_z_score")
            if turnover_z_score is not None:
                watch_reason = f"相对换手抬升 {float(turnover_z_score):.1f}σ，具备二次放量条件"
            else:
                watch_reason = "题材纯度高，量能在启动区，具备二次放量条件"
        elif float(trend_metrics.get("ma5_gap_pct", 0.0) or 0.0) >= -1.5 and float(trend_metrics.get("drawdown_8d_pct", 0.0) or 0.0) >= -5.0:
            watch_reason = "趋势没破，分歧后容易重新走强"
        elif trap_score >= 46 and trap_score <= 62:
            watch_reason = "位置不挤、杠杆不热，向上试错空间更大"

        ranked_records.append({
            "code": code,
            "name": stock.get("name", code),
            "score": round(trap_score),
            "avoid_score": round(avoid_score, 2),
            "watch_score": round(breakout_score, 2),
            "avoid_reason": avoid_reason,
            "watch_reason": watch_reason,
            "watch_eligible": watch_eligible,
            "trend": trend_metrics,
            "metrics": {
                "business_purity_score": round(purity_score, 2),
                "financing_pressure_score": round(financing_score, 2),
                "turnover_heat_score": round(turnover_score, 2),
                "turnover_z_score": metrics.get("turnover_z_score"),
            },
        })

    avoid_list = sorted(
        ranked_records,
        key=lambda item: (item["avoid_score"], item["score"], item["metrics"]["financing_pressure_score"]),
        reverse=True,
    )[:3]

    watch_candidates = [
        item
        for item in ranked_records
        if item["watch_eligible"]
        if item["score"] >= 40
        and item["score"] < 70
        and item["metrics"]["financing_pressure_score"] < 85
        and item["trend"].get("trend_penalty", 0.0) < 32
    ]
    watch_list = sorted(
        watch_candidates,
        key=lambda item: (item["watch_score"], item["metrics"]["business_purity_score"], -item["metrics"]["financing_pressure_score"]),
        reverse=True,
    )[:3]

    if len(watch_list) < 3:
        supplement = [
            item
            for item in sorted(
                ranked_records,
                key=lambda item: (
                    1 if item["trend"].get("available") else 0,
                    item["watch_score"],
                    item["metrics"]["business_purity_score"],
                    -item["metrics"]["financing_pressure_score"],
                ),
                reverse=True,
            )
            if item["code"] not in {record["code"] for record in avoid_list}
            and item["code"] not in {record["code"] for record in watch_list}
            and item["score"] >= 40
            and item["score"] < 70
            and item["metrics"]["financing_pressure_score"] < 85
            and (
                item["watch_eligible"]
                or (
                    not item["trend"].get("available")
                    and item["score"] < 60
                )
            )
            and item["trend"].get("trend_penalty", 0.0) < 32
        ]
        watch_list.extend(supplement[: 3 - len(watch_list)])

    return {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": trend_candidate_count,
        "environment_state": breakout_environment.get("state", "neutral"),
        "avoid_list": [
            {
                "code": item["code"],
                "name": item["name"],
                "score": item["score"],
                "reason": item["avoid_reason"],
            }
            for item in avoid_list
        ],
        "watch_list": [
            {
                "code": item["code"],
                "name": item["name"],
                "score": round(item["watch_score"]),
                "trap_score": item["score"],
                "reason": item["watch_reason"],
                "trend_label": item["trend"].get("trend_label", ""),
            }
            for item in watch_list
        ],
    }


def build_snapshot_rankings(stocks: list[dict[str, Any]], daily_warning: dict[str, Any]) -> dict[str, Any]:
    summary = daily_warning.get("summary", {})
    gauge_score = float(daily_warning.get("gauge_score", 0) or summary.get("gauge_score", 55) or 55)
    focus_code = str(summary.get("top_stock_code", "") or "").strip()
    breakout_environment = summary.get("breakout_environment") or compute_breakout_environment(stocks, gauge_score)

    ranked_records: list[dict[str, Any]] = []
    for stock in stocks:
        metrics = stock.get("metrics", {})
        code = str(stock.get("code", "") or "").strip()
        trap_score = float(stock.get("trap_score", 0) or 0.0)
        purity_score = float(metrics.get("business_purity_score", 0) or 0.0)
        turnover_score = float(metrics.get("turnover_heat_score", 0) or 0.0)
        financing_score = float(metrics.get("financing_pressure_score", 0) or 0.0)
        focus_bonus = 8.0 if code == focus_code else 0.0
        avoid_score = (
            trap_score * 0.50
            + financing_score * 0.28
            + turnover_score * 0.17
            + max(trap_score - 65.0, 0.0) * 0.35
            + focus_bonus
        )
        trend_metrics = stock.get("trend") or compute_price_trend_metrics(None)
        watch_score = build_breakout_potential_score(stock, gauge_score, trend_metrics, breakout_environment)

        avoid_reason = "前排拥挤度偏高"
        if financing_score >= 85:
            avoid_reason = "杠杆压力过高"
        elif turnover_score >= 80:
            avoid_reason = "换手过热，容易一致性兑现"
        elif trap_score >= 70:
            avoid_reason = "综合陷阱分已进高危区"

        watch_reason = "先看开盘量价，再确认要不要跟"
        if trend_metrics.get("available") and float(trend_metrics.get("return_3d_pct", 0.0) or 0.0) >= 2.0 and float(trend_metrics.get("ma5_gap_pct", 0.0) or 0.0) >= -0.5:
            watch_reason = "短线修复最完整，优先等回踩不破再跟"
        elif purity_score >= 70 and turnover_score >= 32 and turnover_score <= 68 and financing_score <= 60:
            watch_reason = "题材纯度高，量能在启动区，具备二次放量条件"
        elif trap_score >= 46 and trap_score <= 62:
            watch_reason = "位置不挤、杠杆不热，向上试错空间更大"

        ranked_records.append({
            "code": code,
            "name": stock.get("name", code),
            "score": round(trap_score),
            "avoid_score": round(avoid_score, 2),
            "watch_score": round(watch_score, 2),
            "avoid_reason": avoid_reason,
            "watch_reason": watch_reason,
            "metrics": {
                "business_purity_score": round(purity_score, 2),
                "financing_pressure_score": round(financing_score, 2),
                "turnover_heat_score": round(turnover_score, 2),
            },
        })

    avoid_list = sorted(
        ranked_records,
        key=lambda item: (item["avoid_score"], item["score"], item["metrics"]["financing_pressure_score"]),
        reverse=True,
    )[:3]
    watch_list = [
        item
        for item in sorted(
            ranked_records,
            key=lambda item: (item["watch_score"], item["metrics"]["business_purity_score"], -item["metrics"]["financing_pressure_score"]),
            reverse=True,
        )
        if item["score"] >= 40
        and item["score"] < 70
        and item["metrics"]["financing_pressure_score"] < 85
    ][:3]

    return {
        "logic_version": "snapshot-breakout-v3",
        "trend_candidate_count": 0,
        "avoid_list": [
            {
                "code": item["code"],
                "name": item["name"],
                "score": item["score"],
                "reason": item["avoid_reason"],
            }
            for item in avoid_list
        ],
        "watch_list": [
            {
                "code": item["code"],
                "name": item["name"],
                "score": round(item["watch_score"]),
                "trap_score": item["score"],
                "reason": f"{item['watch_reason']}（按当日快照重建）",
                "trend_label": "历史快照重建",
            }
            for item in watch_list
        ],
    }


def has_rankings_payload(rankings: dict[str, Any] | None) -> bool:
    if not isinstance(rankings, dict):
        return False
    return bool(
        rankings.get("logic_version")
        or rankings.get("avoid_list")
        or rankings.get("watch_list")
    )


def build_history_rankings_index(payloads: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    indexed_rankings: dict[str, tuple[int, dict[str, Any]]] = {}

    for payload in payloads:
        daily_warning = payload.get("daily_warning") or {}
        warning_date = str(daily_warning.get("date") or "").strip()
        stocks = payload.get("stocks") or []
        if not warning_date or not stocks:
            continue

        existing_rankings = daily_warning.get("rankings") if isinstance(daily_warning, dict) else None
        if has_rankings_payload(existing_rankings):
            priority = 2
            rankings = existing_rankings
        else:
            priority = 1
            rankings = build_snapshot_rankings(stocks, daily_warning)

        previous = indexed_rankings.get(warning_date)
        if previous and previous[0] >= priority:
            continue
        indexed_rankings[warning_date] = (priority, rankings)

    return {date: item[1] for date, item in indexed_rankings.items()}


def enrich_warning_history_rankings(
    history: list[dict[str, Any]],
    payloads: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    rankings_index = build_history_rankings_index(payloads)
    enriched_history: list[dict[str, Any]] = []

    for entry in history:
        if has_rankings_payload(entry.get("rankings")):
            enriched_history.append(entry)
            continue

        entry_date = str(entry.get("date") or "").strip()
        rankings = rankings_index.get(entry_date)
        if not rankings:
            enriched_history.append(entry)
            continue

        enriched_history.append({
            **entry,
            "rankings": rankings,
        })

    return enriched_history


def fetch_market_proxy_intraday(review_date: str) -> list[dict[str, Any]]:
    start_date = f"{review_date} 09:30:00"
    end_date = f"{review_date} 15:00:00"
    results: list[dict[str, Any]] = []

    for proxy in INTRADAY_REVIEW_PROXIES:
        try:
            frame = ak.index_zh_a_hist_min_em(
                symbol=proxy["symbol"],
                period="1",
                start_date=start_date,
                end_date=end_date,
            )
            results.append({
                "symbol": proxy["symbol"],
                "name": proxy["name"],
                "frame": normalize_intraday_frame(frame),
            })
        except Exception as exc:
            LOGGER.warning("Failed to fetch intraday proxy %s for %s: %s", proxy["symbol"], review_date, exc)

    return results


def evaluate_intraday_window(frame: pd.DataFrame, review_date: str, window_start: str, window_end: str) -> dict[str, Any]:
    review_day = pd.Timestamp(review_date).date()
    same_day = frame.loc[frame["timestamp"].dt.date == review_day].copy()
    if same_day.empty:
        raise ValueError(f"No intraday rows for review date {review_date}")

    open_rows = same_day.loc[same_day["timestamp"].dt.strftime("%H:%M") >= "09:31"]
    if open_rows.empty:
        open_rows = same_day

    open_price = float(open_rows.iloc[0]["price"])
    window_rows = same_day.loc[
        (same_day["timestamp"].dt.strftime("%H:%M") >= window_start)
        & (same_day["timestamp"].dt.strftime("%H:%M") <= window_end)
    ].copy()
    if window_rows.empty:
        raise ValueError(f"No intraday rows inside window {window_start}-{window_end}")

    peak_index = window_rows["price"].idxmax()
    peak_time = window_rows.loc[peak_index, "timestamp"]
    peak_price = float(window_rows.loc[peak_index, "price"])
    after_peak = window_rows.loc[window_rows["timestamp"] >= peak_time]
    trough_price = float(after_peak["price"].min())
    close_price = float(window_rows.iloc[-1]["price"])
    rise_pct = round((peak_price / open_price - 1) * 100, 3) if open_price else 0.0
    fade_pct = round((trough_price / peak_price - 1) * 100, 3) if peak_price else 0.0
    close_from_peak_pct = round((close_price / peak_price - 1) * 100, 3) if peak_price else 0.0
    hit = rise_pct >= 0.25 and (fade_pct <= -0.25 or close_from_peak_pct <= -0.2)

    return {
        "window_start": window_start,
        "window_end": window_end,
        "open_price": round(open_price, 3),
        "peak_price": round(peak_price, 3),
        "peak_time": peak_time.strftime("%H:%M"),
        "window_close_price": round(close_price, 3),
        "rise_pct": rise_pct,
        "fade_pct": fade_pct,
        "close_from_peak_pct": close_from_peak_pct,
        "hit": hit,
    }


def review_warning_window(previous_warning: dict[str, Any], review_date: str) -> dict[str, Any]:
    window_value = find_warning_value(previous_warning, "量化踩踏窗口")
    parsed_window = parse_warning_window(window_value)
    if not parsed_window:
        return {
            "status": "时段未验证",
            "note": "预警文案里没有可解析的时间窗，无法自动验证时段。",
            "proxies": [],
        }

    proxies = fetch_market_proxy_intraday(review_date)
    if len(proxies) < 2:
        return {
            "status": "时段待补",
            "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
            "proxies": [],
            "source_state": "unavailable",
        }

    window_start, window_end = parsed_window
    evaluations: list[dict[str, Any]] = []
    for proxy in proxies:
        try:
            metrics = evaluate_intraday_window(proxy["frame"], review_date, window_start, window_end)
            evaluations.append({
                "symbol": proxy["symbol"],
                "name": proxy["name"],
                **metrics,
            })
        except Exception as exc:
            LOGGER.warning("Failed to evaluate intraday proxy %s for %s: %s", proxy["symbol"], review_date, exc)

    if len(evaluations) < 2:
        return {
            "status": "时段待补",
            "note": "分钟级数据已部分取到，但可用样本不足，时段结果后补。",
            "proxies": evaluations,
            "source_state": "partial",
        }

    hit_count = sum(1 for item in evaluations if item["hit"])
    threshold = math.ceil(len(evaluations) / 2)
    status = "时段命中" if hit_count >= threshold else "时段未命中"
    note = (
        f"{len(evaluations)} 个市场代理里有 {hit_count} 个在 {window_start}-{window_end} 先冲高后回落。"
        if status == "时段命中"
        else f"{len(evaluations)} 个市场代理里只有 {hit_count} 个在 {window_start}-{window_end} 出现明显冲高回落。"
    )
    return {
        "status": status,
        "note": note,
        "proxies": evaluations,
        "source_state": "ready",
    }


def build_risk_summary(stocks: list[dict[str, Any]]) -> dict[str, Any]:
    sorted_stocks = sorted(stocks, key=lambda item: item["trap_score"], reverse=True)
    sample_size = len(sorted_stocks)
    avg_score = average([float(item["trap_score"]) for item in sorted_stocks])
    high_risk_stocks = [item for item in sorted_stocks if float(item["trap_score"]) >= 70]
    watch_stocks = [item for item in sorted_stocks if float(item["trap_score"]) >= 60]

    cohort_size = sample_size if sample_size <= 5 else min(sample_size, max(5, sample_size // 10))
    top_cohort = sorted_stocks[:cohort_size]
    top_cohort_avg = average([float(item["trap_score"]) for item in top_cohort])
    high_risk_ratio = len(high_risk_stocks) / sample_size if sample_size else 0.0
    watch_ratio = len(watch_stocks) / sample_size if sample_size else 0.0
    concentration_spread = top_cohort_avg - avg_score

    gauge_score = round(
        clamp(
            top_cohort_avg * 0.55
            + avg_score * 0.25
            + high_risk_ratio * 100 * 0.20
        )
    )

    if high_risk_ratio >= 0.12 or top_cohort_avg >= 72 or concentration_spread >= 18:
        window_risk = "high"
        window_value = "10:05 - 10:40 是明天最容易冲高回落的时段"
        window_basis = "高风险票数量多，前排平均分也偏高。"
    elif high_risk_ratio >= 0.06 or top_cohort_avg >= 64 or concentration_spread >= 12:
        window_risk = "watch"
        window_value = "10:10 - 10:35 容易出现冲高回落"
        window_basis = "前排已经开始拥挤，追高容错率在下降。"
    else:
        window_risk = "low"
        window_value = "开盘先看承接，10点前不建议急着追高"
        window_basis = "高风险样本不算多，但早盘一致性仍要先观察。"

    return {
        "sample_size": sample_size,
        "avg_trap_score": round(avg_score, 2),
        "high_risk_count": len(high_risk_stocks),
        "high_risk_ratio": round(high_risk_ratio, 4),
        "watch_count": len(watch_stocks),
        "watch_ratio": round(watch_ratio, 4),
        "top_cohort_size": cohort_size,
        "top_cohort_avg_trap_score": round(top_cohort_avg, 2),
        "concentration_spread": round(concentration_spread, 2),
        "gauge_score": gauge_score,
        "window_risk": window_risk,
        "window_value": window_value,
        "window_basis": window_basis,
        "top_stock_code": sorted_stocks[0]["code"],
        "top_stock_name": sorted_stocks[0]["name"],
        "top_financing_pressure_score": round(sorted_stocks[0]["metrics"]["financing_pressure_score"], 2),
    }


def build_daily_warning(stocks: list[dict[str, Any]], generated_at: str, warning_date: str) -> dict[str, Any]:
    summary = build_risk_summary(stocks)
    sorted_stocks = sorted(stocks, key=lambda item: item["trap_score"], reverse=True)
    top_stock = sorted_stocks[0]
    avg_score = summary["avg_trap_score"]
    high_risk_count = summary["high_risk_count"]

    gauge_score = summary["gauge_score"]
    high_risk_regime = (
        gauge_score >= 70
        or (summary["high_risk_count"] >= 12 and summary["top_cohort_avg_trap_score"] >= 72)
    )
    watch_risk_regime = (
        gauge_score >= 45
        or summary["high_risk_count"] >= 6
        or summary["top_cohort_avg_trap_score"] >= 64
    )

    if high_risk_regime:
        gauge_score = max(gauge_score, 72)
        title = "量化高危区，先看承接，再谈进攻。"
        style_warning = "高纯度科技核心股拥挤度偏高，冲高回落风险更大。"
        discipline = "避免追涨，优先确认量价背离后的承接质量。"
    elif watch_risk_regime:
        gauge_score = max(gauge_score, 52)
        title = "量化分歧区，先看换手再定方向。"
        style_warning = "前排龙头与跟风标的分化增大，追高容错率下降。"
        discipline = "轻仓试错，优先保留强趋势与成交结构更干净的样本。"
    else:
        title = "量化偏稳区，可优先观察低吸确认。"
        style_warning = "整体拥挤度不高，但仍需警惕放量假突破。"
        discipline = "分批验证，不做无量上冲时的追价动作。"

    return {
        "date": warning_date,
        "title": title,
        "gauge_score": gauge_score,
        "summary": {
            **summary,
            "gauge_score": gauge_score,
        },
        "prompt": (
            f"当前高风险样本集中在 {top_stock['name']} 等标的，"
            f"前排样本平均陷阱分约 {summary['top_cohort_avg_trap_score']:.1f}，"
            f"高风险票 {high_risk_count} 只，优先防范一致性追高后的回撤兑现。"
        ),
        "signals": [
            {
                "label": "高风险个股数量",
                "value": str(high_risk_count),
                "note": "陷阱分大于等于 70 的样本数",
            },
            {
                "label": "整体追高热度",
                "value": f"{round(min(100, summary['top_cohort_avg_trap_score']))}%",
                "note": f"前 {summary['top_cohort_size']} 只高分样本的平均陷阱分",
            },
            {
                "label": "杠杆资金压力",
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
                "value": summary["window_value"],
            },
            {
                "label": "执行纪律",
                "value": discipline,
            },
        ],
        "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
        "review": {
            "status": "待复盘",
            "note": "",
        },
        "rankings": {
            "avoid_list": [],
            "watch_list": [],
        },
    }


def warning_signature(entry: dict[str, Any]) -> dict[str, Any]:
    return {
        "title": entry.get("title"),
        "gauge_score": entry.get("gauge_score"),
        "summary": entry.get("summary", {}),
        "prompt": entry.get("prompt"),
        "signals": entry.get("signals", []),
        "warnings": entry.get("warnings", []),
        "strategy": entry.get("strategy"),
    }


def is_pending_review(entry: dict[str, Any]) -> bool:
    review = entry.get("review") or {}
    return str(review.get("status", "")).strip() in {"", "待复盘", "观察中"}


def get_warning_summary(entry: dict[str, Any]) -> dict[str, float | int | str]:
    summary = entry.get("summary") or {}

    avg_trap_score = summary.get("avg_trap_score")
    if avg_trap_score in (None, ""):
        prompt = str(entry.get("prompt", ""))
        match = re.search(r"样本平均陷阱分约\s*([0-9]+(?:\.[0-9]+)?)", prompt)
        avg_trap_score = float(match.group(1)) if match else 0.0

    high_risk_count = summary.get("high_risk_count")
    if high_risk_count in (None, ""):
        signals = entry.get("signals", [])
        if signals:
            try:
                high_risk_count = int(str(signals[0].get("value", "0")).strip())
            except (TypeError, ValueError, AttributeError):
                high_risk_count = 0
        else:
            high_risk_count = 0

    top_stock_name = summary.get("top_stock_name")
    if not top_stock_name:
        prompt = str(entry.get("prompt", ""))
        match = re.search(r"集中在\s+(.+?)\s+等标的", prompt)
        top_stock_name = match.group(1) if match else ""

    top_cohort_avg = summary.get("top_cohort_avg_trap_score")
    if top_cohort_avg in (None, ""):
        top_cohort_avg = float(entry.get("gauge_score", 0) or 0.0)

    high_risk_ratio = summary.get("high_risk_ratio")
    if high_risk_ratio in (None, ""):
        sample_size = int(summary.get("sample_size") or 0)
        high_risk_ratio = (int(high_risk_count or 0) / sample_size) if sample_size else 0.0

    window_risk = summary.get("window_risk") or "unknown"

    return {
        "avg_trap_score": float(avg_trap_score or 0.0),
        "high_risk_count": int(high_risk_count or 0),
        "top_stock_name": str(top_stock_name or ""),
        "top_cohort_avg_trap_score": float(top_cohort_avg or 0.0),
        "high_risk_ratio": float(high_risk_ratio or 0.0),
        "window_risk": str(window_risk),
    }


def review_warning_against_market(previous_warning: dict[str, Any], current_warning: dict[str, Any]) -> dict[str, Any]:
    previous_summary = get_warning_summary(previous_warning)
    current_summary = get_warning_summary(current_warning)

    status = "观察中"
    note = (
        f"自动复盘先看方向。次日前排样本平均陷阱分 {current_summary['top_cohort_avg_trap_score']:.1f}，"
        f"高风险样本 {current_summary['high_risk_count']} 只。"
    )

    previous_gauge = float(previous_warning.get("gauge_score", 0) or 0.0)
    expected_risk_on = (
        previous_gauge >= 70
        or previous_summary["top_cohort_avg_trap_score"] >= 68
        or previous_summary["high_risk_ratio"] >= 0.08
    )

    direction_holds = (
        current_summary["top_cohort_avg_trap_score"] >= previous_summary["top_cohort_avg_trap_score"] - 6
        or current_summary["high_risk_count"] >= max(previous_summary["high_risk_count"] - 3, 5)
    )
    risk_cooled = (
        current_summary["top_cohort_avg_trap_score"] <= previous_summary["top_cohort_avg_trap_score"] - 8
        and current_summary["high_risk_count"] <= max(previous_summary["high_risk_count"] - 5, 0)
    )

    if expected_risk_on:
        if direction_holds:
            status = "方向对了"
            note = (
                f"方向判断对了。次日前排样本平均陷阱分 {current_summary['top_cohort_avg_trap_score']:.1f}，"
                f"高风险样本 {current_summary['high_risk_count']} 只，追高风险没有明显退潮。"
                f"10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。"
            )
        elif risk_cooled:
            status = "方向错了"
            note = (
                f"方向判断错了。次日前排样本平均陷阱分回落到 {current_summary['top_cohort_avg_trap_score']:.1f}，"
                f"高风险样本降到 {current_summary['high_risk_count']} 只，原先的高风险判断偏重。"
            )
    else:
        if current_summary["top_cohort_avg_trap_score"] <= previous_summary["top_cohort_avg_trap_score"] + 5 and current_summary["high_risk_count"] <= previous_summary["high_risk_count"] + 3:
            status = "方向对了"
            note = (
                f"方向判断对了。次日前排样本平均陷阱分 {current_summary['top_cohort_avg_trap_score']:.1f}，"
                f"高风险样本 {current_summary['high_risk_count']} 只，风险没有明显失控。"
            )
        elif current_summary["top_cohort_avg_trap_score"] >= previous_summary["top_cohort_avg_trap_score"] + 8 or current_summary["high_risk_count"] >= previous_summary["high_risk_count"] + 5:
            status = "方向错了"
            note = (
                f"方向判断错了。次日前排样本平均陷阱分升到 {current_summary['top_cohort_avg_trap_score']:.1f}，"
                f"高风险样本增到 {current_summary['high_risk_count']} 只，原先偏稳的判断没有跟上风险升温。"
            )

    reviewed_warning = dict(previous_warning)
    existing_review = dict(previous_warning.get("review") or {})
    reviewed_warning["review"] = {
        **existing_review,
        "status": status,
        "note": note,
    }
    return reviewed_warning


def update_previous_warning_review(
    existing_history: list[dict[str, Any]],
    daily_warning: dict[str, Any],
    generated_at_dt: datetime | None = None,
) -> list[dict[str, Any]]:
    reviewed_history: list[dict[str, Any]] = []
    daily_warning_date = datetime.strptime(str(daily_warning["date"]), "%Y-%m-%d")
    expected_previous_date = previous_weekday(daily_warning_date).strftime("%Y-%m-%d")
    market_phase = infer_market_phase(generated_at_dt) if generated_at_dt else "unknown"
    should_review_window = market_phase in {"post_close", "weekend"}

    for entry in existing_history:
        if entry.get("date") == expected_previous_date and is_pending_review(entry):
            reviewed_entry = review_warning_against_market(entry, daily_warning)
            if should_review_window:
                new_window_review = review_warning_window(entry, expected_previous_date)
                previous_window_review = (entry.get("review") or {}).get("window_review") or {}
                if (
                    new_window_review.get("source_state") in {"unavailable", "partial"}
                    and previous_window_review.get("source_state") == "ready"
                ):
                    reviewed_entry["review"]["window_review"] = previous_window_review
                else:
                    reviewed_entry["review"]["window_review"] = new_window_review
            reviewed_history.append(reviewed_entry)
            continue
        reviewed_history.append(entry)

    return reviewed_history


def recover_previous_warning_from_backups(
    existing_history: list[dict[str, Any]],
    backup_payloads: list[dict[str, Any]],
    daily_warning: dict[str, Any],
) -> list[dict[str, Any]]:
    daily_warning_date = datetime.strptime(str(daily_warning["date"]), "%Y-%m-%d")
    expected_previous_date = previous_weekday(daily_warning_date).strftime("%Y-%m-%d")

    if any(item.get("date") == expected_previous_date for item in existing_history):
        return existing_history

    for backup_payload in backup_payloads:
        backup_history = backup_payload.get("warning_history", [])
        for item in backup_history:
            if item.get("date") == expected_previous_date:
                LOGGER.info("Recovered missing warning history for %s from backups", expected_previous_date)
                return existing_history + [item]

    return existing_history


def merge_warning_history(
    existing_payload: dict[str, Any],
    backup_payloads: list[dict[str, Any]],
    daily_warning: dict[str, Any],
    generated_at_dt: datetime | None = None,
) -> list[dict[str, Any]]:
    existing_history = recover_previous_warning_from_backups(
        existing_payload.get("warning_history", []),
        backup_payloads,
        daily_warning,
    )
    existing_history = update_previous_warning_review(existing_history, daily_warning, generated_at_dt)
    filtered_history = [
        item
        for item in existing_history
        if item.get("date") != daily_warning["date"]
    ]
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
    float_market_cap = safe_float(None if spot_row is None else spot_row.get("float_market_cap"))
    margin_balance = safe_float(None if margin_row is None else margin_row.get("margin_balance"))
    margin_buy = safe_float(None if margin_row is None else margin_row.get("margin_buy"))

    business_purity = BUSINESS_PURITY_SCORES.get(code, 50)
    incremental_financing_pressure = compute_financing_pressure_score(margin_balance, margin_buy)
    margin_burden_score = compute_margin_burden_score(margin_balance, float_market_cap)
    financing_pressure = combine_financing_scores(incremental_financing_pressure, margin_burden_score)
    turnover_heat = compute_turnover_heat_score(turnover_rate)
    trap_score = compute_trap_score(business_purity, financing_pressure, turnover_heat)
    margin_balance_ratio = (
        round(margin_balance / float_market_cap, 6)
        if margin_balance and float_market_cap and float_market_cap > 0
        else None
    )

    return {
        "code": code,
        "name": name,
        "margin_date": margin_date,
        "metrics": {
            "business_purity_score": business_purity,
            "margin_balance": margin_balance,
            "margin_buy": margin_buy,
            "float_market_cap": float_market_cap,
            "margin_balance_ratio": margin_balance_ratio,
            "turnover_rate": turnover_rate,
            "financing_pressure_score": round(financing_pressure, 2),
            "incremental_financing_pressure_score": round(incremental_financing_pressure, 2),
            "margin_burden_score": round(margin_burden_score, 2),
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
    backup_payloads = load_backup_payloads(backup_dir)
    spot_frame, spot_source = load_spot_data()
    spot_total_count = len(spot_frame)
    spot_turnover_missing_count = int(spot_frame["turnover_rate"].isna().sum())
    spot_turnover_available_count = spot_total_count - spot_turnover_missing_count
    spot_float_market_cap_missing_count = int(spot_frame["float_market_cap"].isna().sum())
    spot_float_market_cap_available_count = spot_total_count - spot_float_market_cap_missing_count
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

    generated_at_dt = datetime.now(BEIJING_TIME_ZONE)
    generated_at = generated_at_dt.isoformat(timespec="seconds")
    warning_date = infer_warning_target_date(generated_at_dt)
    daily_warning = build_daily_warning(result_stocks, generated_at, warning_date)
    trend_candidate_count = hydrate_breakout_candidate_trends(result_stocks, float(daily_warning.get("gauge_score", 55) or 55), generated_at_dt)
    daily_warning.setdefault("summary", {})["breakout_environment"] = compute_breakout_environment(
        result_stocks,
        float(daily_warning.get("gauge_score", 55) or 55),
    )
    daily_warning["rankings"] = build_daily_rankings(result_stocks, daily_warning, generated_at_dt)
    daily_warning["rankings"]["trend_candidate_count"] = trend_candidate_count
    warning_history = merge_warning_history(existing_payload, backup_payloads, daily_warning, generated_at_dt)
    warning_history = enrich_warning_history_rankings(
        warning_history,
        [
            {
                **existing_payload,
                "daily_warning": daily_warning,
                "stocks": result_stocks,
            },
            existing_payload,
            *backup_payloads,
        ],
    )
    data_freshness = build_data_freshness(generated_at, generated_at_dt, warning_date, margin_dates)

    payload = {
        "generated_at": generated_at,
        "data_freshness": data_freshness,
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
            "financing_pressure_rule": "融资压力 = 增量压力 80% + 存量包袱 20%；其中增量压力分段映射融资买入额 / 融资余额，存量包袱分段映射融资余额 / 流通市值",
            "incremental_financing_rule": "分段映射融资买入额 / 融资余额，避免高杠杆样本过早全部打满分",
            "margin_burden_rule": "轻权重纳入融资余额 / 流通市值，补足历史融资包袱信息",
            "turnover_heat_rule": "min(100, 换手率 * 8)",
            "turnover_z_rule": "爆发分额外比较当前换手率相对近 20 日均值的偏离程度，优先保留相对放量但不过热的样本",
            "gauge_score_rule": "前排高分样本均分 * 0.55 + 全样本均分 * 0.25 + 高风险样本占比 * 100 * 0.20",
            "watch_ranking_rule": "爆发榜先看题材纯度、相对换手抬升、融资不过热和位置激活度，再叠加近 3 到 10 日趋势确认；环境偏弱时会自动抬高趋势门槛。",
        },
        "spot_data_health": {
            "source": spot_source,
            "total_rows": spot_total_count,
            "turnover_rate_available_rows": spot_turnover_available_count,
            "turnover_rate_missing_rows": spot_turnover_missing_count,
            "turnover_rate_missing_ratio": round(
                spot_turnover_missing_count / spot_total_count, 4
            ) if spot_total_count else None,
            "float_market_cap_available_rows": spot_float_market_cap_available_count,
            "float_market_cap_missing_rows": spot_float_market_cap_missing_count,
            "float_market_cap_missing_ratio": round(
                spot_float_market_cap_missing_count / spot_total_count, 4
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
