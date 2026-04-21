/**
 * 抓取财联社电报快讯，匹配地理关键词，写入按月分的 JSON 文件。
 *
 * 用法：
 *   node scripts/fetch-news.mjs            # 抓最新一页
 *   node scripts/fetch-news.mjs --dry-run  # 仅打印，不写文件
 *
 * 输出：public/news/YYYY-MM.json
 */

import { existsSync, readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { matchGeo } from './geo-keywords.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const NEWS_DIR = path.resolve(__dirname, '..', 'public', 'news');
const DRY_RUN = process.argv.includes('--dry-run');

// ── 财联社电报 API ──
// 公开接口，返回 JSON { data: { roll_data: [...] } }
const CLS_API = 'https://www.cls.cn/nodeapi/updateTelegraphList';

async function fetchTelegraphs() {
  const params = new URLSearchParams({
    app: 'CailianpressWeb',
    os: 'web',
    sv: '8.4.6',
    rn: '50',
  });

  const response = await fetch(`${CLS_API}?${params}`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      'Referer': 'https://www.cls.cn/telegraph',
    },
  });

  if (!response.ok) {
    throw new Error(`CLS API responded ${response.status}: ${response.statusText}`);
  }

  const json = await response.json();
  const items = json?.data?.roll_data ?? [];

  if (!Array.isArray(items) || items.length === 0) {
    console.warn('[fetch-news] No telegraphs returned. Response keys:', Object.keys(json?.data ?? json));
    return [];
  }

  return items;
}

/**
 * 将财联社电报条目转为标准新闻对象
 */
function parseTelegraph(item) {
  // content 是主文本，title 可能为空
  const rawTitle = item.content || item.title || '';
  const title = rawTitle.replace(/<[^>]*>/g, '').trim();
  if (!title) return null;

  // 匹配地理关键词
  const geo = matchGeo(title);
  if (!geo) return null;

  // 时间戳 → 日期字符串
  const timestamp = (item.ctime || item.modified_time || 0) * 1000;
  const date = timestamp ? new Date(timestamp) : new Date();
  const dateStr = date.toISOString().slice(0, 10);
  const timeStr = date.toISOString().slice(11, 16);

  // 摘要：取 brief 或截取前 80 字
  const brief = (item.brief || '').replace(/<[^>]*>/g, '').trim();
  const summary = brief || (title.length > 80 ? title.slice(0, 80) + '…' : undefined);

  // 用更短的标题显示（截取第一句或前 60 字）
  const displayTitle = title.length > 60 ? title.slice(0, 60) + '…' : title;

  return {
    id: `cls-${item.id || Date.now()}`,
    category: geo.category,
    title: displayTitle,
    summary: summary !== displayTitle ? summary : undefined,
    date: dateStr,
    time: timeStr,
    lat: geo.lat,
    lon: geo.lon,
    source: '财联社',
  };
}

/**
 * 读取已有的月度 JSON，追加新条目（去重），写回
 */
function mergeAndSave(newItems) {
  // 按月分组
  const byMonth = new Map();
  for (const item of newItems) {
    const month = item.date.slice(0, 7); // "2026-04"
    if (!byMonth.has(month)) byMonth.set(month, []);
    byMonth.get(month).push(item);
  }

  mkdirSync(NEWS_DIR, { recursive: true });

  for (const [month, items] of byMonth) {
    const filePath = path.join(NEWS_DIR, `${month}.json`);

    // 读取已有数据
    let existing = [];
    if (existsSync(filePath)) {
      try { existing = JSON.parse(readFileSync(filePath, 'utf-8')); } catch { existing = []; }
    }

    // 已有标题集合，用于去重
    const existingTitles = new Set(existing.map((e) => e.title));
    const merged = [...existing];

    let added = 0;
    for (const item of items) {
      if (!existingTitles.has(item.title)) {
        merged.push(item);
        existingTitles.add(item.title);
        added++;
      }
    }

    // 按日期 + 时间降序排列
    merged.sort((a, b) => `${b.date}${b.time || ''}`.localeCompare(`${a.date}${a.time || ''}`));

    if (DRY_RUN) {
      console.log(`[dry-run] ${month}: would add ${added} items (total ${merged.length})`);
    } else {
      writeFileSync(filePath, JSON.stringify(merged, null, 2), 'utf-8');
      console.log(`[fetch-news] ${month}.json: +${added} new (total ${merged.length})`);
    }
  }
}

// ── Main ──
async function main() {
  console.log('[fetch-news] Fetching CLS telegraphs...');

  const telegraphs = await fetchTelegraphs();
  console.log(`[fetch-news] Got ${telegraphs.length} telegraphs`);

  const newsItems = telegraphs.map(parseTelegraph).filter(Boolean);
  console.log(`[fetch-news] ${newsItems.length} matched geo keywords`);

  if (newsItems.length > 0) {
    mergeAndSave(newsItems);
  } else {
    console.log('[fetch-news] No geo-matched news this round.');
  }

  // 生成索引文件（列出所有可用月份）
  if (!DRY_RUN) {
    generateIndex();
  }
}

function generateIndex() {
  mkdirSync(NEWS_DIR, { recursive: true });
  const files = [];
  try {
    const entries = readdirSync(NEWS_DIR);
    for (const entry of entries) {
      const match = entry.match(/^(\d{4}-\d{2})\.json$/);
      if (match) files.push(match[1]);
    }
  } catch { /* empty dir */ }

  files.sort().reverse();
  const indexPath = path.join(NEWS_DIR, 'index.json');
  writeFileSync(indexPath, JSON.stringify({ months: files }, null, 2), 'utf-8');
  console.log(`[fetch-news] index.json updated: ${files.length} month(s)`);
}

main().catch((err) => {
  console.error('[fetch-news] Fatal:', err);
  process.exit(1);
});
