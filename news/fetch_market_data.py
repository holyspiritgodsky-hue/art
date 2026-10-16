#!/usr/bin/env python3
"""Probe and save daily A-share sector, sentiment, overseas, commodity, and FX data.

Requires AkShare: python -m pip install akshare
Run: python fetch_market_data.py
Optional: python fetch_market_data.py --output market_data_probe.json
"""

from __future__ import annotations

import argparse
import json
import math
import sys
from datetime import date, datetime, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo

try:
    import akshare as ak
    import pandas as pd
except ImportError as exc:
    raise SystemExit(
        "缺少依赖。请运行：python -m pip install akshare"
    ) from exc


SHANGHAI = ZoneInfo("Asia/Shanghai")
ROOT = Path(__file__).resolve().parent


def json_value(value):
    """Convert pandas/numpy values to strict JSON-compatible Python values."""
    if value is None:
        return None
    if hasattr(value, "item"):
        value = value.item()
    if pd.isna(value):
        return None
    if isinstance(value, (date, datetime, pd.Timestamp)):
        return value.isoformat()
    if isinstance(value, float) and not math.isfinite(value):
        return None
    if isinstance(value, (str, int, float, bool)):
        return value
    return str(value)


def records(frame: pd.DataFrame, limit: int = 3, newest: bool = True) -> list[dict]:
    selected = frame.tail(limit) if newest else frame.head(limit)
    return [
        {str(key): json_value(value) for key, value in row.items()}
        for row in selected.to_dict(orient="records")
    ]


def fetch_frame(callable_, *, limit: int = 3) -> dict:
    try:
        frame = callable_()
        if not isinstance(frame, pd.DataFrame):
            raise TypeError(f"预期 DataFrame，实际为 {type(frame).__name__}")
        return {
            "status": "ok" if not frame.empty else "empty",
            "row_count": len(frame),
            "columns": [str(column) for column in frame.columns],
            "latest": records(frame, limit=limit),
        }
    except Exception as exc:
        return {
            "status": "error",
            "error": f"{type(exc).__name__}: {exc}",
        }


def fetch_market_frame(callable_, date_column: str, close_column: str) -> dict:
    try:
        frame = callable_()
        if not isinstance(frame, pd.DataFrame):
            raise TypeError(f"预期 DataFrame，实际为 {type(frame).__name__}")
        result = {
            "status": "ok" if not frame.empty else "empty",
            "row_count": len(frame),
            "columns": [str(column) for column in frame.columns],
            "latest": records(frame, limit=3),
        }
        if not frame.empty:
            result["market_summary"] = to_daily_change(
                frame, date_column, close_column
            )
        return result
    except Exception as exc:
        return {
            "status": "error",
            "error": f"{type(exc).__name__}: {exc}",
        }


def to_daily_change(frame: pd.DataFrame, date_column: str, close_column: str) -> dict:
    if frame.empty or date_column not in frame or close_column not in frame:
        raise ValueError(f"缺少可用的 {date_column}/{close_column} 行情字段")
    clean = frame.copy()
    clean[date_column] = pd.to_datetime(clean[date_column], errors="coerce")
    clean[close_column] = pd.to_numeric(clean[close_column], errors="coerce")
    clean = clean.dropna(subset=[date_column, close_column]).sort_values(date_column)
    if clean.empty:
        raise ValueError("没有有效的日期和收盘价")
    latest = clean.iloc[-1]
    previous = clean.iloc[-2] if len(clean) > 1 else None
    change_pct = None
    if previous is not None and previous[close_column]:
        change_pct = round(
            (latest[close_column] / previous[close_column] - 1) * 100, 4
        )
    result = {
        "date": latest[date_column].date().isoformat(),
        "close": json_value(latest[close_column]),
        "change_pct": change_pct,
    }
    for column in ("成交额", "成交量", "amount", "volume", "settlement", "settle"):
        if column in clean.columns:
            result[column] = json_value(latest[column])
    if "成交额" in clean.columns and previous is not None:
        prior_amount = pd.to_numeric(pd.Series([previous["成交额"]]), errors="coerce").iloc[0]
        amount = pd.to_numeric(pd.Series([latest["成交额"]]), errors="coerce").iloc[0]
        if pd.notna(prior_amount) and prior_amount:
            result["amount_change_pct"] = round((amount / prior_amount - 1) * 100, 4)
    return result


def previous_dates(days: int = 10):
    current = datetime.now(SHANGHAI).date()
    for offset in range(days + 1):
        candidate = current - timedelta(days=offset)
        if candidate.weekday() < 5:
            yield candidate


def fetch_limit_up_pool() -> tuple[date | None, pd.DataFrame, list[dict]]:
    attempts = []
    for candidate in previous_dates():
        date_arg = candidate.strftime("%Y%m%d")
        try:
            frame = ak.stock_zt_pool_em(date=date_arg)
            if not isinstance(frame, pd.DataFrame):
                raise TypeError(f"预期 DataFrame，实际为 {type(frame).__name__}")
            attempts.append({"date": date_arg, "status": "ok", "rows": len(frame)})
            if not frame.empty:
                return candidate, frame, attempts
        except Exception as exc:
            attempts.append({
                "date": date_arg,
                "status": "error",
                "error": f"{type(exc).__name__}: {exc}",
            })
    return None, pd.DataFrame(), attempts


def fetch_industry_market() -> dict:
    metadata = ak.sw_index_first_info()
    if not isinstance(metadata, pd.DataFrame) or metadata.empty:
        raise RuntimeError("申万一级行业列表为空")

    items = []
    failures = []
    for _, industry in metadata.iterrows():
        code = str(industry["行业代码"]).split(".")[0]
        name = str(industry["行业名称"])
        try:
            history = ak.index_hist_sw(symbol=code, period="day")
            summary = to_daily_change(history, "日期", "收盘")
            summary.update({
                "code": code,
                "industry": name,
                "history_rows": len(history),
                "amount_unit": "接口原始单位，需以来源文档确认",
            })
            items.append(summary)
        except Exception as exc:
            failures.append({
                "code": code,
                "industry": name,
                "error": f"{type(exc).__name__}: {exc}",
            })
    dates = [item["date"] for item in items if item.get("date")]
    latest_market_date = max(dates) if dates else None
    age_days = (
        (datetime.now(SHANGHAI).date() - date.fromisoformat(latest_market_date)).days
        if latest_market_date
        else None
    )
    return {
        "status": "ok" if items else "error",
        "industry_count": len(items),
        "failed_count": len(failures),
        "latest_market_date": latest_market_date,
        "latest_data_age_calendar_days": age_days,
        "items": items,
        "failures": failures,
        "notes": [
            "该接口含指数涨跌、成交量、成交额，不提供行业换手率。",
            "SWS 行情接口可能存在发布延迟，使用前应检查 latest_market_date。",
        ],
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="试取 A 股每日分析所需行情数据")
    parser.add_argument(
        "--output",
        default=str(ROOT / "market_data_probe.json"),
        help="JSON 输出文件路径（默认 market_data_probe.json）",
    )
    args = parser.parse_args()

    now = datetime.now(SHANGHAI)
    report = {
        "generated_at": now.isoformat(timespec="seconds"),
        "timezone": "Asia/Shanghai",
        "source_library": f"AkShare {getattr(ak, '__version__', 'unknown')}",
        "first_tier": {},
        "second_tier": {},
        "limitations": [],
    }

    try:
        report["first_tier"]["industry_market"] = fetch_industry_market()
    except Exception as exc:
        report["first_tier"]["industry_market"] = {
            "status": "error",
            "error": f"{type(exc).__name__}: {exc}",
        }

    try:
        data = ak.stock_sector_fund_flow_rank()
        if not isinstance(data, pd.DataFrame):
            raise TypeError(f"预期 DataFrame，实际为 {type(data).__name__}")
        sw_info = ak.sw_index_first_info()
        names = set(sw_info["行业名称"].astype(str))
        filtered = data[data["名称"].astype(str).isin(names)]
        fund_flow = {
            "status": "ok" if not data.empty else "empty",
            "row_count": len(data),
            "columns": [str(column) for column in data.columns],
            "sw_level1_count": len(filtered),
            "sw_level1_latest": records(filtered, limit=31),
        }
    except Exception as exc:
        fund_flow = {
            "status": "error",
            "error": f"{type(exc).__name__}: {exc}",
        }
    report["first_tier"]["industry_fund_flow"] = fund_flow

    northbound = fetch_frame(lambda: ak.stock_hsgt_fund_flow_summary_em(), limit=8)
    northbound["notes"] = [
        "本次返回北向记录的成交净买额为 0；需先核实交易状态和披露口径，不能未经校验直接当作有效资金信号。"
    ]
    report["first_tier"]["northbound_flow"] = northbound

    as_of, limit_up, attempts = fetch_limit_up_pool()
    report["first_tier"]["market_sentiment"] = {
        "status": "ok" if as_of else "unavailable",
        "date": as_of.isoformat() if as_of else None,
        "limit_up_count": len(limit_up),
        "max_consecutive_boards": (
            int(pd.to_numeric(limit_up["连板数"], errors="coerce").max())
            if not limit_up.empty and "连板数" in limit_up
            else None
        ),
        "top_limit_up_stocks": (
            records(limit_up.sort_values("连板数", ascending=False), limit=10, newest=False)
            if not limit_up.empty
            else []
        ),
        "limit_up_query_attempts": attempts,
    }
    if as_of:
        broken = fetch_frame(
            lambda: ak.stock_zt_pool_zbgc_em(date=as_of.strftime("%Y%m%d")),
            limit=10,
        )
        report["first_tier"]["market_sentiment"]["broken_boards"] = broken
        if broken.get("status") in ("ok", "empty"):
            count = broken.get("row_count", 0)
            total = count + len(limit_up)
            report["first_tier"]["market_sentiment"]["approx_broken_board_rate_pct"] = (
                round(count / total * 100, 2) if total else None
            )
            report["first_tier"]["market_sentiment"]["broken_board_rate_note"] = (
                "按炸板池条数 /（炸板池条数 + 涨停池条数）粗略计算，不等同于逐次封板成功率。"
            )
    else:
        report["first_tier"]["market_sentiment"]["broken_boards"] = {
            "status": "skipped",
            "reason": "近 10 个工作日均未取得涨停池数据",
        }

    overseas = {}
    for key, symbol in (
        ("sp500", ".INX"),
        ("nasdaq_composite", ".IXIC"),
        ("dow_jones", ".DJI"),
        ("nasdaq100", ".NDX"),
        ("philadelphia_semiconductor", ".SOX"),
        ("nasdaq_china_golden_dragon", ".HXC"),
    ):
        overseas[key] = fetch_market_frame(
            lambda symbol=symbol: ak.index_us_stock_sina(symbol=symbol),
            "date",
            "close",
        )

    overseas["hang_seng_tech"] = fetch_market_frame(
        lambda: ak.stock_hk_index_daily_em(symbol="HSTECF2L"),
        "date",
        "latest",
    )
    overseas["a50_futures"] = {
        "status": "not_available",
        "detail": "当前 AkShare 外盘期货代码列表中未发现 A50；CN 代码实测不可用。",
    }
    report["second_tier"]["overnight_markets"] = overseas

    commodities = {}
    for key, symbol in (
        ("crude_oil", "CL"),
        ("copper", "HG"),
        ("gold", "GC"),
    ):
        commodities[key] = fetch_market_frame(
            lambda symbol=symbol: ak.futures_foreign_hist(symbol=symbol),
            "date",
            "close",
        )

    commodities["lithium_carbonate"] = fetch_market_frame(
        lambda: ak.futures_zh_daily_sina(symbol="lc0"),
        "date",
        "close",
    )
    report["second_tier"]["commodities"] = commodities

    start = (now.date() - timedelta(days=14)).strftime("%Y%m%d")
    end = now.date().strftime("%Y%m%d")
    report["second_tier"]["usd_cny"] = fetch_frame(
        lambda: ak.currency_boc_sina(
            symbol="\u7f8e\u5143", start_date=start, end_date=end
        ),
        limit=10,
    )

    report["limitations"].extend([
        "数据来自第三方网页接口，可能限流、改字段或短时不可用；失败项会明确标记，不应静默沿用旧值。",
        "该脚本只采集与检查可用性，不生成板块预测，也不提取新闻。",
        "涨停池自动从最近的工作日向前查找非空数据；每日任务仍应显示其实际数据日期。",
    ])

    output = Path(args.output).expanduser().resolve()
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(
        json.dumps(report, ensure_ascii=False, indent=2, allow_nan=False),
        encoding="utf-8",
    )
    print(f"已写入：{output}")
    print(f"生成时间：{report['generated_at']}")
    print(
        "申万行业行情："
        f"{report['first_tier'].get('industry_market', {}).get('industry_count', 0)}/31"
    )
    for group_name, group in (
        ("第一梯队", report["first_tier"]),
        ("隔夜市场", report["second_tier"].get("overnight_markets", {})),
        ("大宗商品", report["second_tier"].get("commodities", {})),
    ):
        print(f"\n{group_name}")
        for name, item in group.items():
            print(f"  {name}: {item.get('status', 'ok')} ({item.get('row_count', item.get('industry_count', '—'))})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
