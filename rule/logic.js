(function (root) {
  'use strict';

  function calculateReview(direction, values) {
    const [sectorStart, sectorEnd, benchmarkStart, benchmarkEnd] = values.map(Number);
    if (!['outperform', 'underperform'].includes(direction)
      || values.some((value) => value === '' || value === null || value === undefined)
      || ![sectorStart, sectorEnd, benchmarkStart, benchmarkEnd].every((value) => Number.isFinite(value) && value > 0)) {
      throw new Error('四个指数收盘值必须是大于零的有效数字。');
    }
    const sectorReturn = sectorEnd / sectorStart - 1;
    const benchmarkReturn = benchmarkEnd / benchmarkStart - 1;
    const difference = sectorReturn - benchmarkReturn;
    const tolerance = 1e-10;
    const result = Math.abs(difference) < tolerance
      ? 'equal'
      : (direction === 'outperform' ? difference > 0 : difference < 0) ? 'correct' : 'incorrect';
    return { sectorReturn, benchmarkReturn, difference, result };
  }

  function validDate(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const date = new Date(`${value}T00:00:00Z`);
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
  }

  function validateForecast(record) {
    const required = ['id', 'createdAt', 'event', 'facts', 'informationDate', 'source', 'logic', 'invalidation', 'sector', 'benchmark', 'direction', 'confidence', 'startDate', 'endDate'];
    if (!record || typeof record !== 'object' || required.some((key) => typeof record[key] !== 'string' || !record[key].trim())) throw new Error('判断记录不完整。');
    if (!Number.isFinite(Date.parse(record.createdAt))) throw new Error('保存时间无效。');
    if (!['outperform', 'underperform'].includes(record.direction) || !['low', 'medium', 'high'].includes(record.confidence)) throw new Error('判断方向或信心程度无效。');
    if (!validDate(record.informationDate) || !validDate(record.startDate) || !validDate(record.endDate) || record.endDate <= record.startDate) throw new Error('日期无效：截止交易日必须晚于起始交易日。');
    if (record.sourceUrl) {
      let url;
      try { url = new URL(record.sourceUrl); } catch { throw new Error('来源链接无效。'); }
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error('来源链接必须使用 http 或 https。');
    }
    if (record.review !== null && record.review !== undefined) {
      const review = record.review;
      if (typeof review !== 'object' || !Number.isFinite(Date.parse(review.reviewedAt)) || typeof review.notes !== 'string') throw new Error('复盘记录无效。');
      calculateReview(record.direction, [review.sectorStart, review.sectorEnd, review.benchmarkStart, review.benchmarkEnd]);
    }
    return record;
  }

  const api = { calculateReview, validateForecast };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.RuleLogic = api;
})(globalThis);
