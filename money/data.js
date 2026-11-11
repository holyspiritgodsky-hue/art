window.__QUANT_DATA__ = {
  "generated_at": "2026-11-11T17:44:03+08:00",
  "data_freshness": {
    "warning_target_date": "2026-11-12",
    "spot_snapshot_at": "2026-11-11T17:44:03+08:00",
    "margin_data_as_of": "20261110",
    "margin_data_dates_by_market": {
      "szse": "20261110",
      "sse": "20261110"
    },
    "market_phase": "post_close"
  },
  "run_source": "manual",
  "whitelist_size": 125,
  "requested_count": 125,
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
    "600988",
    "000636",
    "688825",
    "600105",
    "300285"
  ],
  "processed_count": 125,
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
    "600988",
    "000636",
    "688825",
    "600105",
    "300285"
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
    "turnover_z_rule": "爆发分额外比较当前换手率相对近 20 日均值的偏离程度，优先保留相对放量但不过热的样本",
    "gauge_score_rule": "前排高分样本均分 * 0.55 + 全样本均分 * 0.25 + 高风险样本占比 * 100 * 0.20",
    "watch_ranking_rule": "爆发榜先看题材纯度、相对换手抬升、融资不过热和位置激活度，再叠加近 3 到 10 日趋势确认；环境偏弱时会自动抬高趋势门槛。"
  },
  "spot_data_health": {
    "source": "eastmoney:stock_zh_a_spot_em",
    "total_rows": 5928,
    "turnover_rate_available_rows": 5928,
    "turnover_rate_missing_rows": 0,
    "turnover_rate_missing_ratio": 0.0,
    "float_market_cap_available_rows": 5587,
    "float_market_cap_missing_rows": 341,
    "float_market_cap_missing_ratio": 0.0575
  },
  "daily_warning": {
    "date": "2026-11-12",
    "title": "量化高危区，先看承接，再谈进攻。",
    "gauge_score": 72,
    "summary": {
      "sample_size": 125,
      "avg_trap_score": 50.34,
      "high_risk_count": 14,
      "high_risk_ratio": 0.112,
      "watch_count": 32,
      "watch_ratio": 0.256,
      "top_cohort_size": 12,
      "top_cohort_avg_trap_score": 77.51,
      "concentration_spread": 27.17,
      "gauge_score": 72,
      "window_risk": "high",
      "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
      "window_basis": "高风险票数量多，前排平均分也偏高。",
      "top_stock_code": "002384",
      "top_stock_name": "东山精密",
      "top_financing_pressure_score": 94.75,
      "breakout_environment": {
        "state": "tight",
        "score_multiplier": 0.88,
        "min_return_3d_pct": 1.0,
        "max_ma5_gap_pct": -1.0,
        "note": "当前环境偏弱，缩量修复需要更强确认。",
        "positive_ratio": 0.917,
        "weak_ratio": 0.167
      }
    },
    "prompt": "当前高风险样本集中在 东山精密 等标的，前排样本平均陷阱分约 77.5，高风险票 14 只，优先防范一致性追高后的回撤兑现。",
    "signals": [
      {
        "label": "高风险个股数量",
        "value": "14",
        "note": "陷阱分大于等于 70 的样本数"
      },
      {
        "label": "整体追高热度",
        "value": "78%",
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
      "status": "待复盘",
      "note": ""
    },
    "rankings": {
      "logic_version": "breakout-aware-v3",
      "trend_candidate_count": 12,
      "environment_state": "tight",
      "avoid_list": [
        {
          "code": "002384",
          "name": "东山精密",
          "score": 83,
          "reason": "杠杆压力过高"
        },
        {
          "code": "301171",
          "name": "易点天下",
          "score": 81,
          "reason": "杠杆压力过高"
        },
        {
          "code": "300364",
          "name": "中文在线",
          "score": 81,
          "reason": "杠杆压力过高"
        }
      ],
      "watch_list": [
        {
          "code": "002281",
          "name": "光迅科技",
          "score": 75,
          "trap_score": 59,
          "reason": "短线修复最完整，优先等回踩不破再跟",
          "trend_label": "趋势中性"
        },
        {
          "code": "301308",
          "name": "江波龙",
          "score": 75,
          "trap_score": 54,
          "reason": "短线修复最完整，优先等回踩不破再跟",
          "trend_label": "趋势中性"
        },
        {
          "code": "600498",
          "name": "烽火通信",
          "score": 74,
          "trap_score": 61,
          "reason": "短线修复最完整，优先等回踩不破再跟",
          "trend_label": "趋势中性"
        }
      ]
    }
  },
  "warning_history": [
    {
      "date": "2026-11-12",
      "title": "量化高危区，先看承接，再谈进攻。",
      "gauge_score": 72,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 50.34,
        "high_risk_count": 14,
        "high_risk_ratio": 0.112,
        "watch_count": 32,
        "watch_ratio": 0.256,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 77.51,
        "concentration_spread": 27.17,
        "gauge_score": 72,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "002384",
        "top_stock_name": "东山精密",
        "top_financing_pressure_score": 94.75,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.917,
          "weak_ratio": 0.167
        }
      },
      "prompt": "当前高风险样本集中在 东山精密 等标的，前排样本平均陷阱分约 77.5，高风险票 14 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "14",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "78%",
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
        "status": "待复盘",
        "note": ""
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "002384",
            "name": "东山精密",
            "score": 83,
            "reason": "杠杆压力过高"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 81,
            "reason": "杠杆压力过高"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 81,
            "reason": "杠杆压力过高"
          }
        ],
        "watch_list": [
          {
            "code": "002281",
            "name": "光迅科技",
            "score": 75,
            "trap_score": 59,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "301308",
            "name": "江波龙",
            "score": 75,
            "trap_score": 54,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "600498",
            "name": "烽火通信",
            "score": 74,
            "trap_score": 61,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-11-11",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 56,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 48.8,
        "high_risk_count": 11,
        "high_risk_ratio": 0.088,
        "watch_count": 25,
        "watch_ratio": 0.2,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 76.04,
        "concentration_spread": 27.23,
        "gauge_score": 56,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "002384",
        "top_stock_name": "东山精密",
        "top_financing_pressure_score": 95.65,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.417,
          "weak_ratio": 0.0
        }
      },
      "prompt": "当前高风险样本集中在 东山精密 等标的，前排样本平均陷阱分约 76.0，高风险票 11 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "11",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "76%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "96%",
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
        "note": "方向判断对了。次日前排样本平均陷阱分 77.5，高风险样本 14 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段未命中",
          "note": "3 个市场代理里只有 1 个在 10:05-10:40 出现明显冲高回落。",
          "proxies": [
            {
              "symbol": "000001",
              "name": "上证指数",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 3658.46,
              "peak_price": 3660.46,
              "peak_time": "10:37",
              "window_close_price": 3657.47,
              "rise_pct": 0.055,
              "fade_pct": -0.082,
              "close_from_peak_pct": -0.082,
              "hit": false
            },
            {
              "symbol": "399001",
              "name": "深证成指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 11215.39,
              "peak_price": 11236.3,
              "peak_time": "10:37",
              "window_close_price": 11216.62,
              "rise_pct": 0.186,
              "fade_pct": -0.175,
              "close_from_peak_pct": -0.175,
              "hit": false
            },
            {
              "symbol": "399006",
              "name": "创业板指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 2496.76,
              "peak_price": 2512.45,
              "peak_time": "10:37",
              "window_close_price": 2504.97,
              "rise_pct": 0.628,
              "fade_pct": -0.298,
              "close_from_peak_pct": -0.298,
              "hit": true
            }
          ],
          "source_state": "ready"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "002384",
            "name": "东山精密",
            "score": 81,
            "reason": "杠杆压力过高"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 81,
            "reason": "杠杆压力过高"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 80,
            "reason": "杠杆压力过高"
          }
        ],
        "watch_list": [
          {
            "code": "002273",
            "name": "水晶光电",
            "score": 83,
            "trap_score": 44,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "688608",
            "name": "恒玄科技",
            "score": 81,
            "trap_score": 65,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002241",
            "name": "歌尔股份",
            "score": 81,
            "trap_score": 59,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-11-10",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 58,
      "summary": {
        "sample_size": 76,
        "avg_trap_score": 50.9,
        "high_risk_count": 8,
        "high_risk_ratio": 0.1053,
        "watch_count": 17,
        "watch_ratio": 0.2237,
        "top_cohort_size": 7,
        "top_cohort_avg_trap_score": 78.76,
        "concentration_spread": 27.86,
        "gauge_score": 58,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "002384",
        "top_stock_name": "东山精密",
        "top_financing_pressure_score": 95.73,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.25,
          "weak_ratio": 0.5
        }
      },
      "prompt": "当前高风险样本集中在 东山精密 等标的，前排样本平均陷阱分约 78.8，高风险票 8 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "8",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "79%",
          "note": "前 7 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "96%",
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
        "note": "方向判断对了。次日前排样本平均陷阱分 76.0，高风险样本 11 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段未命中",
          "note": "3 个市场代理里只有 0 个在 10:05-10:40 出现明显冲高回落。",
          "proxies": [
            {
              "symbol": "000001",
              "name": "上证指数",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 3675.21,
              "peak_price": 3674.35,
              "peak_time": "10:30",
              "window_close_price": 3671.46,
              "rise_pct": -0.023,
              "fade_pct": -0.079,
              "close_from_peak_pct": -0.079,
              "hit": false
            },
            {
              "symbol": "399001",
              "name": "深证成指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 11288.45,
              "peak_price": 11291.53,
              "peak_time": "10:30",
              "window_close_price": 11253.07,
              "rise_pct": 0.027,
              "fade_pct": -0.341,
              "close_from_peak_pct": -0.341,
              "hit": false
            },
            {
              "symbol": "399006",
              "name": "创业板指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 2513.96,
              "peak_price": 2517.71,
              "peak_time": "10:30",
              "window_close_price": 2503.39,
              "rise_pct": 0.149,
              "fade_pct": -0.569,
              "close_from_peak_pct": -0.569,
              "hit": false
            }
          ],
          "source_state": "ready"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "002384",
            "name": "东山精密",
            "score": 82,
            "reason": "杠杆压力过高"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 81,
            "reason": "杠杆压力过高"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 81,
            "reason": "杠杆压力过高"
          }
        ],
        "watch_list": [
          {
            "code": "002241",
            "name": "歌尔股份",
            "score": 73,
            "trap_score": 50,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300418",
            "name": "昆仑万维",
            "score": 72,
            "trap_score": 60,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 41,
            "trap_score": 58,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-11-09",
      "title": "量化高危区，先看承接，再谈进攻。",
      "gauge_score": 72,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 52.86,
        "high_risk_count": 12,
        "high_risk_ratio": 0.096,
        "watch_count": 41,
        "watch_ratio": 0.328,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 76.91,
        "concentration_spread": 24.06,
        "gauge_score": 72,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "002384",
        "top_stock_name": "东山精密",
        "top_financing_pressure_score": 96.18,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.417,
          "weak_ratio": 0.333
        }
      },
      "prompt": "当前高风险样本集中在 东山精密 等标的，前排样本平均陷阱分约 76.9，高风险票 12 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "12",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "77%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "96%",
          "note": "东山精密 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 78.8，高风险样本 8 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段命中",
          "note": "3 个市场代理里有 3 个在 10:05-10:40 先冲高后回落。",
          "proxies": [
            {
              "symbol": "000001",
              "name": "上证指数",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 3656.25,
              "peak_price": 3678.75,
              "peak_time": "10:06",
              "window_close_price": 3670.94,
              "rise_pct": 0.615,
              "fade_pct": -0.275,
              "close_from_peak_pct": -0.212,
              "hit": true
            },
            {
              "symbol": "399001",
              "name": "深证成指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 11256.33,
              "peak_price": 11307.28,
              "peak_time": "10:06",
              "window_close_price": 11230.25,
              "rise_pct": 0.453,
              "fade_pct": -0.736,
              "close_from_peak_pct": -0.681,
              "hit": true
            },
            {
              "symbol": "399006",
              "name": "创业板指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 2483.65,
              "peak_price": 2510.8,
              "peak_time": "10:06",
              "window_close_price": 2485.88,
              "rise_pct": 1.093,
              "fade_pct": -1.069,
              "close_from_peak_pct": -0.993,
              "hit": true
            }
          ],
          "source_state": "ready"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "002384",
            "name": "东山精密",
            "score": 85,
            "reason": "杠杆压力过高"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 81,
            "reason": "杠杆压力过高"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 81,
            "reason": "杠杆压力过高"
          }
        ],
        "watch_list": [
          {
            "code": "600584",
            "name": "长电科技",
            "score": 72,
            "trap_score": 54,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002261",
            "name": "拓维信息",
            "score": 66,
            "trap_score": 49,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "688008",
            "name": "澜起科技",
            "score": 41,
            "trap_score": 57,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-11-06",
      "title": "量化高危区，先看承接，再谈进攻。",
      "gauge_score": 72,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 54.27,
        "high_risk_count": 14,
        "high_risk_ratio": 0.112,
        "watch_count": 45,
        "watch_ratio": 0.36,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 77.33,
        "concentration_spread": 23.06,
        "gauge_score": 72,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "002384",
        "top_stock_name": "东山精密",
        "top_financing_pressure_score": 95.32,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.667,
          "weak_ratio": 0.25
        }
      },
      "prompt": "当前高风险样本集中在 东山精密 等标的，前排样本平均陷阱分约 77.3，高风险票 14 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "14",
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
        "note": "方向判断对了。次日前排样本平均陷阱分 76.9，高风险样本 12 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段未命中",
          "note": "3 个市场代理里只有 1 个在 10:05-10:40 出现明显冲高回落。",
          "proxies": [
            {
              "symbol": "000001",
              "name": "上证指数",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 3623.32,
              "peak_price": 3659.55,
              "peak_time": "10:38",
              "window_close_price": 3655.9,
              "rise_pct": 1.0,
              "fade_pct": -0.1,
              "close_from_peak_pct": -0.1,
              "hit": false
            },
            {
              "symbol": "399001",
              "name": "深证成指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 11160.84,
              "peak_price": 11299.67,
              "peak_time": "10:38",
              "window_close_price": 11282.36,
              "rise_pct": 1.244,
              "fade_pct": -0.153,
              "close_from_peak_pct": -0.153,
              "hit": false
            },
            {
              "symbol": "399006",
              "name": "创业板指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 2470.27,
              "peak_price": 2505.5,
              "peak_time": "10:38",
              "window_close_price": 2499.61,
              "rise_pct": 1.426,
              "fade_pct": -0.235,
              "close_from_peak_pct": -0.235,
              "hit": true
            }
          ],
          "source_state": "ready"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "002384",
            "name": "东山精密",
            "score": 87,
            "reason": "杠杆压力过高"
          },
          {
            "code": "300223",
            "name": "君正股份",
            "score": 81,
            "reason": "杠杆压力过高"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 80,
            "reason": "杠杆压力过高"
          }
        ],
        "watch_list": [
          {
            "code": "300458",
            "name": "全志科技",
            "score": 74,
            "trap_score": 63,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300418",
            "name": "昆仑万维",
            "score": 72,
            "trap_score": 63,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002241",
            "name": "歌尔股份",
            "score": 72,
            "trap_score": 57,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-11-05",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 44.38,
        "high_risk_count": 6,
        "high_risk_ratio": 0.048,
        "watch_count": 13,
        "watch_ratio": 0.104,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 69.69,
        "concentration_spread": 25.31,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "002384",
        "top_stock_name": "东山精密",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.917,
          "weak_ratio": 0.583
        }
      },
      "prompt": "当前高风险样本集中在 东山精密 等标的，前排样本平均陷阱分约 69.7，高风险票 6 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "6",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "70%",
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
        "note": "方向判断对了。次日前排样本平均陷阱分 77.3，高风险样本 14 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段命中",
          "note": "3 个市场代理里有 2 个在 10:05-10:40 先冲高后回落。",
          "proxies": [
            {
              "symbol": "000001",
              "name": "上证指数",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 3650.7,
              "peak_price": 3700.54,
              "peak_time": "10:24",
              "window_close_price": 3695.74,
              "rise_pct": 1.365,
              "fade_pct": -0.227,
              "close_from_peak_pct": -0.13,
              "hit": false
            },
            {
              "symbol": "399001",
              "name": "深证成指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 11263.54,
              "peak_price": 11610.71,
              "peak_time": "10:26",
              "window_close_price": 11576.07,
              "rise_pct": 3.082,
              "fade_pct": -0.544,
              "close_from_peak_pct": -0.298,
              "hit": true
            },
            {
              "symbol": "399006",
              "name": "创业板指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 2505.28,
              "peak_price": 2625.29,
              "peak_time": "10:26",
              "window_close_price": 2608.38,
              "rise_pct": 4.79,
              "fade_pct": -1.001,
              "close_from_peak_pct": -0.644,
              "hit": true
            }
          ],
          "source_state": "ready"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "002384",
            "name": "东山精密",
            "score": 80,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300223",
            "name": "君正股份",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "002192",
            "name": "融捷股份",
            "score": 70,
            "trap_score": 55,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300803",
            "name": "指南针",
            "score": 69,
            "trap_score": 56,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300458",
            "name": "全志科技",
            "score": 68,
            "trap_score": 47,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-11-04",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 56,
      "summary": {
        "sample_size": 76,
        "avg_trap_score": 51.05,
        "high_risk_count": 6,
        "high_risk_ratio": 0.0789,
        "watch_count": 17,
        "watch_ratio": 0.2237,
        "top_cohort_size": 7,
        "top_cohort_avg_trap_score": 76.63,
        "concentration_spread": 25.58,
        "gauge_score": 56,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300223",
        "top_stock_name": "君正股份",
        "top_financing_pressure_score": 97.29,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.167,
          "weak_ratio": 0.833
        }
      },
      "prompt": "当前高风险样本集中在 君正股份 等标的，前排样本平均陷阱分约 76.6，高风险票 6 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "6",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "77%",
          "note": "前 7 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "97%",
          "note": "君正股份 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 69.7，高风险样本 6 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300223",
            "name": "君正股份",
            "score": 81,
            "reason": "杠杆压力过高"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 80,
            "reason": "杠杆压力过高"
          },
          {
            "code": "002384",
            "name": "东山精密",
            "score": 81,
            "reason": "杠杆压力过高"
          }
        ],
        "watch_list": [
          {
            "code": "002517",
            "name": "恺英网络",
            "score": 69,
            "trap_score": 52,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002192",
            "name": "融捷股份",
            "score": 65,
            "trap_score": 55,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          },
          {
            "code": "300418",
            "name": "昆仑万维",
            "score": 39,
            "trap_score": 56,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          }
        ]
      }
    },
    {
      "date": "2026-11-03",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 43.25,
        "high_risk_count": 3,
        "high_risk_ratio": 0.024,
        "watch_count": 10,
        "watch_ratio": 0.08,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 65.44,
        "concentration_spread": 22.2,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300223",
        "top_stock_name": "君正股份",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.25,
          "weak_ratio": 0.667
        }
      },
      "prompt": "当前高风险样本集中在 君正股份 等标的，前排样本平均陷阱分约 65.4，高风险票 3 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "3",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "65%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "君正股份 的融资压力得分"
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
        "status": "方向错了",
        "note": "方向判断错了。次日前排样本平均陷阱分升到 76.6，高风险样本增到 6 只，原先偏稳的判断没有跟上风险升温。",
        "window_review": {
          "status": "时段命中",
          "note": "3 个市场代理里有 3 个在 10:05-10:40 先冲高后回落。",
          "proxies": [
            {
              "symbol": "000001",
              "name": "上证指数",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 3613.59,
              "peak_price": 3622.85,
              "peak_time": "10:36",
              "window_close_price": 3613.15,
              "rise_pct": 0.256,
              "fade_pct": -0.268,
              "close_from_peak_pct": -0.268,
              "hit": true
            },
            {
              "symbol": "399001",
              "name": "深证成指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 10918.36,
              "peak_price": 11088.58,
              "peak_time": "10:27",
              "window_close_price": 11044.71,
              "rise_pct": 1.559,
              "fade_pct": -0.396,
              "close_from_peak_pct": -0.396,
              "hit": true
            },
            {
              "symbol": "399006",
              "name": "创业板指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 2422.61,
              "peak_price": 2470.7,
              "peak_time": "10:06",
              "window_close_price": 2449.93,
              "rise_pct": 1.985,
              "fade_pct": -0.841,
              "close_from_peak_pct": -0.841,
              "hit": true
            }
          ],
          "source_state": "ready"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300223",
            "name": "君正股份",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "688169",
            "name": "石头科技",
            "score": 72,
            "trap_score": 40,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300251",
            "name": "光线传媒",
            "score": 71,
            "trap_score": 46,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300033",
            "name": "同花顺",
            "score": 69,
            "trap_score": 49,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-11-02",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 42.04,
        "high_risk_count": 4,
        "high_risk_ratio": 0.032,
        "watch_count": 10,
        "watch_ratio": 0.08,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 65.01,
        "concentration_spread": 22.97,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300223",
        "top_stock_name": "君正股份",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.083,
          "weak_ratio": 0.917
        }
      },
      "prompt": "当前高风险样本集中在 君正股份 等标的，前排样本平均陷阱分约 65.0，高风险票 4 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "4",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "65%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "君正股份 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 65.4，高风险样本 3 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300223",
            "name": "君正股份",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "603667",
            "name": "五洲新春",
            "score": 72,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "002138",
            "name": "顺络电子",
            "score": 56,
            "trap_score": 41,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "603986",
            "name": "兆易创新",
            "score": 47,
            "trap_score": 55,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "002192",
            "name": "融捷股份",
            "score": 45,
            "trap_score": 43,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-10-30",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 43.71,
        "high_risk_count": 2,
        "high_risk_ratio": 0.016,
        "watch_count": 7,
        "watch_ratio": 0.056,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 64.14,
        "concentration_spread": 20.44,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300223",
        "top_stock_name": "君正股份",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.0,
          "weak_ratio": 0.833
        }
      },
      "prompt": "当前高风险样本集中在 君正股份 等标的，前排样本平均陷阱分约 64.1，高风险票 2 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "2",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "64%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "君正股份 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 64.9，高风险样本 4 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300223",
            "name": "君正股份",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 67,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "002192",
            "name": "融捷股份",
            "score": 49,
            "trap_score": 51,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 29,
            "trap_score": 57,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "短线趋势走弱"
          },
          {
            "code": "301312",
            "name": "智立方",
            "score": 44,
            "trap_score": 59,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-10-29",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 41.16,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 9,
        "watch_ratio": 0.072,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 62.12,
        "concentration_spread": 20.97,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.25,
          "weak_ratio": 0.583
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 62.1，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "62%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 64.1，高风险样本 2 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "002185",
            "name": "华天科技",
            "score": 70,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 63,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "300308",
            "name": "中际旭创",
            "score": 74,
            "trap_score": 61,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "603986",
            "name": "兆易创新",
            "score": 60,
            "trap_score": 49,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          },
          {
            "code": "002192",
            "name": "融捷股份",
            "score": 59,
            "trap_score": 50,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-10-28",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 42.67,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 5,
        "watch_ratio": 0.04,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 61.28,
        "concentration_spread": 18.61,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.083,
          "weak_ratio": 0.917
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 61.3，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "61%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 62.1，高风险样本 1 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "002185",
            "name": "华天科技",
            "score": 68,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 61,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "300624",
            "name": "万兴科技",
            "score": 36,
            "trap_score": 53,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          },
          {
            "code": "301312",
            "name": "智立方",
            "score": 44,
            "trap_score": 50,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "300458",
            "name": "全志科技",
            "score": 44,
            "trap_score": 55,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-10-27",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 44.77,
        "high_risk_count": 2,
        "high_risk_ratio": 0.016,
        "watch_count": 12,
        "watch_ratio": 0.096,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 63.97,
        "concentration_spread": 19.21,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 77.74,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.25,
          "weak_ratio": 0.5
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 64.0，高风险票 2 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "2",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "64%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "78%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 61.3，高风险样本 1 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 72,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "002185",
            "name": "华天科技",
            "score": 67,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "603667",
            "name": "五洲新春",
            "score": 64,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "002241",
            "name": "歌尔股份",
            "score": 75,
            "trap_score": 45,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300496",
            "name": "中科创达",
            "score": 72,
            "trap_score": 46,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300476",
            "name": "胜宏科技",
            "score": 69,
            "trap_score": 54,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-10-26",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 43.38,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 13,
        "watch_ratio": 0.104,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 65.02,
        "concentration_spread": 21.64,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "002185",
        "top_stock_name": "华天科技",
        "top_financing_pressure_score": 74.41,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.417,
          "weak_ratio": 0.167
        }
      },
      "prompt": "当前高风险样本集中在 华天科技 等标的，前排样本平均陷阱分约 65.0，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "65%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "74%",
          "note": "华天科技 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 64.0，高风险样本 2 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "002185",
            "name": "华天科技",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 69,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 67,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "300458",
            "name": "全志科技",
            "score": 87,
            "trap_score": 49,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300229",
            "name": "拓尔思",
            "score": 83,
            "trap_score": 43,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300223",
            "name": "君正股份",
            "score": 81,
            "trap_score": 45,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-10-23",
      "title": "量化偏稳区，可优先观察低吸确认。",
      "gauge_score": 43,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 40.29,
        "high_risk_count": 0,
        "high_risk_ratio": 0.0,
        "watch_count": 3,
        "watch_ratio": 0.024,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 59.42,
        "concentration_spread": 19.12,
        "gauge_score": 43,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.25,
          "weak_ratio": 0.667
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 59.4，高风险票 0 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "0",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "59%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "整体拥挤度不高，但仍需警惕放量假突破。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "分批验证，不做无量上冲时的追价动作。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 64.0，高风险样本 1 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 70,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 65,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "688018",
            "name": "乐鑫科技",
            "score": 60,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "603667",
            "name": "五洲新春",
            "score": 75,
            "trap_score": 46,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002185",
            "name": "华天科技",
            "score": 75,
            "trap_score": 49,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "600584",
            "name": "长电科技",
            "score": 74,
            "trap_score": 42,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-10-22",
      "title": "量化偏稳区，可优先观察低吸确认。",
      "gauge_score": 43,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 40.35,
        "high_risk_count": 0,
        "high_risk_ratio": 0.0,
        "watch_count": 5,
        "watch_ratio": 0.04,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 60.41,
        "concentration_spread": 20.06,
        "gauge_score": 43,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 77.24,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.583,
          "weak_ratio": 0.667
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 60.4，高风险票 0 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "0",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "60%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "77%",
          "note": "中文在线 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "整体拥挤度不高，但仍需警惕放量假突破。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "分批验证，不做无量上冲时的追价动作。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 59.4，高风险样本 0 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 69,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 67,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "688018",
            "name": "乐鑫科技",
            "score": 65,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "300548",
            "name": "长芯博创",
            "score": 65,
            "trap_score": 46,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300476",
            "name": "胜宏科技",
            "score": 62,
            "trap_score": 52,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "603986",
            "name": "兆易创新",
            "score": 56,
            "trap_score": 46,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-10-21",
      "title": "量化偏稳区，可优先观察低吸确认。",
      "gauge_score": 43,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 39.35,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 5,
        "watch_ratio": 0.04,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 59.96,
        "concentration_spread": 20.62,
        "gauge_score": 43,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.583,
          "weak_ratio": 0.667
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 60.0，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "60%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "整体拥挤度不高，但仍需警惕放量假突破。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "分批验证，不做无量上冲时的追价动作。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 60.4，高风险样本 0 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "688018",
            "name": "乐鑫科技",
            "score": 66,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 63,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "300458",
            "name": "全志科技",
            "score": 74,
            "trap_score": 47,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "603667",
            "name": "五洲新春",
            "score": 73,
            "trap_score": 44,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "688608",
            "name": "恒玄科技",
            "score": 72,
            "trap_score": 54,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-10-20",
      "title": "量化偏稳区，可优先观察低吸确认。",
      "gauge_score": 44,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 40.07,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 4,
        "watch_ratio": 0.032,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 61.18,
        "concentration_spread": 21.1,
        "gauge_score": 44,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.083,
          "weak_ratio": 1.0
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 61.2，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "61%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "整体拥挤度不高，但仍需警惕放量假突破。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "分批验证，不做无量上冲时的追价动作。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 60.0，高风险样本 1 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "688825",
            "name": "长鑫科技",
            "score": 69,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 65,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "300308",
            "name": "中际旭创",
            "score": 44,
            "trap_score": 58,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "002185",
            "name": "华天科技",
            "score": 43,
            "trap_score": 45,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "600584",
            "name": "长电科技",
            "score": 42,
            "trap_score": 41,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-10-19",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 40.74,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 7,
        "watch_ratio": 0.056,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 62.53,
        "concentration_spread": 21.79,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.0,
          "weak_ratio": 1.0
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 62.5，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "63%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 61.2，高风险样本 1 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 69,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 64,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "300418",
            "name": "昆仑万维",
            "score": 40,
            "trap_score": 60,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          },
          {
            "code": "301308",
            "name": "江波龙",
            "score": 44,
            "trap_score": 40,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "600498",
            "name": "烽火通信",
            "score": 44,
            "trap_score": 45,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-10-16",
      "title": "量化偏稳区，可优先观察低吸确认。",
      "gauge_score": 44,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 39.86,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 8,
        "watch_ratio": 0.064,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 61.86,
        "concentration_spread": 22.01,
        "gauge_score": 44,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.0,
          "weak_ratio": 1.0
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 61.9，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "62%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "整体拥挤度不高，但仍需警惕放量假突破。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "分批验证，不做无量上冲时的追价动作。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 62.0，高风险样本 1 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 67,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 64,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "300548",
            "name": "长芯博创",
            "score": 44,
            "trap_score": 45,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "002185",
            "name": "华天科技",
            "score": 44,
            "trap_score": 44,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "600498",
            "name": "烽火通信",
            "score": 44,
            "trap_score": 40,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-10-15",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 41.86,
        "high_risk_count": 2,
        "high_risk_ratio": 0.016,
        "watch_count": 6,
        "watch_ratio": 0.048,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 62.12,
        "concentration_spread": 20.26,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.167,
          "weak_ratio": 0.833
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 62.1，高风险票 2 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "2",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "62%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 61.9，高风险样本 1 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 70,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300624",
            "name": "万兴科技",
            "score": 63,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "300418",
            "name": "昆仑万维",
            "score": 72,
            "trap_score": 52,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "688018",
            "name": "乐鑫科技",
            "score": 67,
            "trap_score": 62,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300251",
            "name": "光线传媒",
            "score": 42,
            "trap_score": 45,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-10-14",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 46.08,
        "high_risk_count": 4,
        "high_risk_ratio": 0.032,
        "watch_count": 15,
        "watch_ratio": 0.12,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 67.87,
        "concentration_spread": 21.79,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 95.48,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.0,
          "weak_ratio": 1.0
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 67.9，高风险票 4 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "4",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "68%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "95%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 62.1，高风险样本 2 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 80,
            "reason": "杠杆压力过高"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "杠杆压力过高"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 72,
            "reason": "杠杆压力过高"
          }
        ],
        "watch_list": [
          {
            "code": "002138",
            "name": "顺络电子",
            "score": 43,
            "trap_score": 48,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "002156",
            "name": "通富微电",
            "score": 42,
            "trap_score": 49,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "300502",
            "name": "新易盛",
            "score": 42,
            "trap_score": 46,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-10-13",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 43.59,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 12,
        "watch_ratio": 0.096,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 63.46,
        "concentration_spread": 19.87,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.167,
          "weak_ratio": 0.833
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 63.5，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "63%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 67.9，高风险样本 4 只，风险没有明显失控。",
        "window_review": {
          "status": "时段命中",
          "note": "3 个市场代理里有 3 个在 10:05-10:40 先冲高后回落。",
          "proxies": [
            {
              "symbol": "000001",
              "name": "上证指数",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 3750.94,
              "peak_price": 3773.46,
              "peak_time": "10:07",
              "window_close_price": 3766.61,
              "rise_pct": 0.6,
              "fade_pct": -0.618,
              "close_from_peak_pct": -0.182,
              "hit": true
            },
            {
              "symbol": "399001",
              "name": "深证成指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 12138.62,
              "peak_price": 12237.3,
              "peak_time": "10:13",
              "window_close_price": 12189.01,
              "rise_pct": 0.813,
              "fade_pct": -1.046,
              "close_from_peak_pct": -0.395,
              "hit": true
            },
            {
              "symbol": "399006",
              "name": "创业板指",
              "window_start": "10:05",
              "window_end": "10:40",
              "open_price": 2888.22,
              "peak_price": 2920.01,
              "peak_time": "10:13",
              "window_close_price": 2905.3,
              "rise_pct": 1.101,
              "fade_pct": -1.273,
              "close_from_peak_pct": -0.504,
              "hit": true
            }
          ],
          "source_state": "ready"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 66,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 65,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "300418",
            "name": "昆仑万维",
            "score": 73,
            "trap_score": 53,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300251",
            "name": "光线传媒",
            "score": 68,
            "trap_score": 42,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "301312",
            "name": "智立方",
            "score": 42,
            "trap_score": 55,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-10-12",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 43.91,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 12,
        "watch_ratio": 0.096,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 65.24,
        "concentration_spread": 21.34,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 72.25,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.0,
          "weak_ratio": 0.75
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 65.2，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "65%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "72%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 63.5，高风险样本 1 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 70,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 69,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 69,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300624",
            "name": "万兴科技",
            "score": 56,
            "trap_score": 53,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          },
          {
            "code": "300418",
            "name": "昆仑万维",
            "score": 55,
            "trap_score": 44,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          },
          {
            "code": "002192",
            "name": "融捷股份",
            "score": 51,
            "trap_score": 52,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-10-09",
      "title": "量化偏稳区，可优先观察低吸确认。",
      "gauge_score": 43,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 39.28,
        "high_risk_count": 0,
        "high_risk_ratio": 0.0,
        "watch_count": 5,
        "watch_ratio": 0.04,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 59.54,
        "concentration_spread": 20.26,
        "gauge_score": 43,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.083,
          "weak_ratio": 1.0
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 59.5，高风险票 0 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "0",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "60%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "太辰光 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "整体拥挤度不高，但仍需警惕放量假突破。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "分批验证，不做无量上冲时的追价动作。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "观察中",
        "note": "自动复盘先看方向。次日前排样本平均陷阱分 65.2，高风险样本 1 只。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 66,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 63,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "600105",
            "name": "永鼎股份",
            "score": 63,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "002192",
            "name": "融捷股份",
            "score": 55,
            "trap_score": 43,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "近 5 日明显回撤"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 45,
            "trap_score": 56,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "300458",
            "name": "全志科技",
            "score": 45,
            "trap_score": 43,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-10-08",
      "title": "量化偏稳区，可优先观察低吸确认。",
      "gauge_score": 42,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 38.64,
        "high_risk_count": 0,
        "high_risk_ratio": 0.0,
        "watch_count": 4,
        "watch_ratio": 0.032,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 58.1,
        "concentration_spread": 19.46,
        "gauge_score": 42,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.0,
          "weak_ratio": 0.917
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 58.1，高风险票 0 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "0",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "58%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "太辰光 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "整体拥挤度不高，但仍需警惕放量假突破。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "分批验证，不做无量上冲时的追价动作。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 59.5，高风险样本 0 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 63,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 62,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "603075",
            "name": "热威股份",
            "score": 61,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "603667",
            "name": "五洲新春",
            "score": 45,
            "trap_score": 46,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 30,
            "trap_score": 56,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 30,
            "trap_score": 60,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          }
        ]
      }
    },
    {
      "date": "2026-10-07",
      "title": "量化偏稳区，可优先观察低吸确认。",
      "gauge_score": 42,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 38.64,
        "high_risk_count": 0,
        "high_risk_ratio": 0.0,
        "watch_count": 4,
        "watch_ratio": 0.032,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 58.1,
        "concentration_spread": 19.46,
        "gauge_score": 42,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.0,
          "weak_ratio": 0.917
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 58.1，高风险票 0 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "0",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "58%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "太辰光 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "整体拥挤度不高，但仍需警惕放量假突破。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "分批验证，不做无量上冲时的追价动作。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 58.1，高风险样本 0 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 63,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 62,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "603075",
            "name": "热威股份",
            "score": 61,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "603667",
            "name": "五洲新春",
            "score": 45,
            "trap_score": 46,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 30,
            "trap_score": 56,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 30,
            "trap_score": 60,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          }
        ]
      }
    },
    {
      "date": "2026-10-05",
      "title": "量化偏稳区，可优先观察低吸确认。",
      "gauge_score": 42,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 38.64,
        "high_risk_count": 0,
        "high_risk_ratio": 0.0,
        "watch_count": 4,
        "watch_ratio": 0.032,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 58.1,
        "concentration_spread": 19.46,
        "gauge_score": 42,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.0,
          "weak_ratio": 0.917
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 58.1，高风险票 0 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "0",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "58%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "太辰光 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "整体拥挤度不高，但仍需警惕放量假突破。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "分批验证，不做无量上冲时的追价动作。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "待复盘",
        "note": ""
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 63,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 62,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "603075",
            "name": "热威股份",
            "score": 61,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "603667",
            "name": "五洲新春",
            "score": 45,
            "trap_score": 46,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 30,
            "trap_score": 56,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 30,
            "trap_score": 60,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          }
        ]
      }
    },
    {
      "date": "2026-10-02",
      "title": "量化偏稳区，可优先观察低吸确认。",
      "gauge_score": 42,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 38.64,
        "high_risk_count": 0,
        "high_risk_ratio": 0.0,
        "watch_count": 4,
        "watch_ratio": 0.032,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 58.1,
        "concentration_spread": 19.46,
        "gauge_score": 42,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.0,
          "weak_ratio": 0.917
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 58.1，高风险票 0 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "0",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "58%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "太辰光 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "整体拥挤度不高，但仍需警惕放量假突破。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "分批验证，不做无量上冲时的追价动作。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 58.1，高风险样本 0 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 63,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 62,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "603075",
            "name": "热威股份",
            "score": 61,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "603667",
            "name": "五洲新春",
            "score": 45,
            "trap_score": 46,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 30,
            "trap_score": 56,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 30,
            "trap_score": 60,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          }
        ]
      }
    },
    {
      "date": "2026-10-01",
      "title": "量化偏稳区，可优先观察低吸确认。",
      "gauge_score": 41,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 38.5,
        "high_risk_count": 0,
        "high_risk_ratio": 0.0,
        "watch_count": 4,
        "watch_ratio": 0.032,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 57.94,
        "concentration_spread": 19.44,
        "gauge_score": 41,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.083,
          "weak_ratio": 0.917
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 57.9，高风险票 0 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "0",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "58%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "太辰光 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "整体拥挤度不高，但仍需警惕放量假突破。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "分批验证，不做无量上冲时的追价动作。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 58.1，高风险样本 0 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 63,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 62,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 60,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "688099",
            "name": "晶晨股份",
            "score": 69,
            "trap_score": 49,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 30,
            "trap_score": 56,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 30,
            "trap_score": 60,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          }
        ]
      }
    },
    {
      "date": "2026-09-30",
      "title": "量化偏稳区，可优先观察低吸确认。",
      "gauge_score": 43,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 40.79,
        "high_risk_count": 0,
        "high_risk_ratio": 0.0,
        "watch_count": 6,
        "watch_ratio": 0.048,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 60.32,
        "concentration_spread": 19.53,
        "gauge_score": 43,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300285",
        "top_stock_name": "国瓷材料",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.083,
          "weak_ratio": 0.5
        }
      },
      "prompt": "当前高风险样本集中在 国瓷材料 等标的，前排样本平均陷阱分约 60.3，高风险票 0 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "0",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "60%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "国瓷材料 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "整体拥挤度不高，但仍需警惕放量假突破。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:05 - 10:40 是明天最容易冲高回落的时段"
        },
        {
          "label": "执行纪律",
          "value": "分批验证，不做无量上冲时的追价动作。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 57.9，高风险样本 0 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 64,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 64,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "600105",
            "name": "永鼎股份",
            "score": 63,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "603667",
            "name": "五洲新春",
            "score": 52,
            "trap_score": 48,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          },
          {
            "code": "002156",
            "name": "通富微电",
            "score": 45,
            "trap_score": 51,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          },
          {
            "code": "300624",
            "name": "万兴科技",
            "score": 44,
            "trap_score": 42,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-29",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 41.7,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 8,
        "watch_ratio": 0.064,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 62.26,
        "concentration_spread": 20.56,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300285",
        "top_stock_name": "国瓷材料",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.0,
          "weak_ratio": 1.0
        }
      },
      "prompt": "当前高风险样本集中在 国瓷材料 等标的，前排样本平均陷阱分约 62.3，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "62%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "国瓷材料 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 60.3，高风险样本 0 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 66,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "301312",
            "name": "智立方",
            "score": 64,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "300223",
            "name": "君正股份",
            "score": 44,
            "trap_score": 46,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "688825",
            "name": "长鑫科技",
            "score": 44,
            "trap_score": 54,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "300548",
            "name": "长芯博创",
            "score": 44,
            "trap_score": 49,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-09-28",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 42.66,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 12,
        "watch_ratio": 0.096,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 64.46,
        "concentration_spread": 21.8,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300285",
        "top_stock_name": "国瓷材料",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.083,
          "weak_ratio": 0.417
        }
      },
      "prompt": "当前高风险样本集中在 国瓷材料 等标的，前排样本平均陷阱分约 64.5，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "64%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "国瓷材料 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 62.3，高风险样本 1 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 68,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 66,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "300476",
            "name": "胜宏科技",
            "score": 58,
            "trap_score": 61,
            "reason": "先看回踩承接，再决定要不要跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "603667",
            "name": "五洲新春",
            "score": 55,
            "trap_score": 63,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          },
          {
            "code": "301312",
            "name": "智立方",
            "score": 54,
            "trap_score": 64,
            "reason": "先看回踩承接，再决定要不要跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-25",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 44.35,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 12,
        "watch_ratio": 0.096,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 64.44,
        "concentration_spread": 20.09,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300285",
        "top_stock_name": "国瓷材料",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.083,
          "weak_ratio": 0.417
        }
      },
      "prompt": "当前高风险样本集中在 国瓷材料 等标的，前排样本平均陷阱分约 64.4，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "64%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "国瓷材料 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 64.5，高风险样本 1 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 68,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 66,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "603667",
            "name": "五洲新春",
            "score": 61,
            "trap_score": 45,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          },
          {
            "code": "300476",
            "name": "胜宏科技",
            "score": 58,
            "trap_score": 61,
            "reason": "先看回踩承接，再决定要不要跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "301312",
            "name": "智立方",
            "score": 54,
            "trap_score": 64,
            "reason": "先看回踩承接，再决定要不要跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-24",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 48.56,
        "high_risk_count": 3,
        "high_risk_ratio": 0.024,
        "watch_count": 20,
        "watch_ratio": 0.16,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 68.9,
        "concentration_spread": 20.34,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "301171",
        "top_stock_name": "易点天下",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.5,
          "weak_ratio": 0.0
        }
      },
      "prompt": "当前高风险样本集中在 易点天下 等标的，前排样本平均陷阱分约 68.9，高风险票 3 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "3",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "69%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "易点天下 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 64.4，高风险样本 1 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "301171",
            "name": "易点天下",
            "score": 73,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301312",
            "name": "智立方",
            "score": 73,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "603075",
            "name": "热威股份",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300476",
            "name": "胜宏科技",
            "score": 84,
            "trap_score": 69,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300458",
            "name": "全志科技",
            "score": 79,
            "trap_score": 63,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "603893",
            "name": "瑞芯微",
            "score": 77,
            "trap_score": 65,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-23",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 48.16,
        "high_risk_count": 7,
        "high_risk_ratio": 0.056,
        "watch_count": 28,
        "watch_ratio": 0.224,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 70.13,
        "concentration_spread": 21.98,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "open",
          "score_multiplier": 1.04,
          "min_return_3d_pct": -0.5,
          "max_ma5_gap_pct": -2.5,
          "note": "当前环境偏强，趋势修复票更容易走成。",
          "positive_ratio": 0.917,
          "weak_ratio": 0.0
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 70.1，高风险票 7 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "7",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "70%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 68.9，高风险样本 3 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "open",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000066",
            "name": "中国长城",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "301308",
            "name": "江波龙",
            "score": 84,
            "trap_score": 54,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "688825",
            "name": "长鑫科技",
            "score": 84,
            "trap_score": 64,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "688008",
            "name": "澜起科技",
            "score": 84,
            "trap_score": 53,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-22",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 48.0,
        "high_risk_count": 2,
        "high_risk_ratio": 0.016,
        "watch_count": 23,
        "watch_ratio": 0.184,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 67.97,
        "concentration_spread": 19.97,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "002185",
        "top_stock_name": "华天科技",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "open",
          "score_multiplier": 1.04,
          "min_return_3d_pct": -0.5,
          "max_ma5_gap_pct": -2.5,
          "note": "当前环境偏强，趋势修复票更容易走成。",
          "positive_ratio": 1.0,
          "weak_ratio": 0.0
        }
      },
      "prompt": "当前高风险样本集中在 华天科技 等标的，前排样本平均陷阱分约 68.0，高风险票 2 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "2",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "68%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "华天科技 的融资压力得分"
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
        "status": "方向错了",
        "note": "方向判断错了。次日前排样本平均陷阱分升到 70.1，高风险样本增到 7 只，原先偏稳的判断没有跟上风险升温。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "open",
        "avoid_list": [
          {
            "code": "002185",
            "name": "华天科技",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 70,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300476",
            "name": "胜宏科技",
            "score": 89,
            "trap_score": 64,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "301308",
            "name": "江波龙",
            "score": 85,
            "trap_score": 51,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "000066",
            "name": "中国长城",
            "score": 85,
            "trap_score": 42,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-21",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 46.93,
        "high_risk_count": 3,
        "high_risk_ratio": 0.024,
        "watch_count": 25,
        "watch_ratio": 0.2,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 68.33,
        "concentration_spread": 21.41,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "open",
          "score_multiplier": 1.04,
          "min_return_3d_pct": -0.5,
          "max_ma5_gap_pct": -2.5,
          "note": "当前环境偏强，趋势修复票更容易走成。",
          "positive_ratio": 0.833,
          "weak_ratio": 0.0
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 68.3，高风险票 3 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "3",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "68%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "太辰光 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 68.0，高风险样本 2 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "open",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "600105",
            "name": "永鼎股份",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 72,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300458",
            "name": "全志科技",
            "score": 89,
            "trap_score": 44,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "000988",
            "name": "华工科技",
            "score": 85,
            "trap_score": 54,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002156",
            "name": "通富微电",
            "score": 84,
            "trap_score": 56,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-18",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 76,
        "avg_trap_score": 46.19,
        "high_risk_count": 3,
        "high_risk_ratio": 0.0395,
        "watch_count": 13,
        "watch_ratio": 0.1711,
        "top_cohort_size": 7,
        "top_cohort_avg_trap_score": 68.32,
        "concentration_spread": 22.13,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "open",
          "score_multiplier": 1.04,
          "min_return_3d_pct": -0.5,
          "max_ma5_gap_pct": -2.5,
          "note": "当前环境偏强，趋势修复票更容易走成。",
          "positive_ratio": 0.583,
          "weak_ratio": 0.25
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 68.3，高风险票 3 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "3",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "68%",
          "note": "前 7 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "太辰光 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 68.0，高风险样本 3 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "open",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "002218",
            "name": "拓日新能",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "000725",
            "name": "京东方Ａ",
            "score": 79,
            "trap_score": 58,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300223",
            "name": "君正股份",
            "score": 79,
            "trap_score": 53,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002384",
            "name": "东山精密",
            "score": 78,
            "trap_score": 63,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-17",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 42.61,
        "high_risk_count": 4,
        "high_risk_ratio": 0.032,
        "watch_count": 15,
        "watch_ratio": 0.12,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 67.5,
        "concentration_spread": 24.9,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "002218",
        "top_stock_name": "拓日新能",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.5,
          "weak_ratio": 0.167
        }
      },
      "prompt": "当前高风险样本集中在 拓日新能 等标的，前排样本平均陷阱分约 67.5，高风险票 4 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "4",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "68%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "拓日新能 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 68.3，高风险样本 3 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "002218",
            "name": "拓日新能",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 73,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300548",
            "name": "长芯博创",
            "score": 83,
            "trap_score": 59,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002281",
            "name": "光迅科技",
            "score": 82,
            "trap_score": 53,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "600460",
            "name": "士兰微",
            "score": 78,
            "trap_score": 52,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-16",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 40.51,
        "high_risk_count": 2,
        "high_risk_ratio": 0.016,
        "watch_count": 12,
        "watch_ratio": 0.096,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 65.61,
        "concentration_spread": 25.1,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "000636",
        "top_stock_name": "风华高科",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.25,
          "weak_ratio": 0.417
        }
      },
      "prompt": "当前高风险样本集中在 风华高科 等标的，前排样本平均陷阱分约 65.6，高风险票 2 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "2",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "66%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "风华高科 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 67.5，高风险样本 4 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "000636",
            "name": "风华高科",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 68,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "002218",
            "name": "拓日新能",
            "score": 74,
            "trap_score": 63,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "603000",
            "name": "人民网",
            "score": 68,
            "trap_score": 56,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002185",
            "name": "华天科技",
            "score": 67,
            "trap_score": 52,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-15",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 43.23,
        "high_risk_count": 5,
        "high_risk_ratio": 0.04,
        "watch_count": 13,
        "watch_ratio": 0.104,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 68.51,
        "concentration_spread": 25.28,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "002218",
        "top_stock_name": "拓日新能",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.25,
          "weak_ratio": 0.5
        }
      },
      "prompt": "当前高风险样本集中在 拓日新能 等标的，前排样本平均陷阱分约 68.5，高风险票 5 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "5",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "69%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "拓日新能 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 65.6，高风险样本 2 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "002218",
            "name": "拓日新能",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "603075",
            "name": "热威股份",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "002859",
            "name": "洁美科技",
            "score": 70,
            "trap_score": 60,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002138",
            "name": "顺络电子",
            "score": 70,
            "trap_score": 57,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300454",
            "name": "深信服",
            "score": 66,
            "trap_score": 59,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-14",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 42.58,
        "high_risk_count": 3,
        "high_risk_ratio": 0.024,
        "watch_count": 17,
        "watch_ratio": 0.136,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 67.58,
        "concentration_spread": 24.99,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "600105",
        "top_stock_name": "永鼎股份",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.333,
          "weak_ratio": 0.333
        }
      },
      "prompt": "当前高风险样本集中在 永鼎股份 等标的，前排样本平均陷阱分约 67.6，高风险票 3 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "3",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "68%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "永鼎股份 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 68.5，高风险样本 5 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "600105",
            "name": "永鼎股份",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 73,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "603075",
            "name": "热威股份",
            "score": 72,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300308",
            "name": "中际旭创",
            "score": 89,
            "trap_score": 61,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002384",
            "name": "东山精密",
            "score": 85,
            "trap_score": 62,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002859",
            "name": "洁美科技",
            "score": 83,
            "trap_score": 48,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-11",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 43.1,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 13,
        "watch_ratio": 0.104,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 65.27,
        "concentration_spread": 22.17,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "603075",
        "top_stock_name": "热威股份",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.417,
          "weak_ratio": 0.167
        }
      },
      "prompt": "当前高风险样本集中在 热威股份 等标的，前排样本平均陷阱分约 65.3，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "65%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "热威股份 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 67.3，高风险样本 3 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "603075",
            "name": "热威股份",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 69,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 68,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "002155",
            "name": "湖南黄金",
            "score": 78,
            "trap_score": 65,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002384",
            "name": "东山精密",
            "score": 73,
            "trap_score": 66,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          },
          {
            "code": "002185",
            "name": "华天科技",
            "score": 72,
            "trap_score": 58,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-10",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 46.06,
        "high_risk_count": 4,
        "high_risk_ratio": 0.032,
        "watch_count": 16,
        "watch_ratio": 0.128,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 66.86,
        "concentration_spread": 20.8,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "301171",
        "top_stock_name": "易点天下",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "open",
          "score_multiplier": 1.04,
          "min_return_3d_pct": -0.5,
          "max_ma5_gap_pct": -2.5,
          "note": "当前环境偏强，趋势修复票更容易走成。",
          "positive_ratio": 0.667,
          "weak_ratio": 0.167
        }
      },
      "prompt": "当前高风险样本集中在 易点天下 等标的，前排样本平均陷阱分约 66.9，高风险票 4 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "4",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "67%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "易点天下 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 65.3，高风险样本 1 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "open",
        "avoid_list": [
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "600105",
            "name": "永鼎股份",
            "score": 72,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "002384",
            "name": "东山精密",
            "score": 87,
            "trap_score": 66,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "000878",
            "name": "云南铜业",
            "score": 86,
            "trap_score": 56,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300476",
            "name": "胜宏科技",
            "score": 84,
            "trap_score": 57,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-09",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 47.42,
        "high_risk_count": 3,
        "high_risk_ratio": 0.024,
        "watch_count": 20,
        "watch_ratio": 0.16,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 67.52,
        "concentration_spread": 20.1,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.25,
          "weak_ratio": 0.417
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 67.5，高风险票 3 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "3",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "68%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 66.9，高风险样本 4 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301312",
            "name": "智立方",
            "score": 67,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "000878",
            "name": "云南铜业",
            "score": 84,
            "trap_score": 40,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300418",
            "name": "昆仑万维",
            "score": 71,
            "trap_score": 63,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "301308",
            "name": "江波龙",
            "score": 52,
            "trap_score": 52,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-08",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 76,
        "avg_trap_score": 48.55,
        "high_risk_count": 4,
        "high_risk_ratio": 0.0526,
        "watch_count": 13,
        "watch_ratio": 0.1711,
        "top_cohort_size": 7,
        "top_cohort_avg_trap_score": 70.09,
        "concentration_spread": 21.54,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.667,
          "weak_ratio": 0.333
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 70.1，高风险票 4 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "4",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "70%",
          "note": "前 7 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 67.5，高风险样本 3 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301312",
            "name": "智立方",
            "score": 72,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300308",
            "name": "中际旭创",
            "score": 91,
            "trap_score": 60,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002281",
            "name": "光迅科技",
            "score": 82,
            "trap_score": 55,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002138",
            "name": "顺络电子",
            "score": 81,
            "trap_score": 50,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-07",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 45.42,
        "high_risk_count": 3,
        "high_risk_ratio": 0.024,
        "watch_count": 15,
        "watch_ratio": 0.12,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 67.1,
        "concentration_spread": 21.69,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.25,
          "weak_ratio": 0.583
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 67.1，高风险票 3 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "3",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "67%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 70.1，高风险样本 4 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000977",
            "name": "浪潮信息",
            "score": 72,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 72,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "002517",
            "name": "恺英网络",
            "score": 73,
            "trap_score": 46,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300803",
            "name": "指南针",
            "score": 65,
            "trap_score": 58,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          },
          {
            "code": "600703",
            "name": "三安光电",
            "score": 65,
            "trap_score": 50,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-04",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 44.03,
        "high_risk_count": 1,
        "high_risk_ratio": 0.008,
        "watch_count": 13,
        "watch_ratio": 0.104,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 64.83,
        "concentration_spread": 20.8,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.167,
          "weak_ratio": 0.583
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 64.8，高风险票 1 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "1",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "65%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 67.1，高风险样本 3 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 69,
            "reason": "前排拥挤度偏高"
          },
          {
            "code": "600378",
            "name": "昊华科技",
            "score": 67,
            "reason": "前排拥挤度偏高"
          }
        ],
        "watch_list": [
          {
            "code": "002155",
            "name": "湖南黄金",
            "score": 58,
            "trap_score": 61,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          },
          {
            "code": "300418",
            "name": "昆仑万维",
            "score": 56,
            "trap_score": 58,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          },
          {
            "code": "300454",
            "name": "深信服",
            "score": 56,
            "trap_score": 59,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-03",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 47.37,
        "high_risk_count": 3,
        "high_risk_ratio": 0.024,
        "watch_count": 19,
        "watch_ratio": 0.152,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 66.49,
        "concentration_spread": 19.12,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.25,
          "weak_ratio": 0.667
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 66.5，高风险票 3 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "3",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "66%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 64.8，高风险样本 1 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 72,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300624",
            "name": "万兴科技",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "000977",
            "name": "浪潮信息",
            "score": 69,
            "trap_score": 62,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300418",
            "name": "昆仑万维",
            "score": 69,
            "trap_score": 64,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002837",
            "name": "英维克",
            "score": 66,
            "trap_score": 57,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-02",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 49.63,
        "high_risk_count": 5,
        "high_risk_ratio": 0.04,
        "watch_count": 24,
        "watch_ratio": 0.192,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 69.18,
        "concentration_spread": 19.55,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300624",
        "top_stock_name": "万兴科技",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.333,
          "weak_ratio": 0.25
        }
      },
      "prompt": "当前高风险样本集中在 万兴科技 等标的，前排样本平均陷阱分约 69.2，高风险票 5 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "5",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "69%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "万兴科技 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 66.5，高风险样本 3 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "300624",
            "name": "万兴科技",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300229",
            "name": "拓尔思",
            "score": 88,
            "trap_score": 47,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002261",
            "name": "拓维信息",
            "score": 83,
            "trap_score": 41,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "000938",
            "name": "紫光股份",
            "score": 73,
            "trap_score": 64,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-09-01",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 49.96,
        "high_risk_count": 6,
        "high_risk_ratio": 0.048,
        "watch_count": 29,
        "watch_ratio": 0.232,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 69.66,
        "concentration_spread": 19.71,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "301171",
        "top_stock_name": "易点天下",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "open",
          "score_multiplier": 1.04,
          "min_return_3d_pct": -0.5,
          "max_ma5_gap_pct": -2.5,
          "note": "当前环境偏强，趋势修复票更容易走成。",
          "positive_ratio": 0.833,
          "weak_ratio": 0.0
        }
      },
      "prompt": "当前高风险样本集中在 易点天下 等标的，前排样本平均陷阱分约 69.7，高风险票 6 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "6",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "70%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "易点天下 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 69.2，高风险样本 5 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "open",
        "avoid_list": [
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "600378",
            "name": "昊华科技",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 72,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300496",
            "name": "中科创达",
            "score": 91,
            "trap_score": 48,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "688099",
            "name": "晶晨股份",
            "score": 90,
            "trap_score": 43,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "603893",
            "name": "瑞芯微",
            "score": 88,
            "trap_score": 53,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-31",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 49.51,
        "high_risk_count": 6,
        "high_risk_ratio": 0.048,
        "watch_count": 25,
        "watch_ratio": 0.2,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 69.81,
        "concentration_spread": 20.3,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "301171",
        "top_stock_name": "易点天下",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.333,
          "weak_ratio": 0.333
        }
      },
      "prompt": "当前高风险样本集中在 易点天下 等标的，前排样本平均陷阱分约 69.8，高风险票 6 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "6",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "70%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "易点天下 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 69.7，高风险样本 6 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 72,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "002456",
            "name": "欧菲光",
            "score": 87,
            "trap_score": 47,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "000878",
            "name": "云南铜业",
            "score": 83,
            "trap_score": 51,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002466",
            "name": "天齐锂业",
            "score": 80,
            "trap_score": 52,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-28",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 46.0,
        "high_risk_count": 5,
        "high_risk_ratio": 0.04,
        "watch_count": 15,
        "watch_ratio": 0.12,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 68.43,
        "concentration_spread": 22.43,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "open",
          "score_multiplier": 1.04,
          "min_return_3d_pct": -0.5,
          "max_ma5_gap_pct": -2.5,
          "note": "当前环境偏强，趋势修复票更容易走成。",
          "positive_ratio": 0.833,
          "weak_ratio": 0.167
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 68.4，高风险票 5 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "5",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "68%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "太辰光 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 69.8，高风险样本 6 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "open",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301312",
            "name": "智立方",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 73,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "688008",
            "name": "澜起科技",
            "score": 89,
            "trap_score": 51,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300476",
            "name": "胜宏科技",
            "score": 88,
            "trap_score": 59,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002456",
            "name": "欧菲光",
            "score": 88,
            "trap_score": 40,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-27",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 44.31,
        "high_risk_count": 0,
        "high_risk_ratio": 0.0,
        "watch_count": 14,
        "watch_ratio": 0.112,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 66.15,
        "concentration_spread": 21.84,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "301312",
        "top_stock_name": "智立方",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.25,
          "weak_ratio": 0.083
        }
      },
      "prompt": "当前高风险样本集中在 智立方 等标的，前排样本平均陷阱分约 66.2，高风险票 0 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "0",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "66%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "智立方 的融资压力得分"
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
        "status": "方向错了",
        "note": "方向判断错了。次日前排样本平均陷阱分升到 68.4，高风险样本增到 5 只，原先偏稳的判断没有跟上风险升温。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "301312",
            "name": "智立方",
            "score": 70,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "002837",
            "name": "英维克",
            "score": 70,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "002192",
            "name": "融捷股份",
            "score": 70,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "002241",
            "name": "歌尔股份",
            "score": 84,
            "trap_score": 47,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          },
          {
            "code": "000878",
            "name": "云南铜业",
            "score": 81,
            "trap_score": 40,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "603075",
            "name": "热威股份",
            "score": 63,
            "trap_score": 49,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-26",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 45.95,
        "high_risk_count": 4,
        "high_risk_ratio": 0.032,
        "watch_count": 19,
        "watch_ratio": 0.152,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 67.56,
        "concentration_spread": 21.61,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "002192",
        "top_stock_name": "融捷股份",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.333,
          "weak_ratio": 0.667
        }
      },
      "prompt": "当前高风险样本集中在 融捷股份 等标的，前排样本平均陷阱分约 67.6，高风险票 4 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "4",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "68%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "融捷股份 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 66.2，高风险样本 0 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "002192",
            "name": "融捷股份",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "600460",
            "name": "士兰微",
            "score": 70,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "688169",
            "name": "石头科技",
            "score": 71,
            "trap_score": 51,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002837",
            "name": "英维克",
            "score": 68,
            "trap_score": 55,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "603075",
            "name": "热威股份",
            "score": 50,
            "trap_score": 42,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-25",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 45.93,
        "high_risk_count": 5,
        "high_risk_ratio": 0.04,
        "watch_count": 25,
        "watch_ratio": 0.2,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 68.95,
        "concentration_spread": 23.02,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.0,
          "weak_ratio": 1.0
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 69.0，高风险票 5 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "5",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "69%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "太辰光 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 67.6，高风险样本 4 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "600460",
            "name": "士兰微",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "002192",
            "name": "融捷股份",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "603667",
            "name": "五洲新春",
            "score": 42,
            "trap_score": 49,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          },
          {
            "code": "002384",
            "name": "东山精密",
            "score": 35,
            "trap_score": 63,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          },
          {
            "code": "000977",
            "name": "浪潮信息",
            "score": 35,
            "trap_score": 50,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "近 5 日明显回撤"
          }
        ]
      }
    },
    {
      "date": "2026-08-24",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 45.9,
        "high_risk_count": 4,
        "high_risk_ratio": 0.032,
        "watch_count": 24,
        "watch_ratio": 0.192,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 67.3,
        "concentration_spread": 21.4,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.083,
          "weak_ratio": 0.5
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 67.3，高风险票 4 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "4",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "67%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "太辰光 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 69.0，高风险样本 5 只，风险没有明显失控。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 71,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "002241",
            "name": "歌尔股份",
            "score": 72,
            "trap_score": 42,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "600536",
            "name": "中国软件",
            "score": 58,
            "trap_score": 55,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          },
          {
            "code": "002466",
            "name": "天齐锂业",
            "score": 57,
            "trap_score": 45,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-21",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 76,
        "avg_trap_score": 50.03,
        "high_risk_count": 4,
        "high_risk_ratio": 0.0526,
        "watch_count": 18,
        "watch_ratio": 0.2368,
        "top_cohort_size": 7,
        "top_cohort_avg_trap_score": 70.11,
        "concentration_spread": 20.08,
        "gauge_score": 52,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.0,
          "weak_ratio": 1.0
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 70.1，高风险票 4 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "4",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "70%",
          "note": "前 7 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "太辰光 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 69.2，高风险样本 4 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 72,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300454",
            "name": "深信服",
            "score": 41,
            "trap_score": 58,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "002261",
            "name": "拓维信息",
            "score": 41,
            "trap_score": 46,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "002517",
            "name": "恺英网络",
            "score": 39,
            "trap_score": 47,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-08-20",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 53,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 53.42,
        "high_risk_count": 5,
        "high_risk_ratio": 0.04,
        "watch_count": 43,
        "watch_ratio": 0.344,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 70.86,
        "concentration_spread": 17.44,
        "gauge_score": 53,
        "window_risk": "watch",
        "window_value": "10:10 - 10:35 容易出现冲高回落",
        "window_basis": "前排已经开始拥挤，追高容错率在下降。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.0,
          "weak_ratio": 1.0
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 70.9，高风险票 5 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "5",
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
          "note": "太辰光 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "前排龙头与跟风标的分化增大，追高容错率下降。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:10 - 10:35 容易出现冲高回落"
        },
        {
          "label": "执行纪律",
          "value": "轻仓试错，优先保留强趋势与成交结构更干净的样本。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 70.1，高风险样本 4 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "000034",
            "name": "神州数码",
            "score": 32,
            "trap_score": 59,
            "reason": "环境偏弱，只看最强修复票",
            "trend_label": "短线趋势走弱"
          },
          {
            "code": "300496",
            "name": "中科创达",
            "score": 45,
            "trap_score": 52,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          },
          {
            "code": "300418",
            "name": "昆仑万维",
            "score": 44,
            "trap_score": 49,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
      }
    },
    {
      "date": "2026-08-19",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 53,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 52.89,
        "high_risk_count": 6,
        "high_risk_ratio": 0.048,
        "watch_count": 37,
        "watch_ratio": 0.296,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 70.98,
        "concentration_spread": 18.09,
        "gauge_score": 53,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "open",
          "score_multiplier": 1.04,
          "min_return_3d_pct": -0.5,
          "max_ma5_gap_pct": -2.5,
          "note": "当前环境偏强，趋势修复票更容易走成。",
          "positive_ratio": 0.833,
          "weak_ratio": 0.0
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 71.0，高风险票 6 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "6",
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
          "note": "太辰光 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 70.9，高风险样本 5 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "open",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "600703",
            "name": "三安光电",
            "score": 89,
            "trap_score": 52,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "688169",
            "name": "石头科技",
            "score": 87,
            "trap_score": 52,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "688126",
            "name": "沪硅产业",
            "score": 83,
            "trap_score": 59,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-18",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 53,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 50.86,
        "high_risk_count": 9,
        "high_risk_ratio": 0.072,
        "watch_count": 32,
        "watch_ratio": 0.256,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 71.45,
        "concentration_spread": 20.58,
        "gauge_score": 53,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300570",
        "top_stock_name": "太辰光",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "open",
          "score_multiplier": 1.04,
          "min_return_3d_pct": -0.5,
          "max_ma5_gap_pct": -2.5,
          "note": "当前环境偏强，趋势修复票更容易走成。",
          "positive_ratio": 0.833,
          "weak_ratio": 0.0
        }
      },
      "prompt": "当前高风险样本集中在 太辰光 等标的，前排样本平均陷阱分约 71.5，高风险票 9 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "9",
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
          "note": "太辰光 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 71.0，高风险样本 6 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "open",
        "avoid_list": [
          {
            "code": "300570",
            "name": "太辰光",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300308",
            "name": "中际旭创",
            "score": 86,
            "trap_score": 67,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "000988",
            "name": "华工科技",
            "score": 84,
            "trap_score": 59,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "688008",
            "name": "澜起科技",
            "score": 83,
            "trap_score": 51,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-17",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 54,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 51.9,
        "high_risk_count": 9,
        "high_risk_ratio": 0.072,
        "watch_count": 34,
        "watch_ratio": 0.272,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 71.16,
        "concentration_spread": 19.26,
        "gauge_score": 54,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "301171",
        "top_stock_name": "易点天下",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "open",
          "score_multiplier": 1.04,
          "min_return_3d_pct": -0.5,
          "max_ma5_gap_pct": -2.5,
          "note": "当前环境偏强，趋势修复票更容易走成。",
          "positive_ratio": 0.583,
          "weak_ratio": 0.0
        }
      },
      "prompt": "当前高风险样本集中在 易点天下 等标的，前排样本平均陷阱分约 71.2，高风险票 9 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "9",
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
          "note": "易点天下 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 71.5，高风险样本 9 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "open",
        "avoid_list": [
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300738",
            "name": "奥飞数据",
            "score": 73,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300548",
            "name": "长芯博创",
            "score": 83,
            "trap_score": 60,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002192",
            "name": "融捷股份",
            "score": 79,
            "trap_score": 62,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002517",
            "name": "恺英网络",
            "score": 77,
            "trap_score": 56,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-14",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 54,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 52.13,
        "high_risk_count": 10,
        "high_risk_ratio": 0.08,
        "watch_count": 32,
        "watch_ratio": 0.256,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 71.98,
        "concentration_spread": 19.85,
        "gauge_score": 54,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "301171",
        "top_stock_name": "易点天下",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.5,
          "weak_ratio": 0.25
        }
      },
      "prompt": "当前高风险样本集中在 易点天下 等标的，前排样本平均陷阱分约 72.0，高风险票 10 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "10",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "72%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "易点天下 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 71.1，高风险样本 9 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000938",
            "name": "紫光股份",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "600602",
            "name": "云赛智联",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "603019",
            "name": "中科曙光",
            "score": 82,
            "trap_score": 45,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "000988",
            "name": "华工科技",
            "score": 78,
            "trap_score": 58,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "000066",
            "name": "中国长城",
            "score": 78,
            "trap_score": 56,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-13",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 54,
      "summary": {
        "sample_size": 76,
        "avg_trap_score": 52.02,
        "high_risk_count": 5,
        "high_risk_ratio": 0.0658,
        "watch_count": 17,
        "watch_ratio": 0.2237,
        "top_cohort_size": 7,
        "top_cohort_avg_trap_score": 71.58,
        "concentration_spread": 19.56,
        "gauge_score": 54,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "301171",
        "top_stock_name": "易点天下",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "open",
          "score_multiplier": 1.04,
          "min_return_3d_pct": -0.5,
          "max_ma5_gap_pct": -2.5,
          "note": "当前环境偏强，趋势修复票更容易走成。",
          "positive_ratio": 0.583,
          "weak_ratio": 0.0
        }
      },
      "prompt": "当前高风险样本集中在 易点天下 等标的，前排样本平均陷阱分约 71.6，高风险票 5 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "5",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "72%",
          "note": "前 7 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "易点天下 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 72.0，高风险样本 10 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "open",
        "avoid_list": [
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300394",
            "name": "天孚通信",
            "score": 85,
            "trap_score": 57,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "000063",
            "name": "中兴通讯",
            "score": 83,
            "trap_score": 44,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300548",
            "name": "长芯博创",
            "score": 79,
            "trap_score": 53,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-12",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 53,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 52.0,
        "high_risk_count": 7,
        "high_risk_ratio": 0.056,
        "watch_count": 30,
        "watch_ratio": 0.24,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 70.24,
        "concentration_spread": 18.24,
        "gauge_score": 53,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "301171",
        "top_stock_name": "易点天下",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.5,
          "weak_ratio": 0.167
        }
      },
      "prompt": "当前高风险样本集中在 易点天下 等标的，前排样本平均陷阱分约 70.2，高风险票 7 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "7",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "70%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "易点天下 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 71.6，高风险样本 5 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300285",
            "name": "国瓷材料",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "603667",
            "name": "五洲新春",
            "score": 79,
            "trap_score": 53,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002155",
            "name": "湖南黄金",
            "score": 72,
            "trap_score": 64,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "603986",
            "name": "兆易创新",
            "score": 65,
            "trap_score": 64,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-11",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 57,
      "summary": {
        "sample_size": 76,
        "avg_trap_score": 55.29,
        "high_risk_count": 9,
        "high_risk_ratio": 0.1184,
        "watch_count": 31,
        "watch_ratio": 0.4079,
        "top_cohort_size": 7,
        "top_cohort_avg_trap_score": 73.71,
        "concentration_spread": 18.42,
        "gauge_score": 57,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300476",
        "top_stock_name": "胜宏科技",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.5,
          "weak_ratio": 0.167
        }
      },
      "prompt": "当前高风险样本集中在 胜宏科技 等标的，前排样本平均陷阱分约 73.7，高风险票 9 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "9",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "74%",
          "note": "前 7 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "胜宏科技 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 70.2，高风险样本 7 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "300476",
            "name": "胜宏科技",
            "score": 76,
            "reason": "综合陷阱分已进高危区"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "002155",
            "name": "湖南黄金",
            "score": 83,
            "trap_score": 58,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002218",
            "name": "拓日新能",
            "score": 75,
            "trap_score": 65,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "000988",
            "name": "华工科技",
            "score": 72,
            "trap_score": 63,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-10",
      "title": "量化高危区，先看承接，再谈进攻。",
      "gauge_score": 72,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 55.32,
        "high_risk_count": 16,
        "high_risk_ratio": 0.128,
        "watch_count": 43,
        "watch_ratio": 0.344,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 73.76,
        "concentration_spread": 18.44,
        "gauge_score": 72,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300476",
        "top_stock_name": "胜宏科技",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.75,
          "weak_ratio": 0.083
        }
      },
      "prompt": "当前高风险样本集中在 胜宏科技 等标的，前排样本平均陷阱分约 73.8，高风险票 16 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "16",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "74%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "胜宏科技 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 73.7，高风险样本 9 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300476",
            "name": "胜宏科技",
            "score": 78,
            "reason": "综合陷阱分已进高危区"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "600703",
            "name": "三安光电",
            "score": 75,
            "trap_score": 56,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300394",
            "name": "天孚通信",
            "score": 72,
            "trap_score": 62,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300548",
            "name": "长芯博创",
            "score": 72,
            "trap_score": 64,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-07",
      "title": "量化高危区，先看承接，再谈进攻。",
      "gauge_score": 72,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 57.24,
        "high_risk_count": 14,
        "high_risk_ratio": 0.112,
        "watch_count": 47,
        "watch_ratio": 0.376,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 73.83,
        "concentration_spread": 16.58,
        "gauge_score": 72,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300476",
        "top_stock_name": "胜宏科技",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 1.0,
          "weak_ratio": 0.0
        }
      },
      "prompt": "当前高风险样本集中在 胜宏科技 等标的，前排样本平均陷阱分约 73.8，高风险票 14 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "14",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "74%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "胜宏科技 的融资压力得分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 73.8，高风险样本 16 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300476",
            "name": "胜宏科技",
            "score": 78,
            "reason": "综合陷阱分已进高危区"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300229",
            "name": "拓尔思",
            "score": 74,
            "trap_score": 62,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300394",
            "name": "天孚通信",
            "score": 73,
            "trap_score": 63,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002281",
            "name": "光迅科技",
            "score": 70,
            "trap_score": 64,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-06",
      "title": "量化高危区，先看承接，再谈进攻。",
      "gauge_score": 72,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 55.73,
        "high_risk_count": 18,
        "high_risk_ratio": 0.144,
        "watch_count": 47,
        "watch_ratio": 0.376,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 73.93,
        "concentration_spread": 18.2,
        "gauge_score": 72,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300308",
        "top_stock_name": "中际旭创",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 1.0,
          "weak_ratio": 0.0
        }
      },
      "prompt": "当前高风险样本集中在 中际旭创 等标的，前排样本平均陷阱分约 73.9，高风险票 18 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "18",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "74%",
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
        "note": "方向判断对了。次日前排样本平均陷阱分 73.8，高风险样本 14 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300308",
            "name": "中际旭创",
            "score": 77,
            "reason": "综合陷阱分已进高危区"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300496",
            "name": "中科创达",
            "score": 75,
            "trap_score": 51,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300383",
            "name": "光环新网",
            "score": 73,
            "trap_score": 64,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002138",
            "name": "顺络电子",
            "score": 72,
            "trap_score": 63,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-05",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 54,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 51.93,
        "high_risk_count": 8,
        "high_risk_ratio": 0.064,
        "watch_count": 34,
        "watch_ratio": 0.272,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 71.7,
        "concentration_spread": 19.77,
        "gauge_score": 54,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300308",
        "top_stock_name": "中际旭创",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "open",
          "score_multiplier": 1.04,
          "min_return_3d_pct": -0.5,
          "max_ma5_gap_pct": -2.5,
          "note": "当前环境偏强，趋势修复票更容易走成。",
          "positive_ratio": 0.917,
          "weak_ratio": 0.083
        }
      },
      "prompt": "当前高风险样本集中在 中际旭创 等标的，前排样本平均陷阱分约 71.7，高风险票 8 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "8",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "72%",
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
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 73.9，高风险样本 18 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "open",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300570",
            "name": "太辰光",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300548",
            "name": "长芯博创",
            "score": 90,
            "trap_score": 49,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300383",
            "name": "光环新网",
            "score": 88,
            "trap_score": 59,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "002261",
            "name": "拓维信息",
            "score": 78,
            "trap_score": 50,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-04",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 55,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 55.6,
        "high_risk_count": 11,
        "high_risk_ratio": 0.088,
        "watch_count": 40,
        "watch_ratio": 0.32,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 71.72,
        "concentration_spread": 16.12,
        "gauge_score": 55,
        "window_risk": "watch",
        "window_value": "10:10 - 10:35 容易出现冲高回落",
        "window_basis": "前排已经开始拥挤，追高容错率在下降。",
        "top_stock_code": "300364",
        "top_stock_name": "中文在线",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "neutral",
          "score_multiplier": 1.0,
          "min_return_3d_pct": 0.0,
          "max_ma5_gap_pct": -2.0,
          "note": "当前环境中性，优先看趋势确认更完整的票。",
          "positive_ratio": 0.583,
          "weak_ratio": 0.333
        }
      },
      "prompt": "当前高风险样本集中在 中文在线 等标的，前排样本平均陷阱分约 71.7，高风险票 11 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "11",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "72%",
          "note": "前 12 只高分样本的平均陷阱分"
        },
        {
          "label": "杠杆资金压力",
          "value": "80%",
          "note": "中文在线 的融资压力得分"
        }
      ],
      "warnings": [
        {
          "label": "风格漂移预警",
          "value": "前排龙头与跟风标的分化增大，追高容错率下降。"
        },
        {
          "label": "量化踩踏窗口",
          "value": "10:10 - 10:35 容易出现冲高回落"
        },
        {
          "label": "执行纪律",
          "value": "轻仓试错，优先保留强趋势与成交结构更干净的样本。"
        }
      ],
      "strategy": "当板块一致性预期过满时，陷阱往往不是来自逻辑错误，而是来自交易位置错误。先审视筹码，再决定出手。",
      "review": {
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 71.7，高风险样本 8 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "neutral",
        "avoid_list": [
          {
            "code": "300364",
            "name": "中文在线",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "301171",
            "name": "易点天下",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000636",
            "name": "风华高科",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "002555",
            "name": "三七互娱",
            "score": 84,
            "trap_score": 58,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300118",
            "name": "东方日升",
            "score": 83,
            "trap_score": 51,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300496",
            "name": "中科创达",
            "score": 82,
            "trap_score": 53,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-08-03",
      "title": "量化高危区，先看承接，再谈进攻。",
      "gauge_score": 72,
      "summary": {
        "sample_size": 76,
        "avg_trap_score": 54.68,
        "high_risk_count": 12,
        "high_risk_ratio": 0.1579,
        "watch_count": 29,
        "watch_ratio": 0.3816,
        "top_cohort_size": 7,
        "top_cohort_avg_trap_score": 73.78,
        "concentration_spread": 19.09,
        "gauge_score": 72,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300308",
        "top_stock_name": "中际旭创",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.333,
          "weak_ratio": 0.5
        }
      },
      "prompt": "当前高风险样本集中在 中际旭创 等标的，前排样本平均陷阱分约 73.8，高风险票 12 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "12",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "74%",
          "note": "前 7 只高分样本的平均陷阱分"
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
        "note": "方向判断对了。次日前排样本平均陷阱分 71.7，高风险样本 11 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300223",
            "name": "北京君正",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300458",
            "name": "全志科技",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "000938",
            "name": "紫光股份",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "301236",
            "name": "软通动力",
            "score": 76,
            "trap_score": 40,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300496",
            "name": "中科创达",
            "score": 75,
            "trap_score": 50,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "300383",
            "name": "光环新网",
            "score": 74,
            "trap_score": 55,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          }
        ]
      }
    },
    {
      "date": "2026-07-31",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 55,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 52.16,
        "high_risk_count": 10,
        "high_risk_ratio": 0.08,
        "watch_count": 37,
        "watch_ratio": 0.296,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 72.53,
        "concentration_spread": 20.38,
        "gauge_score": 55,
        "window_risk": "high",
        "window_value": "10:05 - 10:40 是明天最容易冲高回落的时段",
        "window_basis": "高风险票数量多，前排平均分也偏高。",
        "top_stock_code": "300308",
        "top_stock_name": "中际旭创",
        "top_financing_pressure_score": 80.0,
        "breakout_environment": {
          "state": "tight",
          "score_multiplier": 0.88,
          "min_return_3d_pct": 1.0,
          "max_ma5_gap_pct": -1.0,
          "note": "当前环境偏弱，缩量修复需要更强确认。",
          "positive_ratio": 0.167,
          "weak_ratio": 0.833
        }
      },
      "prompt": "当前高风险样本集中在 中际旭创 等标的，前排样本平均陷阱分约 72.5，高风险票 10 只，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高风险个股数量",
          "value": "10",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "整体追高热度",
          "value": "73%",
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
        "status": "方向对了",
        "note": "方向判断对了。次日前排样本平均陷阱分 73.5，高风险样本 15 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。",
        "window_review": {
          "status": "时段待补",
          "note": "分钟级市场代理数据暂时不可用，先保留主方向复盘，时段结果后补。",
          "proxies": [],
          "source_state": "unavailable"
        }
      },
      "rankings": {
        "logic_version": "breakout-aware-v3",
        "trend_candidate_count": 12,
        "environment_state": "tight",
        "avoid_list": [
          {
            "code": "300308",
            "name": "中际旭创",
            "score": 77,
            "reason": "综合陷阱分已进高危区"
          },
          {
            "code": "603986",
            "name": "兆易创新",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "300223",
            "name": "北京君正",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300624",
            "name": "万兴科技",
            "score": 65,
            "trap_score": 48,
            "reason": "趋势未坏，优先盯分歧后的承接",
            "trend_label": "趋势中性"
          },
          {
            "code": "300364",
            "name": "中文在线",
            "score": 64,
            "trap_score": 56,
            "reason": "短线修复最完整，优先等回踩不破再跟",
            "trend_label": "趋势中性"
          },
          {
            "code": "301095",
            "name": "广立微",
            "score": 47,
            "trap_score": 54,
            "reason": "趋势数据暂缺，先盯开盘前 15 分钟量价确认",
            "trend_label": "趋势数据暂缺"
          }
        ]
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
        "note": "方向判断对了。次日前排样本平均陷阱分 70.6，高风险样本 7 只，追高风险没有明显退潮。10:05 - 10:40 这段是否精准命中，仍建议人工看分时确认。"
      },
      "rankings": {
        "logic_version": "snapshot-rebuilt-v1",
        "trend_candidate_count": 0,
        "avoid_list": [
          {
            "code": "002384",
            "name": "东山精密",
            "score": 75,
            "reason": "综合陷阱分已进高危区"
          },
          {
            "code": "300458",
            "name": "全志科技",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          },
          {
            "code": "002156",
            "name": "通富微电",
            "score": 74,
            "reason": "换手过热，容易一致性兑现"
          }
        ],
        "watch_list": [
          {
            "code": "300803",
            "name": "指南针",
            "score": 38,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          },
          {
            "code": "300118",
            "name": "东方日升",
            "score": 38,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          },
          {
            "code": "002517",
            "name": "恺英网络",
            "score": 41,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          }
        ]
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
      },
      "rankings": {
        "logic_version": "snapshot-rebuilt-v1",
        "trend_candidate_count": 0,
        "avoid_list": [
          {
            "code": "002384",
            "name": "东山精密",
            "score": 81,
            "reason": "杠杆压力过高"
          },
          {
            "code": "300458",
            "name": "全志科技",
            "score": 80,
            "reason": "杠杆压力过高"
          },
          {
            "code": "603986",
            "name": "兆易创新",
            "score": 79,
            "reason": "杠杆压力过高"
          }
        ],
        "watch_list": [
          {
            "code": "300059",
            "name": "东方财富",
            "score": 38,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          },
          {
            "code": "002456",
            "name": "欧菲光",
            "score": 40,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          },
          {
            "code": "300251",
            "name": "光线传媒",
            "score": 38,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          }
        ]
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
      },
      "rankings": {
        "logic_version": "snapshot-rebuilt-v1",
        "trend_candidate_count": 0,
        "avoid_list": [
          {
            "code": "300458",
            "name": "全志科技",
            "score": 82,
            "reason": "杠杆压力过高"
          },
          {
            "code": "002156",
            "name": "通富微电",
            "score": 82,
            "reason": "杠杆压力过高"
          },
          {
            "code": "002185",
            "name": "华天科技",
            "score": 82,
            "reason": "杠杆压力过高"
          }
        ],
        "watch_list": [
          {
            "code": "301171",
            "name": "易点天下",
            "score": 41,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          },
          {
            "code": "688213",
            "name": "思特威-W",
            "score": 38,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          },
          {
            "code": "002049",
            "name": "紫光国微",
            "score": 39,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          }
        ]
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
      },
      "rankings": {
        "logic_version": "snapshot-rebuilt-v1",
        "trend_candidate_count": 0,
        "avoid_list": [
          {
            "code": "300458",
            "name": "全志科技",
            "score": 82,
            "reason": "杠杆压力过高"
          },
          {
            "code": "002156",
            "name": "通富微电",
            "score": 82,
            "reason": "杠杆压力过高"
          },
          {
            "code": "002185",
            "name": "华天科技",
            "score": 82,
            "reason": "杠杆压力过高"
          }
        ],
        "watch_list": [
          {
            "code": "301171",
            "name": "易点天下",
            "score": 41,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          },
          {
            "code": "688213",
            "name": "思特威-W",
            "score": 38,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          },
          {
            "code": "002049",
            "name": "紫光国微",
            "score": 39,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          }
        ]
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
      },
      "rankings": {
        "logic_version": "snapshot-rebuilt-v1",
        "trend_candidate_count": 0,
        "avoid_list": [
          {
            "code": "002156",
            "name": "通富微电",
            "score": 82,
            "reason": "杠杆压力过高"
          },
          {
            "code": "688099",
            "name": "晶晨股份",
            "score": 74,
            "reason": "杠杆压力过高"
          },
          {
            "code": "300308",
            "name": "中际旭创",
            "score": 76,
            "reason": "杠杆压力过高"
          }
        ],
        "watch_list": [
          {
            "code": "002555",
            "name": "三七互娱",
            "score": 39,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          },
          {
            "code": "002049",
            "name": "紫光国微",
            "score": 39,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          },
          {
            "code": "600536",
            "name": "中国软件",
            "score": 39,
            "reason": "陷阱分处于可观察区，杠杆压力也不重",
            "trend_label": "历史快照重建"
          }
        ]
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
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 82,
        "margin_balance": 10502148364.0,
        "margin_buy": 645067721.0,
        "float_market_cap": 126292506122.0,
        "margin_balance_ratio": 0.083157,
        "turnover_rate": 5.9,
        "financing_pressure_score": 76.25,
        "incremental_financing_pressure_score": 72.61,
        "margin_burden_score": 90.79,
        "turnover_heat_score": 47.2,
        "turnover_z_score": 1.35
      },
      "trap_score": 72.45,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 17.42,
        "return_5d_pct": 7.93,
        "return_8d_pct": 4.98,
        "ma5_gap_pct": 9.01,
        "ma10_gap_pct": 7.18,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002384",
      "name": "东山精密",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 68,
        "margin_balance": 7099024310.0,
        "margin_buy": 875392336.0,
        "float_market_cap": 127624777819.0,
        "margin_balance_ratio": 0.055624,
        "turnover_rate": 10.32,
        "financing_pressure_score": 94.75,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 73.75,
        "turnover_heat_score": 82.56
      },
      "trap_score": 82.95
    },
    {
      "code": "300308",
      "name": "中际旭创",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 88,
        "margin_balance": 16264907951.0,
        "margin_buy": 1652814664.0,
        "float_market_cap": 601585855626.0,
        "margin_balance_ratio": 0.027037,
        "turnover_rate": 5.47,
        "financing_pressure_score": 82.74,
        "incremental_financing_pressure_score": 93.11,
        "margin_burden_score": 41.3,
        "turnover_heat_score": 43.76,
        "turnover_z_score": 1.54
      },
      "trap_score": 76.78,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 20.98,
        "return_5d_pct": 1.62,
        "return_8d_pct": -1.99,
        "ma5_gap_pct": 12.62,
        "ma10_gap_pct": 6.17,
        "drawdown_8d_pct": -1.45,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002230",
      "name": "科大讯飞",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4999677035.0,
        "margin_buy": 70808882.0,
        "float_market_cap": 86685253400.0,
        "margin_balance_ratio": 0.057676,
        "turnover_rate": 0.75,
        "financing_pressure_score": 34.85,
        "incremental_financing_pressure_score": 24.78,
        "margin_burden_score": 75.12,
        "turnover_heat_score": 6.0
      },
      "trap_score": 34.38
    },
    {
      "code": "688256",
      "name": "寒武纪",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 13020156696.0,
        "margin_buy": 934710744.0,
        "float_market_cap": 565968607200.0,
        "margin_balance_ratio": 0.023005,
        "turnover_rate": 1.85,
        "financing_pressure_score": 70.87,
        "incremental_financing_pressure_score": 79.53,
        "margin_burden_score": 36.26,
        "turnover_heat_score": 14.8
      },
      "trap_score": 52.35
    },
    {
      "code": "603019",
      "name": "中科曙光",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6951602774.0,
        "margin_buy": 143407913.0,
        "float_market_cap": 115899544216.0,
        "margin_balance_ratio": 0.05998,
        "turnover_rate": 1.16,
        "financing_pressure_score": 43.83,
        "incremental_financing_pressure_score": 35.63,
        "margin_burden_score": 76.65,
        "turnover_heat_score": 9.28
      },
      "trap_score": 39.08
    },
    {
      "code": "603160",
      "name": "汇顶科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 767772142.0,
        "margin_buy": 65297823.0,
        "float_market_cap": 28552661459.0,
        "margin_balance_ratio": 0.02689,
        "turnover_rate": 2.47,
        "financing_pressure_score": 77.74,
        "incremental_financing_pressure_score": 86.89,
        "margin_burden_score": 41.11,
        "turnover_heat_score": 19.76
      },
      "trap_score": 56.43
    },
    {
      "code": "603986",
      "name": "兆易创新",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 13902328129.0,
        "margin_buy": 841430711.0,
        "float_market_cap": 174131892056.0,
        "margin_balance_ratio": 0.079838,
        "turnover_rate": 6.27,
        "financing_pressure_score": 75.59,
        "incremental_financing_pressure_score": 72.02,
        "margin_burden_score": 89.89,
        "turnover_heat_score": 50.16,
        "turnover_z_score": 1.07
      },
      "trap_score": 61.55,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 8.41,
        "return_5d_pct": -4.33,
        "return_8d_pct": 0.71,
        "ma5_gap_pct": 4.24,
        "ma10_gap_pct": 1.17,
        "drawdown_8d_pct": -4.33,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "603501",
      "name": "豪威集团",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3912416608.0,
        "margin_buy": 94836497.0,
        "float_market_cap": 104795274239.0,
        "margin_balance_ratio": 0.037334,
        "turnover_rate": 0.73,
        "financing_pressure_score": 42.23,
        "incremental_financing_pressure_score": 39.24,
        "margin_burden_score": 54.17,
        "turnover_heat_score": 5.84
      },
      "trap_score": 37.67
    },
    {
      "code": "603893",
      "name": "瑞芯微",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1780720667.0,
        "margin_buy": 524959411.0,
        "float_market_cap": 99491189738.0,
        "margin_balance_ratio": 0.017898,
        "turnover_rate": 4.43,
        "financing_pressure_score": 85.97,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 29.87,
        "turnover_heat_score": 35.44
      },
      "trap_score": 63.27
    },
    {
      "code": "688111",
      "name": "金山办公",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4146393404.0,
        "margin_buy": 75741468.0,
        "float_market_cap": 102918179883.0,
        "margin_balance_ratio": 0.040288,
        "turnover_rate": 1.13,
        "financing_pressure_score": 37.15,
        "incremental_financing_pressure_score": 31.97,
        "margin_burden_score": 57.86,
        "turnover_heat_score": 9.04
      },
      "trap_score": 36.03
    },
    {
      "code": "688041",
      "name": "海光信息",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7558861150.0,
        "margin_buy": 213730294.0,
        "float_market_cap": 456383784168.0,
        "margin_balance_ratio": 0.016563,
        "turnover_rate": 0.71,
        "financing_pressure_score": 40.26,
        "incremental_financing_pressure_score": 43.28,
        "margin_burden_score": 28.2,
        "turnover_heat_score": 5.68
      },
      "trap_score": 36.75
    },
    {
      "code": "688012",
      "name": "中微公司",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3742058008.0,
        "margin_buy": 321530995.0,
        "float_market_cap": 235549259500.0,
        "margin_balance_ratio": 0.015887,
        "turnover_rate": 1.86,
        "financing_pressure_score": 75.25,
        "incremental_financing_pressure_score": 87.22,
        "margin_burden_score": 27.36,
        "turnover_heat_score": 14.88
      },
      "trap_score": 54.34
    },
    {
      "code": "688008",
      "name": "澜起科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 9481960681.0,
        "margin_buy": 294644865.0,
        "float_market_cap": 186436349890.0,
        "margin_balance_ratio": 0.050859,
        "turnover_rate": 2.63,
        "financing_pressure_score": 50.97,
        "incremental_financing_pressure_score": 46.07,
        "margin_burden_score": 70.57,
        "turnover_heat_score": 21.04
      },
      "trap_score": 44.64
    },
    {
      "code": "688169",
      "name": "石头科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 667514400.0,
        "margin_buy": 30881105.0,
        "float_market_cap": 34538183533.0,
        "margin_balance_ratio": 0.019327,
        "turnover_rate": 2.65,
        "financing_pressure_score": 55.34,
        "incremental_financing_pressure_score": 61.26,
        "margin_burden_score": 31.66,
        "turnover_heat_score": 21.2
      },
      "trap_score": 46.64
    },
    {
      "code": "688072",
      "name": "拓荆科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1154600046.0,
        "margin_buy": 145286166.0,
        "float_market_cap": 144367147384.0,
        "margin_balance_ratio": 0.007998,
        "turnover_rate": 2.02,
        "financing_pressure_score": 83.2,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 16.0,
        "turnover_heat_score": 16.16
      },
      "trap_score": 58.17
    },
    {
      "code": "688099",
      "name": "晶晨股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 835408767.0,
        "margin_buy": 157412598.0,
        "float_market_cap": 43127841091.0,
        "margin_balance_ratio": 0.019371,
        "turnover_rate": 3.33,
        "financing_pressure_score": 86.34,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 31.71,
        "turnover_heat_score": 26.64
      },
      "trap_score": 61.68
    },
    {
      "code": "688027",
      "name": "国盾量子",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 963540699.0,
        "margin_buy": 21020991.0,
        "float_market_cap": 26113632813.0,
        "margin_balance_ratio": 0.036898,
        "turnover_rate": 3.52,
        "financing_pressure_score": 40.18,
        "incremental_financing_pressure_score": 36.82,
        "margin_burden_score": 53.62,
        "turnover_heat_score": 28.16
      },
      "trap_score": 41.21
    },
    {
      "code": "688608",
      "name": "恒玄科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 797928051.0,
        "margin_buy": 189630846.0,
        "float_market_cap": 31764050042.0,
        "margin_balance_ratio": 0.02512,
        "turnover_rate": 3.64,
        "financing_pressure_score": 87.78,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 38.9,
        "turnover_heat_score": 29.12
      },
      "trap_score": 62.83
    },
    {
      "code": "688018",
      "name": "乐鑫科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 802781232.0,
        "margin_buy": 325400105.0,
        "float_market_cap": 41092257405.0,
        "margin_balance_ratio": 0.019536,
        "turnover_rate": 5.18,
        "financing_pressure_score": 86.38,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 31.92,
        "turnover_heat_score": 41.44
      },
      "trap_score": 64.66
    },
    {
      "code": "688036",
      "name": "传音控股",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 635584321.0,
        "margin_buy": 82911675.0,
        "float_market_cap": 72098688053.0,
        "margin_balance_ratio": 0.008815,
        "turnover_rate": 1.12,
        "financing_pressure_score": 83.53,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 17.63,
        "turnover_heat_score": 8.96
      },
      "trap_score": 56.88
    },
    {
      "code": "688047",
      "name": "龙芯中科",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 958493430.0,
        "margin_buy": 17599214.0,
        "float_market_cap": 37641870000.0,
        "margin_balance_ratio": 0.025463,
        "turnover_rate": 0.58,
        "financing_pressure_score": 33.57,
        "incremental_financing_pressure_score": 32.13,
        "margin_burden_score": 39.33,
        "turnover_heat_score": 4.64
      },
      "trap_score": 33.53
    },
    {
      "code": "688126",
      "name": "沪硅产业",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1916128321.0,
        "margin_buy": 43916071.0,
        "float_market_cap": 60181432953.0,
        "margin_balance_ratio": 0.031839,
        "turnover_rate": 1.78,
        "financing_pressure_score": 39.8,
        "incremental_financing_pressure_score": 37.92,
        "margin_burden_score": 47.3,
        "turnover_heat_score": 14.24
      },
      "trap_score": 38.26
    },
    {
      "code": "688037",
      "name": "芯源微",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 316968534.0,
        "margin_buy": 81156141.0,
        "float_market_cap": 47291466924.0,
        "margin_balance_ratio": 0.006702,
        "turnover_rate": 2.19,
        "financing_pressure_score": 82.68,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 13.4,
        "turnover_heat_score": 17.52
      },
      "trap_score": 58.21
    },
    {
      "code": "688213",
      "name": "思特威-W",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 668398112.0,
        "margin_buy": 105220300.0,
        "float_market_cap": 35039311346.0,
        "margin_balance_ratio": 0.019076,
        "turnover_rate": 2.04,
        "financing_pressure_score": 86.27,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 31.34,
        "turnover_heat_score": 16.32
      },
      "trap_score": 59.59
    },
    {
      "code": "688120",
      "name": "华海清科",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1030649251.0,
        "margin_buy": 68132949.0,
        "float_market_cap": 101365483712.0,
        "margin_balance_ratio": 0.010168,
        "turnover_rate": 1.88,
        "financing_pressure_score": 64.63,
        "incremental_financing_pressure_score": 75.74,
        "margin_burden_score": 20.21,
        "turnover_heat_score": 15.04
      },
      "trap_score": 49.59
    },
    {
      "code": "688981",
      "name": "中芯国际",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": 218684920193.0,
        "margin_balance_ratio": null,
        "turnover_rate": 1.42,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.36
      },
      "trap_score": 19.77
    },
    {
      "code": "603296",
      "name": "华勤技术",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 973509570.0,
        "margin_buy": 47965750.0,
        "float_market_cap": 55323435228.0,
        "margin_balance_ratio": 0.017597,
        "turnover_rate": 0.99,
        "financing_pressure_score": 57.32,
        "incremental_financing_pressure_score": 64.27,
        "margin_burden_score": 29.5,
        "turnover_heat_score": 7.92
      },
      "trap_score": 44.88
    },
    {
      "code": "300033",
      "name": "同花顺",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5056634291.0,
        "margin_buy": 219121726.0,
        "float_market_cap": 88379059603.0,
        "margin_balance_ratio": 0.057215,
        "turnover_rate": 1.63,
        "financing_pressure_score": 61.63,
        "incremental_financing_pressure_score": 58.33,
        "margin_burden_score": 74.81,
        "turnover_heat_score": 13.04
      },
      "trap_score": 47.84
    },
    {
      "code": "300496",
      "name": "中科创达",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1496333413.0,
        "margin_buy": 66684828.0,
        "float_market_cap": 21063261300.0,
        "margin_balance_ratio": 0.07104,
        "turnover_rate": 2.19,
        "financing_pressure_score": 64.46,
        "incremental_financing_pressure_score": 59.57,
        "margin_burden_score": 84.03,
        "turnover_heat_score": 17.52
      },
      "trap_score": 50.01
    },
    {
      "code": "300502",
      "name": "新易盛",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 10466267008.0,
        "margin_buy": 1642485867.0,
        "float_market_cap": 269765605820.0,
        "margin_balance_ratio": 0.038798,
        "turnover_rate": 9.96,
        "financing_pressure_score": 91.2,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 56.0,
        "turnover_heat_score": 79.68
      },
      "trap_score": 74.48
    },
    {
      "code": "300223",
      "name": "君正股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3215136551.0,
        "margin_buy": 473906348.0,
        "float_market_cap": 48490247267.0,
        "margin_balance_ratio": 0.066305,
        "turnover_rate": 11.74,
        "financing_pressure_score": 96.17,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 80.87,
        "turnover_heat_score": 93.92
      },
      "trap_score": 79.56
    },
    {
      "code": "300383",
      "name": "光环新网",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1142319250.0,
        "margin_buy": 17835359.0,
        "float_market_cap": 17933155903.0,
        "margin_balance_ratio": 0.063699,
        "turnover_rate": 1.44,
        "financing_pressure_score": 37.69,
        "incremental_financing_pressure_score": 27.32,
        "margin_burden_score": 79.13,
        "turnover_heat_score": 11.52
      },
      "trap_score": 36.76
    },
    {
      "code": "300458",
      "name": "全志科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1230275485.0,
        "margin_buy": 155459676.0,
        "float_market_cap": 24194613525.0,
        "margin_balance_ratio": 0.050849,
        "turnover_rate": 6.49,
        "financing_pressure_score": 94.11,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 70.57,
        "turnover_heat_score": 51.92
      },
      "trap_score": 70.23
    },
    {
      "code": "300474",
      "name": "景嘉微",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1228391173.0,
        "margin_buy": 15004710.0,
        "float_market_cap": 18933823681.0,
        "margin_balance_ratio": 0.064878,
        "turnover_rate": 1.38,
        "financing_pressure_score": 33.08,
        "incremental_financing_pressure_score": 21.38,
        "margin_burden_score": 79.92,
        "turnover_heat_score": 11.04
      },
      "trap_score": 34.59
    },
    {
      "code": "300454",
      "name": "深信服",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1109633711.0,
        "margin_buy": 77710909.0,
        "float_market_cap": 34548652502.0,
        "margin_balance_ratio": 0.032118,
        "turnover_rate": 3.21,
        "financing_pressure_score": 72.21,
        "incremental_financing_pressure_score": 78.36,
        "margin_burden_score": 47.65,
        "turnover_heat_score": 25.68
      },
      "trap_score": 55.13
    },
    {
      "code": "300212",
      "name": "*ST易录",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": 5166257011.0,
        "margin_balance_ratio": null,
        "turnover_rate": 0.92,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.36
      },
      "trap_score": 18.97
    },
    {
      "code": "300251",
      "name": "光线传媒",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1053257775.0,
        "margin_buy": 177779713.0,
        "float_market_cap": 36011092246.0,
        "margin_balance_ratio": 0.029248,
        "turnover_rate": 5.04,
        "financing_pressure_score": 88.81,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 44.06,
        "turnover_heat_score": 40.32
      },
      "trap_score": 65.53
    },
    {
      "code": "300229",
      "name": "拓尔思",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 820686990.0,
        "margin_buy": 18015087.0,
        "float_market_cap": 11646223308.0,
        "margin_balance_ratio": 0.070468,
        "turnover_rate": 1.96,
        "financing_pressure_score": 46.29,
        "incremental_financing_pressure_score": 36.95,
        "margin_burden_score": 83.65,
        "turnover_heat_score": 15.68
      },
      "trap_score": 41.47
    },
    {
      "code": "300624",
      "name": "万兴科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 542017348.0,
        "margin_buy": 139583856.0,
        "float_market_cap": 9119881084.0,
        "margin_balance_ratio": 0.059433,
        "turnover_rate": 12.36,
        "financing_pressure_score": 95.26,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 76.29,
        "turnover_heat_score": 98.88
      },
      "trap_score": 80.14
    },
    {
      "code": "300442",
      "name": "润泽科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2744950677.0,
        "margin_buy": 91978247.0,
        "float_market_cap": 93445002382.0,
        "margin_balance_ratio": 0.029375,
        "turnover_rate": 1.25,
        "financing_pressure_score": 47.65,
        "incremental_financing_pressure_score": 48.51,
        "margin_burden_score": 44.22,
        "turnover_heat_score": 10.0
      },
      "trap_score": 40.94
    },
    {
      "code": "300803",
      "name": "指南针",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2650902304.0,
        "margin_buy": 65718405.0,
        "float_market_cap": 39511439699.0,
        "margin_balance_ratio": 0.067092,
        "turnover_rate": 1.97,
        "financing_pressure_score": 48.11,
        "incremental_financing_pressure_score": 39.79,
        "margin_burden_score": 81.39,
        "turnover_heat_score": 15.76
      },
      "trap_score": 42.3
    },
    {
      "code": "300364",
      "name": "中文在线",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1233048847.0,
        "margin_buy": 524352343.0,
        "float_market_cap": 19429307636.0,
        "margin_balance_ratio": 0.063463,
        "turnover_rate": 24.34,
        "financing_pressure_score": 95.8,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 78.98,
        "turnover_heat_score": 100.0
      },
      "trap_score": 80.61
    },
    {
      "code": "300394",
      "name": "天孚通信",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4401581545.0,
        "margin_buy": 387215091.0,
        "float_market_cap": 156793182339.0,
        "margin_balance_ratio": 0.028073,
        "turnover_rate": 6.88,
        "financing_pressure_score": 78.91,
        "incremental_financing_pressure_score": 87.99,
        "margin_burden_score": 42.59,
        "turnover_heat_score": 55.04,
        "turnover_z_score": 1.86
      },
      "trap_score": 64.02,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 18.08,
        "return_5d_pct": 5.93,
        "return_8d_pct": -2.66,
        "ma5_gap_pct": 11.71,
        "ma10_gap_pct": 6.26,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300570",
      "name": "太辰光",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 876804838.0,
        "margin_buy": 112239831.0,
        "float_market_cap": 23843255250.0,
        "margin_balance_ratio": 0.036774,
        "turnover_rate": 18.59,
        "financing_pressure_score": 90.69,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 53.47,
        "turnover_heat_score": 100.0
      },
      "trap_score": 78.31
    },
    {
      "code": "300782",
      "name": "卓胜微",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1345714862.0,
        "margin_buy": 41008549.0,
        "float_market_cap": 27440923036.0,
        "margin_balance_ratio": 0.04904,
        "turnover_rate": 1.54,
        "financing_pressure_score": 50.14,
        "incremental_financing_pressure_score": 45.47,
        "margin_burden_score": 68.8,
        "turnover_heat_score": 12.32
      },
      "trap_score": 42.53
    },
    {
      "code": "300548",
      "name": "长芯博创",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1518951322.0,
        "margin_buy": 128613542.0,
        "float_market_cap": 37550861609.0,
        "margin_balance_ratio": 0.040451,
        "turnover_rate": 10.62,
        "financing_pressure_score": 81.01,
        "incremental_financing_pressure_score": 86.75,
        "margin_burden_score": 58.06,
        "turnover_heat_score": 84.96
      },
      "trap_score": 70.95
    },
    {
      "code": "300604",
      "name": "长川科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2321165081.0,
        "margin_buy": 245775259.0,
        "float_market_cap": 92851394764.0,
        "margin_balance_ratio": 0.024999,
        "turnover_rate": 3.96,
        "financing_pressure_score": 83.52,
        "incremental_financing_pressure_score": 94.71,
        "margin_burden_score": 38.75,
        "turnover_heat_score": 31.68
      },
      "trap_score": 61.42
    },
    {
      "code": "300118",
      "name": "东方日升",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 584630470.0,
        "margin_buy": 187867297.0,
        "float_market_cap": 10015676660.0,
        "margin_balance_ratio": 0.058372,
        "turnover_rate": 20.35,
        "financing_pressure_score": 95.12,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 75.58,
        "turnover_heat_score": 100.0
      },
      "trap_score": 80.3
    },
    {
      "code": "300373",
      "name": "扬杰科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1229371042.0,
        "margin_buy": 68891779.0,
        "float_market_cap": 41885995994.0,
        "margin_balance_ratio": 0.02935,
        "turnover_rate": 1.45,
        "financing_pressure_score": 64.06,
        "incremental_financing_pressure_score": 69.03,
        "margin_burden_score": 44.19,
        "turnover_heat_score": 11.6
      },
      "trap_score": 48.65
    },
    {
      "code": "301236",
      "name": "软通动力",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1782508107.0,
        "margin_buy": 22061773.0,
        "float_market_cap": 28885620841.0,
        "margin_balance_ratio": 0.061709,
        "turnover_rate": 1.24,
        "financing_pressure_score": 32.89,
        "incremental_financing_pressure_score": 21.66,
        "margin_burden_score": 77.81,
        "turnover_heat_score": 9.92
      },
      "trap_score": 34.28
    },
    {
      "code": "301269",
      "name": "华大九天",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 738131091.0,
        "margin_buy": 41025118.0,
        "float_market_cap": 49708510304.0,
        "margin_balance_ratio": 0.014849,
        "turnover_rate": 1.46,
        "financing_pressure_score": 60.19,
        "incremental_financing_pressure_score": 68.72,
        "margin_burden_score": 26.06,
        "turnover_heat_score": 11.68
      },
      "trap_score": 46.92
    },
    {
      "code": "301312",
      "name": "智立方",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 225833004.0,
        "margin_buy": 29048181.0,
        "float_market_cap": 4615937222.0,
        "margin_balance_ratio": 0.048925,
        "turnover_rate": 8.09,
        "financing_pressure_score": 93.73,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 68.66,
        "turnover_heat_score": 64.72
      },
      "trap_score": 72.62
    },
    {
      "code": "301308",
      "name": "江波龙",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4480476515.0,
        "margin_buy": 184470379.0,
        "float_market_cap": 65189524101.0,
        "margin_balance_ratio": 0.06873,
        "turnover_rate": 5.54,
        "financing_pressure_score": 61.43,
        "incremental_financing_pressure_score": 56.17,
        "margin_burden_score": 82.49,
        "turnover_heat_score": 44.32,
        "turnover_z_score": 1.2
      },
      "trap_score": 54.01,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 7.69,
        "return_5d_pct": 3.72,
        "return_8d_pct": 9.01,
        "ma5_gap_pct": 4.34,
        "ma10_gap_pct": 6.01,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "301095",
      "name": "广立微",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 418953139.0,
        "margin_buy": 14426078.0,
        "float_market_cap": 9962435358.0,
        "margin_balance_ratio": 0.042053,
        "turnover_rate": 2.11,
        "financing_pressure_score": 51.56,
        "incremental_financing_pressure_score": 49.43,
        "margin_burden_score": 60.07,
        "turnover_heat_score": 16.88
      },
      "trap_score": 44.08
    },
    {
      "code": "301171",
      "name": "易点天下",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1189822126.0,
        "margin_buy": 315916883.0,
        "float_market_cap": 17426746749.0,
        "margin_balance_ratio": 0.068276,
        "turnover_rate": 14.2,
        "financing_pressure_score": 96.44,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 82.18,
        "turnover_heat_score": 100.0
      },
      "trap_score": 80.9
    },
    {
      "code": "301165",
      "name": "锐捷网络",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 458913052.0,
        "margin_buy": 102992299.0,
        "float_market_cap": 85427045406.0,
        "margin_balance_ratio": 0.005372,
        "turnover_rate": 1.27,
        "financing_pressure_score": 82.15,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 10.74,
        "turnover_heat_score": 10.16
      },
      "trap_score": 56.5
    },
    {
      "code": "300059",
      "name": "东方财富",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 20414714544.0,
        "margin_buy": 266735550.0,
        "float_market_cap": 250737721336.0,
        "margin_balance_ratio": 0.081419,
        "turnover_rate": 1.05,
        "financing_pressure_score": 36.36,
        "incremental_financing_pressure_score": 22.87,
        "margin_burden_score": 90.35,
        "turnover_heat_score": 8.4
      },
      "trap_score": 35.54
    },
    {
      "code": "002371",
      "name": "北方华创",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2093328970.0,
        "margin_buy": 215155512.0,
        "float_market_cap": 398522493011.0,
        "margin_balance_ratio": 0.005253,
        "turnover_rate": 1.08,
        "financing_pressure_score": 76.94,
        "incremental_financing_pressure_score": 93.54,
        "margin_burden_score": 10.51,
        "turnover_heat_score": 8.64
      },
      "trap_score": 53.85
    },
    {
      "code": "002475",
      "name": "立讯精密",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4651179555.0,
        "margin_buy": 241788401.0,
        "float_market_cap": 378769225789.0,
        "margin_balance_ratio": 0.01228,
        "turnover_rate": 0.81,
        "financing_pressure_score": 57.63,
        "incremental_financing_pressure_score": 66.32,
        "margin_burden_score": 22.85,
        "turnover_heat_score": 6.48
      },
      "trap_score": 44.73
    },
    {
      "code": "002463",
      "name": "沪电股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3814156591.0,
        "margin_buy": 603452368.0,
        "float_market_cap": 172831427473.0,
        "margin_balance_ratio": 0.022069,
        "turnover_rate": 4.16,
        "financing_pressure_score": 87.02,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 35.09,
        "turnover_heat_score": 33.28
      },
      "trap_score": 63.31
    },
    {
      "code": "002555",
      "name": "三七互娱",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1351329215.0,
        "margin_buy": 29952264.0,
        "float_market_cap": 26417941630.0,
        "margin_balance_ratio": 0.051152,
        "turnover_rate": 2.47,
        "financing_pressure_score": 43.89,
        "incremental_financing_pressure_score": 37.17,
        "margin_burden_score": 70.77,
        "turnover_heat_score": 19.76
      },
      "trap_score": 41.2
    },
    {
      "code": "002236",
      "name": "大华股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1283032642.0,
        "margin_buy": 21431081.0,
        "float_market_cap": 34336763435.0,
        "margin_balance_ratio": 0.037366,
        "turnover_rate": 0.74,
        "financing_pressure_score": 34.23,
        "incremental_financing_pressure_score": 29.23,
        "margin_burden_score": 54.21,
        "turnover_heat_score": 5.92
      },
      "trap_score": 34.09
    },
    {
      "code": "002241",
      "name": "歌尔股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3719512980.0,
        "margin_buy": 578740348.0,
        "float_market_cap": 79513425930.0,
        "margin_balance_ratio": 0.046778,
        "turnover_rate": 3.3,
        "financing_pressure_score": 93.19,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 65.97,
        "turnover_heat_score": 26.4
      },
      "trap_score": 64.72
    },
    {
      "code": "600050",
      "name": "中国联通",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2395578440.0,
        "margin_buy": 47061718.0,
        "float_market_cap": 132948855262.0,
        "margin_balance_ratio": 0.018019,
        "turnover_rate": 0.37,
        "financing_pressure_score": 33.51,
        "incremental_financing_pressure_score": 34.38,
        "margin_burden_score": 30.02,
        "turnover_heat_score": 2.96
      },
      "trap_score": 33.17
    },
    {
      "code": "002859",
      "name": "洁美科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 601753388.0,
        "margin_buy": 32164394.0,
        "float_market_cap": 18134865568.0,
        "margin_balance_ratio": 0.033182,
        "turnover_rate": 2.33,
        "financing_pressure_score": 63.64,
        "incremental_financing_pressure_score": 67.3,
        "margin_burden_score": 48.98,
        "turnover_heat_score": 18.64
      },
      "trap_score": 49.87
    },
    {
      "code": "002920",
      "name": "德赛西威",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1276967338.0,
        "margin_buy": 71451762.0,
        "float_market_cap": 51160318836.0,
        "margin_balance_ratio": 0.02496,
        "turnover_rate": 1.77,
        "financing_pressure_score": 62.92,
        "incremental_financing_pressure_score": 68.97,
        "margin_burden_score": 38.7,
        "turnover_heat_score": 14.16
      },
      "trap_score": 48.65
    },
    {
      "code": "002456",
      "name": "欧菲光",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1252218165.0,
        "margin_buy": 14600071.0,
        "float_market_cap": 19039607185.0,
        "margin_balance_ratio": 0.065769,
        "turnover_rate": 1.34,
        "financing_pressure_score": 32.43,
        "incremental_financing_pressure_score": 20.4,
        "margin_burden_score": 80.51,
        "turnover_heat_score": 10.72
      },
      "trap_score": 34.24
    },
    {
      "code": "002156",
      "name": "通富微电",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3478324180.0,
        "margin_buy": 294988341.0,
        "float_market_cap": 69651056990.0,
        "margin_balance_ratio": 0.049939,
        "turnover_rate": 5.44,
        "financing_pressure_score": 83.43,
        "incremental_financing_pressure_score": 86.8,
        "margin_burden_score": 69.92,
        "turnover_heat_score": 43.52
      },
      "trap_score": 63.75
    },
    {
      "code": "002261",
      "name": "拓维信息",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1213857147.0,
        "margin_buy": 39882822.0,
        "float_market_cap": 25053865815.0,
        "margin_balance_ratio": 0.04845,
        "turnover_rate": 1.61,
        "financing_pressure_score": 51.9,
        "incremental_financing_pressure_score": 47.86,
        "margin_burden_score": 68.06,
        "turnover_heat_score": 12.88
      },
      "trap_score": 43.43
    },
    {
      "code": "002273",
      "name": "水晶光电",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2317882884.0,
        "margin_buy": 119471477.0,
        "float_market_cap": 33264081530.0,
        "margin_balance_ratio": 0.069681,
        "turnover_rate": 2.74,
        "financing_pressure_score": 69.45,
        "incremental_financing_pressure_score": 66.03,
        "margin_burden_score": 83.12,
        "turnover_heat_score": 21.92
      },
      "trap_score": 53.14
    },
    {
      "code": "002281",
      "name": "光迅科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2409362502.0,
        "margin_buy": 176676700.0,
        "float_market_cap": 81692072125.0,
        "margin_balance_ratio": 0.029493,
        "turnover_rate": 5.06,
        "financing_pressure_score": 73.32,
        "incremental_financing_pressure_score": 80.55,
        "margin_burden_score": 44.37,
        "turnover_heat_score": 40.48,
        "turnover_z_score": 0.98
      },
      "trap_score": 58.59,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 13.83,
        "return_5d_pct": 5.8,
        "return_8d_pct": 1.3,
        "ma5_gap_pct": 8.18,
        "ma10_gap_pct": 5.18,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002415",
      "name": "海康威视",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3672867957.0,
        "margin_buy": 110339937.0,
        "float_market_cap": 309828709568.0,
        "margin_balance_ratio": 0.011855,
        "turnover_rate": 0.53,
        "financing_pressure_score": 40.5,
        "incremental_financing_pressure_score": 45.04,
        "margin_burden_score": 22.32,
        "turnover_heat_score": 4.24
      },
      "trap_score": 36.57
    },
    {
      "code": "002916",
      "name": "深南电路",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1175338148.0,
        "margin_buy": 110202005.0,
        "float_market_cap": 152261692298.0,
        "margin_balance_ratio": 0.007719,
        "turnover_rate": 1.94,
        "financing_pressure_score": 75.22,
        "incremental_financing_pressure_score": 90.16,
        "margin_burden_score": 15.44,
        "turnover_heat_score": 15.52
      },
      "trap_score": 54.45
    },
    {
      "code": "002517",
      "name": "恺英网络",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1466369690.0,
        "margin_buy": 41630302.0,
        "float_market_cap": 31909523608.0,
        "margin_balance_ratio": 0.045954,
        "turnover_rate": 3.92,
        "financing_pressure_score": 47.7,
        "incremental_financing_pressure_score": 43.39,
        "margin_burden_score": 64.94,
        "turnover_heat_score": 31.36
      },
      "trap_score": 45.24
    },
    {
      "code": "002049",
      "name": "紫光国微",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3632537853.0,
        "margin_buy": 58409109.0,
        "float_market_cap": 44121499453.0,
        "margin_balance_ratio": 0.08233,
        "turnover_rate": 1.17,
        "financing_pressure_score": 40.63,
        "incremental_financing_pressure_score": 28.14,
        "margin_burden_score": 90.58,
        "turnover_heat_score": 9.36
      },
      "trap_score": 37.66
    },
    {
      "code": "002138",
      "name": "顺络电子",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1103212318.0,
        "margin_buy": 32738746.0,
        "float_market_cap": 30914348748.0,
        "margin_balance_ratio": 0.035686,
        "turnover_rate": 2.41,
        "financing_pressure_score": 46.16,
        "incremental_financing_pressure_score": 44.68,
        "margin_burden_score": 52.11,
        "turnover_heat_score": 19.28
      },
      "trap_score": 42.13
    },
    {
      "code": "002185",
      "name": "华天科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2178902852.0,
        "margin_buy": 150549021.0,
        "float_market_cap": 49784516002.0,
        "margin_balance_ratio": 0.043767,
        "turnover_rate": 5.42,
        "financing_pressure_score": 74.63,
        "incremental_financing_pressure_score": 77.73,
        "margin_burden_score": 62.21,
        "turnover_heat_score": 43.36,
        "turnover_z_score": -0.36
      },
      "trap_score": 59.76,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 3.82,
        "return_5d_pct": -0.2,
        "return_8d_pct": -0.33,
        "ma5_gap_pct": 1.88,
        "ma10_gap_pct": 1.49,
        "drawdown_8d_pct": -0.66,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "000063",
      "name": "中兴通讯",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8247905855.0,
        "margin_buy": 123326795.0,
        "float_market_cap": 115189967235.0,
        "margin_balance_ratio": 0.071603,
        "turnover_rate": 1.19,
        "financing_pressure_score": 37.81,
        "incremental_financing_pressure_score": 26.17,
        "margin_burden_score": 84.4,
        "turnover_heat_score": 9.52
      },
      "trap_score": 36.42
    },
    {
      "code": "000977",
      "name": "浪潮信息",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3929724058.0,
        "margin_buy": 175280091.0,
        "float_market_cap": 82968749956.0,
        "margin_balance_ratio": 0.047364,
        "turnover_rate": 2.73,
        "financing_pressure_score": 61.02,
        "incremental_financing_pressure_score": 59.6,
        "margin_burden_score": 66.7,
        "turnover_heat_score": 21.84
      },
      "trap_score": 49.33
    },
    {
      "code": "000938",
      "name": "紫光股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4187123181.0,
        "margin_buy": 166245720.0,
        "float_market_cap": 72417040106.0,
        "margin_balance_ratio": 0.05782,
        "turnover_rate": 2.83,
        "financing_pressure_score": 58.81,
        "incremental_financing_pressure_score": 54.7,
        "margin_burden_score": 75.21,
        "turnover_heat_score": 22.64
      },
      "trap_score": 48.49
    },
    {
      "code": "000988",
      "name": "华工科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5221241920.0,
        "margin_buy": 141637070.0,
        "float_market_cap": 69595256747.0,
        "margin_balance_ratio": 0.075023,
        "turnover_rate": 4.58,
        "financing_pressure_score": 51.04,
        "incremental_financing_pressure_score": 42.13,
        "margin_burden_score": 86.68,
        "turnover_heat_score": 36.64
      },
      "trap_score": 47.8
    },
    {
      "code": "000034",
      "name": "神州数码",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1512215723.0,
        "margin_buy": 20606690.0,
        "float_market_cap": 17976459794.0,
        "margin_balance_ratio": 0.084122,
        "turnover_rate": 1.29,
        "financing_pressure_score": 37.28,
        "incremental_financing_pressure_score": 23.85,
        "margin_burden_score": 91.03,
        "turnover_heat_score": 10.32
      },
      "trap_score": 36.34
    },
    {
      "code": "000066",
      "name": "中国长城",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1559566556.0,
        "margin_buy": 54386704.0,
        "float_market_cap": 38449030869.0,
        "margin_balance_ratio": 0.040562,
        "turnover_rate": 2.46,
        "financing_pressure_score": 51.54,
        "incremental_financing_pressure_score": 49.87,
        "margin_burden_score": 58.2,
        "turnover_heat_score": 19.68
      },
      "trap_score": 44.63
    },
    {
      "code": "000725",
      "name": "京东方Ａ",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 9604131123.0,
        "margin_buy": 373109275.0,
        "float_market_cap": 161274131574.0,
        "margin_balance_ratio": 0.059552,
        "turnover_rate": 2.4,
        "financing_pressure_score": 58.35,
        "incremental_financing_pressure_score": 53.85,
        "margin_burden_score": 76.37,
        "turnover_heat_score": 19.2
      },
      "trap_score": 47.6
    },
    {
      "code": "000100",
      "name": "TCL科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3997094151.0,
        "margin_buy": 109986657.0,
        "float_market_cap": 91925459679.0,
        "margin_balance_ratio": 0.043482,
        "turnover_rate": 1.07,
        "financing_pressure_score": 46.38,
        "incremental_financing_pressure_score": 42.52,
        "margin_burden_score": 61.85,
        "turnover_heat_score": 8.56
      },
      "trap_score": 40.08
    },
    {
      "code": "600584",
      "name": "长电科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4778637454.0,
        "margin_buy": 224841077.0,
        "float_market_cap": 97344152608.0,
        "margin_balance_ratio": 0.04909,
        "turnover_rate": 3.78,
        "financing_pressure_score": 63.41,
        "incremental_financing_pressure_score": 62.05,
        "margin_burden_score": 68.86,
        "turnover_heat_score": 30.24
      },
      "trap_score": 52.08
    },
    {
      "code": "600570",
      "name": "恒生电子",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2244631449.0,
        "margin_buy": 34639981.0,
        "float_market_cap": 39905229982.0,
        "margin_balance_ratio": 0.056249,
        "turnover_rate": 0.92,
        "financing_pressure_score": 36.44,
        "incremental_financing_pressure_score": 27.01,
        "margin_burden_score": 74.17,
        "turnover_heat_score": 7.36
      },
      "trap_score": 35.37
    },
    {
      "code": "600845",
      "name": "宝信软件",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 554417777.0,
        "margin_buy": 14462289.0,
        "float_market_cap": 35489320564.0,
        "margin_balance_ratio": 0.015622,
        "turnover_rate": 0.46,
        "financing_pressure_score": 38.27,
        "incremental_financing_pressure_score": 41.09,
        "margin_burden_score": 27.03,
        "turnover_heat_score": 3.68
      },
      "trap_score": 35.46
    },
    {
      "code": "600536",
      "name": "中国软件",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1427713719.0,
        "margin_buy": 15805299.0,
        "float_market_cap": 25309676850.0,
        "margin_balance_ratio": 0.05641,
        "turnover_rate": 0.99,
        "financing_pressure_score": 30.35,
        "incremental_financing_pressure_score": 19.37,
        "margin_burden_score": 74.27,
        "turnover_heat_score": 7.92
      },
      "trap_score": 32.74
    },
    {
      "code": "600588",
      "name": "用友网络",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1335585487.0,
        "margin_buy": 44503230.0,
        "float_market_cap": 31538886085.0,
        "margin_balance_ratio": 0.042347,
        "turnover_rate": 1.07,
        "financing_pressure_score": 50.74,
        "incremental_financing_pressure_score": 48.32,
        "margin_burden_score": 60.43,
        "turnover_heat_score": 8.56
      },
      "trap_score": 42.05
    },
    {
      "code": "600602",
      "name": "云赛智联",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 646725342.0,
        "margin_buy": 13013246.0,
        "float_market_cap": 16168260000.0,
        "margin_balance_ratio": 0.04,
        "turnover_rate": 1.2,
        "financing_pressure_score": 39.6,
        "incremental_financing_pressure_score": 35.12,
        "margin_burden_score": 57.5,
        "turnover_heat_score": 9.6
      },
      "trap_score": 37.24
    },
    {
      "code": "600171",
      "name": "上海贝岭",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 744008318.0,
        "margin_buy": 15213566.0,
        "float_market_cap": 14483303080.0,
        "margin_balance_ratio": 0.05137,
        "turnover_rate": 0.9,
        "financing_pressure_score": 42.54,
        "incremental_financing_pressure_score": 35.45,
        "margin_burden_score": 70.91,
        "turnover_heat_score": 7.2
      },
      "trap_score": 38.08
    },
    {
      "code": "600498",
      "name": "烽火通信",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1751508929.0,
        "margin_buy": 129163763.0,
        "float_market_cap": 38441116615.0,
        "margin_balance_ratio": 0.045563,
        "turnover_rate": 5.63,
        "financing_pressure_score": 77.55,
        "incremental_financing_pressure_score": 80.83,
        "margin_burden_score": 64.45,
        "turnover_heat_score": 45.04,
        "turnover_z_score": 1.21
      },
      "trap_score": 61.41,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 11.96,
        "return_5d_pct": 10.37,
        "return_8d_pct": 15.47,
        "ma5_gap_pct": 5.32,
        "ma10_gap_pct": 8.95,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "600183",
      "name": "生益科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3683578462.0,
        "margin_buy": 652517124.0,
        "float_market_cap": 185415252126.0,
        "margin_balance_ratio": 0.019867,
        "turnover_rate": 5.82,
        "financing_pressure_score": 86.47,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 32.33,
        "turnover_heat_score": 46.56
      },
      "trap_score": 65.72
    },
    {
      "code": "600460",
      "name": "士兰微",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1826221500.0,
        "margin_buy": 60541466.0,
        "float_market_cap": 40669915892.0,
        "margin_balance_ratio": 0.044903,
        "turnover_rate": 2.56,
        "financing_pressure_score": 51.25,
        "incremental_financing_pressure_score": 48.15,
        "margin_burden_score": 63.63,
        "turnover_heat_score": 20.48
      },
      "trap_score": 44.66
    },
    {
      "code": "600703",
      "name": "三安光电",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3491954055.0,
        "margin_buy": 44884672.0,
        "float_market_cap": 47595238656.0,
        "margin_balance_ratio": 0.073368,
        "turnover_rate": 1.12,
        "financing_pressure_score": 35.11,
        "incremental_financing_pressure_score": 22.49,
        "margin_burden_score": 85.58,
        "turnover_heat_score": 8.96
      },
      "trap_score": 35.09
    },
    {
      "code": "601138",
      "name": "工业富联",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6207324905.0,
        "margin_buy": 335303769.0,
        "float_market_cap": 904096844459.0,
        "margin_balance_ratio": 0.006866,
        "turnover_rate": 0.79,
        "financing_pressure_score": 56.89,
        "incremental_financing_pressure_score": 67.68,
        "margin_burden_score": 13.73,
        "turnover_heat_score": 6.32
      },
      "trap_score": 44.36
    },
    {
      "code": "601360",
      "name": "三六零",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2067484680.0,
        "margin_buy": 52534371.0,
        "float_market_cap": 57816348081.0,
        "margin_balance_ratio": 0.03576,
        "turnover_rate": 0.87,
        "financing_pressure_score": 42.77,
        "incremental_financing_pressure_score": 40.41,
        "margin_burden_score": 52.2,
        "turnover_heat_score": 6.96
      },
      "trap_score": 38.14
    },
    {
      "code": "603000",
      "name": "人民网",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 462368272.0,
        "margin_buy": 28295138.0,
        "float_market_cap": 18277073156.0,
        "margin_balance_ratio": 0.025298,
        "turnover_rate": 1.37,
        "financing_pressure_score": 65.8,
        "incremental_financing_pressure_score": 72.46,
        "margin_burden_score": 39.12,
        "turnover_heat_score": 10.96
      },
      "trap_score": 49.3
    },
    {
      "code": "300054",
      "name": "鼎龙股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1678042219.0,
        "margin_buy": 118792655.0,
        "float_market_cap": 46283378177.0,
        "margin_balance_ratio": 0.036256,
        "turnover_rate": 2.33,
        "financing_pressure_score": 73.65,
        "incremental_financing_pressure_score": 78.86,
        "margin_burden_score": 52.82,
        "turnover_heat_score": 18.64
      },
      "trap_score": 54.37
    },
    {
      "code": "002192",
      "name": "融捷股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1031865036.0,
        "margin_buy": 79114228.0,
        "float_market_cap": 12852303789.0,
        "margin_balance_ratio": 0.080286,
        "turnover_rate": 4.83,
        "financing_pressure_score": 84.24,
        "incremental_financing_pressure_score": 82.78,
        "margin_burden_score": 90.07,
        "turnover_heat_score": 38.64
      },
      "trap_score": 63.14
    },
    {
      "code": "002466",
      "name": "天齐锂业",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2699087713.0,
        "margin_buy": 59340897.0,
        "float_market_cap": 53012941991.0,
        "margin_balance_ratio": 0.050914,
        "turnover_rate": 1.96,
        "financing_pressure_score": 43.71,
        "incremental_financing_pressure_score": 36.99,
        "margin_burden_score": 70.61,
        "turnover_heat_score": 15.68
      },
      "trap_score": 40.31
    },
    {
      "code": "002837",
      "name": "英维克",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3073188468.0,
        "margin_buy": 73711311.0,
        "float_market_cap": 49186603029.0,
        "margin_balance_ratio": 0.06248,
        "turnover_rate": 4.15,
        "financing_pressure_score": 46.85,
        "incremental_financing_pressure_score": 38.99,
        "margin_burden_score": 78.32,
        "turnover_heat_score": 33.2
      },
      "trap_score": 45.22
    },
    {
      "code": "601869",
      "name": "长飞光纤",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1908074781.0,
        "margin_buy": 166114769.0,
        "float_market_cap": 112783262434.0,
        "margin_balance_ratio": 0.016918,
        "turnover_rate": 3.41,
        "financing_pressure_score": 75.85,
        "incremental_financing_pressure_score": 87.65,
        "margin_burden_score": 28.65,
        "turnover_heat_score": 27.28
      },
      "trap_score": 57.09
    },
    {
      "code": "002938",
      "name": "鹏鼎控股",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 992674932.0,
        "margin_buy": 84157427.0,
        "float_market_cap": 121594372289.0,
        "margin_balance_ratio": 0.008164,
        "turnover_rate": 1.36,
        "financing_pressure_score": 72.7,
        "incremental_financing_pressure_score": 86.79,
        "margin_burden_score": 16.33,
        "turnover_heat_score": 10.88
      },
      "trap_score": 52.39
    },
    {
      "code": "000878",
      "name": "云南铜业",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1749065043.0,
        "margin_buy": 31671026.0,
        "float_market_cap": 27549786138.0,
        "margin_balance_ratio": 0.063487,
        "turnover_rate": 1.08,
        "financing_pressure_score": 41.15,
        "incremental_financing_pressure_score": 31.69,
        "margin_burden_score": 78.99,
        "turnover_heat_score": 8.64
      },
      "trap_score": 37.75
    },
    {
      "code": "002155",
      "name": "湖南黄金",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1632980365.0,
        "margin_buy": 40350182.0,
        "float_market_cap": 31374978253.0,
        "margin_balance_ratio": 0.052047,
        "turnover_rate": 2.0,
        "financing_pressure_score": 46.04,
        "incremental_financing_pressure_score": 39.71,
        "margin_burden_score": 71.36,
        "turnover_heat_score": 16.0
      },
      "trap_score": 41.42
    },
    {
      "code": "600378",
      "name": "昊华科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 976766030.0,
        "margin_buy": 46751693.0,
        "float_market_cap": 36070373158.0,
        "margin_balance_ratio": 0.027079,
        "turnover_rate": 1.79,
        "financing_pressure_score": 58.56,
        "incremental_financing_pressure_score": 62.86,
        "margin_burden_score": 41.35,
        "turnover_heat_score": 14.32
      },
      "trap_score": 46.72
    },
    {
      "code": "300418",
      "name": "昆仑万维",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2875807947.0,
        "margin_buy": 390795827.0,
        "float_market_cap": 49914452123.0,
        "margin_balance_ratio": 0.057615,
        "turnover_rate": 5.95,
        "financing_pressure_score": 95.02,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 75.08,
        "turnover_heat_score": 47.6
      },
      "trap_score": 69.78
    },
    {
      "code": "002218",
      "name": "拓日新能",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 124624968.0,
        "margin_buy": 28999473.0,
        "float_market_cap": 5148284820.0,
        "margin_balance_ratio": 0.024207,
        "turnover_rate": 6.09,
        "financing_pressure_score": 87.55,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 37.76,
        "turnover_heat_score": 48.72,
        "turnover_z_score": 0.97
      },
      "trap_score": 66.64,
      "trend": {
        "available": true,
        "down_streak": 1,
        "return_3d_pct": 0.54,
        "return_5d_pct": 4.21,
        "return_8d_pct": 13.8,
        "ma5_gap_pct": 0.38,
        "ma10_gap_pct": 4.6,
        "drawdown_8d_pct": -1.07,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300617",
      "name": "安靠智电",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": 4235618082.0,
        "margin_balance_ratio": null,
        "turnover_rate": 2.22,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.76
      },
      "trap_score": 21.05
    },
    {
      "code": "300738",
      "name": "奥飞数据",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1305451206.0,
        "margin_buy": 27900960.0,
        "float_market_cap": 16300526442.0,
        "margin_balance_ratio": 0.080086,
        "turnover_rate": 1.74,
        "financing_pressure_score": 47.1,
        "incremental_financing_pressure_score": 36.37,
        "margin_burden_score": 90.02,
        "turnover_heat_score": 13.92
      },
      "trap_score": 41.48
    },
    {
      "code": "002126",
      "name": "银轮股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 519279037.0,
        "margin_buy": 35730071.0,
        "float_market_cap": 24528605362.0,
        "margin_balance_ratio": 0.02117,
        "turnover_rate": 2.32,
        "financing_pressure_score": 68.82,
        "incremental_financing_pressure_score": 77.54,
        "margin_burden_score": 33.96,
        "turnover_heat_score": 18.56
      },
      "trap_score": 52.18
    },
    {
      "code": "002050",
      "name": "三花智控",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4649233926.0,
        "margin_buy": 202917648.0,
        "float_market_cap": 134169485459.0,
        "margin_balance_ratio": 0.034652,
        "turnover_rate": 2.91,
        "financing_pressure_score": 57.08,
        "incremental_financing_pressure_score": 58.65,
        "margin_burden_score": 50.81,
        "turnover_heat_score": 23.28
      },
      "trap_score": 47.84
    },
    {
      "code": "603075",
      "name": "热威股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 34262180.0,
        "margin_buy": 1098684.0,
        "float_market_cap": 750919921.0,
        "margin_balance_ratio": 0.045627,
        "turnover_rate": 2.42,
        "financing_pressure_score": 50.56,
        "incremental_financing_pressure_score": 47.07,
        "margin_burden_score": 64.53,
        "turnover_heat_score": 19.36
      },
      "trap_score": 44.12
    },
    {
      "code": "603667",
      "name": "五洲新春",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1020104997.0,
        "margin_buy": 216040840.0,
        "float_market_cap": 21333899017.0,
        "margin_balance_ratio": 0.047816,
        "turnover_rate": 7.13,
        "financing_pressure_score": 93.45,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 67.27,
        "turnover_heat_score": 57.04
      },
      "trap_score": 70.96
    },
    {
      "code": "605020",
      "name": "永和股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 362489035.0,
        "margin_buy": 13075049.0,
        "float_market_cap": 14941447648.0,
        "margin_balance_ratio": 0.024261,
        "turnover_rate": 1.06,
        "financing_pressure_score": 48.42,
        "incremental_financing_pressure_score": 51.07,
        "margin_burden_score": 37.83,
        "turnover_heat_score": 8.48
      },
      "trap_score": 40.98
    },
    {
      "code": "600160",
      "name": "巨化股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3498322656.0,
        "margin_buy": 38775251.0,
        "float_market_cap": 89145615595.0,
        "margin_balance_ratio": 0.039243,
        "turnover_rate": 0.54,
        "financing_pressure_score": 26.83,
        "incremental_financing_pressure_score": 19.4,
        "margin_burden_score": 56.55,
        "turnover_heat_score": 4.32
      },
      "trap_score": 30.44
    },
    {
      "code": "603379",
      "name": "三美股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 612460526.0,
        "margin_buy": 20855790.0,
        "float_market_cap": 30145454847.0,
        "margin_balance_ratio": 0.020317,
        "turnover_rate": 1.2,
        "financing_pressure_score": 45.82,
        "incremental_financing_pressure_score": 49.05,
        "margin_burden_score": 32.9,
        "turnover_heat_score": 9.6
      },
      "trap_score": 40.04
    },
    {
      "code": "600988",
      "name": "赤峰黄金",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1072404541.0,
        "margin_buy": 97721085.0,
        "float_market_cap": 65391717155.0,
        "margin_balance_ratio": 0.0164,
        "turnover_rate": 2.6,
        "financing_pressure_score": 76.94,
        "incremental_financing_pressure_score": 89.17,
        "margin_burden_score": 28.0,
        "turnover_heat_score": 20.8
      },
      "trap_score": 56.28
    },
    {
      "code": "000636",
      "name": "风华高科",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2101110253.0,
        "margin_buy": 130109328.0,
        "float_market_cap": 38716311554.0,
        "margin_balance_ratio": 0.054269,
        "turnover_rate": 6.59,
        "financing_pressure_score": 72.93,
        "incremental_financing_pressure_score": 72.95,
        "margin_burden_score": 72.85,
        "turnover_heat_score": 52.72,
        "turnover_z_score": 0.41
      },
      "trap_score": 60.86,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 7.15,
        "return_5d_pct": 1.93,
        "return_8d_pct": 4.59,
        "ma5_gap_pct": 3.92,
        "ma10_gap_pct": 3.67,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "688825",
      "name": "长鑫科技",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": 189442849510.0,
        "margin_balance_ratio": null,
        "turnover_rate": 7.93,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 63.44,
        "turnover_z_score": 0.21
      },
      "trap_score": 30.19,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 4.11,
        "return_5d_pct": -4.58,
        "return_8d_pct": 0.65,
        "ma5_gap_pct": 2.39,
        "ma10_gap_pct": 1.44,
        "drawdown_8d_pct": -4.58,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "600105",
      "name": "永鼎股份",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1361400439.0,
        "margin_buy": 93383678.0,
        "float_market_cap": 35687293117.0,
        "margin_balance_ratio": 0.038148,
        "turnover_rate": 9.15,
        "financing_pressure_score": 72.95,
        "incremental_financing_pressure_score": 77.4,
        "margin_burden_score": 55.19,
        "turnover_heat_score": 73.2
      },
      "trap_score": 64.97
    },
    {
      "code": "300285",
      "name": "国瓷材料",
      "margin_date": "20261110",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2635721232.0,
        "margin_buy": 126140344.0,
        "float_market_cap": 35597590767.0,
        "margin_balance_ratio": 0.074042,
        "turnover_rate": 5.5,
        "financing_pressure_score": 67.49,
        "incremental_financing_pressure_score": 62.86,
        "margin_burden_score": 86.03,
        "turnover_heat_score": 44.0,
        "turnover_z_score": -0.49
      },
      "trap_score": 56.67,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 8.06,
        "return_5d_pct": 3.35,
        "return_8d_pct": 11.8,
        "ma5_gap_pct": 3.93,
        "ma10_gap_pct": 6.35,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    }
  ]
};
