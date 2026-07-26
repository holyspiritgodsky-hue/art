window.__QUANT_DATA__ = {
  "generated_at": "2026-07-27T05:04:40",
  "run_source": "manual",
  "whitelist_size": 113,
  "requested_count": 113,
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
    "300738"
  ],
  "processed_count": 113,
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
    "300738"
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
    "total_rows": 5531,
    "turnover_rate_available_rows": 5531,
    "turnover_rate_missing_rows": 0,
    "turnover_rate_missing_ratio": 0.0
  },
  "daily_warning": {
    "date": "2026-07-27",
    "title": "量化高危区，先看承接，再谈进攻。",
    "gauge_score": 82,
    "prompt": "当前高风险样本集中在 全志科技 等标的，样本平均陷阱分约 53.1，优先防范一致性追高后的回撤兑现。",
    "signals": [
      {
        "label": "高频异动",
        "value": "23",
        "note": "陷阱分大于等于 70 的样本数"
      },
      {
        "label": "筹码拥挤",
        "value": "53%",
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
      "prompt": "当前高风险样本集中在 全志科技 等标的，样本平均陷阱分约 53.1，优先防范一致性追高后的回撤兑现。",
      "signals": [
        {
          "label": "高频异动",
          "value": "23",
          "note": "陷阱分大于等于 70 的样本数"
        },
        {
          "label": "筹码拥挤",
          "value": "53%",
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
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 82,
        "margin_balance": 18540416715.0,
        "margin_buy": 750728961.0,
        "turnover_rate": 2.45,
        "financing_pressure_score": 40.49,
        "turnover_heat_score": 19.6
      },
      "trap_score": 50.84
    },
    {
      "code": "002384",
      "name": "东山精密",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 68,
        "margin_balance": 13268040918.0,
        "margin_buy": 2081161129.0,
        "turnover_rate": 5.25,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 42.0
      },
      "trap_score": 77.2
    },
    {
      "code": "300308",
      "name": "中际旭创",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 88,
        "margin_balance": 40832503923.0,
        "margin_buy": 4646084298.0,
        "turnover_rate": 1.95,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 15.6
      },
      "trap_score": 78.92
    },
    {
      "code": "002230",
      "name": "科大讯飞",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5524597528.0,
        "margin_buy": 120252876.0,
        "turnover_rate": 1.78,
        "financing_pressure_score": 21.77,
        "turnover_heat_score": 14.24
      },
      "trap_score": 30.14
    },
    {
      "code": "688256",
      "name": "寒武纪",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 18746048131.0,
        "margin_buy": 840232554.0,
        "turnover_rate": 1.37,
        "financing_pressure_score": 44.82,
        "turnover_heat_score": 10.96
      },
      "trap_score": 39.86
    },
    {
      "code": "603019",
      "name": "中科曙光",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 9162409201.0,
        "margin_buy": 698902471.0,
        "turnover_rate": 4.6,
        "financing_pressure_score": 76.28,
        "turnover_heat_score": 36.8
      },
      "trap_score": 59.19
    },
    {
      "code": "603160",
      "name": "汇顶科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1028118569.0,
        "margin_buy": 12647022.0,
        "turnover_rate": 0.94,
        "financing_pressure_score": 12.3,
        "turnover_heat_score": 7.52
      },
      "trap_score": 24.54
    },
    {
      "code": "603986",
      "name": "兆易创新",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 20143007950.0,
        "margin_buy": 2996531611.0,
        "turnover_rate": 7.56,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 60.48
      },
      "trap_score": 74.6
    },
    {
      "code": "603501",
      "name": "豪威集团",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4563365168.0,
        "margin_buy": 188695259.0,
        "turnover_rate": 1.73,
        "financing_pressure_score": 41.35,
        "turnover_heat_score": 13.84
      },
      "trap_score": 38.88
    },
    {
      "code": "603893",
      "name": "瑞芯微",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2230721491.0,
        "margin_buy": 735190519.0,
        "turnover_rate": 7.82,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 62.56
      },
      "trap_score": 75.01
    },
    {
      "code": "688111",
      "name": "金山办公",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4884244608.0,
        "margin_buy": 251636763.0,
        "turnover_rate": 1.78,
        "financing_pressure_score": 51.52,
        "turnover_heat_score": 14.24
      },
      "trap_score": 43.53
    },
    {
      "code": "688041",
      "name": "海光信息",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8346800045.0,
        "margin_buy": 407774557.0,
        "turnover_rate": 0.85,
        "financing_pressure_score": 48.85,
        "turnover_heat_score": 6.8
      },
      "trap_score": 40.84
    },
    {
      "code": "688012",
      "name": "中微公司",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5180974147.0,
        "margin_buy": 934623334.0,
        "turnover_rate": 2.81,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 22.48
      },
      "trap_score": 67.0
    },
    {
      "code": "688008",
      "name": "澜起科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 16066667605.0,
        "margin_buy": 2045674964.0,
        "turnover_rate": 5.19,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 41.52
      },
      "trap_score": 70.8
    },
    {
      "code": "688169",
      "name": "石头科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1099470661.0,
        "margin_buy": 36395693.0,
        "turnover_rate": 1.45,
        "financing_pressure_score": 33.1,
        "turnover_heat_score": 11.6
      },
      "trap_score": 34.72
    },
    {
      "code": "688072",
      "name": "拓荆科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2169208914.0,
        "margin_buy": 747869505.0,
        "turnover_rate": 3.2,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 25.6
      },
      "trap_score": 67.62
    },
    {
      "code": "688099",
      "name": "晶晨股份",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1166559795.0,
        "margin_buy": 248565267.0,
        "turnover_rate": 7.13,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 57.04
      },
      "trap_score": 73.91
    },
    {
      "code": "688027",
      "name": "国盾量子",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1231118521.0,
        "margin_buy": 31311389.0,
        "turnover_rate": 2.24,
        "financing_pressure_score": 25.43,
        "turnover_heat_score": 17.92
      },
      "trap_score": 32.53
    },
    {
      "code": "688608",
      "name": "恒玄科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1124251857.0,
        "margin_buy": 89786715.0,
        "turnover_rate": 2.44,
        "financing_pressure_score": 79.86,
        "turnover_heat_score": 19.52
      },
      "trap_score": 57.34
    },
    {
      "code": "688018",
      "name": "乐鑫科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 755794660.0,
        "margin_buy": 70176687.0,
        "turnover_rate": 3.33,
        "financing_pressure_score": 92.85,
        "turnover_heat_score": 26.64
      },
      "trap_score": 64.61
    },
    {
      "code": "688036",
      "name": "传音控股",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 865656502.0,
        "margin_buy": 51966254.0,
        "turnover_rate": 0.93,
        "financing_pressure_score": 60.03,
        "turnover_heat_score": 7.44
      },
      "trap_score": 46.0
    },
    {
      "code": "688047",
      "name": "龙芯中科",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1283315437.0,
        "margin_buy": 32635200.0,
        "turnover_rate": 1.18,
        "financing_pressure_score": 25.43,
        "turnover_heat_score": 9.44
      },
      "trap_score": 30.83
    },
    {
      "code": "688126",
      "name": "沪硅产业",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2973702409.0,
        "margin_buy": 179041017.0,
        "turnover_rate": 3.0,
        "financing_pressure_score": 60.21,
        "turnover_heat_score": 24.0
      },
      "trap_score": 49.39
    },
    {
      "code": "688037",
      "name": "芯源微",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 606635856.0,
        "margin_buy": 83191702.0,
        "turnover_rate": 2.94,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 23.52
      },
      "trap_score": 67.2
    },
    {
      "code": "688213",
      "name": "思特威-W",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1374484089.0,
        "margin_buy": 49860541.0,
        "turnover_rate": 2.77,
        "financing_pressure_score": 36.28,
        "turnover_heat_score": 22.16
      },
      "trap_score": 38.26
    },
    {
      "code": "688120",
      "name": "华海清科",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1724274254.0,
        "margin_buy": 332630307.0,
        "turnover_rate": 3.14,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 25.12
      },
      "trap_score": 67.52
    },
    {
      "code": "688981",
      "name": "中芯国际",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 11512085383.0,
        "margin_buy": 729405757.0,
        "turnover_rate": 2.39,
        "financing_pressure_score": 63.36,
        "turnover_heat_score": 19.12
      },
      "trap_score": 49.84
    },
    {
      "code": "603296",
      "name": "华勤技术",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1141762504.0,
        "margin_buy": 365194323.0,
        "turnover_rate": 5.31,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 42.48
      },
      "trap_score": 71.0
    },
    {
      "code": "300033",
      "name": "同花顺",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5778981026.0,
        "margin_buy": 364045597.0,
        "turnover_rate": 3.48,
        "financing_pressure_score": 62.99,
        "turnover_heat_score": 27.84
      },
      "trap_score": 51.42
    },
    {
      "code": "300496",
      "name": "中科创达",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1815349241.0,
        "margin_buy": 95939486.0,
        "turnover_rate": 2.85,
        "financing_pressure_score": 52.85,
        "turnover_heat_score": 22.8
      },
      "trap_score": 45.84
    },
    {
      "code": "300502",
      "name": "新易盛",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 29298240168.0,
        "margin_buy": 2601408163.0,
        "turnover_rate": 2.69,
        "financing_pressure_score": 88.79,
        "turnover_heat_score": 21.52
      },
      "trap_score": 61.76
    },
    {
      "code": "300223",
      "name": "北京君正",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3273366928.0,
        "margin_buy": 463238629.0,
        "turnover_rate": 8.63,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 69.04
      },
      "trap_score": 76.31
    },
    {
      "code": "300383",
      "name": "光环新网",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1450438160.0,
        "margin_buy": 97811454.0,
        "turnover_rate": 3.92,
        "financing_pressure_score": 67.44,
        "turnover_heat_score": 31.36
      },
      "trap_score": 54.12
    },
    {
      "code": "300458",
      "name": "全志科技",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1657503065.0,
        "margin_buy": 441314334.0,
        "turnover_rate": 14.88,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 82.5
    },
    {
      "code": "300474",
      "name": "景嘉微",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1309903248.0,
        "margin_buy": 36560669.0,
        "turnover_rate": 1.97,
        "financing_pressure_score": 27.91,
        "turnover_heat_score": 15.76
      },
      "trap_score": 33.21
    },
    {
      "code": "300454",
      "name": "深信服",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1586166440.0,
        "margin_buy": 314277558.0,
        "turnover_rate": 6.8,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 54.4
      },
      "trap_score": 73.38
    },
    {
      "code": "300212",
      "name": "*ST易录",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "turnover_rate": 1.63,
        "financing_pressure_score": 0.0,
        "turnover_heat_score": 13.04
      },
      "trap_score": 20.11
    },
    {
      "code": "300251",
      "name": "光线传媒",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1311583764.0,
        "margin_buy": 54586063.0,
        "turnover_rate": 1.82,
        "financing_pressure_score": 41.62,
        "turnover_heat_score": 14.56
      },
      "trap_score": 39.14
    },
    {
      "code": "300229",
      "name": "拓尔思",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1052197928.0,
        "margin_buy": 12244285.0,
        "turnover_rate": 2.15,
        "financing_pressure_score": 11.64,
        "turnover_heat_score": 17.2
      },
      "trap_score": 26.18
    },
    {
      "code": "300624",
      "name": "万兴科技",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 554288449.0,
        "margin_buy": 16061721.0,
        "turnover_rate": 3.66,
        "financing_pressure_score": 28.98,
        "turnover_heat_score": 29.28
      },
      "trap_score": 36.4
    },
    {
      "code": "300442",
      "name": "润泽科技",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3657716824.0,
        "margin_buy": 160454692.0,
        "turnover_rate": 1.33,
        "financing_pressure_score": 43.87,
        "turnover_heat_score": 10.64
      },
      "trap_score": 39.37
    },
    {
      "code": "300803",
      "name": "指南针",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3592012465.0,
        "margin_buy": 150106794.0,
        "turnover_rate": 3.61,
        "financing_pressure_score": 41.79,
        "turnover_heat_score": 28.88
      },
      "trap_score": 42.08
    },
    {
      "code": "300364",
      "name": "中文在线",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 942370260.0,
        "margin_buy": 30458299.0,
        "turnover_rate": 5.79,
        "financing_pressure_score": 32.32,
        "turnover_heat_score": 46.32
      },
      "trap_score": 41.31
    },
    {
      "code": "300394",
      "name": "天孚通信",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8442856051.0,
        "margin_buy": 414916663.0,
        "turnover_rate": 2.34,
        "financing_pressure_score": 49.14,
        "turnover_heat_score": 18.72
      },
      "trap_score": 43.36
    },
    {
      "code": "300570",
      "name": "太辰光",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1404228529.0,
        "margin_buy": 130884854.0,
        "turnover_rate": 4.94,
        "financing_pressure_score": 93.21,
        "turnover_heat_score": 39.52
      },
      "trap_score": 67.35
    },
    {
      "code": "300782",
      "name": "卓胜微",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1981316442.0,
        "margin_buy": 71698340.0,
        "turnover_rate": 2.27,
        "financing_pressure_score": 36.19,
        "turnover_heat_score": 18.16
      },
      "trap_score": 37.42
    },
    {
      "code": "300548",
      "name": "长芯博创",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2160378720.0,
        "margin_buy": 121671690.0,
        "turnover_rate": 3.64,
        "financing_pressure_score": 56.32,
        "turnover_heat_score": 29.12
      },
      "trap_score": 48.67
    },
    {
      "code": "300604",
      "name": "长川科技",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3658530265.0,
        "margin_buy": 704418171.0,
        "turnover_rate": 5.99,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 47.92
      },
      "trap_score": 72.08
    },
    {
      "code": "300118",
      "name": "东方日升",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 596068980.0,
        "margin_buy": 25531563.0,
        "turnover_rate": 2.9,
        "financing_pressure_score": 42.83,
        "turnover_heat_score": 23.2
      },
      "trap_score": 41.41
    },
    {
      "code": "300373",
      "name": "扬杰科技",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1617910911.0,
        "margin_buy": 140461480.0,
        "turnover_rate": 2.62,
        "financing_pressure_score": 86.82,
        "turnover_heat_score": 20.96
      },
      "trap_score": 60.76
    },
    {
      "code": "301236",
      "name": "软通动力",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2155178186.0,
        "margin_buy": 110344135.0,
        "turnover_rate": 3.86,
        "financing_pressure_score": 51.2,
        "turnover_heat_score": 30.88
      },
      "trap_score": 46.72
    },
    {
      "code": "301269",
      "name": "华大九天",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1030698293.0,
        "margin_buy": 73203011.0,
        "turnover_rate": 1.2,
        "financing_pressure_score": 71.02,
        "turnover_heat_score": 9.6
      },
      "trap_score": 51.38
    },
    {
      "code": "301312",
      "name": "智立方",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 194995045.0,
        "margin_buy": 18152851.0,
        "turnover_rate": 4.91,
        "financing_pressure_score": 93.09,
        "turnover_heat_score": 39.28
      },
      "trap_score": 67.25
    },
    {
      "code": "301308",
      "name": "江波龙",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6663635536.0,
        "margin_buy": 589813857.0,
        "turnover_rate": 5.38,
        "financing_pressure_score": 88.51,
        "turnover_heat_score": 43.04
      },
      "trap_score": 65.94
    },
    {
      "code": "301095",
      "name": "广立微",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 495407611.0,
        "margin_buy": 34079600.0,
        "turnover_rate": 3.19,
        "financing_pressure_score": 68.79,
        "turnover_heat_score": 25.52
      },
      "trap_score": 53.56
    },
    {
      "code": "301171",
      "name": "易点天下",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1238061690.0,
        "margin_buy": 36201819.0,
        "turnover_rate": 4.87,
        "financing_pressure_score": 29.24,
        "turnover_heat_score": 38.96
      },
      "trap_score": 38.45
    },
    {
      "code": "301165",
      "name": "锐捷网络",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 793618466.0,
        "margin_buy": 520232688.0,
        "turnover_rate": 3.21,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 25.68
      },
      "trap_score": 67.64
    },
    {
      "code": "300059",
      "name": "东方财富",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 24014898488.0,
        "margin_buy": 759785231.0,
        "turnover_rate": 2.31,
        "financing_pressure_score": 31.64,
        "turnover_heat_score": 18.48
      },
      "trap_score": 35.43
    },
    {
      "code": "002371",
      "name": "北方华创",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3764097501.0,
        "margin_buy": 672186356.0,
        "turnover_rate": 2.19,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 17.52
      },
      "trap_score": 66.0
    },
    {
      "code": "002475",
      "name": "立讯精密",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 6031974581.0,
        "margin_buy": 420551025.0,
        "turnover_rate": 1.03,
        "financing_pressure_score": 69.72,
        "turnover_heat_score": 8.24
      },
      "trap_score": 50.52
    },
    {
      "code": "002463",
      "name": "沪电股份",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5375606536.0,
        "margin_buy": 692556296.0,
        "turnover_rate": 2.19,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 17.52
      },
      "trap_score": 66.0
    },
    {
      "code": "002555",
      "name": "三七互娱",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1801906881.0,
        "margin_buy": 84313147.0,
        "turnover_rate": 1.44,
        "financing_pressure_score": 46.79,
        "turnover_heat_score": 11.52
      },
      "trap_score": 40.86
    },
    {
      "code": "002236",
      "name": "大华股份",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1880101672.0,
        "margin_buy": 56072264.0,
        "turnover_rate": 1.28,
        "financing_pressure_score": 29.82,
        "turnover_heat_score": 10.24
      },
      "trap_score": 32.97
    },
    {
      "code": "002241",
      "name": "歌尔股份",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4229212086.0,
        "margin_buy": 154209744.0,
        "turnover_rate": 3.21,
        "financing_pressure_score": 36.46,
        "turnover_heat_score": 25.68
      },
      "trap_score": 39.04
    },
    {
      "code": "600050",
      "name": "中国联通",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2851767034.0,
        "margin_buy": 47912973.0,
        "turnover_rate": 0.46,
        "financing_pressure_score": 16.8,
        "turnover_heat_score": 3.68
      },
      "trap_score": 25.8
    },
    {
      "code": "002859",
      "name": "洁美科技",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 741213334.0,
        "margin_buy": 89437283.0,
        "turnover_rate": 3.26,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 26.08
      },
      "trap_score": 67.72
    },
    {
      "code": "002920",
      "name": "德赛西威",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1457321753.0,
        "margin_buy": 29032644.0,
        "turnover_rate": 0.75,
        "financing_pressure_score": 19.92,
        "turnover_heat_score": 6.0
      },
      "trap_score": 27.66
    },
    {
      "code": "002456",
      "name": "欧菲光",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1700509811.0,
        "margin_buy": 44767822.0,
        "turnover_rate": 2.07,
        "financing_pressure_score": 26.33,
        "turnover_heat_score": 16.56
      },
      "trap_score": 32.66
    },
    {
      "code": "002156",
      "name": "通富微电",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5815757836.0,
        "margin_buy": 1449163087.0,
        "turnover_rate": 17.36,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 82.5
    },
    {
      "code": "002261",
      "name": "拓维信息",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1685538216.0,
        "margin_buy": 106948188.0,
        "turnover_rate": 4.84,
        "financing_pressure_score": 63.45,
        "turnover_heat_score": 38.72
      },
      "trap_score": 53.8
    },
    {
      "code": "002273",
      "name": "水晶光电",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2847321047.0,
        "margin_buy": 107021227.0,
        "turnover_rate": 4.42,
        "financing_pressure_score": 37.59,
        "turnover_heat_score": 35.36
      },
      "trap_score": 41.49
    },
    {
      "code": "002281",
      "name": "光迅科技",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4225317024.0,
        "margin_buy": 477209532.0,
        "turnover_rate": 3.74,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 29.92
      },
      "trap_score": 68.48
    },
    {
      "code": "002415",
      "name": "海康威视",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 5392168084.0,
        "margin_buy": 351818112.0,
        "turnover_rate": 0.86,
        "financing_pressure_score": 65.25,
        "turnover_heat_score": 6.88
      },
      "trap_score": 48.24
    },
    {
      "code": "002916",
      "name": "深南电路",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1713823025.0,
        "margin_buy": 178446162.0,
        "turnover_rate": 1.05,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 8.4
      },
      "trap_score": 64.18
    },
    {
      "code": "002517",
      "name": "恺英网络",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1486836967.0,
        "margin_buy": 82976341.0,
        "turnover_rate": 3.01,
        "financing_pressure_score": 55.81,
        "turnover_heat_score": 24.08
      },
      "trap_score": 47.43
    },
    {
      "code": "002049",
      "name": "紫光国微",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4596733703.0,
        "margin_buy": 219905519.0,
        "turnover_rate": 2.65,
        "financing_pressure_score": 47.84,
        "turnover_heat_score": 21.2
      },
      "trap_score": 43.27
    },
    {
      "code": "002138",
      "name": "顺络电子",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1368394206.0,
        "margin_buy": 161391177.0,
        "turnover_rate": 3.93,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 31.44
      },
      "trap_score": 68.79
    },
    {
      "code": "002185",
      "name": "华天科技",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2644277673.0,
        "margin_buy": 466917817.0,
        "turnover_rate": 15.85,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 82.5
    },
    {
      "code": "000063",
      "name": "中兴通讯",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 10783645033.0,
        "margin_buy": 1208301585.0,
        "turnover_rate": 4.45,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 35.6
      },
      "trap_score": 69.62
    },
    {
      "code": "000977",
      "name": "浪潮信息",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4970617526.0,
        "margin_buy": 1319853872.0,
        "turnover_rate": 6.55,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 52.4
      },
      "trap_score": 72.98
    },
    {
      "code": "000938",
      "name": "紫光股份",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4960545467.0,
        "margin_buy": 2271076536.0,
        "turnover_rate": 12.61,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 82.5
    },
    {
      "code": "000988",
      "name": "华工科技",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 9029627808.0,
        "margin_buy": 667924798.0,
        "turnover_rate": 3.74,
        "financing_pressure_score": 73.97,
        "turnover_heat_score": 29.92
      },
      "trap_score": 56.77
    },
    {
      "code": "000034",
      "name": "神州数码",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1754365424.0,
        "margin_buy": 275693519.0,
        "turnover_rate": 6.82,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 54.56
      },
      "trap_score": 73.41
    },
    {
      "code": "000066",
      "name": "中国长城",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2036597994.0,
        "margin_buy": 131085458.0,
        "turnover_rate": 3.15,
        "financing_pressure_score": 64.36,
        "turnover_heat_score": 25.2
      },
      "trap_score": 51.5
    },
    {
      "code": "000725",
      "name": "京东方Ａ",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 12326015038.0,
        "margin_buy": 1018720861.0,
        "turnover_rate": 4.39,
        "financing_pressure_score": 82.65,
        "turnover_heat_score": 35.12
      },
      "trap_score": 61.72
    },
    {
      "code": "000100",
      "name": "TCL科技",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4992712972.0,
        "margin_buy": 394639452.0,
        "turnover_rate": 2.13,
        "financing_pressure_score": 79.04,
        "turnover_heat_score": 17.04
      },
      "trap_score": 56.48
    },
    {
      "code": "600584",
      "name": "长电科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 7178863525.0,
        "margin_buy": 1151843595.0,
        "turnover_rate": 9.62,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 76.96
      },
      "trap_score": 77.89
    },
    {
      "code": "600570",
      "name": "恒生电子",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2622306915.0,
        "margin_buy": 39914524.0,
        "turnover_rate": 1.1,
        "financing_pressure_score": 15.22,
        "turnover_heat_score": 8.8
      },
      "trap_score": 26.11
    },
    {
      "code": "600845",
      "name": "宝信软件",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 597153644.0,
        "margin_buy": 17852482.0,
        "turnover_rate": 0.6,
        "financing_pressure_score": 29.9,
        "turnover_heat_score": 4.8
      },
      "trap_score": 31.91
    },
    {
      "code": "600536",
      "name": "中国软件",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1471051114.0,
        "margin_buy": 70460991.0,
        "turnover_rate": 4.54,
        "financing_pressure_score": 47.9,
        "turnover_heat_score": 36.32
      },
      "trap_score": 46.32
    },
    {
      "code": "600588",
      "name": "用友网络",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1337091805.0,
        "margin_buy": 24686997.0,
        "turnover_rate": 1.46,
        "financing_pressure_score": 18.46,
        "turnover_heat_score": 11.68
      },
      "trap_score": 28.14
    },
    {
      "code": "600602",
      "name": "云赛智联",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 745103721.0,
        "margin_buy": 88081474.0,
        "turnover_rate": 6.88,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 55.04
      },
      "trap_score": 73.51
    },
    {
      "code": "600171",
      "name": "上海贝岭",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 958197471.0,
        "margin_buy": 18152823.0,
        "turnover_rate": 1.72,
        "financing_pressure_score": 18.94,
        "turnover_heat_score": 13.76
      },
      "trap_score": 28.78
    },
    {
      "code": "600498",
      "name": "烽火通信",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2334293816.0,
        "margin_buy": 132144916.0,
        "turnover_rate": 4.61,
        "financing_pressure_score": 56.61,
        "turnover_heat_score": 36.88
      },
      "trap_score": 50.35
    },
    {
      "code": "600183",
      "name": "生益科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3219520954.0,
        "margin_buy": 338154073.0,
        "turnover_rate": 2.51,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 20.08
      },
      "trap_score": 66.52
    },
    {
      "code": "600460",
      "name": "士兰微",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2003734711.0,
        "margin_buy": 134957989.0,
        "turnover_rate": 4.23,
        "financing_pressure_score": 67.35,
        "turnover_heat_score": 33.84
      },
      "trap_score": 54.58
    },
    {
      "code": "600703",
      "name": "三安光电",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 4347807519.0,
        "margin_buy": 68610696.0,
        "turnover_rate": 2.25,
        "financing_pressure_score": 15.78,
        "turnover_heat_score": 18.0
      },
      "trap_score": 28.2
    },
    {
      "code": "601138",
      "name": "工业富联",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 8039780904.0,
        "margin_buy": 481273761.0,
        "turnover_rate": 0.56,
        "financing_pressure_score": 59.86,
        "turnover_heat_score": 4.48
      },
      "trap_score": 45.33
    },
    {
      "code": "601360",
      "name": "三六零",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1924482604.0,
        "margin_buy": 69592370.0,
        "turnover_rate": 1.29,
        "financing_pressure_score": 36.16,
        "turnover_heat_score": 10.32
      },
      "trap_score": 35.84
    },
    {
      "code": "603000",
      "name": "人民网",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 451228050.0,
        "margin_buy": 7671227.0,
        "turnover_rate": 1.13,
        "financing_pressure_score": 17.0,
        "turnover_heat_score": 9.04
      },
      "trap_score": 26.96
    },
    {
      "code": "300054",
      "name": "鼎龙股份",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2003896319.0,
        "margin_buy": 203163392.0,
        "turnover_rate": 4.9,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 39.2
      },
      "trap_score": 70.34
    },
    {
      "code": "002192",
      "name": "融捷股份",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1359738233.0,
        "margin_buy": 179602037.0,
        "turnover_rate": 7.35,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 58.8
      },
      "trap_score": 74.26
    },
    {
      "code": "002466",
      "name": "天齐锂业",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3480675624.0,
        "margin_buy": 322839180.0,
        "turnover_rate": 3.73,
        "financing_pressure_score": 92.75,
        "turnover_heat_score": 29.84
      },
      "trap_score": 65.21
    },
    {
      "code": "002837",
      "name": "英维克",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3802334272.0,
        "margin_buy": 136886282.0,
        "turnover_rate": 2.26,
        "financing_pressure_score": 36.0,
        "turnover_heat_score": 18.08
      },
      "trap_score": 37.32
    },
    {
      "code": "601869",
      "name": "长飞光纤",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2591249648.0,
        "margin_buy": 251482307.0,
        "turnover_rate": 3.52,
        "financing_pressure_score": 97.05,
        "turnover_heat_score": 28.16
      },
      "trap_score": 66.8
    },
    {
      "code": "002938",
      "name": "鹏鼎控股",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1409605883.0,
        "margin_buy": 123526725.0,
        "turnover_rate": 1.02,
        "financing_pressure_score": 87.63,
        "turnover_heat_score": 8.16
      },
      "trap_score": 58.57
    },
    {
      "code": "000878",
      "name": "云南铜业",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1942310771.0,
        "margin_buy": 66440804.0,
        "turnover_rate": 2.16,
        "financing_pressure_score": 34.21,
        "turnover_heat_score": 17.28
      },
      "trap_score": 36.35
    },
    {
      "code": "002155",
      "name": "湖南黄金",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 2137632969.0,
        "margin_buy": 143836968.0,
        "turnover_rate": 2.84,
        "financing_pressure_score": 67.29,
        "turnover_heat_score": 22.72
      },
      "trap_score": 52.32
    },
    {
      "code": "600378",
      "name": "昊华科技",
      "margin_date": "20260724",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1144873665.0,
        "margin_buy": 240330499.0,
        "turnover_rate": 4.98,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 39.84
      },
      "trap_score": 70.47
    },
    {
      "code": "300418",
      "name": "昆仑万维",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 3643523222.0,
        "margin_buy": 235463984.0,
        "turnover_rate": 5.09,
        "financing_pressure_score": 64.63,
        "turnover_heat_score": 40.72
      },
      "trap_score": 54.73
    },
    {
      "code": "002218",
      "name": "拓日新能",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 112409821.0,
        "margin_buy": 17086000.0,
        "turnover_rate": 17.96,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 100.0
      },
      "trap_score": 82.5
    },
    {
      "code": "300617",
      "name": "安靠智电",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": null,
        "margin_buy": null,
        "turnover_rate": 3.66,
        "financing_pressure_score": 0.0,
        "turnover_heat_score": 29.28
      },
      "trap_score": 23.36
    },
    {
      "code": "300738",
      "name": "奥飞数据",
      "margin_date": "20260723",
      "metrics": {
        "business_purity_score": 50,
        "margin_balance": 1386953978.0,
        "margin_buy": 195024409.0,
        "turnover_rate": 7.54,
        "financing_pressure_score": 100.0,
        "turnover_heat_score": 60.32
      },
      "trap_score": 74.56
    }
  ]
};
