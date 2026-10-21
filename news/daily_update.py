#!/usr/bin/env python3
"""Build the real daily forecast snapshot and review prior forecasts."""

from __future__ import annotations

import argparse
import json
import math
import os
import socket
import sys
import time
from datetime import date, datetime, time as day_time, timedelta
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen
from zoneinfo import ZoneInfo

import akshare as ak
import pandas as pd


ROOT = Path(__file__).resolve().parent
DATA_PATH = ROOT / "data.json"
HISTORY_PATH = ROOT / "history.json"
SHANGHAI = ZoneInfo("Asia/Shanghai")
NEWS_CUTOFF = day_time(8, 30)
NEWS_START = day_time(15, 0)
MAX_NEWS = 60
TOP_N = 3
BACKFILL_COUNT = 5
BACKFILL_SEARCH_WINDOW = 20
INDEX_SYMBOLS = {
    "S&P 500": ".INX",
    "纳斯达克": ".IXIC",
    "费城半导体": ".SOX",
    "纳斯达克中国金龙": ".HXC",
}
FUTURE_SYMBOLS = {
    "原油": "CL",
    "铜": "HG",
    "黄金": "GC",
    "碳酸锂": "lc0",
}
WEIGHTS = {
    "news": 0.30,
    "momentum": 0.20,
    "fund_flow": 0.20,
    "volume": 0.10,
    "overnight": 0.20,
}
NEWS_SECTOR_RULES = (
    ("电子", ("半导体", "芯片", "集成电路", "电子元器件")),
    ("计算机", ("人工智能", "算力", "数据中心", "云计算", "软件", "数字化", "数智化")),
    ("汽车", ("新能源汽车", "汽车产业", "汽车产销量")),
    ("电力设备", ("光伏", "风电", "储能", "电网", "锂电池", "充电桩")),
    ("机械设备", ("机器人", "工业母机", "高端装备", "工程机械")),
    ("医药生物", ("医药", "医疗", "药品", "生物医药", "医保", "创新药")),
    ("房地产", ("房地产", "住房", "楼市", "购房")),
    ("社会服务", ("旅游", "景区", "文旅", "酒店", "出游")),
    ("农林牧渔", ("农业", "粮食", "生猪", "水产", "种业", "农产品")),
    ("建筑装饰", ("基建", "铁路建设", "建筑施工", "工程建设", "水利工程")),
    ("有色金属", ("有色金属", "铜", "铝", "稀土", "黄金")),
    ("石油石化", ("原油", "石油", "天然气", "供油")),
    ("交通运输", ("航运", "港口", "口岸", "航空", "铁路运输", "物流", "货运", "客流")),
    ("银行", ("银行", "贷款", "信贷", "存款")),
    ("非银金融", ("证券", "券商", "保险")),
    ("传媒", ("影视", "游戏", "文化传媒", "出版")),
    ("通信", ("通信", "5G", "6G", "光纤")),
    ("公用事业", ("电力供应", "电价", "水电")),
    ("钢铁", ("钢铁", "粗钢")),
    ("煤炭", ("煤炭", "煤矿")),
    ("建筑材料", ("水泥", "玻璃")),
)
NEWS_MARKET_TERMS = (
    "A股", "股票", "股市", "证券", "资本市场", "财经", "金融", "央行",
    "货币政策", "人民币", "汇率", "利率", "降准", "降息", "债券",
    "财政", "地方政府债务", "GDP", "CPI", "PPI", "PMI", "社会融资",
    "外贸", "进出口", "出口", "进口", "消费", "经济运行", "经济回升",
    "经济增长", "就业", "固定资产投资", "民间投资", "制造业", "工业",
    "产业链", "重大项目", "新质生产力",
)
NEWS_RELEVANCE_TERMS = set(NEWS_MARKET_TERMS).union(
    term for _, terms in NEWS_SECTOR_RULES for term in terms
)
NEWS_POSITIVE_TERMS = (
    "增长", "提升", "扩大", "加快", "建成", "投产", "落地", "突破",
    "创新高", "支持", "推进", "推动", "加速", "改善", "增加", "上涨",
    "上升", "恢复", "飙升", "大涨", "涨价", "订单", "量产", "中标",
    "补贴", "放宽", "利好", "回购", "增持", "降息", "降准",
)
NEWS_NEGATIVE_TERMS = (
    "下降", "下滑", "回落", "收缩", "减少", "亏损", "下跌", "下调",
    "限制", "暂停", "受阻", "收紧", "削减", "中断", "暴跌", "大跌",
    "处罚", "立案", "减持", "制裁", "关税", "召回", "违约", "退市",
)
NEWS_POLICY_TERMS = (
    "国务院", "央行", "证监会", "发改委", "工信部", "财政部", "商务部",
    "国家能源局", "国家药监局", "金融监管总局", "住建部", "政策", "规划",
    "意见", "方案", "补贴", "降准", "降息", "新规",
)


def now_shanghai() -> datetime:
    return datetime.now(SHANGHAI)


def as_json(value: Any) -> Any:
    if value is None:
        return None
    if hasattr(value, "item"):
        value = value.item()
    if pd.isna(value):
        return None
    if isinstance(value, (pd.Timestamp, datetime, date)):
        return value.isoformat()
    if isinstance(value, float) and not math.isfinite(value):
        return None
    if isinstance(value, (str, int, float, bool)):
        return value
    return str(value)


def read_json(path: Path, default: Any) -> Any:
    if not path.exists():
        return default
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: Path, value: Any) -> None:
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(
        json.dumps(value, ensure_ascii=False, indent=2, allow_nan=False) + "\n",
        encoding="utf-8",
    )
    temporary.replace(path)


def request_deepseek(messages: list[dict[str, str]]) -> dict:
    api_key = os.environ.get("DEEPSEEK_API_KEY")
    if not api_key:
        raise RuntimeError(
            "缺少 DEEPSEEK_API_KEY。请将密钥设置为 GitHub Actions repository secret。"
        )
    body = json.dumps({
        "model": os.environ.get("DEEPSEEK_MODEL", "deepseek-chat"),
        "messages": messages,
        "temperature": 0.1,
        "response_format": {"type": "json_object"},
    }).encode("utf-8")
    request = Request(
        "https://api.deepseek.com/chat/completions",
        data=body,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urlopen(request, timeout=120) as response:
            result = json.loads(response.read().decode("utf-8"))
    except HTTPError as exc:
        body_text = exc.read().decode("utf-8", errors="replace")[:1000]
        raise RuntimeError(f"DeepSeek API 返回 HTTP {exc.code}: {body_text}") from exc
    except (TimeoutError, URLError) as exc:
        raise RuntimeError(f"DeepSeek API 请求失败：{exc}") from exc
    choices = result.get("choices") or []
    if not choices:
        raise RuntimeError("DeepSeek API 未返回 choices")
    content = choices[0].get("message", {}).get("content")
    if not content:
        raise RuntimeError("DeepSeek API 未返回 JSON 内容")
    try:
        return json.loads(content)
    except json.JSONDecodeError as exc:
        raise RuntimeError("DeepSeek API 返回内容不是有效 JSON") from exc


def get_trade_dates() -> list[date]:
    frame = ak.tool_trade_date_hist_sina()
    if "trade_date" not in frame.columns:
        raise RuntimeError("交易日历接口缺少 trade_date 字段")
    if pd.api.types.is_numeric_dtype(frame["trade_date"]):
        dates = pd.to_datetime(frame["trade_date"], unit="ms", errors="coerce")
    else:
        dates = pd.to_datetime(frame["trade_date"], errors="coerce")
    return sorted({value.date() for value in dates.dropna()})


def upcoming_trade_date(today: date, trading_dates: list[date]) -> date:
    for candidate in trading_dates:
        if candidate >= today:
            return candidate
    raise RuntimeError("交易日历中没有当前或未来的交易日")


def previous_trade_date(target: date, trading_dates: list[date]) -> date:
    candidates = [candidate for candidate in trading_dates if candidate < target]
    if not candidates:
        raise RuntimeError(f"交易日历中找不到 {target} 之前的交易日")
    return candidates[-1]


def text_value(value: Any) -> str:
    if value is None or pd.isna(value):
        return ""
    return str(value).strip()


def collect_news(
    forecast_date: date,
    trading_dates: list[date],
) -> tuple[list[dict], list[dict]]:
    start_date = previous_trade_date(forecast_date, trading_dates)
    start = datetime.combine(start_date, NEWS_START, SHANGHAI)
    end = datetime.combine(forecast_date, NEWS_CUTOFF, SHANGHAI)
    feed_statuses = []
    news_by_key = {}
    feed_specs = (
        ("东方财富", ak.stock_info_global_em, "标题", "摘要", "发布时间", "链接"),
        ("财联社", ak.stock_info_global_cls, "标题", "内容", "发布时间", None),
        ("新浪财经", ak.stock_info_global_sina, None, "内容", "时间", None),
        ("同花顺", ak.stock_info_global_ths, "标题", "内容", "发布时间", "链接"),
    )
    for source, fetch, title_column, content_column, timestamp_column, url_column in feed_specs:
        try:
            frame = fetch()
            required = {content_column, timestamp_column}
            if title_column:
                required.add(title_column)
            if source == "财联社":
                required.add("发布日期")
            if not required.issubset(frame.columns):
                raise RuntimeError(
                    f"缺少字段 {sorted(required - set(frame.columns))}"
                )
            matched_count = 0
            for index, row in frame.iterrows():
                if source == "财联社":
                    published_date = pd.to_datetime(
                        row.get("发布日期"), errors="coerce"
                    )
                    published_time = pd.to_datetime(
                        str(row.get(timestamp_column)), errors="coerce"
                    )
                    if not pd.isna(published_date) and not pd.isna(published_time):
                        published = pd.Timestamp(datetime.combine(
                            published_date.date(),
                            published_time.time(),
                        ))
                    else:
                        published = pd.NaT
                else:
                    published = pd.to_datetime(
                        row.get(timestamp_column), errors="coerce"
                    )
                if pd.isna(published):
                    continue
                if published.tzinfo is None:
                    published = published.tz_localize(SHANGHAI)
                else:
                    published = published.tz_convert(SHANGHAI)
                published_at = published.to_pydatetime()
                if not start <= published_at <= end:
                    continue
                title = text_value(row.get(title_column)) if title_column else ""
                summary = text_value(row.get(content_column))
                if not title and not summary:
                    continue
                url = text_value(row.get(url_column)) if url_column else ""
                key = url or f"{published_at.isoformat()}:{title or summary[:120]}"
                news_by_key[key] = {
                    "id": f"{source}:{index}",
                    "title": title or summary[:120],
                    "summary": summary[:1200],
                    "published_at": published_at.isoformat(timespec="seconds"),
                    "source": source,
                    "url": url,
                }
                matched_count += 1
            feed_statuses.append({
                "name": f"{source}新闻",
                "status": "ok" if matched_count else "empty",
                "count": matched_count,
                "as_of": end.isoformat(timespec="minutes"),
            })
        except Exception as exc:
            feed_statuses.append({
                "name": f"{source}新闻",
                "status": "error",
                "detail": f"{type(exc).__name__}: {exc}",
            })
    if all(item["status"] == "error" for item in feed_statuses):
        details = "; ".join(
            f"{item['name']}: {item['detail']}" for item in feed_statuses
        )
        raise RuntimeError(f"所有新闻源均获取失败：{details}")
    news = sorted(
        news_by_key.values(),
        key=lambda item: item["published_at"],
        reverse=True,
    )
    return news[:MAX_NEWS], feed_statuses


def collect_archived_news(
    start_date: date,
    end_date: date,
    sector_names: list[str],
) -> tuple[list[dict], dict]:
    news = []
    failures = []
    dates_with_news = []
    archive_date = start_date
    while archive_date < end_date:
        try:
            frame = ak.news_cctv(date=archive_date.strftime("%Y%m%d"))
            required = {"title", "content"}
            if not required.issubset(frame.columns):
                raise RuntimeError(
                    f"央视新闻归档缺少字段 {sorted(required - set(frame.columns))}"
                )
            date_news = []
            for index, row in frame.iterrows():
                title = text_value(row.get("title"))
                content = text_value(row.get("content"))
                if not title and not content:
                    continue
                if not any(term in title for term in NEWS_RELEVANCE_TERMS):
                    continue
                text = f"{title} {content}"
                positive = sum(text.count(term) for term in NEWS_POSITIVE_TERMS)
                negative = sum(text.count(term) for term in NEWS_NEGATIVE_TERMS)
                impact = 1 if positive > negative else -1 if negative > positive else 0
                mapped_sectors = [
                    {"name": name, "impact": impact}
                    for name, terms in NEWS_SECTOR_RULES
                    if name in sector_names and any(term in title for term in terms)
                ][:2]
                category = (
                    "产业" if mapped_sectors
                    else "政策" if any(term in title for term in ("政策", "方案", "意见", "财政"))
                    else "宏观"
                )
                excerpt = content.split("。", 1)[0].strip() or title
                if len(excerpt) > 120:
                    excerpt = excerpt[:117] + "…"
                analysis = (
                    f"新闻摘录：{excerpt}；"
                    + (
                        "行业方向由明确关键词规则映射，仅作线索。"
                        if mapped_sectors
                        else "未识别到足够明确的申万一级行业影响。"
                    )
                )
                relevance_rank = len(date_news)
                date_news.append({
                    "id": f"cctv:{archive_date.isoformat()}:{index}",
                    "title": title or excerpt,
                    "summary": content[:1200],
                    "published_at": "",
                    "archive_date": archive_date.isoformat(),
                    "source": "央视新闻联播",
                    "url": "",
                    "importance": (
                        5 if relevance_rank < 2
                        else 4 if relevance_rank < 6
                        else 3 if relevance_rank < 10
                        else 2
                    ),
                    "brief": excerpt,
                    "analysis": analysis,
                    "category": category,
                    "sectors": mapped_sectors,
                })
            if date_news:
                dates_with_news.append(archive_date.isoformat())
                news.extend(date_news)
        except Exception as exc:
            failures.append(
                f"{archive_date.isoformat()}: {type(exc).__name__}: {exc}"
            )
        archive_date += timedelta(days=1)

    news.sort(
        key=lambda item: (item["archive_date"], item["importance"]),
        reverse=True,
    )
    detail = (
        "仅保留标题命中明确财经、宏观或申万行业关键词的条目；"
        "央视《新闻联播》按节目日期提供，无精确发布时间或链接；行业方向由关键词规则映射，"
        "不是完整财经新闻源或DeepSeek分析。"
    )
    if failures:
        detail += f" 部分日期获取失败：{'；'.join(failures[:3])}"
    status = (
        "partial" if news and failures
        else "ok" if news
        else "error" if failures
        else "empty"
    )
    source = {
        "name": "市场相关新闻（央视新闻联播）",
        "status": status,
        "as_of": (end_date - timedelta(days=1)).isoformat(),
        "count": len(news),
        "detail": detail,
    }
    return news[:MAX_NEWS], source


def analyze_news(news: list[dict], sectors: list[str]) -> list[dict]:
    if not news:
        return []
    allowed = set(sectors)
    prompt_news = [
        {
            "id": item["id"],
            "title": item["title"],
            "summary": item["summary"],
            "published_at": item["published_at"],
            "url": item["url"],
        }
        for item in news
    ]
    result = request_deepseek([
        {
            "role": "system",
            "content": (
                "你是新闻结构化标注器，不预测股价、不补充新闻以外事实。"
                "只分析输入给出的新闻。输出 JSON 对象，格式为 "
                '{"items":[{"id":"原新闻id","importance":1,'
                '"brief":"不超过45字的客观摘要","analysis":"不超过70字的传导逻辑，'
                '可写影响不确定","category":"政策/业绩/产业/宏观/外盘/商品/其他",'
                '"sectors":[{"name":"申万一级行业中文名称","impact":-1或0或1}]}]}。'
                "行业必须严格使用以下名单；无法可靠映射时 sectors 为空。"
                "importance 只能是1至5，impact只表示该新闻方向，不代表收益概率。"
                "不得改写新闻ID，不得为一条新闻推断多个无关行业。"
            ),
        },
        {
            "role": "user",
            "content": json.dumps({
                "allowed_sw_level_1_sectors": sectors,
                "news": prompt_news,
            }, ensure_ascii=False),
        },
    ])
    returned = result.get("items")
    if not isinstance(returned, list):
        raise RuntimeError("DeepSeek 新闻分析结果缺少 items 数组")
    original_by_id = {item["id"]: item for item in news}
    analyzed = []
    seen = set()
    for item in returned:
        if not isinstance(item, dict):
            continue
        news_id = str(item.get("id", ""))
        original = original_by_id.get(news_id)
        if original is None or news_id in seen:
            continue
        seen.add(news_id)
        sectors_out = []
        for sector in item.get("sectors", []):
            if not isinstance(sector, dict):
                continue
            name = str(sector.get("name", "")).strip()
            impact = sector.get("impact")
            if name in allowed and impact in (-1, 0, 1):
                sectors_out.append({"name": name, "impact": impact})
        try:
            importance = max(1, min(5, int(item.get("importance", 1))))
        except (TypeError, ValueError):
            importance = 1
        analyzed.append({
            **original,
            "importance": importance,
            "brief": str(item.get("brief") or original["title"])[:180],
            "analysis": str(item.get("analysis") or "暂无明确行业传导逻辑")[:240],
            "category": str(item.get("category") or "其他")[:20],
            "sectors": sectors_out,
        })
    if not analyzed:
        raise RuntimeError("DeepSeek 新闻分析没有返回可校验的新闻")
    return analyzed


def analyze_news_by_rules(news: list[dict], sectors: list[str]) -> list[dict]:
    allowed = set(sectors)
    analyzed = []
    for original in news:
        title = text_value(original.get("title"))
        if not title or not any(term in title for term in NEWS_RELEVANCE_TERMS):
            continue
        summary = text_value(original.get("summary"))
        # 标题权重高于正文，避免正文里的泛化词稀释方向判断
        positive = (
            sum(title.count(term) for term in NEWS_POSITIVE_TERMS) * 3
            + sum(summary.count(term) for term in NEWS_POSITIVE_TERMS)
        )
        negative = (
            sum(title.count(term) for term in NEWS_NEGATIVE_TERMS) * 3
            + sum(summary.count(term) for term in NEWS_NEGATIVE_TERMS)
        )
        impact = 1 if positive > negative else -1 if negative > positive else 0
        mapped_sectors = [
            {"name": name, "impact": impact}
            for name, terms in NEWS_SECTOR_RULES
            if name in allowed and any(term in title for term in terms)
        ][:2]
        is_policy = any(term in title for term in NEWS_POLICY_TERMS)
        # 重要性：政策/权威部门信号最高；仅个股股价类消息封顶为一般
        if mapped_sectors and is_policy:
            importance = 5
        elif mapped_sectors and impact:
            importance = 4
        elif mapped_sectors or is_policy:
            importance = 3
        else:
            importance = 2
        if "股价" in title and not is_policy:
            importance = min(importance, 3)
        brief = summary.split("。", 1)[0].strip() or title
        direction = {1: "偏利好", -1: "偏利空", 0: "方向不明"}[impact]
        analyzed.append({
            **original,
            "importance": importance,
            "brief": brief[:180],
            "analysis": (
                f"{'政策信号，' if is_policy else ''}标题关键词指向"
                f"{'、'.join(item['name'] for item in mapped_sectors)}，{direction}。"
                if mapped_sectors
                else "市场相关标题，未识别到明确行业。"
            ),
            "category": (
                "产业" if mapped_sectors
                else "政策" if any(term in title for term in ("政策", "方案", "意见", "财政"))
                else "宏观"
            ),
            "sectors": mapped_sectors,
        })
    return analyzed


def collect_sector_market(sector_info: pd.DataFrame) -> tuple[list[dict], list[dict]]:
    items = []
    failures = []
    for _, row in sector_info.iterrows():
        code = str(row["行业代码"]).split(".")[0]
        name = str(row["行业名称"])
        last_error = None
        frame = None
        for attempt in range(2):
            try:
                frame = ak.index_hist_sw(symbol=code, period="day")
                break
            except Exception as exc:
                last_error = exc
                if attempt == 0:
                    time.sleep(0.5)
        if frame is None or frame.empty:
            failures.append({
                "name": name,
                "error": f"{type(last_error).__name__}: {last_error}",
            })
            continue
        frame = frame.copy()
        frame["日期"] = pd.to_datetime(frame["日期"], errors="coerce")
        for column in ("收盘", "开盘", "成交额", "成交量"):
            if column in frame:
                frame[column] = pd.to_numeric(frame[column], errors="coerce")
        frame = frame.dropna(subset=["日期", "收盘"]).sort_values("日期")
        if frame.empty:
            failures.append({"name": name, "error": "历史行情没有有效记录"})
            continue
        latest = frame.iloc[-1]
        previous = frame.iloc[-2] if len(frame) > 1 else None
        prior5 = frame.iloc[-6] if len(frame) > 5 else None
        daily_return = None
        return_5d = None
        if previous is not None and previous["收盘"]:
            daily_return = float(latest["收盘"] / previous["收盘"] - 1) * 100
        if prior5 is not None and prior5["收盘"]:
            return_5d = float(latest["收盘"] / prior5["收盘"] - 1) * 100
        volume_ratio = None
        if "成交额" in frame and len(frame) >= 6:
            base_amount = frame["成交额"].iloc[-6:-1].mean()
            if pd.notna(base_amount) and base_amount:
                volume_ratio = float(latest["成交额"] / base_amount)
        items.append({
            "code": code,
            "name": name,
            "date": latest["日期"].date().isoformat(),
            "close": as_json(latest["收盘"]),
            "open": as_json(latest["开盘"]) if "开盘" in frame else None,
            "change_pct": round(daily_return, 4) if daily_return is not None else None,
            "return_5d_pct": round(return_5d, 4) if return_5d is not None else None,
            "volume_ratio_5d": round(volume_ratio, 4) if volume_ratio is not None else None,
            "amount": as_json(latest["成交额"]) if "成交额" in frame else None,
        })
    return items, failures


def percentile_map(values: dict[str, float | None]) -> dict[str, float | None]:
    present = {key: value for key, value in values.items() if value is not None}
    if not present:
        return {key: None for key in values}
    ranks = pd.Series(present, dtype="float64").rank(pct=True, method="average")
    return {
        key: round(float(ranks[key] * 100), 1) if key in ranks else None
        for key in values
    }


def collect_fund_flow(
    sector_names: set[str],
    as_of_date: date,
) -> tuple[dict[str, float], dict]:
    frame = ak.stock_sector_fund_flow_rank(
        indicator="今日",
        sector_type="行业资金流",
    )
    if "名称" not in frame or "今日主力净流入-净额" not in frame:
        raise RuntimeError("行业资金流接口返回字段变化")
    selected = frame[frame["名称"].astype(str).isin(sector_names)].copy()
    selected["今日主力净流入-净额"] = pd.to_numeric(
        selected["今日主力净流入-净额"], errors="coerce"
    )
    selected = selected.dropna(subset=["今日主力净流入-净额"])
    values = dict(zip(
        selected["名称"].astype(str),
        selected["今日主力净流入-净额"].astype(float),
    ))
    return values, {
        "status": "ok" if values else "empty",
        "as_of": as_of_date.isoformat(),
        "sector_count": len(values),
        "unit": "CNY",
    }


def collect_northbound() -> dict:
    frame = ak.stock_hsgt_fund_flow_summary_em()
    required = {"资金方向", "成交净买额", "交易状态", "交易日"}
    if not required.issubset(frame.columns):
        return {"status": "error", "detail": "沪深港通资金流字段变化"}
    rows = frame[frame["资金方向"].astype(str) == "北向"].copy()
    rows["成交净买额"] = pd.to_numeric(rows["成交净买额"], errors="coerce")
    rows = rows.dropna(subset=["成交净买额"])
    if rows.empty or rows["成交净买额"].abs().sum() == 0:
        return {
            "status": "empty",
            "detail": "当前接口未返回可验证的北向净买额，不纳入预测打分。",
        }
    return {
        "status": "ok",
        "as_of": as_json(rows["交易日"].iloc[0]),
        "net_buy_amount": float(rows["成交净买额"].sum()),
        "unit": "CNY 亿元",
        "detail": "仅作市场背景，不纳入行业排名。",
    }


def collect_sentiment(trading_dates: list[date], forecast_date: date) -> dict:
    target = previous_trade_date(forecast_date, trading_dates)
    failures = []
    for offset in range(6):
        candidate = target - timedelta(days=offset)
        if candidate not in trading_dates:
            continue
        date_arg = candidate.strftime("%Y%m%d")
        try:
            pool = ak.stock_zt_pool_em(date=date_arg)
            if pool.empty:
                continue
            broken = ak.stock_zt_pool_zbgc_em(date=date_arg)
            max_boards = (
                int(pd.to_numeric(pool["连板数"], errors="coerce").max())
                if "连板数" in pool and not pool.empty
                else None
            )
            return {
                "status": "ok",
                "as_of": candidate.isoformat(),
                "limit_up_count": len(pool),
                "broken_board_count": len(broken),
                "max_consecutive_boards": max_boards,
                "note": "炸板池数量单独展示，不将其直接解释为封板失败率。",
            }
        except Exception as exc:
            failures.append(f"{date_arg}: {type(exc).__name__}: {exc}")
    return {
        "status": "error",
        "error": "最近交易日涨停/炸板数据均不可用",
        "details": failures[-3:],
    }


def collect_overseas_and_commodities(forecast_date: date) -> dict:
    result: dict[str, Any] = {"indices": [], "commodities": [], "sources": []}
    for label, symbol in INDEX_SYMBOLS.items():
        try:
            frame = ak.index_us_stock_sina(symbol=symbol)
            frame = frame.copy()
            frame["date"] = pd.to_datetime(frame["date"], errors="coerce")
            frame["close"] = pd.to_numeric(frame["close"], errors="coerce")
            frame = frame.dropna(subset=["date", "close"])
            frame = frame[frame["date"].dt.date < forecast_date]
            frame = frame.sort_values("date")
            if frame.empty:
                raise RuntimeError("没有预测日前的已完成交易日数据")
            last = frame.iloc[-1]
            previous = frame.iloc[-2] if len(frame) > 1 else None
            change = (
                float(last["close"] / previous["close"] - 1) * 100
                if previous is not None and previous["close"]
                else None
            )
            result["indices"].append({
                "name": label,
                "date": last["date"].date().isoformat(),
                "close": float(last["close"]),
                "change_pct": round(change, 4) if change is not None else None,
            })
            result["sources"].append({
                "name": label,
                "status": "ok",
                "as_of": last["date"].date().isoformat(),
            })
        except Exception as exc:
            result["sources"].append({
                "name": label,
                "status": "error",
                "detail": f"{type(exc).__name__}: {exc}",
            })

    for label, symbol in FUTURE_SYMBOLS.items():
        try:
            if symbol == "lc0":
                frame = ak.futures_zh_daily_sina(symbol=symbol)
            else:
                frame = ak.futures_foreign_hist(symbol=symbol)
            frame = frame.copy()
            frame["date"] = pd.to_datetime(frame["date"], errors="coerce")
            frame["close"] = pd.to_numeric(frame["close"], errors="coerce")
            frame = frame.dropna(subset=["date", "close"])
            frame = frame[frame["date"].dt.date < forecast_date]
            frame = frame.sort_values("date")
            if frame.empty:
                raise RuntimeError("没有预测日前的已完成交易日数据")
            last = frame.iloc[-1]
            previous = frame.iloc[-2] if len(frame) > 1 else None
            change = (
                float(last["close"] / previous["close"] - 1) * 100
                if previous is not None and previous["close"]
                else None
            )
            result["commodities"].append({
                "name": label,
                "date": last["date"].date().isoformat(),
                "close": float(last["close"]),
                "change_pct": round(change, 4) if change is not None else None,
            })
            result["sources"].append({
                "name": label,
                "status": "ok",
                "as_of": last["date"].date().isoformat(),
            })
        except Exception as exc:
            result["sources"].append({
                "name": label,
                "status": "error",
                "detail": f"{type(exc).__name__}: {exc}",
            })

    try:
        frame = ak.stock_hk_index_daily_em(symbol="HSTECF2L").copy()
        frame["date"] = pd.to_datetime(frame["date"], errors="coerce")
        frame["latest"] = pd.to_numeric(frame["latest"], errors="coerce")
        frame = frame.dropna(subset=["date", "latest"])
        frame = frame[frame["date"].dt.date < forecast_date].sort_values("date")
        if frame.empty:
            raise RuntimeError("没有预测日前的恒生科技指数数据")
        last = frame.iloc[-1]
        previous = frame.iloc[-2] if len(frame) > 1 else None
        change = (
            float(last["latest"] / previous["latest"] - 1) * 100
            if previous is not None and previous["latest"]
            else None
        )
        result["indices"].append({
            "name": "恒生科技",
            "date": last["date"].date().isoformat(),
            "close": float(last["latest"]),
            "change_pct": round(change, 4) if change is not None else None,
        })
        result["sources"].append({
            "name": "恒生科技",
            "status": "ok",
            "as_of": last["date"].date().isoformat(),
        })
    except Exception as exc:
        result["sources"].append({
            "name": "恒生科技",
            "status": "error",
            "detail": f"{type(exc).__name__}: {exc}",
        })

    try:
        fx = ak.currency_boc_sina(
            symbol="美元",
            start_date=(forecast_date - timedelta(days=7)).strftime("%Y%m%d"),
            end_date=forecast_date.strftime("%Y%m%d"),
        )
        fx = fx.copy()
        fx["日期"] = pd.to_datetime(fx["日期"], errors="coerce")
        fx = fx.dropna(subset=["日期"]).sort_values("日期")
        fx = fx[fx["日期"].dt.date < forecast_date]
        if fx.empty:
            raise RuntimeError("没有预测日前的汇率数据")
        last = fx.iloc[-1]
        result["usd_cny"] = {
            "date": last["日期"].date().isoformat(),
            "central_parity": as_json(last.get("央行中间价")),
        }
        result["sources"].append({
            "name": "美元兑人民币中间价",
            "status": "ok",
            "as_of": last["日期"].date().isoformat(),
        })
    except Exception as exc:
        result["usd_cny"] = None
        result["sources"].append({
            "name": "美元兑人民币中间价",
            "status": "error",
            "detail": f"{type(exc).__name__}: {exc}",
        })
    return result


def summarize_news_scores(
    news: list[dict],
    sector_names: list[str],
) -> dict[str, float | None]:
    if not news or not any(
        tag["impact"]
        for item in news
        for tag in item.get("sectors", [])
    ):
        return dict.fromkeys(sector_names)
    scores = dict.fromkeys(sector_names, 0.0)
    for item in news:
        importance = item["importance"]
        for tag in item["sectors"]:
            scores[tag["name"]] += tag["impact"] * importance
    return scores


def build_archived_news_rankings(
    news: list[dict],
    sector_names: list[str],
) -> list[dict]:
    scores = summarize_news_scores(news, sector_names)
    positive_scores = {
        name: score for name, score in scores.items()
        if score is not None and score > 0
    }
    if not positive_scores:
        return []
    maximum = max(positive_scores.values())
    ranked = []
    for name, value in sorted(
        positive_scores.items(),
        key=lambda item: item[1],
        reverse=True,
    )[:TOP_N]:
        matched_count = sum(
            1
            for item in news
            for tag in item.get("sectors", [])
            if tag["name"] == name and tag["impact"] > 0
        )
        ranked.append({
            "name": name,
            "score": round(value / maximum * 100, 1),
            "components": {"news": round(value, 1)},
            "rationale": (
                f"最近7日归档新闻关键词净分 +{value:.1f}；"
                f"{matched_count} 条新闻映射为偏正面线索"
            ),
        })
    return ranked


def build_rankings(
    sectors: list[dict],
    fund_flows: dict[str, float],
    news_scores: dict[str, float | None],
    overnight_scores: dict[str, float | None],
) -> list[dict]:
    by_name = {item["name"]: item for item in sectors}
    factors = {
        "news": percentile_map(news_scores),
        "momentum": percentile_map({
            name: item.get("return_5d_pct")
            for name, item in by_name.items()
        }),
        "fund_flow": percentile_map({
            name: fund_flows.get(name)
            for name in by_name
        }),
        "volume": percentile_map({
            name: item.get("volume_ratio_5d")
            for name, item in by_name.items()
        }),
        "overnight": percentile_map(overnight_scores),
    }
    ranked = []
    for name, market in by_name.items():
        components = {
            key: values.get(name)
            for key, values in factors.items()
        }
        available_weight = sum(
            WEIGHTS[key] for key, value in components.items() if value is not None
        )
        if not available_weight:
            continue
        score = sum(
            WEIGHTS[key] * value
            for key, value in components.items()
            if value is not None
        ) / available_weight
        reasons = []
        if news_scores[name] is not None and news_scores[name] > 0:
            reasons.append("新闻偏正面")
        elif news_scores[name] is not None and news_scores[name] < 0:
            reasons.append("新闻偏负面")
        if market.get("return_5d_pct") is not None:
            reasons.append(f"5日涨跌 {market['return_5d_pct']:+.2f}%")
        if name in fund_flows:
            amount_yi = fund_flows[name] / 100_000_000
            reasons.append(f"主力净流入 {amount_yi:+.2f} 亿")
        if market.get("volume_ratio_5d") is not None:
            reasons.append(f"成交额为5日均值 {market['volume_ratio_5d']:.2f} 倍")
        if overnight_scores.get(name) is not None:
            reasons.append(f"相关隔夜市场变动 {overnight_scores[name]:+.2f}%")
        ranked.append({
            "name": name,
            "score": round(score, 1),
            "components": components,
            "rationale": "；".join(reasons) or "可用信号有限",
            "market": market,
        })
    return sorted(ranked, key=lambda item: item["score"], reverse=True)


def build_overnight_scores(
    overseas: dict,
    sector_names: list[str],
) -> dict[str, float | None]:
    scores: dict[str, float | None] = {name: None for name in sector_names}
    index_changes = {item["name"]: item["change_pct"] for item in overseas["indices"]}
    commodity_changes = {
        item["name"]: item["change_pct"] for item in overseas["commodities"]
    }
    mappings = {
        "电子": [index_changes.get("费城半导体")],
        "计算机": [index_changes.get("纳斯达克")],
        "有色金属": [
            commodity_changes.get("铜"),
            commodity_changes.get("黄金"),
        ],
    }
    for name, values in mappings.items():
        if name in scores:
            present = [float(value) for value in values if value is not None]
            if present:
                scores[name] = sum(present) / len(present)
    return scores


def load_csi300_history(start_date: date | None = None) -> pd.DataFrame:
    start = (
        start_date.strftime("%Y%m%d")
        if start_date
        else "19900101"
    )
    end = (now_shanghai().date() + timedelta(days=1)).strftime("%Y%m%d")
    failures = []
    for attempt in range(2):
        try:
            frame = ak.stock_zh_index_daily_em(
                symbol="sh000300",
                start_date=start,
                end_date=end,
            ).copy()
            frame["date"] = pd.to_datetime(
                frame["date"], errors="coerce"
            ).dt.date
            frame["close"] = pd.to_numeric(frame["close"], errors="coerce")
            frame["open"] = pd.to_numeric(frame["open"], errors="coerce")
            frame = frame.dropna(subset=["date", "open", "close"]).sort_values("date")
            if not frame.empty:
                frame.attrs["source"] = "东方财富指数日线"
                return frame
            raise RuntimeError("东方财富接口没有有效指数记录")
        except Exception as exc:
            failures.append(f"东方财富: {type(exc).__name__}: {exc}")
            if attempt == 0:
                time.sleep(0.5)

    try:
        frame = ak.stock_zh_index_daily(symbol="sh000300").copy()
        frame["date"] = pd.to_datetime(
            frame["date"], unit="ms", errors="coerce"
        ).dt.date
        frame["close"] = pd.to_numeric(frame["close"], errors="coerce")
        frame["open"] = pd.to_numeric(frame["open"], errors="coerce")
        frame = frame.dropna(subset=["date", "open", "close"]).sort_values("date")
        if not frame.empty:
            frame.attrs["source"] = "新浪财经指数日线（备用）"
            return frame
        failures.append("新浪财经: 没有有效指数记录")
    except Exception as exc:
        failures.append(f"新浪财经: {type(exc).__name__}: {exc}")
    raise RuntimeError("沪深300历史数据不可用；" + "；".join(failures))


def get_csi300_context(
    forecast_date: date,
    history: pd.DataFrame | None = None,
) -> dict:
    frame = history if history is not None else load_csi300_history()
    frame = frame[frame["date"] < forecast_date].sort_values("date")
    if frame.empty:
        raise RuntimeError("CSI 300 历史数据为空")
    last = frame.iloc[-1]
    previous = frame.iloc[-2] if len(frame) > 1 else None
    change = (
        float(last["close"] / previous["close"] - 1) * 100
        if previous is not None and previous["close"]
        else None
    )
    return {
        "name": "沪深300",
        "date": last["date"].isoformat(),
        "close": float(last["close"]),
        "change_pct": round(change, 4) if change is not None else None,
    }


def generate_forecast() -> None:
    generated_at = now_shanghai()
    today = generated_at.date()
    trading_dates = get_trade_dates()
    forecast_date = upcoming_trade_date(today, trading_dates)
    if forecast_date != today:
        print(f"{today} 非交易日，跳过预测；下一个交易日为 {forecast_date}。")
        return

    existing = read_json(DATA_PATH, {})
    if existing.get("forecast", {}).get("trading_date") == forecast_date.isoformat():
        print(f"{forecast_date} 的预测已经锁定，保留既有快照。")
        return
    # 手动运行可设置 ALLOW_OUTSIDE_WINDOW=1 跳过时间窗口检查（仅用于测试/补跑）
    window_ok = NEWS_CUTOFF <= generated_at.time() < day_time(9, 30)
    if not window_ok and os.environ.get("ALLOW_OUTSIDE_WINDOW") != "1":
        raise RuntimeError("预测须在新闻截止 08:30 后、A股开盘 09:30 前生成。")
    use_deepseek = bool(os.environ.get("DEEPSEEK_API_KEY"))
    news_analysis_mode = "deepseek" if use_deepseek else "keyword_rules"
    news_analysis_detail = (
        "DeepSeek 分析" if use_deepseek else "关键词规则分析（未配置 DeepSeek 密钥）"
    )

    sector_info = ak.sw_index_first_info()
    required = {"行业代码", "行业名称"}
    if not required.issubset(sector_info.columns):
        raise RuntimeError("申万一级行业列表字段变化")
    sector_names = sector_info["行业名称"].astype(str).tolist()
    if len(sector_names) != 31:
        raise RuntimeError(f"申万一级行业数量异常：预期31，实际{len(sector_names)}")

    raw_news, news_source_statuses = collect_news(forecast_date, trading_dates)
    relevant_news = [
        item for item in raw_news
        if any(
            term in text_value(item.get("title"))
            for term in NEWS_RELEVANCE_TERMS
        )
    ]
    if not relevant_news:
        analyzed_news = []
    elif use_deepseek:
        analyzed_news = analyze_news(relevant_news, sector_names)
    else:
        analyzed_news = analyze_news_by_rules(relevant_news, sector_names)
    sector_data, sector_failures = collect_sector_market(sector_info)
    sector_market_date = max(
        (item["date"] for item in sector_data),
        default=None,
    )
    try:
        fund_flows, fund_status = collect_fund_flow(
            set(sector_names),
            previous_trade_date(forecast_date, trading_dates),
        )
    except Exception as exc:
        fund_flows = {}
        fund_status = {
            "status": "error",
            "detail": f"{type(exc).__name__}: {exc}",
        }
    sentiment = collect_sentiment(trading_dates, forecast_date)
    international = collect_overseas_and_commodities(forecast_date)
    try:
        northbound = collect_northbound()
    except Exception as exc:
        northbound = {
            "status": "error",
            "detail": f"{type(exc).__name__}: {exc}",
        }
    csi300 = get_csi300_context(forecast_date)

    news_scores = summarize_news_scores(analyzed_news, sector_names)
    overnight_scores = build_overnight_scores(international, sector_names)
    rankings = build_rankings(
        sector_data, fund_flows, news_scores, overnight_scores
    )
    if not rankings:
        raise RuntimeError("没有足够的有效行情信号，停止生成预测")

    previous_date = previous_trade_date(forecast_date, trading_dates)
    market_direction = (
        "偏多" if csi300["change_pct"] and csi300["change_pct"] > 0.5
        else "偏空" if csi300["change_pct"] is not None and csi300["change_pct"] < -0.5
        else "震荡"
    )
    sources = [
        *news_source_statuses,
        {
            "name": "新闻分析方式",
            "status": "ok" if analyzed_news else "empty",
            "count": len(analyzed_news),
            "detail": news_analysis_detail,
        },
        {
            "name": "申万一级行业日线",
            "status": "ok" if len(sector_data) == 31 else "partial",
            "as_of": sector_market_date,
            "count": len(sector_data),
            "detail": f"{len(sector_data)}/31 行业；{len(sector_failures)} 项失败",
        },
        {
            "name": "行业资金流",
            **fund_status,
        },
        {
            "name": "涨停/连板情绪",
            "status": sentiment["status"],
            "as_of": sentiment.get("as_of"),
            "detail": "；".join(filter(
                None,
                [sentiment.get("error"), *sentiment.get("details", [])],
            )),
        },
        {
            "name": "北向资金",
            "status": northbound["status"],
            "as_of": northbound.get("as_of"),
            "detail": northbound.get("detail"),
        },
        *international["sources"],
        {
            "name": "沪深300基准",
            "status": "ok",
            "as_of": csi300["date"],
        },
    ]
    payload = {
        "generated_at": generated_at.isoformat(timespec="seconds"),
        "cutoff_at": datetime.combine(
            forecast_date, NEWS_CUTOFF, SHANGHAI
        ).isoformat(timespec="seconds"),
        "forecast": {
            "trading_date": forecast_date.isoformat(),
            "market_date": previous_date.isoformat(),
            "market_stance": market_direction,
            "news_analysis_mode": news_analysis_mode,
            "market_summary": (
                f"沪深300上一交易日 {format(csi300['change_pct'], '+.2f')}%；"
                f"涨停 {sentiment.get('limit_up_count', '—')} 家，"
                f"最高连板 {sentiment.get('max_consecutive_boards', '—')} 板。"
            ),
            "ranked_sectors": rankings[:TOP_N],
            "score_method": (
                f"新闻分析：{'DeepSeek' if use_deepseek else '关键词规则'}；"
                "综合新闻与行情信号排序，不代表上涨概率。"
            ),
        },
        "news": analyzed_news,
        "context": {
            "csi300": csi300,
            "sentiment": sentiment,
            "northbound": northbound,
            "indices": international["indices"],
            "commodities": international["commodities"],
            "usd_cny": international.get("usd_cny"),
        },
        "sources": sources,
    }
    write_json(DATA_PATH, payload)

    history = read_json(HISTORY_PATH, {"forecasts": []})
    forecasts = history.setdefault("forecasts", [])
    if not any(
        entry.get("trading_date") == forecast_date.isoformat()
        for entry in forecasts
    ):
        forecasts.append({
            "prediction_at": generated_at.isoformat(timespec="seconds"),
            "trading_date": forecast_date.isoformat(),
            "market_date": previous_date.isoformat(),
            "mode": "live_forecast",
            "ranked_sectors": [
                item["name"] for item in rankings[:TOP_N]
            ],
            "ranked_sector_details": [
                {
                    "name": item["name"],
                    "score": item["score"],
                    "up_probability": item.get("up_probability"),
                }
                for item in rankings[:TOP_N]
            ],
            "outcome": None,
        })
    history["forecasts"] = forecasts[-365:]
    write_json(HISTORY_PATH, history)
    print(
        f"预测已生成并锁定：{forecast_date}，新闻{len(analyzed_news)}条，"
        f"行业行情{len(sector_data)}/31。"
    )


def parse_sws_history(symbol: str) -> pd.DataFrame:
    code = symbol.split(".")[0]
    frame = ak.index_hist_sw(symbol=code, period="day").copy()
    frame["日期"] = pd.to_datetime(frame["日期"], errors="coerce").dt.date
    for column in ("开盘", "收盘"):
        frame[column] = pd.to_numeric(frame[column], errors="coerce")
    return frame.dropna(subset=["日期", "开盘", "收盘"]).sort_values("日期")


def close_to_close_change(
    frame: pd.DataFrame,
    previous_date: date,
    current_date: date,
) -> float | None:
    previous = frame[frame["日期"] == previous_date]
    current = frame[frame["日期"] == current_date]
    if previous.empty or current.empty or not previous.iloc[0]["收盘"]:
        return None
    return float(current.iloc[0]["收盘"] / previous.iloc[0]["收盘"] - 1)


def csi300_open_to_close(
    entry_date: date,
    exit_date: date,
    history: pd.DataFrame | None = None,
) -> float | None:
    frame = history if history is not None else load_csi300_history()
    entry = frame[frame["date"] == entry_date]
    exit_ = frame[frame["date"] == exit_date]
    if entry.empty or exit_.empty or not entry.iloc[0]["open"]:
        return None
    return float(exit_.iloc[0]["close"] / entry.iloc[0]["open"] - 1)


def collect_backfill_sector_histories(
    sector_info: pd.DataFrame,
) -> tuple[dict[str, pd.DataFrame], list[str]]:
    histories = {}
    failures = []
    for _, row in sector_info.iterrows():
        code = str(row["行业代码"]).split(".")[0]
        name = str(row["行业名称"])
        try:
            frame = ak.index_hist_sw(symbol=code, period="day").copy()
            required = {"日期", "开盘", "收盘", "成交额"}
            if not required.issubset(frame.columns):
                raise RuntimeError(
                    f"缺少字段 {sorted(required - set(frame.columns))}"
                )
            frame["日期"] = pd.to_datetime(
                frame["日期"], errors="coerce"
            ).dt.date
            for column in ("开盘", "收盘", "成交额"):
                frame[column] = pd.to_numeric(frame[column], errors="coerce")
            histories[name] = frame.dropna(
                subset=["日期", "开盘", "收盘"]
            ).sort_values("日期")
        except Exception as exc:
            failures.append(f"{name}: {type(exc).__name__}: {exc}")
    return histories, failures


def backfill_forecasts() -> None:
    generated_at = now_shanghai()
    trading_dates = get_trade_dates()
    completed_sessions = {
        trading_day for trading_day in trading_dates
        if trading_day < generated_at.date()
        or (
            trading_day == generated_at.date()
            and generated_at.time() >= day_time(15, 0)
        )
    }
    targets = [
        (trading_day, trading_dates[index + 1])
        for index, trading_day in enumerate(trading_dates[:-1])
        if trading_dates[index + 1] in completed_sessions
    ][-BACKFILL_SEARCH_WINDOW:]
    if not targets:
        raise RuntimeError("没有已完成下一交易日收盘数据的历史预测周期")

    sector_info = ak.sw_index_first_info()
    required = {"行业代码", "行业名称"}
    if not required.issubset(sector_info.columns):
        raise RuntimeError("申万一级行业列表字段变化")
    sector_names = sector_info["行业名称"].astype(str).tolist()
    if len(sector_names) != 31:
        raise RuntimeError(f"申万一级行业数量异常：预期31，实际{len(sector_names)}")

    histories, history_failures = collect_backfill_sector_histories(sector_info)
    benchmark_history = load_csi300_history(
        targets[0][0] - timedelta(days=15)
    )
    backtests = []
    skipped = []
    latest_snapshot = None

    for forecast_date, exit_date in targets:
        market_date = previous_trade_date(forecast_date, trading_dates)
        sector_data = []
        for name in sector_names:
            frame = histories.get(name)
            if frame is None:
                continue
            available = frame[frame["日期"] <= market_date]
            if (
                len(available) < 6
                or available.iloc[-1]["日期"] != market_date
            ):
                continue
            latest = available.iloc[-1]
            prior5 = available.iloc[-6]
            base_amount = available["成交额"].iloc[-6:-1].mean()
            return_5d = (
                float(latest["收盘"] / prior5["收盘"] - 1) * 100
                if prior5["收盘"]
                else None
            )
            volume_ratio = (
                float(latest["成交额"] / base_amount)
                if pd.notna(latest["成交额"])
                and pd.notna(base_amount)
                and base_amount
                else None
            )
            sector_data.append({
                "name": name,
                "date": market_date.isoformat(),
                "open": as_json(latest["开盘"]),
                "close": as_json(latest["收盘"]),
                "return_5d_pct": (
                    round(return_5d, 4) if return_5d is not None else None
                ),
                "volume_ratio_5d": (
                    round(volume_ratio, 4)
                    if volume_ratio is not None
                    else None
                ),
            })

        if len(sector_data) != len(sector_names):
            skipped.append(
                f"{forecast_date}: 行业行情只有 {len(sector_data)}/31 "
                f"个行业在输入日 {market_date} 有完整记录"
            )
            continue

        csi300 = get_csi300_context(forecast_date, benchmark_history)
        if csi300["date"] != market_date.isoformat():
            skipped.append(
                f"{forecast_date}: 沪深300输入数据日期 "
                f"{csi300['date']} 不等于目标前一交易日 {market_date}"
            )
            continue
        has_sector_outcomes = all(
            not histories[name][histories[name]["日期"] == forecast_date].empty
            and not histories[name][histories[name]["日期"] == exit_date].empty
            for name in sector_names
        )
        benchmark = csi300_open_to_close(
            forecast_date, exit_date, benchmark_history
        )
        if not has_sector_outcomes or benchmark is None:
            skipped.append(
                f"{forecast_date}: 申万行业或沪深300缺少"
                f"{forecast_date}开盘至{exit_date}收盘的完整数据"
            )
            continue

        overseas = collect_overseas_and_commodities(forecast_date)
        news_scores = dict.fromkeys(sector_names)
        overnight_scores = build_overnight_scores(overseas, sector_names)
        rankings = build_rankings(sector_data, {}, news_scores, overnight_scores)
        ranked = rankings[:TOP_N]
        if len(ranked) != TOP_N:
            skipped.append(f"{forecast_date}: 可评分行业不足 Top{TOP_N}")
            continue

        sector_returns = []
        for item in ranked:
            frame = histories[item["name"]]
            entry = frame[frame["日期"] == forecast_date]
            exit_ = frame[frame["日期"] == exit_date]
            if entry.empty or exit_.empty or not entry.iloc[0]["开盘"]:
                sector_returns = []
                break
            sector_returns.append(
                float(exit_.iloc[0]["收盘"] / entry.iloc[0]["开盘"] - 1)
            )
        if len(sector_returns) != TOP_N or benchmark is None:
            skipped.append(
                f"{forecast_date}: 缺少 Top{TOP_N} 行业或沪深300的"
                f"{forecast_date}开盘至{exit_date}收盘复盘数据"
            )
            continue

        top1_close_change = close_to_close_change(
            histories[ranked[0]["name"]],
            market_date,
            forecast_date,
        )
        if top1_close_change is None:
            skipped.append(
                f"{forecast_date}: 缺少 Top1 行业预测日收盘价或前一交易日收盘价"
            )
            continue
        avg_return = sum(sector_returns) / TOP_N
        outcome = {
            "exit_date": exit_date.isoformat(),
            "top3_avg_return_pct": round(avg_return * 100, 4),
            "csi300_return_pct": round(benchmark * 100, 4),
            "excess_return_pct": round((avg_return - benchmark) * 100, 4),
            "top1_return_pct": round(sector_returns[0] * 100, 4),
            "top1_close_change_pct": round(top1_close_change * 100, 4),
            "top1_correct": top1_close_change > 0,
            "top1_excess_return_pct": round(
                (sector_returns[0] - benchmark) * 100, 4
            ),
            "sector_returns_pct": [
                round(value * 100, 4) for value in sector_returns
            ],
            "basis": (
                "回溯重建排名；申万行业指数预测日开盘至下一交易日收盘，"
                "对比沪深300同区间；排名仅用行情与隔夜信号，不含新闻；"
                "不含交易成本，不是当时锁定的预测。"
            ),
        }
        record = {
            "trading_date": forecast_date.isoformat(),
            "market_date": market_date.isoformat(),
            "exit_date": exit_date.isoformat(),
            "mode": "market_only_backtest",
            "ranked_sectors": [item["name"] for item in ranked],
            "ranked_sector_details": ranked,
            "outcome": outcome,
        }
        backtests.append(record)

        if latest_snapshot is None or forecast_date > date.fromisoformat(
            latest_snapshot["forecast"]["trading_date"]
        ):
            market_stance = (
                "偏多" if csi300["change_pct"] is not None and csi300["change_pct"] > 0.5
                else "偏空" if csi300["change_pct"] is not None and csi300["change_pct"] < -0.5
                else "震荡"
            )
            news_start = forecast_date - timedelta(days=7)
            archived_news, news_source = collect_archived_news(
                news_start, forecast_date, sector_names
            )
            latest_news_scores = summarize_news_scores(
                archived_news, sector_names
            )
            latest_ranked = build_rankings(
                sector_data, {}, latest_news_scores, overnight_scores
            )[:TOP_N]
            latest_snapshot = {
                "forecast": {
                    "trading_date": forecast_date.isoformat(),
                    "market_date": market_date.isoformat(),
                    "market_stance": market_stance,
                    "market_summary": (
                        f"行情输入截至 {market_date}；最近7日筛选出市场相关新闻 "
                        f"{len(archived_news)} 条，新闻映射参与行业排序。"
                    ),
                    "ranked_sectors": latest_ranked,
                    "score_method": (
                        "当前展示为非实时样例；最近7个自然日央视《新闻联播》标题按市场相关关键词筛选，"
                        "再以关键词规则映射行业，"
                        "与可验证的5日动量、相对成交额及隔夜市场信号共同排序。"
                        "新闻无精确发布时间，不是完整财经新闻或DeepSeek分析；"
                        "缺失因子按可用权重重归一，不代表上涨概率。"
                    ),
                },
                "news": archived_news,
                "context": {
                    "csi300": csi300,
                    "indices": overseas["indices"],
                    "commodities": overseas["commodities"],
                    "usd_cny": overseas.get("usd_cny"),
                },
                "sources": [
                    news_source,
                    {
                        "name": "历史行业资金流",
                        "status": "empty",
                        "as_of": market_date.isoformat(),
                        "detail": "没有可验证的按历史交易日行业资金流；未参与评分。",
                    },
                    {
                        "name": "申万一级行业日线",
                        "status": "ok",
                        "as_of": market_date.isoformat(),
                        "count": len(sector_data),
                        "detail": f"{len(sector_data)}/31 行业输入数据完整",
                    },
                    *overseas["sources"],
                    {
                        "name": "沪深300基准",
                        "status": "ok",
                        "as_of": market_date.isoformat(),
                        "detail": benchmark_history.attrs.get("source"),
                    },
                ],
            }

    if not backtests or latest_snapshot is None:
        detail = "; ".join(skipped[-5:] + history_failures[-5:])
        raise RuntimeError(f"未能生成完整可验证的历史回溯数据：{detail}")
    backtests = backtests[-BACKFILL_COUNT:]

    history = read_json(HISTORY_PATH, {"forecasts": []})
    history["backtests"] = backtests
    write_json(HISTORY_PATH, history)

    existing = read_json(DATA_PATH, {})
    if existing.get("data_mode") == "backfill" or not existing.get("forecast"):
        write_json(DATA_PATH, {
            "data_mode": "backfill",
            "generated_at": generated_at.isoformat(timespec="seconds"),
            "backfill": {
                "record_count": len(backtests),
                "basis": (
                    "历史表现只按可验证行情与隔夜信号重建，不含新闻，非当时锁定预测；"
                    "页面最新行业线索另使用最近7个自然日筛选后的市场相关新闻。"
                ),
                "skipped_dates": skipped,
            },
            "forecast": latest_snapshot["forecast"],
            "news": latest_snapshot["news"],
            "context": latest_snapshot["context"],
            "sources": latest_snapshot["sources"],
        })
    else:
        print("已保留现有的实时预测快照；仅更新独立的历史回溯记录。")

    print(
        f"历史回溯完成：{len(backtests)} 个交易周期；"
        f"交易日 {backtests[0]['trading_date']} 至 {backtests[-1]['trading_date']}。"
    )
    for message in skipped:
        print(f"跳过历史日期：{message}", file=sys.stderr)


def refresh_backfill_news() -> None:
    snapshot = read_json(DATA_PATH, {})
    if snapshot.get("data_mode") != "backfill":
        raise RuntimeError("当前 data.json 不是历史回溯快照，拒绝覆盖实时预测")
    forecast = snapshot.get("forecast")
    if not isinstance(forecast, dict) or not forecast.get("trading_date"):
        raise RuntimeError("历史回溯快照缺少预测交易日")
    forecast_date = date.fromisoformat(forecast["trading_date"])
    sector_info = ak.sw_index_first_info()
    if "行业名称" not in sector_info.columns:
        raise RuntimeError("申万一级行业列表缺少行业名称字段")
    sector_names = sector_info["行业名称"].astype(str).tolist()
    if len(sector_names) != 31:
        raise RuntimeError(f"申万一级行业数量异常：预期31，实际{len(sector_names)}")

    archived_news, news_source = collect_archived_news(
        forecast_date - timedelta(days=7),
        forecast_date,
        sector_names,
    )
    if not archived_news:
        raise RuntimeError(
            f"最近7日新闻归档不可用：{news_source.get('detail', '没有新闻条目')}"
        )

    forecast["ranked_sectors"] = build_archived_news_rankings(
        archived_news, sector_names
    )
    forecast["ranking_basis"] = "seven_day_news_archive"
    forecast["score_label"] = "相对强度"
    forecast["market_summary"] = (
        f"最近7个自然日筛选出市场相关新闻 {len(archived_news)} 条；"
        "右侧只列出有明确偏正面关键词线索的行业。"
    )
    forecast["score_method"] = (
        "行业线索按最近7个自然日央视《新闻联播》市场相关新闻的关键词方向及重要性汇总，"
        "相对强度只表示本次新闻线索间的排序，不是上涨概率。"
        "节目日期不等于精确发布时间，非完整财经新闻源或DeepSeek分析；"
        "历史表现统计与此新闻排序分开。"
    )
    snapshot["news"] = archived_news
    snapshot["generated_at"] = now_shanghai().isoformat(timespec="seconds")
    snapshot["sources"] = [
        news_source,
        *[
            item for item in snapshot.get("sources", [])
            if str(item.get("name", "")) != news_source["name"]
            and "历史新闻归档" not in str(item.get("name", ""))
        ],
    ]
    snapshot.setdefault("backfill", {})["basis"] = (
        "历史表现按行情与隔夜信号回溯；页面当前行业线索另用最近7个自然日筛选后的市场相关新闻。"
        "两者分开，不是当时锁定预测。"
    )
    write_json(DATA_PATH, snapshot)
    print(
        f"新闻快照已更新：{len(archived_news)} 条、"
        f"{len({item['archive_date'] for item in archived_news})} 个归档日期、"
        f"{len(forecast['ranked_sectors'])} 个偏正面行业线索。"
    )


def review_forecasts() -> None:
    history = read_json(HISTORY_PATH, {"forecasts": []})
    forecasts = history.get("forecasts", [])
    backtests = history.get("backtests", [])
    pending = [
        entry for entry in forecasts
        if entry.get("outcome") is None and entry.get("ranked_sectors")
    ]
    pending_backtests = [
        entry for entry in backtests
        if entry.get("ranked_sectors")
        and (
            not isinstance(entry.get("outcome"), dict)
            or not isinstance(entry["outcome"].get("top1_correct"), bool)
        )
    ]
    if not pending and not pending_backtests:
        print("没有待复盘的预测或历史回溯。")
        return
    trading_dates = get_trade_dates()
    current_trading_date = max(
        (item for item in trading_dates if item <= now_shanghai().date()),
        default=None,
    )
    if current_trading_date is None:
        print("交易日历中没有可复盘日期。")
        return

    changed = False
    cache: dict[str, pd.DataFrame] = {}
    failures = []
    sector_info = ak.sw_index_first_info()
    sector_names = {
        str(row["行业名称"]): str(row["行业代码"]).split(".")[0]
        for _, row in sector_info.iterrows()
    }

    def get_sector_change(
        name: str,
        previous_day: date,
        forecast_day: date,
    ) -> float | None:
        code = sector_names.get(name)
        if code is None:
            raise RuntimeError("申万行业代码不存在")
        if code not in cache:
            cache[code] = parse_sws_history(code)
        return close_to_close_change(cache[code], previous_day, forecast_day)

    for entry in pending_backtests:
        forecast_day = date.fromisoformat(entry["trading_date"])
        previous_day = date.fromisoformat(entry["market_date"])
        if current_trading_date < forecast_day:
            continue
        name = entry["ranked_sectors"][0]
        try:
            change = get_sector_change(name, previous_day, forecast_day)
        except Exception as exc:
            failures.append(
                f"{entry['trading_date']} {name}: {type(exc).__name__}: {exc}"
            )
            continue
        if change is None:
            failures.append(
                f"{entry['trading_date']} {name}: 缺少预测日或前一交易日收盘数据"
            )
            continue
        if not isinstance(entry.get("outcome"), dict):
            entry["outcome"] = {}
        entry["outcome"]["top1_close_change_pct"] = round(change * 100, 4)
        entry["outcome"]["top1_correct"] = change > 0
        entry["outcome"]["direction_basis"] = (
            "预测行业指数预测日收盘价高于前一交易日收盘价记为正确。"
        )
        changed = True

    for entry in pending:
        forecast_day = date.fromisoformat(entry["trading_date"])
        if current_trading_date < forecast_day:
            continue
        previous_day = date.fromisoformat(
            entry.get("market_date")
            or previous_trade_date(forecast_day, trading_dates).isoformat()
        )
        sector_results = []
        for name in entry["ranked_sectors"]:
            try:
                change = get_sector_change(name, previous_day, forecast_day)
            except Exception as exc:
                failures.append(
                    f"{entry['trading_date']} {name}: {type(exc).__name__}: {exc}"
                )
                continue
            if change is None:
                continue
            sector_results.append({
                "name": name,
                "close_change_pct": round(change * 100, 4),
                "up": change > 0,
            })
        if len(sector_results) < len(entry["ranked_sectors"]):
            failures.append(
                f"{entry['trading_date']}: 尚未取得预测日及前一交易日的行业收盘数据"
            )
            continue
        top1 = sector_results[0]
        entry["outcome"] = {
            "reviewed_at": now_shanghai().isoformat(timespec="seconds"),
            "top1_sector": top1["name"],
            "top1_close_change_pct": top1["close_change_pct"],
            "top1_correct": top1["up"],
            "top3_up_count": sum(item["up"] for item in sector_results),
            "ranked_sector_results": sector_results,
            "basis": (
                "按预测行业指数预测日收盘价是否高于前一交易日收盘价判定；"
                "不代表个股或实际交易收益。"
            ),
        }
        changed = True
    if changed:
        write_json(HISTORY_PATH, history)
        print("已按预测行业指数收盘涨跌写入预测及历史回溯结果。")
    else:
        print("收盘行情尚未完整或复盘周期未结束，保留待复盘记录。")
    for failure in failures[-10:]:
        print(f"复盘数据提示：{failure}", file=sys.stderr)


def main() -> int:
    parser = argparse.ArgumentParser(description="每日行业预测数据更新")
    parser.add_argument(
        "--mode",
        choices=("forecast", "review", "backfill", "refresh-backfill-news"),
        default="forecast",
        help=(
            "forecast=生成并锁定预测；review=复盘到期预测；"
            "backfill=回溯重建近期完整交易周期；"
            "refresh-backfill-news=只更新回溯快照最近7日新闻"
        ),
    )
    args = parser.parse_args()
    # 单个网络请求最多等 30 秒，避免接口卡住导致整个任务无限等待
    socket.setdefaulttimeout(30)
    try:
        if args.mode == "forecast":
            generate_forecast()
        elif args.mode == "review":
            review_forecasts()
        elif args.mode == "refresh-backfill-news":
            refresh_backfill_news()
        else:
            backfill_forecasts()
    except Exception as exc:
        print(f"更新失败：{type(exc).__name__}: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
