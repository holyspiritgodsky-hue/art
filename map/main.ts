import maplibregl, { Popup } from 'maplibre-gl';
import type { FeatureCollection, LineString, Point, Polygon } from 'geojson';
import './styles.css';
import {
  BASEMAP_STYLE,
  CONFLICT_ZONES,
  GOLD_MINES,
  GOLD_RESERVES,
  NEWS_CATEGORY_META,
  OIL_RESERVES,
  PIPELINES,
  PIPELINE_COLORS,
  STRATEGIC_WATERWAYS,
  type ConflictZone,
  type NewsCategory,
} from './data';

interface NewsBriefJSON {
  id: string;
  category: NewsCategory;
  title: string;
  summary?: string;
  date: string;
  time?: string;
  lat: number;
  lon: number;
  source?: string;
}

type LayerToggleKey = 'countries' | 'conflicts' | 'pipelines' | 'waterways' | 'news' | 'gold' | 'oil' | 'mines';
type FeatureProperties = Record<string, string | number | boolean | null | undefined>;

interface StaticFeature {
  source: string;
  label: string;
  description?: string;
  location?: string;
  meta?: string;
}

interface LayerToggleConfig {
  id: LayerToggleKey;
  title: string;
  description: string;
  layerIds: string[];
  checked: boolean;
}

type BasemapLabelLanguage = 'default' | 'zh';

const app = document.querySelector('#app');

if (!(app instanceof HTMLDivElement)) {
  throw new Error('Map app root not found.');
}

app.innerHTML = `
  <div class="layout">
    <button class="sidebar-toggle" id="sidebar-toggle" aria-label="收起面板" title="收起面板">
        <span class="sidebar-toggle-icon">‹</span>
      </button>

      <aside class="sidebar" id="sidebar">
      <div class="sidebar-inner">
        <button class="sheet-toggle" id="sheet-toggle" aria-label="收起面板" title="收起面板"><span class="sheet-toggle-icon">↓</span></button>

        <section class="sidebar-head">
          <h1 class="headline">地球online</h1>
        </section>

        <section class="panel panel--briefing" id="briefing-panel">
          <h2>今日研判 <span class="briefing-badge">AI</span></h2>
          <div class="briefing-body" id="briefing-body">
            <p class="briefing-loading">正在生成研判…</p>
          </div>
        </section>

        <section class="panel">
          <h2>大宗商品</h2>
          <div id="commodity-list" class="commodity-list"></div>
        </section>

        <section class="panel panel--video">
          <h2>相关视频</h2>
          <div class="video-wrap">
            <iframe src="//player.bilibili.com/player.html?bvid=BV1wLd1BKE36&autoplay=0&danmaku=0"
              allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameborder="0"
              scrolling="no">
            </iframe>
          </div>
        </section>
      </div>
    </aside>

    <main class="map-shell">
      <div class="map-frame">
        <div id="map" class="map"></div>
        <div class="map-layer-control" id="map-layer-control">
          <button
            class="map-layer-toggle"
            id="map-layer-toggle"
            aria-expanded="false"
            aria-controls="map-layer-panel"
            aria-label="打开图层开关"
          >图层</button>
          <section class="map-layer-panel" id="map-layer-panel" hidden>
            <h2>图层开关</h2>
            <div class="toggle-list map-toggle-list" id="toggle-list"></div>
          </section>
        </div>
      </div>
    </main>
  </div>
`;

const mapContainer = document.querySelector('#map');
const toggleList = document.querySelector('#toggle-list');
const mapLayerToggle = document.querySelector('#map-layer-toggle');
const mapLayerPanel = document.querySelector('#map-layer-panel');

if (
  !(mapContainer instanceof HTMLDivElement)
  || !(toggleList instanceof HTMLDivElement)
  || !(mapLayerToggle instanceof HTMLButtonElement)
  || !(mapLayerPanel instanceof HTMLElement)
) {
  throw new Error('Map UI mount points not found.');
}

const toggleListElement: HTMLDivElement = toggleList;
const mapLayerToggleButton: HTMLButtonElement = mapLayerToggle;
const mapLayerPanelElement: HTMLElement = mapLayerPanel;

const layerToggles: LayerToggleConfig[] = [
  { id: 'countries', title: '国家边界', description: '底图自带国家边界线', layerIds: ['boundary_country_z0-4', 'boundary_country_z5-'], checked: true },
  { id: 'conflicts', title: '冲突区', description: '七个静态冲突多边形', layerIds: ['conflicts-fill', 'conflicts-outline'], checked: true },
  { id: 'pipelines', title: '管道', description: '八条主要能源走廊', layerIds: ['pipelines-line'], checked: true },
  { id: 'waterways', title: '战略水道', description: '六个全球咽喉点', layerIds: ['waterways-circle', 'waterways-label'], checked: true },
  { id: 'news', title: '新闻标记', description: '俄乌·伊朗·财联社要闻', layerIds: ['news-circle', 'news-pulse'], checked: true },
  { id: 'gold', title: '黄金储备', description: 'TOP 15 央行黄金储备', layerIds: ['gold-circle', 'gold-label'], checked: true },
  { id: 'oil', title: '石油储量', description: 'TOP 5 国家石油探明储量', layerIds: ['oil-circle', 'oil-label'], checked: false },
  { id: 'mines', title: '黄金矿山', description: '全球12大产金矿山', layerIds: ['gold-mine-circle', 'gold-mine-label'], checked: false },
];

const popup = new Popup({ closeButton: true, closeOnClick: false, maxWidth: '320px' });
const basemapLabelLanguage: BasemapLabelLanguage = 'zh';

const map = new maplibregl.Map({
  container: mapContainer,
  style: BASEMAP_STYLE,
  center: [112, 30],
  zoom: 2.35,
  minZoom: 1,
  maxZoom: 7,
  attributionControl: {},
});

map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

renderToggles();
wireSheetAndSidebar();
wireMapLayerControl();

let allNews: NewsBriefJSON[] = [];
let filteredNews: NewsBriefJSON[] = [];
let timelineDays = 7;

map.on('load', async () => {
  try {
    mapContainer.classList.add('map--loaded');
    applyBasemapLabelLanguage(basemapLabelLanguage);
    addConflictLayers();
    addPipelineLayer();
    addWaterwayLayer();
    addGoldLayer();
    addOilLayer();
    addGoldMinesLayer();

    // Apply initial visibility for layers that start unchecked
    layerToggles.filter((t) => !t.checked).forEach((toggle) => {
      toggle.layerIds.forEach((layerId) => {
        if (map.getLayer(layerId)) map.setLayoutProperty(layerId, 'visibility', 'none');
      });
    });

    allNews = await loadNewsFromJSON();
    filteredNews = filterNewsByDays(allNews, timelineDays);
    addNewsLayer(filteredNews);
    wireInteractions();
    loadAndRenderCommodities();
    loadAndRenderBriefing();
  } catch (error) {
    console.error('[map] Failed to initialize.', error);
  }
});

map.on('error', () => {
  console.warn('[map] Basemap error detected. External tiles may be blocked.');
});

function applyBasemapLabelLanguage(language: BasemapLabelLanguage): void {
  if (language === 'default') return;

  const style = map.getStyle();
  if (!style.layers) return;

  const styleLayers = style.layers as Array<{ id: string; type: string; layout?: Record<string, unknown> }>;

  styleLayers.forEach((layer) => {
    if (layer.type !== 'symbol') return;

    const textField = layer.layout?.['text-field'];
    if (!referencesNameField(textField)) return;

    map.setLayoutProperty(layer.id, 'text-field', buildLocalizedTextField(textField, language));
  });
}

function buildLocalizedTextField(fallbackTextField: unknown, language: Exclude<BasemapLabelLanguage, 'default'>): unknown {
  const languageFields = language === 'zh'
    ? ['name:zh-Hans', 'name:zh', 'name_zh-Hans', 'name_zh', 'name_zh_cn']
    : [];

  return ['coalesce', ...languageFields.map((field) => ['get', field]), fallbackTextField];
}

function referencesNameField(value: unknown): boolean {
  if (typeof value === 'string') {
    return value.includes('name');
  }

  if (!Array.isArray(value)) {
    return false;
  }

  return JSON.stringify(value).includes('name');
}

function wireSheetAndSidebar(): void {
  const sidebar = document.querySelector<HTMLElement>('#sidebar');
  const toggle = document.querySelector<HTMLButtonElement>('#sidebar-toggle');
  const sheetToggle = document.querySelector<HTMLButtonElement>('#sheet-toggle');
  const layout = document.querySelector<HTMLElement>('.layout');
  if (!sidebar || !toggle || !layout) return;

  // PC: collapse/expand sidebar
  toggle.addEventListener('click', () => {
    layout.classList.toggle('sidebar-collapsed');
    toggle.setAttribute('aria-label', layout.classList.contains('sidebar-collapsed') ? '展开面板' : '收起面板');
    setTimeout(() => map.resize(), 270);
  });

  // Mobile: sheet toggle button
  if (sheetToggle) {
    sheetToggle.addEventListener('click', () => {
      const collapsed = sidebar.classList.toggle('sheet-collapsed');
      const icon = sheetToggle.querySelector('.sheet-toggle-icon');
      if (icon) icon.textContent = collapsed ? '↑' : '↓';
      sheetToggle.setAttribute('aria-label', collapsed ? '展开面板' : '收起面板');
      setTimeout(() => map.resize(), 320);
    });
  }
}

function renderToggles(): void {
  layerToggles.forEach((toggle) => {
    const label = document.createElement('label');
    label.className = 'toggle-item';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = toggle.checked;
    input.dataset.toggleId = toggle.id;
    input.addEventListener('change', () => {
      toggle.layerIds.forEach((layerId) => {
        if (!map.getLayer(layerId)) return;
        map.setLayoutProperty(layerId, 'visibility', input.checked ? 'visible' : 'none');
      });
    });

    const copy = document.createElement('div');
    copy.className = 'toggle-copy';
    copy.innerHTML = `<strong>${toggle.title}</strong><span>${toggle.description}</span>`;

    label.append(input, copy);
    toggleListElement.appendChild(label);
  });
}

function addConflictLayers(): void {
  map.addSource('conflicts', {
    type: 'geojson',
    data: asPolygonCollection(CONFLICT_ZONES, (zone) => ({
      source: 'Conflict zone',
      label: zone.name,
      description: zone.description,
      location: zone.location,
      meta: zone.parties?.join(' / '),
    })),
  });

  map.addLayer({
    id: 'conflicts-fill',
    type: 'fill',
    source: 'conflicts',
    paint: { 'fill-color': ['match', ['get', 'intensity'], 'high', '#ff6b6b', 'medium', '#f7b267', '#ffd166'], 'fill-opacity': 0.18 },
  });

  map.addLayer({
    id: 'conflicts-outline',
    type: 'line',
    source: 'conflicts',
    paint: { 'line-color': '#ff8c8c', 'line-width': 1.3, 'line-opacity': 0.8 },
  });
}

function addPipelineLayer(): void {
  map.addSource('pipelines', {
    type: 'geojson',
    data: asLineCollection(PIPELINES, (pipeline) => ({
      source: 'Pipeline',
      label: pipeline.name,
      description: pipeline.operator ? `Operator: ${pipeline.operator}` : undefined,
      meta: [pipeline.type, pipeline.capacity].filter(Boolean).join(' • '),
      lineColor: PIPELINE_COLORS[pipeline.type],
    })),
  });

  map.addLayer({
    id: 'pipelines-line',
    type: 'line',
    source: 'pipelines',
    layout: { 'line-cap': 'round', 'line-join': 'round' },
    paint: { 'line-color': ['coalesce', ['get', 'lineColor'], '#f7b267'], 'line-width': ['interpolate', ['linear'], ['zoom'], 1, 1, 5, 2.6], 'line-opacity': 0.68 },
  });
}

function addWaterwayLayer(): void {
  map.addSource('waterways', {
    type: 'geojson',
    data: asPointCollection(STRATEGIC_WATERWAYS, (waterway) => ({
      source: 'Strategic waterway',
      label: waterway.name,
      description: waterway.description,
    })),
  });

  map.addLayer({
    id: 'waterways-circle',
    type: 'circle',
    source: 'waterways',
    paint: { 'circle-radius': 4, 'circle-color': '#90e0ef', 'circle-stroke-width': 1, 'circle-stroke-color': '#081018', 'circle-opacity': 0.88 },
  });

  map.addLayer({
    id: 'waterways-label',
    type: 'symbol',
    source: 'waterways',
    minzoom: 2.4,
    layout: { 'text-field': ['get', 'label'], 'text-font': ['Noto Sans Regular'], 'text-size': 11, 'text-offset': [0, 1.1], 'text-anchor': 'top' },
    paint: { 'text-color': '#dceffd', 'text-halo-color': '#081018', 'text-halo-width': 1 },
  });
}

function addGoldLayer(): void {
  const maxTonnes = Math.max(...GOLD_RESERVES.map((g) => g.tonnes));

  const geojson: FeatureCollection<Point> = {
    type: 'FeatureCollection',
    features: GOLD_RESERVES.map((g, i) => {
      const yoyStr = g.yoyTonnes > 0
        ? `▲ +${g.yoyTonnes} 吨 净买入`
        : g.yoyTonnes < 0
          ? `▼ ${g.yoyTonnes} 吨 净卖出`
          : '持平';
      return {
        type: 'Feature' as const,
        geometry: { type: 'Point' as const, coordinates: [g.lon, g.lat] },
        properties: {
          source: '黄金储备',
          label: g.country,
          description: `${g.tonnes.toLocaleString()} 吨`,
          meta: `央行排名 #${i + 1}　年度变化：${yoyStr}${g.note ? '　' + g.note : ''}`,
          tonnes: g.tonnes,
          ratio: g.tonnes / maxTonnes,
        },
      };
    }),
  };

  map.addSource('gold', { type: 'geojson', data: geojson });

  map.addLayer({
    id: 'gold-circle',
    type: 'circle',
    source: 'gold',
    paint: {
      'circle-radius': ['interpolate', ['linear'], ['get', 'ratio'], 0.25, 8, 1, 22],
      'circle-color': '#ffd700',
      'circle-opacity': 0.55,
      'circle-stroke-width': 1.8,
      'circle-stroke-color': '#bfa200',
    },
  });

  map.addLayer({
    id: 'gold-label',
    type: 'symbol',
    source: 'gold',
    layout: {
      'text-field': ['concat', ['get', 'label'], '\n', ['get', 'description']],
      'text-font': ['Noto Sans Regular'],
      'text-size': 11,
      'text-offset': [0, 2.2],
      'text-anchor': 'top',
    },
    paint: {
      'text-color': '#ffd700',
      'text-halo-color': '#081018',
      'text-halo-width': 1.2,
    },
  });
}

function addOilLayer(): void {
  const maxBarrels = Math.max(...OIL_RESERVES.map((o) => o.billionBarrels));

  const geojson: FeatureCollection<Point> = {
    type: 'FeatureCollection',
    features: OIL_RESERVES.map((o) => ({
      type: 'Feature' as const,
      geometry: { type: 'Point' as const, coordinates: [o.lon, o.lat] },
      properties: {
        source: '石油储量',
        label: o.country,
        description: `${o.billionBarrels} 十亿桶`,
        meta: `全球探明储量第 ${OIL_RESERVES.indexOf(o) + 1} 名`,
        barrels: o.billionBarrels,
        ratio: o.billionBarrels / maxBarrels,
      },
    })),
  };

  map.addSource('oil', { type: 'geojson', data: geojson });

  map.addLayer({
    id: 'oil-circle',
    type: 'circle',
    source: 'oil',
    paint: {
      'circle-radius': ['interpolate', ['linear'], ['get', 'ratio'], 0.4, 8, 1, 22],
      'circle-color': '#1a1a1a',
      'circle-opacity': 0.6,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#444',
    },
  });

  map.addLayer({
    id: 'oil-label',
    type: 'symbol',
    source: 'oil',
    layout: {
      'text-field': ['concat', ['get', 'label'], '\n', ['get', 'description']],
      'text-font': ['Noto Sans Regular'],
      'text-size': 11,
      'text-offset': [0, 2.2],
      'text-anchor': 'top',
    },
    paint: {
      'text-color': '#e0e0e0',
      'text-halo-color': '#081018',
      'text-halo-width': 1.2,
    },
  });
}

function createGoldMountainImage(): ImageData {
  const size = 40;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.font = `${size - 4}px serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // draw emoji in gold tint via compositing
  ctx.fillStyle = '#ffd700';
  ctx.fillText('⛰', size / 2, size / 2 + 1);
  ctx.globalCompositeOperation = 'source-atop';
  ctx.fillStyle = '#ffd700';
  ctx.fillRect(0, 0, size, size);
  return ctx.getImageData(0, 0, size, size);
}

async function addGoldMinesLayer(): Promise<void> {
  const maxTonnes = Math.max(...GOLD_MINES.map((m) => m.annualTonnes));

  const geojson: FeatureCollection<Point> = {
    type: 'FeatureCollection',
    features: GOLD_MINES.map((m) => ({
      type: 'Feature' as const,
      geometry: { type: 'Point' as const, coordinates: [m.lon, m.lat] },
      properties: {
        source: '黄金矿山',
        label: m.name,
        description: `年产 ${m.annualTonnes} 吨`,
        location: m.country,
        meta: `${m.country} · 全球主要产金矿`,
        ratio: m.annualTonnes / maxTonnes,
      },
    })),
  };

  map.addSource('gold-mines', { type: 'geojson', data: geojson });

  map.addImage('gold-mountain', createGoldMountainImage());

  map.addLayer({
    id: 'gold-mine-circle',
    type: 'symbol',
    source: 'gold-mines',
    minzoom: 2.5,
    layout: {
      'icon-image': 'gold-mountain',
      'icon-size': ['interpolate', ['linear'], ['get', 'ratio'], 0.2, 0.5, 1, 1.0],
      'icon-allow-overlap': true,
      'icon-ignore-placement': true,
    },
  });

  map.addLayer({
    id: 'gold-mine-label',
    type: 'symbol',
    source: 'gold-mines',
    minzoom: 2.5,
    layout: {
      'text-field': ['concat', ['get', 'label'], '\n', ['get', 'description']],
      'text-font': ['Noto Sans Regular'],
      'text-size': 10,
      'text-offset': [0, 1.8],
      'text-anchor': 'top',
    },
    paint: {
      'text-color': '#c8a000',
      'text-halo-color': '#081018',
      'text-halo-width': 1.2,
    },
  });
}

async function loadNewsFromJSON(): Promise<NewsBriefJSON[]> {
  const now = new Date();
  const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  const urls = [`./news/${currentMonth}.json`];

  if (now.getDate() <= 7) {
    const prev = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const prevMonth = `${prev.getFullYear()}-${String(prev.getMonth() + 1).padStart(2, '0')}`;
    urls.push(`./news/${prevMonth}.json`);
  }

  const results: NewsBriefJSON[] = [];
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const items: NewsBriefJSON[] = await res.json();
        results.push(...items);
      }
    } catch { /* file not found, skip */ }
  }

  const seen = new Set<string>();
  return results.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function filterNewsByDays(news: NewsBriefJSON[], days: number): NewsBriefJSON[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  return news.filter((item) => item.date >= cutoffStr);
}

function cleanNewsTitle(raw: string): string {
  // 【标题】财联社X月X日电，正文… → 标题
  const bracketMatch = raw.match(/^【(.+?)】/);
  if (bracketMatch) return bracketMatch[1].trim();
  // 财联社X月X日电，正文… → 正文…
  return raw.replace(/^财联社\S+?电，/, '').trim();
}

function cleanNewsSummary(raw: string, title: string): string | undefined {
  // Strip leading 【…】财联社…电，
  let s = raw.replace(/^【.+?】/, '').replace(/^财联社\S+?电，/, '').trim();
  // If summary starts with the title text, it's just a repeat — drop it
  if (s.startsWith(title) || title.startsWith(s.slice(0, 20))) return undefined;
  return s.length > 0 ? s : undefined;
}

function newsToGeoJSON(items: NewsBriefJSON[]): FeatureCollection<Point> {
  return {
    type: 'FeatureCollection',
    features: items.map((item) => {
      const cleanTitle = cleanNewsTitle(item.title);
      const cleanSummary = item.summary ? cleanNewsSummary(item.summary, cleanTitle) : undefined;
      const categoryLabel = NEWS_CATEGORY_META[item.category]?.label ?? '新闻';
      // Don't repeat source name in meta if it's already in the category kicker
      const sourceStr = item.source && !categoryLabel.includes(item.source) ? ` · ${item.source}` : '';
      return {
        type: 'Feature' as const,
        geometry: { type: 'Point' as const, coordinates: [item.lon, item.lat] },
        properties: {
          source: categoryLabel,
          label: cleanTitle,
          description: cleanSummary,
          meta: `${item.date}${item.time ? ' ' + item.time : ''}${sourceStr}`,
          category: item.category,
        },
      };
    }),
  };
}

function buildNewsColorMatch(): unknown[] {
  const colorMatch: unknown[] = ['match', ['get', 'category']];
  for (const [key, meta] of Object.entries(NEWS_CATEGORY_META)) {
    colorMatch.push(key, meta.color);
  }
  colorMatch.push('#aaa');
  return colorMatch;
}

function addNewsLayer(items: NewsBriefJSON[]): void {
  const colorMatch = buildNewsColorMatch();

  map.addSource('news', {
    type: 'geojson',
    data: newsToGeoJSON(items),
  });

  map.addLayer({
    id: 'news-pulse',
    type: 'circle',
    source: 'news',
    paint: {
      'circle-radius': ['interpolate', ['linear'], ['zoom'], 1, 10, 5, 18],
      'circle-color': colorMatch as never,
      'circle-opacity': 0.15,
      'circle-stroke-width': 0,
    },
  });

  map.addLayer({
    id: 'news-circle',
    type: 'circle',
    source: 'news',
    paint: {
      'circle-radius': ['interpolate', ['linear'], ['zoom'], 1, 4.5, 5, 8],
      'circle-color': colorMatch as never,
      'circle-stroke-width': 1.6,
      'circle-stroke-color': '#fff',
      'circle-opacity': 0.95,
    },
  });
}

function wireInteractions(): void {
  const interactiveLayers = ['conflicts-fill', 'pipelines-line', 'waterways-circle', 'news-circle', 'gold-circle', 'oil-circle', 'gold-mine-circle'];

  interactiveLayers.forEach((layerId) => {
    map.on('mouseenter', layerId, () => {
      map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', layerId, () => {
      map.getCanvas().style.cursor = '';
    });
  });

  map.on('click', (event) => {
    const feature = map.queryRenderedFeatures(event.point, { layers: interactiveLayers })[0];
    if (!feature) {
      popup.remove();
      return;
    }

    const properties = feature.properties as FeatureProperties | undefined;
    popup.setLngLat(event.lngLat).setHTML(buildPopupContent(feature.layer.id, properties)).addTo(map);
  });
}

function buildPopupContent(layerId: string, properties?: FeatureProperties): string {
  if (layerId === 'country-fill') {
    const title = valueAsString(properties?.name ?? properties?.NAME ?? properties?.admin) ?? 'Country';
    const code = valueAsString(properties?.['ISO3166-1-Alpha-2'] ?? properties?.ISO_A2 ?? properties?.iso_a2);
    return `
      <p class="popup-kicker">国家</p>
      <h3 class="popup-title">${escapeHtml(title)}</h3>
      <p class="popup-copy">来自本地国家 GeoJSON 的政治边界。</p>
      ${code ? `<p class="popup-meta">ISO2：${escapeHtml(code)}</p>` : ''}
    `;
  }

  const label = valueAsString(properties?.label) ?? '地图要素';
  const source = valueAsString(properties?.source) ?? '地图图层';
  const description = valueAsString(properties?.description);
  const location = valueAsString(properties?.location);
  const meta = valueAsString(properties?.meta);

  return `
    <p class="popup-kicker">${escapeHtml(source)}</p>
    <h3 class="popup-title">${escapeHtml(label)}</h3>
    ${description ? `<p class="popup-copy">${escapeHtml(description)}</p>` : ''}
    ${location ? `<p class="popup-meta">位置：${escapeHtml(location)}</p>` : ''}
    ${meta ? `<p class="popup-meta">${escapeHtml(meta)}</p>` : ''}
  `;
}

function asPointCollection<T extends { lat: number; lon: number }>(items: T[], getProperties: (item: T) => StaticFeature & FeatureProperties): FeatureCollection<Point> {
  return {
    type: 'FeatureCollection',
    features: items.map((item) => ({ type: 'Feature', geometry: { type: 'Point', coordinates: [item.lon, item.lat] }, properties: getProperties(item) })),
  };
}

function asLineCollection<T extends { points: [number, number][] }>(items: T[], getProperties: (item: T) => StaticFeature & FeatureProperties): FeatureCollection<LineString> {
  return {
    type: 'FeatureCollection',
    features: items.filter((item) => item.points.length >= 2).map((item) => ({ type: 'Feature', geometry: { type: 'LineString', coordinates: item.points }, properties: getProperties(item) })),
  };
}

function asPolygonCollection(items: ConflictZone[], getProperties: (item: ConflictZone) => StaticFeature & FeatureProperties): FeatureCollection<Polygon> {
  return {
    type: 'FeatureCollection',
    features: items.filter((item) => item.coords.length >= 3).map((item) => ({
      type: 'Feature',
      geometry: { type: 'Polygon', coordinates: [closeRing(item.coords)] },
      properties: { intensity: item.intensity, ...getProperties(item) },
    })),
  };
}

function closeRing(points: [number, number][]): [number, number][] {
  const first = points[0];
  const last = points[points.length - 1];
  if (!first || !last) return points;
  if (first[0] === last[0] && first[1] === last[1]) return points;
  return [...points, first];
}

function valueAsString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim().length > 0 ? value : undefined;
}

function escapeHtml(value: string): string {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

// ── Commodity panel ──

interface CommodityItem {
  symbol: string;
  name: string;
  unit: string;
  geoTag?: string;
  price: number;
  change: number;
  changePct: number;
  points: { date: string; close: number }[];
}

interface CommodityData {
  updated: string;
  items: CommodityItem[];
}

async function loadAndRenderBriefing(): Promise<void> {
  const body = document.querySelector<HTMLElement>('#briefing-body');
  if (!body) return;

  try {
    const res = await fetch('./briefing/latest.json');
    if (!res.ok) {
      body.innerHTML = '<p class="briefing-hint">研判尚未生成，请稍后再看。</p>';
      return;
    }

    const data = await res.json() as { generatedAt: string; text: string };
    const text = data.text?.trim() ?? '';
    if (!text) {
      body.innerHTML = '<p class="briefing-hint">研判内容为空。</p>';
      return;
    }

    // Show generation time
    const genTime = data.generatedAt
      ? new Date(data.generatedAt).toLocaleString('zh-CN', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
      : '';
    const timeHint = genTime ? `<p class="briefing-time">更新于 ${genTime}</p>` : '';

    body.innerHTML = timeHint + text
      .split(/\n+/)
      .filter((p) => p.trim().length > 0)
      .map((p) => {
        const t = p.trim();
        const cls = t.startsWith('做多') ? ' briefing-para--long'
          : t.startsWith('做空') ? ' briefing-para--short'
          : '';
        return `<p class="briefing-para${cls}">${escapeHtml(t)}</p>`;
      })
      .join('');
  } catch (e) {
    console.error('[briefing]', e);
    body.innerHTML = '<p class="briefing-hint">无法加载研判数据。</p>';
  }
}

async function loadAndRenderCommodities(): Promise<void> {
  const container = document.querySelector('#commodity-list');
  if (!container) return;

  try {
    const res = await fetch('./commodities/latest.json');
    if (!res.ok) {
      container.innerHTML = '<p class="commodity-empty">暂无数据</p>';
      return;
    }
    const data: CommodityData = await res.json();
    renderCommodities(container as HTMLDivElement, data);
  } catch {
    container.innerHTML = '<p class="commodity-empty">加载失败</p>';
  }
}

function renderCommodities(container: HTMLDivElement, data: CommodityData): void {
  container.innerHTML = '';

  for (const item of data.items) {
    const card = document.createElement('div');
    card.className = 'commodity-card';

    const isUp = item.change >= 0;
    const arrow = isUp ? '▲' : '▼';
    const sign = isUp ? '+' : '';
    const colorClass = isUp ? 'commodity-up' : 'commodity-down';

    card.innerHTML = `
      <div class="commodity-header">
        <span class="commodity-name">${escapeHtml(item.name)}</span>
        <span class="commodity-price">${item.price.toLocaleString()}</span>
      </div>
      <div class="commodity-meta">
        <span class="${colorClass}">${arrow} ${sign}${item.changePct}%</span>
        ${item.unit ? `<span class="commodity-unit">${escapeHtml(item.unit)}</span>` : ''}
      </div>
      <div class="commodity-sparkline">${buildSparklineSVG(item.points.map(p => p.close), isUp)}</div>
      ${item.geoTag ? `<div class="commodity-geo">${escapeHtml(item.geoTag)}</div>` : ''}
    `;

    container.appendChild(card);
  }

  const updated = new Date(data.updated);
  const timeStr = `${updated.toLocaleDateString('zh-CN')} ${updated.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}`;
  const footer = document.createElement('div');
  footer.className = 'commodity-updated';
  footer.textContent = `数据更新：${timeStr}`;
  container.appendChild(footer);
}

function buildSparklineSVG(values: number[], isUp: boolean): string {
  if (values.length < 2) return '';

  const width = 200;
  const height = 36;
  const padding = 2;

  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const points = values.map((v, i) => {
    const x = padding + (i / (values.length - 1)) * (width - padding * 2);
    const y = padding + (1 - (v - min) / range) * (height - padding * 2);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  const color = isUp ? '#4f9b6d' : '#e05b5b';
  const fillColor = isUp ? 'rgba(79,155,109,0.12)' : 'rgba(224,91,91,0.12)';

  // Area fill
  const firstX = padding.toFixed(1);
  const lastX = (padding + (width - padding * 2)).toFixed(1);
  const bottomY = (height - padding).toFixed(1);
  const areaPath = `M${firstX},${bottomY} L${points.join(' L')} L${lastX},${bottomY} Z`;

  return `<svg viewBox="0 0 ${width} ${height}" class="sparkline-svg">
    <path d="${areaPath}" fill="${fillColor}" />
    <polyline points="${points.join(' ')}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" />
  </svg>`;
}

function wireMapLayerControl(): void {
  const setOpen = (isOpen: boolean): void => {
    mapLayerPanelElement.hidden = !isOpen;
    mapLayerToggleButton.setAttribute('aria-expanded', String(isOpen));
    mapLayerToggleButton.setAttribute('aria-label', isOpen ? '收起图层开关' : '打开图层开关');
  };

  setOpen(false);

  mapLayerToggleButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const next = mapLayerPanelElement.hidden;
    setOpen(next);
  });

  mapLayerPanelElement.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  map.getCanvasContainer().addEventListener('click', () => {
    setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
}