window.__QUANT_DATA__ = {
  "generated_at": "2026-09-11T17:42:33+08:00",
  "data_freshness": {
    "warning_target_date": "2026-09-14",
    "spot_snapshot_at": "2026-09-11T17:42:33+08:00",
    "margin_data_as_of": "20260910",
    "margin_data_dates_by_market": {
      "szse": "20260910",
      "sse": "20260910"
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
    "total_rows": 5562,
    "turnover_rate_available_rows": 5562,
    "turnover_rate_missing_rows": 0,
    "turnover_rate_missing_ratio": 0.0,
    "float_market_cap_available_rows": 0,
    "float_market_cap_missing_rows": 5562,
    "float_market_cap_missing_ratio": 1.0
  },
  "daily_warning": {
    "date": "2026-09-14",
    "title": "量化分歧区，先看换手再定方向。",
    "gauge_score": 52,
    "summary": {
      "sample_size": 125,
      "avg_trap_score": 41.81,
      "high_risk_count": 3,
      "high_risk_ratio": 0.024,
      "watch_count": 17,
      "watch_ratio": 0.136,
      "top_cohort_size": 12,
      "top_cohort_avg_trap_score": 67.28,
      "concentration_spread": 25.46,
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
    "prompt": "当前高风险样本集中在 永鼎股份 等标的，前排样本平均陷阱分约 67.3，高风险票 3 只，优先防范一致性追高后的回撤兑现。",
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
      "status": "待复盘",
      "note": ""
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
  "warning_history": [
    {
      "date": "2026-09-14",
      "title": "量化分歧区，先看换手再定方向。",
      "gauge_score": 52,
      "summary": {
        "sample_size": 125,
        "avg_trap_score": 41.81,
        "high_risk_count": 3,
        "high_risk_ratio": 0.024,
        "watch_count": 17,
        "watch_ratio": 0.136,
        "top_cohort_size": 12,
        "top_cohort_avg_trap_score": 67.28,
        "concentration_spread": 25.46,
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
      "prompt": "当前高风险样本集中在 永鼎股份 等标的，前排样本平均陷阱分约 67.3，高风险票 3 只，优先防范一致性追高后的回撤兑现。",
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
        "status": "待复盘",
        "note": ""
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
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 82,
        "margin_balance": 16470250505.0,
        "margin_buy": 490442123.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.71,
        "financing_pressure_score": 35.82,
        "incremental_financing_pressure_score": 44.78,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.68,
        "turnover_z_score": -0.58
      },
      "trap_score": 49.16,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": -0.01,
        "return_5d_pct": 4.32,
        "return_8d_pct": -1.71,
        "ma5_gap_pct": -0.86,
        "ma10_gap_pct": -0.36,
        "drawdown_8d_pct": -1.94,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002384",
      "name": "东山精密",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 68,
        "margin_balance": 10491968923.0,
        "margin_buy": 798826573.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.35,
        "financing_pressure_score": 65.94,
        "incremental_financing_pressure_score": 82.42,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 42.8,
        "turnover_z_score": 1.2
      },
      "trap_score": 62.03,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 4.29,
        "return_5d_pct": 8.82,
        "return_8d_pct": 3.04,
        "ma5_gap_pct": 1.14,
        "ma10_gap_pct": 2.91,
        "drawdown_8d_pct": -0.84,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300308",
      "name": "中际旭创",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 88,
        "margin_balance": 31561179595.0,
        "margin_buy": 1839607920.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.95,
        "financing_pressure_score": 56.42,
        "incremental_financing_pressure_score": 70.52,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.6,
        "turnover_z_score": 0.73
      },
      "trap_score": 60.91,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 2.62,
        "return_5d_pct": 13.76,
        "return_8d_pct": 7.76,
        "ma5_gap_pct": 2.3,
        "ma10_gap_pct": 6.6,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002230",
      "name": "科大讯飞",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5386666771.0,
        "margin_buy": 50357811.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.04,
        "financing_pressure_score": 13.09,
        "incremental_financing_pressure_score": 16.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.32
      },
      "trap_score": 25.05
    },
    {
      "code": "688256",
      "name": "寒武纪",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 17797297569.0,
        "margin_buy": 535766660.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.71,
        "financing_pressure_score": 36.08,
        "incremental_financing_pressure_score": 45.1,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.68
      },
      "trap_score": 36.47
    },
    {
      "code": "603019",
      "name": "中科曙光",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8433961097.0,
        "margin_buy": 86079240.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.48,
        "financing_pressure_score": 14.29,
        "incremental_financing_pressure_score": 17.86,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.84
      },
      "trap_score": 26.3
    },
    {
      "code": "603160",
      "name": "汇顶科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 937993794.0,
        "margin_buy": 8428261.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.67,
        "financing_pressure_score": 12.58,
        "incremental_financing_pressure_score": 15.72,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 5.36
      },
      "trap_score": 24.23
    },
    {
      "code": "603986",
      "name": "兆易创新",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 17347213603.0,
        "margin_buy": 877238904.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.36,
        "financing_pressure_score": 52.3,
        "incremental_financing_pressure_score": 65.38,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 34.88,
        "turnover_z_score": -0.55
      },
      "trap_score": 48.01,
      "trend": {
        "available": true,
        "down_streak": 3,
        "return_3d_pct": -3.79,
        "return_5d_pct": -0.15,
        "return_8d_pct": -5.52,
        "ma5_gap_pct": -2.55,
        "ma10_gap_pct": -3.51,
        "drawdown_8d_pct": -4.51,
        "trend_penalty": 10.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "603501",
      "name": "豪威集团",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4716038714.0,
        "margin_buy": 86532136.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.58,
        "financing_pressure_score": 25.69,
        "incremental_financing_pressure_score": 32.11,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.64
      },
      "trap_score": 31.59
    },
    {
      "code": "603893",
      "name": "瑞芯微",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1980188370.0,
        "margin_buy": 126183798.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.84,
        "financing_pressure_score": 59.32,
        "incremental_financing_pressure_score": 74.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.72
      },
      "trap_score": 47.14
    },
    {
      "code": "688111",
      "name": "金山办公",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4767047787.0,
        "margin_buy": 91107100.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.14,
        "financing_pressure_score": 26.76,
        "incremental_financing_pressure_score": 33.45,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.12
      },
      "trap_score": 31.37
    },
    {
      "code": "688041",
      "name": "海光信息",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8658186412.0,
        "margin_buy": 225994571.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.82,
        "financing_pressure_score": 32.88,
        "incremental_financing_pressure_score": 41.1,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.56
      },
      "trap_score": 33.61
    },
    {
      "code": "688012",
      "name": "中微公司",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4824295263.0,
        "margin_buy": 207776272.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.38,
        "financing_pressure_score": 46.45,
        "incremental_financing_pressure_score": 58.07,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.04
      },
      "trap_score": 40.61
    },
    {
      "code": "688008",
      "name": "澜起科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 14515836047.0,
        "margin_buy": 379176610.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.43,
        "financing_pressure_score": 32.9,
        "incremental_financing_pressure_score": 41.12,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.44
      },
      "trap_score": 36.19
    },
    {
      "code": "688169",
      "name": "石头科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 826353659.0,
        "margin_buy": 47840887.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.19,
        "financing_pressure_score": 56.21,
        "incremental_financing_pressure_score": 70.26,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.52
      },
      "trap_score": 46.3
    },
    {
      "code": "688072",
      "name": "拓荆科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1710354032.0,
        "margin_buy": 49286145.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.5,
        "financing_pressure_score": 35.05,
        "incremental_financing_pressure_score": 43.82,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.0
      },
      "trap_score": 35.67
    },
    {
      "code": "688099",
      "name": "晶晨股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1031466235.0,
        "margin_buy": 34020614.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.66,
        "financing_pressure_score": 38.39,
        "incremental_financing_pressure_score": 47.98,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.28
      },
      "trap_score": 37.43
    },
    {
      "code": "688027",
      "name": "国盾量子",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1113511449.0,
        "margin_buy": 24062918.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.94,
        "financing_pressure_score": 29.29,
        "incremental_financing_pressure_score": 36.61,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.52
      },
      "trap_score": 33.78
    },
    {
      "code": "688608",
      "name": "恒玄科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1042028305.0,
        "margin_buy": 18626053.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.63,
        "financing_pressure_score": 25.02,
        "incremental_financing_pressure_score": 31.28,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.04
      },
      "trap_score": 32.97
    },
    {
      "code": "688018",
      "name": "乐鑫科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 669736935.0,
        "margin_buy": 37256914.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.3,
        "financing_pressure_score": 55.0,
        "incremental_financing_pressure_score": 68.75,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.4
      },
      "trap_score": 44.33
    },
    {
      "code": "688036",
      "name": "传音控股",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 938301137.0,
        "margin_buy": 25025279.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.82,
        "financing_pressure_score": 33.34,
        "incremental_financing_pressure_score": 41.67,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.56
      },
      "trap_score": 33.81
    },
    {
      "code": "688047",
      "name": "龙芯中科",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1172325281.0,
        "margin_buy": 17816083.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.03,
        "financing_pressure_score": 21.28,
        "incremental_financing_pressure_score": 26.6,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.24
      },
      "trap_score": 28.72
    },
    {
      "code": "688126",
      "name": "沪硅产业",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2556396623.0,
        "margin_buy": 37621310.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.49,
        "financing_pressure_score": 20.6,
        "incremental_financing_pressure_score": 25.75,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.92
      },
      "trap_score": 29.15
    },
    {
      "code": "688037",
      "name": "芯源微",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 423718503.0,
        "margin_buy": 26384030.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.81,
        "financing_pressure_score": 58.54,
        "incremental_financing_pressure_score": 73.18,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.48
      },
      "trap_score": 46.74
    },
    {
      "code": "688213",
      "name": "思特威-W",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 912674082.0,
        "margin_buy": 23942759.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.27,
        "financing_pressure_score": 32.99,
        "incremental_financing_pressure_score": 41.23,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.16
      },
      "trap_score": 34.38
    },
    {
      "code": "688120",
      "name": "华海清科",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1328470048.0,
        "margin_buy": 42869906.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.54,
        "financing_pressure_score": 37.82,
        "incremental_financing_pressure_score": 47.27,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.32
      },
      "trap_score": 36.98
    },
    {
      "code": "688981",
      "name": "中芯国际",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 10958445690.0,
        "margin_buy": 196703555.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.76,
        "financing_pressure_score": 25.13,
        "incremental_financing_pressure_score": 31.41,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.08
      },
      "trap_score": 31.62
    },
    {
      "code": "603296",
      "name": "华勤技术",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1348546815.0,
        "margin_buy": 49075382.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.6,
        "financing_pressure_score": 41.11,
        "incremental_financing_pressure_score": 51.39,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.8
      },
      "trap_score": 38.56
    },
    {
      "code": "300033",
      "name": "同花顺",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5819038084.0,
        "margin_buy": 195285886.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.68,
        "financing_pressure_score": 38.85,
        "incremental_financing_pressure_score": 48.56,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.44
      },
      "trap_score": 39.27
    },
    {
      "code": "300496",
      "name": "中科创达",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1702561769.0,
        "margin_buy": 31917458.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.48,
        "financing_pressure_score": 26.25,
        "incremental_financing_pressure_score": 32.81,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.84
      },
      "trap_score": 33.28
    },
    {
      "code": "300502",
      "name": "新易盛",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 19181957658.0,
        "margin_buy": 870633615.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.37,
        "financing_pressure_score": 48.31,
        "incremental_financing_pressure_score": 60.39,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.96
      },
      "trap_score": 44.63
    },
    {
      "code": "300223",
      "name": "君正股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3357544457.0,
        "margin_buy": 163807272.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.62,
        "financing_pressure_score": 51.03,
        "incremental_financing_pressure_score": 63.79,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 36.96,
        "turnover_z_score": -0.58
      },
      "trap_score": 47.86,
      "trend": {
        "available": true,
        "down_streak": 1,
        "return_3d_pct": -3.74,
        "return_5d_pct": 1.27,
        "return_8d_pct": -4.46,
        "ma5_gap_pct": -2.56,
        "ma10_gap_pct": -2.96,
        "drawdown_8d_pct": -3.75,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300383",
      "name": "光环新网",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1411010779.0,
        "margin_buy": 55740316.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.09,
        "financing_pressure_score": 43.6,
        "incremental_financing_pressure_score": 54.5,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.72
      },
      "trap_score": 40.46
    },
    {
      "code": "300458",
      "name": "全志科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1440579038.0,
        "margin_buy": 61344587.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.67,
        "financing_pressure_score": 46.07,
        "incremental_financing_pressure_score": 57.58,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.36
      },
      "trap_score": 44.1
    },
    {
      "code": "300474",
      "name": "景嘉微",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1240866575.0,
        "margin_buy": 12358584.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.48,
        "financing_pressure_score": 13.94,
        "incremental_financing_pressure_score": 17.43,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.84
      },
      "trap_score": 26.14
    },
    {
      "code": "300454",
      "name": "深信服",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1111419044.0,
        "margin_buy": 93588896.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.43,
        "financing_pressure_score": 69.26,
        "incremental_financing_pressure_score": 86.58,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.44
      },
      "trap_score": 54.16
    },
    {
      "code": "300212",
      "name": "*ST易录",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.23,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.84
      },
      "trap_score": 19.47
    },
    {
      "code": "300251",
      "name": "光线传媒",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1160207072.0,
        "margin_buy": 27581648.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.06,
        "financing_pressure_score": 31.02,
        "incremental_financing_pressure_score": 38.77,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.48
      },
      "trap_score": 33.16
    },
    {
      "code": "300229",
      "name": "拓尔思",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 905859515.0,
        "margin_buy": 12242522.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.54,
        "financing_pressure_score": 18.92,
        "incremental_financing_pressure_score": 23.65,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.32
      },
      "trap_score": 28.48
    },
    {
      "code": "300624",
      "name": "万兴科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 538357740.0,
        "margin_buy": 20015168.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.19,
        "financing_pressure_score": 41.74,
        "incremental_financing_pressure_score": 52.18,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 41.52,
        "turnover_z_score": -0.38
      },
      "trap_score": 44.59,
      "trend": {
        "available": true,
        "down_streak": 3,
        "return_3d_pct": -8.86,
        "return_5d_pct": -5.81,
        "return_8d_pct": -7.37,
        "ma5_gap_pct": -4.8,
        "ma10_gap_pct": -4.65,
        "drawdown_8d_pct": -8.86,
        "trend_penalty": 42.0,
        "trend_label": "短线趋势走弱"
      }
    },
    {
      "code": "300442",
      "name": "润泽科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3403070316.0,
        "margin_buy": 40763684.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.03,
        "financing_pressure_score": 16.77,
        "incremental_financing_pressure_score": 20.96,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.24
      },
      "trap_score": 26.69
    },
    {
      "code": "300803",
      "name": "指南针",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3424049968.0,
        "margin_buy": 166054741.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.4,
        "financing_pressure_score": 50.8,
        "incremental_financing_pressure_score": 63.5,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.2
      },
      "trap_score": 45.8
    },
    {
      "code": "300364",
      "name": "中文在线",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1051476518.0,
        "margin_buy": 86536798.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 10.51,
        "financing_pressure_score": 68.69,
        "incremental_financing_pressure_score": 85.86,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 84.08
      },
      "trap_score": 65.23
    },
    {
      "code": "300394",
      "name": "天孚通信",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7734483535.0,
        "margin_buy": 1690330294.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.18,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.44
      },
      "trap_score": 60.19
    },
    {
      "code": "300570",
      "name": "太辰光",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1573006554.0,
        "margin_buy": 303458494.0,
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
      "code": "300782",
      "name": "卓胜微",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1648110307.0,
        "margin_buy": 55613172.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.79,
        "financing_pressure_score": 38.99,
        "incremental_financing_pressure_score": 48.74,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.32
      },
      "trap_score": 37.91
    },
    {
      "code": "300548",
      "name": "长芯博创",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2136817758.0,
        "margin_buy": 144554988.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.23,
        "financing_pressure_score": 61.41,
        "incremental_financing_pressure_score": 76.77,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 41.84,
        "turnover_z_score": 0.02
      },
      "trap_score": 53.5,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": -1.68,
        "return_5d_pct": 7.26,
        "return_8d_pct": 1.15,
        "ma5_gap_pct": -2.25,
        "ma10_gap_pct": 0.03,
        "drawdown_8d_pct": -3.42,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300604",
      "name": "长川科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3045463522.0,
        "margin_buy": 179894007.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.4,
        "financing_pressure_score": 56.84,
        "incremental_financing_pressure_score": 71.05,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.2
      },
      "trap_score": 48.52
    },
    {
      "code": "300118",
      "name": "东方日升",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 535042728.0,
        "margin_buy": 4973287.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.39,
        "financing_pressure_score": 13.01,
        "incremental_financing_pressure_score": 16.27,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.12
      },
      "trap_score": 27.18
    },
    {
      "code": "300373",
      "name": "扬杰科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1493964707.0,
        "margin_buy": 52273061.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.67,
        "financing_pressure_score": 39.99,
        "incremental_financing_pressure_score": 49.99,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.36
      },
      "trap_score": 38.17
    },
    {
      "code": "301236",
      "name": "软通动力",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2084868108.0,
        "margin_buy": 31357985.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.93,
        "financing_pressure_score": 21.06,
        "incremental_financing_pressure_score": 26.32,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.44
      },
      "trap_score": 30.07
    },
    {
      "code": "301269",
      "name": "华大九天",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 946039486.0,
        "margin_buy": 16814940.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.95,
        "financing_pressure_score": 24.88,
        "incremental_financing_pressure_score": 31.1,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.6
      },
      "trap_score": 30.22
    },
    {
      "code": "301312",
      "name": "智立方",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 281309826.0,
        "margin_buy": 31044350.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.89,
        "financing_pressure_score": 77.11,
        "incremental_financing_pressure_score": 96.38,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 55.12
      },
      "trap_score": 63.22
    },
    {
      "code": "301308",
      "name": "江波龙",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6546720529.0,
        "margin_buy": 207047035.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.41,
        "financing_pressure_score": 37.3,
        "incremental_financing_pressure_score": 46.63,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.28
      },
      "trap_score": 39.74
    },
    {
      "code": "301095",
      "name": "广立微",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 485317569.0,
        "margin_buy": 14783140.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.41,
        "financing_pressure_score": 36.37,
        "incremental_financing_pressure_score": 45.46,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.28
      },
      "trap_score": 37.72
    },
    {
      "code": "301171",
      "name": "易点天下",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1315652445.0,
        "margin_buy": 137357459.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 11.23,
        "financing_pressure_score": 75.32,
        "incremental_financing_pressure_score": 94.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 89.84
      },
      "trap_score": 69.36
    },
    {
      "code": "301165",
      "name": "锐捷网络",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 874379557.0,
        "margin_buy": 61045385.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.05,
        "financing_pressure_score": 62.57,
        "incremental_financing_pressure_score": 78.21,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.4
      },
      "trap_score": 47.34
    },
    {
      "code": "300059",
      "name": "东方财富",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 23013523428.0,
        "margin_buy": 325615086.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.78,
        "financing_pressure_score": 19.81,
        "incremental_financing_pressure_score": 24.76,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.24
      },
      "trap_score": 29.26
    },
    {
      "code": "002371",
      "name": "北方华创",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2639471235.0,
        "margin_buy": 120709621.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.91,
        "financing_pressure_score": 48.59,
        "incremental_financing_pressure_score": 60.73,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.28
      },
      "trap_score": 40.82
    },
    {
      "code": "002475",
      "name": "立讯精密",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5820230775.0,
        "margin_buy": 227510735.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.19,
        "financing_pressure_score": 43.27,
        "incremental_financing_pressure_score": 54.09,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.52
      },
      "trap_score": 38.88
    },
    {
      "code": "002463",
      "name": "沪电股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4683515449.0,
        "margin_buy": 346354290.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.29,
        "financing_pressure_score": 64.77,
        "incremental_financing_pressure_score": 80.97,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.32
      },
      "trap_score": 50.31
    },
    {
      "code": "002555",
      "name": "三七互娱",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1682612467.0,
        "margin_buy": 36029178.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.09,
        "financing_pressure_score": 29.13,
        "incremental_financing_pressure_score": 36.41,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.72
      },
      "trap_score": 33.95
    },
    {
      "code": "002236",
      "name": "大华股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1436868697.0,
        "margin_buy": 28313018.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.0,
        "financing_pressure_score": 27.59,
        "incremental_financing_pressure_score": 34.48,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.0
      },
      "trap_score": 31.52
    },
    {
      "code": "002241",
      "name": "歌尔股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3861354069.0,
        "margin_buy": 82446498.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.61,
        "financing_pressure_score": 29.08,
        "incremental_financing_pressure_score": 36.35,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.88
      },
      "trap_score": 33.16
    },
    {
      "code": "600050",
      "name": "中国联通",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2641962203.0,
        "margin_buy": 31004848.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.55,
        "financing_pressure_score": 16.43,
        "incremental_financing_pressure_score": 20.54,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 4.4
      },
      "trap_score": 25.77
    },
    {
      "code": "002859",
      "name": "洁美科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 831574154.0,
        "margin_buy": 36165868.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.68,
        "financing_pressure_score": 46.79,
        "incremental_financing_pressure_score": 58.49,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 45.44,
        "turnover_z_score": 1.82
      },
      "trap_score": 47.64,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 3.58,
        "return_5d_pct": 4.32,
        "return_8d_pct": 1.38,
        "ma5_gap_pct": 2.69,
        "ma10_gap_pct": 1.28,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002920",
      "name": "德赛西威",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1417442443.0,
        "margin_buy": 42142049.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.87,
        "financing_pressure_score": 35.78,
        "incremental_financing_pressure_score": 44.73,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.96
      },
      "trap_score": 34.99
    },
    {
      "code": "002456",
      "name": "欧菲光",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1471773873.0,
        "margin_buy": 11615115.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.83,
        "financing_pressure_score": 11.05,
        "incremental_financing_pressure_score": 13.81,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.64
      },
      "trap_score": 25.4
    },
    {
      "code": "002156",
      "name": "通富微电",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4343281592.0,
        "margin_buy": 194526128.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.63,
        "financing_pressure_score": 47.83,
        "incremental_financing_pressure_score": 59.79,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.04
      },
      "trap_score": 44.83
    },
    {
      "code": "002261",
      "name": "拓维信息",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1418780216.0,
        "margin_buy": 25943639.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.56,
        "financing_pressure_score": 25.6,
        "incremental_financing_pressure_score": 32.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.48
      },
      "trap_score": 33.12
    },
    {
      "code": "002273",
      "name": "水晶光电",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2737507172.0,
        "margin_buy": 31724940.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.19,
        "financing_pressure_score": 16.22,
        "incremental_financing_pressure_score": 20.28,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.52
      },
      "trap_score": 28.3
    },
    {
      "code": "002281",
      "name": "光迅科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3961789012.0,
        "margin_buy": 316561689.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.21,
        "financing_pressure_score": 67.95,
        "incremental_financing_pressure_score": 84.94,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.68
      },
      "trap_score": 54.81
    },
    {
      "code": "002415",
      "name": "海康威视",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4165632399.0,
        "margin_buy": 56514126.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.48,
        "financing_pressure_score": 18.99,
        "incremental_financing_pressure_score": 23.74,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 3.84
      },
      "trap_score": 26.81
    },
    {
      "code": "002916",
      "name": "深南电路",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1588252434.0,
        "margin_buy": 265897440.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.35,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.8
      },
      "trap_score": 55.66
    },
    {
      "code": "002517",
      "name": "恺英网络",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1680947720.0,
        "margin_buy": 56654724.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.71,
        "financing_pressure_score": 38.96,
        "incremental_financing_pressure_score": 48.7,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.68
      },
      "trap_score": 40.97
    },
    {
      "code": "002049",
      "name": "紫光国微",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4173353039.0,
        "margin_buy": 50519507.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.79,
        "financing_pressure_score": 16.95,
        "incremental_financing_pressure_score": 21.18,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.32
      },
      "trap_score": 27.99
    },
    {
      "code": "002138",
      "name": "顺络电子",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1329581061.0,
        "margin_buy": 77933255.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.97,
        "financing_pressure_score": 56.59,
        "incremental_financing_pressure_score": 70.74,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.76
      },
      "trap_score": 49.32
    },
    {
      "code": "002185",
      "name": "华天科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2254025653.0,
        "margin_buy": 202425327.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.13,
        "financing_pressure_score": 70.94,
        "incremental_financing_pressure_score": 88.68,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 49.04,
        "turnover_z_score": 0.07
      },
      "trap_score": 59.23,
      "trend": {
        "available": true,
        "down_streak": 1,
        "return_3d_pct": 1.44,
        "return_5d_pct": 4.05,
        "return_8d_pct": -1.94,
        "ma5_gap_pct": 0.25,
        "ma10_gap_pct": -0.01,
        "drawdown_8d_pct": -1.1,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "000063",
      "name": "中兴通讯",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 9550422442.0,
        "margin_buy": 157645354.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.37,
        "financing_pressure_score": 23.11,
        "incremental_financing_pressure_score": 28.89,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.96
      },
      "trap_score": 30.09
    },
    {
      "code": "000977",
      "name": "浪潮信息",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4704298292.0,
        "margin_buy": 341286871.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.84,
        "financing_pressure_score": 64.03,
        "incremental_financing_pressure_score": 80.03,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 38.72
      },
      "trap_score": 54.06
    },
    {
      "code": "000938",
      "name": "紫光股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4764057355.0,
        "margin_buy": 274334788.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.31,
        "financing_pressure_score": 56.04,
        "incremental_financing_pressure_score": 70.06,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 34.48,
        "turnover_z_score": -0.84
      },
      "trap_score": 49.61,
      "trend": {
        "available": true,
        "down_streak": 4,
        "return_3d_pct": -3.1,
        "return_5d_pct": -6.89,
        "return_8d_pct": -14.3,
        "ma5_gap_pct": -2.71,
        "ma10_gap_pct": -8.12,
        "drawdown_8d_pct": -13.87,
        "trend_penalty": 60.0,
        "trend_label": "短线趋势走弱"
      }
    },
    {
      "code": "000988",
      "name": "华工科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7594181882.0,
        "margin_buy": 777440310.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.98,
        "financing_pressure_score": 74.71,
        "incremental_financing_pressure_score": 93.39,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 47.84
      },
      "trap_score": 60.69
    },
    {
      "code": "000034",
      "name": "神州数码",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1724556116.0,
        "margin_buy": 17337948.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.78,
        "financing_pressure_score": 14.07,
        "incremental_financing_pressure_score": 17.59,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.24
      },
      "trap_score": 26.68
    },
    {
      "code": "000066",
      "name": "中国长城",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1803104149.0,
        "margin_buy": 54257927.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.7,
        "financing_pressure_score": 36.07,
        "incremental_financing_pressure_score": 45.09,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.6
      },
      "trap_score": 36.45
    },
    {
      "code": "000725",
      "name": "京东方Ａ",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11203196808.0,
        "margin_buy": 566307824.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.99,
        "financing_pressure_score": 52.29,
        "incremental_financing_pressure_score": 65.37,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.92
      },
      "trap_score": 45.81
    },
    {
      "code": "000100",
      "name": "TCL科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4611719240.0,
        "margin_buy": 135200185.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.08,
        "financing_pressure_score": 35.45,
        "incremental_financing_pressure_score": 44.32,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.64
      },
      "trap_score": 36.78
    },
    {
      "code": "600584",
      "name": "长电科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6190956894.0,
        "margin_buy": 290332658.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.72,
        "financing_pressure_score": 49.52,
        "incremental_financing_pressure_score": 61.9,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.76
      },
      "trap_score": 45.74
    },
    {
      "code": "600570",
      "name": "恒生电子",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2558373886.0,
        "margin_buy": 22568115.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.01,
        "financing_pressure_score": 12.35,
        "incremental_financing_pressure_score": 15.44,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.08
      },
      "trap_score": 24.67
    },
    {
      "code": "600845",
      "name": "宝信软件",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 600399021.0,
        "margin_buy": 7085159.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.59,
        "financing_pressure_score": 16.52,
        "incremental_financing_pressure_score": 20.65,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 4.72
      },
      "trap_score": 25.88
    },
    {
      "code": "600536",
      "name": "中国软件",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1541808928.0,
        "margin_buy": 27559672.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.59,
        "financing_pressure_score": 25.02,
        "incremental_financing_pressure_score": 31.28,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.72
      },
      "trap_score": 31.3
    },
    {
      "code": "600588",
      "name": "用友网络",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1414672275.0,
        "margin_buy": 22116299.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.04,
        "financing_pressure_score": 21.89,
        "incremental_financing_pressure_score": 27.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.32
      },
      "trap_score": 29.01
    },
    {
      "code": "600602",
      "name": "云赛智联",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 744475629.0,
        "margin_buy": 17047261.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.67,
        "financing_pressure_score": 30.32,
        "incremental_financing_pressure_score": 37.9,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.36
      },
      "trap_score": 33.82
    },
    {
      "code": "600171",
      "name": "上海贝岭",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 835475013.0,
        "margin_buy": 5787736.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.29,
        "financing_pressure_score": 9.7,
        "incremental_financing_pressure_score": 12.12,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.32
      },
      "trap_score": 23.93
    },
    {
      "code": "600498",
      "name": "烽火通信",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2296800701.0,
        "margin_buy": 214583492.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.15,
        "financing_pressure_score": 72.03,
        "incremental_financing_pressure_score": 90.04,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 65.2
      },
      "trap_score": 62.95
    },
    {
      "code": "600183",
      "name": "生益科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4949352934.0,
        "margin_buy": 705008629.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.3,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.4
      },
      "trap_score": 58.78
    },
    {
      "code": "600460",
      "name": "士兰微",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2219630742.0,
        "margin_buy": 113948082.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.7,
        "financing_pressure_score": 52.71,
        "incremental_financing_pressure_score": 65.89,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.6
      },
      "trap_score": 47.14
    },
    {
      "code": "600703",
      "name": "三安光电",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4106575808.0,
        "margin_buy": 55759935.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.81,
        "financing_pressure_score": 19.01,
        "incremental_financing_pressure_score": 23.76,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.48
      },
      "trap_score": 28.95
    },
    {
      "code": "601138",
      "name": "工业富联",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7337953594.0,
        "margin_buy": 235296439.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.38,
        "financing_pressure_score": 37.65,
        "incremental_financing_pressure_score": 47.07,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 3.04
      },
      "trap_score": 35.05
    },
    {
      "code": "601360",
      "name": "三六零",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2046008931.0,
        "margin_buy": 60708593.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.29,
        "financing_pressure_score": 35.74,
        "incremental_financing_pressure_score": 44.67,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.32
      },
      "trap_score": 35.65
    },
    {
      "code": "603000",
      "name": "人民网",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 453186334.0,
        "margin_buy": 19015505.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.71,
        "financing_pressure_score": 45.57,
        "incremental_financing_pressure_score": 56.96,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.68
      },
      "trap_score": 40.74
    },
    {
      "code": "300054",
      "name": "鼎龙股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2079718446.0,
        "margin_buy": 76011209.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.18,
        "financing_pressure_score": 41.24,
        "incremental_financing_pressure_score": 51.55,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.44
      },
      "trap_score": 39.55
    },
    {
      "code": "002192",
      "name": "融捷股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1301847548.0,
        "margin_buy": 50652931.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.98,
        "financing_pressure_score": 43.13,
        "incremental_financing_pressure_score": 53.91,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 47.84,
        "turnover_z_score": -0.46
      },
      "trap_score": 46.48,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": -6.04,
        "return_5d_pct": -6.86,
        "return_8d_pct": -15.0,
        "ma5_gap_pct": -4.86,
        "ma10_gap_pct": -9.0,
        "drawdown_8d_pct": -12.0,
        "trend_penalty": 62.0,
        "trend_label": "短线趋势走弱"
      }
    },
    {
      "code": "002466",
      "name": "天齐锂业",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3263577074.0,
        "margin_buy": 68219882.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.67,
        "financing_pressure_score": 28.72,
        "incremental_financing_pressure_score": 35.9,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.36
      },
      "trap_score": 34.7
    },
    {
      "code": "002837",
      "name": "英维克",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3822607482.0,
        "margin_buy": 142608186.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.31,
        "financing_pressure_score": 41.85,
        "incremental_financing_pressure_score": 52.31,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.48
      },
      "trap_score": 41.63
    },
    {
      "code": "601869",
      "name": "长飞光纤",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2502885047.0,
        "margin_buy": 405295102.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.62,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 36.96
      },
      "trap_score": 60.89
    },
    {
      "code": "002938",
      "name": "鹏鼎控股",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1853170565.0,
        "margin_buy": 608404140.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.08,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.64
      },
      "trap_score": 55.23
    },
    {
      "code": "000878",
      "name": "云南铜业",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1905831689.0,
        "margin_buy": 106834434.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.58,
        "financing_pressure_score": 55.23,
        "incremental_financing_pressure_score": 69.04,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 44.64,
        "turnover_z_score": 1.92
      },
      "trap_score": 51.28,
      "trend": {
        "available": true,
        "down_streak": 1,
        "return_3d_pct": -6.22,
        "return_5d_pct": -0.98,
        "return_8d_pct": -2.83,
        "ma5_gap_pct": -4.85,
        "ma10_gap_pct": -3.42,
        "drawdown_8d_pct": -8.18,
        "trend_penalty": 18.0,
        "trend_label": "短线趋势走弱"
      }
    },
    {
      "code": "002155",
      "name": "湖南黄金",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2214020123.0,
        "margin_buy": 247480775.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.36,
        "financing_pressure_score": 77.53,
        "incremental_financing_pressure_score": 96.92,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 42.88
      },
      "trap_score": 60.96
    },
    {
      "code": "600378",
      "name": "昊华科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1525211031.0,
        "margin_buy": 334355829.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.24,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 49.92
      },
      "trap_score": 63.48
    },
    {
      "code": "300418",
      "name": "昆仑万维",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3142983073.0,
        "margin_buy": 114435107.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.84,
        "financing_pressure_score": 41.13,
        "incremental_financing_pressure_score": 51.41,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.72
      },
      "trap_score": 42.15
    },
    {
      "code": "002218",
      "name": "拓日新能",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 97985596.0,
        "margin_buy": 9979521.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 10.78,
        "financing_pressure_score": 74.55,
        "incremental_financing_pressure_score": 93.19,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 86.24
      },
      "trap_score": 68.3
    },
    {
      "code": "300617",
      "name": "安靠智电",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.47,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.76
      },
      "trap_score": 21.45
    },
    {
      "code": "300738",
      "name": "奥飞数据",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1431009969.0,
        "margin_buy": 37139830.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.56,
        "financing_pressure_score": 32.76,
        "incremental_financing_pressure_score": 40.95,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.48
      },
      "trap_score": 36.34
    },
    {
      "code": "002126",
      "name": "银轮股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 537885580.0,
        "margin_buy": 23750412.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.77,
        "financing_pressure_score": 47.32,
        "incremental_financing_pressure_score": 59.16,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.16
      },
      "trap_score": 41.63
    },
    {
      "code": "002050",
      "name": "三花智控",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5095317918.0,
        "margin_buy": 78775315.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.1,
        "financing_pressure_score": 21.64,
        "incremental_financing_pressure_score": 27.06,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.8
      },
      "trap_score": 29.0
    },
    {
      "code": "603075",
      "name": "热威股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 42843770.0,
        "margin_buy": 7016909.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 11.75,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 94.0
      },
      "trap_score": 72.3
    },
    {
      "code": "603667",
      "name": "五洲新春",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1076809685.0,
        "margin_buy": 30815796.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.0,
        "financing_pressure_score": 34.89,
        "incremental_financing_pressure_score": 43.62,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.0
      },
      "trap_score": 38.0
    },
    {
      "code": "605020",
      "name": "永和股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 439179083.0,
        "margin_buy": 19153449.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.94,
        "financing_pressure_score": 46.89,
        "incremental_financing_pressure_score": 58.61,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.52
      },
      "trap_score": 41.7
    },
    {
      "code": "600160",
      "name": "巨化股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4208113006.0,
        "margin_buy": 110322285.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.28,
        "financing_pressure_score": 32.97,
        "incremental_financing_pressure_score": 41.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.24
      },
      "trap_score": 34.38
    },
    {
      "code": "603379",
      "name": "三美股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 786941743.0,
        "margin_buy": 51509672.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.52,
        "financing_pressure_score": 60.24,
        "incremental_financing_pressure_score": 75.3,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.16
      },
      "trap_score": 47.04
    },
    {
      "code": "600988",
      "name": "赤峰黄金",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1377664955.0,
        "margin_buy": 92846911.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.12,
        "financing_pressure_score": 61.28,
        "incremental_financing_pressure_score": 76.6,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.96
      },
      "trap_score": 50.07
    },
    {
      "code": "000636",
      "name": "风华高科",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3313896019.0,
        "margin_buy": 385809787.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 16.22,
        "financing_pressure_score": 78.93,
        "incremental_financing_pressure_score": 98.66,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.02
    },
    {
      "code": "688825",
      "name": "长鑫科技",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11086501483.0,
        "margin_buy": 798733486.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.63,
        "financing_pressure_score": 63.76,
        "incremental_financing_pressure_score": 79.7,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 37.04
      },
      "trap_score": 53.6
    },
    {
      "code": "600105",
      "name": "永鼎股份",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2104073979.0,
        "margin_buy": 254660044.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 14.13,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    },
    {
      "code": "300285",
      "name": "国瓷材料",
      "margin_date": "20260910",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3957911675.0,
        "margin_buy": 282368703.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 12.05,
        "financing_pressure_score": 63.38,
        "incremental_financing_pressure_score": 79.23,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 96.4
      },
      "trap_score": 65.3
    }
  ]
};
