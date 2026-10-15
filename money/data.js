window.__QUANT_DATA__ = {
  "generated_at": "2026-10-15T17:46:36+08:00",
  "data_freshness": {
    "warning_target_date": "2026-10-16",
    "spot_snapshot_at": "2026-10-15T17:46:36+08:00",
    "margin_data_as_of": "20261014",
    "margin_data_dates_by_market": {
      "szse": "20261014",
      "sse": "20261014"
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
    "total_rows": 5576,
    "turnover_rate_available_rows": 5576,
    "turnover_rate_missing_rows": 0,
    "turnover_rate_missing_ratio": 0.0,
    "float_market_cap_available_rows": 0,
    "float_market_cap_missing_rows": 5576,
    "float_market_cap_missing_ratio": 1.0
  },
  "daily_warning": {
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
  "warning_history": [
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
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 82,
        "margin_balance": 15761760128.0,
        "margin_buy": 412868848.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.11,
        "financing_pressure_score": 32.96,
        "incremental_financing_pressure_score": 41.19,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.88,
        "turnover_z_score": 0.03
      },
      "trap_score": 48.51,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": -5.48,
        "return_5d_pct": -9.81,
        "return_8d_pct": -12.88,
        "ma5_gap_pct": -5.08,
        "ma10_gap_pct": -9.67,
        "drawdown_8d_pct": -14.19,
        "trend_penalty": 72.0,
        "trend_label": "短线趋势走弱"
      }
    },
    {
      "code": "002384",
      "name": "东山精密",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 68,
        "margin_balance": 9725780319.0,
        "margin_buy": 462029817.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.0,
        "financing_pressure_score": 50.0,
        "incremental_financing_pressure_score": 62.51,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 40.0,
        "turnover_z_score": 0.69
      },
      "trap_score": 54.3,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": -8.61,
        "return_5d_pct": -17.56,
        "return_8d_pct": -26.19,
        "ma5_gap_pct": -8.24,
        "ma10_gap_pct": -18.31,
        "drawdown_8d_pct": -27.46,
        "trend_penalty": 72.0,
        "trend_label": "短线趋势走弱"
      }
    },
    {
      "code": "300308",
      "name": "中际旭创",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 88,
        "margin_balance": 28503551943.0,
        "margin_buy": 1280628966.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.97,
        "financing_pressure_score": 47.94,
        "incremental_financing_pressure_score": 59.93,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.76,
        "turnover_z_score": 1.63
      },
      "trap_score": 57.12,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": -9.32,
        "return_5d_pct": -15.97,
        "return_8d_pct": -19.28,
        "ma5_gap_pct": -8.34,
        "ma10_gap_pct": -14.6,
        "drawdown_8d_pct": -19.08,
        "trend_penalty": 72.0,
        "trend_label": "短线趋势走弱"
      }
    },
    {
      "code": "002230",
      "name": "科大讯飞",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5147073541.0,
        "margin_buy": 36258960.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.9,
        "financing_pressure_score": 9.86,
        "incremental_financing_pressure_score": 12.33,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.2
      },
      "trap_score": 23.38
    },
    {
      "code": "688256",
      "name": "寒武纪",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 16533536382.0,
        "margin_buy": 515158581.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.68,
        "financing_pressure_score": 36.93,
        "incremental_financing_pressure_score": 46.16,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.44
      },
      "trap_score": 36.81
    },
    {
      "code": "603019",
      "name": "中科曙光",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8003458226.0,
        "margin_buy": 193400467.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.04,
        "financing_pressure_score": 31.33,
        "incremental_financing_pressure_score": 39.16,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.32
      },
      "trap_score": 34.86
    },
    {
      "code": "603160",
      "name": "汇顶科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 921587231.0,
        "margin_buy": 11020449.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.81,
        "financing_pressure_score": 16.74,
        "incremental_financing_pressure_score": 20.93,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.48
      },
      "trap_score": 26.33
    },
    {
      "code": "603986",
      "name": "兆易创新",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 15625687289.0,
        "margin_buy": 575993809.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.57,
        "financing_pressure_score": 41.49,
        "incremental_financing_pressure_score": 51.86,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 44.56,
        "turnover_z_score": 1.14
      },
      "trap_score": 45.08,
      "trend": {
        "available": true,
        "down_streak": 7,
        "return_3d_pct": -10.49,
        "return_5d_pct": -16.8,
        "return_8d_pct": -22.4,
        "ma5_gap_pct": -8.14,
        "ma10_gap_pct": -16.01,
        "drawdown_8d_pct": -24.31,
        "trend_penalty": 100.0,
        "trend_label": "已连跌 7 天"
      }
    },
    {
      "code": "603501",
      "name": "豪威集团",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4372156588.0,
        "margin_buy": 49883729.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.94,
        "financing_pressure_score": 15.97,
        "incremental_financing_pressure_score": 19.97,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.52
      },
      "trap_score": 26.19
    },
    {
      "code": "603893",
      "name": "瑞芯微",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1517842350.0,
        "margin_buy": 186415318.0,
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
      "code": "688111",
      "name": "金山办公",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4533356391.0,
        "margin_buy": 57926726.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.24,
        "financing_pressure_score": 17.89,
        "incremental_financing_pressure_score": 22.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.92
      },
      "trap_score": 27.53
    },
    {
      "code": "688041",
      "name": "海光信息",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8431131638.0,
        "margin_buy": 178699132.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.16,
        "financing_pressure_score": 28.96,
        "incremental_financing_pressure_score": 36.2,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.28
      },
      "trap_score": 32.39
    },
    {
      "code": "688012",
      "name": "中微公司",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4348435136.0,
        "margin_buy": 175984209.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.37,
        "financing_pressure_score": 44.38,
        "incremental_financing_pressure_score": 55.47,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.96
      },
      "trap_score": 41.26
    },
    {
      "code": "688008",
      "name": "澜起科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 12254533187.0,
        "margin_buy": 391410110.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.39,
        "financing_pressure_score": 37.55,
        "incremental_financing_pressure_score": 46.94,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 35.12,
        "turnover_z_score": 1.44
      },
      "trap_score": 41.42,
      "trend": {
        "available": true,
        "down_streak": 4,
        "return_3d_pct": -15.03,
        "return_5d_pct": -17.26,
        "return_8d_pct": -21.86,
        "ma5_gap_pct": -10.54,
        "ma10_gap_pct": -16.24,
        "drawdown_8d_pct": -23.33,
        "trend_penalty": 88.0,
        "trend_label": "已连跌 4 天"
      }
    },
    {
      "code": "688169",
      "name": "石头科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 893389207.0,
        "margin_buy": 66211688.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.39,
        "financing_pressure_score": 64.86,
        "incremental_financing_pressure_score": 81.08,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.12
      },
      "trap_score": 50.51
    },
    {
      "code": "688072",
      "name": "拓荆科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1575647492.0,
        "margin_buy": 154174760.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.17,
        "financing_pressure_score": 73.35,
        "incremental_financing_pressure_score": 91.69,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.36
      },
      "trap_score": 53.98
    },
    {
      "code": "688099",
      "name": "晶晨股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1036833050.0,
        "margin_buy": 105256283.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.23,
        "financing_pressure_score": 74.46,
        "incremental_financing_pressure_score": 93.07,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.84
      },
      "trap_score": 56.17
    },
    {
      "code": "688027",
      "name": "国盾量子",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1097007041.0,
        "margin_buy": 26497976.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.44,
        "financing_pressure_score": 31.32,
        "incremental_financing_pressure_score": 39.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.52
      },
      "trap_score": 35.5
    },
    {
      "code": "688608",
      "name": "恒玄科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 940732987.0,
        "margin_buy": 11768851.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.87,
        "financing_pressure_score": 17.51,
        "incremental_financing_pressure_score": 21.89,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.96
      },
      "trap_score": 28.37
    },
    {
      "code": "688018",
      "name": "乐鑫科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 609306972.0,
        "margin_buy": 137716786.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.29,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 42.32
      },
      "trap_score": 61.96
    },
    {
      "code": "688036",
      "name": "传音控股",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 917013733.0,
        "margin_buy": 23952664.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.91,
        "financing_pressure_score": 32.9,
        "incremental_financing_pressure_score": 41.12,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.28
      },
      "trap_score": 33.76
    },
    {
      "code": "688047",
      "name": "龙芯中科",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1114313870.0,
        "margin_buy": 11232204.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.95,
        "financing_pressure_score": 14.11,
        "incremental_financing_pressure_score": 17.64,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.6
      },
      "trap_score": 25.37
    },
    {
      "code": "688126",
      "name": "沪硅产业",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2330492760.0,
        "margin_buy": 50153468.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.87,
        "financing_pressure_score": 29.22,
        "incremental_financing_pressure_score": 36.52,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.96
      },
      "trap_score": 33.64
    },
    {
      "code": "688037",
      "name": "芯源微",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 356408929.0,
        "margin_buy": 32309801.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.35,
        "financing_pressure_score": 71.2,
        "incremental_financing_pressure_score": 89.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.8
      },
      "trap_score": 53.3
    },
    {
      "code": "688213",
      "name": "思特威-W",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 862044063.0,
        "margin_buy": 41446459.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.55,
        "financing_pressure_score": 50.46,
        "incremental_financing_pressure_score": 63.08,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 28.4
      },
      "trap_score": 45.89
    },
    {
      "code": "688120",
      "name": "华海清科",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1183334372.0,
        "margin_buy": 44375894.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.48,
        "financing_pressure_score": 42.0,
        "incremental_financing_pressure_score": 52.5,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.84
      },
      "trap_score": 40.37
    },
    {
      "code": "688981",
      "name": "中芯国际",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 10247777667.0,
        "margin_buy": 196272183.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.38,
        "financing_pressure_score": 26.81,
        "incremental_financing_pressure_score": 33.52,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.04
      },
      "trap_score": 33.37
    },
    {
      "code": "603296",
      "name": "华勤技术",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1165615338.0,
        "margin_buy": 43216639.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.34,
        "financing_pressure_score": 41.66,
        "incremental_financing_pressure_score": 52.08,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.72
      },
      "trap_score": 38.39
    },
    {
      "code": "300033",
      "name": "同花顺",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5655672929.0,
        "margin_buy": 144671634.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.52,
        "financing_pressure_score": 32.46,
        "incremental_financing_pressure_score": 40.58,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.16
      },
      "trap_score": 36.14
    },
    {
      "code": "300496",
      "name": "中科创达",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1609677917.0,
        "margin_buy": 15801220.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.79,
        "financing_pressure_score": 13.74,
        "incremental_financing_pressure_score": 17.18,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.32
      },
      "trap_score": 26.55
    },
    {
      "code": "300502",
      "name": "新易盛",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 18015456981.0,
        "margin_buy": 652473683.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.43,
        "financing_pressure_score": 40.97,
        "incremental_financing_pressure_score": 51.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 35.44,
        "turnover_z_score": 2.57
      },
      "trap_score": 43.02,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": -11.96,
        "return_5d_pct": -19.15,
        "return_8d_pct": -23.44,
        "ma5_gap_pct": -10.31,
        "ma10_gap_pct": -17.32,
        "drawdown_8d_pct": -22.12,
        "trend_penalty": 72.0,
        "trend_label": "短线趋势走弱"
      }
    },
    {
      "code": "300223",
      "name": "君正股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3075218874.0,
        "margin_buy": 162465474.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.06,
        "financing_pressure_score": 53.51,
        "incremental_financing_pressure_score": 66.89,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 40.48,
        "turnover_z_score": 0.16
      },
      "trap_score": 49.68,
      "trend": {
        "available": true,
        "down_streak": 7,
        "return_3d_pct": -9.94,
        "return_5d_pct": -16.03,
        "return_8d_pct": -23.98,
        "ma5_gap_pct": -7.99,
        "ma10_gap_pct": -16.39,
        "drawdown_8d_pct": -25.3,
        "trend_penalty": 100.0,
        "trend_label": "已连跌 7 天"
      }
    },
    {
      "code": "300383",
      "name": "光环新网",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1267854501.0,
        "margin_buy": 10687942.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.79,
        "financing_pressure_score": 11.8,
        "incremental_financing_pressure_score": 14.75,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.32
      },
      "trap_score": 25.67
    },
    {
      "code": "300458",
      "name": "全志科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1308925572.0,
        "margin_buy": 78277273.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.64,
        "financing_pressure_score": 57.23,
        "incremental_financing_pressure_score": 71.54,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.12
      },
      "trap_score": 49.08
    },
    {
      "code": "300474",
      "name": "景嘉微",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1330022060.0,
        "margin_buy": 19353814.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.58,
        "financing_pressure_score": 20.37,
        "incremental_financing_pressure_score": 25.47,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.64
      },
      "trap_score": 29.19
    },
    {
      "code": "300454",
      "name": "深信服",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1128659415.0,
        "margin_buy": 152659563.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.54,
        "financing_pressure_score": 80.0,
        "incremental_financing_pressure_score": 100.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 36.32
      },
      "trap_score": 60.76
    },
    {
      "code": "300212",
      "name": "*ST易录",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.8,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.4
      },
      "trap_score": 18.78
    },
    {
      "code": "300251",
      "name": "光线传媒",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1055007590.0,
        "margin_buy": 65042793.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.79,
        "financing_pressure_score": 58.21,
        "incremental_financing_pressure_score": 72.77,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.32
      },
      "trap_score": 48.16
    },
    {
      "code": "300229",
      "name": "拓尔思",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 887970639.0,
        "margin_buy": 24405267.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.11,
        "financing_pressure_score": 33.99,
        "incremental_financing_pressure_score": 42.48,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.88
      },
      "trap_score": 36.17
    },
    {
      "code": "300624",
      "name": "万兴科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 544878527.0,
        "margin_buy": 47822622.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.13,
        "financing_pressure_score": 70.33,
        "incremental_financing_pressure_score": 87.91,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 57.04
      },
      "trap_score": 60.56
    },
    {
      "code": "300442",
      "name": "润泽科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3155484253.0,
        "margin_buy": 51532812.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.03,
        "financing_pressure_score": 22.86,
        "incremental_financing_pressure_score": 28.58,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.24
      },
      "trap_score": 29.43
    },
    {
      "code": "300803",
      "name": "指南针",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3132013812.0,
        "margin_buy": 80440929.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.2,
        "financing_pressure_score": 32.55,
        "incremental_financing_pressure_score": 40.68,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.6
      },
      "trap_score": 37.27
    },
    {
      "code": "300364",
      "name": "中文在线",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1167733979.0,
        "margin_buy": 423926063.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 19.95,
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
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6606539168.0,
        "margin_buy": 570015105.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.72,
        "financing_pressure_score": 69.88,
        "incremental_financing_pressure_score": 87.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.76
      },
      "trap_score": 53.3
    },
    {
      "code": "300570",
      "name": "太辰光",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1230708164.0,
        "margin_buy": 128269784.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.65,
        "financing_pressure_score": 75.27,
        "incremental_financing_pressure_score": 94.08,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 61.2
      },
      "trap_score": 63.61
    },
    {
      "code": "300782",
      "name": "卓胜微",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1524508077.0,
        "margin_buy": 21396712.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.3,
        "financing_pressure_score": 19.65,
        "incremental_financing_pressure_score": 24.56,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.4
      },
      "trap_score": 30.02
    },
    {
      "code": "300548",
      "name": "长芯博创",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2024039109.0,
        "margin_buy": 91439503.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.8,
        "financing_pressure_score": 48.14,
        "incremental_financing_pressure_score": 60.18,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.4
      },
      "trap_score": 45.24
    },
    {
      "code": "300604",
      "name": "长川科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3011628270.0,
        "margin_buy": 285846210.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 5.21,
        "financing_pressure_score": 72.47,
        "incremental_financing_pressure_score": 90.59,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 41.68
      },
      "trap_score": 58.45
    },
    {
      "code": "300118",
      "name": "东方日升",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 504017671.0,
        "margin_buy": 8365802.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.77,
        "financing_pressure_score": 23.24,
        "incremental_financing_pressure_score": 29.05,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 22.16
      },
      "trap_score": 32.39
    },
    {
      "code": "300373",
      "name": "扬杰科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1430445490.0,
        "margin_buy": 46216680.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.02,
        "financing_pressure_score": 37.85,
        "incremental_financing_pressure_score": 47.31,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.16
      },
      "trap_score": 37.76
    },
    {
      "code": "301236",
      "name": "软通动力",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2007351910.0,
        "margin_buy": 30879490.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.64,
        "financing_pressure_score": 21.54,
        "incremental_financing_pressure_score": 26.92,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.12
      },
      "trap_score": 29.82
    },
    {
      "code": "301269",
      "name": "华大九天",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 843405133.0,
        "margin_buy": 22306699.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.89,
        "financing_pressure_score": 33.16,
        "incremental_financing_pressure_score": 41.45,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.12
      },
      "trap_score": 35.45
    },
    {
      "code": "301312",
      "name": "智立方",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 272012145.0,
        "margin_buy": 14155213.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.85,
        "financing_pressure_score": 53.09,
        "incremental_financing_pressure_score": 66.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 38.8,
        "turnover_z_score": -0.67
      },
      "trap_score": 49.15,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": -6.19,
        "return_5d_pct": -14.46,
        "return_8d_pct": -23.58,
        "ma5_gap_pct": -6.18,
        "ma10_gap_pct": -15.32,
        "drawdown_8d_pct": -24.04,
        "trend_penalty": 72.0,
        "trend_label": "短线趋势走弱"
      }
    },
    {
      "code": "301308",
      "name": "江波龙",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5460923815.0,
        "margin_buy": 106786816.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.99,
        "financing_pressure_score": 27.38,
        "incremental_financing_pressure_score": 34.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.92
      },
      "trap_score": 36.2
    },
    {
      "code": "301095",
      "name": "广立微",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 484602958.0,
        "margin_buy": 13246725.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.19,
        "financing_pressure_score": 33.87,
        "incremental_financing_pressure_score": 42.34,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.52
      },
      "trap_score": 37.85
    },
    {
      "code": "301171",
      "name": "易点天下",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1227162486.0,
        "margin_buy": 144077773.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 8.74,
        "financing_pressure_score": 79.22,
        "incremental_financing_pressure_score": 99.03,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 69.92
      },
      "trap_score": 67.13
    },
    {
      "code": "301165",
      "name": "锐捷网络",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 618998210.0,
        "margin_buy": 33662641.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.38,
        "financing_pressure_score": 54.34,
        "incremental_financing_pressure_score": 67.92,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.04
      },
      "trap_score": 44.16
    },
    {
      "code": "300059",
      "name": "东方财富",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 21951514095.0,
        "margin_buy": 194729692.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.1,
        "financing_pressure_score": 12.42,
        "incremental_financing_pressure_score": 15.52,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.8
      },
      "trap_score": 26.45
    },
    {
      "code": "002371",
      "name": "北方华创",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2350579706.0,
        "margin_buy": 115950808.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.61,
        "financing_pressure_score": 51.46,
        "incremental_financing_pressure_score": 64.33,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.88
      },
      "trap_score": 43.23
    },
    {
      "code": "002475",
      "name": "立讯精密",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5442005029.0,
        "margin_buy": 137647669.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.28,
        "financing_pressure_score": 32.23,
        "incremental_financing_pressure_score": 40.29,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.24
      },
      "trap_score": 34.05
    },
    {
      "code": "002463",
      "name": "沪电股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4730612128.0,
        "margin_buy": 411787528.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.92,
        "financing_pressure_score": 70.11,
        "incremental_financing_pressure_score": 87.64,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 31.36
      },
      "trap_score": 55.32
    },
    {
      "code": "002555",
      "name": "三七互娱",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1595019609.0,
        "margin_buy": 38883096.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.24,
        "financing_pressure_score": 31.5,
        "incremental_financing_pressure_score": 39.38,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.92
      },
      "trap_score": 35.26
    },
    {
      "code": "002236",
      "name": "大华股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1350881940.0,
        "margin_buy": 42636620.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.95,
        "financing_pressure_score": 37.25,
        "incremental_financing_pressure_score": 46.56,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.6
      },
      "trap_score": 35.78
    },
    {
      "code": "002241",
      "name": "歌尔股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3801237289.0,
        "margin_buy": 80544437.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.69,
        "financing_pressure_score": 28.95,
        "incremental_financing_pressure_score": 36.19,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.52
      },
      "trap_score": 33.23
    },
    {
      "code": "600050",
      "name": "中国联通",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2580714051.0,
        "margin_buy": 51669503.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.67,
        "financing_pressure_score": 28.02,
        "incremental_financing_pressure_score": 35.02,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 5.36
      },
      "trap_score": 31.18
    },
    {
      "code": "002859",
      "name": "洁美科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 759953316.0,
        "margin_buy": 41537796.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.46,
        "financing_pressure_score": 54.48,
        "incremental_financing_pressure_score": 68.11,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.68
      },
      "trap_score": 45.95
    },
    {
      "code": "002920",
      "name": "德赛西威",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1324130635.0,
        "margin_buy": 35672062.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.14,
        "financing_pressure_score": 33.55,
        "incremental_financing_pressure_score": 41.94,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.12
      },
      "trap_score": 34.42
    },
    {
      "code": "002456",
      "name": "欧菲光",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1409124011.0,
        "margin_buy": 9888739.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.44,
        "financing_pressure_score": 9.82,
        "incremental_financing_pressure_score": 12.28,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.52
      },
      "trap_score": 24.22
    },
    {
      "code": "002156",
      "name": "通富微电",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3972598099.0,
        "margin_buy": 138100940.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.37,
        "financing_pressure_score": 39.81,
        "incremental_financing_pressure_score": 49.76,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.96
      },
      "trap_score": 40.81
    },
    {
      "code": "002261",
      "name": "拓维信息",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1306082195.0,
        "margin_buy": 16866215.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.96,
        "financing_pressure_score": 18.08,
        "incremental_financing_pressure_score": 22.6,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.68
      },
      "trap_score": 28.77
    },
    {
      "code": "002273",
      "name": "水晶光电",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2693314388.0,
        "margin_buy": 34242837.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.0,
        "financing_pressure_score": 17.8,
        "incremental_financing_pressure_score": 22.25,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.0
      },
      "trap_score": 30.31
    },
    {
      "code": "002281",
      "name": "光迅科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3529461284.0,
        "margin_buy": 182818446.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.37,
        "financing_pressure_score": 52.96,
        "incremental_financing_pressure_score": 66.2,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 26.96
      },
      "trap_score": 46.72
    },
    {
      "code": "002415",
      "name": "海康威视",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4085563643.0,
        "margin_buy": 144366764.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.8,
        "financing_pressure_score": 40.27,
        "incremental_financing_pressure_score": 50.34,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.4
      },
      "trap_score": 36.9
    },
    {
      "code": "002916",
      "name": "深南电路",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1375720083.0,
        "margin_buy": 115917617.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.28,
        "financing_pressure_score": 69.28,
        "incremental_financing_pressure_score": 86.6,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.24
      },
      "trap_score": 50.72
    },
    {
      "code": "002517",
      "name": "恺英网络",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1608101439.0,
        "margin_buy": 40046557.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.19,
        "financing_pressure_score": 31.92,
        "incremental_financing_pressure_score": 39.9,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.52
      },
      "trap_score": 35.37
    },
    {
      "code": "002049",
      "name": "紫光国微",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4007775303.0,
        "margin_buy": 37070135.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.38,
        "financing_pressure_score": 12.95,
        "incremental_financing_pressure_score": 16.19,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.04
      },
      "trap_score": 25.54
    },
    {
      "code": "002138",
      "name": "顺络电子",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1210881293.0,
        "margin_buy": 27074842.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.69,
        "financing_pressure_score": 29.89,
        "incremental_financing_pressure_score": 37.36,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.52
      },
      "trap_score": 35.25
    },
    {
      "code": "002185",
      "name": "华天科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2367555599.0,
        "margin_buy": 99599990.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.69,
        "financing_pressure_score": 45.65,
        "incremental_financing_pressure_score": 57.07,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.52
      },
      "trap_score": 43.95
    },
    {
      "code": "000063",
      "name": "中兴通讯",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 9088866198.0,
        "margin_buy": 109611271.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.76,
        "financing_pressure_score": 16.88,
        "incremental_financing_pressure_score": 21.1,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.08
      },
      "trap_score": 27.91
    },
    {
      "code": "000977",
      "name": "浪潮信息",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4317665690.0,
        "margin_buy": 241373289.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.16,
        "financing_pressure_score": 55.15,
        "incremental_financing_pressure_score": 68.94,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.28
      },
      "trap_score": 47.37
    },
    {
      "code": "000938",
      "name": "紫光股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4472447556.0,
        "margin_buy": 247991607.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 4.64,
        "financing_pressure_score": 54.91,
        "incremental_financing_pressure_score": 68.63,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 37.12,
        "turnover_z_score": 1.11
      },
      "trap_score": 49.63,
      "trend": {
        "available": true,
        "down_streak": 4,
        "return_3d_pct": -8.91,
        "return_5d_pct": -14.78,
        "return_8d_pct": -18.09,
        "ma5_gap_pct": -7.48,
        "ma10_gap_pct": -13.21,
        "drawdown_8d_pct": -18.27,
        "trend_penalty": 88.0,
        "trend_label": "已连跌 4 天"
      }
    },
    {
      "code": "000988",
      "name": "华工科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6902220718.0,
        "margin_buy": 147318630.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.38,
        "financing_pressure_score": 29.07,
        "incremental_financing_pressure_score": 36.34,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.04
      },
      "trap_score": 35.99
    },
    {
      "code": "000034",
      "name": "神州数码",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1616336749.0,
        "margin_buy": 23913034.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.77,
        "financing_pressure_score": 20.71,
        "incremental_financing_pressure_score": 25.89,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.16
      },
      "trap_score": 29.65
    },
    {
      "code": "000066",
      "name": "中国长城",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1781256662.0,
        "margin_buy": 33103737.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.52,
        "financing_pressure_score": 26.02,
        "incremental_financing_pressure_score": 32.52,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.16
      },
      "trap_score": 31.64
    },
    {
      "code": "000725",
      "name": "京东方Ａ",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 10296836043.0,
        "margin_buy": 560507267.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.5,
        "financing_pressure_score": 54.37,
        "incremental_financing_pressure_score": 67.96,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 20.0
      },
      "trap_score": 45.97
    },
    {
      "code": "000100",
      "name": "TCL科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4414603314.0,
        "margin_buy": 149304022.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.8,
        "financing_pressure_score": 39.06,
        "incremental_financing_pressure_score": 48.82,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.4
      },
      "trap_score": 37.96
    },
    {
      "code": "600584",
      "name": "长电科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5935821719.0,
        "margin_buy": 164422823.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.77,
        "financing_pressure_score": 34.16,
        "incremental_financing_pressure_score": 42.7,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 30.16
      },
      "trap_score": 38.9
    },
    {
      "code": "600570",
      "name": "恒生电子",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2471409488.0,
        "margin_buy": 19900776.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.16,
        "financing_pressure_score": 11.27,
        "incremental_financing_pressure_score": 14.09,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.28
      },
      "trap_score": 24.43
    },
    {
      "code": "600845",
      "name": "宝信软件",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 576367779.0,
        "margin_buy": 13325385.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.59,
        "financing_pressure_score": 30.5,
        "incremental_financing_pressure_score": 38.12,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 4.72
      },
      "trap_score": 32.17
    },
    {
      "code": "600536",
      "name": "中国软件",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1472623063.0,
        "margin_buy": 8084532.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.89,
        "financing_pressure_score": 7.69,
        "incremental_financing_pressure_score": 9.61,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.12
      },
      "trap_score": 22.38
    },
    {
      "code": "600588",
      "name": "用友网络",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1362899761.0,
        "margin_buy": 22319186.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.6,
        "financing_pressure_score": 22.93,
        "incremental_financing_pressure_score": 28.66,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 12.8
      },
      "trap_score": 30.38
    },
    {
      "code": "600602",
      "name": "云赛智联",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 703901144.0,
        "margin_buy": 10833043.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.28,
        "financing_pressure_score": 21.55,
        "incremental_financing_pressure_score": 26.93,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.24
      },
      "trap_score": 29.25
    },
    {
      "code": "600171",
      "name": "上海贝岭",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 804127243.0,
        "margin_buy": 9598077.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.22,
        "financing_pressure_score": 16.71,
        "incremental_financing_pressure_score": 20.89,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 9.76
      },
      "trap_score": 26.97
    },
    {
      "code": "600498",
      "name": "烽火通信",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2036502492.0,
        "margin_buy": 61929690.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.69,
        "financing_pressure_score": 36.33,
        "incremental_financing_pressure_score": 45.41,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.52
      },
      "trap_score": 39.75
    },
    {
      "code": "600183",
      "name": "生益科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4209740530.0,
        "margin_buy": 399729695.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.12,
        "financing_pressure_score": 72.49,
        "incremental_financing_pressure_score": 90.61,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.96
      },
      "trap_score": 53.51
    },
    {
      "code": "600460",
      "name": "士兰微",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2162749845.0,
        "margin_buy": 70802663.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.18,
        "financing_pressure_score": 38.19,
        "incremental_financing_pressure_score": 47.74,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 25.44
      },
      "trap_score": 39.77
    },
    {
      "code": "600703",
      "name": "三安光电",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3888657161.0,
        "margin_buy": 30926575.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.26,
        "financing_pressure_score": 11.13,
        "incremental_financing_pressure_score": 13.92,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 10.08
      },
      "trap_score": 24.52
    },
    {
      "code": "601138",
      "name": "工业富联",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7096668081.0,
        "margin_buy": 293646030.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.49,
        "financing_pressure_score": 45.1,
        "incremental_financing_pressure_score": 56.38,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 3.92
      },
      "trap_score": 38.58
    },
    {
      "code": "601360",
      "name": "三六零",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2102013826.0,
        "margin_buy": 81687157.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.41,
        "financing_pressure_score": 43.09,
        "incremental_financing_pressure_score": 53.86,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 11.28
      },
      "trap_score": 39.15
    },
    {
      "code": "603000",
      "name": "人民网",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 461645441.0,
        "margin_buy": 31785237.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.78,
        "financing_pressure_score": 62.05,
        "incremental_financing_pressure_score": 77.57,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.24
      },
      "trap_score": 48.27
    },
    {
      "code": "300054",
      "name": "鼎龙股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2033142929.0,
        "margin_buy": 67923293.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.99,
        "financing_pressure_score": 38.73,
        "incremental_financing_pressure_score": 48.41,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 23.92
      },
      "trap_score": 39.71
    },
    {
      "code": "002192",
      "name": "融捷股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1144057992.0,
        "margin_buy": 38962312.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.42,
        "financing_pressure_score": 39.24,
        "incremental_financing_pressure_score": 49.06,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 27.36
      },
      "trap_score": 40.63
    },
    {
      "code": "002466",
      "name": "天齐锂业",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2976364029.0,
        "margin_buy": 44602935.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.79,
        "financing_pressure_score": 20.98,
        "incremental_financing_pressure_score": 26.22,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.32
      },
      "trap_score": 29.81
    },
    {
      "code": "002837",
      "name": "英维克",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3675205080.0,
        "margin_buy": 36188660.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.21,
        "financing_pressure_score": 13.79,
        "incremental_financing_pressure_score": 17.23,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.68
      },
      "trap_score": 27.24
    },
    {
      "code": "601869",
      "name": "长飞光纤",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2260720897.0,
        "margin_buy": 131933491.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.36,
        "financing_pressure_score": 56.46,
        "incremental_financing_pressure_score": 70.57,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 18.88
      },
      "trap_score": 46.68
    },
    {
      "code": "002938",
      "name": "鹏鼎控股",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1348387734.0,
        "margin_buy": 119467931.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.82,
        "financing_pressure_score": 70.58,
        "incremental_financing_pressure_score": 88.23,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 6.56
      },
      "trap_score": 50.57
    },
    {
      "code": "000878",
      "name": "云南铜业",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1842942061.0,
        "margin_buy": 22585564.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.9,
        "financing_pressure_score": 17.16,
        "incremental_financing_pressure_score": 21.45,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 15.2
      },
      "trap_score": 28.26
    },
    {
      "code": "002155",
      "name": "湖南黄金",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1997331629.0,
        "margin_buy": 50258560.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.79,
        "financing_pressure_score": 32.13,
        "incremental_financing_pressure_score": 40.16,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.32
      },
      "trap_score": 34.82
    },
    {
      "code": "600378",
      "name": "昊华科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1252722223.0,
        "margin_buy": 77092176.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.66,
        "financing_pressure_score": 58.15,
        "incremental_financing_pressure_score": 72.69,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 21.28
      },
      "trap_score": 47.92
    },
    {
      "code": "300418",
      "name": "昆仑万维",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3245330552.0,
        "margin_buy": 317811482.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.72,
        "financing_pressure_score": 73.38,
        "incremental_financing_pressure_score": 91.72,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 61.76
      },
      "trap_score": 62.87
    },
    {
      "code": "002218",
      "name": "拓日新能",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 111733588.0,
        "margin_buy": 4836082.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.24,
        "financing_pressure_score": 46.63,
        "incremental_financing_pressure_score": 58.28,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.92
      },
      "trap_score": 42.07
    },
    {
      "code": "300617",
      "name": "安靠智电",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.01,
        "financing_pressure_score": 0.0,
        "incremental_financing_pressure_score": 0.0,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 16.08
      },
      "trap_score": 20.72
    },
    {
      "code": "300738",
      "name": "奥飞数据",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1428399532.0,
        "margin_buy": 29495247.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.65,
        "financing_pressure_score": 28.52,
        "incremental_financing_pressure_score": 35.65,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 13.2
      },
      "trap_score": 32.97
    },
    {
      "code": "002126",
      "name": "银轮股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 558580083.0,
        "margin_buy": 23361026.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.38,
        "financing_pressure_score": 45.46,
        "incremental_financing_pressure_score": 56.82,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 19.04
      },
      "trap_score": 41.77
    },
    {
      "code": "002050",
      "name": "三花智控",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5024746227.0,
        "margin_buy": 45818478.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.08,
        "financing_pressure_score": 12.77,
        "incremental_financing_pressure_score": 15.96,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 8.64
      },
      "trap_score": 24.97
    },
    {
      "code": "603075",
      "name": "热威股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 37345251.0,
        "margin_buy": 3912948.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.73,
        "financing_pressure_score": 75.43,
        "incremental_financing_pressure_score": 94.29,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 29.84
      },
      "trap_score": 57.41
    },
    {
      "code": "603667",
      "name": "五洲新春",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1043867141.0,
        "margin_buy": 23028791.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 2.2,
        "financing_pressure_score": 29.65,
        "incremental_financing_pressure_score": 37.06,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 17.6
      },
      "trap_score": 34.36
    },
    {
      "code": "605020",
      "name": "永和股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 405376640.0,
        "margin_buy": 10048060.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 1.77,
        "financing_pressure_score": 31.83,
        "incremental_financing_pressure_score": 39.79,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 14.16
      },
      "trap_score": 34.66
    },
    {
      "code": "600160",
      "name": "巨化股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3984315777.0,
        "margin_buy": 31270892.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.99,
        "financing_pressure_score": 10.99,
        "incremental_financing_pressure_score": 13.73,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.92
      },
      "trap_score": 24.03
    },
    {
      "code": "603379",
      "name": "三美股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 711295114.0,
        "margin_buy": 15302317.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 0.98,
        "financing_pressure_score": 29.21,
        "incremental_financing_pressure_score": 36.51,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 7.84
      },
      "trap_score": 32.21
    },
    {
      "code": "600988",
      "name": "赤峰黄金",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1178554001.0,
        "margin_buy": 55570598.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 3.07,
        "financing_pressure_score": 49.72,
        "incremental_financing_pressure_score": 62.15,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 24.56
      },
      "trap_score": 44.79
    },
    {
      "code": "000636",
      "name": "风华高科",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3003478549.0,
        "margin_buy": 246369427.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.34,
        "financing_pressure_score": 68.61,
        "incremental_financing_pressure_score": 85.76,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 50.72,
        "turnover_z_score": -0.93
      },
      "trap_score": 58.52,
      "trend": {
        "available": true,
        "down_streak": 5,
        "return_3d_pct": -3.66,
        "return_5d_pct": -16.35,
        "return_8d_pct": -16.38,
        "ma5_gap_pct": -3.93,
        "ma10_gap_pct": -11.63,
        "drawdown_8d_pct": -17.67,
        "trend_penalty": 76.0,
        "trend_label": "已连跌 5 天"
      }
    },
    {
      "code": "688825",
      "name": "长鑫科技",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8623124048.0,
        "margin_buy": 821211806.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.25,
        "financing_pressure_score": 72.57,
        "incremental_financing_pressure_score": 90.71,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 50.0
      },
      "trap_score": 60.16
    },
    {
      "code": "600105",
      "name": "永鼎股份",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1822708151.0,
        "margin_buy": 123286567.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 6.04,
        "financing_pressure_score": 61.41,
        "incremental_financing_pressure_score": 76.76,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 48.32,
        "turnover_z_score": -0.72
      },
      "trap_score": 54.8,
      "trend": {
        "available": true,
        "down_streak": 2,
        "return_3d_pct": -8.85,
        "return_5d_pct": -16.79,
        "return_8d_pct": -27.06,
        "ma5_gap_pct": -8.18,
        "ma10_gap_pct": -17.8,
        "drawdown_8d_pct": -24.53,
        "trend_penalty": 72.0,
        "trend_label": "短线趋势走弱"
      }
    },
    {
      "code": "300285",
      "name": "国瓷材料",
      "margin_date": "20261014",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3325248746.0,
        "margin_buy": 204376033.0,
        "float_market_cap": null,
        "margin_balance_ratio": null,
        "turnover_rate": 7.04,
        "financing_pressure_score": 58.11,
        "incremental_financing_pressure_score": 72.64,
        "margin_burden_score": 0.0,
        "turnover_heat_score": 56.32,
        "turnover_z_score": -0.74
      },
      "trap_score": 54.91,
      "trend": {
        "available": true,
        "down_streak": 9,
        "return_3d_pct": -9.09,
        "return_5d_pct": -21.91,
        "return_8d_pct": -27.74,
        "ma5_gap_pct": -8.23,
        "ma10_gap_pct": -18.79,
        "drawdown_8d_pct": -27.0,
        "trend_penalty": 100.0,
        "trend_label": "已连跌 9 天"
      }
    }
  ]
};
