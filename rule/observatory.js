'use strict';

const STORAGE_KEY = 'world-observatory-v1';
const places = [
  { id: 'china', name: '中国', lat: 35, lon: 103 }, { id: 'us', name: '美国', lat: 38, lon: -97 },
  { id: 'japan', name: '日本', lat: 36, lon: 138 }, { id: 'korea', name: '韩国', lat: 36, lon: 128 },
  { id: 'vietnam', name: '越南', lat: 16, lon: 106 }, { id: 'germany', name: '德国', lat: 51, lon: 10 },
  { id: 'uk', name: '英国', lat: 54, lon: -2 }, { id: 'saudi', name: '沙特阿拉伯', lat: 24, lon: 45 },
  { id: 'iran', name: '伊朗', lat: 32, lon: 53 }, { id: 'russia', name: '俄罗斯', lat: 56, lon: 46 },
  { id: 'india', name: '印度', lat: 22, lon: 79 }, { id: 'australia', name: '澳大利亚', lat: -25, lon: 134 },
  { id: 'suez', name: '苏伊士运河', lat: 30, lon: 32 }, { id: 'singapore', name: '新加坡', lat: 1.3, lon: 103.8 },
];
const placeMap = new Map(places.map((place) => [place.id, place]));
const $ = (id) => document.getElementById(id);
let data = { version: 1, connections: [], forecasts: [] };
let storageAvailable = true;
let currentAnalysis = null;
let chosenHypothesis = null;

function message(text, error = false) {
  $('notice').textContent = text;
  $('notice').className = error ? 'notice error' : 'notice';
  $('notice').hidden = false;
}

function text(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (value !== undefined) node.textContent = value;
  return node;
}

function save(next) {
  if (!storageAvailable) throw new Error('本地存储不可用，无法保存；请检查浏览器设置。');
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); }
  catch (error) { throw new Error(`保存失败：${error.message}`); }
  data = next;
}

function validateData(value) {
  if (!value || value.version !== 1 || !Array.isArray(value.connections) || !Array.isArray(value.forecasts)) throw new Error('备份格式无效。');
  const connectionIds = new Set();
  for (const connection of value.connections) {
    if (!connection || typeof connection.id !== 'string' || !connection.id || connectionIds.has(connection.id)
      || !placeMap.has(connection.from) || !placeMap.has(connection.to) || connection.from === connection.to
      || typeof connection.description !== 'string' || !connection.description.trim()
      || typeof connection.source !== 'string' || !connection.source.trim()) throw new Error('关联记录无效或重复。');
    connectionIds.add(connection.id);
  }
  const forecastIds = new Set();
  for (const forecast of value.forecasts) {
    RuleLogic.validateForecast(forecast);
    if (forecastIds.has(forecast.id)) throw new Error('判断记录 ID 重复。');
    forecastIds.add(forecast.id);
  }
  return value;
}

function setTab(name) {
  document.querySelectorAll('.tab').forEach((button) => {
    const active = button.dataset.tab === name;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('.view').forEach((view) => {
    const active = view.id === `view-${name}`;
    view.hidden = !active;
    view.classList.toggle('active', active);
  });
  if (name === 'world') window.dispatchEvent(new Event('resize'));
}
document.querySelectorAll('.tab').forEach((button) => button.addEventListener('click', () => setTab(button.dataset.tab)));
document.querySelector('.go-analysis').addEventListener('click', () => setTab('analysis'));

for (const select of $('connection-form').querySelectorAll('select')) {
  select.append(new Option('请选择地点', ''));
  places.forEach((place) => select.append(new Option(place.name, place.id)));
}

function renderConnections() {
  $('connection-count').textContent = String(data.connections.length).padStart(2, '0');
  const container = $('connections');
  container.replaceChildren();
  if (!data.connections.length) container.append(text('p', 'empty-inline', '还没有关联。添加后，地球上会显示对应连线。'));
  for (const connection of data.connections) {
    const row = text('article', 'connection-row');
    const head = text('div', 'connection-head');
    head.append(text('strong', '', `${placeMap.get(connection.from).name} ↔ ${placeMap.get(connection.to).name}`));
    const remove = text('button', 'remove', '删除');
    remove.type = 'button';
    remove.addEventListener('click', () => {
      if (!confirm('删除这条关联？')) return;
      try { save({ ...data, connections: data.connections.filter((item) => item.id !== connection.id) }); renderConnections(); message('关联已删除。'); }
      catch (error) { message(error.message, true); }
    });
    head.append(remove);
    row.append(head, text('p', '', connection.description), text('small', '', `来源：${connection.source}`));
    container.append(row);
  }
  window.dispatchEvent(new CustomEvent('world-connections', { detail: { places, connections: data.connections } }));
}

$('connection-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form));
  try {
    if (!placeMap.has(values.from) || !placeMap.has(values.to) || values.from === values.to) throw new Error('请选择两个不同的地点。');
    if (!values.description.trim() || !values.source.trim()) throw new Error('请填写关联描述和来源。');
    const connection = { id: crypto.randomUUID(), from: values.from, to: values.to, description: values.description.trim(), source: values.source.trim() };
    save({ ...data, connections: [connection, ...data.connections] });
    form.reset(); renderConnections(); message('关联已保存。');
  } catch (error) { message(error.message, true); }
});

function checkUrl(value) {
  if (!value) return;
  let url;
  try { url = new URL(value); } catch { throw new Error('原文链接无效。'); }
  if (!['http:', 'https:'].includes(url.protocol)) throw new Error('原文链接必须使用 http 或 https。');
}

$('analysis-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const values = Object.fromEntries(new FormData(event.currentTarget));
  Object.keys(values).forEach((key) => { values[key] = values[key].trim(); });
  try {
    if (!values.source || !values.date) throw new Error('请填写来源和信息日期。');
    checkUrl(values.url);
    const matches = WorldRules.extract(values.text);
    currentAnalysis = { ...values, matches };
    renderAnalysis();
  } catch (error) { message(error.message, true); }
});

function renderAnalysis() {
  const container = $('analysis-result');
  container.className = 'analysis-result';
  container.replaceChildren();
  const matches = currentAnalysis.matches;
  if (!matches.length) {
    container.append(text('div', 'result-alert', '没有匹配到明确规则。请核对原文，本版不会自行猜测行业方向。'));
    container.append(text('p', 'muted', '目前仅识别少数黄金价格走高、油价或运价上涨 / 下跌表述；预测、否定、复杂上下文仍需要人工辨别。'));
    return;
  }
  container.append(text('div', 'result-alert', `识别到 ${matches.length} 条候选规则。文字匹配不能理解完整上下文；请先核对事实、时间和方向。`));
  for (const { rule, term } of matches) {
    const block = text('article', 'rule-card');
    block.append(text('span', 'rule-tag', `识别词：${term}`), text('h3', '', rule.title), text('p', 'chain', rule.chain));
    block.append(text('span', 'minor-title', '可能影响的行业 · 非股价预测'));
    for (const sector of rule.sectors) {
      const row = text('div', 'sector-row');
      const copy = text('div');
      copy.append(text('strong', '', sector.name), text('p', '', sector.effect));
      const button = text('button', 'small-button', '记录判断 ↗');
      button.type = 'button';
      button.addEventListener('click', () => {
        chosenHypothesis = { rule, sector };
        $('forecast-context').textContent = `${rule.title} → ${sector.name}：${sector.effect}`;
        $('forecast-error').hidden = true;
        $('forecast-form').reset();
        $('forecast-dialog').showModal();
      });
      row.append(copy, button); block.append(row);
    }
    block.append(text('p', 'invalidation', `需要核查 / 可能失效：${rule.invalidation}`));
    container.append(block);
  }
}

function localDate() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}
$('close-dialog').addEventListener('click', () => $('forecast-dialog').close());
$('forecast-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!chosenHypothesis || !currentAnalysis) { message('请先从规则推演中选择一个行业。', true); return; }
  const fields = Object.fromEntries(new FormData(event.currentTarget));
  Object.keys(fields).forEach((key) => { fields[key] = fields[key].trim(); });
  const record = {
    ...fields, id: crypto.randomUUID(), createdAt: new Date().toISOString(),
    event: chosenHypothesis.rule.title, facts: currentAnalysis.text, informationDate: currentAnalysis.date,
    source: currentAnalysis.source, sourceUrl: currentAnalysis.url,
    logic: chosenHypothesis.rule.chain + '\n' + chosenHypothesis.sector.effect,
    invalidation: chosenHypothesis.rule.invalidation, review: null,
  };
  try {
    RuleLogic.validateForecast(record);
    if (record.startDate < localDate()) throw new Error('起始交易日不能早于今天，避免把历史结果当作事前预测。');
    if (record.informationDate > localDate()) throw new Error('信息日期不能晚于今天。');
    save({ ...data, forecasts: [record, ...data.forecasts] });
    $('forecast-dialog').close(); renderForecasts(); setTab('review'); message('判断已保存。到期后录入指数值进行复盘。');
  } catch (error) {
    $('forecast-error').textContent = error.message;
    $('forecast-error').hidden = false;
  }
});

function percent(value) { return `${value >= 0 ? '+' : ''}${(value * 100).toFixed(2)}%`; }

function renderForecasts() {
  $('forecast-count').textContent = `${data.forecasts.length} 条判断`;
  const container = $('forecasts');
  container.replaceChildren();
  if (!data.forecasts.length) {
    const empty = text('div', 'panel empty-state');
    empty.append(text('div', 'empty-symbol', '◎'), text('strong', '', '还没有保存的判断'), text('p', '', '在“信息与推演”中选择行业，确认后即可记录。'));
    container.append(empty); return;
  }
  for (const record of data.forecasts) {
    const card = text('article', 'panel forecast-card');
    const head = text('div', 'forecast-head');
    const title = text('div');
    title.append(text('span', 'panel-kicker', `${record.event} / ${record.informationDate}`), text('h3', '', record.sector));
    head.append(title, text('span', 'pill', record.review ? '已复盘' : '待复盘'));
    card.append(head, text('p', 'forecast-direction', `${record.direction === 'outperform' ? '跑赢' : '跑输'} ${record.benchmark}`), text('p', 'muted', `${record.startDate} → ${record.endDate} · 保存于 ${new Date(record.createdAt).toLocaleString('zh-CN')}`));
    const details = text('details', 'forecast-details');
    details.append(text('summary', '', '查看原文与推演'));
    details.append(text('p', '', `来源：${record.source} · ${record.informationDate}`), text('p', '', `原文：${record.facts}`), text('p', '', `传导：${record.logic}`), text('p', '', `不确定性：${record.invalidation}`));
    if (record.sourceUrl) {
      const link = text('a', 'source-link', '查看原文 ↗');
      link.href = record.sourceUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; details.append(link);
    }
    card.append(details);
    if (record.review) {
      const result = RuleLogic.calculateReview(record.direction, [record.review.sectorStart, record.review.sectorEnd, record.review.benchmarkStart, record.review.benchmarkEnd]);
      const resultBox = text('div', 'review-result');
      resultBox.append(text('strong', `outcome ${result.result}`, { correct: '方向命中', incorrect: '方向未命中', equal: '相对表现持平' }[result.result]));
      resultBox.append(text('p', '', `行业 ${percent(result.sectorReturn)}　基准 ${percent(result.benchmarkReturn)}　相对收益 ${percent(result.difference)}`));
      resultBox.append(text('p', 'muted', `收盘值：行业 ${record.review.sectorStart} → ${record.review.sectorEnd}；基准 ${record.review.benchmarkStart} → ${record.review.benchmarkEnd}`));
      if (record.review.notes) resultBox.append(text('p', '', `复盘说明：${record.review.notes}`));
      card.append(resultBox);
    }
    const review = text('details', 'forecast-details');
    review.append(text('summary', '', record.review ? '修改复盘数据' : '录入复盘数据'));
    const form = text('form', 'review-form');
    const fields = text('div', 'columns review-grid');
    for (const [name, label] of [['sectorStart', '行业起始收盘值'], ['sectorEnd', '行业截止收盘值'], ['benchmarkStart', '基准起始收盘值'], ['benchmarkEnd', '基准截止收盘值']]) {
      const item = text('label', '', label);
      const input = document.createElement('input'); input.name = name; input.type = 'number'; input.step = 'any'; input.min = '0.0000000001'; input.required = true; input.value = record.review?.[name] ?? ''; item.append(input); fields.append(item);
    }
    const noteLabel = text('label', '', '传导是否发生？其他影响是什么？');
    const note = document.createElement('textarea'); note.name = 'notes'; note.rows = 2; note.maxLength = 3000; note.value = record.review?.notes ?? ''; noteLabel.append(note);
    const button = text('button', 'button primary', '保存复盘'); button.type = 'submit';
    form.append(fields, noteLabel, text('p', 'hint', '请使用上述两个交易日的收盘值。相关表现不代表事件就是原因。'), button);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = new FormData(form);
      try {
        const nextReview = { sectorStart: Number(input.get('sectorStart')), sectorEnd: Number(input.get('sectorEnd')), benchmarkStart: Number(input.get('benchmarkStart')), benchmarkEnd: Number(input.get('benchmarkEnd')), notes: String(input.get('notes')).trim(), reviewedAt: new Date().toISOString() };
        RuleLogic.calculateReview(record.direction, [nextReview.sectorStart, nextReview.sectorEnd, nextReview.benchmarkStart, nextReview.benchmarkEnd]);
        if (record.endDate > localDate()) throw new Error('截止日期还未到，不能进行到期复盘。');
        save({ ...data, forecasts: data.forecasts.map((item) => item.id === record.id ? { ...item, review: nextReview } : item) });
        renderForecasts(); message('复盘已保存。');
      } catch (error) { message(error.message, true); }
    });
    review.append(form); card.append(review);
    const remove = text('button', 'remove', '删除记录'); remove.type = 'button';
    remove.addEventListener('click', () => {
      if (!confirm('删除这条判断和复盘？此操作无法撤销。')) return;
      try { save({ ...data, forecasts: data.forecasts.filter((item) => item.id !== record.id) }); renderForecasts(); message('记录已删除。'); }
      catch (error) { message(error.message, true); }
    });
    card.append(remove); container.append(card);
  }
}

$('export').addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
  const link = document.createElement('a'); link.href = url; link.download = `world-observatory-${localDate()}.json`; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000); message('已开始导出，请妥善保管备份。');
});
$('import').addEventListener('change', async (event) => {
  const input = event.currentTarget, file = input.files[0];
  if (!file) return;
  try {
    const incoming = validateData(JSON.parse(await file.text()));
    const connectionIds = new Set(data.connections.map((item) => item.id));
    const forecastIds = new Set(data.forecasts.map((item) => item.id));
    const connections = incoming.connections.filter((item) => !connectionIds.has(item.id));
    const forecasts = incoming.forecasts.filter((item) => !forecastIds.has(item.id));
    save({ version: 1, connections: [...connections, ...data.connections], forecasts: [...forecasts, ...data.forecasts] });
    renderConnections(); renderForecasts(); message(`导入完成：新增 ${connections.length} 条关联、${forecasts.length} 条判断；已有记录未覆盖。`);
  } catch (error) { message(`导入失败：${error.message}`, true); }
  finally { input.value = ''; }
});

try {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) data = validateData(JSON.parse(stored));
} catch (error) {
  storageAvailable = false;
  message(`本地记录读取失败，已禁止写入以保护原数据：${error.message}`, true);
}
if (location.protocol === 'file:') {
  $('globe-status').textContent = '地球需要 HTTP 服务，请通过网站地址打开，或使用本地服务器预览。';
}
renderConnections();
renderForecasts();
window.addEventListener('globe-ready', renderConnections);
