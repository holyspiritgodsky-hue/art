window.__QUANT_DATA__ = {
  "generated_at": "2026-07-28T00:02:36+08:00",
  "run_source": "manual",
  "whitelist_size": 117,
  "requested_count": 117,
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
    "603667"
  ],
  "processed_count": 117,
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
    "603667"
  ],
  "failed_codes": [],
  "formula": {
    "business_purity_weight": 0.35,
    "financing_pressure_weight": 0.45,
    "turnover_heat_weight": 0.2,
    "financing_pressure_rule": "min(100, 融资买入额 / 融资余额 * 1000)",
    "turnover_heat_rule": "min(100, 换手率 * 8)"
  },
  "spot_data_health": {
    "source": "tencent:stock_zh_a_spot_tx",
    "total_rows": 5533,
    "turnover_rate_available_rows": 5533,
    "turnover_rate_missing_rows": 0,
    "turnover_rate_missing_ratio": 0.0
  },
  "daily_warning": {
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
      "status": "待复盘",
      "note": "次日收盘后可补充验证结论，观察预警是否兑现。"
    }
  },
  "warning_history": [
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
        "status": "待复盘",
        "note": "次日收盘后可补充验证结论，观察预警是否兑现。"
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
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 82,
        "margin_balance": 18373028760.0,
        "margin_buy": 512293586.0,
        "turnover_rate": 2.5,
        "financing_pressure_score": 27.88,
        "turnover_heat_score": 20.0
      },
      "trap_score": 45.25
    },
    {
      "code": "002384",
      "name": "东山精密",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 68,
        "margin_balance": 13609437893.0,
        "margin_buy": 1922255146.0,
        "turnover_rate": 5.97,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 47.76
      },
      "trap_score": 78.35
    },
    {
      "code": "300308",
      "name": "中际旭创",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 88,
        "margin_balance": 40225870784.0,
        "margin_buy": 3203964744.0,
        "turnover_rate": 2.31,
        "financing_pressure_score": 79.65,
        "turnover_heat_score": 18.48
      },
      "trap_score": 70.34
    },
    {
      "code": "002230",
      "name": "科大讯飞",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5497073561.0,
        "margin_buy": 126112748.0,
        "turnover_rate": 1.25,
        "financing_pressure_score": 22.94,
        "turnover_heat_score": 10.0
      },
      "trap_score": 29.82
    },
    {
      "code": "688256",
      "name": "寒武纪",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 18746048131.0,
        "margin_buy": 840232554.0,
        "turnover_rate": 1.35,
        "financing_pressure_score": 44.82,
        "turnover_heat_score": 10.8
      },
      "trap_score": 39.83
    },
    {
      "code": "603019",
      "name": "中科曙光",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 9162409201.0,
        "margin_buy": 698902471.0,
        "turnover_rate": 3.87,
        "financing_pressure_score": 76.28,
        "turnover_heat_score": 30.96
      },
      "trap_score": 58.02
    },
    {
      "code": "603160",
      "name": "汇顶科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1028118569.0,
        "margin_buy": 12647022.0,
        "turnover_rate": 1.1,
        "financing_pressure_score": 12.3,
        "turnover_heat_score": 8.8
      },
      "trap_score": 24.8
    },
    {
      "code": "603986",
      "name": "兆易创新",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 20143007950.0,
        "margin_buy": 2996531611.0,
        "turnover_rate": 9.41,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 75.28
      },
      "trap_score": 77.56
    },
    {
      "code": "603501",
      "name": "豪威集团",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4563365168.0,
        "margin_buy": 188695259.0,
        "turnover_rate": 1.65,
        "financing_pressure_score": 41.35,
        "turnover_heat_score": 13.2
      },
      "trap_score": 38.75
    },
    {
      "code": "603893",
      "name": "瑞芯微",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2230721491.0,
        "margin_buy": 735190519.0,
        "turnover_rate": 6.06,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 48.48
      },
      "trap_score": 72.2
    },
    {
      "code": "688111",
      "name": "金山办公",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4884244608.0,
        "margin_buy": 251636763.0,
        "turnover_rate": 2.04,
        "financing_pressure_score": 51.52,
        "turnover_heat_score": 16.32
      },
      "trap_score": 43.95
    },
    {
      "code": "688041",
      "name": "海光信息",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8346800045.0,
        "margin_buy": 407774557.0,
        "turnover_rate": 0.91,
        "financing_pressure_score": 48.85,
        "turnover_heat_score": 7.28
      },
      "trap_score": 40.94
    },
    {
      "code": "688012",
      "name": "中微公司",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5180974147.0,
        "margin_buy": 934623334.0,
        "turnover_rate": 2.61,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 20.88
      },
      "trap_score": 66.68
    },
    {
      "code": "688008",
      "name": "澜起科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 16066667605.0,
        "margin_buy": 2045674964.0,
        "turnover_rate": 5.1,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 40.8
      },
      "trap_score": 70.66
    },
    {
      "code": "688169",
      "name": "石头科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1099470661.0,
        "margin_buy": 36395693.0,
        "turnover_rate": 2.31,
        "financing_pressure_score": 33.1,
        "turnover_heat_score": 18.48
      },
      "trap_score": 36.09
    },
    {
      "code": "688072",
      "name": "拓荆科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2169208914.0,
        "margin_buy": 747869505.0,
        "turnover_rate": 3.23,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 25.84
      },
      "trap_score": 67.67
    },
    {
      "code": "688099",
      "name": "晶晨股份",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1166559795.0,
        "margin_buy": 248565267.0,
        "turnover_rate": 5.1,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 40.8
      },
      "trap_score": 70.66
    },
    {
      "code": "688027",
      "name": "国盾量子",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1231118521.0,
        "margin_buy": 31311389.0,
        "turnover_rate": 2.4,
        "financing_pressure_score": 25.43,
        "turnover_heat_score": 19.2
      },
      "trap_score": 32.78
    },
    {
      "code": "688608",
      "name": "恒玄科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1124251857.0,
        "margin_buy": 89786715.0,
        "turnover_rate": 2.25,
        "financing_pressure_score": 79.86,
        "turnover_heat_score": 18.0
      },
      "trap_score": 57.04
    },
    {
      "code": "688018",
      "name": "乐鑫科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 755794660.0,
        "margin_buy": 70176687.0,
        "turnover_rate": 2.7,
        "financing_pressure_score": 92.85,
        "turnover_heat_score": 21.6
      },
      "trap_score": 63.6
    },
    {
      "code": "688036",
      "name": "传音控股",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 865656502.0,
        "margin_buy": 51966254.0,
        "turnover_rate": 1.92,
        "financing_pressure_score": 60.03,
        "turnover_heat_score": 15.36
      },
      "trap_score": 47.59
    },
    {
      "code": "688047",
      "name": "龙芯中科",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1283315437.0,
        "margin_buy": 32635200.0,
        "turnover_rate": 1.29,
        "financing_pressure_score": 25.43,
        "turnover_heat_score": 10.32
      },
      "trap_score": 31.01
    },
    {
      "code": "688126",
      "name": "沪硅产业",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2973702409.0,
        "margin_buy": 179041017.0,
        "turnover_rate": 3.26,
        "financing_pressure_score": 60.21,
        "turnover_heat_score": 26.08
      },
      "trap_score": 49.81
    },
    {
      "code": "688037",
      "name": "芯源微",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 606635856.0,
        "margin_buy": 83191702.0,
        "turnover_rate": 2.93,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 23.44
      },
      "trap_score": 67.19
    },
    {
      "code": "688213",
      "name": "思特威-W",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1374484089.0,
        "margin_buy": 49860541.0,
        "turnover_rate": 2.92,
        "financing_pressure_score": 36.28,
        "turnover_heat_score": 23.36
      },
      "trap_score": 38.5
    },
    {
      "code": "688120",
      "name": "华海清科",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1724274254.0,
        "margin_buy": 332630307.0,
        "turnover_rate": 3.02,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 24.16
      },
      "trap_score": 67.33
    },
    {
      "code": "688981",
      "name": "中芯国际",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11512085383.0,
        "margin_buy": 729405757.0,
        "turnover_rate": 2.68,
        "financing_pressure_score": 63.36,
        "turnover_heat_score": 21.44
      },
      "trap_score": 50.3
    },
    {
      "code": "603296",
      "name": "华勤技术",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1141762504.0,
        "margin_buy": 365194323.0,
        "turnover_rate": 5.21,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 41.68
      },
      "trap_score": 70.84
    },
    {
      "code": "300033",
      "name": "同花顺",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5697096139.0,
        "margin_buy": 375078035.0,
        "turnover_rate": 2.09,
        "financing_pressure_score": 65.84,
        "turnover_heat_score": 16.72
      },
      "trap_score": 50.47
    },
    {
      "code": "300496",
      "name": "中科创达",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1790240497.0,
        "margin_buy": 42231171.0,
        "turnover_rate": 2.88,
        "financing_pressure_score": 23.59,
        "turnover_heat_score": 23.04
      },
      "trap_score": 32.72
    },
    {
      "code": "300502",
      "name": "新易盛",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 26961498095.0,
        "margin_buy": 1281882469.0,
        "turnover_rate": 2.85,
        "financing_pressure_score": 47.54,
        "turnover_heat_score": 22.8
      },
      "trap_score": 43.46
    },
    {
      "code": "300223",
      "name": "北京君正",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3217320678.0,
        "margin_buy": 385951051.0,
        "turnover_rate": 9.02,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 72.16
      },
      "trap_score": 76.93
    },
    {
      "code": "300383",
      "name": "光环新网",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1423379930.0,
        "margin_buy": 67619430.0,
        "turnover_rate": 2.79,
        "financing_pressure_score": 47.51,
        "turnover_heat_score": 22.32
      },
      "trap_score": 43.34
    },
    {
      "code": "300458",
      "name": "全志科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1673361534.0,
        "margin_buy": 474101050.0,
        "turnover_rate": 14.03,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 82.5
    },
    {
      "code": "300474",
      "name": "景嘉微",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1299605293.0,
        "margin_buy": 29304152.0,
        "turnover_rate": 1.76,
        "financing_pressure_score": 22.55,
        "turnover_heat_score": 14.08
      },
      "trap_score": 30.46
    },
    {
      "code": "300454",
      "name": "深信服",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1514836491.0,
        "margin_buy": 181544380.0,
        "turnover_rate": 3.91,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 31.28
      },
      "trap_score": 68.76
    },
    {
      "code": "300212",
      "name": "*ST易录",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "turnover_rate": 1.54,
        "financing_pressure_score": 0.0,
        "turnover_heat_score": 12.32
      },
      "trap_score": 19.96
    },
    {
      "code": "300251",
      "name": "光线传媒",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1295779703.0,
        "margin_buy": 50485868.0,
        "turnover_rate": 1.35,
        "financing_pressure_score": 38.96,
        "turnover_heat_score": 10.8
      },
      "trap_score": 37.19
    },
    {
      "code": "300229",
      "name": "拓尔思",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1042126921.0,
        "margin_buy": 15168595.0,
        "turnover_rate": 2.35,
        "financing_pressure_score": 14.56,
        "turnover_heat_score": 18.8
      },
      "trap_score": 27.81
    },
    {
      "code": "300624",
      "name": "万兴科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 545785698.0,
        "margin_buy": 13425444.0,
        "turnover_rate": 3.69,
        "financing_pressure_score": 24.6,
        "turnover_heat_score": 29.52
      },
      "trap_score": 34.47
    },
    {
      "code": "300442",
      "name": "润泽科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3601395031.0,
        "margin_buy": 110993843.0,
        "turnover_rate": 1.17,
        "financing_pressure_score": 30.82,
        "turnover_heat_score": 9.36
      },
      "trap_score": 33.24
    },
    {
      "code": "300803",
      "name": "指南针",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3527250398.0,
        "margin_buy": 170035911.0,
        "turnover_rate": 2.49,
        "financing_pressure_score": 48.21,
        "turnover_heat_score": 19.92
      },
      "trap_score": 43.18
    },
    {
      "code": "300364",
      "name": "中文在线",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 924074778.0,
        "margin_buy": 36801198.0,
        "turnover_rate": 6.44,
        "financing_pressure_score": 39.82,
        "turnover_heat_score": 51.52
      },
      "trap_score": 45.73
    },
    {
      "code": "300394",
      "name": "天孚通信",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8340881425.0,
        "margin_buy": 326761226.0,
        "turnover_rate": 2.37,
        "financing_pressure_score": 39.18,
        "turnover_heat_score": 18.96
      },
      "trap_score": 38.92
    },
    {
      "code": "300570",
      "name": "太辰光",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1374244164.0,
        "margin_buy": 92674752.0,
        "turnover_rate": 5.71,
        "financing_pressure_score": 67.44,
        "turnover_heat_score": 45.68
      },
      "trap_score": 56.98
    },
    {
      "code": "300782",
      "name": "卓胜微",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1941781681.0,
        "margin_buy": 42353216.0,
        "turnover_rate": 2.4,
        "financing_pressure_score": 21.81,
        "turnover_heat_score": 19.2
      },
      "trap_score": 31.16
    },
    {
      "code": "300548",
      "name": "长芯博创",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2149832355.0,
        "margin_buy": 113080897.0,
        "turnover_rate": 3.51,
        "financing_pressure_score": 52.6,
        "turnover_heat_score": 28.08
      },
      "trap_score": 46.79
    },
    {
      "code": "300604",
      "name": "长川科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3937435391.0,
        "margin_buy": 907841572.0,
        "turnover_rate": 5.73,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 45.84
      },
      "trap_score": 71.67
    },
    {
      "code": "300118",
      "name": "东方日升",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 591733655.0,
        "margin_buy": 15723548.0,
        "turnover_rate": 2.77,
        "financing_pressure_score": 26.57,
        "turnover_heat_score": 22.16
      },
      "trap_score": 33.89
    },
    {
      "code": "300373",
      "name": "扬杰科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1547781899.0,
        "margin_buy": 131852643.0,
        "turnover_rate": 2.66,
        "financing_pressure_score": 85.19,
        "turnover_heat_score": 21.28
      },
      "trap_score": 60.09
    },
    {
      "code": "301236",
      "name": "软通动力",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2075480131.0,
        "margin_buy": 91381039.0,
        "turnover_rate": 2.06,
        "financing_pressure_score": 44.03,
        "turnover_heat_score": 16.48
      },
      "trap_score": 40.61
    },
    {
      "code": "301269",
      "name": "华大九天",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1022171031.0,
        "margin_buy": 38971624.0,
        "turnover_rate": 1.15,
        "financing_pressure_score": 38.13,
        "turnover_heat_score": 9.2
      },
      "trap_score": 36.5
    },
    {
      "code": "301312",
      "name": "智立方",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 198720128.0,
        "margin_buy": 20966761.0,
        "turnover_rate": 5.58,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 44.64
      },
      "trap_score": 71.43
    },
    {
      "code": "301308",
      "name": "江波龙",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6535967561.0,
        "margin_buy": 448774579.0,
        "turnover_rate": 5.06,
        "financing_pressure_score": 68.66,
        "turnover_heat_score": 40.48
      },
      "trap_score": 56.49
    },
    {
      "code": "301095",
      "name": "广立微",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 486195651.0,
        "margin_buy": 19182221.0,
        "turnover_rate": 3.76,
        "financing_pressure_score": 39.45,
        "turnover_heat_score": 30.08
      },
      "trap_score": 41.27
    },
    {
      "code": "301171",
      "name": "易点天下",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1208191325.0,
        "margin_buy": 41882502.0,
        "turnover_rate": 5.12,
        "financing_pressure_score": 34.67,
        "turnover_heat_score": 40.96
      },
      "trap_score": 41.29
    },
    {
      "code": "301165",
      "name": "锐捷网络",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 821606265.0,
        "margin_buy": 436850322.0,
        "turnover_rate": 3.23,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 25.84
      },
      "trap_score": 67.67
    },
    {
      "code": "300059",
      "name": "东方财富",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 23852771279.0,
        "margin_buy": 794196425.0,
        "turnover_rate": 1.46,
        "financing_pressure_score": 33.3,
        "turnover_heat_score": 11.68
      },
      "trap_score": 34.82
    },
    {
      "code": "002371",
      "name": "北方华创",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3836651809.0,
        "margin_buy": 818284023.0,
        "turnover_rate": 1.96,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 15.68
      },
      "trap_score": 65.64
    },
    {
      "code": "002475",
      "name": "立讯精密",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5927011668.0,
        "margin_buy": 279101555.0,
        "turnover_rate": 1.43,
        "financing_pressure_score": 47.09,
        "turnover_heat_score": 11.44
      },
      "trap_score": 40.98
    },
    {
      "code": "002463",
      "name": "沪电股份",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5283649807.0,
        "margin_buy": 521066648.0,
        "turnover_rate": 2.4,
        "financing_pressure_score": 98.62,
        "turnover_heat_score": 19.2
      },
      "trap_score": 65.72
    },
    {
      "code": "002555",
      "name": "三七互娱",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1786122763.0,
        "margin_buy": 36510044.0,
        "turnover_rate": 1.47,
        "financing_pressure_score": 20.44,
        "turnover_heat_score": 11.76
      },
      "trap_score": 29.05
    },
    {
      "code": "002236",
      "name": "大华股份",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1870560446.0,
        "margin_buy": 35616548.0,
        "turnover_rate": 2.21,
        "financing_pressure_score": 19.04,
        "turnover_heat_score": 17.68
      },
      "trap_score": 29.6
    },
    {
      "code": "002241",
      "name": "歌尔股份",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4206900423.0,
        "margin_buy": 203912065.0,
        "turnover_rate": 2.25,
        "financing_pressure_score": 48.47,
        "turnover_heat_score": 18.0
      },
      "trap_score": 42.91
    },
    {
      "code": "600050",
      "name": "中国联通",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2851767034.0,
        "margin_buy": 47912973.0,
        "turnover_rate": 0.43,
        "financing_pressure_score": 16.8,
        "turnover_heat_score": 3.44
      },
      "trap_score": 25.75
    },
    {
      "code": "002859",
      "name": "洁美科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 733642749.0,
        "margin_buy": 67967375.0,
        "turnover_rate": 3.69,
        "financing_pressure_score": 92.64,
        "turnover_heat_score": 29.52
      },
      "trap_score": 65.09
    },
    {
      "code": "002920",
      "name": "德赛西威",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1447382128.0,
        "margin_buy": 32987204.0,
        "turnover_rate": 0.73,
        "financing_pressure_score": 22.79,
        "turnover_heat_score": 5.84
      },
      "trap_score": 28.92
    },
    {
      "code": "002456",
      "name": "欧菲光",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1686142573.0,
        "margin_buy": 28820648.0,
        "turnover_rate": 1.94,
        "financing_pressure_score": 17.09,
        "turnover_heat_score": 15.52
      },
      "trap_score": 28.3
    },
    {
      "code": "002156",
      "name": "通富微电",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5079686139.0,
        "margin_buy": 2115201305.0,
        "turnover_rate": 15.3,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 82.5
    },
    {
      "code": "002261",
      "name": "拓维信息",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1648768405.0,
        "margin_buy": 67966497.0,
        "turnover_rate": 4.49,
        "financing_pressure_score": 41.22,
        "turnover_heat_score": 35.92
      },
      "trap_score": 43.23
    },
    {
      "code": "002273",
      "name": "水晶光电",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2811645216.0,
        "margin_buy": 78778798.0,
        "turnover_rate": 3.51,
        "financing_pressure_score": 28.02,
        "turnover_heat_score": 28.08
      },
      "trap_score": 35.72
    },
    {
      "code": "002281",
      "name": "光迅科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4143906547.0,
        "margin_buy": 324472799.0,
        "turnover_rate": 4.06,
        "financing_pressure_score": 78.3,
        "turnover_heat_score": 32.48
      },
      "trap_score": 59.23
    },
    {
      "code": "002415",
      "name": "海康威视",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5380551719.0,
        "margin_buy": 246607783.0,
        "turnover_rate": 3.21,
        "financing_pressure_score": 45.83,
        "turnover_heat_score": 25.68
      },
      "trap_score": 43.26
    },
    {
      "code": "002916",
      "name": "深南电路",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1663275624.0,
        "margin_buy": 100301157.0,
        "turnover_rate": 1.51,
        "financing_pressure_score": 60.3,
        "turnover_heat_score": 12.08
      },
      "trap_score": 47.05
    },
    {
      "code": "002517",
      "name": "恺英网络",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1459784579.0,
        "margin_buy": 63319217.0,
        "turnover_rate": 2.88,
        "financing_pressure_score": 43.38,
        "turnover_heat_score": 23.04
      },
      "trap_score": 41.63
    },
    {
      "code": "002049",
      "name": "紫光国微",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4514313875.0,
        "margin_buy": 167561369.0,
        "turnover_rate": 2.89,
        "financing_pressure_score": 37.12,
        "turnover_heat_score": 23.12
      },
      "trap_score": 38.83
    },
    {
      "code": "002138",
      "name": "顺络电子",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1329404279.0,
        "margin_buy": 73538127.0,
        "turnover_rate": 5.38,
        "financing_pressure_score": 55.32,
        "turnover_heat_score": 43.04
      },
      "trap_score": 51.0
    },
    {
      "code": "002185",
      "name": "华天科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2543278237.0,
        "margin_buy": 547351760.0,
        "turnover_rate": 13.5,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 82.5
    },
    {
      "code": "000063",
      "name": "中兴通讯",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 10317225451.0,
        "margin_buy": 616441007.0,
        "turnover_rate": 3.5,
        "financing_pressure_score": 59.75,
        "turnover_heat_score": 28.0
      },
      "trap_score": 49.99
    },
    {
      "code": "000977",
      "name": "浪潮信息",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4744526396.0,
        "margin_buy": 694039266.0,
        "turnover_rate": 5.73,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 45.84
      },
      "trap_score": 71.67
    },
    {
      "code": "000938",
      "name": "紫光股份",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4971230468.0,
        "margin_buy": 1533568258.0,
        "turnover_rate": 11.46,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 91.68
      },
      "trap_score": 80.84
    },
    {
      "code": "000988",
      "name": "华工科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8806371215.0,
        "margin_buy": 441269113.0,
        "turnover_rate": 3.87,
        "financing_pressure_score": 50.11,
        "turnover_heat_score": 30.96
      },
      "trap_score": 46.24
    },
    {
      "code": "000034",
      "name": "神州数码",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1757560163.0,
        "margin_buy": 141968613.0,
        "turnover_rate": 5.58,
        "financing_pressure_score": 80.78,
        "turnover_heat_score": 44.64
      },
      "trap_score": 62.78
    },
    {
      "code": "000066",
      "name": "中国长城",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2004039647.0,
        "margin_buy": 69771668.0,
        "turnover_rate": 2.91,
        "financing_pressure_score": 34.82,
        "turnover_heat_score": 23.28
      },
      "trap_score": 37.82
    },
    {
      "code": "000725",
      "name": "京东方Ａ",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 12235483595.0,
        "margin_buy": 1162291408.0,
        "turnover_rate": 4.6,
        "financing_pressure_score": 94.99,
        "turnover_heat_score": 36.8
      },
      "trap_score": 67.61
    },
    {
      "code": "000100",
      "name": "TCL科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4943559436.0,
        "margin_buy": 280258887.0,
        "turnover_rate": 2.51,
        "financing_pressure_score": 56.69,
        "turnover_heat_score": 20.08
      },
      "trap_score": 47.03
    },
    {
      "code": "600584",
      "name": "长电科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7178863525.0,
        "margin_buy": 1151843595.0,
        "turnover_rate": 7.98,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 63.84
      },
      "trap_score": 75.27
    },
    {
      "code": "600570",
      "name": "恒生电子",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2622306915.0,
        "margin_buy": 39914524.0,
        "turnover_rate": 1.01,
        "financing_pressure_score": 15.22,
        "turnover_heat_score": 8.08
      },
      "trap_score": 25.97
    },
    {
      "code": "600845",
      "name": "宝信软件",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 597153644.0,
        "margin_buy": 17852482.0,
        "turnover_rate": 0.52,
        "financing_pressure_score": 29.9,
        "turnover_heat_score": 4.16
      },
      "trap_score": 31.79
    },
    {
      "code": "600536",
      "name": "中国软件",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1471051114.0,
        "margin_buy": 70460991.0,
        "turnover_rate": 2.65,
        "financing_pressure_score": 47.9,
        "turnover_heat_score": 21.2
      },
      "trap_score": 43.29
    },
    {
      "code": "600588",
      "name": "用友网络",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1337091805.0,
        "margin_buy": 24686997.0,
        "turnover_rate": 1.52,
        "financing_pressure_score": 18.46,
        "turnover_heat_score": 12.16
      },
      "trap_score": 28.24
    },
    {
      "code": "600602",
      "name": "云赛智联",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 745103721.0,
        "margin_buy": 88081474.0,
        "turnover_rate": 4.17,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 33.36
      },
      "trap_score": 69.17
    },
    {
      "code": "600171",
      "name": "上海贝岭",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 958197471.0,
        "margin_buy": 18152823.0,
        "turnover_rate": 1.49,
        "financing_pressure_score": 18.94,
        "turnover_heat_score": 11.92
      },
      "trap_score": 28.41
    },
    {
      "code": "600498",
      "name": "烽火通信",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2334293816.0,
        "margin_buy": 132144916.0,
        "turnover_rate": 4.58,
        "financing_pressure_score": 56.61,
        "turnover_heat_score": 36.64
      },
      "trap_score": 50.3
    },
    {
      "code": "600183",
      "name": "生益科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3219520954.0,
        "margin_buy": 338154073.0,
        "turnover_rate": 2.39,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 19.12
      },
      "trap_score": 66.32
    },
    {
      "code": "600460",
      "name": "士兰微",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2003734711.0,
        "margin_buy": 134957989.0,
        "turnover_rate": 4.11,
        "financing_pressure_score": 67.35,
        "turnover_heat_score": 32.88
      },
      "trap_score": 54.38
    },
    {
      "code": "600703",
      "name": "三安光电",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4347807519.0,
        "margin_buy": 68610696.0,
        "turnover_rate": 2.98,
        "financing_pressure_score": 15.78,
        "turnover_heat_score": 23.84
      },
      "trap_score": 29.37
    },
    {
      "code": "601138",
      "name": "工业富联",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8039780904.0,
        "margin_buy": 481273761.0,
        "turnover_rate": 0.41,
        "financing_pressure_score": 59.86,
        "turnover_heat_score": 3.28
      },
      "trap_score": 45.09
    },
    {
      "code": "601360",
      "name": "三六零",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1924482604.0,
        "margin_buy": 69592370.0,
        "turnover_rate": 1.17,
        "financing_pressure_score": 36.16,
        "turnover_heat_score": 9.36
      },
      "trap_score": 35.64
    },
    {
      "code": "603000",
      "name": "人民网",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 451228050.0,
        "margin_buy": 7671227.0,
        "turnover_rate": 1.04,
        "financing_pressure_score": 17.0,
        "turnover_heat_score": 8.32
      },
      "trap_score": 26.81
    },
    {
      "code": "300054",
      "name": "鼎龙股份",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2033514019.0,
        "margin_buy": 229056310.0,
        "turnover_rate": 5.51,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 44.08
      },
      "trap_score": 71.32
    },
    {
      "code": "002192",
      "name": "融捷股份",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1301662824.0,
        "margin_buy": 94416797.0,
        "turnover_rate": 7.43,
        "financing_pressure_score": 72.54,
        "turnover_heat_score": 59.44
      },
      "trap_score": 62.03
    },
    {
      "code": "002466",
      "name": "天齐锂业",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3464686640.0,
        "margin_buy": 196776685.0,
        "turnover_rate": 2.98,
        "financing_pressure_score": 56.79,
        "turnover_heat_score": 23.84
      },
      "trap_score": 47.83
    },
    {
      "code": "002837",
      "name": "英维克",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3743822951.0,
        "margin_buy": 84519882.0,
        "turnover_rate": 2.76,
        "financing_pressure_score": 22.58,
        "turnover_heat_score": 22.08
      },
      "trap_score": 32.08
    },
    {
      "code": "601869",
      "name": "长飞光纤",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2591249648.0,
        "margin_buy": 251482307.0,
        "turnover_rate": 3.06,
        "financing_pressure_score": 97.05,
        "turnover_heat_score": 24.48
      },
      "trap_score": 66.07
    },
    {
      "code": "002938",
      "name": "鹏鼎控股",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1379098570.0,
        "margin_buy": 81477039.0,
        "turnover_rate": 0.98,
        "financing_pressure_score": 59.08,
        "turnover_heat_score": 7.84
      },
      "trap_score": 45.65
    },
    {
      "code": "000878",
      "name": "云南铜业",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1934794068.0,
        "margin_buy": 50137060.0,
        "turnover_rate": 1.33,
        "financing_pressure_score": 25.91,
        "turnover_heat_score": 10.64
      },
      "trap_score": 31.29
    },
    {
      "code": "002155",
      "name": "湖南黄金",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2111446830.0,
        "margin_buy": 86289656.0,
        "turnover_rate": 2.31,
        "financing_pressure_score": 40.87,
        "turnover_heat_score": 18.48
      },
      "trap_score": 39.59
    },
    {
      "code": "600378",
      "name": "昊华科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1144873665.0,
        "margin_buy": 240330499.0,
        "turnover_rate": 5.72,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 45.76
      },
      "trap_score": 71.65
    },
    {
      "code": "300418",
      "name": "昆仑万维",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3529557445.0,
        "margin_buy": 168703490.0,
        "turnover_rate": 4.11,
        "financing_pressure_score": 47.8,
        "turnover_heat_score": 32.88
      },
      "trap_score": 45.58
    },
    {
      "code": "002218",
      "name": "拓日新能",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 104645079.0,
        "margin_buy": 36749979.0,
        "turnover_rate": 16.6,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 82.5
    },
    {
      "code": "300617",
      "name": "安靠智电",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "turnover_rate": 5.2,
        "financing_pressure_score": 0.0,
        "turnover_heat_score": 41.6
      },
      "trap_score": 25.82
    },
    {
      "code": "300738",
      "name": "奥飞数据",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1366061804.0,
        "margin_buy": 154381760.0,
        "turnover_rate": 5.15,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 41.2
      },
      "trap_score": 70.74
    },
    {
      "code": "002126",
      "name": "银轮股份",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 502634479.0,
        "margin_buy": 29078376.0,
        "turnover_rate": 1.9,
        "financing_pressure_score": 57.85,
        "turnover_heat_score": 15.2
      },
      "trap_score": 46.57
    },
    {
      "code": "002050",
      "name": "三花智控",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5791012770.0,
        "margin_buy": 190333900.0,
        "turnover_rate": 1.5,
        "financing_pressure_score": 32.87,
        "turnover_heat_score": 12.0
      },
      "trap_score": 34.69
    },
    {
      "code": "603075",
      "name": "热威股份",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 43622137.0,
        "margin_buy": 3282817.0,
        "turnover_rate": 6.07,
        "financing_pressure_score": 75.26,
        "turnover_heat_score": 48.56
      },
      "trap_score": 61.08
    },
    {
      "code": "603667",
      "name": "五洲新春",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1125307903.0,
        "margin_buy": 51130496.0,
        "turnover_rate": 4.25,
        "financing_pressure_score": 45.44,
        "turnover_heat_score": 34.0
      },
      "trap_score": 44.75
    }
  ]
};
