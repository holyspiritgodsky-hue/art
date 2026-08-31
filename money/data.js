window.__QUANT_DATA__ = {
  "generated_at": "2026-08-31T17:45:58+08:00",
  "data_freshness": {
    "warning_target_date": "2026-09-01",
    "spot_snapshot_at": "2026-08-31T17:45:58+08:00",
    "margin_data_as_of": "20260828",
    "margin_data_dates_by_market": {
      "szse": "20260828",
      "sse": "20260828"
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
    "source": "tencent:stock_zh_a_spot_tx",
    "total_rows": 5551,
    "turnover_rate_available_rows": 5551,
    "turnover_rate_missing_rows": 0,
    "turnover_rate_missing_ratio": 0.0,
    "float_market_cap_available_rows": 0,
    "float_market_cap_missing_rows": 5551,
    "float_market_cap_missing_ratio": 1.0
  },
  "daily_warning": {
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
      "status": "待复盘",
      "note": ""
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
  "warning_history": [
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
        "status": "待复盘",
        "note": ""
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
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 82,
        "margin_balance": 16730086606.0,
        "margin_buy": 2127781811.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.53,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.24
      },
      "trap_score": 70.35
    },
    {
      "code": "002384",
      "name": "东山精密",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 68,
        "margin_balance": 10458498287.0,
        "margin_buy": 1029809100.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.17,
        "financing_pressure_score": 73.54,
        "incremental_financing_pressure_score": 91.92,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.36
      },
      "trap_score": 61.97
    },
    {
      "code": "300308",
      "name": "中际旭创",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 88,
        "margin_balance": 32900946051.0,
        "margin_buy": 4361757527.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.02,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.16
      },
      "trap_score": 70.03
    },
    {
      "code": "002230",
      "name": "科大讯飞",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5483465334.0,
        "margin_buy": 108286166.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.23,
        "financing_pressure_score": 27.65,
        "incremental_financing_pressure_score": 34.56,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.84
      },
      "trap_score": 31.91
    },
    {
      "code": "688256",
      "name": "寒武纪",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 18053020323.0,
        "margin_buy": 980635986.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.94,
        "financing_pressure_score": 54.3,
        "incremental_financing_pressure_score": 67.88,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.52
      },
      "trap_score": 45.04
    },
    {
      "code": "603019",
      "name": "中科曙光",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8660041355.0,
        "margin_buy": 236312978.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.89,
        "financing_pressure_score": 33.83,
        "incremental_financing_pressure_score": 42.29,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.12
      },
      "trap_score": 37.35
    },
    {
      "code": "603160",
      "name": "汇顶科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 987977577.0,
        "margin_buy": 13063922.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.86,
        "financing_pressure_score": 18.51,
        "incremental_financing_pressure_score": 23.14,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.88
      },
      "trap_score": 28.81
    },
    {
      "code": "603986",
      "name": "兆易创新",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 17977986760.0,
        "margin_buy": 1718313183.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.75,
        "financing_pressure_score": 72.67,
        "incremental_financing_pressure_score": 90.84,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 38.0
      },
      "trap_score": 57.8
    },
    {
      "code": "603501",
      "name": "豪威集团",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4656983795.0,
        "margin_buy": 153851611.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.92,
        "financing_pressure_score": 38.43,
        "incremental_financing_pressure_score": 48.04,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.36
      },
      "trap_score": 36.27
    },
    {
      "code": "603893",
      "name": "瑞芯微",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2127090173.0,
        "margin_buy": 151938988.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.21,
        "financing_pressure_score": 63.43,
        "incremental_financing_pressure_score": 79.29,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.68,
        "turnover_z_score": 0.84
      },
      "trap_score": 52.78,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 10.45,
        "return_5d_pct": 11.45,
        "return_8d_pct": 6.86,
        "ma5_gap_pct": 7.61,
        "ma10_gap_pct": 6.79,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "688111",
      "name": "金山办公",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4847618598.0,
        "margin_buy": 277259880.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.78,
        "financing_pressure_score": 55.84,
        "incremental_financing_pressure_score": 69.8,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.24
      },
      "trap_score": 45.48
    },
    {
      "code": "688041",
      "name": "海光信息",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8927573255.0,
        "margin_buy": 399740877.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.81,
        "financing_pressure_score": 47.82,
        "incremental_financing_pressure_score": 59.78,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.48
      },
      "trap_score": 40.32
    },
    {
      "code": "688012",
      "name": "中微公司",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4643720522.0,
        "margin_buy": 394731482.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.88,
        "financing_pressure_score": 69.5,
        "incremental_financing_pressure_score": 86.88,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.04
      },
      "trap_score": 51.78
    },
    {
      "code": "688008",
      "name": "澜起科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 14416229810.0,
        "margin_buy": 946223058.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.92,
        "financing_pressure_score": 60.34,
        "incremental_financing_pressure_score": 75.42,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.36,
        "turnover_z_score": 0.23
      },
      "trap_score": 50.93,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": 1.97,
        "return_5d_pct": 6.84,
        "return_8d_pct": 2.48,
        "ma5_gap_pct": -0.95,
        "ma10_gap_pct": 0.27,
        "drawdown_8d_pct": -7.35,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "688169",
      "name": "石头科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 876376534.0,
        "margin_buy": 76465116.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.6,
        "financing_pressure_score": 70.18,
        "incremental_financing_pressure_score": 87.72,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.8
      },
      "trap_score": 53.24
    },
    {
      "code": "688072",
      "name": "拓荆科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1708557090.0,
        "margin_buy": 153897305.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.38,
        "financing_pressure_score": 71.02,
        "incremental_financing_pressure_score": 88.78,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.04
      },
      "trap_score": 51.67
    },
    {
      "code": "688099",
      "name": "晶晨股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1053750889.0,
        "margin_buy": 41778790.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.76,
        "financing_pressure_score": 43.72,
        "incremental_financing_pressure_score": 54.65,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.08,
        "turnover_z_score": 0.91
      },
      "trap_score": 43.19,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 7.57,
        "return_5d_pct": 8.93,
        "return_8d_pct": 4.4,
        "ma5_gap_pct": 5.79,
        "ma10_gap_pct": 5.15,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "688027",
      "name": "国盾量子",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1152549131.0,
        "margin_buy": 20096142.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.21,
        "financing_pressure_score": 24.41,
        "incremental_financing_pressure_score": 30.51,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.68
      },
      "trap_score": 30.42
    },
    {
      "code": "688608",
      "name": "恒玄科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1033850880.0,
        "margin_buy": 26224135.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.0,
        "financing_pressure_score": 32.29,
        "incremental_financing_pressure_score": 40.37,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.0
      },
      "trap_score": 35.23
    },
    {
      "code": "688018",
      "name": "乐鑫科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 655123154.0,
        "margin_buy": 65373532.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.65,
        "financing_pressure_score": 73.94,
        "incremental_financing_pressure_score": 92.42,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.2
      },
      "trap_score": 56.61
    },
    {
      "code": "688036",
      "name": "XD传音控",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 975019441.0,
        "margin_buy": 56733429.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.95,
        "financing_pressure_score": 56.37,
        "incremental_financing_pressure_score": 70.46,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.6
      },
      "trap_score": 44.39
    },
    {
      "code": "688047",
      "name": "龙芯中科",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1200219347.0,
        "margin_buy": 26124121.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.88,
        "financing_pressure_score": 29.41,
        "incremental_financing_pressure_score": 36.77,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.04
      },
      "trap_score": 32.14
    },
    {
      "code": "688126",
      "name": "沪硅产业",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2651296776.0,
        "margin_buy": 114157430.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.56,
        "financing_pressure_score": 46.45,
        "incremental_financing_pressure_score": 58.06,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.48
      },
      "trap_score": 40.9
    },
    {
      "code": "688037",
      "name": "芯源微",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 505765070.0,
        "margin_buy": 81990216.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.61,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.88
      },
      "trap_score": 57.68
    },
    {
      "code": "688213",
      "name": "思特威-W",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1213799021.0,
        "margin_buy": 34573537.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.47,
        "financing_pressure_score": 34.79,
        "incremental_financing_pressure_score": 43.48,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.76
      },
      "trap_score": 35.51
    },
    {
      "code": "688120",
      "name": "华海清科",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1371606978.0,
        "margin_buy": 94024334.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.71,
        "financing_pressure_score": 61.89,
        "incremental_financing_pressure_score": 77.37,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.68
      },
      "trap_score": 48.09
    },
    {
      "code": "688981",
      "name": "中芯国际",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11054858003.0,
        "margin_buy": 402425626.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.86,
        "financing_pressure_score": 41.12,
        "incremental_financing_pressure_score": 51.4,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.88
      },
      "trap_score": 38.98
    },
    {
      "code": "603296",
      "name": "华勤技术",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1311144975.0,
        "margin_buy": 172788698.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.02,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.16
      },
      "trap_score": 58.33
    },
    {
      "code": "300033",
      "name": "同花顺",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5474959083.0,
        "margin_buy": 374083458.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.09,
        "financing_pressure_score": 61.77,
        "incremental_financing_pressure_score": 77.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.72
      },
      "trap_score": 50.24
    },
    {
      "code": "300496",
      "name": "中科创达",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1825317917.0,
        "margin_buy": 88433847.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.64,
        "financing_pressure_score": 50.76,
        "incremental_financing_pressure_score": 63.45,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 37.12,
        "turnover_z_score": 1.13
      },
      "trap_score": 47.77,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 6.54,
        "return_5d_pct": 6.84,
        "return_8d_pct": 4.94,
        "ma5_gap_pct": 4.39,
        "ma10_gap_pct": 3.92,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300502",
      "name": "新易盛",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 20396480156.0,
        "margin_buy": 2434748641.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.49,
        "financing_pressure_score": 79.81,
        "incremental_financing_pressure_score": 99.76,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.92
      },
      "trap_score": 57.4
    },
    {
      "code": "300223",
      "name": "君正股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3268047980.0,
        "margin_buy": 321298564.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.15,
        "financing_pressure_score": 73.49,
        "incremental_financing_pressure_score": 91.87,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 49.2,
        "turnover_z_score": -0.82
      },
      "trap_score": 60.41,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 5.97,
        "return_5d_pct": 4.71,
        "return_8d_pct": 1.97,
        "ma5_gap_pct": 2.56,
        "ma10_gap_pct": 1.21,
        "drawdown_8d_pct": -0.38,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300383",
      "name": "光环新网",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1470922481.0,
        "margin_buy": 40745163.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.0,
        "financing_pressure_score": 34.16,
        "incremental_financing_pressure_score": 42.7,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.0
      },
      "trap_score": 36.07
    },
    {
      "code": "300458",
      "name": "全志科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1497972157.0,
        "margin_buy": 114918208.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 10.45,
        "financing_pressure_score": 66.25,
        "incremental_financing_pressure_score": 82.81,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 83.6
      },
      "trap_score": 64.03
    },
    {
      "code": "300474",
      "name": "景嘉微",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1264162534.0,
        "margin_buy": 16817448.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.24,
        "financing_pressure_score": 18.62,
        "incremental_financing_pressure_score": 23.28,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.92
      },
      "trap_score": 27.86
    },
    {
      "code": "300454",
      "name": "深信服",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1314983953.0,
        "margin_buy": 376709044.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.6,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 76.8
      },
      "trap_score": 68.86
    },
    {
      "code": "300212",
      "name": "*ST易录",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.2,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.6
      },
      "trap_score": 19.42
    },
    {
      "code": "300251",
      "name": "光线传媒",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1184320448.0,
        "margin_buy": 22113200.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.99,
        "financing_pressure_score": 26.14,
        "incremental_financing_pressure_score": 32.68,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.92,
        "turnover_z_score": 2.64
      },
      "trap_score": 35.65,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 6.97,
        "return_5d_pct": 8.46,
        "return_8d_pct": 7.56,
        "ma5_gap_pct": 5.53,
        "ma10_gap_pct": 6.08,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300229",
      "name": "拓尔思",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 923436535.0,
        "margin_buy": 46692753.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.62,
        "financing_pressure_score": 52.3,
        "incremental_financing_pressure_score": 65.38,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.96
      },
      "trap_score": 46.83
    },
    {
      "code": "300624",
      "name": "万兴科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 529352482.0,
        "margin_buy": 46344745.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 11.28,
        "financing_pressure_score": 70.26,
        "incremental_financing_pressure_score": 87.83,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 90.24
      },
      "trap_score": 67.17
    },
    {
      "code": "300442",
      "name": "润泽科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3462082531.0,
        "margin_buy": 164446137.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.66,
        "financing_pressure_score": 50.0,
        "incremental_financing_pressure_score": 62.5,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.28
      },
      "trap_score": 42.66
    },
    {
      "code": "300803",
      "name": "指南针",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3231045223.0,
        "margin_buy": 218521953.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.13,
        "financing_pressure_score": 61.4,
        "incremental_financing_pressure_score": 76.75,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.04
      },
      "trap_score": 50.14
    },
    {
      "code": "300364",
      "name": "中文在线",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 952005942.0,
        "margin_buy": 101789299.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 21.64,
        "financing_pressure_score": 76.08,
        "incremental_financing_pressure_score": 95.1,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 71.74
    },
    {
      "code": "300394",
      "name": "天孚通信",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7670886285.0,
        "margin_buy": 981108946.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.64,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.12
      },
      "trap_score": 57.72
    },
    {
      "code": "300570",
      "name": "太辰光",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1644086492.0,
        "margin_buy": 277795640.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.04,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 64.32
      },
      "trap_score": 66.36
    },
    {
      "code": "300782",
      "name": "卓胜微",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1668719874.0,
        "margin_buy": 63244214.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.68,
        "financing_pressure_score": 42.32,
        "incremental_financing_pressure_score": 52.9,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.44
      },
      "trap_score": 39.23
    },
    {
      "code": "300548",
      "name": "长芯博创",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2167031800.0,
        "margin_buy": 220902349.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.06,
        "financing_pressure_score": 74.58,
        "incremental_financing_pressure_score": 93.23,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.48
      },
      "trap_score": 57.56
    },
    {
      "code": "300604",
      "name": "长川科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3171934174.0,
        "margin_buy": 368859099.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.75,
        "financing_pressure_score": 78.89,
        "incremental_financing_pressure_score": 98.61,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.0
      },
      "trap_score": 57.4
    },
    {
      "code": "300118",
      "name": "东方日升",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 551441011.0,
        "margin_buy": 19174805.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.36,
        "financing_pressure_score": 39.82,
        "incremental_financing_pressure_score": 49.77,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.88
      },
      "trap_score": 39.19
    },
    {
      "code": "300373",
      "name": "扬杰科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1567090629.0,
        "margin_buy": 108246520.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.93,
        "financing_pressure_score": 62.17,
        "incremental_financing_pressure_score": 77.72,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.44
      },
      "trap_score": 50.16
    },
    {
      "code": "301236",
      "name": "软通动力",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2088880177.0,
        "margin_buy": 88842791.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.72,
        "financing_pressure_score": 46.03,
        "incremental_financing_pressure_score": 57.53,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.76
      },
      "trap_score": 40.97
    },
    {
      "code": "301269",
      "name": "华大九天",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 933131692.0,
        "margin_buy": 62354632.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.7,
        "financing_pressure_score": 60.97,
        "incremental_financing_pressure_score": 76.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.6
      },
      "trap_score": 47.66
    },
    {
      "code": "301312",
      "name": "智立方",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 262410535.0,
        "margin_buy": 58434344.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.35,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 66.8
      },
      "trap_score": 66.86
    },
    {
      "code": "301308",
      "name": "江波龙",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6902191975.0,
        "margin_buy": 400460776.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.17,
        "financing_pressure_score": 56.28,
        "incremental_financing_pressure_score": 70.35,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.36
      },
      "trap_score": 47.9
    },
    {
      "code": "301095",
      "name": "广立微",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 502128835.0,
        "margin_buy": 38663114.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.85,
        "financing_pressure_score": 66.4,
        "incremental_financing_pressure_score": 83.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 38.8,
        "turnover_z_score": 1.78
      },
      "trap_score": 55.14,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 9.41,
        "return_5d_pct": 8.26,
        "return_8d_pct": 7.82,
        "ma5_gap_pct": 5.73,
        "ma10_gap_pct": 5.75,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "301171",
      "name": "易点天下",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1219451297.0,
        "margin_buy": 318591092.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 21.06,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    },
    {
      "code": "301165",
      "name": "锐捷网络",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 916585271.0,
        "margin_buy": 258945830.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.28,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.24
      },
      "trap_score": 57.15
    },
    {
      "code": "300059",
      "name": "东方财富",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 23089755998.0,
        "margin_buy": 578632825.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.59,
        "financing_pressure_score": 32.05,
        "incremental_financing_pressure_score": 40.06,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.72
      },
      "trap_score": 34.47
    },
    {
      "code": "002371",
      "name": "北方华创",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2591157533.0,
        "margin_buy": 154063305.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.93,
        "financing_pressure_score": 57.04,
        "incremental_financing_pressure_score": 71.3,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.44
      },
      "trap_score": 44.66
    },
    {
      "code": "002475",
      "name": "立讯精密",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6153811156.0,
        "margin_buy": 503460949.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.29,
        "financing_pressure_score": 68.54,
        "incremental_financing_pressure_score": 85.68,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.32
      },
      "trap_score": 50.41
    },
    {
      "code": "002463",
      "name": "沪电股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4908629399.0,
        "margin_buy": 674550837.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.58,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.64
      },
      "trap_score": 57.63
    },
    {
      "code": "002555",
      "name": "三七互娱",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1718793882.0,
        "margin_buy": 41073318.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.92,
        "financing_pressure_score": 31.12,
        "incremental_financing_pressure_score": 38.9,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.36
      },
      "trap_score": 34.58
    },
    {
      "code": "002236",
      "name": "大华股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1497649854.0,
        "margin_buy": 43223194.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.19,
        "financing_pressure_score": 35.09,
        "incremental_financing_pressure_score": 43.86,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.52
      },
      "trap_score": 35.19
    },
    {
      "code": "002241",
      "name": "歌尔股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3886158024.0,
        "margin_buy": 182300144.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.25,
        "financing_pressure_score": 49.53,
        "incremental_financing_pressure_score": 61.91,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.0
      },
      "trap_score": 44.99
    },
    {
      "code": "600050",
      "name": "中国联通",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2651072611.0,
        "margin_buy": 28899350.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.34,
        "financing_pressure_score": 15.26,
        "incremental_financing_pressure_score": 19.08,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 2.72
      },
      "trap_score": 24.91
    },
    {
      "code": "002859",
      "name": "洁美科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 786394693.0,
        "margin_buy": 100375845.0,
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
      "code": "002920",
      "name": "德赛西威",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1462111981.0,
        "margin_buy": 105695235.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.88,
        "financing_pressure_score": 63.89,
        "incremental_financing_pressure_score": 79.86,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.04
      },
      "trap_score": 47.66
    },
    {
      "code": "002456",
      "name": "欧菲光",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1546178185.0,
        "margin_buy": 48849286.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.1,
        "financing_pressure_score": 37.27,
        "incremental_financing_pressure_score": 46.59,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.8
      },
      "trap_score": 39.23
    },
    {
      "code": "002156",
      "name": "通富微电",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4353238090.0,
        "margin_buy": 525721439.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.21,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 41.68
      },
      "trap_score": 61.84
    },
    {
      "code": "002261",
      "name": "拓维信息",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1453420889.0,
        "margin_buy": 50152448.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.22,
        "financing_pressure_score": 39.61,
        "incremental_financing_pressure_score": 49.51,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.76
      },
      "trap_score": 38.88
    },
    {
      "code": "002273",
      "name": "水晶光电",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2702313615.0,
        "margin_buy": 80764145.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.13,
        "financing_pressure_score": 35.91,
        "incremental_financing_pressure_score": 44.89,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.04
      },
      "trap_score": 37.07
    },
    {
      "code": "002281",
      "name": "光迅科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3628626122.0,
        "margin_buy": 299000728.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.56,
        "financing_pressure_score": 68.72,
        "incremental_financing_pressure_score": 85.9,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.48
      },
      "trap_score": 54.12
    },
    {
      "code": "002415",
      "name": "海康威视",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5157222397.0,
        "margin_buy": 132759291.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.63,
        "financing_pressure_score": 32.59,
        "incremental_financing_pressure_score": 40.74,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 5.04
      },
      "trap_score": 33.17
    },
    {
      "code": "002916",
      "name": "深南电路",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1531385891.0,
        "margin_buy": 184732919.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.23,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.84
      },
      "trap_score": 55.47
    },
    {
      "code": "002517",
      "name": "恺英网络",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1702959166.0,
        "margin_buy": 78054434.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.17,
        "financing_pressure_score": 48.67,
        "incremental_financing_pressure_score": 60.83,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.36,
        "turnover_z_score": 0.22
      },
      "trap_score": 46.07,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 4.19,
        "return_5d_pct": 3.75,
        "return_8d_pct": 2.45,
        "ma5_gap_pct": 2.89,
        "ma10_gap_pct": 2.65,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002049",
      "name": "紫光国微",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4245177413.0,
        "margin_buy": 83400326.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.71,
        "financing_pressure_score": 27.5,
        "incremental_financing_pressure_score": 34.38,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.68
      },
      "trap_score": 32.61
    },
    {
      "code": "002138",
      "name": "顺络电子",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1419242362.0,
        "margin_buy": 240937191.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.1,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.8
      },
      "trap_score": 60.06
    },
    {
      "code": "002185",
      "name": "华天科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2339179735.0,
        "margin_buy": 220663265.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.42,
        "financing_pressure_score": 72.3,
        "incremental_financing_pressure_score": 90.38,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 35.36
      },
      "trap_score": 57.11
    },
    {
      "code": "000063",
      "name": "中兴通讯",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 9689674561.0,
        "margin_buy": 184293789.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.96,
        "financing_pressure_score": 26.63,
        "incremental_financing_pressure_score": 33.28,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.68
      },
      "trap_score": 32.62
    },
    {
      "code": "000977",
      "name": "浪潮信息",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3995823606.0,
        "margin_buy": 360052241.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.95,
        "financing_pressure_score": 71.03,
        "incremental_financing_pressure_score": 88.79,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 63.6
      },
      "trap_score": 62.18
    },
    {
      "code": "000938",
      "name": "紫光股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4398385117.0,
        "margin_buy": 605406900.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.34,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 74.72
      },
      "trap_score": 68.44
    },
    {
      "code": "000988",
      "name": "华工科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7629852656.0,
        "margin_buy": 485881044.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.49,
        "financing_pressure_score": 59.3,
        "incremental_financing_pressure_score": 74.12,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.92
      },
      "trap_score": 49.77
    },
    {
      "code": "000034",
      "name": "神州数码",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1729701147.0,
        "margin_buy": 78118005.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.06,
        "financing_pressure_score": 48.13,
        "incremental_financing_pressure_score": 60.16,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.48
      },
      "trap_score": 44.05
    },
    {
      "code": "000066",
      "name": "中国长城",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1849691260.0,
        "margin_buy": 63946210.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.48,
        "financing_pressure_score": 39.66,
        "incremental_financing_pressure_score": 49.57,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.84
      },
      "trap_score": 39.31
    },
    {
      "code": "000725",
      "name": "京东方Ａ",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11730552905.0,
        "margin_buy": 836117225.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.9,
        "financing_pressure_score": 63.35,
        "incremental_financing_pressure_score": 79.18,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.2
      },
      "trap_score": 52.25
    },
    {
      "code": "000100",
      "name": "TCL科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4440974941.0,
        "margin_buy": 232892118.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.62,
        "financing_pressure_score": 53.3,
        "incremental_financing_pressure_score": 66.63,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.96
      },
      "trap_score": 45.68
    },
    {
      "code": "600584",
      "name": "长电科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6559836943.0,
        "margin_buy": 727723595.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.13,
        "financing_pressure_score": 77.28,
        "incremental_financing_pressure_score": 96.6,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.04
      },
      "trap_score": 58.88
    },
    {
      "code": "600570",
      "name": "恒生电子",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2564350723.0,
        "margin_buy": 57224747.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.05,
        "financing_pressure_score": 29.85,
        "incremental_financing_pressure_score": 37.32,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.4
      },
      "trap_score": 32.61
    },
    {
      "code": "600845",
      "name": "宝信软件",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 629211923.0,
        "margin_buy": 32082124.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.62,
        "financing_pressure_score": 52.53,
        "incremental_financing_pressure_score": 65.66,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 4.96
      },
      "trap_score": 42.13
    },
    {
      "code": "600536",
      "name": "中国软件",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1532166340.0,
        "margin_buy": 121102311.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.1,
        "financing_pressure_score": 67.49,
        "incremental_financing_pressure_score": 84.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.8
      },
      "trap_score": 54.43
    },
    {
      "code": "600588",
      "name": "用友网络",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1457039423.0,
        "margin_buy": 104316400.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.53,
        "financing_pressure_score": 63.52,
        "incremental_financing_pressure_score": 79.4,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.24
      },
      "trap_score": 50.13
    },
    {
      "code": "600602",
      "name": "云赛智联",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 780954082.0,
        "margin_buy": 65962975.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.8,
        "financing_pressure_score": 69.34,
        "incremental_financing_pressure_score": 86.67,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.4
      },
      "trap_score": 53.18
    },
    {
      "code": "600171",
      "name": "上海贝岭",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 855901960.0,
        "margin_buy": 14901695.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.44,
        "financing_pressure_score": 24.37,
        "incremental_financing_pressure_score": 30.47,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.52
      },
      "trap_score": 30.77
    },
    {
      "code": "600498",
      "name": "烽火通信",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2178782145.0,
        "margin_buy": 280609667.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.0,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 64.0
      },
      "trap_score": 66.3
    },
    {
      "code": "600183",
      "name": "生益科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4450733466.0,
        "margin_buy": 1755246161.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.31,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 34.48
      },
      "trap_score": 60.4
    },
    {
      "code": "600460",
      "name": "士兰微",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2510979457.0,
        "margin_buy": 427284381.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.33,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 50.64,
        "turnover_z_score": -0.31
      },
      "trap_score": 63.63,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": 3.3,
        "return_5d_pct": -3.94,
        "return_8d_pct": -0.96,
        "ma5_gap_pct": 0.12,
        "ma10_gap_pct": -0.71,
        "drawdown_8d_pct": -4.82,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "600703",
      "name": "三安光电",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4175857516.0,
        "margin_buy": 93534823.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.71,
        "financing_pressure_score": 29.92,
        "incremental_financing_pressure_score": 37.4,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.68
      },
      "trap_score": 33.7
    },
    {
      "code": "601138",
      "name": "工业富联",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7981399567.0,
        "margin_buy": 1160584703.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.55,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 4.4
      },
      "trap_score": 54.38
    },
    {
      "code": "601360",
      "name": "三六零",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1917310792.0,
        "margin_buy": 151660596.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.67,
        "financing_pressure_score": 67.52,
        "incremental_financing_pressure_score": 84.4,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.36
      },
      "trap_score": 53.76
    },
    {
      "code": "603000",
      "name": "人民网",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 449197558.0,
        "margin_buy": 13939588.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.67,
        "financing_pressure_score": 36.83,
        "incremental_financing_pressure_score": 46.03,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.36
      },
      "trap_score": 38.35
    },
    {
      "code": "300054",
      "name": "鼎龙股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2089921554.0,
        "margin_buy": 221469029.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.81,
        "financing_pressure_score": 75.79,
        "incremental_financing_pressure_score": 94.74,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.48
      },
      "trap_score": 57.7
    },
    {
      "code": "002192",
      "name": "融捷股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1341555474.0,
        "margin_buy": 218689379.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.31,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 58.48
      },
      "trap_score": 65.2
    },
    {
      "code": "002466",
      "name": "天齐锂业",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3275172711.0,
        "margin_buy": 437194415.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.94,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.52
      },
      "trap_score": 59.8
    },
    {
      "code": "002837",
      "name": "英维克",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3794015162.0,
        "margin_buy": 349031619.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.09,
        "financing_pressure_score": 71.6,
        "incremental_financing_pressure_score": 89.5,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 64.72
      },
      "trap_score": 62.66
    },
    {
      "code": "601869",
      "name": "长飞光纤",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2698516071.0,
        "margin_buy": 841426405.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.33,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.64
      },
      "trap_score": 58.83
    },
    {
      "code": "002938",
      "name": "鹏鼎控股",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1370051000.0,
        "margin_buy": 184222620.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.23,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.84
      },
      "trap_score": 55.47
    },
    {
      "code": "000878",
      "name": "云南铜业",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1917470690.0,
        "margin_buy": 175395408.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.36,
        "financing_pressure_score": 71.44,
        "incremental_financing_pressure_score": 89.3,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.88
      },
      "trap_score": 55.02
    },
    {
      "code": "002155",
      "name": "湖南黄金",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2166639639.0,
        "margin_buy": 499054930.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.87,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 62.96
      },
      "trap_score": 66.09
    },
    {
      "code": "600378",
      "name": "昊华科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1272566944.0,
        "margin_buy": 598781408.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 13.95,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    },
    {
      "code": "300418",
      "name": "昆仑万维",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3316992737.0,
        "margin_buy": 294001020.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.5,
        "financing_pressure_score": 70.59,
        "incremental_financing_pressure_score": 88.24,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 76.0
      },
      "trap_score": 64.47
    },
    {
      "code": "002218",
      "name": "拓日新能",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 99147098.0,
        "margin_buy": 8038647.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.8,
        "financing_pressure_score": 68.32,
        "incremental_financing_pressure_score": 85.4,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.4
      },
      "trap_score": 51.12
    },
    {
      "code": "300617",
      "name": "安靠智电",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.95,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.6
      },
      "trap_score": 22.22
    },
    {
      "code": "300738",
      "name": "奥飞数据",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1479600985.0,
        "margin_buy": 101343619.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.46,
        "financing_pressure_score": 61.86,
        "incremental_financing_pressure_score": 77.33,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 35.68,
        "turnover_z_score": -0.68
      },
      "trap_score": 52.47,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": -1.55,
        "return_5d_pct": -3.96,
        "return_8d_pct": -4.41,
        "ma5_gap_pct": -1.43,
        "ma10_gap_pct": -3.28,
        "drawdown_8d_pct": -3.96,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002126",
      "name": "银轮股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 516381306.0,
        "margin_buy": 39771862.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.77,
        "financing_pressure_score": 66.41,
        "incremental_financing_pressure_score": 83.01,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.16
      },
      "trap_score": 50.22
    },
    {
      "code": "002050",
      "name": "三花智控",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5264647036.0,
        "margin_buy": 105720606.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.81,
        "financing_pressure_score": 28.06,
        "incremental_financing_pressure_score": 35.08,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.48
      },
      "trap_score": 31.42
    },
    {
      "code": "603075",
      "name": "热威股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 39537587.0,
        "margin_buy": 1517073.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.67,
        "financing_pressure_score": 42.7,
        "incremental_financing_pressure_score": 53.37,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.36,
        "turnover_z_score": -0.96
      },
      "trap_score": 42.59,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 0.0,
        "return_5d_pct": 1.73,
        "return_8d_pct": 4.14,
        "ma5_gap_pct": 0.04,
        "ma10_gap_pct": 0.79,
        "drawdown_8d_pct": -0.46,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "603667",
      "name": "五洲新春",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1089115495.0,
        "margin_buy": 41105105.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.57,
        "financing_pressure_score": 42.19,
        "incremental_financing_pressure_score": 52.74,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.56
      },
      "trap_score": 42.2
    },
    {
      "code": "605020",
      "name": "永和股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 465236742.0,
        "margin_buy": 92608353.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.96,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.68
      },
      "trap_score": 58.24
    },
    {
      "code": "600160",
      "name": "巨化股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4295202229.0,
        "margin_buy": 313697854.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.29,
        "financing_pressure_score": 64.29,
        "incremental_financing_pressure_score": 80.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.32
      },
      "trap_score": 48.49
    },
    {
      "code": "603379",
      "name": "三美股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 849293447.0,
        "margin_buy": 59513542.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.88,
        "financing_pressure_score": 62.71,
        "incremental_financing_pressure_score": 78.38,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.04
      },
      "trap_score": 48.73
    },
    {
      "code": "600988",
      "name": "赤峰黄金",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1264202353.0,
        "margin_buy": 198117719.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.19,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 41.52
      },
      "trap_score": 61.8
    },
    {
      "code": "000636",
      "name": "风华高科",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3337536664.0,
        "margin_buy": 917463012.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 11.15,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 89.2
      },
      "trap_score": 71.34
    },
    {
      "code": "688825",
      "name": "长鑫科技",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11657355634.0,
        "margin_buy": 1594802273.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.94,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 63.52
      },
      "trap_score": 66.2
    },
    {
      "code": "600105",
      "name": "永鼎股份",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2013332230.0,
        "margin_buy": 369841141.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.09,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 48.72,
        "turnover_z_score": -1.5
      },
      "trap_score": 63.24,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 2.91,
        "return_5d_pct": 5.86,
        "return_8d_pct": 6.17,
        "ma5_gap_pct": 1.36,
        "ma10_gap_pct": 1.87,
        "drawdown_8d_pct": -1.76,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300285",
      "name": "国瓷材料",
      "margin_date": "20260828",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4353121861.0,
        "margin_buy": 856898017.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.94,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 71.52
      },
      "trap_score": 67.8
    }
  ]
};
