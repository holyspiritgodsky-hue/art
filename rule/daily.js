'use strict';

const dailyStatus = document.getElementById('daily-status');
const dailyResult = document.getElementById('daily-result');
const dailyList = document.getElementById('daily-list');
const dailyRetry = document.getElementById('daily-retry');

function dailyNode(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value) node.textContent = value;
  return node;
}

function articleLink(value) {
  try {
    const url = new URL(value);
    if (url.protocol === 'https:' || url.protocol === 'http:') return url.href;
  } catch {
    return null;
  }
  return null;
}

function showArticle(article) {
  dailyResult.replaceChildren();
  dailyList.querySelectorAll('button').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.index === String(article.index)));
  });
  const heading = dailyNode('h3', 'daily-heading', article.title);
  const meta = dailyNode('p', 'muted', `${article.source || '来源未提供'} · ${article.published_at || '发布时间未提供'}`);
  dailyResult.append(heading, meta);
  if (article.summary) dailyResult.append(dailyNode('p', 'daily-summary', article.summary));
  const link = articleLink(article.url);
  if (link) {
    const anchor = dailyNode('a', 'source-link', '查看原文 ↗');
    anchor.href = link;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    dailyResult.append(anchor);
  }
  const matches = WorldRules.extract(article.title);
  if (!matches.length) {
    dailyResult.append(dailyNode('p', 'daily-warning', '这条标题没有匹配到已覆盖的规则，暂不推演行业。'));
    return;
  }
  dailyResult.append(dailyNode('p', 'daily-warning', '以下是标题关键词匹配的情景假设，不是对新闻真实性或股价的判断。'));
  for (const { rule, term } of matches) {
    const block = dailyNode('div', 'daily-reasoning');
    block.append(dailyNode('strong', '', `可能的传导 · ${rule.title}`));
    block.append(dailyNode('p', 'chain', rule.chain));
    for (const sector of rule.sectors) {
      block.append(dailyNode('p', 'daily-sector', `${sector.name}：${sector.effect}`));
    }
    block.append(dailyNode('p', 'invalidation', `需要核查 / 可能失效：${rule.invalidation}`));
    block.append(dailyNode('p', 'muted', `标题匹配词：${term}`));
    dailyResult.append(block);
  }
}

async function loadDaily() {
  dailyStatus.textContent = '正在读取新闻…';
  dailyRetry.hidden = true;
  dailyResult.replaceChildren();
  dailyList.replaceChildren();
  try {
    const response = await fetch('https://gameart.top/news/data.json', { cache: 'no-store' });
    if (!response.headers.get('content-type')?.includes('application/json')) throw new Error(`新闻接口返回异常（HTTP ${response.status}）。`);
    const feed = await response.json();
    if (!response.ok) throw new Error(feed.error || `HTTP ${response.status}`);
    if (!Array.isArray(feed.news) || !feed.news.length) throw new Error('新闻源当前没有可用新闻。');
    const articles = feed.news.filter((article) => article && typeof article.title === 'string' && article.title.trim())
      .map((article, index) => ({
        title: article.title,
        summary: typeof article.summary === 'string' ? article.summary : '',
        source: typeof article.source === 'string' ? article.source : '',
        url: typeof article.url === 'string' ? article.url : '',
        published_at: typeof article.published_at === 'string' ? article.published_at : '',
        index,
      }));
    if (!articles.length) throw new Error('新闻源中没有可用的新闻标题。');
    const time = Date.parse(feed.generated_at);
    const age = Number.isFinite(time) ? Date.now() - time : null;
    const stale = age !== null && age > 36 * 60 * 60 * 1000 ? ' · 数据超过 36 小时，可能已过期' : '';
    dailyStatus.textContent = `新闻源更新：${feed.generated_at || '时间未提供'}${stale} · 仅规则分析，不使用上游 AI 分析`;
    for (const article of articles) {
      const button = dailyNode('button', 'daily-item', article.title);
      button.type = 'button';
      button.dataset.index = String(article.index);
      button.addEventListener('click', () => showArticle(article));
      dailyList.append(button);
    }
    const first = articles.find((article) => WorldRules.extract(article.title).length) || articles[0];
    showArticle(first);
  } catch (error) {
    dailyStatus.textContent = `新闻未加载：${error.message}`;
    dailyRetry.hidden = false;
  }
}

dailyRetry.addEventListener('click', loadDaily);
loadDaily();
