window.__QUANT_DATA__ = {
  "generated_at": "2026-09-05T17:40:21+08:00",
  "data_freshness": {
    "warning_target_date": "2026-09-07",
    "spot_snapshot_at": "2026-09-05T17:40:21+08:00",
    "margin_data_as_of": "20260904",
    "margin_data_dates_by_market": {
      "szse": "20260903",
      "sse": "20260904"
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
    "total_rows": 5556,
    "turnover_rate_available_rows": 5556,
    "turnover_rate_missing_rows": 0,
    "turnover_rate_missing_ratio": 0.0,
    "float_market_cap_available_rows": 0,
    "float_market_cap_missing_rows": 5556,
    "float_market_cap_missing_ratio": 1.0
  },
  "daily_warning": {
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
      "status": "待复盘",
      "note": ""
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
  "warning_history": [
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
        "status": "待复盘",
        "note": ""
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
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 82,
        "margin_balance": 16221517686.0,
        "margin_buy": 444568175.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.48,
        "financing_pressure_score": 33.92,
        "incremental_financing_pressure_score": 42.41,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.84,
        "turnover_z_score": -1.04
      },
      "trap_score": 47.93,
      "trend": {
        "available": true,
        "down_streak": 4,
        "return_3d_pct": -5.79,
        "return_5d_pct": -9.15,
        "return_8d_pct": -10.4,
        "ma5_gap_pct": -4.01,
        "ma10_gap_pct": -8.06,
        "drawdown_8d_pct": -16.56,
        "trend_penalty": 88.0,
        "trend_label": "已连跌 4 天"
      }
    },
    {
      "code": "002384",
      "name": "东山精密",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 68,
        "margin_balance": 10243378376.0,
        "margin_buy": 624665523.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.37,
        "financing_pressure_score": 57.86,
        "incremental_financing_pressure_score": 72.32,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.96
      },
      "trap_score": 55.23
    },
    {
      "code": "300308",
      "name": "中际旭创",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 88,
        "margin_balance": 31524357964.0,
        "margin_buy": 1725374085.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.9,
        "financing_pressure_score": 54.52,
        "incremental_financing_pressure_score": 68.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.2
      },
      "trap_score": 58.37
    },
    {
      "code": "002230",
      "name": "科大讯飞",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5456722872.0,
        "margin_buy": 46880331.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.24,
        "financing_pressure_score": 12.03,
        "incremental_financing_pressure_score": 15.03,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.92
      },
      "trap_score": 24.9
    },
    {
      "code": "688256",
      "name": "寒武纪",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 17370175145.0,
        "margin_buy": 540988629.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.32,
        "financing_pressure_score": 36.92,
        "incremental_financing_pressure_score": 46.14,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.56
      },
      "trap_score": 36.23
    },
    {
      "code": "603019",
      "name": "中科曙光",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8442343223.0,
        "margin_buy": 256125111.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.3,
        "financing_pressure_score": 36.27,
        "incremental_financing_pressure_score": 45.34,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.4
      },
      "trap_score": 37.5
    },
    {
      "code": "603160",
      "name": "汇顶科技",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 942356801.0,
        "margin_buy": 29320544.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.55,
        "financing_pressure_score": 36.89,
        "incremental_financing_pressure_score": 46.11,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.4
      },
      "trap_score": 36.58
    },
    {
      "code": "603986",
      "name": "兆易创新",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 17428301798.0,
        "margin_buy": 1251816157.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.47,
        "financing_pressure_score": 63.64,
        "incremental_financing_pressure_score": 79.55,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 35.76
      },
      "trap_score": 53.29
    },
    {
      "code": "603501",
      "name": "豪威集团",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4550506773.0,
        "margin_buy": 84680546.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.54,
        "financing_pressure_score": 26.05,
        "incremental_financing_pressure_score": 32.57,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.32
      },
      "trap_score": 31.69
    },
    {
      "code": "603893",
      "name": "瑞芯微",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2004620549.0,
        "margin_buy": 274348098.0,
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
      "code": "688111",
      "name": "金山办公",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4796844174.0,
        "margin_buy": 211788755.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.48,
        "financing_pressure_score": 47.32,
        "incremental_financing_pressure_score": 59.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.84
      },
      "trap_score": 41.16
    },
    {
      "code": "688041",
      "name": "海光信息",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8528973765.0,
        "margin_buy": 177724437.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.58,
        "financing_pressure_score": 28.67,
        "incremental_financing_pressure_score": 35.84,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 4.64
      },
      "trap_score": 31.33
    },
    {
      "code": "688012",
      "name": "中微公司",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4836263002.0,
        "margin_buy": 287234810.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.39,
        "financing_pressure_score": 57.01,
        "incremental_financing_pressure_score": 71.26,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.12
      },
      "trap_score": 45.38
    },
    {
      "code": "688008",
      "name": "澜起科技",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 14814384606.0,
        "margin_buy": 625270755.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.77,
        "financing_pressure_score": 45.77,
        "incremental_financing_pressure_score": 57.21,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.16
      },
      "trap_score": 42.53
    },
    {
      "code": "688169",
      "name": "石头科技",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 821117528.0,
        "margin_buy": 41439658.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.87,
        "financing_pressure_score": 52.25,
        "incremental_financing_pressure_score": 65.31,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.96
      },
      "trap_score": 44.0
    },
    {
      "code": "688072",
      "name": "拓荆科技",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1706909163.0,
        "margin_buy": 143128391.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.45,
        "financing_pressure_score": 69.16,
        "incremental_financing_pressure_score": 86.44,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.6
      },
      "trap_score": 50.94
    },
    {
      "code": "688099",
      "name": "晶晨股份",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 995591265.0,
        "margin_buy": 38128316.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.85,
        "financing_pressure_score": 42.64,
        "incremental_financing_pressure_score": 53.3,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.8
      },
      "trap_score": 39.65
    },
    {
      "code": "688027",
      "name": "国盾量子",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1111844702.0,
        "margin_buy": 37174587.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.24,
        "financing_pressure_score": 38.75,
        "incremental_financing_pressure_score": 48.44,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.92
      },
      "trap_score": 38.52
    },
    {
      "code": "688608",
      "name": "恒玄科技",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1003922638.0,
        "margin_buy": 30428735.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.6,
        "financing_pressure_score": 36.25,
        "incremental_financing_pressure_score": 45.31,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.8
      },
      "trap_score": 36.37
    },
    {
      "code": "688018",
      "name": "乐鑫科技",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 670065698.0,
        "margin_buy": 64182881.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.08,
        "financing_pressure_score": 72.74,
        "incremental_financing_pressure_score": 90.92,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.64
      },
      "trap_score": 53.56
    },
    {
      "code": "688036",
      "name": "传音控股",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 904804636.0,
        "margin_buy": 33655274.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.64,
        "financing_pressure_score": 41.76,
        "incremental_financing_pressure_score": 52.2,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 5.12
      },
      "trap_score": 37.32
    },
    {
      "code": "688047",
      "name": "龙芯中科",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1162144115.0,
        "margin_buy": 18152602.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.73,
        "financing_pressure_score": 21.87,
        "incremental_financing_pressure_score": 27.33,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 5.84
      },
      "trap_score": 28.51
    },
    {
      "code": "688126",
      "name": "沪硅产业",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2561875220.0,
        "margin_buy": 73914012.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.77,
        "financing_pressure_score": 35.08,
        "incremental_financing_pressure_score": 43.85,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.16
      },
      "trap_score": 36.12
    },
    {
      "code": "688037",
      "name": "芯源微",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 439122634.0,
        "margin_buy": 45042720.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.13,
        "financing_pressure_score": 74.77,
        "incremental_financing_pressure_score": 93.47,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.04
      },
      "trap_score": 54.55
    },
    {
      "code": "688213",
      "name": "思特威-W",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 958890413.0,
        "margin_buy": 15313771.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.19,
        "financing_pressure_score": 22.36,
        "incremental_financing_pressure_score": 27.95,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.52
      },
      "trap_score": 29.47
    },
    {
      "code": "688120",
      "name": "华海清科",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1307075676.0,
        "margin_buy": 69496035.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.38,
        "financing_pressure_score": 53.69,
        "incremental_financing_pressure_score": 67.11,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.04
      },
      "trap_score": 43.87
    },
    {
      "code": "688981",
      "name": "中芯国际",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 10882235076.0,
        "margin_buy": 325959057.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.56,
        "financing_pressure_score": 35.96,
        "incremental_financing_pressure_score": 44.95,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.48
      },
      "trap_score": 36.18
    },
    {
      "code": "603296",
      "name": "华勤技术",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1349302340.0,
        "margin_buy": 164216923.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.54,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.32
      },
      "trap_score": 57.56
    },
    {
      "code": "300033",
      "name": "同花顺",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5606867015.0,
        "margin_buy": 229700010.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.57,
        "financing_pressure_score": 44.77,
        "incremental_financing_pressure_score": 55.97,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.56
      },
      "trap_score": 43.36
    },
    {
      "code": "300496",
      "name": "中科创达",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1745699565.0,
        "margin_buy": 55419195.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.47,
        "financing_pressure_score": 37.4,
        "incremental_financing_pressure_score": 46.75,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.76
      },
      "trap_score": 39.88
    },
    {
      "code": "300502",
      "name": "新易盛",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 19203030220.0,
        "margin_buy": 731682031.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.39,
        "financing_pressure_score": 42.48,
        "incremental_financing_pressure_score": 53.1,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.12
      },
      "trap_score": 40.44
    },
    {
      "code": "300223",
      "name": "君正股份",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3262143846.0,
        "margin_buy": 160218146.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.88,
        "financing_pressure_score": 51.29,
        "incremental_financing_pressure_score": 64.11,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 39.04,
        "turnover_z_score": -0.89
      },
      "trap_score": 48.39,
      "trend": {
        "available": true,
        "down_streak": 4,
        "return_3d_pct": -5.66,
        "return_5d_pct": -6.29,
        "return_8d_pct": -5.18,
        "ma5_gap_pct": -4.57,
        "ma10_gap_pct": -5.26,
        "drawdown_8d_pct": -9.48,
        "trend_penalty": 48.0,
        "trend_label": "短线趋势走弱"
      }
    },
    {
      "code": "300383",
      "name": "光环新网",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1443535679.0,
        "margin_buy": 24919686.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.42,
        "financing_pressure_score": 24.17,
        "incremental_financing_pressure_score": 30.21,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.36
      },
      "trap_score": 32.25
    },
    {
      "code": "300458",
      "name": "全志科技",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1404672299.0,
        "margin_buy": 80977656.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.1,
        "financing_pressure_score": 56.08,
        "incremental_financing_pressure_score": 70.1,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.8
      },
      "trap_score": 49.3
    },
    {
      "code": "300474",
      "name": "景嘉微",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1258092978.0,
        "margin_buy": 10061867.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.34,
        "financing_pressure_score": 11.2,
        "incremental_financing_pressure_score": 14.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.72
      },
      "trap_score": 24.68
    },
    {
      "code": "300454",
      "name": "深信服",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1137230040.0,
        "margin_buy": 162986499.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.46,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 51.68
      },
      "trap_score": 63.84
    },
    {
      "code": "300212",
      "name": "*ST易录",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.77,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.16
      },
      "trap_score": 20.33
    },
    {
      "code": "300251",
      "name": "光线传媒",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1147946970.0,
        "margin_buy": 65820487.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.15,
        "financing_pressure_score": 55.91,
        "incremental_financing_pressure_score": 69.89,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.2
      },
      "trap_score": 47.7
    },
    {
      "code": "300229",
      "name": "拓尔思",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 922020308.0,
        "margin_buy": 20381964.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.54,
        "financing_pressure_score": 29.68,
        "incremental_financing_pressure_score": 37.11,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 44.32,
        "turnover_z_score": 2.17
      },
      "trap_score": 39.72,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": -1.71,
        "return_5d_pct": 3.76,
        "return_8d_pct": 3.92,
        "ma5_gap_pct": 0.7,
        "ma10_gap_pct": 2.43,
        "drawdown_8d_pct": -1.71,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300624",
      "name": "万兴科技",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 556899987.0,
        "margin_buy": 53159752.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 10.16,
        "financing_pressure_score": 72.64,
        "incremental_financing_pressure_score": 90.8,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 81.28
      },
      "trap_score": 66.44
    },
    {
      "code": "300442",
      "name": "润泽科技",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3426411442.0,
        "margin_buy": 98466153.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.12,
        "financing_pressure_score": 34.99,
        "incremental_financing_pressure_score": 43.74,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.96
      },
      "trap_score": 35.04
    },
    {
      "code": "300803",
      "name": "指南针",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3324203692.0,
        "margin_buy": 273678423.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.8,
        "financing_pressure_score": 68.7,
        "incremental_financing_pressure_score": 85.87,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 46.4,
        "turnover_z_score": 2.12
      },
      "trap_score": 57.7,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 1.78,
        "return_5d_pct": 2.22,
        "return_8d_pct": 10.31,
        "ma5_gap_pct": 2.49,
        "ma10_gap_pct": 4.04,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "300364",
      "name": "中文在线",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1086822228.0,
        "margin_buy": 222720350.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 19.15,
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
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7335903052.0,
        "margin_buy": 728711286.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.55,
        "financing_pressure_score": 73.8,
        "incremental_financing_pressure_score": 92.25,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.4
      },
      "trap_score": 56.39
    },
    {
      "code": "300570",
      "name": "太辰光",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1291581512.0,
        "margin_buy": 174494976.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.23,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 57.84
      },
      "trap_score": 65.07
    },
    {
      "code": "300782",
      "name": "卓胜微",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1622955132.0,
        "margin_buy": 33559090.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.67,
        "financing_pressure_score": 28.54,
        "incremental_financing_pressure_score": 35.68,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.36
      },
      "trap_score": 33.02
    },
    {
      "code": "300548",
      "name": "长芯博创",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2147248251.0,
        "margin_buy": 149742121.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.46,
        "financing_pressure_score": 62.53,
        "incremental_financing_pressure_score": 78.16,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 35.68
      },
      "trap_score": 52.77
    },
    {
      "code": "300604",
      "name": "长川科技",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3274505149.0,
        "margin_buy": 327678267.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.11,
        "financing_pressure_score": 74.02,
        "incremental_financing_pressure_score": 92.53,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 32.88
      },
      "trap_score": 57.38
    },
    {
      "code": "300118",
      "name": "东方日升",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 538584139.0,
        "margin_buy": 6336882.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.24,
        "financing_pressure_score": 16.47,
        "incremental_financing_pressure_score": 20.59,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.92
      },
      "trap_score": 30.1
    },
    {
      "code": "300373",
      "name": "扬杰科技",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1547090525.0,
        "margin_buy": 83585278.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.06,
        "financing_pressure_score": 54.15,
        "incremental_financing_pressure_score": 67.68,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.48
      },
      "trap_score": 45.16
    },
    {
      "code": "301236",
      "name": "软通动力",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2081892228.0,
        "margin_buy": 42002628.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.38,
        "financing_pressure_score": 28.14,
        "incremental_financing_pressure_score": 35.18,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.04
      },
      "trap_score": 33.97
    },
    {
      "code": "301269",
      "name": "华大九天",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 940951490.0,
        "margin_buy": 29313249.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.24,
        "financing_pressure_score": 36.92,
        "incremental_financing_pressure_score": 46.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.92
      },
      "trap_score": 36.1
    },
    {
      "code": "301312",
      "name": "智立方",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 270967142.0,
        "margin_buy": 24609608.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.3,
        "financing_pressure_score": 71.25,
        "incremental_financing_pressure_score": 89.06,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 50.4,
        "turnover_z_score": -0.85
      },
      "trap_score": 59.64,
      "trend": {
        "available": true,
        "down_streak": 1,
        "return_3d_pct": -2.4,
        "return_5d_pct": -5.51,
        "return_8d_pct": 2.84,
        "ma5_gap_pct": -3.5,
        "ma10_gap_pct": -1.73,
        "drawdown_8d_pct": -7.94,
        "trend_penalty": 14.0,
        "trend_label": "近 5 日明显回撤"
      }
    },
    {
      "code": "301308",
      "name": "江波龙",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6772317140.0,
        "margin_buy": 215859371.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.32,
        "financing_pressure_score": 37.5,
        "incremental_financing_pressure_score": 46.87,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.56
      },
      "trap_score": 39.69
    },
    {
      "code": "301095",
      "name": "广立微",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 502482133.0,
        "margin_buy": 33045871.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.34,
        "financing_pressure_score": 60.41,
        "incremental_financing_pressure_score": 75.51,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.72
      },
      "trap_score": 50.03
    },
    {
      "code": "301171",
      "name": "易点天下",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1266698637.0,
        "margin_buy": 134368253.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 31.8,
        "financing_pressure_score": 75.82,
        "incremental_financing_pressure_score": 94.78,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 71.62
    },
    {
      "code": "301165",
      "name": "锐捷网络",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 907038004.0,
        "margin_buy": 163298122.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.7,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.6
      },
      "trap_score": 56.22
    },
    {
      "code": "300059",
      "name": "东方财富",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 23186769338.0,
        "margin_buy": 433072416.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.88,
        "financing_pressure_score": 26.15,
        "incremental_financing_pressure_score": 32.69,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.04
      },
      "trap_score": 32.28
    },
    {
      "code": "002371",
      "name": "北方华创",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2649144969.0,
        "margin_buy": 120992361.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.93,
        "financing_pressure_score": 48.54,
        "incremental_financing_pressure_score": 60.67,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.44
      },
      "trap_score": 40.83
    },
    {
      "code": "002475",
      "name": "立讯精密",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6128239326.0,
        "margin_buy": 371762173.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.51,
        "financing_pressure_score": 57.69,
        "incremental_financing_pressure_score": 72.11,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.08
      },
      "trap_score": 45.88
    },
    {
      "code": "002463",
      "name": "沪电股份",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4922225201.0,
        "margin_buy": 299011703.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.57,
        "financing_pressure_score": 57.73,
        "incremental_financing_pressure_score": 72.16,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.56
      },
      "trap_score": 47.59
    },
    {
      "code": "002555",
      "name": "三七互娱",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1691503036.0,
        "margin_buy": 36695244.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.19,
        "financing_pressure_score": 29.36,
        "incremental_financing_pressure_score": 36.69,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.52
      },
      "trap_score": 35.82
    },
    {
      "code": "002236",
      "name": "大华股份",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1460388105.0,
        "margin_buy": 30168747.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.04,
        "financing_pressure_score": 28.53,
        "incremental_financing_pressure_score": 35.66,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.32
      },
      "trap_score": 32.0
    },
    {
      "code": "002241",
      "name": "歌尔股份",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3892058616.0,
        "margin_buy": 124256040.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.92,
        "financing_pressure_score": 37.54,
        "incremental_financing_pressure_score": 46.93,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.36
      },
      "trap_score": 37.47
    },
    {
      "code": "600050",
      "name": "中国联通",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2630399282.0,
        "margin_buy": 51576076.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.33,
        "financing_pressure_score": 27.45,
        "incremental_financing_pressure_score": 34.31,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 2.64
      },
      "trap_score": 30.38
    },
    {
      "code": "002859",
      "name": "洁美科技",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 914547120.0,
        "margin_buy": 40535996.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.51,
        "financing_pressure_score": 47.46,
        "incremental_financing_pressure_score": 59.32,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.08
      },
      "trap_score": 42.87
    },
    {
      "code": "002920",
      "name": "德赛西威",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1377087476.0,
        "margin_buy": 42932523.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.69,
        "financing_pressure_score": 36.94,
        "incremental_financing_pressure_score": 46.18,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.52
      },
      "trap_score": 36.83
    },
    {
      "code": "002456",
      "name": "欧菲光",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1530012006.0,
        "margin_buy": 23259186.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.18,
        "financing_pressure_score": 21.28,
        "incremental_financing_pressure_score": 26.6,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.44
      },
      "trap_score": 30.56
    },
    {
      "code": "002156",
      "name": "通富微电",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4386685008.0,
        "margin_buy": 222403544.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.41,
        "financing_pressure_score": 52.37,
        "incremental_financing_pressure_score": 65.47,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 43.28,
        "turnover_z_score": -0.33
      },
      "trap_score": 49.72,
      "trend": {
        "available": true,
        "down_streak": 4,
        "return_3d_pct": -7.35,
        "return_5d_pct": -10.79,
        "return_8d_pct": -6.62,
        "ma5_gap_pct": -5.86,
        "ma10_gap_pct": -7.21,
        "drawdown_8d_pct": -11.91,
        "trend_penalty": 72.0,
        "trend_label": "已连跌 4 天"
      }
    },
    {
      "code": "002261",
      "name": "拓维信息",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1447737858.0,
        "margin_buy": 29605230.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.93,
        "financing_pressure_score": 28.36,
        "incremental_financing_pressure_score": 35.45,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.44
      },
      "trap_score": 34.95
    },
    {
      "code": "002273",
      "name": "水晶光电",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2742483134.0,
        "margin_buy": 38667367.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.44,
        "financing_pressure_score": 19.74,
        "incremental_financing_pressure_score": 24.67,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.52
      },
      "trap_score": 30.29
    },
    {
      "code": "002281",
      "name": "光迅科技",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3630550073.0,
        "margin_buy": 285756667.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.82,
        "financing_pressure_score": 67.31,
        "incremental_financing_pressure_score": 84.14,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.56
      },
      "trap_score": 52.3
    },
    {
      "code": "002415",
      "name": "海康威视",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4922522829.0,
        "margin_buy": 108069851.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.41,
        "financing_pressure_score": 29.56,
        "incremental_financing_pressure_score": 36.95,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 3.28
      },
      "trap_score": 31.46
    },
    {
      "code": "002916",
      "name": "深南电路",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1480249853.0,
        "margin_buy": 95392592.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.98,
        "financing_pressure_score": 59.7,
        "incremental_financing_pressure_score": 74.63,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.84
      },
      "trap_score": 45.93
    },
    {
      "code": "002517",
      "name": "恺英网络",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1714391414.0,
        "margin_buy": 71940304.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.9,
        "financing_pressure_score": 45.57,
        "incremental_financing_pressure_score": 56.96,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 39.2,
        "turnover_z_score": 1.66
      },
      "trap_score": 45.85,
      "trend": {
        "available": true,
        "down_streak": 0,
        "return_3d_pct": 2.59,
        "return_5d_pct": 4.88,
        "return_8d_pct": 5.26,
        "ma5_gap_pct": 1.99,
        "ma10_gap_pct": 3.53,
        "drawdown_8d_pct": 0.0,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "002049",
      "name": "紫光国微",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4179166176.0,
        "margin_buy": 64042259.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.4,
        "financing_pressure_score": 21.45,
        "incremental_financing_pressure_score": 26.82,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.2
      },
      "trap_score": 29.39
    },
    {
      "code": "002138",
      "name": "顺络电子",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1489100531.0,
        "margin_buy": 73164074.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.55,
        "financing_pressure_score": 51.31,
        "incremental_financing_pressure_score": 64.13,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.4
      },
      "trap_score": 44.67
    },
    {
      "code": "002185",
      "name": "华天科技",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2267714951.0,
        "margin_buy": 114941907.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.71,
        "financing_pressure_score": 52.37,
        "incremental_financing_pressure_score": 65.46,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 37.68,
        "turnover_z_score": -0.86
      },
      "trap_score": 48.6,
      "trend": {
        "available": true,
        "down_streak": 4,
        "return_3d_pct": -5.75,
        "return_5d_pct": -7.98,
        "return_8d_pct": -7.54,
        "ma5_gap_pct": -4.14,
        "ma10_gap_pct": -6.03,
        "drawdown_8d_pct": -9.37,
        "trend_penalty": 48.0,
        "trend_label": "短线趋势走弱"
      }
    },
    {
      "code": "000063",
      "name": "中兴通讯",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 9739055980.0,
        "margin_buy": 213143310.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.9,
        "financing_pressure_score": 29.51,
        "incremental_financing_pressure_score": 36.89,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.2
      },
      "trap_score": 33.82
    },
    {
      "code": "000977",
      "name": "浪潮信息",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4361240671.0,
        "margin_buy": 902624160.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 11.65,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 93.2
      },
      "trap_score": 72.14
    },
    {
      "code": "000938",
      "name": "紫光股份",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4681354844.0,
        "margin_buy": 626991329.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.33,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 66.64
      },
      "trap_score": 66.83
    },
    {
      "code": "000988",
      "name": "华工科技",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7443403943.0,
        "margin_buy": 194631417.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.63,
        "financing_pressure_score": 32.92,
        "incremental_financing_pressure_score": 41.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.04
      },
      "trap_score": 38.12
    },
    {
      "code": "000034",
      "name": "神州数码",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1736544941.0,
        "margin_buy": 58157569.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.94,
        "financing_pressure_score": 38.79,
        "incremental_financing_pressure_score": 48.49,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.52
      },
      "trap_score": 39.66
    },
    {
      "code": "000066",
      "name": "中国长城",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1838758392.0,
        "margin_buy": 72576816.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.36,
        "financing_pressure_score": 43.58,
        "incremental_financing_pressure_score": 54.47,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.88
      },
      "trap_score": 40.89
    },
    {
      "code": "000725",
      "name": "京东方Ａ",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11578143697.0,
        "margin_buy": 833360212.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.7,
        "financing_pressure_score": 63.72,
        "incremental_financing_pressure_score": 79.65,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.6
      },
      "trap_score": 50.49
    },
    {
      "code": "000100",
      "name": "TCL科技",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4575957431.0,
        "margin_buy": 152907459.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.79,
        "financing_pressure_score": 38.73,
        "incremental_financing_pressure_score": 48.42,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.32
      },
      "trap_score": 37.79
    },
    {
      "code": "600584",
      "name": "长电科技",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6145154200.0,
        "margin_buy": 617247440.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.5,
        "financing_pressure_score": 74.13,
        "incremental_financing_pressure_score": 92.67,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 52.0,
        "turnover_z_score": 0.21
      },
      "trap_score": 61.26,
      "trend": {
        "available": true,
        "down_streak": 4,
        "return_3d_pct": -8.09,
        "return_5d_pct": -10.1,
        "return_8d_pct": -9.03,
        "ma5_gap_pct": -6.18,
        "ma10_gap_pct": -7.97,
        "drawdown_8d_pct": -11.99,
        "trend_penalty": 72.0,
        "trend_label": "已连跌 4 天"
      }
    },
    {
      "code": "600570",
      "name": "恒生电子",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2508474136.0,
        "margin_buy": 96806449.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.36,
        "financing_pressure_score": 42.87,
        "incremental_financing_pressure_score": 53.59,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.88
      },
      "trap_score": 40.57
    },
    {
      "code": "600845",
      "name": "宝信软件",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 615075404.0,
        "margin_buy": 19425794.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.57,
        "financing_pressure_score": 37.27,
        "incremental_financing_pressure_score": 46.58,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 4.56
      },
      "trap_score": 35.18
    },
    {
      "code": "600536",
      "name": "中国软件",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1553003817.0,
        "margin_buy": 54969437.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.66,
        "financing_pressure_score": 40.32,
        "incremental_financing_pressure_score": 50.4,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.28
      },
      "trap_score": 39.9
    },
    {
      "code": "600588",
      "name": "用友网络",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1454723873.0,
        "margin_buy": 97164904.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.35,
        "financing_pressure_score": 60.96,
        "incremental_financing_pressure_score": 76.2,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.8
      },
      "trap_score": 50.29
    },
    {
      "code": "600602",
      "name": "云赛智联",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 760857561.0,
        "margin_buy": 37031991.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.29,
        "financing_pressure_score": 50.94,
        "incremental_financing_pressure_score": 63.67,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.32
      },
      "trap_score": 44.09
    },
    {
      "code": "600171",
      "name": "上海贝岭",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 841225871.0,
        "margin_buy": 16276409.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.33,
        "financing_pressure_score": 27.09,
        "incremental_financing_pressure_score": 33.86,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.64
      },
      "trap_score": 31.82
    },
    {
      "code": "600498",
      "name": "烽火通信",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2202400827.0,
        "margin_buy": 197820978.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.44,
        "financing_pressure_score": 70.95,
        "incremental_financing_pressure_score": 88.68,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 43.52
      },
      "trap_score": 58.13
    },
    {
      "code": "600183",
      "name": "生益科技",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4432694028.0,
        "margin_buy": 658216574.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.78,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.24
      },
      "trap_score": 57.95
    },
    {
      "code": "600460",
      "name": "士兰微",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2258355777.0,
        "margin_buy": 207378144.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.52,
        "financing_pressure_score": 71.55,
        "incremental_financing_pressure_score": 89.44,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 36.16
      },
      "trap_score": 56.93
    },
    {
      "code": "600703",
      "name": "三安光电",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4137493201.0,
        "margin_buy": 208785670.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.41,
        "financing_pressure_score": 52.25,
        "incremental_financing_pressure_score": 65.31,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 43.28,
        "turnover_z_score": 1.87
      },
      "trap_score": 49.67,
      "trend": {
        "available": true,
        "down_streak": 1,
        "return_3d_pct": 2.24,
        "return_5d_pct": 0.84,
        "return_8d_pct": 0.08,
        "ma5_gap_pct": 0.56,
        "ma10_gap_pct": 0.73,
        "drawdown_8d_pct": -4.75,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "601138",
      "name": "工业富联",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7390768178.0,
        "margin_buy": 428258899.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.65,
        "financing_pressure_score": 56.24,
        "incremental_financing_pressure_score": 70.3,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 5.2
      },
      "trap_score": 43.85
    },
    {
      "code": "601360",
      "name": "三六零",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2018615797.0,
        "margin_buy": 113716879.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.02,
        "financing_pressure_score": 55.38,
        "incremental_financing_pressure_score": 69.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.16
      },
      "trap_score": 45.65
    },
    {
      "code": "603000",
      "name": "人民网",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 441242552.0,
        "margin_buy": 21542803.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.51,
        "financing_pressure_score": 51.06,
        "incremental_financing_pressure_score": 63.82,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.08
      },
      "trap_score": 42.89
    },
    {
      "code": "300054",
      "name": "鼎龙股份",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2142149913.0,
        "margin_buy": 84378977.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.02,
        "financing_pressure_score": 43.51,
        "incremental_financing_pressure_score": 54.39,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.16
      },
      "trap_score": 41.91
    },
    {
      "code": "002192",
      "name": "融捷股份",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1293477044.0,
        "margin_buy": 66389775.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.78,
        "financing_pressure_score": 52.71,
        "incremental_financing_pressure_score": 65.88,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 46.24,
        "turnover_z_score": -0.73
      },
      "trap_score": 50.47,
      "trend": {
        "available": true,
        "down_streak": 5,
        "return_3d_pct": -8.73,
        "return_5d_pct": -12.09,
        "return_8d_pct": -9.31,
        "ma5_gap_pct": -6.36,
        "ma10_gap_pct": -8.96,
        "drawdown_8d_pct": -12.09,
        "trend_penalty": 94.0,
        "trend_label": "已连跌 5 天"
      }
    },
    {
      "code": "002466",
      "name": "天齐锂业",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3321993373.0,
        "margin_buy": 147170920.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.0,
        "financing_pressure_score": 47.44,
        "incremental_financing_pressure_score": 59.3,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.0
      },
      "trap_score": 43.65
    },
    {
      "code": "002837",
      "name": "英维克",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4066755344.0,
        "margin_buy": 624150792.0,
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
      "code": "601869",
      "name": "长飞光纤",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2441889858.0,
        "margin_buy": 272181515.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.46,
        "financing_pressure_score": 77.44,
        "incremental_financing_pressure_score": 96.8,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.68
      },
      "trap_score": 56.28
    },
    {
      "code": "002938",
      "name": "鹏鼎控股",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1551803249.0,
        "margin_buy": 90372544.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.74,
        "financing_pressure_score": 56.39,
        "incremental_financing_pressure_score": 70.49,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 5.92
      },
      "trap_score": 44.06
    },
    {
      "code": "000878",
      "name": "云南铜业",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1871619844.0,
        "margin_buy": 61676324.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.1,
        "financing_pressure_score": 38.36,
        "incremental_financing_pressure_score": 47.95,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.8
      },
      "trap_score": 38.12
    },
    {
      "code": "002155",
      "name": "湖南黄金",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2241922154.0,
        "margin_buy": 313618287.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.02,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 40.16
      },
      "trap_score": 61.53
    },
    {
      "code": "600378",
      "name": "昊华科技",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1529013990.0,
        "margin_buy": 399180976.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.3,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 58.4
      },
      "trap_score": 65.18
    },
    {
      "code": "300418",
      "name": "昆仑万维",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3246674819.0,
        "margin_buy": 271434334.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 9.08,
        "financing_pressure_score": 69.08,
        "incremental_financing_pressure_score": 86.35,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 72.64
      },
      "trap_score": 63.11
    },
    {
      "code": "002218",
      "name": "拓日新能",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 102557869.0,
        "margin_buy": 5276684.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.84,
        "financing_pressure_score": 52.77,
        "incremental_financing_pressure_score": 65.97,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.72
      },
      "trap_score": 44.19
    },
    {
      "code": "300617",
      "name": "安靠智电",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.19,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.52
      },
      "trap_score": 22.6
    },
    {
      "code": "300738",
      "name": "奥飞数据",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1452116242.0,
        "margin_buy": 56555903.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.29,
        "financing_pressure_score": 43.16,
        "incremental_financing_pressure_score": 53.95,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.32
      },
      "trap_score": 42.19
    },
    {
      "code": "002126",
      "name": "银轮股份",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 530317783.0,
        "margin_buy": 75840690.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.57,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.56
      },
      "trap_score": 57.61
    },
    {
      "code": "002050",
      "name": "三花智控",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5243080009.0,
        "margin_buy": 133533021.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.34,
        "financing_pressure_score": 32.37,
        "incremental_financing_pressure_score": 40.47,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.72
      },
      "trap_score": 34.21
    },
    {
      "code": "603075",
      "name": "热威股份",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 40759383.0,
        "margin_buy": 2253209.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.01,
        "financing_pressure_score": 54.82,
        "incremental_financing_pressure_score": 68.52,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 40.08,
        "turnover_z_score": 0.36
      },
      "trap_score": 50.18,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": -1.69,
        "return_5d_pct": -0.98,
        "return_8d_pct": -0.62,
        "ma5_gap_pct": -1.14,
        "ma10_gap_pct": -0.95,
        "drawdown_8d_pct": -1.95,
        "trend_penalty": 0.0,
        "trend_label": "趋势中性"
      }
    },
    {
      "code": "603667",
      "name": "五洲新春",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1086145523.0,
        "margin_buy": 54554251.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.22,
        "financing_pressure_score": 52.12,
        "incremental_financing_pressure_score": 65.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 33.76
      },
      "trap_score": 47.71
    },
    {
      "code": "605020",
      "name": "永和股份",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 461959261.0,
        "margin_buy": 43904134.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.17,
        "financing_pressure_score": 72.51,
        "incremental_financing_pressure_score": 90.64,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.36
      },
      "trap_score": 53.6
    },
    {
      "code": "600160",
      "name": "巨化股份",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4255096020.0,
        "margin_buy": 88125093.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.77,
        "financing_pressure_score": 28.57,
        "incremental_financing_pressure_score": 35.71,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.16
      },
      "trap_score": 31.59
    },
    {
      "code": "603379",
      "name": "三美股份",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 826080267.0,
        "margin_buy": 18138446.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.74,
        "financing_pressure_score": 29.57,
        "incremental_financing_pressure_score": 36.96,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 5.92
      },
      "trap_score": 31.99
    },
    {
      "code": "600988",
      "name": "赤峰黄金",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1477929855.0,
        "margin_buy": 183654024.0,
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
      "code": "000636",
      "name": "风华高科",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3373196699.0,
        "margin_buy": 400510692.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.54,
        "financing_pressure_score": 79.62,
        "incremental_financing_pressure_score": 99.52,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 60.32
      },
      "trap_score": 65.39
    },
    {
      "code": "688825",
      "name": "长鑫科技",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 10859857584.0,
        "margin_buy": 1030567788.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.43,
        "financing_pressure_score": 72.47,
        "incremental_financing_pressure_score": 90.59,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 35.44
      },
      "trap_score": 57.2
    },
    {
      "code": "600105",
      "name": "永鼎股份",
      "margin_date": "20260904",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1951121340.0,
        "margin_buy": 268730262.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.39,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 59.12
      },
      "trap_score": 65.32
    },
    {
      "code": "300285",
      "name": "国瓷材料",
      "margin_date": "20260903",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4275670839.0,
        "margin_buy": 424255717.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.82,
        "financing_pressure_score": 73.77,
        "incremental_financing_pressure_score": 92.21,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 70.56
      },
      "trap_score": 64.81
    }
  ]
};
