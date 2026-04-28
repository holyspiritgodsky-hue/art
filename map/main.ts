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

interface ClipPack {
  scenarioId: string;
  scenarioTitle: string;
  title: string;
  newsA: string;
  newsB: string;
  chainA: string;
  chainB: string;
  chainC: string;
  watchList: string[];
  evidence: string[];
  generatedAt: string;
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

interface ConflictPopupProfile {
  title: string;
  startLine: string;
  sideA: string;
  sideB: string;
  troopsA: string;
  troopsB: string;
  airA: string;
  airB: string;
  armorA: string;
  armorB: string;
  navalA: string;
  navalB: string;
}

interface ConflictGamePreset {
  sideA: string;
  sideB: string;
  flagA: string;
  flagB: string;
  troopsA: number;
  troopsB: number;
  tanksA: number;
  tanksB: number;
  aircraftA: number;
  aircraftB: number;
  shipsA: number;
  shipsB: number;
  moraleA: number;
  moraleB: number;
}

interface ConflictGameSideState {
  side: string;
  flag: string;
  troops: number;
  tanks: number;
  aircraft: number;
  ships: number;
  morale: number;
}

interface ConflictGameState {
  round: number;
  initialPowerA: number;
  initialPowerB: number;
  sideA: ConflictGameSideState;
  sideB: ConflictGameSideState;
}

type BasemapLabelLanguage = 'default' | 'zh';

const BILI_PLAYER_SRC = 'https://player.bilibili.com/player.html?bvid=BV1wLd1BKE36&autoplay=0&danmaku=0';

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
          <button class="forecast-button" id="forecast-button" type="button">预测未来</button>
          <div class="clip-tools">
            <button class="clip-button" id="clip-pack-button" type="button">热点影响推演</button>
          </div>
          <div class="clip-output" id="clip-output">
            <p class="briefing-hint">点“热点影响推演”会展开新闻事实与 A -&gt; B市场波动 -&gt; C行业受影响 的逻辑链。</p>
          </div>
        </section>

        <section class="panel panel--video">
          <h2>相关视频</h2>
          <div class="video-wrap">
            <div class="video-placeholder" id="video-placeholder">
              <p class="video-copy">默认不自动加载第三方播放器，点击后再播放。</p>
              <button class="video-load-button" id="video-load-button" type="button">加载 B 站视频</button>
            </div>
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
  { id: 'conflicts', title: '冲突区', description: '七个静态冲突多边形', layerIds: ['conflicts-fill', 'conflicts-outline'], checked: true },
  { id: 'pipelines', title: '管道', description: '八条主要能源走廊', layerIds: ['pipelines-line'], checked: true },
  { id: 'waterways', title: '战略水道', description: '六个全球咽喉点', layerIds: ['waterways-circle', 'waterways-label'], checked: true },
  { id: 'news', title: '新闻标记', description: '俄乌·伊朗·财联社要闻', layerIds: ['news-circle', 'news-pulse'], checked: true },
  { id: 'gold', title: '黄金储备', description: 'TOP 15 央行黄金储备', layerIds: ['gold-circle', 'gold-label'], checked: true },
  { id: 'oil', title: '石油储量', description: 'TOP 5 国家石油探明储量', layerIds: ['oil-circle', 'oil-label'], checked: false },
  { id: 'mines', title: '黄金矿山', description: '全球12大产金矿山', layerIds: ['gold-mine-circle', 'gold-mine-label'], checked: false },
];

const CONFLICT_POPUP_PROFILES: Record<string, ConflictPopupProfile> = {
  taiwan_strait: {
    title: '台海紧张局势',
    startLine: '始于 2026 年 3 月中旬日本对台湾海峡宣誓主权，随后中美日三方对抗明显升温。',
    sideA: '中国大陆',
    sideB: '日本、美国',
    troopsA: '约 200 万现役',
    troopsB: '日美联合区域兵力',
    airA: '战机约 1900+',
    airB: '日美空中力量联合部署',
    armorA: '坦克约 5000+',
    armorB: '两栖与机动部队为主',
    navalA: '主战舰艇约 370+',
    navalB: '第七舰队与日海上力量',
  },
  ukraine: {
    title: '俄乌战争',
    startLine: '始于 2022 年 2 月 24 日俄罗斯对乌克兰发起军事行动。',
    sideA: '俄罗斯',
    sideB: '乌克兰（含北约援助）',
    troopsA: '约 110 万现役',
    troopsB: '约 90 万总动员体系',
    airA: '战机约 1100+',
    airB: '战机约 300+',
    armorA: '坦克约 5500+',
    armorB: '坦克约 2000+',
    navalA: '黑海舰队为主',
    navalB: '近岸与无人艇体系',
  },
  gaza: {
    title: '加沙冲突',
    startLine: '本轮高强度阶段始于 2023 年 10 月 7 日后冲突升级。',
    sideA: '以色列',
    sideB: '哈马斯',
    troopsA: '现役约 17 万',
    troopsB: '武装约 2-3 万',
    airA: 'F-35/F-16 体系',
    airB: '无正规空军',
    armorA: '坦克约 1300+',
    armorB: '反装甲火力为主',
    navalA: '近海封锁能力',
    navalB: '无正规海军',
  },
  south_lebanon: {
    title: '以黎边境冲突',
    startLine: '本轮升级始于 2023 年 10 月后以黎边境交火持续扩大。',
    sideA: '以色列',
    sideB: '真主党',
    troopsA: '可快速动员 40 万+',
    troopsB: '武装约 4-5 万',
    airA: '先进空军持续值班',
    airB: '无正规空军',
    armorA: '重装甲优势明显',
    armorB: '反坦克导弹密集',
    navalA: '地中海近岸优势',
    navalB: '海上力量有限',
  },
  hormuz_crisis: {
    title: '霍尔木兹海峡危机',
    startLine: '长期张力可追溯至 2019 年后多次油轮与护航对峙事件。',
    sideA: '伊朗',
    sideB: '美军及盟友海上力量',
    troopsA: '现役约 60 万',
    troopsB: '区域轮换兵力',
    airA: '战机约 300+',
    airB: '舰载与岸基联合',
    armorA: '坦克约 1600+',
    armorB: '远征装甲有限',
    navalA: '快艇/导弹艇集群',
    navalB: '航母战斗群体系',
  },
  red_sea: {
    title: '红海航运危机',
    startLine: '本轮危机始于 2023 年末后商船遇袭与护航行动升级。',
    sideA: '胡塞武装',
    sideB: '美英及多国护航力量',
    troopsA: '地面武装数万人',
    troopsB: '多国海空联合部署',
    airA: '导弹/无人机打击',
    airB: '舰载机与预警机',
    armorA: '轻装与机动火力',
    armorB: '远征装甲支援',
    navalA: '无正规远洋海军',
    navalB: '驱逐舰/护卫舰编队',
  },
  pak_afghan: {
    title: '巴阿边境安全冲突',
    startLine: '长期冲突始于阿富汗战争外溢，本轮升温集中在近两年边境袭击。',
    sideA: '巴基斯坦',
    sideB: 'TTP 等跨境武装',
    troopsA: '现役约 65 万',
    troopsB: '武装约 1-2 万',
    airA: '战机约 400+',
    airB: '无正规空军',
    armorA: '坦克约 2500+',
    armorB: '轻武器/IED 为主',
    navalA: '海军与本冲突关联低',
    navalB: '无',
  },
};

const CONFLICT_GAME_PRESETS: Record<string, ConflictGamePreset> = {
  taiwan_strait: {
    sideA: '中国',
    sideB: '日本/美国',
    flagA: '🇨🇳',
    flagB: '🇯🇵🇺🇸',
    troopsA: 6,
    troopsB: 4,
    tanksA: 26,
    tanksB: 18,
    aircraftA: 34,
    aircraftB: 42,
    shipsA: 7,
    shipsB: 9,
    moraleA: 86,
    moraleB: 85,
  },
  ukraine: {
    sideA: '俄罗斯',
    sideB: '乌克兰',
    flagA: '🇷🇺',
    flagB: '🇺🇦',
    troopsA: 42,
    troopsB: 38,
    tanksA: 95,
    tanksB: 72,
    aircraftA: 68,
    aircraftB: 52,
    shipsA: 12,
    shipsB: 6,
    moraleA: 80,
    moraleB: 84,
  },
  gaza: {
    sideA: '以色列',
    sideB: '哈马斯',
    flagA: '🇮🇱',
    flagB: '🇵🇸',
    troopsA: 7,
    troopsB: 3,
    tanksA: 38,
    tanksB: 14,
    aircraftA: 48,
    aircraftB: 6,
    shipsA: 10,
    shipsB: 1,
    moraleA: 86,
    moraleB: 78,
  },
  south_lebanon: {
    sideA: '以色列',
    sideB: '真主党',
    flagA: '🇮🇱',
    flagB: '🇱🇧',
    troopsA: 5,
    troopsB: 2,
    tanksA: 34,
    tanksB: 12,
    aircraftA: 44,
    aircraftB: 5,
    shipsA: 9,
    shipsB: 1,
    moraleA: 84,
    moraleB: 79,
  },
  hormuz_crisis: {
    sideA: '伊朗',
    sideB: '美军及盟友',
    flagA: '🇮🇷',
    flagB: '🇺🇸🇬🇧',
    troopsA: 3,
    troopsB: 2,
    tanksA: 16,
    tanksB: 11,
    aircraftA: 18,
    aircraftB: 26,
    shipsA: 8,
    shipsB: 12,
    moraleA: 82,
    moraleB: 88,
  },
  red_sea: {
    sideA: '胡塞武装',
    sideB: '护航联盟',
    flagA: '🏴',
    flagB: '🇺🇸🇬🇧',
    troopsA: 2,
    troopsB: 2,
    tanksA: 9,
    tanksB: 12,
    aircraftA: 8,
    aircraftB: 22,
    shipsA: 3,
    shipsB: 10,
    moraleA: 83,
    moraleB: 85,
  },
  pak_afghan: {
    sideA: '巴基斯坦',
    sideB: '跨境武装',
    flagA: '🇵🇰',
    flagB: '🏴',
    troopsA: 8,
    troopsB: 2,
    tanksA: 42,
    tanksB: 10,
    aircraftA: 28,
    aircraftB: 3,
    shipsA: 2,
    shipsB: 0,
    moraleA: 80,
    moraleB: 74,
  },
};

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
wireVideoPanel();

let allNews: NewsBriefJSON[] = [];
let filteredNews: NewsBriefJSON[] = [];
let timelineDays = 7;
let latestClipPack: ClipPack | null = null;

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
  const forecastButton = document.querySelector<HTMLButtonElement>('#forecast-button');
  const clipPackButton = document.querySelector<HTMLButtonElement>('#clip-pack-button');
  const clipOutput = document.querySelector<HTMLElement>('#clip-output');
  const briefingPanel = document.querySelector<HTMLElement>('#briefing-panel');
  const briefingBody = document.querySelector<HTMLElement>('#briefing-body');
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

  if (forecastButton && briefingPanel) {
    forecastButton.addEventListener('click', async () => {
      if (window.matchMedia('(max-width: 768px)').matches && sidebar.classList.contains('sheet-collapsed')) {
        sidebar.classList.remove('sheet-collapsed');
        const icon = sheetToggle?.querySelector('.sheet-toggle-icon');
        if (icon) icon.textContent = '↓';
        sheetToggle?.setAttribute('aria-label', '收起面板');
        setTimeout(() => map.resize(), 320);
      }

      briefingPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      forecastButton.disabled = true;
      forecastButton.textContent = '更新中...';
      if (briefingBody) {
        briefingBody.innerHTML = '<p class="briefing-loading">正在更新研判...</p>';
      }
      try {
        const loaded = await loadAndRenderBriefing();
        if (!loaded && briefingBody) {
          renderLocalForecast(briefingBody);
        }
      } finally {
        forecastButton.disabled = false;
        forecastButton.textContent = '预测未来';
      }
    });
  }

  if (clipPackButton && clipOutput) {
    clipPackButton.addEventListener('click', () => {
      if (clipOutput.dataset.expanded === 'true') {
        clipOutput.innerHTML = '<p class="briefing-hint">点“热点影响推演”会展开新闻事实与 A -&gt; B市场波动 -&gt; C行业受影响 的逻辑链。</p>';
        clipOutput.dataset.expanded = 'false';
        clipPackButton.textContent = '热点影响推演';
        return;
      }

      latestClipPack = generateClipPack(filteredNews.length > 0 ? filteredNews : allNews);
      if (!latestClipPack) {
        clipOutput.innerHTML = '<p class="briefing-hint">暂无可用时事新闻，请先更新 news 数据。</p>';
        clipOutput.dataset.expanded = 'false';
        return;
      }

      clipOutput.innerHTML = renderClipPackHTML(latestClipPack);
      clipOutput.dataset.expanded = 'true';
      clipPackButton.textContent = '收起推演';
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
      conflictId: zone.id,
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
    const layerId = feature.layer.id;
    popup.setLngLat(event.lngLat).setHTML(buildPopupContent(layerId, properties)).addTo(map);

    if (layerId === 'conflicts-fill') {
      const conflictId = valueAsString(properties?.conflictId);
      if (conflictId) wireConflictGame(conflictId);
    }
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

  if (layerId === 'conflicts-fill') {
    const conflictId = valueAsString(properties?.conflictId);
    const profile = conflictId ? CONFLICT_POPUP_PROFILES[conflictId] : undefined;

    if (profile) {
      const game = conflictId ? buildConflictGameMarkup(conflictId) : '';
      return `
        <p class="popup-kicker">冲突区</p>
        <h3 class="popup-title">${escapeHtml(profile.title)}</h3>
        <p class="popup-copy">${escapeHtml(profile.startLine)}</p>
        ${game}
      `;
    }

    return `
      <p class="popup-kicker">冲突区</p>
      <h3 class="popup-title">${escapeHtml(label)}</h3>
      ${description ? `<p class="popup-copy">${escapeHtml(description)}</p>` : ''}
      ${meta ? `<p class="popup-meta">冲突双方：${escapeHtml(meta)}</p>` : ''}
      <p class="popup-meta">军力对比：暂无结构化数据</p>
    `;
  }

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

interface ClipScenarioTemplate {
  id: string;
  title: string;
  keywords: string[];
  impactHint: string;
  mapFocus: string;
}

const REINFORCEMENT_REFLECTIONS: string[] = [
  '这可是一万条人命。',
  '老百姓的日子会更难过。',
  '每一次增援，背后都是更多家庭的担忧。',
  '前线推进一格，民生往往要退后很多步。',
  '数字上升的同时，代价也在累积。',
  '战争没有真正的赢家，只有更长的伤痛。',
];

const CLIP_SCENARIOS: ClipScenarioTemplate[] = [
  {
    id: 'taiwan-strait',
    title: '台湾海峡冲突风险',
    keywords: ['台湾海峡', '台海', '台湾', '台北', '金门', '东海', '南海', '军演', '围岛'],
    impactHint: '先看航运保险、芯片供应链预期和区域风险溢价。',
    mapFocus: '镜头锁定台湾海峡与东海航线。',
  },
  {
    id: 'ukraine-energy',
    title: '俄乌战线与能源风险',
    keywords: ['俄乌', '乌克兰', '俄罗斯', '黑海', '制裁', '天然气', '原油', '北约'],
    impactHint: '先看油气价格、欧洲运费和避险资产流向。',
    mapFocus: '镜头聚焦黑海与欧洲能源通道。',
  },
  {
    id: 'middle-east-shipping',
    title: '中东冲突与航运链条',
    keywords: ['红海', '霍尔木兹', '伊朗', '以色列', '加沙', '也门', '胡塞', '苏伊士'],
    impactHint: '先看油轮绕行、运价弹性和输入型通胀压力。',
    mapFocus: '镜头聚焦霍尔木兹-红海-苏伊士走廊。',
  },
];

function generateClipPack(newsItems: NewsBriefJSON[]): ClipPack | null {
  if (newsItems.length === 0) return null;

  const sorted = [...newsItems].sort((a, b) => {
    const aTs = `${a.date} ${a.time ?? '00:00'}`;
    const bTs = `${b.date} ${b.time ?? '00:00'}`;
    return bTs.localeCompare(aTs);
  });

  const scenario = pickBestScenario(sorted);
  const related = pickRelatedNews(sorted, scenario.keywords, 3);
  const focusItems = related.length >= 2 ? related.slice(0, 2) : sorted.slice(0, 2);
  const lead = focusItems[0] ?? sorted[0];
  const secondary = focusItems[1] ?? sorted[1] ?? sorted[0];

  const leadTitle = cleanNewsTitle(lead.title);
  const secondaryTitle = cleanNewsTitle(secondary.title);
  const chainA = `${lead.date}：${shorten(leadTitle, 34)}`;
  const chainB = marketImpactByScenario(scenario.id);
  const chainC = sectorImpactByScenario(scenario.id);
  const watchList = [
    `24小时观察：${secondaryTitle}`,
    `重点变量：${scenario.impactHint}`,
    `地图关注：${scenario.mapFocus}`,
  ];

  const evidence = focusItems.map((item) => `${item.date}${item.time ? ` ${item.time}` : ''} | ${cleanNewsTitle(item.title)}`);

  return {
    scenarioId: scenario.id,
    scenarioTitle: scenario.title,
    title: `${scenario.title}：热点逻辑推演`,
    newsA: `${lead.date}：${leadTitle}`,
    newsB: `${secondary.date}：${secondaryTitle}`,
    chainA,
    chainB,
    chainC,
    watchList,
    evidence,
    generatedAt: new Date().toISOString(),
  };
}

function marketImpactByScenario(scenarioId: string): string {
  const mapping: Record<string, string> = {
    'taiwan-strait': '航运保险上行，芯片链风险溢价扩大，亚太资产波动率抬升。',
    'ukraine-energy': '油气与粮食价格预期上修，欧洲工业成本压力增大，避险资产走强。',
    'middle-east-shipping': '运价敏感上行，油价波动放大，输入型通胀预期升温。',
  };
  return mapping[scenarioId] ?? '风险偏好下降，跨境物流与大宗商品波动率提升。';
}

function sectorImpactByScenario(scenarioId: string): string {
  const mapping: Record<string, string> = {
    'taiwan-strait': '半导体、消费电子、海运物流和保险板块最先受冲击。',
    'ukraine-energy': '能源密集制造、化工、航运和粮食加工链条承压。',
    'middle-east-shipping': '航运、炼化、航空与外贸链条先受成本冲击。',
  };
  return mapping[scenarioId] ?? '外贸、航运、能源与制造链条会先感受到成本与交付压力。';
}

function pickBestScenario(newsItems: NewsBriefJSON[]): ClipScenarioTemplate {
  const corpus = newsItems.slice(0, 15).map((item) => `${item.title} ${item.summary ?? ''}`).join('\n').toLowerCase();
  let winner = CLIP_SCENARIOS[0];
  let bestScore = -1;

  CLIP_SCENARIOS.forEach((scenario) => {
    const score = scenario.keywords.reduce((acc, keyword) => acc + (corpus.includes(keyword.toLowerCase()) ? 1 : 0), 0);
    if (score > bestScore) {
      bestScore = score;
      winner = scenario;
    }
  });

  return winner;
}

function pickRelatedNews(newsItems: NewsBriefJSON[], keywords: string[], limit: number): NewsBriefJSON[] {
  const lowered = keywords.map((k) => k.toLowerCase());
  const ranked = newsItems
    .map((item) => {
      const text = `${item.title} ${item.summary ?? ''}`.toLowerCase();
      const hitCount = lowered.reduce((acc, keyword) => acc + (text.includes(keyword) ? 1 : 0), 0);
      return { item, hitCount };
    })
    .filter((row) => row.hitCount > 0)
    .sort((a, b) => b.hitCount - a.hitCount)
    .map((row) => row.item);

  return ranked.slice(0, limit);
}

function renderClipPackHTML(pack: ClipPack): string {
  const watchHtml = pack.watchList
    .map((line) => `<li>${escapeHtml(line)}</li>`)
    .join('');
  const evidenceHtml = pack.evidence
    .map((line) => `<li>${escapeHtml(line)}</li>`)
    .join('');

  return `
    <div class="clip-card">
      <p class="clip-kicker">${escapeHtml(pack.title)}</p>
      <h3 class="clip-section-title">关键新闻</h3>
      <p class="clip-copy"><strong>A：</strong>${escapeHtml(pack.newsA)}</p>
      <p class="clip-copy"><strong>补充：</strong>${escapeHtml(pack.newsB)}</p>
      <h3 class="clip-section-title">影响逻辑链</h3>
      <p class="clip-copy"><strong>A发生</strong> -> ${escapeHtml(pack.chainA)}</p>
      <p class="clip-copy"><strong>B市场波动</strong> -> ${escapeHtml(pack.chainB)}</p>
      <p class="clip-copy"><strong>C行业受影响</strong> -> ${escapeHtml(pack.chainC)}</p>
      <h3 class="clip-section-title">未来关注点</h3>
      <ul class="clip-list">${watchHtml}</ul>
      <h3 class="clip-section-title">引用新闻</h3>
      <ul class="clip-list">${evidenceHtml}</ul>
    </div>
  `;
}

function shorten(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

async function loadAndRenderBriefing(): Promise<boolean> {
  const body = document.querySelector<HTMLElement>('#briefing-body');
  if (!body) return false;

  try {
    const res = await fetch('./briefing/latest.json');
    if (!res.ok) {
      body.innerHTML = '<p class="briefing-hint">研判尚未生成，请稍后再看。</p>';
      return false;
    }

    const data = await res.json() as { generatedAt: string; text: string };
    const text = data.text?.trim() ?? '';
    if (!text) {
      body.innerHTML = '<p class="briefing-hint">研判内容为空。</p>';
      return false;
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
    return true;
  } catch (e) {
    console.error('[briefing]', e);
    body.innerHTML = '<p class="briefing-hint">无法加载研判数据。</p>';
    return false;
  }
}

function renderLocalForecast(body: HTMLElement): void {
  const sourceNews = (filteredNews.length > 0 ? filteredNews : allNews).slice(0, 3);
  const stamp = new Date().toLocaleString('zh-CN', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  if (sourceNews.length === 0) {
    body.innerHTML = `
      <p class="briefing-time">更新于 ${stamp}（本地预测）</p>
      <p class="briefing-para">短期地缘事件样本不足，建议优先观察能源与航运波动。</p>
      <p class="briefing-para briefing-para--long">做多：黄金/避险资产（轻仓）</p>
      <p class="briefing-para briefing-para--short">做空：高杠杆顺周期（等待确认）</p>
    `;
    return;
  }

  const hotA = cleanNewsTitle(sourceNews[0].title);
  const hotB = cleanNewsTitle(sourceNews[1]?.title ?? sourceNews[0].title);
  const hotC = cleanNewsTitle(sourceNews[2]?.title ?? sourceNews[0].title);

  body.innerHTML = `
    <p class="briefing-time">更新于 ${stamp}（本地预测）</p>
    <p class="briefing-para">关键事件：${escapeHtml(shorten(hotA, 42))}；${escapeHtml(shorten(hotB, 36))}。</p>
    <p class="briefing-para">传导路径：地缘风险 -> 运价/能源波动 -> 输入型通胀预期抬升。</p>
    <p class="briefing-para">补充观察：${escapeHtml(shorten(hotC, 40))}，若持续发酵，波动率可能继续放大。</p>
    <p class="briefing-para briefing-para--long">做多：黄金与高股息防御（分批，不追高）</p>
    <p class="briefing-para briefing-para--short">做空：高弹性题材与弱现金流标的（仅在放量转弱时）</p>
  `;
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

function wireVideoPanel(): void {
  const wrap = document.querySelector<HTMLDivElement>('.video-wrap');
  const trigger = document.querySelector<HTMLButtonElement>('#video-load-button');
  if (!wrap || !trigger) return;

  trigger.addEventListener('click', () => {
    const iframe = document.createElement('iframe');
    iframe.src = BILI_PLAYER_SRC;
    iframe.loading = 'lazy';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('scrolling', 'no');

    wrap.innerHTML = '';
    wrap.appendChild(iframe);
  });
}

function buildConflictGameMarkup(conflictId: string): string {
  const preset = CONFLICT_GAME_PRESETS[conflictId];
  if (!preset) return '';

  return `
    <div class="conflict-game" data-conflict-game="${escapeHtml(conflictId)}">
      <div class="conflict-game-head">
        <strong>冲突小游戏</strong>
        <span>回合制（最多 5 回合）</span>
      </div>
      <div class="conflict-game-field">
        <div class="conflict-side-card" data-side="A"></div>
        <div class="conflict-game-center">
          <button class="conflict-battle-btn" type="button">战斗</button>
          <p class="conflict-round">第 0 回合</p>
        </div>
        <div class="conflict-side-card" data-side="B"></div>
      </div>
      <p class="conflict-game-log">点击“战斗”开始结算。</p>
      <p class="conflict-reflection" aria-live="polite"></p>
      <button class="conflict-reset-btn" type="button">重新开始</button>
    </div>
  `;
}

function wireConflictGame(conflictId: string): void {
  const preset = CONFLICT_GAME_PRESETS[conflictId];
  if (!preset) return;

  const root = popup.getElement()?.querySelector<HTMLElement>(`.conflict-game[data-conflict-game="${conflictId}"]`);
  if (!root) return;

  const sideAEl = root.querySelector<HTMLElement>('.conflict-side-card[data-side="A"]');
  const sideBEl = root.querySelector<HTMLElement>('.conflict-side-card[data-side="B"]');
  const battleBtn = root.querySelector<HTMLButtonElement>('.conflict-battle-btn');
  const resetBtn = root.querySelector<HTMLButtonElement>('.conflict-reset-btn');
  const roundEl = root.querySelector<HTMLElement>('.conflict-round');
  const logEl = root.querySelector<HTMLElement>('.conflict-game-log');
  const reflectionEl = root.querySelector<HTMLElement>('.conflict-reflection');

  if (!sideAEl || !sideBEl || !battleBtn || !resetBtn || !roundEl || !logEl || !reflectionEl) return;

  let state = createConflictGameState(preset);
  let reflectionTimer: number | undefined;

  const showReflection = (message: string): void => {
    if (reflectionTimer) {
      window.clearTimeout(reflectionTimer);
      reflectionTimer = undefined;
    }

    reflectionEl.textContent = message;
    reflectionEl.classList.remove('is-visible');
    void reflectionEl.offsetWidth;
    reflectionEl.classList.add('is-visible');

    reflectionTimer = window.setTimeout(() => {
      reflectionEl.classList.remove('is-visible');
      reflectionTimer = undefined;
    }, 2400);
  };

  const render = (message?: string): void => {
    sideAEl.innerHTML = renderConflictSideState('A', state.sideA, state.initialPowerA);
    sideBEl.innerHTML = renderConflictSideState('B', state.sideB, state.initialPowerB);
    roundEl.textContent = `第 ${state.round} 回合`;
    if (message) logEl.textContent = message;
  };

  root.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('.conflict-reinforce-btn');
    if (!button) return;

    const sideKey = button.dataset.side;
    if (sideKey !== 'A' && sideKey !== 'B') return;

    const target = sideKey === 'A' ? state.sideA : state.sideB;
    const baseline = sideKey === 'A'
      ? { troops: preset.troopsA, tanks: preset.tanksA, aircraft: preset.aircraftA, ships: preset.shipsA }
      : { troops: preset.troopsB, tanks: preset.tanksB, aircraft: preset.aircraftB, ships: preset.shipsB };

    applyConflictReinforcement(target, baseline);
    const reflection = pickReinforcementReflection();
    render();
    showReflection(reflection);
  });

  const finish = (winner: 'A' | 'B' | 'draw'): void => {
    battleBtn.disabled = true;
    const text = winner === 'draw'
      ? '战斗结束：双方僵持。'
      : winner === 'A'
        ? `战斗结束：${state.sideA.side}占优。`
        : `战斗结束：${state.sideB.side}占优。`;
    render(text);
  };

  battleBtn.addEventListener('click', () => {
    if (battleBtn.disabled) return;

    const step = runConflictRound(state);
    render(step.log);

    if (step.winner) {
      finish(step.winner);
      return;
    }

    if (state.round >= 5) {
      const powerA = calculateConflictPower(state.sideA);
      const powerB = calculateConflictPower(state.sideB);
      if (Math.abs(powerA - powerB) < 5) finish('draw');
      else finish(powerA > powerB ? 'A' : 'B');
    }
  });

  resetBtn.addEventListener('click', () => {
    state = createConflictGameState(preset);
    battleBtn.disabled = false;
    render('已重置，点击“战斗”重新开始。');
  });

  render();
}

function createConflictGameState(preset: ConflictGamePreset): ConflictGameState {
  const sideA: ConflictGameSideState = {
    side: preset.sideA,
    flag: preset.flagA,
    troops: preset.troopsA,
    tanks: preset.tanksA,
    aircraft: preset.aircraftA,
    ships: preset.shipsA,
    morale: preset.moraleA,
  };
  const sideB: ConflictGameSideState = {
    side: preset.sideB,
    flag: preset.flagB,
    troops: preset.troopsB,
    tanks: preset.tanksB,
    aircraft: preset.aircraftB,
    ships: preset.shipsB,
    morale: preset.moraleB,
  };

  return {
    round: 0,
    initialPowerA: calculateConflictPower(sideA),
    initialPowerB: calculateConflictPower(sideB),
    sideA,
    sideB,
  };
}

function renderConflictSideState(sideKey: 'A' | 'B', side: ConflictGameSideState, initialPower: number): string {
  const hp = Math.max(0, (calculateConflictPower(side) / (initialPower || 1)) * 100);
  return `
    <p class="conflict-side-name">${escapeHtml(side.flag)} ${escapeHtml(side.side)}</p>
    <div class="conflict-unit-row"><span>🛡️</span><span>兵力 ${formatTroopsInWan(side.troops)}</span></div>
    <div class="conflict-unit-row"><span>🛞</span><span>坦克 ${Math.max(0, Math.round(side.tanks))}</span></div>
    <div class="conflict-unit-row"><span>✈️</span><span>飞机 ${Math.max(0, Math.round(side.aircraft))}</span></div>
    <div class="conflict-unit-row"><span>🚢</span><span>舰船 ${Math.max(0, Math.round(side.ships))}</span></div>
    <div class="conflict-unit-row"><span>🔥</span><span>士气 ${Math.max(0, Math.round(side.morale))}</span></div>
    <div class="conflict-hp-track"><i style="width:${Math.min(100, hp).toFixed(1)}%"></i></div>
    <button class="conflict-reinforce-btn" type="button" data-side="${sideKey}">增加兵力（+1 万）</button>
  `;
}

function formatTroopsInWan(troopsInThousands: number): string {
  const wan = Math.max(0, troopsInThousands) / 10;
  return `${wan.toFixed(1)} 万`;
}

function applyConflictReinforcement(
  side: ConflictGameSideState,
  baseline: { troops: number; tanks: number; aircraft: number; ships: number },
): void {
  const maxTroops = Math.max(10, Math.round(baseline.troops * 5));
  const maxTanks = Math.max(2, Math.round(baseline.tanks * 1.5));
  const maxAircraft = Math.max(2, Math.round(baseline.aircraft * 1.5));
  const maxShips = Math.max(1, Math.round(baseline.ships * 1.5));

  side.troops = Math.min(maxTroops, side.troops + 10);
  side.tanks = Math.min(maxTanks, side.tanks + 1);
  side.aircraft = Math.min(maxAircraft, side.aircraft + 1);
  side.ships = Math.min(maxShips, side.ships + 1);
  side.morale = Math.min(100, side.morale + 2);
}

function pickReinforcementReflection(): string {
  const idx = Math.floor(Math.random() * REINFORCEMENT_REFLECTIONS.length);
  return REINFORCEMENT_REFLECTIONS[idx] ?? '代价终将落在普通人身上。';
}

function runConflictRound(state: ConflictGameState): { log: string; winner?: 'A' | 'B' | 'draw' } {
  state.round += 1;
  const phases: Array<'tanks' | 'aircraft' | 'ships'> = ['tanks', 'aircraft', 'ships'];
  const phase = phases[Math.floor(Math.random() * phases.length)];
  const phaseName = phase === 'tanks' ? '装甲' : phase === 'aircraft' ? '空中' : '海上';

  const atkA = state.sideA[phase] * (1 + state.sideA.morale / 300) * (0.84 + Math.random() * 0.32);
  const atkB = state.sideB[phase] * (1 + state.sideB.morale / 300) * (0.84 + Math.random() * 0.32);

  const lossA = Math.max(0, Math.round((atkB - atkA) * 0.06));
  const lossB = Math.max(0, Math.round((atkA - atkB) * 0.06));

  if (lossA > 0) {
    state.sideA[phase] = Math.max(0, state.sideA[phase] - lossA);
    state.sideA.morale = Math.max(20, state.sideA.morale - Math.round(lossA * 0.2));
  }
  if (lossB > 0) {
    state.sideB[phase] = Math.max(0, state.sideB[phase] - lossB);
    state.sideB.morale = Math.max(20, state.sideB.morale - Math.round(lossB * 0.2));
  }

  const powerA = calculateConflictPower(state.sideA);
  const powerB = calculateConflictPower(state.sideB);
  const thresholdA = state.initialPowerA * 0.35;
  const thresholdB = state.initialPowerB * 0.35;

  let winner: 'A' | 'B' | 'draw' | undefined;
  if (powerA <= thresholdA && powerB <= thresholdB) winner = 'draw';
  else if (powerA <= thresholdA) winner = 'B';
  else if (powerB <= thresholdB) winner = 'A';

  const log = lossA === 0 && lossB === 0
    ? `第 ${state.round} 回合（${phaseName}）：双方试探，没有明显战损。`
    : `第 ${state.round} 回合（${phaseName}）：${state.sideA.side}损失 ${lossA}，${state.sideB.side}损失 ${lossB}。`;

  return { log, winner };
}

function calculateConflictPower(side: ConflictGameSideState): number {
  return side.troops * 1.6 + side.tanks * 0.9 + side.aircraft * 1.15 + side.ships * 1.1 + side.morale * 0.6;
}