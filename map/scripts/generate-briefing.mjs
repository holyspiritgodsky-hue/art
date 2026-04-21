/**
 * 调用 Groq API 生成「今日研判」，写入 public/briefing/latest.json。
 *
 * 用法：
 *   node scripts/generate-briefing.mjs
 *
 * 需要环境变量 GROQ_API_KEY（非 VITE_ 前缀，仅服务端使用）。
 * 在 .env 中配置，或通过系统环境变量传入。
 *
 * 输出：public/briefing/latest.json
 *   { "generatedAt": "ISO timestamp", "text": "三段研判文本" }
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.resolve(ROOT, 'public', 'briefing');
const OUT_FILE = path.resolve(OUT_DIR, 'latest.json');

// ── Load .env manually (no dotenv dependency) ──
function loadEnv() {
  const envPath = path.resolve(ROOT, '.env');
  if (!existsSync(envPath)) return;
  const lines = readFileSync(envPath, 'utf-8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx < 0) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (!(key in process.env)) process.env[key] = val;
  }
}
loadEnv();

// Support both GROQ_API_KEY (server) and VITE_GROQ_API_KEY (legacy)
const API_KEY = process.env.GROQ_API_KEY || process.env.VITE_GROQ_API_KEY;
if (!API_KEY || API_KEY === 'your_groq_api_key_here') {
  console.error('[briefing] Missing GROQ_API_KEY in environment / .env');
  process.exit(1);
}

async function buildContext() {
  // Load commodities
  let commodityCtx = '';
  try {
    const raw = readFileSync(path.resolve(ROOT, 'public', 'commodities', 'latest.json'), 'utf-8');
    const data = JSON.parse(raw);
    commodityCtx = data.items.map(
      (i) => `${i.name} ${i.price.toLocaleString()} ${i.unit}（${i.change >= 0 ? '+' : ''}${i.changePct}%，近30日）`
    ).join('；');
  } catch {
    console.warn('[briefing] Could not read commodities data, skipping.');
  }

  // Load recent news titles
  let recentTitles = '';
  try {
    const indexRaw = readFileSync(path.resolve(ROOT, 'public', 'news', 'index.json'), 'utf-8');
    const index = JSON.parse(indexRaw);
    // Read latest month file
    const latestFile = index.files?.[index.files.length - 1];
    if (latestFile) {
      const newsRaw = readFileSync(path.resolve(ROOT, 'public', 'news', latestFile), 'utf-8');
      const news = JSON.parse(newsRaw);
      recentTitles = news.slice(0, 12).map((n) => {
        // Extract content inside 【】 if present, else use raw title
        const m = n.title.match(/【([^】]+)】/);
        return m ? m[1] : n.title;
      }).join('\n- ');
    }
  } catch {
    console.warn('[briefing] Could not read news data, skipping.');
  }

  return { commodityCtx, recentTitles };
}

async function generate() {
  const { commodityCtx, recentTitles } = await buildContext();
  const today = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });

  const prompt = `你是一位对冲基金级别的地缘政治与大宗商品分析师。根据以下实时数据，输出一份极简「今日研判」，格式严格如下（不要使用markdown，不要用*号，直接纯文本）：

第一段（2句）：核心判断，必须包含具体价格预测区间，例如"金价短期支撑$4700，目标看$5100"。

第二段（1句）：最强行业，格式：「做多：XX行业，逻辑：XX，目标涨幅：XX%」

第三段（1句）：最弱行业，格式：「做空：XX行业，逻辑：XX，目标跌幅：XX%」

日期：${today}
大宗商品：${commodityCtx}
近期新闻：${recentTitles}

直接输出三段，不要任何额外说明。`;

  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.5,
      max_tokens: 280,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('[briefing] Groq API error:', err);
    process.exit(1);
  }

  const json = await res.json();
  const text = json.choices?.[0]?.message?.content?.trim() ?? '';
  if (!text) {
    console.error('[briefing] Empty response from Groq');
    process.exit(1);
  }

  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  writeFileSync(OUT_FILE, JSON.stringify({
    generatedAt: new Date().toISOString(),
    text,
  }, null, 2), 'utf-8');

  console.log(`[briefing] Written to ${OUT_FILE}`);
  console.log(`[briefing] Preview: ${text.slice(0, 80)}…`);
}

generate().catch((e) => {
  console.error('[briefing] Fatal:', e);
  process.exit(1);
});
