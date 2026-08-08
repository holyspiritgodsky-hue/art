window.__QUANT_DATA__ = {
  "generated_at": "2026-08-08T17:51:17+08:00",
  "data_freshness": {
    "warning_target_date": "2026-08-10",
    "spot_snapshot_at": "2026-08-08T17:51:17+08:00",
    "margin_data_as_of": "20260807",
    "margin_data_dates_by_market": {
      "szse": "20260806",
      "sse": "20260807"
    },
    "market_phase": "weekend"
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
    "total_rows": 5539,
    "turnover_rate_available_rows": 5539,
    "turnover_rate_missing_rows": 0,
    "turnover_rate_missing_ratio": 0.0,
    "float_market_cap_available_rows": 0,
    "float_market_cap_missing_rows": 5539,
    "float_market_cap_missing_ratio": 1.0
  },
  "daily_warning": {
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
      "status": "待复盘",
      "note": ""
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
  "warning_history": [
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
        "status": "待复盘",
        "note": ""
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
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 82,
        "margin_balance": 16433422263.0,
        "margin_buy": 2666088320.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.39,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 67.12,
        "turnover_z_score": 1.98
      },
      "trap_score": 78.12,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 38.85,
        "return_5d_pct": 47.16,
        "return_8d_pct": 33.31,
        "ma5_gap_pct": 21.01,
        "ma10_gap_pct": 28.59,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002384",
      "name": "东山精密",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 68,
        "margin_balance": 10492510758.0,
        "margin_buy": 1581314612.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.38,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 59.04,
        "turnover_z_score": -0.21
      },
      "trap_score": 71.61,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 9.03,
        "return_5d_pct": 13.87,
        "return_8d_pct": 2.39,
        "ma5_gap_pct": 6.86,
        "ma10_gap_pct": 6.74,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300308",
      "name": "中际旭创",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 88,
        "margin_balance": 32537270684.0,
        "margin_buy": 5951971677.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.15,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 41.2,
        "turnover_z_score": 0.95
      },
      "trap_score": 75.04,
      "trend": {
        "available": true,
        "down_streak": 1,
        "return_3d_pct": -9.99,
        "return_5d_pct": 1.98,
        "return_8d_pct": 1.31,
        "ma5_gap_pct": -3.11,
        "ma10_gap_pct": -2.65,
        "drawdown_8d_pct": -9.99,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002230",
      "name": "科大讯飞",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5457326394.0,
        "margin_buy": 185708469.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.39,
        "financing_pressure_score": 39.22,
        "incremental_financing_pressure_score": 49.03,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.12
      },
      "trap_score": 38.97
    },
    {
      "code": "688256",
      "name": "寒武纪",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 21047262245.0,
        "margin_buy": 2461594285.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.54,
        "financing_pressure_score": 79.09,
        "incremental_financing_pressure_score": 98.86,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.32
      },
      "trap_score": 57.15
    },
    {
      "code": "603019",
      "name": "中科曙光",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8833341999.0,
        "margin_buy": 542686891.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.47,
        "financing_pressure_score": 58.1,
        "incremental_financing_pressure_score": 72.62,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.76
      },
      "trap_score": 49.2
    },
    {
      "code": "603160",
      "name": "汇顶科技",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 994652609.0,
        "margin_buy": 24780940.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.01,
        "financing_pressure_score": 31.93,
        "incremental_financing_pressure_score": 39.91,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.08
      },
      "trap_score": 33.48
    },
    {
      "code": "603986",
      "name": "兆易创新",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 18084452070.0,
        "margin_buy": 4320866941.0,
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
      "code": "603501",
      "name": "豪威集团",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4559943551.0,
        "margin_buy": 187875881.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.45,
        "financing_pressure_score": 44.96,
        "incremental_financing_pressure_score": 56.2,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.6
      },
      "trap_score": 40.05
    },
    {
      "code": "603893",
      "name": "瑞芯微",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2102753931.0,
        "margin_buy": 399384094.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.81,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.48
      },
      "trap_score": 59.6
    },
    {
      "code": "688111",
      "name": "金山办公",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4911551349.0,
        "margin_buy": 486350499.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.07,
        "financing_pressure_score": 73.71,
        "incremental_financing_pressure_score": 92.13,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.56
      },
      "trap_score": 55.58
    },
    {
      "code": "688041",
      "name": "海光信息",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8268670185.0,
        "margin_buy": 436465924.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.83,
        "financing_pressure_score": 53.49,
        "incremental_financing_pressure_score": 66.86,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.64
      },
      "trap_score": 42.9
    },
    {
      "code": "688012",
      "name": "中微公司",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4654951468.0,
        "margin_buy": 635597267.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.41,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.28
      },
      "trap_score": 57.36
    },
    {
      "code": "688008",
      "name": "澜起科技",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 15033387644.0,
        "margin_buy": 1617767441.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.55,
        "financing_pressure_score": 76.28,
        "incremental_financing_pressure_score": 95.35,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 36.4
      },
      "trap_score": 59.11
    },
    {
      "code": "688169",
      "name": "石头科技",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1075213034.0,
        "margin_buy": 76114350.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.41,
        "financing_pressure_score": 63.09,
        "incremental_financing_pressure_score": 78.86,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.28
      },
      "trap_score": 49.75
    },
    {
      "code": "688072",
      "name": "拓荆科技",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1884199598.0,
        "margin_buy": 441453676.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.55,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.4
      },
      "trap_score": 57.58
    },
    {
      "code": "688099",
      "name": "晶晨股份",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1122677687.0,
        "margin_buy": 210267666.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.35,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 34.8
      },
      "trap_score": 60.46
    },
    {
      "code": "688027",
      "name": "国盾量子",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1243443901.0,
        "margin_buy": 54161198.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.2,
        "financing_pressure_score": 46.85,
        "incremental_financing_pressure_score": 58.56,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.6
      },
      "trap_score": 42.1
    },
    {
      "code": "688608",
      "name": "恒玄科技",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1086772894.0,
        "margin_buy": 90632229.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.14,
        "financing_pressure_score": 69.02,
        "incremental_financing_pressure_score": 86.27,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.12
      },
      "trap_score": 53.58
    },
    {
      "code": "688018",
      "name": "乐鑫科技",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 686598430.0,
        "margin_buy": 47061478.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.27,
        "financing_pressure_score": 61.89,
        "incremental_financing_pressure_score": 77.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.16
      },
      "trap_score": 48.98
    },
    {
      "code": "688036",
      "name": "传音控股",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1040341405.0,
        "margin_buy": 118635388.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.53,
        "financing_pressure_score": 78.21,
        "incremental_financing_pressure_score": 97.76,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.24
      },
      "trap_score": 55.14
    },
    {
      "code": "688047",
      "name": "龙芯中科",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1263879087.0,
        "margin_buy": 43793777.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.17,
        "financing_pressure_score": 39.72,
        "incremental_financing_pressure_score": 49.65,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.36
      },
      "trap_score": 37.25
    },
    {
      "code": "688126",
      "name": "沪硅产业",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2875144716.0,
        "margin_buy": 421744065.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.79,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 38.32
      },
      "trap_score": 61.16
    },
    {
      "code": "688037",
      "name": "芯源微",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 676544434.0,
        "margin_buy": 93886006.0,
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
      "code": "688213",
      "name": "思特威-W",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1345646559.0,
        "margin_buy": 67739613.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.1,
        "financing_pressure_score": 52.18,
        "incremental_financing_pressure_score": 65.23,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.8
      },
      "trap_score": 45.94
    },
    {
      "code": "688120",
      "name": "华海清科",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1560256363.0,
        "margin_buy": 221442012.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.0,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.0
      },
      "trap_score": 58.3
    },
    {
      "code": "688981",
      "name": "中芯国际",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11323491374.0,
        "margin_buy": 1144488414.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.01,
        "financing_pressure_score": 74.32,
        "incremental_financing_pressure_score": 92.9,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.08
      },
      "trap_score": 55.76
    },
    {
      "code": "603296",
      "name": "华勤技术",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1051849745.0,
        "margin_buy": 138984002.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.98,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.84
      },
      "trap_score": 58.27
    },
    {
      "code": "300033",
      "name": "同花顺",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5709545831.0,
        "margin_buy": 422805159.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.21,
        "financing_pressure_score": 64.83,
        "incremental_financing_pressure_score": 81.03,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.68
      },
      "trap_score": 51.81
    },
    {
      "code": "300496",
      "name": "中科创达",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1752715301.0,
        "margin_buy": 127519618.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.73,
        "financing_pressure_score": 64.14,
        "incremental_financing_pressure_score": 80.17,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 37.84
      },
      "trap_score": 53.93
    },
    {
      "code": "300502",
      "name": "新易盛",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 19355463927.0,
        "margin_buy": 2464995680.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.77,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 38.16
      },
      "trap_score": 61.13
    },
    {
      "code": "300223",
      "name": "北京君正",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3257579348.0,
        "margin_buy": 555528965.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 11.67,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 93.36
      },
      "trap_score": 72.17
    },
    {
      "code": "300383",
      "name": "光环新网",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1482102116.0,
        "margin_buy": 105825385.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.49,
        "financing_pressure_score": 63.41,
        "incremental_financing_pressure_score": 79.27,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 35.92
      },
      "trap_score": 53.22
    },
    {
      "code": "300458",
      "name": "全志科技",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1546903268.0,
        "margin_buy": 262025652.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.9,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 63.2
      },
      "trap_score": 66.14
    },
    {
      "code": "300474",
      "name": "景嘉微",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1288119046.0,
        "margin_buy": 47773795.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.13,
        "financing_pressure_score": 41.67,
        "incremental_financing_pressure_score": 52.09,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.04
      },
      "trap_score": 39.66
    },
    {
      "code": "300454",
      "name": "深信服",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1439472000.0,
        "margin_buy": 366301338.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.99,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 79.92
      },
      "trap_score": 69.48
    },
    {
      "code": "300212",
      "name": "*ST易录",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.16,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.28
      },
      "trap_score": 20.96
    },
    {
      "code": "300251",
      "name": "光线传媒",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1256055554.0,
        "margin_buy": 83807579.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.76,
        "financing_pressure_score": 60.92,
        "incremental_financing_pressure_score": 76.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.08
      },
      "trap_score": 47.73
    },
    {
      "code": "300229",
      "name": "拓尔思",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 978670323.0,
        "margin_buy": 52257916.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.12,
        "financing_pressure_score": 53.81,
        "incremental_financing_pressure_score": 67.26,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 40.96,
        "turnover_z_score": 0.73
      },
      "trap_score": 49.91,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": -2.66,
        "return_5d_pct": 9.62,
        "return_8d_pct": 21.95,
        "ma5_gap_pct": -0.31,
        "ma10_gap_pct": 8.29,
        "drawdown_8d_pct": -4.71,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300624",
      "name": "万兴科技",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 567874925.0,
        "margin_buy": 58634437.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.62,
        "financing_pressure_score": 74.98,
        "incremental_financing_pressure_score": 93.72,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 68.96
      },
      "trap_score": 65.03
    },
    {
      "code": "300442",
      "name": "润泽科技",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3455030235.0,
        "margin_buy": 220073765.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.35,
        "financing_pressure_score": 59.3,
        "incremental_financing_pressure_score": 74.13,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.8
      },
      "trap_score": 47.95
    },
    {
      "code": "300803",
      "name": "指南针",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3331283048.0,
        "margin_buy": 162458467.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.64,
        "financing_pressure_score": 51.01,
        "incremental_financing_pressure_score": 63.77,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.12
      },
      "trap_score": 44.68
    },
    {
      "code": "300364",
      "name": "中文在线",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 990905692.0,
        "margin_buy": 168526781.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 16.44,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    },
    {
      "code": "300394",
      "name": "天孚通信",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6762760446.0,
        "margin_buy": 1420738622.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.6,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 44.8,
        "turnover_z_score": 0.68
      },
      "trap_score": 62.46,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 8.81,
        "return_5d_pct": 34.89,
        "return_8d_pct": 27.05,
        "ma5_gap_pct": 8.27,
        "ma10_gap_pct": 17.14,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300570",
      "name": "太辰光",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1386444110.0,
        "margin_buy": 319382868.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 13.94,
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
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1880030078.0,
        "margin_buy": 118769112.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.64,
        "financing_pressure_score": 59.03,
        "incremental_financing_pressure_score": 73.78,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.12
      },
      "trap_score": 49.89
    },
    {
      "code": "300548",
      "name": "长芯博创",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2146060044.0,
        "margin_buy": 241093645.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.04,
        "financing_pressure_score": 77.7,
        "incremental_financing_pressure_score": 97.13,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 56.32,
        "turnover_z_score": 0.58
      },
      "trap_score": 63.73,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 10.93,
        "return_5d_pct": 26.01,
        "return_8d_pct": 19.89,
        "ma5_gap_pct": 9.54,
        "ma10_gap_pct": 15.24,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300604",
      "name": "长川科技",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2717833432.0,
        "margin_buy": 553018705.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.51,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 36.08
      },
      "trap_score": 60.72
    },
    {
      "code": "300118",
      "name": "东方日升",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 596009003.0,
        "margin_buy": 18149460.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.05,
        "financing_pressure_score": 36.36,
        "incremental_financing_pressure_score": 45.45,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.4
      },
      "trap_score": 40.34
    },
    {
      "code": "300373",
      "name": "扬杰科技",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1469766692.0,
        "margin_buy": 143120877.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.19,
        "financing_pressure_score": 73.21,
        "incremental_financing_pressure_score": 91.52,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.52
      },
      "trap_score": 55.55
    },
    {
      "code": "301236",
      "name": "软通动力",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2081568130.0,
        "margin_buy": 211310730.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.7,
        "financing_pressure_score": 74.45,
        "incremental_financing_pressure_score": 93.07,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 37.6
      },
      "trap_score": 58.52
    },
    {
      "code": "301269",
      "name": "华大九天",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1029950198.0,
        "margin_buy": 67323751.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.66,
        "financing_pressure_score": 60.2,
        "incremental_financing_pressure_score": 75.24,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.28
      },
      "trap_score": 47.25
    },
    {
      "code": "301312",
      "name": "智立方",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 195864798.0,
        "margin_buy": 38381441.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.36,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 74.88
      },
      "trap_score": 68.48
    },
    {
      "code": "301308",
      "name": "江波龙",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5962623480.0,
        "margin_buy": 733980599.0,
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
      "code": "301095",
      "name": "广立微",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 479571635.0,
        "margin_buy": 38513996.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.44,
        "financing_pressure_score": 68.09,
        "incremental_financing_pressure_score": 85.12,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 35.52
      },
      "trap_score": 55.24
    },
    {
      "code": "301171",
      "name": "易点天下",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1363479402.0,
        "margin_buy": 360566215.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 24.58,
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
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 827188095.0,
        "margin_buy": 455307835.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.8,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.4
      },
      "trap_score": 57.98
    },
    {
      "code": "300059",
      "name": "东方财富",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 23352484694.0,
        "margin_buy": 821139002.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.89,
        "financing_pressure_score": 40.13,
        "incremental_financing_pressure_score": 50.16,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.12
      },
      "trap_score": 38.58
    },
    {
      "code": "002371",
      "name": "北方华创",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3276848168.0,
        "margin_buy": 378952781.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.18,
        "financing_pressure_score": 78.69,
        "incremental_financing_pressure_score": 98.37,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.44
      },
      "trap_score": 54.8
    },
    {
      "code": "002475",
      "name": "立讯精密",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6311791652.0,
        "margin_buy": 799620083.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.22,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.76
      },
      "trap_score": 57.05
    },
    {
      "code": "002463",
      "name": "沪电股份",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4854213441.0,
        "margin_buy": 695737026.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.15,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.2
      },
      "trap_score": 60.14
    },
    {
      "code": "002555",
      "name": "三七互娱",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1735581675.0,
        "margin_buy": 110774007.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.48,
        "financing_pressure_score": 59.37,
        "incremental_financing_pressure_score": 74.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.84
      },
      "trap_score": 48.18
    },
    {
      "code": "002236",
      "name": "大华股份",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1417282025.0,
        "margin_buy": 62877764.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.42,
        "financing_pressure_score": 47.49,
        "incremental_financing_pressure_score": 59.37,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.36
      },
      "trap_score": 41.14
    },
    {
      "code": "002241",
      "name": "歌尔股份",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4164142898.0,
        "margin_buy": 236933547.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.66,
        "financing_pressure_score": 55.68,
        "incremental_financing_pressure_score": 69.6,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.28
      },
      "trap_score": 46.81
    },
    {
      "code": "600050",
      "name": "中国联通",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2818511247.0,
        "margin_buy": 111939995.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.66,
        "financing_pressure_score": 43.77,
        "incremental_financing_pressure_score": 54.72,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 5.28
      },
      "trap_score": 38.25
    },
    {
      "code": "002859",
      "name": "洁美科技",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 740804872.0,
        "margin_buy": 122268700.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.67,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 37.36
      },
      "trap_score": 60.97
    },
    {
      "code": "002920",
      "name": "德赛西威",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1459241595.0,
        "margin_buy": 102781810.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.56,
        "financing_pressure_score": 62.9,
        "incremental_financing_pressure_score": 78.62,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.48
      },
      "trap_score": 48.3
    },
    {
      "code": "002456",
      "name": "欧菲光",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1716224173.0,
        "margin_buy": 67254393.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.68,
        "financing_pressure_score": 43.35,
        "incremental_financing_pressure_score": 54.19,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 37.44
      },
      "trap_score": 44.5
    },
    {
      "code": "002156",
      "name": "通富微电",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4299469685.0,
        "margin_buy": 875929568.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 10.72,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 85.76
      },
      "trap_score": 70.65
    },
    {
      "code": "002261",
      "name": "拓维信息",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1502672568.0,
        "margin_buy": 77979116.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.9,
        "financing_pressure_score": 53.01,
        "incremental_financing_pressure_score": 66.26,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.2
      },
      "trap_score": 47.59
    },
    {
      "code": "002273",
      "name": "水晶光电",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2855254279.0,
        "margin_buy": 150457965.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.81,
        "financing_pressure_score": 53.44,
        "incremental_financing_pressure_score": 66.8,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.48
      },
      "trap_score": 47.64
    },
    {
      "code": "002281",
      "name": "光迅科技",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3689630430.0,
        "margin_buy": 578277309.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.9,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 71.2
      },
      "trap_score": 67.74
    },
    {
      "code": "002415",
      "name": "海康威视",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5393978412.0,
        "margin_buy": 410064666.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.95,
        "financing_pressure_score": 65.88,
        "incremental_financing_pressure_score": 82.35,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.6
      },
      "trap_score": 48.67
    },
    {
      "code": "002916",
      "name": "深南电路",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1790286958.0,
        "margin_buy": 301873738.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.1,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.8
      },
      "trap_score": 56.86
    },
    {
      "code": "002517",
      "name": "恺英网络",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1351678213.0,
        "margin_buy": 134416897.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.77,
        "financing_pressure_score": 73.83,
        "incremental_financing_pressure_score": 92.29,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.16
      },
      "trap_score": 56.76
    },
    {
      "code": "002049",
      "name": "紫光国微",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4415827801.0,
        "margin_buy": 207580228.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.28,
        "financing_pressure_score": 49.61,
        "incremental_financing_pressure_score": 62.01,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.24
      },
      "trap_score": 45.07
    },
    {
      "code": "002138",
      "name": "顺络电子",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1435586741.0,
        "margin_buy": 159075594.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.21,
        "financing_pressure_score": 77.24,
        "incremental_financing_pressure_score": 96.55,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 41.68
      },
      "trap_score": 60.59
    },
    {
      "code": "002185",
      "name": "华天科技",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2532862266.0,
        "margin_buy": 610320403.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 13.09,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    },
    {
      "code": "000063",
      "name": "中兴通讯",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 10051410662.0,
        "margin_buy": 739018047.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.94,
        "financing_pressure_score": 64.55,
        "incremental_financing_pressure_score": 80.68,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.52
      },
      "trap_score": 52.85
    },
    {
      "code": "000977",
      "name": "浪潮信息",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4194463895.0,
        "margin_buy": 752337108.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.37,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 50.96,
        "turnover_z_score": -0.84
      },
      "trap_score": 63.69,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 5.19,
        "return_5d_pct": 8.61,
        "return_8d_pct": -2.33,
        "ma5_gap_pct": 3.22,
        "ma10_gap_pct": 2.83,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "000938",
      "name": "紫光股份",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4207002126.0,
        "margin_buy": 1593659733.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 10.65,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 85.2
      },
      "trap_score": 70.54
    },
    {
      "code": "000988",
      "name": "华工科技",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7655212959.0,
        "margin_buy": 888769752.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.79,
        "financing_pressure_score": 78.83,
        "incremental_financing_pressure_score": 98.54,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 70.32
      },
      "trap_score": 67.04
    },
    {
      "code": "000034",
      "name": "神州数码",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1714631972.0,
        "margin_buy": 106496989.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.84,
        "financing_pressure_score": 58.46,
        "incremental_financing_pressure_score": 73.07,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 38.72
      },
      "trap_score": 51.55
    },
    {
      "code": "000066",
      "name": "中国长城",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1979352993.0,
        "margin_buy": 174312685.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.32,
        "financing_pressure_score": 70.42,
        "incremental_financing_pressure_score": 88.02,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 34.56
      },
      "trap_score": 56.1
    },
    {
      "code": "000725",
      "name": "京东方Ａ",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11736641329.0,
        "margin_buy": 1376444583.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.0,
        "financing_pressure_score": 79.18,
        "incremental_financing_pressure_score": 98.98,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 48.0,
        "turnover_z_score": -0.22
      },
      "trap_score": 62.73,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 7.82,
        "return_5d_pct": 10.16,
        "return_8d_pct": 8.78,
        "ma5_gap_pct": 4.48,
        "ma10_gap_pct": 6.16,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "000100",
      "name": "TCL科技",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4880988017.0,
        "margin_buy": 335737324.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.74,
        "financing_pressure_score": 62.02,
        "incremental_financing_pressure_score": 77.52,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.92
      },
      "trap_score": 49.79
    },
    {
      "code": "600584",
      "name": "长电科技",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6466254540.0,
        "margin_buy": 1428020219.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 12.76,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    },
    {
      "code": "600570",
      "name": "恒生电子",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2530376030.0,
        "margin_buy": 74626874.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.14,
        "financing_pressure_score": 35.59,
        "incremental_financing_pressure_score": 44.49,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.12
      },
      "trap_score": 36.94
    },
    {
      "code": "600845",
      "name": "宝信软件",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 616808960.0,
        "margin_buy": 53590927.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.58,
        "financing_pressure_score": 70.07,
        "incremental_financing_pressure_score": 87.58,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.64
      },
      "trap_score": 51.56
    },
    {
      "code": "600536",
      "name": "中国软件",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1494047450.0,
        "margin_buy": 54701415.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.74,
        "financing_pressure_score": 41.29,
        "incremental_financing_pressure_score": 51.61,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.92
      },
      "trap_score": 40.46
    },
    {
      "code": "600588",
      "name": "用友网络",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1549991423.0,
        "margin_buy": 121488899.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.14,
        "financing_pressure_score": 67.14,
        "incremental_financing_pressure_score": 83.92,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.12
      },
      "trap_score": 54.34
    },
    {
      "code": "600602",
      "name": "云赛智联",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 724865851.0,
        "margin_buy": 57915234.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.57,
        "financing_pressure_score": 67.95,
        "incremental_financing_pressure_score": 84.93,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.56
      },
      "trap_score": 53.79
    },
    {
      "code": "600171",
      "name": "上海贝岭",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 909534967.0,
        "margin_buy": 25417600.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.0,
        "financing_pressure_score": 34.36,
        "incremental_financing_pressure_score": 42.95,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.0
      },
      "trap_score": 36.16
    },
    {
      "code": "600498",
      "name": "烽火通信",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2090278832.0,
        "margin_buy": 315831567.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.62,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 68.96
      },
      "trap_score": 67.29
    },
    {
      "code": "600183",
      "name": "生益科技",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3167318049.0,
        "margin_buy": 1113220978.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.25,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.0
      },
      "trap_score": 58.7
    },
    {
      "code": "600460",
      "name": "士兰微",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2131731636.0,
        "margin_buy": 438621209.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.48,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 51.84,
        "turnover_z_score": 0.36
      },
      "trap_score": 63.87,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 11.78,
        "return_5d_pct": 15.18,
        "return_8d_pct": 7.89,
        "ma5_gap_pct": 7.85,
        "ma10_gap_pct": 8.74,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "600703",
      "name": "三安光电",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4398229038.0,
        "margin_buy": 331230698.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.86,
        "financing_pressure_score": 65.5,
        "incremental_financing_pressure_score": 81.87,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 46.88,
        "turnover_z_score": 1.56
      },
      "trap_score": 56.35,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 13.39,
        "return_5d_pct": 17.65,
        "return_8d_pct": 18.81,
        "ma5_gap_pct": 8.47,
        "ma10_gap_pct": 13.27,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "601138",
      "name": "工业富联",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7473103069.0,
        "margin_buy": 974466112.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.81,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.48
      },
      "trap_score": 54.8
    },
    {
      "code": "601360",
      "name": "三六零",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1871851408.0,
        "margin_buy": 108825520.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.91,
        "financing_pressure_score": 56.34,
        "incremental_financing_pressure_score": 70.43,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.28
      },
      "trap_score": 45.91
    },
    {
      "code": "603000",
      "name": "人民网",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 450117396.0,
        "margin_buy": 27179154.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.99,
        "financing_pressure_score": 57.54,
        "incremental_financing_pressure_score": 71.92,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.92
      },
      "trap_score": 46.58
    },
    {
      "code": "300054",
      "name": "鼎龙股份",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1896174012.0,
        "margin_buy": 288695288.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.77,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 46.16,
        "turnover_z_score": -0.43
      },
      "trap_score": 62.73,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 10.98,
        "return_5d_pct": 13.19,
        "return_8d_pct": 9.02,
        "ma5_gap_pct": 7.52,
        "ma10_gap_pct": 9.37,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002192",
      "name": "融捷股份",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1252123932.0,
        "margin_buy": 104394474.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.39,
        "financing_pressure_score": 69.01,
        "incremental_financing_pressure_score": 86.27,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 67.12
      },
      "trap_score": 61.98
    },
    {
      "code": "002466",
      "name": "天齐锂业",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3366484363.0,
        "margin_buy": 197765205.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.56,
        "financing_pressure_score": 56.66,
        "incremental_financing_pressure_score": 70.83,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.48
      },
      "trap_score": 48.69
    },
    {
      "code": "002837",
      "name": "英维克",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3569694643.0,
        "margin_buy": 125550283.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.66,
        "financing_pressure_score": 40.14,
        "incremental_financing_pressure_score": 50.17,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 37.28
      },
      "trap_score": 43.02
    },
    {
      "code": "601869",
      "name": "长飞光纤",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2360102302.0,
        "margin_buy": 444458554.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.96,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.68
      },
      "trap_score": 59.84
    },
    {
      "code": "002938",
      "name": "鹏鼎控股",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1193386139.0,
        "margin_buy": 160457583.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.71,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.68
      },
      "trap_score": 56.24
    },
    {
      "code": "000878",
      "name": "云南铜业",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1993147979.0,
        "margin_buy": 114524461.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.13,
        "financing_pressure_score": 55.98,
        "incremental_financing_pressure_score": 69.97,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.04
      },
      "trap_score": 49.3
    },
    {
      "code": "002155",
      "name": "湖南黄金",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2163578767.0,
        "margin_buy": 249136240.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.78,
        "financing_pressure_score": 78.55,
        "incremental_financing_pressure_score": 98.18,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 38.24
      },
      "trap_score": 60.5
    },
    {
      "code": "600378",
      "name": "昊华科技",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1377431337.0,
        "margin_buy": 611159659.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.68,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 77.44
      },
      "trap_score": 68.99
    },
    {
      "code": "300418",
      "name": "昆仑万维",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3583197641.0,
        "margin_buy": 322048219.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.19,
        "financing_pressure_score": 70.96,
        "incremental_financing_pressure_score": 88.7,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 65.52
      },
      "trap_score": 62.54
    },
    {
      "code": "002218",
      "name": "拓日新能",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 116380329.0,
        "margin_buy": 10159007.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.09,
        "financing_pressure_score": 70.19,
        "incremental_financing_pressure_score": 87.73,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.72
      },
      "trap_score": 54.03
    },
    {
      "code": "300617",
      "name": "安靠智电",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.19,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.52
      },
      "trap_score": 24.2
    },
    {
      "code": "300738",
      "name": "奥飞数据",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1444301342.0,
        "margin_buy": 206868256.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.93,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 55.44,
        "turnover_z_score": -0.38
      },
      "trap_score": 64.59,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": -1.53,
        "return_5d_pct": 1.03,
        "return_8d_pct": 6.06,
        "ma5_gap_pct": -1.17,
        "ma10_gap_pct": 1.55,
        "drawdown_8d_pct": -4.36,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002126",
      "name": "银轮股份",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 461601415.0,
        "margin_buy": 18690979.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.89,
        "financing_pressure_score": 44.39,
        "incremental_financing_pressure_score": 55.49,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.12
      },
      "trap_score": 40.5
    },
    {
      "code": "002050",
      "name": "三花智控",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5563526162.0,
        "margin_buy": 222132855.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.64,
        "financing_pressure_score": 43.94,
        "incremental_financing_pressure_score": 54.93,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.12
      },
      "trap_score": 39.9
    },
    {
      "code": "603075",
      "name": "热威股份",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 39591240.0,
        "margin_buy": 2673705.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.98,
        "financing_pressure_score": 61.35,
        "incremental_financing_pressure_score": 76.69,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.84
      },
      "trap_score": 51.48
    },
    {
      "code": "603667",
      "name": "五洲新春",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1135031560.0,
        "margin_buy": 75794993.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.06,
        "financing_pressure_score": 60.95,
        "incremental_financing_pressure_score": 76.19,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.48
      },
      "trap_score": 51.42
    },
    {
      "code": "605020",
      "name": "永和股份",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 454358323.0,
        "margin_buy": 71215090.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.14,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.12
      },
      "trap_score": 58.52
    },
    {
      "code": "600160",
      "name": "巨化股份",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3986801095.0,
        "margin_buy": 175506399.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.18,
        "financing_pressure_score": 47.22,
        "incremental_financing_pressure_score": 59.02,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.44
      },
      "trap_score": 40.64
    },
    {
      "code": "603379",
      "name": "三美股份",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 849811580.0,
        "margin_buy": 70987843.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.61,
        "financing_pressure_score": 69.06,
        "incremental_financing_pressure_score": 86.33,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.88
      },
      "trap_score": 51.15
    },
    {
      "code": "600988",
      "name": "赤峰黄金",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1134427785.0,
        "margin_buy": 258743970.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.65,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 37.2
      },
      "trap_score": 60.94
    },
    {
      "code": "000636",
      "name": "风华高科",
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2846074156.0,
        "margin_buy": 969095224.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 17.66,
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
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 14115976098.0,
        "margin_buy": 3689146867.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 11.45,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 91.6
      },
      "trap_score": 71.82
    },
    {
      "code": "600105",
      "name": "永鼎股份",
      "margin_date": "20260807",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1960984903.0,
        "margin_buy": 554616961.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 13.38,
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
      "margin_date": "20260806",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3612235980.0,
        "margin_buy": 1360158055.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 20.74,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 73.5
    }
  ]
};
