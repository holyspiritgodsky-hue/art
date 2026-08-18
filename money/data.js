window.__QUANT_DATA__ = {
  "generated_at": "2026-08-18T17:48:38+08:00",
  "data_freshness": {
    "warning_target_date": "2026-08-19",
    "spot_snapshot_at": "2026-08-18T17:48:38+08:00",
    "margin_data_as_of": "20260817",
    "margin_data_dates_by_market": {
      "szse": "20260817",
      "sse": "20260817"
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
    "total_rows": 5545,
    "turnover_rate_available_rows": 5545,
    "turnover_rate_missing_rows": 0,
    "turnover_rate_missing_ratio": 0.0,
    "float_market_cap_available_rows": 0,
    "float_market_cap_missing_rows": 5545,
    "float_market_cap_missing_ratio": 1.0
  },
  "daily_warning": {
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
      "status": "待复盘",
      "note": ""
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
  "warning_history": [
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
        "status": "待复盘",
        "note": ""
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
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 82,
        "margin_balance": 17168814340.0,
        "margin_buy": 1810797671.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.64,
        "financing_pressure_score": 75.64,
        "incremental_financing_pressure_score": 94.55,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.12
      },
      "trap_score": 68.56
    },
    {
      "code": "002384",
      "name": "东山精密",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 68,
        "margin_balance": 10988043927.0,
        "margin_buy": 1550384272.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.96,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.68
      },
      "trap_score": 66.14
    },
    {
      "code": "300308",
      "name": "中际旭创",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 88,
        "margin_balance": 31295324497.0,
        "margin_buy": 5846795799.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.99,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.92
      },
      "trap_score": 69.98
    },
    {
      "code": "002230",
      "name": "科大讯飞",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5431287090.0,
        "margin_buy": 113561516.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.29,
        "financing_pressure_score": 28.73,
        "incremental_financing_pressure_score": 35.91,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.32
      },
      "trap_score": 34.09
    },
    {
      "code": "688256",
      "name": "寒武纪",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 19071351180.0,
        "margin_buy": 1824525262.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.73,
        "financing_pressure_score": 72.7,
        "incremental_financing_pressure_score": 90.88,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.84
      },
      "trap_score": 52.98
    },
    {
      "code": "603019",
      "name": "中科曙光",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8927667764.0,
        "margin_buy": 549976569.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.83,
        "financing_pressure_score": 58.19,
        "incremental_financing_pressure_score": 72.74,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.64
      },
      "trap_score": 48.21
    },
    {
      "code": "603160",
      "name": "汇顶科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 976755166.0,
        "margin_buy": 16642352.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.01,
        "financing_pressure_score": 23.85,
        "incremental_financing_pressure_score": 29.82,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.08
      },
      "trap_score": 29.85
    },
    {
      "code": "603986",
      "name": "兆易创新",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 19501715588.0,
        "margin_buy": 4234367071.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.09,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 72.72
      },
      "trap_score": 68.04
    },
    {
      "code": "603501",
      "name": "豪威集团",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4587398380.0,
        "margin_buy": 145652074.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.51,
        "financing_pressure_score": 37.4,
        "incremental_financing_pressure_score": 46.75,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.08
      },
      "trap_score": 36.75
    },
    {
      "code": "603893",
      "name": "瑞芯微",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2037241856.0,
        "margin_buy": 396600786.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.01,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 40.08
      },
      "trap_score": 61.52
    },
    {
      "code": "688111",
      "name": "金山办公",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4883733483.0,
        "margin_buy": 284675218.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.25,
        "financing_pressure_score": 56.42,
        "incremental_financing_pressure_score": 70.53,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.0
      },
      "trap_score": 46.49
    },
    {
      "code": "688041",
      "name": "海光信息",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8872923365.0,
        "margin_buy": 927769555.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.16,
        "financing_pressure_score": 75.37,
        "incremental_financing_pressure_score": 94.21,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.28
      },
      "trap_score": 53.27
    },
    {
      "code": "688012",
      "name": "中微公司",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4884542956.0,
        "margin_buy": 759556000.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.29,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.32
      },
      "trap_score": 57.16
    },
    {
      "code": "688008",
      "name": "澜起科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 14987789528.0,
        "margin_buy": 1498810256.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.88,
        "financing_pressure_score": 74.0,
        "incremental_financing_pressure_score": 92.5,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.04
      },
      "trap_score": 57.01
    },
    {
      "code": "688169",
      "name": "石头科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1006200870.0,
        "margin_buy": 65272365.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.56,
        "financing_pressure_score": 59.93,
        "incremental_financing_pressure_score": 74.91,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 36.48,
        "turnover_z_score": 2.23
      },
      "trap_score": 51.76,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 14.23,
        "return_5d_pct": 8.37,
        "return_8d_pct": 14.37,
        "ma5_gap_pct": 8.73,
        "ma10_gap_pct": 10.01,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "688072",
      "name": "拓荆科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1999888560.0,
        "margin_buy": 408628383.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.48,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.84
      },
      "trap_score": 57.47
    },
    {
      "code": "688099",
      "name": "晶晨股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1104365176.0,
        "margin_buy": 133544832.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.84,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.72
      },
      "trap_score": 58.04
    },
    {
      "code": "688027",
      "name": "国盾量子",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1257009161.0,
        "margin_buy": 74780011.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.82,
        "financing_pressure_score": 57.06,
        "incremental_financing_pressure_score": 71.33,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.56
      },
      "trap_score": 46.09
    },
    {
      "code": "688608",
      "name": "恒玄科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1104548070.0,
        "margin_buy": 63362492.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.75,
        "financing_pressure_score": 55.93,
        "incremental_financing_pressure_score": 69.91,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.0
      },
      "trap_score": 45.47
    },
    {
      "code": "688018",
      "name": "乐鑫科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 697440069.0,
        "margin_buy": 75386970.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.0,
        "financing_pressure_score": 76.43,
        "incremental_financing_pressure_score": 95.53,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.0
      },
      "trap_score": 55.09
    },
    {
      "code": "688036",
      "name": "传音控股",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1077064522.0,
        "margin_buy": 82824329.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.5,
        "financing_pressure_score": 66.35,
        "incremental_financing_pressure_score": 82.93,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.0
      },
      "trap_score": 49.76
    },
    {
      "code": "688047",
      "name": "龙芯中科",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1211702397.0,
        "margin_buy": 42465542.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.15,
        "financing_pressure_score": 40.04,
        "incremental_financing_pressure_score": 50.05,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.2
      },
      "trap_score": 37.36
    },
    {
      "code": "688126",
      "name": "沪硅产业",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2733717548.0,
        "margin_buy": 249482347.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.56,
        "financing_pressure_score": 71.38,
        "incremental_financing_pressure_score": 89.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 44.48,
        "turnover_z_score": 2.32
      },
      "trap_score": 58.52,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 9.71,
        "return_5d_pct": 8.64,
        "return_8d_pct": 7.38,
        "ma5_gap_pct": 5.2,
        "ma10_gap_pct": 6.25,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "688037",
      "name": "芯源微",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 597801712.0,
        "margin_buy": 110111952.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.01,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.08
      },
      "trap_score": 58.32
    },
    {
      "code": "688213",
      "name": "思特威-W",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1247470124.0,
        "margin_buy": 43952376.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.16,
        "financing_pressure_score": 40.19,
        "incremental_financing_pressure_score": 50.23,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.28
      },
      "trap_score": 39.04
    },
    {
      "code": "688120",
      "name": "华海清科",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1656615526.0,
        "margin_buy": 359643568.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.37,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.96
      },
      "trap_score": 57.29
    },
    {
      "code": "688981",
      "name": "中芯国际",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11749891445.0,
        "margin_buy": 1283414087.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.87,
        "financing_pressure_score": 76.77,
        "incremental_financing_pressure_score": 95.96,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.96
      },
      "trap_score": 56.64
    },
    {
      "code": "603296",
      "name": "华勤技术",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1197952055.0,
        "margin_buy": 242605945.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.05,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.4
      },
      "trap_score": 58.38
    },
    {
      "code": "300033",
      "name": "同花顺",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5350345549.0,
        "margin_buy": 379121333.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.73,
        "financing_pressure_score": 63.12,
        "incremental_financing_pressure_score": 78.91,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.84
      },
      "trap_score": 50.27
    },
    {
      "code": "300496",
      "name": "中科创达",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1778559341.0,
        "margin_buy": 82960236.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.22,
        "financing_pressure_score": 49.32,
        "incremental_financing_pressure_score": 61.64,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.76,
        "turnover_z_score": 0.21
      },
      "trap_score": 46.45,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 1.61,
        "return_5d_pct": -0.86,
        "return_8d_pct": -3.36,
        "ma5_gap_pct": 0.77,
        "ma10_gap_pct": -0.86,
        "drawdown_8d_pct": -2.77,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300502",
      "name": "新易盛",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 20062413850.0,
        "margin_buy": 3999466093.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.1,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.8
      },
      "trap_score": 58.46
    },
    {
      "code": "300223",
      "name": "君正股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3354848328.0,
        "margin_buy": 739269709.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 10.21,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 81.68
      },
      "trap_score": 69.84
    },
    {
      "code": "300383",
      "name": "光环新网",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1487436534.0,
        "margin_buy": 73209464.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.67,
        "financing_pressure_score": 51.37,
        "incremental_financing_pressure_score": 64.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.36
      },
      "trap_score": 46.49
    },
    {
      "code": "300458",
      "name": "全志科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1497824536.0,
        "margin_buy": 231335663.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.63,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 69.04
      },
      "trap_score": 67.31
    },
    {
      "code": "300474",
      "name": "景嘉微",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1292666020.0,
        "margin_buy": 33861078.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.92,
        "financing_pressure_score": 32.96,
        "incremental_financing_pressure_score": 41.19,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.36
      },
      "trap_score": 35.4
    },
    {
      "code": "300454",
      "name": "深信服",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1345487418.0,
        "margin_buy": 188998452.0,
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
      "code": "300212",
      "name": "*ST易录",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.86,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.88
      },
      "trap_score": 22.08
    },
    {
      "code": "300251",
      "name": "光线传媒",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1241709948.0,
        "margin_buy": 29132461.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.15,
        "financing_pressure_score": 30.77,
        "incremental_financing_pressure_score": 38.46,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.2
      },
      "trap_score": 33.19
    },
    {
      "code": "300229",
      "name": "拓尔思",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 943800458.0,
        "margin_buy": 30703793.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.05,
        "financing_pressure_score": 38.03,
        "incremental_financing_pressure_score": 47.53,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.4
      },
      "trap_score": 39.49
    },
    {
      "code": "300624",
      "name": "万兴科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 549489923.0,
        "margin_buy": 29196542.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.02,
        "financing_pressure_score": 53.67,
        "incremental_financing_pressure_score": 67.09,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.16
      },
      "trap_score": 48.08
    },
    {
      "code": "300442",
      "name": "润泽科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3504489270.0,
        "margin_buy": 422629815.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.49,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.92
      },
      "trap_score": 57.48
    },
    {
      "code": "300803",
      "name": "指南针",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3272517086.0,
        "margin_buy": 107592860.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.33,
        "financing_pressure_score": 38.3,
        "incremental_financing_pressure_score": 47.88,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.64
      },
      "trap_score": 38.46
    },
    {
      "code": "300364",
      "name": "中文在线",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 982413421.0,
        "margin_buy": 103729708.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.84,
        "financing_pressure_score": 75.68,
        "incremental_financing_pressure_score": 94.59,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 46.72,
        "turnover_z_score": -1.05
      },
      "trap_score": 60.9,
      "trend": {
        "available": true,
        "down_streak": 1,
        "return_3d_pct": -2.57,
        "return_5d_pct": -3.97,
        "return_8d_pct": -3.97,
        "ma5_gap_pct": -2.53,
        "ma10_gap_pct": -4.57,
        "drawdown_8d_pct": -10.16,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300394",
      "name": "天孚通信",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7408336340.0,
        "margin_buy": 1935187036.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.03,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 40.24
      },
      "trap_score": 61.55
    },
    {
      "code": "300570",
      "name": "太辰光",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1599692240.0,
        "margin_buy": 471398097.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 14.85,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    },
    {
      "code": "300782",
      "name": "卓胜微",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1742776512.0,
        "margin_buy": 84324722.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.23,
        "financing_pressure_score": 50.71,
        "incremental_financing_pressure_score": 63.39,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.84
      },
      "trap_score": 43.89
    },
    {
      "code": "300548",
      "name": "长芯博创",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2443548411.0,
        "margin_buy": 698085137.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.24,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 41.92
      },
      "trap_score": 61.88
    },
    {
      "code": "300604",
      "name": "长川科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3663460195.0,
        "margin_buy": 701617234.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.72,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.76
      },
      "trap_score": 59.45
    },
    {
      "code": "300118",
      "name": "东方日升",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 574737697.0,
        "margin_buy": 26858122.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.18,
        "financing_pressure_score": 49.38,
        "incremental_financing_pressure_score": 61.73,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.44
      },
      "trap_score": 44.81
    },
    {
      "code": "300373",
      "name": "扬杰科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1378269332.0,
        "margin_buy": 123392453.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.57,
        "financing_pressure_score": 70.86,
        "incremental_financing_pressure_score": 88.57,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.56
      },
      "trap_score": 55.1
    },
    {
      "code": "301236",
      "name": "软通动力",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2038868216.0,
        "margin_buy": 85018997.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.32,
        "financing_pressure_score": 45.36,
        "incremental_financing_pressure_score": 56.7,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 50.56,
        "turnover_z_score": 1.44
      },
      "trap_score": 48.02,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 1.35,
        "return_5d_pct": -2.23,
        "return_8d_pct": -5.41,
        "ma5_gap_pct": 1.06,
        "ma10_gap_pct": -1.69,
        "drawdown_8d_pct": -4.34,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "301269",
      "name": "华大九天",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 930901537.0,
        "margin_buy": 55845824.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.77,
        "financing_pressure_score": 57.33,
        "incremental_financing_pressure_score": 71.66,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.16
      },
      "trap_score": 46.13
    },
    {
      "code": "301312",
      "name": "智立方",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 231202338.0,
        "margin_buy": 41306382.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.48,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 75.84
      },
      "trap_score": 68.67
    },
    {
      "code": "301308",
      "name": "江波龙",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7418064597.0,
        "margin_buy": 1426732176.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.35,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 50.8,
        "turnover_z_score": -0.75
      },
      "trap_score": 63.66,
      "trend": {
        "available": true,
        "down_streak": 1,
        "return_3d_pct": 3.82,
        "return_5d_pct": -1.27,
        "return_8d_pct": 12.52,
        "ma5_gap_pct": 0.57,
        "ma10_gap_pct": 3.12,
        "drawdown_8d_pct": -1.69,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "301095",
      "name": "广立微",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 537477497.0,
        "margin_buy": 43016720.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.77,
        "financing_pressure_score": 68.01,
        "incremental_financing_pressure_score": 85.01,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.16
      },
      "trap_score": 54.14
    },
    {
      "code": "301171",
      "name": "易点天下",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1306495994.0,
        "margin_buy": 295589375.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 11.32,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 90.56
      },
      "trap_score": 71.61
    },
    {
      "code": "301165",
      "name": "锐捷网络",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1087556987.0,
        "margin_buy": 523313824.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.65,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.2
      },
      "trap_score": 57.74
    },
    {
      "code": "300059",
      "name": "东方财富",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 23237552473.0,
        "margin_buy": 448316240.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.59,
        "financing_pressure_score": 27.01,
        "incremental_financing_pressure_score": 33.76,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.72
      },
      "trap_score": 32.2
    },
    {
      "code": "002371",
      "name": "北方华创",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3136319000.0,
        "margin_buy": 393120268.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.13,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.04
      },
      "trap_score": 55.31
    },
    {
      "code": "002475",
      "name": "立讯精密",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6232230665.0,
        "margin_buy": 621940239.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.28,
        "financing_pressure_score": 73.94,
        "incremental_financing_pressure_score": 92.42,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.24
      },
      "trap_score": 52.82
    },
    {
      "code": "002463",
      "name": "沪电股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4732153637.0,
        "margin_buy": 521794430.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.9,
        "financing_pressure_score": 77.08,
        "incremental_financing_pressure_score": 96.35,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.2
      },
      "trap_score": 55.23
    },
    {
      "code": "002555",
      "name": "三七互娱",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1716839629.0,
        "margin_buy": 84097367.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.98,
        "financing_pressure_score": 51.19,
        "incremental_financing_pressure_score": 63.98,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.84
      },
      "trap_score": 43.7
    },
    {
      "code": "002236",
      "name": "大华股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1482646813.0,
        "margin_buy": 101123332.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.09,
        "financing_pressure_score": 61.71,
        "incremental_financing_pressure_score": 77.14,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.72
      },
      "trap_score": 48.61
    },
    {
      "code": "002241",
      "name": "歌尔股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4095022385.0,
        "margin_buy": 108621564.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.26,
        "financing_pressure_score": 33.22,
        "incremental_financing_pressure_score": 41.53,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.08
      },
      "trap_score": 36.06
    },
    {
      "code": "600050",
      "name": "中国联通",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2819103422.0,
        "margin_buy": 54863742.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.33,
        "financing_pressure_score": 27.25,
        "incremental_financing_pressure_score": 34.06,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 2.64
      },
      "trap_score": 30.29
    },
    {
      "code": "002859",
      "name": "洁美科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 861685524.0,
        "margin_buy": 140422901.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.76,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 46.08
      },
      "trap_score": 62.72
    },
    {
      "code": "002920",
      "name": "德赛西威",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1459219679.0,
        "margin_buy": 92539789.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.23,
        "financing_pressure_score": 59.16,
        "incremental_financing_pressure_score": 73.94,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.84
      },
      "trap_score": 46.09
    },
    {
      "code": "002456",
      "name": "欧菲光",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1581567311.0,
        "margin_buy": 36140436.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.5,
        "financing_pressure_score": 30.28,
        "incremental_financing_pressure_score": 37.85,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.0
      },
      "trap_score": 35.13
    },
    {
      "code": "002156",
      "name": "通富微电",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4213254119.0,
        "margin_buy": 810684962.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 12.11,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 96.88
      },
      "trap_score": 72.88
    },
    {
      "code": "002261",
      "name": "拓维信息",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1434467847.0,
        "margin_buy": 80808275.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.85,
        "financing_pressure_score": 55.38,
        "incremental_financing_pressure_score": 69.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 78.8
      },
      "trap_score": 58.18
    },
    {
      "code": "002273",
      "name": "水晶光电",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2724642410.0,
        "margin_buy": 134676973.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.72,
        "financing_pressure_score": 51.54,
        "incremental_financing_pressure_score": 64.43,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.76
      },
      "trap_score": 46.64
    },
    {
      "code": "002281",
      "name": "光迅科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4377678587.0,
        "margin_buy": 754931931.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.48,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 35.84
      },
      "trap_score": 60.67
    },
    {
      "code": "002415",
      "name": "海康威视",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5262523498.0,
        "margin_buy": 196193303.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.63,
        "financing_pressure_score": 41.82,
        "incremental_financing_pressure_score": 52.28,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 5.04
      },
      "trap_score": 37.33
    },
    {
      "code": "002916",
      "name": "深南电路",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1832896080.0,
        "margin_buy": 375628071.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.22,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.76
      },
      "trap_score": 55.45
    },
    {
      "code": "002517",
      "name": "恺英网络",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1462683949.0,
        "margin_buy": 184624922.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.47,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.76
      },
      "trap_score": 59.05
    },
    {
      "code": "002049",
      "name": "紫光国微",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4416241344.0,
        "margin_buy": 276920156.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.45,
        "financing_pressure_score": 58.78,
        "incremental_financing_pressure_score": 73.47,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.6
      },
      "trap_score": 49.47
    },
    {
      "code": "002138",
      "name": "顺络电子",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1520474904.0,
        "margin_buy": 200621209.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.6,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 36.8
      },
      "trap_score": 60.86
    },
    {
      "code": "002185",
      "name": "华天科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2550281724.0,
        "margin_buy": 515686915.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.58,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 76.64
      },
      "trap_score": 68.83
    },
    {
      "code": "000063",
      "name": "中兴通讯",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 9783131955.0,
        "margin_buy": 615040109.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.26,
        "financing_pressure_score": 58.86,
        "incremental_financing_pressure_score": 73.58,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.08
      },
      "trap_score": 49.2
    },
    {
      "code": "000977",
      "name": "浪潮信息",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4150200796.0,
        "margin_buy": 591254511.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.1,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 48.8,
        "turnover_z_score": -0.25
      },
      "trap_score": 63.26,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 1.9,
        "return_5d_pct": 7.8,
        "return_8d_pct": 5.44,
        "ma5_gap_pct": 2.51,
        "ma10_gap_pct": 3.98,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "000938",
      "name": "紫光股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4979204400.0,
        "margin_buy": 1324875958.0,
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
      "code": "000988",
      "name": "华工科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8169852151.0,
        "margin_buy": 1048043499.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.01,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 40.08
      },
      "trap_score": 61.52
    },
    {
      "code": "000034",
      "name": "神州数码",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1790577909.0,
        "margin_buy": 133035758.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.31,
        "financing_pressure_score": 64.96,
        "incremental_financing_pressure_score": 81.2,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 58.48,
        "turnover_z_score": 0.3
      },
      "trap_score": 58.43,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 2.57,
        "return_5d_pct": 4.85,
        "return_8d_pct": -0.16,
        "ma5_gap_pct": 2.03,
        "ma10_gap_pct": 1.93,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "000066",
      "name": "中国长城",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1942927192.0,
        "margin_buy": 131047686.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.61,
        "financing_pressure_score": 61.31,
        "incremental_financing_pressure_score": 76.63,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 44.88,
        "turnover_z_score": 1.36
      },
      "trap_score": 54.07,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 0.73,
        "return_5d_pct": 4.53,
        "return_8d_pct": 3.39,
        "ma5_gap_pct": 0.97,
        "ma10_gap_pct": 2.24,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "000725",
      "name": "京东方Ａ",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11708281516.0,
        "margin_buy": 1482036570.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.17,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 73.36
      },
      "trap_score": 68.17
    },
    {
      "code": "000100",
      "name": "TCL科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4625975405.0,
        "margin_buy": 251822886.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.81,
        "financing_pressure_score": 54.37,
        "incremental_financing_pressure_score": 67.96,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.48
      },
      "trap_score": 46.46
    },
    {
      "code": "600584",
      "name": "长电科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6888159022.0,
        "margin_buy": 1630324111.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.43,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 67.44
      },
      "trap_score": 66.99
    },
    {
      "code": "600570",
      "name": "恒生电子",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2563797603.0,
        "margin_buy": 54586285.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.33,
        "financing_pressure_score": 29.03,
        "incremental_financing_pressure_score": 36.29,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.64
      },
      "trap_score": 32.69
    },
    {
      "code": "600845",
      "name": "宝信软件",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 641037476.0,
        "margin_buy": 30312041.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.03,
        "financing_pressure_score": 49.83,
        "incremental_financing_pressure_score": 62.29,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.24
      },
      "trap_score": 41.57
    },
    {
      "code": "600536",
      "name": "中国软件",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1462256674.0,
        "margin_buy": 21604749.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.0,
        "financing_pressure_score": 20.68,
        "incremental_financing_pressure_score": 25.86,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 48.0,
        "turnover_z_score": 2.29
      },
      "trap_score": 36.41,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 8.95,
        "return_5d_pct": 7.49,
        "return_8d_pct": 5.13,
        "ma5_gap_pct": 7.12,
        "ma10_gap_pct": 6.42,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "600588",
      "name": "用友网络",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1445710018.0,
        "margin_buy": 63864859.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.62,
        "financing_pressure_score": 47.34,
        "incremental_financing_pressure_score": 59.18,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.96
      },
      "trap_score": 41.39
    },
    {
      "code": "600602",
      "name": "云赛智联",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 819575304.0,
        "margin_buy": 170153151.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.5,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 44.0
      },
      "trap_score": 62.3
    },
    {
      "code": "600171",
      "name": "上海贝岭",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 888897710.0,
        "margin_buy": 40392059.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.22,
        "financing_pressure_score": 48.35,
        "incremental_financing_pressure_score": 60.44,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.76
      },
      "trap_score": 42.81
    },
    {
      "code": "600498",
      "name": "烽火通信",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2298115046.0,
        "margin_buy": 442149384.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.01,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 56.08
      },
      "trap_score": 64.72
    },
    {
      "code": "600183",
      "name": "生益科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4306904586.0,
        "margin_buy": 1113993861.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.05,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.4
      },
      "trap_score": 58.38
    },
    {
      "code": "600460",
      "name": "士兰微",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2133637584.0,
        "margin_buy": 297513536.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.25,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 58.0
      },
      "trap_score": 65.1
    },
    {
      "code": "600703",
      "name": "三安光电",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4325464176.0,
        "margin_buy": 257475091.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.37,
        "financing_pressure_score": 57.08,
        "incremental_financing_pressure_score": 71.35,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 42.96,
        "turnover_z_score": 1.72
      },
      "trap_score": 51.78,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 9.77,
        "return_5d_pct": 10.18,
        "return_8d_pct": 8.17,
        "ma5_gap_pct": 6.32,
        "ma10_gap_pct": 7.09,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "601138",
      "name": "工业富联",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7390293151.0,
        "margin_buy": 1075994838.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.66,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 5.28
      },
      "trap_score": 54.56
    },
    {
      "code": "601360",
      "name": "三六零",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1904464344.0,
        "margin_buy": 87478821.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.7,
        "financing_pressure_score": 48.75,
        "incremental_financing_pressure_score": 60.93,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.6
      },
      "trap_score": 42.16
    },
    {
      "code": "603000",
      "name": "人民网",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 454314274.0,
        "margin_buy": 12217908.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.23,
        "financing_pressure_score": 33.51,
        "incremental_financing_pressure_score": 41.89,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.84
      },
      "trap_score": 34.55
    },
    {
      "code": "300054",
      "name": "鼎龙股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2017370397.0,
        "margin_buy": 343534362.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.17,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.36
      },
      "trap_score": 60.17
    },
    {
      "code": "002192",
      "name": "融捷股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1230801224.0,
        "margin_buy": 174143306.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 10.86,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 86.88
      },
      "trap_score": 70.88
    },
    {
      "code": "002466",
      "name": "天齐锂业",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3289594565.0,
        "margin_buy": 183879880.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.59,
        "financing_pressure_score": 55.15,
        "incremental_financing_pressure_score": 68.93,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.72
      },
      "trap_score": 46.46
    },
    {
      "code": "002837",
      "name": "英维克",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3626867543.0,
        "margin_buy": 203393657.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.26,
        "financing_pressure_score": 55.24,
        "incremental_financing_pressure_score": 69.05,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.08
      },
      "trap_score": 47.57
    },
    {
      "code": "601869",
      "name": "长飞光纤",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2510195395.0,
        "margin_buy": 508761155.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.78,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.24
      },
      "trap_score": 59.55
    },
    {
      "code": "002938",
      "name": "鹏鼎控股",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1270728835.0,
        "margin_buy": 141591414.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.26,
        "financing_pressure_score": 77.43,
        "incremental_financing_pressure_score": 96.78,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.08
      },
      "trap_score": 54.36
    },
    {
      "code": "000878",
      "name": "云南铜业",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1903229752.0,
        "margin_buy": 70832022.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.81,
        "financing_pressure_score": 41.77,
        "incremental_financing_pressure_score": 52.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.48
      },
      "trap_score": 39.19
    },
    {
      "code": "002155",
      "name": "湖南黄金",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2172183903.0,
        "margin_buy": 86959698.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.12,
        "financing_pressure_score": 44.03,
        "incremental_financing_pressure_score": 55.03,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.96
      },
      "trap_score": 40.71
    },
    {
      "code": "600378",
      "name": "昊华科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1451613237.0,
        "margin_buy": 290225600.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.99,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 39.92
      },
      "trap_score": 61.48
    },
    {
      "code": "300418",
      "name": "昆仑万维",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3415203775.0,
        "margin_buy": 281410362.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.04,
        "financing_pressure_score": 68.72,
        "incremental_financing_pressure_score": 85.9,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.32
      },
      "trap_score": 54.89
    },
    {
      "code": "002218",
      "name": "拓日新能",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 121205257.0,
        "margin_buy": 15022019.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.33,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.64
      },
      "trap_score": 57.23
    },
    {
      "code": "300617",
      "name": "安靠智电",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.76,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.08
      },
      "trap_score": 23.52
    },
    {
      "code": "300738",
      "name": "奥飞数据",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1465383089.0,
        "margin_buy": 192924135.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.72,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 45.76
      },
      "trap_score": 62.65
    },
    {
      "code": "002126",
      "name": "银轮股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 527448994.0,
        "margin_buy": 76671605.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.72,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.76
      },
      "trap_score": 56.25
    },
    {
      "code": "002050",
      "name": "三花智控",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5364414403.0,
        "margin_buy": 157814560.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.25,
        "financing_pressure_score": 35.54,
        "incremental_financing_pressure_score": 44.42,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.0
      },
      "trap_score": 37.09
    },
    {
      "code": "603075",
      "name": "热威股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 38499466.0,
        "margin_buy": 3149949.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.89,
        "financing_pressure_score": 68.55,
        "incremental_financing_pressure_score": 85.68,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 63.12
      },
      "trap_score": 60.97
    },
    {
      "code": "603667",
      "name": "五洲新春",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1136014300.0,
        "margin_buy": 54717052.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.99,
        "financing_pressure_score": 50.53,
        "incremental_financing_pressure_score": 63.17,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 39.92,
        "turnover_z_score": 0.42
      },
      "trap_score": 48.22,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 1.69,
        "return_5d_pct": 0.14,
        "return_8d_pct": 2.85,
        "ma5_gap_pct": 1.06,
        "ma10_gap_pct": 1.76,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "605020",
      "name": "永和股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 428181438.0,
        "margin_buy": 39550406.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.93,
        "financing_pressure_score": 71.71,
        "incremental_financing_pressure_score": 89.64,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.44
      },
      "trap_score": 56.06
    },
    {
      "code": "600160",
      "name": "巨化股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4074753337.0,
        "margin_buy": 157979479.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.73,
        "financing_pressure_score": 43.02,
        "incremental_financing_pressure_score": 53.77,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.84
      },
      "trap_score": 39.63
    },
    {
      "code": "603379",
      "name": "三美股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 840308140.0,
        "margin_buy": 32410873.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.06,
        "financing_pressure_score": 42.86,
        "incremental_financing_pressure_score": 53.57,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.48
      },
      "trap_score": 38.48
    },
    {
      "code": "600988",
      "name": "赤峰黄金",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1126078878.0,
        "margin_buy": 99030729.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.09,
        "financing_pressure_score": 70.38,
        "incremental_financing_pressure_score": 87.98,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.72
      },
      "trap_score": 54.12
    },
    {
      "code": "000636",
      "name": "风华高科",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3424815868.0,
        "margin_buy": 1009530439.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 12.85,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    },
    {
      "code": "688825",
      "name": "长鑫科技",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 12947534555.0,
        "margin_buy": 4282571913.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.47,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 75.76
      },
      "trap_score": 68.65
    },
    {
      "code": "600105",
      "name": "永鼎股份",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2338000896.0,
        "margin_buy": 663645638.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 10.14,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 81.12
      },
      "trap_score": 69.72
    },
    {
      "code": "300285",
      "name": "国瓷材料",
      "margin_date": "20260817",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4230965382.0,
        "margin_buy": 1091735759.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 15.08,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    }
  ]
};
