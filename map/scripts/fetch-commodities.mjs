/**
 * 抓取大宗商品价格数据（30 天日线），写入 public/commodities/latest.json。
 *
 * 用法：
 *   node scripts/fetch-commodities.mjs
 *   node scripts/fetch-commodities.mjs --dry-run
 *
 * 数据源：Yahoo Finance Chart API（公开，无需 key）
 */

import { writeFileSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', 'public', 'commodities');
const DRY_RUN = process.argv.includes('--dry-run');

/**
 * @typedef {{ symbol: string; name: string; unit: string; geoTag?: string }} CommodityConfig
 */

/** @type {CommodityConfig[]} */
const COMMODITIES = [
  { symbol: 'BZ=F', name: '布伦特原油', unit: 'USD/桶', geoTag: '霍尔木兹 · 红海' },
  { symbol: 'GC=F', name: '黄金', unit: 'USD/盎司', geoTag: '避险资产' },
  { symbol: 'DX-Y.NYB', name: '美元指数', unit: '', geoTag: '美联储' },
  { symbol: 'NG=F', name: '天然气', unit: 'USD/MMBtu', geoTag: '俄乌 · 北溪' },
];

const YAHOO_CHART_URL = 'https://query1.finance.yahoo.com/v8/finance/chart';

async function fetchChart(symbol) {
  const url = `${YAHOO_CHART_URL}/${encodeURIComponent(symbol)}?range=1mo&interval=1d&includePrePost=false`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
  });

  if (!res.ok) {
    throw new Error(`Yahoo Finance ${symbol}: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  const result = json?.chart?.result?.[0];
  if (!result) throw new Error(`No chart data for ${symbol}`);

  const timestamps = result.timestamp ?? [];
  const closes = result.indicators?.quote?.[0]?.close ?? [];
  const meta = result.meta ?? {};

  // Build daily close array
  const points = [];
  for (let i = 0; i < timestamps.length; i++) {
    const close = closes[i];
    if (close == null) continue;
    const date = new Date(timestamps[i] * 1000).toISOString().slice(0, 10);
    points.push({ date, close: Math.round(close * 100) / 100 });
  }

  return {
    price: meta.regularMarketPrice ?? points[points.length - 1]?.close ?? 0,
    previousClose: meta.chartPreviousClose ?? meta.previousClose ?? points[0]?.close ?? 0,
    currency: meta.currency ?? 'USD',
    points,
  };
}

async function main() {
  console.log('[commodities] Fetching prices...');
  const output = {
    updated: new Date().toISOString(),
    items: [],
  };

  for (const config of COMMODITIES) {
    try {
      const chart = await fetchChart(config.symbol);
      const change = chart.price - chart.previousClose;
      const changePct = chart.previousClose !== 0
        ? Math.round((change / chart.previousClose) * 10000) / 100
        : 0;

      output.items.push({
        symbol: config.symbol,
        name: config.name,
        unit: config.unit,
        geoTag: config.geoTag,
        price: chart.price,
        change: Math.round(change * 100) / 100,
        changePct,
        points: chart.points,
      });

      const arrow = changePct >= 0 ? '▲' : '▼';
      console.log(`  ${config.name}: ${chart.price} ${arrow} ${changePct}%`);
    } catch (err) {
      console.warn(`  [WARN] ${config.name}: ${err.message}`);
    }
  }

  if (DRY_RUN) {
    console.log('[dry-run] Would write:', JSON.stringify(output, null, 2).slice(0, 500));
    return;
  }

  mkdirSync(OUT_DIR, { recursive: true });
  const outPath = path.join(OUT_DIR, 'latest.json');
  writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf-8');
  console.log(`[commodities] Written to ${outPath} (${output.items.length} items)`);
}

main().catch((err) => {
  console.error('[commodities] Fatal:', err);
  process.exit(1);
});
