window.__QUANT_DATA__ = {
  "generated_at": "2026-07-30T18:25:40+08:00",
  "data_freshness": {
    "warning_target_date": "2026-07-31",
    "spot_snapshot_at": "2026-07-30T18:25:40+08:00",
    "margin_data_as_of": "20260729",
    "margin_data_dates_by_market": {
      "szse": "20260729",
      "sse": "20260729"
    },
    "market_phase": "post_close"
  },
  "run_source": "manual",
  "whitelist_size": 121,
  "requested_count": 121,
  "requested_codes": [
    "300476",
    "002384",
    "300308",
    "002230",
    "688256",
    "603019",
    "603160",
    "603986",
    "603501",
    "603893",
    "688111",
    "688041",
    "688012",
    "688008",
    "688169",
    "688072",
    "688099",
    "688027",
    "688608",
    "688018",
    "688036",
    "688047",
    "688126",
    "688037",
    "688213",
    "688120",
    "688981",
    "603296",
    "300033",
    "300496",
    "300502",
    "300223",
    "300383",
    "300458",
    "300474",
    "300454",
    "300212",
    "300251",
    "300229",
    "300624",
    "300442",
    "300803",
    "300364",
    "300394",
    "300570",
    "300782",
    "300548",
    "300604",
    "300118",
    "300373",
    "301236",
    "301269",
    "301312",
    "301308",
    "301095",
    "301171",
    "301165",
    "300059",
    "002371",
    "002475",
    "002463",
    "002555",
    "002236",
    "002241",
    "600050",
    "002859",
    "002920",
    "002456",
    "002156",
    "002261",
    "002273",
    "002281",
    "002415",
    "002916",
    "002517",
    "002049",
    "002138",
    "002185",
    "000063",
    "000977",
    "000938",
    "000988",
    "000034",
    "000066",
    "000725",
    "000100",
    "600584",
    "600570",
    "600845",
    "600536",
    "600588",
    "600602",
    "600171",
    "600498",
    "600183",
    "600460",
    "600703",
    "601138",
    "601360",
    "603000",
    "300054",
    "002192",
    "002466",
    "002837",
    "601869",
    "002938",
    "000878",
    "002155",
    "600378",
    "300418",
    "002218",
    "300617",
    "300738",
    "002126",
    "002050",
    "603075",
    "603667",
    "605020",
    "600160",
    "603379",
    "600988"
  ],
  "processed_count": 121,
  "processed_codes": [
    "300476",
    "002384",
    "300308",
    "002230",
    "688256",
    "603019",
    "603160",
    "603986",
    "603501",
    "603893",
    "688111",
    "688041",
    "688012",
    "688008",
    "688169",
    "688072",
    "688099",
    "688027",
    "688608",
    "688018",
    "688036",
    "688047",
    "688126",
    "688037",
    "688213",
    "688120",
    "688981",
    "603296",
    "300033",
    "300496",
    "300502",
    "300223",
    "300383",
    "300458",
    "300474",
    "300454",
    "300212",
    "300251",
    "300229",
    "300624",
    "300442",
    "300803",
    "300364",
    "300394",
    "300570",
    "300782",
    "300548",
    "300604",
    "300118",
    "300373",
    "301236",
    "301269",
    "301312",
    "301308",
    "301095",
    "301171",
    "301165",
    "300059",
    "002371",
    "002475",
    "002463",
    "002555",
    "002236",
    "002241",
    "600050",
    "002859",
    "002920",
    "002456",
    "002156",
    "002261",
    "002273",
    "002281",
    "002415",
    "002916",
    "002517",
    "002049",
    "002138",
    "002185",
    "000063",
    "000977",
    "000938",
    "000988",
    "000034",
    "000066",
    "000725",
    "000100",
    "600584",
    "600570",
    "600845",
    "600536",
    "600588",
    "600602",
    "600171",
    "600498",
    "600183",
    "600460",
    "600703",
    "601138",
    "601360",
    "603000",
    "300054",
    "002192",
    "002466",
    "002837",
    "601869",
    "002938",
    "000878",
    "002155",
    "600378",
    "300418",
    "002218",
    "300617",
    "300738",
    "002126",
    "002050",
    "603075",
    "603667",
    "605020",
    "600160",
    "603379",
    "600988"
  ],
  "failed_codes": [],
  "formula": {
    "business_purity_weight": 0.35,
    "financing_pressure_weight": 0.45,
    "turnover_heat_weight": 0.2,
    "financing_pressure_rule": "融资压力 = 增量压力 80% + 存量包袱 20%；其中增量压力分段映射融资买入额 / 融资余额，存量包袱分段映射融资余额 / 流通市值",
    "incremental_financing_rule": "分段映射融资买入额 / 融资余额，避免高杠杆样本过早全部打满分",
    "margin_burden_rule": "轻权重纳入融资余额 / 流通市值，补足历史融资包袱信息",
    "turnover_heat_rule": "min(100, 换手率 * 8)",
    "gauge_score_rule": "前排高分样本均分 * 0.55 + 全样本均分 * 0.25 + 高风险样本占比 * 100 * 0.20"
  },
  "spot_data_health": {
    "source": "tencent:stock_zh_a_spot_tx",
    "total_rows": 5534,
    "turnover_rate_available_rows": 5534,
    "turnover_rate_missing_rows": 0,
    "turnover_rate_missing_ratio": 0.0,
    "float_market_cap_available_rows": 0,
    "float_market_cap_missing_rows": 5534,
    "float_market_cap_missing_ratio": 1.0
  },
  "daily_warning": {
    "date": "2026-07-31",
    "title": "量化分歧区，先看换手再定方向。",
    "gauge_score": 53,
    "summary": {
      "sample_size": 121,
      "avg_trap_score": 51.48,
      "high_risk_count": 7,
      "high_risk_ratio": 0.0579,
      "watch_count": 33,
      "watch_ratio": 0.2727,
      "top_cohort_size": 12,
      "top_cohort_avg_trap_score": 70.59,
      "concentration_spread": 19.1,
      "gauge_score": 53,
      "window_risk": "high",
      "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
      "window_basis": "高风险票数量多，前排平均分也偏高。",
      "top_stock_code": "300308",
      "top_stock_name": "中际旭创",
      "top_financing_pressure_score": 80.0
    },
    "prompt": "当前高风险样本集中在 中际旭创 等标的，前排样本平均陷阱分约 70.6，高风险票 7 只，优先防范一致性追高后的回撤兑现。",
    "signals": [
      {
        "label": "高风险个股数量",
        "value": "7",
        "note": "陷阱分大于等于 70 的样本数"
      },
      {
        "label": "整体追高热度",
        "value": "71%",
        "note": "前 12 只高分样本的平均陷阱分"
      },
      {
        "label": "杠杆资金压力",
        "value": "80%",
        "note": "中际旭创 的融资压力得分"
      }
    ],
    "warnings": [
      {
        "label": "风格漂移预警",
        "value": "前排龙头与跟风标的分化增大，追高容错率下降。"
      },
      {
        "label": "量化踩踏窗口",
        "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
      },
      {
        "label": "执行纪律",
        "value": "轻仓试错，优先保留强趋势与成交结构更干净的样本。"
      }
    ],
    "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
    "review": {
      "status": "待复盘",
      "note": ""
    }
  },
  "warning_history": [
    {
      "date": "2026-07-31",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 53,
      "summary": {
        "sample_size": 121,
        "avg_trap_score": 51.48,
        "high_risk_count": 7,
        "high_risk_ratio": 0.0579,
        "watch_count": 33,
        "watch_ratio": 0.2727,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 70.59,
        "concentration_spread": 19.1,
        "gauge_score": 53,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300308",
        "top_stock_name": "中际旭创",
        "top_financing_pressure_score": 80.0
      },
      "prompt": "当前高风险样本集中在 中际旭创 等标的，前排样本平均陷阱分约 70.6，高风险票 7 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "7",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "71%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中际旭创 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "前排龙头与跟风标的分化增大，追高容错率下降。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "轻仓试错，优先保留强趋势与成交结构更干净的样本。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "待复盘",
        "note": ""
      }
    },
    {
      "date": "2026-07-30",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 121,
        "avg_trap_score": 48.76,
        "high_risk_count": 8,
        "high_risk_ratio": 0.0661,
        "watch_count": 23,
        "watch_ratio": 0.1901,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 70.88,
        "concentration_spread": 22.12,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "002384",
        "top_stock_name": "东山精密",
        "top_financing_pressure_score": 80.0
      },
      "prompt": "当前高风险样本集中在 东山精密 等标的，前排样本平均陷阱分约 70.9，高风险票 8 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "8",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "71%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "东山精密 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "前排龙头与跟风标的分化增大，追高容错率下降。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "轻仓试错，优先保留强趋势与成交结构更干净的样本。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 70.6，高风险样本 7 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      }
    },
    {
      "date": "2026-07-29",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 57,
      "summary": {
        "sample_size": 121,
        "avg_trap_score": 53.96,
        "high_risk_count": 11,
        "high_risk_ratio": 0.0909,
        "watch_count": 41,
        "watch_ratio": 0.3388,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 76.6,
        "concentration_spread": 22.63,
        "gauge_score": 57,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "002384",
        "top_stock_name": "东山精密",
        "top_financing_pressure_score": 94.54
      },
      "prompt": "当前高风险样本集中在 东山精密 等标的，前排样本平均陷阱分约 76.6，高风险票 11 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "11",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "77%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "95%",
          "note": "东山精密 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "前排龙头与跟风标的分化增大，追高容错率下降。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "轻仓试错，优先保留强趋势与成交结构更干净的样本。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 70.9，高风险样本 8 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      }
    },
    {
      "date": "2026-07-28",
      "title": "量化高危区，先看承接，再谈进攻。",
      "gauge_score": 72,
      "summary": {
        "sample_size": 117,
        "avg_trap_score": 49.64,
        "high_risk_count": 20,
        "high_risk_ratio": 0.1709,
        "watch_count": 38,
        "watch_ratio": 0.3248,
        "top_cohort_size": 11,
        "top_cohort_avg_trap_score": 78.44,
        "concentration_spread": 28.8,
        "gauge_score": 72,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300458",
        "top_stock_name": "全志科技",
        "top_financing_pressure_score": 100.0
      },
      "prompt": "当前高风险样本集中在 全志科技 等标的，前排样本平均陷阱分约 78.4，高风险票 20 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "20",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "78%",
          "note": "前 11 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "100%",
          "note": "全志科技 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "高纯度科技核心股拥挤度偏高，冲高回落风险更大。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "避免追涨，优先确认量价背离后的承接质量。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 77.6，高风险样本 18 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      }
    },
    {
      "date": "2026-07-27",
      "title": "量化高危区，先看承接，再谈进攻。",
      "gauge_score": 82,
      "prompt": "当前高风险样本集中在 全志科技 等标的，样本平均陷阱分约 49.6，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高频异动",
          "value": "20",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "筹码拥挤",
          "value": "50%",
          "note": "核心样本平均陷阱分映射"
        },
        {
          "label": "两融升温",
          "value": "100%",
          "note": "全志科技 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "高纯度科技核心股拥挤度偏高，冲高回落风险更大。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 易放大冲高回落"
        },
        {
          "label": "执行纪律",
          "value": "避免追涨，优先确认量价背离后的承接质量。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "避坑成功",
        "note": "次日全市场高风险特征延续，样本平均陷阱分 49.6，高风险样本 20 只，继续控制追高是有效的。"
      }
    },
    {
      "date": "2026-07-26",
      "title": "量化高危区，先看承接，再谈进攻。",
      "gauge_score": 82,
      "prompt": "当前高风险样本集中在 通富微电 等标的，样本平均陷阱分约 47.3，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高频异动",
          "value": "3",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "筹码拥挤",
          "value": "47%",
          "note": "核心样本平均陷阱分映射"
        },
        {
          "label": "两融升温",
          "value": "100%",
          "note": "通富微电 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "高纯度科技核心股拥挤度偏高，冲高回落风险更大。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 易放大冲高回落"
        },
        {
          "label": "执行纪律",
          "value": "避免追涨，优先确认量价背离后的承接质量。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "避坑成功",
        "note": "次日高开冲高后回落，追涨资金承压，预警兑现。"
      }
    },
    {
      "date": "2026-07-25",
      "title": "热点前排拥挤，谨防一致性兑现。",
      "gauge_score": 76,
      "prompt": "高位趋势股的量化拥挤度继续上升，明日更适合看分歧后的真实承接，不适合盲目接加速。",
      "signals": [
        {
          "label": "高频异动",
          "value": "11",
          "note": "冲高回落样本明显增加"
        },
        {
          "label": "筹码拥挤",
          "value": "61%",
          "note": "前排辨识度集中"
        },
        {
          "label": "两融升温",
          "value": "+18%",
          "note": "杠杆资金继续抬升"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "辨识度抱团延续，但补涨弹性在减弱。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "09:55 - 10:25 易出现缩量假突破"
        },
        {
          "label": "执行纪律",
          "value": "宁可错过加速，也不要在一致性顶点追价。"
        }
      ],
      "strategy": "一致性越强，次日给你的容错通常越低。把精力留给回踩确认，而不是情绪最满的瞬间。",
      "review": {
        "status": "避坑成功",
        "note": "高位股次日多数冲高震荡，追高性价比偏低，预判有效。"
      }
    },
    {
      "date": "2026-07-24",
      "title": "量化高危区，先看承接，再谈进攻。",
      "gauge_score": 68,
      "prompt": "量化高频资金在连续拉高后有回撤兑现迹象，明日更适合做低吸辨真伪，避免追高接一致性。",
      "signals": [
        {
          "label": "高频异动",
          "value": "14",
          "note": "疑似假突破样本"
        },
        {
          "label": "筹码拥挤",
          "value": "67%",
          "note": "热点集中在前排"
        },
        {
          "label": "两融升温",
          "value": "+21%",
          "note": "杠杆风险放大"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "算力硬件优于纯题材映射"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 易放大冲高回落"
        },
        {
          "label": "执行纪律",
          "value": "避免追涨，优先确认量价背离"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "避坑成功",
        "note": "次日板块承接不足，强追的收益风险比明显偏低。"
      }
    },
    {
      "date": "2026-07-23",
      "title": "高低切换加快，后排更易成为量化出口。",
      "gauge_score": 63,
      "prompt": "热点内部高低切换速度提升，明日优先观察核心股能否稳住，后排跟风不要恋战。",
      "signals": [
        {
          "label": "高频异动",
          "value": "9",
          "note": "尾盘回落个股增多"
        },
        {
          "label": "筹码拥挤",
          "value": "54%",
          "note": "核心抱团尚未松动"
        },
        {
          "label": "两融升温",
          "value": "+9%",
          "note": "杠杆资金温和升温"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "前排核心与后排补涨分化扩大。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "13:20 - 13:50 易出现午后兑现"
        },
        {
          "label": "执行纪律",
          "value": "后排冲高不留恋，优先盯住前排承接。"
        }
      ],
      "strategy": "当市场从普涨转向精选，后排往往先失去流动性。先控制仓位，再谈博弈切换。",
      "review": {
        "status": "避坑成功",
        "note": "后排标的次日明显掉队，回避跟风方向效果较好。"
      }
    },
    {
      "date": "2026-07-22",
      "title": "板块分歧扩大，追高容错率下降。",
      "gauge_score": 58,
      "prompt": "主线分歧开始扩大，强势股虽然还在，但次日博弈难度上升，先避开缩量加速。",
      "signals": [
        {
          "label": "高频异动",
          "value": "7",
          "note": "缩量拉升样本抬头"
        },
        {
          "label": "筹码拥挤",
          "value": "49%",
          "note": "抱团强度仍在"
        },
        {
          "label": "两融升温",
          "value": "+6%",
          "note": "杠杆资金边际增加"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "前排还能扛，后排已开始掉队。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:15 - 10:35 易出现冲高回封失败"
        },
        {
          "label": "执行纪律",
          "value": "先看量能确认，不做无量硬顶。"
        }
      ],
      "strategy": "量化资金最喜欢在缩量一致时做反身兑现。看到强，不等于适合买。",
      "review": {
        "status": "观察中",
        "note": "次日分化有限，部分强势股仍有延续，信号偏中性。"
      }
    },
    {
      "date": "2026-07-21",
      "title": "风险温和抬升，先盯核心再看扩散。",
      "gauge_score": 51,
      "prompt": "量化陷阱分进入抬升区间，但整体仍未失控，明日适合围绕核心承接而非追逐扩散。",
      "signals": [
        {
          "label": "高频异动",
          "value": "5",
          "note": "炸板样本仍可控"
        },
        {
          "label": "筹码拥挤",
          "value": "43%",
          "note": "拥挤度开始回升"
        },
        {
          "label": "两融升温",
          "value": "+4%",
          "note": "杠杆情绪温和回暖"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "扩散阶段轮动较快，辨识度不足的标的更易掉队。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "14:10 - 14:40 易出现尾盘抢跑"
        },
        {
          "label": "执行纪律",
          "value": "轻仓试错，重点观察核心股回踩承接。"
        }
      ],
      "strategy": "温和升温阶段最怕看到信号就满仓，仓位管理比方向判断更重要。",
      "review": {
        "status": "避坑成功",
        "note": "扩散题材延续性较弱，聚焦核心而非追后排的判断有效。"
      }
    }
  ],
  "stocks": [
    {
      "code": "300476",
      "name": "胜宏科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 82,
        "margin_balance": 17067727643.0,
        "margin_buy": 995576678.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.61,
        "financing_pressure_score": 56.44,
        "incremental_financing_pressure_score": 70.55,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 44.88
      },
      "trap_score": 63.07
    },
    {
      "code": "002384",
      "name": "东山精密",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 68,
        "margin_balance": 12656701517.0,
        "margin_buy": 2535660976.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.65,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 61.2
      },
      "trap_score": 72.04
    },
    {
      "code": "300308",
      "name": "中际旭创",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 88,
        "margin_balance": 36215969187.0,
        "margin_buy": 6113186656.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.25,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 50.0
      },
      "trap_score": 76.8
    },
    {
      "code": "002230",
      "name": "科大讯飞",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5478942635.0,
        "margin_buy": 118705426.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.48,
        "financing_pressure_score": 29.33,
        "incremental_financing_pressure_score": 36.67,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.84
      },
      "trap_score": 33.07
    },
    {
      "code": "688256",
      "name": "寒武纪",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 17674745034.0,
        "margin_buy": 1176963291.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.0,
        "financing_pressure_score": 60.85,
        "incremental_financing_pressure_score": 76.06,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.0
      },
      "trap_score": 49.68
    },
    {
      "code": "603019",
      "name": "中科曙光",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 9046966000.0,
        "margin_buy": 724560365.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.58,
        "financing_pressure_score": 68.03,
        "incremental_financing_pressure_score": 85.03,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 36.64
      },
      "trap_score": 55.44
    },
    {
      "code": "603160",
      "name": "汇顶科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1025240718.0,
        "margin_buy": 40046866.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.3,
        "financing_pressure_score": 43.25,
        "incremental_financing_pressure_score": 54.06,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.4
      },
      "trap_score": 39.04
    },
    {
      "code": "603986",
      "name": "兆易创新",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 17995488978.0,
        "margin_buy": 4734679853.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 14.53,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    },
    {
      "code": "603501",
      "name": "豪威集团",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4411109681.0,
        "margin_buy": 172996174.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.17,
        "financing_pressure_score": 43.37,
        "incremental_financing_pressure_score": 54.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.36
      },
      "trap_score": 40.49
    },
    {
      "code": "603893",
      "name": "瑞芯微",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2128793955.0,
        "margin_buy": 395901480.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.37,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 34.96
      },
      "trap_score": 60.49
    },
    {
      "code": "688111",
      "name": "金山办公",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4684703085.0,
        "margin_buy": 276872289.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.73,
        "financing_pressure_score": 56.85,
        "incremental_financing_pressure_score": 71.07,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.84
      },
      "trap_score": 47.45
    },
    {
      "code": "688041",
      "name": "海光信息",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8059426315.0,
        "margin_buy": 390945054.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.26,
        "financing_pressure_score": 50.81,
        "incremental_financing_pressure_score": 63.51,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.08
      },
      "trap_score": 42.38
    },
    {
      "code": "688012",
      "name": "中微公司",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4834791992.0,
        "margin_buy": 906808415.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.61,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.88
      },
      "trap_score": 59.28
    },
    {
      "code": "688008",
      "name": "澜起科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 14950971595.0,
        "margin_buy": 1506628525.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.13,
        "financing_pressure_score": 74.23,
        "incremental_financing_pressure_score": 92.79,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 41.04
      },
      "trap_score": 59.11
    },
    {
      "code": "688169",
      "name": "石头科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1020503470.0,
        "margin_buy": 49540801.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.46,
        "financing_pressure_score": 50.84,
        "incremental_financing_pressure_score": 63.55,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.68
      },
      "trap_score": 45.91
    },
    {
      "code": "688072",
      "name": "拓荆科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1972345079.0,
        "margin_buy": 377921981.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.91,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.28
      },
      "trap_score": 58.16
    },
    {
      "code": "688099",
      "name": "晶晨股份",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1110786240.0,
        "margin_buy": 145414624.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.66,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 37.28
      },
      "trap_score": 60.96
    },
    {
      "code": "688027",
      "name": "国盾量子",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1216252804.0,
        "margin_buy": 58239726.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.69,
        "financing_pressure_score": 50.31,
        "incremental_financing_pressure_score": 62.88,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.52
      },
      "trap_score": 44.44
    },
    {
      "code": "688608",
      "name": "恒玄科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1122339454.0,
        "margin_buy": 106047115.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.94,
        "financing_pressure_score": 72.35,
        "incremental_financing_pressure_score": 90.43,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.52
      },
      "trap_score": 54.76
    },
    {
      "code": "688018",
      "name": "乐鑫科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 767896903.0,
        "margin_buy": 80837936.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.75,
        "financing_pressure_score": 75.58,
        "incremental_financing_pressure_score": 94.48,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.0
      },
      "trap_score": 57.51
    },
    {
      "code": "688036",
      "name": "传音控股",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 904907763.0,
        "margin_buy": 123599701.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.65,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.2
      },
      "trap_score": 56.14
    },
    {
      "code": "688047",
      "name": "龙芯中科",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1274372799.0,
        "margin_buy": 46444092.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.29,
        "financing_pressure_score": 41.16,
        "incremental_financing_pressure_score": 51.44,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.32
      },
      "trap_score": 38.09
    },
    {
      "code": "688126",
      "name": "沪硅产业",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2792540243.0,
        "margin_buy": 178176305.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.47,
        "financing_pressure_score": 59.36,
        "incremental_financing_pressure_score": 74.2,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.76
      },
      "trap_score": 49.76
    },
    {
      "code": "688037",
      "name": "芯源微",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 561538290.0,
        "margin_buy": 95201873.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.39,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 35.12
      },
      "trap_score": 60.52
    },
    {
      "code": "688213",
      "name": "思特威-W",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1371309073.0,
        "margin_buy": 95388982.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.75,
        "financing_pressure_score": 62.43,
        "incremental_financing_pressure_score": 78.04,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.0
      },
      "trap_score": 49.99
    },
    {
      "code": "688120",
      "name": "华海清科",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1489424728.0,
        "margin_buy": 197624818.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.12,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.96
      },
      "trap_score": 60.09
    },
    {
      "code": "688981",
      "name": "中芯国际",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11053920623.0,
        "margin_buy": 790475787.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.0,
        "financing_pressure_score": 63.47,
        "incremental_financing_pressure_score": 79.34,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.0
      },
      "trap_score": 52.46
    },
    {
      "code": "603296",
      "name": "华勤技术",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1061667540.0,
        "margin_buy": 226927891.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.14,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.12
      },
      "trap_score": 60.12
    },
    {
      "code": "300033",
      "name": "同花顺",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5622172317.0,
        "margin_buy": 537422198.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.51,
        "financing_pressure_score": 72.68,
        "incremental_financing_pressure_score": 90.85,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.08
      },
      "trap_score": 55.82
    },
    {
      "code": "300496",
      "name": "中科创达",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1786785055.0,
        "margin_buy": 56064253.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.18,
        "financing_pressure_score": 37.1,
        "incremental_financing_pressure_score": 46.38,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.44
      },
      "trap_score": 40.88
    },
    {
      "code": "300502",
      "name": "新易盛",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 23029561885.0,
        "margin_buy": 2478357587.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.68,
        "financing_pressure_score": 76.28,
        "incremental_financing_pressure_score": 95.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 61.44
      },
      "trap_score": 64.11
    },
    {
      "code": "300223",
      "name": "北京君正",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3050103496.0,
        "margin_buy": 589984056.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 13.26,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    },
    {
      "code": "300383",
      "name": "光环新网",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1390251515.0,
        "margin_buy": 61550412.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.08,
        "financing_pressure_score": 47.42,
        "incremental_financing_pressure_score": 59.27,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.64
      },
      "trap_score": 45.37
    },
    {
      "code": "300458",
      "name": "全志科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1636638535.0,
        "margin_buy": 424742999.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 18.47,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    },
    {
      "code": "300474",
      "name": "景嘉微",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1289296751.0,
        "margin_buy": 36168447.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.19,
        "financing_pressure_score": 34.44,
        "incremental_financing_pressure_score": 43.05,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.52
      },
      "trap_score": 36.5
    },
    {
      "code": "300454",
      "name": "深信服",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1485236576.0,
        "margin_buy": 170019349.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.65,
        "financing_pressure_score": 78.34,
        "incremental_financing_pressure_score": 97.93,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 45.2
      },
      "trap_score": 61.79
    },
    {
      "code": "300212",
      "name": "*ST易录",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.51,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.08
      },
      "trap_score": 21.52
    },
    {
      "code": "300251",
      "name": "光线传媒",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1261355938.0,
        "margin_buy": 29059279.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.58,
        "financing_pressure_score": 30.43,
        "incremental_financing_pressure_score": 38.04,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.64
      },
      "trap_score": 33.72
    },
    {
      "code": "300229",
      "name": "拓尔思",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1034363414.0,
        "margin_buy": 11340246.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.31,
        "financing_pressure_score": 15.35,
        "incremental_financing_pressure_score": 19.19,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.48
      },
      "trap_score": 29.7
    },
    {
      "code": "300624",
      "name": "万兴科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 533276724.0,
        "margin_buy": 22372142.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.5,
        "financing_pressure_score": 45.56,
        "incremental_financing_pressure_score": 56.95,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 52.0
      },
      "trap_score": 48.4
    },
    {
      "code": "300442",
      "name": "润泽科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3443432589.0,
        "margin_buy": 122112195.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.81,
        "financing_pressure_score": 40.37,
        "incremental_financing_pressure_score": 50.46,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.48
      },
      "trap_score": 38.56
    },
    {
      "code": "300803",
      "name": "指南针",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3425580771.0,
        "margin_buy": 222663292.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.24,
        "financing_pressure_score": 60.0,
        "incremental_financing_pressure_score": 75.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.92
      },
      "trap_score": 49.68
    },
    {
      "code": "300364",
      "name": "中文在线",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 914069636.0,
        "margin_buy": 65577655.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.93,
        "financing_pressure_score": 63.6,
        "incremental_financing_pressure_score": 79.5,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 47.44
      },
      "trap_score": 55.61
    },
    {
      "code": "300394",
      "name": "天孚通信",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7196202027.0,
        "margin_buy": 447463354.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.32,
        "financing_pressure_score": 58.5,
        "incremental_financing_pressure_score": 73.12,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 42.56
      },
      "trap_score": 52.34
    },
    {
      "code": "300570",
      "name": "太辰光",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1259035456.0,
        "margin_buy": 115753507.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 10.44,
        "financing_pressure_score": 71.58,
        "incremental_financing_pressure_score": 89.48,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 83.52
      },
      "trap_score": 66.41
    },
    {
      "code": "300782",
      "name": "卓胜微",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1878669483.0,
        "margin_buy": 62641624.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.6,
        "financing_pressure_score": 38.67,
        "incremental_financing_pressure_score": 48.34,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.8
      },
      "trap_score": 40.66
    },
    {
      "code": "300548",
      "name": "长芯博创",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2207321097.0,
        "margin_buy": 142657793.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.66,
        "financing_pressure_score": 59.8,
        "incremental_financing_pressure_score": 74.75,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 61.28
      },
      "trap_score": 56.67
    },
    {
      "code": "300604",
      "name": "长川科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3129054865.0,
        "margin_buy": 581423195.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.1,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 56.8
      },
      "trap_score": 64.86
    },
    {
      "code": "300118",
      "name": "东方日升",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 588566049.0,
        "margin_buy": 26332746.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.58,
        "financing_pressure_score": 47.79,
        "incremental_financing_pressure_score": 59.74,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.64
      },
      "trap_score": 44.73
    },
    {
      "code": "300373",
      "name": "扬杰科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1575521633.0,
        "margin_buy": 172984037.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.0,
        "financing_pressure_score": 76.94,
        "incremental_financing_pressure_score": 96.17,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.0
      },
      "trap_score": 56.92
    },
    {
      "code": "301236",
      "name": "软通动力",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2057518673.0,
        "margin_buy": 48148079.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.08,
        "financing_pressure_score": 30.72,
        "incremental_financing_pressure_score": 38.4,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.64
      },
      "trap_score": 34.65
    },
    {
      "code": "301269",
      "name": "华大九天",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1006700307.0,
        "margin_buy": 70529416.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.5,
        "financing_pressure_score": 62.7,
        "incremental_financing_pressure_score": 78.37,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.0
      },
      "trap_score": 48.12
    },
    {
      "code": "301312",
      "name": "智立方",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 189056433.0,
        "margin_buy": 26558010.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.04,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 48.32
      },
      "trap_score": 63.16
    },
    {
      "code": "301308",
      "name": "江波龙",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5911413449.0,
        "margin_buy": 665039733.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.52,
        "financing_pressure_score": 77.75,
        "incremental_financing_pressure_score": 97.19,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 76.16
      },
      "trap_score": 67.72
    },
    {
      "code": "301095",
      "name": "广立微",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 483401345.0,
        "margin_buy": 33690610.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.35,
        "financing_pressure_score": 62.5,
        "incremental_financing_pressure_score": 78.13,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 42.8
      },
      "trap_score": 54.19
    },
    {
      "code": "301171",
      "name": "易点天下",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1183090131.0,
        "margin_buy": 42401822.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.72,
        "financing_pressure_score": 40.67,
        "incremental_financing_pressure_score": 50.84,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 61.76
      },
      "trap_score": 48.15
    },
    {
      "code": "301165",
      "name": "锐捷网络",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 727592711.0,
        "margin_buy": 241295363.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.45,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.6
      },
      "trap_score": 57.42
    },
    {
      "code": "300059",
      "name": "东方财富",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 23485756121.0,
        "margin_buy": 686121712.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.25,
        "financing_pressure_score": 35.37,
        "incremental_financing_pressure_score": 44.21,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.0
      },
      "trap_score": 37.02
    },
    {
      "code": "002371",
      "name": "北方华创",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3359554922.0,
        "margin_buy": 555919584.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.25,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.0
      },
      "trap_score": 57.1
    },
    {
      "code": "002475",
      "name": "立讯精密",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5894534620.0,
        "margin_buy": 484470623.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.27,
        "financing_pressure_score": 68.66,
        "incremental_financing_pressure_score": 85.82,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.16
      },
      "trap_score": 52.03
    },
    {
      "code": "002463",
      "name": "沪电股份",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5125788531.0,
        "margin_buy": 772005754.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.22,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.76
      },
      "trap_score": 60.25
    },
    {
      "code": "002555",
      "name": "三七互娱",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1758857843.0,
        "margin_buy": 136387753.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.98,
        "financing_pressure_score": 66.69,
        "incremental_financing_pressure_score": 83.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.84
      },
      "trap_score": 53.88
    },
    {
      "code": "002236",
      "name": "大华股份",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1483812812.0,
        "margin_buy": 75591789.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.05,
        "financing_pressure_score": 52.5,
        "incremental_financing_pressure_score": 65.63,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.4
      },
      "trap_score": 44.41
    },
    {
      "code": "002241",
      "name": "歌尔股份",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4055441642.0,
        "margin_buy": 294770225.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.04,
        "financing_pressure_score": 64.1,
        "incremental_financing_pressure_score": 80.12,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.32
      },
      "trap_score": 51.21
    },
    {
      "code": "600050",
      "name": "中国联通",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2803602232.0,
        "margin_buy": 56500237.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.65,
        "financing_pressure_score": 28.12,
        "incremental_financing_pressure_score": 35.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 5.2
      },
      "trap_score": 31.19
    },
    {
      "code": "002859",
      "name": "洁美科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 746312567.0,
        "margin_buy": 72191560.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.97,
        "financing_pressure_score": 73.02,
        "incremental_financing_pressure_score": 91.27,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 63.76
      },
      "trap_score": 63.11
    },
    {
      "code": "002920",
      "name": "德赛西威",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1402568445.0,
        "margin_buy": 52366334.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.67,
        "financing_pressure_score": 41.87,
        "incremental_financing_pressure_score": 52.34,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.36
      },
      "trap_score": 40.61
    },
    {
      "code": "002456",
      "name": "欧菲光",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1662078640.0,
        "margin_buy": 31191993.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.25,
        "financing_pressure_score": 26.27,
        "incremental_financing_pressure_score": 32.84,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.0
      },
      "trap_score": 32.92
    },
    {
      "code": "002156",
      "name": "通富微电",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4402227422.0,
        "margin_buy": 916998038.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 10.61,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 84.88
      },
      "trap_score": 70.48
    },
    {
      "code": "002261",
      "name": "拓维信息",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1576703453.0,
        "margin_buy": 62153322.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.35,
        "financing_pressure_score": 43.54,
        "incremental_financing_pressure_score": 54.42,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 42.8
      },
      "trap_score": 45.65
    },
    {
      "code": "002273",
      "name": "水晶光电",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2868628501.0,
        "margin_buy": 80411490.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.81,
        "financing_pressure_score": 34.43,
        "incremental_financing_pressure_score": 43.03,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 38.48
      },
      "trap_score": 40.69
    },
    {
      "code": "002281",
      "name": "光迅科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3839587501.0,
        "margin_buy": 339683399.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.06,
        "financing_pressure_score": 70.54,
        "incremental_financing_pressure_score": 88.18,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 40.48
      },
      "trap_score": 57.34
    },
    {
      "code": "002415",
      "name": "海康威视",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5056925297.0,
        "margin_buy": 597673183.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.09,
        "financing_pressure_score": 79.46,
        "incremental_financing_pressure_score": 99.32,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.72
      },
      "trap_score": 55.0
    },
    {
      "code": "002916",
      "name": "深南电路",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1989042722.0,
        "margin_buy": 252031243.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.09,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.72
      },
      "trap_score": 56.84
    },
    {
      "code": "002517",
      "name": "恺英网络",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1423736494.0,
        "margin_buy": 124297284.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.92,
        "financing_pressure_score": 70.19,
        "incremental_financing_pressure_score": 87.74,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 63.36
      },
      "trap_score": 61.76
    },
    {
      "code": "002049",
      "name": "紫光国微",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4399026493.0,
        "margin_buy": 178958201.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.84,
        "financing_pressure_score": 44.55,
        "incremental_financing_pressure_score": 55.68,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.72
      },
      "trap_score": 42.09
    },
    {
      "code": "002138",
      "name": "顺络电子",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1352847474.0,
        "margin_buy": 114524402.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.91,
        "financing_pressure_score": 69.4,
        "incremental_financing_pressure_score": 86.75,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 55.28
      },
      "trap_score": 59.79
    },
    {
      "code": "002185",
      "name": "华天科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2446698894.0,
        "margin_buy": 431124523.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 12.03,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 96.24
      },
      "trap_score": 72.75
    },
    {
      "code": "000063",
      "name": "中兴通讯",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 10111942554.0,
        "margin_buy": 449224522.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.18,
        "financing_pressure_score": 47.54,
        "incremental_financing_pressure_score": 59.43,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.44
      },
      "trap_score": 43.98
    },
    {
      "code": "000977",
      "name": "浪潮信息",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4304432835.0,
        "margin_buy": 649551670.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.25,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 50.0
      },
      "trap_score": 63.5
    },
    {
      "code": "000938",
      "name": "紫光股份",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4737628281.0,
        "margin_buy": 1273463021.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.88,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 71.04
      },
      "trap_score": 67.71
    },
    {
      "code": "000988",
      "name": "华工科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8290827081.0,
        "margin_buy": 580629178.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.31,
        "financing_pressure_score": 62.68,
        "incremental_financing_pressure_score": 78.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 58.48
      },
      "trap_score": 57.4
    },
    {
      "code": "000034",
      "name": "神州数码",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1682940602.0,
        "margin_buy": 96316788.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.24,
        "financing_pressure_score": 55.86,
        "incremental_financing_pressure_score": 69.82,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 49.92
      },
      "trap_score": 52.62
    },
    {
      "code": "000066",
      "name": "中国长城",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1984805502.0,
        "margin_buy": 99311455.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.46,
        "financing_pressure_score": 52.02,
        "incremental_financing_pressure_score": 65.02,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 35.68
      },
      "trap_score": 48.05
    },
    {
      "code": "000725",
      "name": "京东方Ａ",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11834584491.0,
        "margin_buy": 1243019390.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.22,
        "financing_pressure_score": 75.51,
        "incremental_financing_pressure_score": 94.39,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 49.76
      },
      "trap_score": 61.43
    },
    {
      "code": "000100",
      "name": "TCL科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4944944140.0,
        "margin_buy": 323900336.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.58,
        "financing_pressure_score": 60.27,
        "incremental_financing_pressure_score": 75.33,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.64
      },
      "trap_score": 50.35
    },
    {
      "code": "600584",
      "name": "长电科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6698713053.0,
        "margin_buy": 1025509357.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.93,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 71.44
      },
      "trap_score": 67.79
    },
    {
      "code": "600570",
      "name": "恒生电子",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2641837823.0,
        "margin_buy": 86689896.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.69,
        "financing_pressure_score": 38.25,
        "incremental_financing_pressure_score": 47.81,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.52
      },
      "trap_score": 39.02
    },
    {
      "code": "600845",
      "name": "宝信软件",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 584598959.0,
        "margin_buy": 21268520.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.9,
        "financing_pressure_score": 41.11,
        "incremental_financing_pressure_score": 51.38,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.2
      },
      "trap_score": 37.44
    },
    {
      "code": "600536",
      "name": "中国软件",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1474089889.0,
        "margin_buy": 43858410.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.74,
        "financing_pressure_score": 35.8,
        "incremental_financing_pressure_score": 44.75,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.92
      },
      "trap_score": 37.99
    },
    {
      "code": "600588",
      "name": "用友网络",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1380478798.0,
        "margin_buy": 101260640.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.66,
        "financing_pressure_score": 64.45,
        "incremental_financing_pressure_score": 80.57,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.28
      },
      "trap_score": 50.76
    },
    {
      "code": "600602",
      "name": "云赛智联",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 735438191.0,
        "margin_buy": 50034057.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.92,
        "financing_pressure_score": 61.62,
        "incremental_financing_pressure_score": 77.02,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.36
      },
      "trap_score": 51.5
    },
    {
      "code": "600171",
      "name": "上海贝岭",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 951344963.0,
        "margin_buy": 20087559.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.92,
        "financing_pressure_score": 28.89,
        "incremental_financing_pressure_score": 36.11,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.36
      },
      "trap_score": 33.57
    },
    {
      "code": "600498",
      "name": "烽火通信",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2216963117.0,
        "margin_buy": 140281663.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.52,
        "financing_pressure_score": 59.08,
        "incremental_financing_pressure_score": 73.85,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 44.16
      },
      "trap_score": 52.92
    },
    {
      "code": "600183",
      "name": "生益科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2945479080.0,
        "margin_buy": 431656633.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.36,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.88
      },
      "trap_score": 58.88
    },
    {
      "code": "600460",
      "name": "士兰微",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2009649574.0,
        "margin_buy": 263604171.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.8,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 46.4
      },
      "trap_score": 62.78
    },
    {
      "code": "600703",
      "name": "三安光电",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4321921653.0,
        "margin_buy": 171303561.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.66,
        "financing_pressure_score": 43.71,
        "incremental_financing_pressure_score": 54.64,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.28
      },
      "trap_score": 41.43
    },
    {
      "code": "601138",
      "name": "工业富联",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7956120569.0,
        "margin_buy": 542804189.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.77,
        "financing_pressure_score": 61.72,
        "incremental_financing_pressure_score": 77.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.16
      },
      "trap_score": 46.51
    },
    {
      "code": "601360",
      "name": "三六零",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1900572152.0,
        "margin_buy": 81966212.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.44,
        "financing_pressure_score": 46.5,
        "incremental_financing_pressure_score": 58.13,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.52
      },
      "trap_score": 40.73
    },
    {
      "code": "603000",
      "name": "人民网",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 449023899.0,
        "margin_buy": 19207411.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.62,
        "financing_pressure_score": 46.22,
        "incremental_financing_pressure_score": 57.78,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.96
      },
      "trap_score": 40.89
    },
    {
      "code": "300054",
      "name": "鼎龙股份",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2030720684.0,
        "margin_buy": 227779550.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.8,
        "financing_pressure_score": 77.65,
        "incremental_financing_pressure_score": 97.06,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 46.4
      },
      "trap_score": 61.72
    },
    {
      "code": "002192",
      "name": "融捷股份",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1283722919.0,
        "margin_buy": 115963449.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.06,
        "financing_pressure_score": 71.1,
        "incremental_financing_pressure_score": 88.88,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 48.48
      },
      "trap_score": 59.19
    },
    {
      "code": "002466",
      "name": "天齐锂业",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3440292324.0,
        "margin_buy": 214205002.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.88,
        "financing_pressure_score": 58.54,
        "incremental_financing_pressure_score": 73.18,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.04
      },
      "trap_score": 48.45
    },
    {
      "code": "002837",
      "name": "英维克",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3694046666.0,
        "margin_buy": 130261276.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.11,
        "financing_pressure_score": 40.21,
        "incremental_financing_pressure_score": 50.26,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.88
      },
      "trap_score": 42.17
    },
    {
      "code": "601869",
      "name": "长飞光纤",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2330144698.0,
        "margin_buy": 250319048.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.55,
        "financing_pressure_score": 76.23,
        "incremental_financing_pressure_score": 95.28,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.4
      },
      "trap_score": 57.48
    },
    {
      "code": "002938",
      "name": "鹏鼎控股",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1332777303.0,
        "margin_buy": 97113051.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.47,
        "financing_pressure_score": 64.19,
        "incremental_financing_pressure_score": 80.24,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.76
      },
      "trap_score": 48.74
    },
    {
      "code": "000878",
      "name": "云南铜业",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1906710396.0,
        "margin_buy": 33302176.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.69,
        "financing_pressure_score": 24.45,
        "incremental_financing_pressure_score": 30.57,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.52
      },
      "trap_score": 31.21
    },
    {
      "code": "002155",
      "name": "湖南黄金",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2100024383.0,
        "margin_buy": 73738120.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.51,
        "financing_pressure_score": 40.09,
        "incremental_financing_pressure_score": 50.11,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.08
      },
      "trap_score": 41.16
    },
    {
      "code": "600378",
      "name": "昊华科技",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1060484824.0,
        "margin_buy": 174905264.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.82,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 38.56
      },
      "trap_score": 61.21
    },
    {
      "code": "300418",
      "name": "昆仑万维",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3443804546.0,
        "margin_buy": 190433010.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.48,
        "financing_pressure_score": 54.83,
        "incremental_financing_pressure_score": 68.53,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 43.84
      },
      "trap_score": 50.94
    },
    {
      "code": "002218",
      "name": "拓日新能",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 125109198.0,
        "margin_buy": 36452339.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.84,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 54.72
      },
      "trap_score": 64.44
    },
    {
      "code": "300617",
      "name": "安靠智电",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.72,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.76
      },
      "trap_score": 23.45
    },
    {
      "code": "300738",
      "name": "奥飞数据",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1341044433.0,
        "margin_buy": 140305686.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.44,
        "financing_pressure_score": 75.39,
        "incremental_financing_pressure_score": 94.23,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 43.52
      },
      "trap_score": 60.13
    },
    {
      "code": "002126",
      "name": "银轮股份",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 488503126.0,
        "margin_buy": 26704591.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.1,
        "financing_pressure_score": 54.49,
        "incremental_financing_pressure_score": 68.11,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.8
      },
      "trap_score": 48.58
    },
    {
      "code": "002050",
      "name": "三花智控",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5712673028.0,
        "margin_buy": 152720896.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.29,
        "financing_pressure_score": 33.39,
        "incremental_financing_pressure_score": 41.73,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.32
      },
      "trap_score": 34.59
    },
    {
      "code": "603075",
      "name": "热威股份",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 41148171.0,
        "margin_buy": 4004040.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.0,
        "financing_pressure_score": 73.19,
        "incremental_financing_pressure_score": 91.49,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 48.0
      },
      "trap_score": 60.04
    },
    {
      "code": "603667",
      "name": "五洲新春",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1122285265.0,
        "margin_buy": 55319006.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.51,
        "financing_pressure_score": 51.43,
        "incremental_financing_pressure_score": 64.29,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.08
      },
      "trap_score": 46.26
    },
    {
      "code": "605020",
      "name": "永和股份",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 468886745.0,
        "margin_buy": 32406166.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.71,
        "financing_pressure_score": 62.19,
        "incremental_financing_pressure_score": 77.74,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.68
      },
      "trap_score": 49.82
    },
    {
      "code": "600160",
      "name": "巨化股份",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4110230698.0,
        "margin_buy": 129545982.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.77,
        "financing_pressure_score": 37.21,
        "incremental_financing_pressure_score": 46.52,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.16
      },
      "trap_score": 37.08
    },
    {
      "code": "603379",
      "name": "三美股份",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 895042406.0,
        "margin_buy": 44372228.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.55,
        "financing_pressure_score": 51.66,
        "incremental_financing_pressure_score": 64.58,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.4
      },
      "trap_score": 43.23
    },
    {
      "code": "600988",
      "name": "赤峰黄金",
      "margin_date": "20260729",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1080524239.0,
        "margin_buy": 167366950.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.67,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 37.36
      },
      "trap_score": 60.97
    }
  ]
};
