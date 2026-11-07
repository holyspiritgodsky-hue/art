(function (root) {
  'use strict';
  const rules = [
    { id: 'gold-breakout', terms: ['现货黄金突破', '国际金价突破', '黄金价格上涨', '国际金价上涨', '金价上涨'], exclude: ['没有上涨', '未上涨', '不再上涨', '不会上涨', '并未上涨', '未能上涨'], title: '黄金价格走高的线索', chain: '黄金价格走高 → 黄金销售收入及原料成本可能变化 → 上游开采与下游消费环节受到不同影响', sectors: [{ name: '黄金开采', effect: '销售价格可能改善；需核对产量、成本及套期保值。' }, { name: '黄金珠宝', effect: '原料成本与消费需求可能变化；需核对库存、定价和销量。' }], invalidation: '金价回落、企业已套保、成本能够转嫁，或相关因素已被市场提前定价。' },
    { id: 'oil-up', terms: ['国际油价上涨', '国际原油价格上涨', '原油价格上涨', '油价上涨', '油价上升', '原油价格上升', '原油上涨'], exclude: ['没有上涨', '未上涨', '不再上涨', '不会上涨', '并未上涨', '未能上涨'], title: '油价上行', chain: '原油价格上升 → 石油相关投入成本可能增加 → 成本敏感行业的利润空间可能受压', sectors: [{ name: '航空运输', effect: '燃油成本可能增加，需观察票价、燃油附加费与套保情况。' }, { name: '石油开采', effect: '上游销售价格可能改善，需观察成本、产量和已有预期。' }], invalidation: '油价回落、企业已套保、成本能够转嫁，或相关因素已被市场提前定价。' },
    { id: 'oil-down', terms: ['国际油价下跌', '国际原油价格下跌', '原油价格下跌', '油价下跌', '油价下降', '原油价格下降', '原油下跌'], exclude: ['没有下跌', '未下跌', '不再下跌', '不会下跌', '并未下跌', '未能下跌'], title: '油价下行', chain: '原油价格下降 → 石油相关投入成本可能降低 → 成本敏感行业的利润空间可能改善', sectors: [{ name: '航空运输', effect: '燃油成本可能降低，需同时观察客流、票价与套保。' }, { name: '石油开采', effect: '上游销售价格可能承压，需观察成本、产量与市场预期。' }], invalidation: '油价反弹、企业已套保、需求走弱，或相关因素已被市场提前定价。' },
    { id: 'freight-up', terms: ['航运运价上涨', '海运运价上涨', '集装箱运价上涨', '航运价格上涨', '运价上涨', '运价上升'], exclude: ['没有上涨', '未上涨', '不再上涨', '不会上涨', '并未上涨', '未能上涨'], title: '航运运价上行', chain: '航运运价上升 → 部分运输收入或货主物流成本可能增加 → 不同业务的利润受到不同影响', sectors: [{ name: '航运', effect: '部分承运商收入可能受益，需核对航线、现货比例和成本。' }, { name: '出口制造', effect: '部分企业物流成本可能承压，需核对运输合同及定价权。' }], invalidation: '运价回落、长期合同锁定价格、成本可转嫁，或个股已提前反映预期。' },
    { id: 'freight-down', terms: ['航运运价下跌', '海运运价下跌', '集装箱运价下跌', '航运价格下跌', '运价下跌', '运价下降'], exclude: ['没有下跌', '未下跌', '不再下跌', '不会下跌', '并未下跌', '未能下跌'], title: '航运运价下行', chain: '航运运价下降 → 部分运输收入或货主物流成本可能减少 → 不同业务的利润受到不同影响', sectors: [{ name: '航运', effect: '部分承运商收入可能承压，需核对航线、现货比例和成本。' }, { name: '出口制造', effect: '部分企业物流成本可能下降，需核对运输合同与外需。' }], invalidation: '运价反弹、长期合同锁定价格、外需走弱，或市场已提前反映预期。' },
  ];
  function extract(text) {
    if (typeof text !== 'string' || !text.trim()) throw new Error('请输入信息原文。');
    const matches = [];
    for (const rule of rules) {
      for (const term of rule.terms) {
        let index = text.indexOf(term);
        while (index !== -1) {
          const before = text.slice(Math.max(0, index - 12), index);
          const after = text.slice(index + term.length, index + term.length + 8);
          const context = before + term + after;
          if (!rule.exclude.some((word) => context.includes(word)) && !/(预计|预测|可能|假如|如果|或将|或会|有望|将会|将要|是否|能否)/.test(before) && !/^(?:吗|么|是否|的可能性)/.test(after)) {
            matches.push({ rule, term });
            break;
          }
          index = text.indexOf(term, index + term.length);
        }
        if (matches.some((match) => match.rule.id === rule.id)) break;
      }
    }
    return matches;
  }
  const api = { rules, extract };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.WorldRules = api;
})(globalThis);
