window.__QUANT_DATA__ = {
  "generated_at": "2026-08-17T17:53:02+08:00",
  "data_freshness": {
    "warning_target_date": "2026-08-18",
    "spot_snapshot_at": "2026-08-17T17:53:02+08:00",
    "margin_data_as_of": "20260814",
    "margin_data_dates_by_market": {
      "szse": "20260814",
      "sse": "20260814"
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
    "total_rows": 5544,
    "turnover_rate_available_rows": 5544,
    "turnover_rate_missing_rows": 0,
    "turnover_rate_missing_ratio": 0.0,
    "float_market_cap_available_rows": 0,
    "float_market_cap_missing_rows": 5544,
    "float_market_cap_missing_ratio": 1.0
  },
  "daily_warning": {
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
  "warning_history": [
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
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 82,
        "margin_balance": 17142650586.0,
        "margin_buy": 1360393279.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.8,
        "financing_pressure_score": 67.66,
        "incremental_financing_pressure_score": 84.57,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 38.4,
        "turnover_z_score": -0.17
      },
      "trap_score": 66.83,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": -1.21,
        "return_5d_pct": -3.5,
        "return_8d_pct": 16.78,
        "ma5_gap_pct": 0.69,
        "ma10_gap_pct": 5.14,
        "drawdown_8d_pct": -3.5,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002384",
      "name": "东山精密",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 68,
        "margin_balance": 10888382447.0,
        "margin_buy": 1217398609.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.26,
        "financing_pressure_score": 77.54,
        "incremental_financing_pressure_score": 96.93,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 42.08,
        "turnover_z_score": -1.01
      },
      "trap_score": 67.11,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 8.73,
        "return_5d_pct": 17.06,
        "return_8d_pct": 15.27,
        "ma5_gap_pct": 6.8,
        "ma10_gap_pct": 11.29,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300308",
      "name": "中际旭创",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 88,
        "margin_balance": 30366291614.0,
        "margin_buy": 2559153088.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.27,
        "financing_pressure_score": 69.28,
        "incremental_financing_pressure_score": 86.6,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.16,
        "turnover_z_score": -0.4
      },
      "trap_score": 67.21,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 8.69,
        "return_5d_pct": 15.78,
        "return_8d_pct": 5.62,
        "ma5_gap_pct": 7.11,
        "ma10_gap_pct": 6.69,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002230",
      "name": "科大讯飞",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5445095744.0,
        "margin_buy": 152492082.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.37,
        "financing_pressure_score": 34.4,
        "incremental_financing_pressure_score": 43.01,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.96
      },
      "trap_score": 35.17
    },
    {
      "code": "688256",
      "name": "寒武纪",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 18556685209.0,
        "margin_buy": 1023378162.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.23,
        "financing_pressure_score": 54.75,
        "incremental_financing_pressure_score": 68.43,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.84
      },
      "trap_score": 45.71
    },
    {
      "code": "603019",
      "name": "中科曙光",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8830326424.0,
        "margin_buy": 466363757.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.0,
        "financing_pressure_score": 53.5,
        "incremental_financing_pressure_score": 66.88,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.0
      },
      "trap_score": 46.38
    },
    {
      "code": "603160",
      "name": "汇顶科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 981226569.0,
        "margin_buy": 15823809.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.85,
        "financing_pressure_score": 22.58,
        "incremental_financing_pressure_score": 28.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.8
      },
      "trap_score": 29.02
    },
    {
      "code": "603986",
      "name": "兆易创新",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 18988601219.0,
        "margin_buy": 3012444145.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.81,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 70.48
      },
      "trap_score": 67.6
    },
    {
      "code": "603501",
      "name": "豪威集团",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4619531584.0,
        "margin_buy": 105285040.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.26,
        "financing_pressure_score": 30.23,
        "incremental_financing_pressure_score": 37.79,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.08
      },
      "trap_score": 33.12
    },
    {
      "code": "603893",
      "name": "瑞芯微",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1949949663.0,
        "margin_buy": 234334791.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.86,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.88
      },
      "trap_score": 59.68
    },
    {
      "code": "688111",
      "name": "金山办公",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4874609967.0,
        "margin_buy": 352846768.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.16,
        "financing_pressure_score": 63.94,
        "incremental_financing_pressure_score": 79.92,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.28
      },
      "trap_score": 49.73
    },
    {
      "code": "688041",
      "name": "海光信息",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8336197745.0,
        "margin_buy": 360375337.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.0,
        "financing_pressure_score": 46.58,
        "incremental_financing_pressure_score": 58.23,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.0
      },
      "trap_score": 40.06
    },
    {
      "code": "688012",
      "name": "中微公司",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4807994137.0,
        "margin_buy": 437463380.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.33,
        "financing_pressure_score": 71.3,
        "incremental_financing_pressure_score": 89.12,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.64
      },
      "trap_score": 53.31
    },
    {
      "code": "688008",
      "name": "澜起科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 15038467690.0,
        "margin_buy": 907994666.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.51,
        "financing_pressure_score": 57.54,
        "incremental_financing_pressure_score": 71.92,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 36.08,
        "turnover_z_score": -0.26
      },
      "trap_score": 50.61,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 4.15,
        "return_5d_pct": 8.43,
        "return_8d_pct": 5.83,
        "ma5_gap_pct": 4.98,
        "ma10_gap_pct": 6.1,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "688169",
      "name": "石头科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1030104266.0,
        "margin_buy": 32587593.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.4,
        "financing_pressure_score": 37.31,
        "incremental_financing_pressure_score": 46.64,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.2
      },
      "trap_score": 39.73
    },
    {
      "code": "688072",
      "name": "拓荆科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1874822880.0,
        "margin_buy": 243592019.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.24,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.92
      },
      "trap_score": 57.08
    },
    {
      "code": "688099",
      "name": "晶晨股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1097390031.0,
        "margin_buy": 108764665.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.02,
        "financing_pressure_score": 73.73,
        "incremental_financing_pressure_score": 92.17,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.16
      },
      "trap_score": 55.51
    },
    {
      "code": "688027",
      "name": "国盾量子",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1222340049.0,
        "margin_buy": 36140206.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.15,
        "financing_pressure_score": 35.65,
        "incremental_financing_pressure_score": 44.57,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.2
      },
      "trap_score": 36.98
    },
    {
      "code": "688608",
      "name": "恒玄科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1078628837.0,
        "margin_buy": 33414278.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.4,
        "financing_pressure_score": 36.78,
        "incremental_financing_pressure_score": 45.98,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.2
      },
      "trap_score": 36.29
    },
    {
      "code": "688018",
      "name": "乐鑫科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 687405855.0,
        "margin_buy": 49595189.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.88,
        "financing_pressure_score": 63.81,
        "incremental_financing_pressure_score": 79.77,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.04
      },
      "trap_score": 49.22
    },
    {
      "code": "688036",
      "name": "传音控股",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1074257226.0,
        "margin_buy": 45346491.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.2,
        "financing_pressure_score": 45.77,
        "incremental_financing_pressure_score": 57.21,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.6
      },
      "trap_score": 40.02
    },
    {
      "code": "688047",
      "name": "龙芯中科",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1205899692.0,
        "margin_buy": 25762819.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.07,
        "financing_pressure_score": 29.09,
        "incremental_financing_pressure_score": 36.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.56
      },
      "trap_score": 32.3
    },
    {
      "code": "688126",
      "name": "沪硅产业",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2696879955.0,
        "margin_buy": 107475707.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.34,
        "financing_pressure_score": 43.88,
        "incremental_financing_pressure_score": 54.85,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.72
      },
      "trap_score": 42.59
    },
    {
      "code": "688037",
      "name": "芯源微",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 660007289.0,
        "margin_buy": 69636799.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.4,
        "financing_pressure_score": 75.65,
        "incremental_financing_pressure_score": 94.57,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.2
      },
      "trap_score": 55.38
    },
    {
      "code": "688213",
      "name": "思特威-W",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1296772291.0,
        "margin_buy": 32395449.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.73,
        "financing_pressure_score": 31.99,
        "incremental_financing_pressure_score": 39.98,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.84
      },
      "trap_score": 36.26
    },
    {
      "code": "688120",
      "name": "华海清科",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1496089135.0,
        "margin_buy": 141317307.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.25,
        "financing_pressure_score": 72.34,
        "incremental_financing_pressure_score": 90.42,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.0
      },
      "trap_score": 53.65
    },
    {
      "code": "688981",
      "name": "中芯国际",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11509046927.0,
        "margin_buy": 1415249686.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.4,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.2
      },
      "trap_score": 58.94
    },
    {
      "code": "603296",
      "name": "华勤技术",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1202413083.0,
        "margin_buy": 317266510.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.42,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.36
      },
      "trap_score": 58.97
    },
    {
      "code": "300033",
      "name": "同花顺",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5386606468.0,
        "margin_buy": 312382760.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.95,
        "financing_pressure_score": 56.26,
        "incremental_financing_pressure_score": 70.33,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.6
      },
      "trap_score": 47.54
    },
    {
      "code": "300496",
      "name": "中科创达",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1778395599.0,
        "margin_buy": 78884720.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.87,
        "financing_pressure_score": 47.49,
        "incremental_financing_pressure_score": 59.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.96
      },
      "trap_score": 43.46
    },
    {
      "code": "300502",
      "name": "新易盛",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 19256915863.0,
        "margin_buy": 3229214623.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.7,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 37.6
      },
      "trap_score": 61.02
    },
    {
      "code": "300223",
      "name": "君正股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3224575858.0,
        "margin_buy": 449502341.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 10.96,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 87.68
      },
      "trap_score": 71.04
    },
    {
      "code": "300383",
      "name": "光环新网",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1499624734.0,
        "margin_buy": 111156965.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.85,
        "financing_pressure_score": 64.87,
        "incremental_financing_pressure_score": 81.08,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.8
      },
      "trap_score": 52.85
    },
    {
      "code": "300458",
      "name": "全志科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1477474758.0,
        "margin_buy": 163359837.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.78,
        "financing_pressure_score": 77.17,
        "incremental_financing_pressure_score": 96.46,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 62.24
      },
      "trap_score": 64.67
    },
    {
      "code": "300474",
      "name": "景嘉微",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1295808725.0,
        "margin_buy": 29700548.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.76,
        "financing_pressure_score": 30.34,
        "incremental_financing_pressure_score": 37.92,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.08
      },
      "trap_score": 33.97
    },
    {
      "code": "300454",
      "name": "深信服",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1355705201.0,
        "margin_buy": 242530477.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.06,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 40.48
      },
      "trap_score": 61.6
    },
    {
      "code": "300212",
      "name": "*ST易录",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.2,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.6
      },
      "trap_score": 21.02
    },
    {
      "code": "300251",
      "name": "光线传媒",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1243608575.0,
        "margin_buy": 49972510.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.08,
        "financing_pressure_score": 44.15,
        "incremental_financing_pressure_score": 55.18,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.64
      },
      "trap_score": 39.1
    },
    {
      "code": "300229",
      "name": "拓尔思",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 949446237.0,
        "margin_buy": 35996635.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.54,
        "financing_pressure_score": 42.33,
        "incremental_financing_pressure_score": 52.91,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.32
      },
      "trap_score": 40.61
    },
    {
      "code": "300624",
      "name": "万兴科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 550174214.0,
        "margin_buy": 37021367.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.54,
        "financing_pressure_score": 61.22,
        "incremental_financing_pressure_score": 76.53,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 36.32
      },
      "trap_score": 52.31
    },
    {
      "code": "300442",
      "name": "润泽科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3535741411.0,
        "margin_buy": 462011133.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.26,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.08
      },
      "trap_score": 58.72
    },
    {
      "code": "300803",
      "name": "指南针",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3292064794.0,
        "margin_buy": 114236255.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.0,
        "financing_pressure_score": 39.76,
        "incremental_financing_pressure_score": 49.7,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.0
      },
      "trap_score": 38.59
    },
    {
      "code": "300364",
      "name": "中文在线",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 973366688.0,
        "margin_buy": 125511572.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.21,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 57.68
      },
      "trap_score": 65.04
    },
    {
      "code": "300394",
      "name": "天孚通信",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7367006428.0,
        "margin_buy": 1586952458.0,
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
      "code": "300570",
      "name": "太辰光",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1637687840.0,
        "margin_buy": 437079412.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 12.7,
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
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1761211970.0,
        "margin_buy": 50224661.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.88,
        "financing_pressure_score": 34.81,
        "incremental_financing_pressure_score": 43.52,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.04
      },
      "trap_score": 37.77
    },
    {
      "code": "300548",
      "name": "长芯博创",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2081105415.0,
        "margin_buy": 220410015.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.22,
        "financing_pressure_score": 75.77,
        "incremental_financing_pressure_score": 94.72,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 57.76
      },
      "trap_score": 63.15
    },
    {
      "code": "300604",
      "name": "长川科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3431383042.0,
        "margin_buy": 441057188.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.27,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 34.16
      },
      "trap_score": 60.33
    },
    {
      "code": "300118",
      "name": "东方日升",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 569749171.0,
        "margin_buy": 17080162.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.11,
        "financing_pressure_score": 35.98,
        "incremental_financing_pressure_score": 44.98,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.88
      },
      "trap_score": 38.67
    },
    {
      "code": "300373",
      "name": "扬杰科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1375299004.0,
        "margin_buy": 71135677.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.3,
        "financing_pressure_score": 52.92,
        "incremental_financing_pressure_score": 66.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.4
      },
      "trap_score": 44.99
    },
    {
      "code": "301236",
      "name": "软通动力",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2014358167.0,
        "margin_buy": 85745187.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.66,
        "financing_pressure_score": 46.05,
        "incremental_financing_pressure_score": 57.57,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.28
      },
      "trap_score": 42.48
    },
    {
      "code": "301269",
      "name": "华大九天",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 954133139.0,
        "margin_buy": 34206050.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.59,
        "financing_pressure_score": 40.68,
        "incremental_financing_pressure_score": 50.85,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.72
      },
      "trap_score": 38.35
    },
    {
      "code": "301312",
      "name": "智立方",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 232887936.0,
        "margin_buy": 36973305.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.28,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 58.24
      },
      "trap_score": 65.15
    },
    {
      "code": "301308",
      "name": "江波龙",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7103812753.0,
        "margin_buy": 730123903.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.02,
        "financing_pressure_score": 74.83,
        "incremental_financing_pressure_score": 93.54,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 64.16
      },
      "trap_score": 64.01
    },
    {
      "code": "301095",
      "name": "广立微",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 541884506.0,
        "margin_buy": 46656977.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.98,
        "financing_pressure_score": 69.83,
        "incremental_financing_pressure_score": 87.29,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.84
      },
      "trap_score": 55.29
    },
    {
      "code": "301171",
      "name": "易点天下",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1281252158.0,
        "margin_buy": 321313525.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 17.72,
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
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 927443044.0,
        "margin_buy": 424318522.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.69,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.52
      },
      "trap_score": 57.8
    },
    {
      "code": "300059",
      "name": "东方财富",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 23274462696.0,
        "margin_buy": 670661785.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.28,
        "financing_pressure_score": 35.05,
        "incremental_financing_pressure_score": 43.82,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.24
      },
      "trap_score": 35.32
    },
    {
      "code": "002371",
      "name": "北方华创",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3064525502.0,
        "margin_buy": 251839385.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.08,
        "financing_pressure_score": 68.65,
        "incremental_financing_pressure_score": 85.82,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.64
      },
      "trap_score": 50.12
    },
    {
      "code": "002475",
      "name": "立讯精密",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6217120999.0,
        "margin_buy": 285381381.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.73,
        "financing_pressure_score": 48.72,
        "incremental_financing_pressure_score": 60.9,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.84
      },
      "trap_score": 42.19
    },
    {
      "code": "002463",
      "name": "沪电股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4640287421.0,
        "margin_buy": 296430815.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.36,
        "financing_pressure_score": 59.4,
        "incremental_financing_pressure_score": 74.25,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.88
      },
      "trap_score": 48.01
    },
    {
      "code": "002555",
      "name": "三七互娱",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1722000336.0,
        "margin_buy": 103091730.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.54,
        "financing_pressure_score": 57.26,
        "incremental_financing_pressure_score": 71.58,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.32
      },
      "trap_score": 47.33
    },
    {
      "code": "002236",
      "name": "大华股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1466616188.0,
        "margin_buy": 60656802.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.75,
        "financing_pressure_score": 45.09,
        "incremental_financing_pressure_score": 56.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.0
      },
      "trap_score": 42.19
    },
    {
      "code": "002241",
      "name": "歌尔股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4074595767.0,
        "margin_buy": 101267597.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.35,
        "financing_pressure_score": 31.88,
        "incremental_financing_pressure_score": 39.85,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.8
      },
      "trap_score": 34.01
    },
    {
      "code": "600050",
      "name": "中国联通",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2808986964.0,
        "margin_buy": 51803870.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.37,
        "financing_pressure_score": 25.82,
        "incremental_financing_pressure_score": 32.27,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 2.96
      },
      "trap_score": 29.71
    },
    {
      "code": "002859",
      "name": "洁美科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 850633810.0,
        "margin_buy": 164409347.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.83,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 38.64
      },
      "trap_score": 61.23
    },
    {
      "code": "002920",
      "name": "德赛西威",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1463030265.0,
        "margin_buy": 161853619.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.49,
        "financing_pressure_score": 77.19,
        "incremental_financing_pressure_score": 96.49,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.92
      },
      "trap_score": 54.62
    },
    {
      "code": "002456",
      "name": "欧菲光",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1633355188.0,
        "margin_buy": 33616938.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.42,
        "financing_pressure_score": 28.47,
        "incremental_financing_pressure_score": 35.58,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.36
      },
      "trap_score": 34.18
    },
    {
      "code": "002156",
      "name": "通富微电",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4256857984.0,
        "margin_buy": 398731222.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.73,
        "financing_pressure_score": 72.1,
        "incremental_financing_pressure_score": 90.13,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 77.84
      },
      "trap_score": 65.51
    },
    {
      "code": "002261",
      "name": "拓维信息",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1437754761.0,
        "margin_buy": 66765470.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.56,
        "financing_pressure_score": 49.15,
        "incremental_financing_pressure_score": 61.44,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 36.48,
        "turnover_z_score": -0.52
      },
      "trap_score": 46.91,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 1.67,
        "return_5d_pct": 2.69,
        "return_8d_pct": -3.96,
        "ma5_gap_pct": 1.26,
        "ma10_gap_pct": -0.22,
        "drawdown_8d_pct": -2.52,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002273",
      "name": "水晶光电",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2704753089.0,
        "margin_buy": 65138290.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.9,
        "financing_pressure_score": 31.27,
        "incremental_financing_pressure_score": 39.08,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.2
      },
      "trap_score": 37.81
    },
    {
      "code": "002281",
      "name": "光迅科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4389702595.0,
        "margin_buy": 632046620.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.42,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 43.36
      },
      "trap_score": 62.17
    },
    {
      "code": "002415",
      "name": "海康威视",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5292495314.0,
        "margin_buy": 361894983.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.69,
        "financing_pressure_score": 61.8,
        "incremental_financing_pressure_score": 77.25,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 5.52
      },
      "trap_score": 46.41
    },
    {
      "code": "002916",
      "name": "深南电路",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1781995989.0,
        "margin_buy": 184250156.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.35,
        "financing_pressure_score": 75.02,
        "incremental_financing_pressure_score": 93.77,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.8
      },
      "trap_score": 53.42
    },
    {
      "code": "002517",
      "name": "恺英网络",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1379829118.0,
        "margin_buy": 143797660.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.89,
        "financing_pressure_score": 75.26,
        "incremental_financing_pressure_score": 94.08,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 39.12
      },
      "trap_score": 59.19
    },
    {
      "code": "002049",
      "name": "紫光国微",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4456297675.0,
        "margin_buy": 260201424.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.03,
        "financing_pressure_score": 56.47,
        "incremental_financing_pressure_score": 70.59,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.24
      },
      "trap_score": 49.36
    },
    {
      "code": "002138",
      "name": "顺络电子",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1465537651.0,
        "margin_buy": 136149503.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.75,
        "financing_pressure_score": 71.87,
        "incremental_financing_pressure_score": 89.84,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 46.0
      },
      "trap_score": 59.04
    },
    {
      "code": "002185",
      "name": "华天科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2488555264.0,
        "margin_buy": 304047946.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 11.8,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 94.4
      },
      "trap_score": 72.38
    },
    {
      "code": "000063",
      "name": "中兴通讯",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 9975606449.0,
        "margin_buy": 529221842.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.55,
        "financing_pressure_score": 53.63,
        "incremental_financing_pressure_score": 67.03,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 36.4,
        "turnover_z_score": 0.12
      },
      "trap_score": 48.91,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 1.21,
        "return_5d_pct": 5.01,
        "return_8d_pct": 3.68,
        "ma5_gap_pct": 2.37,
        "ma10_gap_pct": 3.29,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "000977",
      "name": "浪潮信息",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4158951167.0,
        "margin_buy": 704332488.0,
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
      "code": "000938",
      "name": "紫光股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4734714265.0,
        "margin_buy": 1345974811.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.46,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 75.68
      },
      "trap_score": 68.64
    },
    {
      "code": "000988",
      "name": "华工科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8354791188.0,
        "margin_buy": 701849020.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.6,
        "financing_pressure_score": 69.2,
        "incremental_financing_pressure_score": 86.5,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 52.8,
        "turnover_z_score": 0.14
      },
      "trap_score": 59.2,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 6.9,
        "return_5d_pct": 9.63,
        "return_8d_pct": 13.17,
        "ma5_gap_pct": 5.12,
        "ma10_gap_pct": 7.74,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "000034",
      "name": "神州数码",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1766703275.0,
        "margin_buy": 126505633.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.86,
        "financing_pressure_score": 63.52,
        "incremental_financing_pressure_score": 79.4,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 38.88
      },
      "trap_score": 53.86
    },
    {
      "code": "000066",
      "name": "中国长城",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1952947563.0,
        "margin_buy": 141825231.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.5,
        "financing_pressure_score": 64.06,
        "incremental_financing_pressure_score": 80.08,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.0
      },
      "trap_score": 51.93
    },
    {
      "code": "000725",
      "name": "京东方Ａ",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11595435187.0,
        "margin_buy": 921424764.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.2,
        "financing_pressure_score": 67.71,
        "incremental_financing_pressure_score": 84.64,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 49.6,
        "turnover_z_score": 0.71
      },
      "trap_score": 57.89,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 2.53,
        "return_5d_pct": 3.23,
        "return_8d_pct": 1.84,
        "ma5_gap_pct": 2.74,
        "ma10_gap_pct": 2.86,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "000100",
      "name": "TCL科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4597568724.0,
        "margin_buy": 239144590.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.13,
        "financing_pressure_score": 53.07,
        "incremental_financing_pressure_score": 66.34,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.04
      },
      "trap_score": 44.79
    },
    {
      "code": "600584",
      "name": "长电科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6599677447.0,
        "margin_buy": 827491991.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 10.68,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 85.44
      },
      "trap_score": 70.59
    },
    {
      "code": "600570",
      "name": "恒生电子",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2554582396.0,
        "margin_buy": 71547301.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.02,
        "financing_pressure_score": 34.41,
        "incremental_financing_pressure_score": 43.01,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.16
      },
      "trap_score": 34.62
    },
    {
      "code": "600845",
      "name": "宝信软件",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 644032770.0,
        "margin_buy": 41340788.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.81,
        "financing_pressure_score": 59.57,
        "incremental_financing_pressure_score": 74.46,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.48
      },
      "trap_score": 45.6
    },
    {
      "code": "600536",
      "name": "中国软件",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1464252848.0,
        "margin_buy": 20746470.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.29,
        "financing_pressure_score": 19.84,
        "incremental_financing_pressure_score": 24.8,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.32
      },
      "trap_score": 28.49
    },
    {
      "code": "600588",
      "name": "用友网络",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1443429868.0,
        "margin_buy": 82480712.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.68,
        "financing_pressure_score": 55.81,
        "incremental_financing_pressure_score": 69.76,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.44
      },
      "trap_score": 45.3
    },
    {
      "code": "600602",
      "name": "云赛智联",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 799449066.0,
        "margin_buy": 186293038.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.79,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 62.32
      },
      "trap_score": 65.96
    },
    {
      "code": "600171",
      "name": "上海贝岭",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 895166159.0,
        "margin_buy": 10658049.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.43,
        "financing_pressure_score": 16.67,
        "incremental_financing_pressure_score": 20.84,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.44
      },
      "trap_score": 28.89
    },
    {
      "code": "600498",
      "name": "烽火通信",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2183291348.0,
        "margin_buy": 352553919.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.19,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 73.52
      },
      "trap_score": 68.2
    },
    {
      "code": "600183",
      "name": "生益科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4161913062.0,
        "margin_buy": 1041741128.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.16,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.28
      },
      "trap_score": 58.56
    },
    {
      "code": "600460",
      "name": "士兰微",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2026200956.0,
        "margin_buy": 193221970.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.93,
        "financing_pressure_score": 72.61,
        "incremental_financing_pressure_score": 90.76,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 39.44
      },
      "trap_score": 58.06
    },
    {
      "code": "600703",
      "name": "三安光电",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4277843201.0,
        "margin_buy": 125684811.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.74,
        "financing_pressure_score": 35.5,
        "incremental_financing_pressure_score": 44.38,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.92
      },
      "trap_score": 39.46
    },
    {
      "code": "601138",
      "name": "工业富联",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7388745676.0,
        "margin_buy": 725359679.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.81,
        "financing_pressure_score": 73.45,
        "incremental_financing_pressure_score": 91.81,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.48
      },
      "trap_score": 51.85
    },
    {
      "code": "601360",
      "name": "三六零",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1882639915.0,
        "margin_buy": 84762791.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.36,
        "financing_pressure_score": 48.02,
        "incremental_financing_pressure_score": 60.02,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.88
      },
      "trap_score": 41.29
    },
    {
      "code": "603000",
      "name": "人民网",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 455785600.0,
        "margin_buy": 17619467.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.06,
        "financing_pressure_score": 42.93,
        "incremental_financing_pressure_score": 53.66,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.48
      },
      "trap_score": 38.51
    },
    {
      "code": "300054",
      "name": "鼎龙股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1938738272.0,
        "margin_buy": 152262525.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.69,
        "financing_pressure_score": 67.22,
        "incremental_financing_pressure_score": 84.02,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 45.52,
        "turnover_z_score": 0.16
      },
      "trap_score": 56.85,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 4.8,
        "return_5d_pct": 3.37,
        "return_8d_pct": 9.84,
        "ma5_gap_pct": 5.19,
        "ma10_gap_pct": 6.45,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002192",
      "name": "融捷股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1186216971.0,
        "margin_buy": 117842119.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.86,
        "financing_pressure_score": 73.8,
        "incremental_financing_pressure_score": 92.25,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 46.88
      },
      "trap_score": 60.09
    },
    {
      "code": "002466",
      "name": "天齐锂业",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3301211768.0,
        "margin_buy": 169928035.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.61,
        "financing_pressure_score": 52.79,
        "incremental_financing_pressure_score": 65.98,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.88
      },
      "trap_score": 45.43
    },
    {
      "code": "002837",
      "name": "英维克",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3595154498.0,
        "margin_buy": 167754690.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.64,
        "financing_pressure_score": 49.33,
        "incremental_financing_pressure_score": 61.66,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.12
      },
      "trap_score": 45.52
    },
    {
      "code": "601869",
      "name": "长飞光纤",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2431078391.0,
        "margin_buy": 461902622.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.67,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.36
      },
      "trap_score": 59.37
    },
    {
      "code": "002938",
      "name": "鹏鼎控股",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1308183872.0,
        "margin_buy": 167458699.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.26,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.08
      },
      "trap_score": 55.52
    },
    {
      "code": "000878",
      "name": "云南铜业",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1912508400.0,
        "margin_buy": 37593238.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.78,
        "financing_pressure_score": 27.52,
        "incremental_financing_pressure_score": 34.4,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.24
      },
      "trap_score": 34.33
    },
    {
      "code": "002155",
      "name": "湖南黄金",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2175433473.0,
        "margin_buy": 84486777.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.48,
        "financing_pressure_score": 43.07,
        "incremental_financing_pressure_score": 53.84,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.84
      },
      "trap_score": 40.85
    },
    {
      "code": "600378",
      "name": "昊华科技",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1404445886.0,
        "margin_buy": 244897429.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.15,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 41.2
      },
      "trap_score": 61.74
    },
    {
      "code": "300418",
      "name": "昆仑万维",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3403334757.0,
        "margin_buy": 243612827.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.43,
        "financing_pressure_score": 63.51,
        "incremental_financing_pressure_score": 79.39,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 43.44,
        "turnover_z_score": -0.49
      },
      "trap_score": 54.77,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 3.26,
        "return_5d_pct": 0.95,
        "return_8d_pct": 0.65,
        "ma5_gap_pct": 2.97,
        "ma10_gap_pct": 2.0,
        "drawdown_8d_pct": -0.4,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002218",
      "name": "拓日新能",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 112833933.0,
        "margin_buy": 11450297.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.59,
        "financing_pressure_score": 74.44,
        "incremental_financing_pressure_score": 93.05,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.72
      },
      "trap_score": 55.14
    },
    {
      "code": "300617",
      "name": "安靠智电",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.31,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 42.48,
        "turnover_z_score": 0.96
      },
      "trap_score": 26.0,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 5.09,
        "return_5d_pct": 5.91,
        "return_8d_pct": 2.18,
        "ma5_gap_pct": 3.89,
        "ma10_gap_pct": 4.22,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300738",
      "name": "奥飞数据",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1426553301.0,
        "margin_buy": 248048647.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.18,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 57.44
      },
      "trap_score": 64.99
    },
    {
      "code": "002126",
      "name": "银轮股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 498295040.0,
        "margin_buy": 31926261.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.48,
        "financing_pressure_score": 59.5,
        "incremental_financing_pressure_score": 74.38,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.84
      },
      "trap_score": 48.24
    },
    {
      "code": "002050",
      "name": "三花智控",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5438498804.0,
        "margin_buy": 155582128.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.27,
        "financing_pressure_score": 34.89,
        "incremental_financing_pressure_score": 43.61,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.16
      },
      "trap_score": 35.23
    },
    {
      "code": "603075",
      "name": "热威股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 37260698.0,
        "margin_buy": 1916010.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.48,
        "financing_pressure_score": 52.76,
        "incremental_financing_pressure_score": 65.95,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 35.84,
        "turnover_z_score": -0.57
      },
      "trap_score": 48.41,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": -0.62,
        "return_5d_pct": -1.44,
        "return_8d_pct": 0.9,
        "ma5_gap_pct": 0.12,
        "ma10_gap_pct": 0.15,
        "drawdown_8d_pct": -1.44,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "603667",
      "name": "五洲新春",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1146396477.0,
        "margin_buy": 53861337.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.36,
        "financing_pressure_score": 49.59,
        "incremental_financing_pressure_score": 61.98,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.88
      },
      "trap_score": 45.19
    },
    {
      "code": "605020",
      "name": "永和股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 424934708.0,
        "margin_buy": 29451070.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.75,
        "financing_pressure_score": 62.3,
        "incremental_financing_pressure_score": 77.87,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.0
      },
      "trap_score": 49.93
    },
    {
      "code": "600160",
      "name": "巨化股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4040547768.0,
        "margin_buy": 114361541.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.17,
        "financing_pressure_score": 34.64,
        "incremental_financing_pressure_score": 43.3,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.36
      },
      "trap_score": 34.96
    },
    {
      "code": "603379",
      "name": "三美股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 856583044.0,
        "margin_buy": 34394146.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.04,
        "financing_pressure_score": 44.12,
        "incremental_financing_pressure_score": 55.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.32
      },
      "trap_score": 39.02
    },
    {
      "code": "600988",
      "name": "赤峰黄金",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1172611879.0,
        "margin_buy": 131262947.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.43,
        "financing_pressure_score": 77.58,
        "incremental_financing_pressure_score": 96.98,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.44
      },
      "trap_score": 56.3
    },
    {
      "code": "000636",
      "name": "风华高科",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3250436083.0,
        "margin_buy": 932231959.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 13.01,
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
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 12400997233.0,
        "margin_buy": 2020322226.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 12.57,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    },
    {
      "code": "600105",
      "name": "永鼎股份",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2157193540.0,
        "margin_buy": 570783746.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 11.18,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 89.44
      },
      "trap_score": 71.39
    },
    {
      "code": "300285",
      "name": "国瓷材料",
      "margin_date": "20260814",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4198436549.0,
        "margin_buy": 828969008.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 13.4,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    }
  ]
};
