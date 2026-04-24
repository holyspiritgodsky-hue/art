export type BaseType = 'us-nato' | 'russia' | 'china' | 'uk' | 'france' | 'india' | 'japan' | 'other';
export type PipelineType = 'oil' | 'gas' | 'products';
export type ConflictIntensity = 'high' | 'medium' | 'low';

export interface Hotspot {
  id: string;
  name: string;
  lat: number;
  lon: number;
  subtext?: string;
  location?: string;
  description?: string;
}

export interface StrategicWaterway {
  id: string;
  name: string;
  lat: number;
  lon: number;
  description?: string;
}

export interface ConflictZone {
  id: string;
  name: string;
  coords: [number, number][];
  intensity: ConflictIntensity;
  location?: string;
  description?: string;
  parties?: string[];
}

export interface MilitaryBase {
  id: string;
  name: string;
  lat: number;
  lon: number;
  type: BaseType;
  country?: string;
  arm?: string;
  description?: string;
}

export interface RouteLine {
  id: string;
  name: string;
  points: [number, number][];
  description?: string;
  owner?: string;
  year?: number;
}

export interface Pipeline {
  id: string;
  name: string;
  type: PipelineType;
  points: [number, number][];
  operator?: string;
  capacity?: string;
}

export const HOTSPOTS: Hotspot[] = [
  { id: 'kyiv', name: 'Kyiv', lat: 50.45, lon: 30.5, subtext: 'Conflict Zone', location: 'Ukraine', description: 'Largest active war theater in Europe with persistent military escalation.' },
  { id: 'tehran', name: 'Tehran', lat: 35.7, lon: 51.4, subtext: 'IRGC Activity', location: 'Iran', description: 'Nuclear threshold politics, proxy coordination and Gulf security risk.' },
  { id: 'taipei', name: 'Taipei', lat: 25.03, lon: 121.5, subtext: 'Strait Watch', location: 'Taiwan', description: 'Semiconductor choke point and the center of Taiwan Strait risk.' },
  { id: 'moscow', name: 'Moscow', lat: 55.75, lon: 37.6, subtext: 'Kremlin Activity', location: 'Russia', description: 'Political and military command node for the Russia-Ukraine war.' },
  { id: 'sanaa', name: 'Sana\'a', lat: 15.4, lon: 44.2, subtext: 'Yemen/Houthis', location: 'Yemen', description: 'Launch point for Red Sea shipping disruption and maritime risk.' },
  { id: 'sahel', name: 'Sahel', lat: 14, lon: -1, subtext: 'Insurgency/Coups', location: 'Mali, Burkina Faso, Niger', description: 'Chronic instability, juntas and insurgent pressure across West Africa.' },
  { id: 'brussels', name: 'Brussels', lat: 50.85, lon: 4.35, subtext: 'NATO HQ', location: 'Belgium', description: 'Alliance coordination hub for European posture and policy.' },
  { id: 'wall_street', name: 'Wall Street', lat: 40.7, lon: -74, subtext: 'Financial Hub', location: 'New York, USA', description: 'Market sentiment and systemic financial signal center.' },
];

export const STRATEGIC_WATERWAYS: StrategicWaterway[] = [
  { id: 'taiwan_strait', name: 'Taiwan Strait', lat: 24, lon: 119.5, description: 'Semiconductor and naval pressure point.' },
  { id: 'malacca', name: 'Malacca Strait', lat: 2.5, lon: 101.5, description: 'Asia\'s core maritime energy corridor.' },
  { id: 'hormuz', name: 'Strait of Hormuz', lat: 26.5, lon: 56.5, description: 'Global oil chokepoint.' },
  { id: 'suez', name: 'Suez Canal', lat: 30.5, lon: 32.3, description: 'Europe-Asia shipping lane.' },
  { id: 'bab_el_mandeb', name: 'Bab el-Mandeb', lat: 12.5, lon: 43.3, description: 'Red Sea entrance under persistent attack risk.' },
  { id: 'panama', name: 'Panama Canal', lat: 9.1, lon: -79.7, description: 'Americas trade shortcut.' },
];

export const CONFLICT_ZONES: ConflictZone[] = [
  {
    id: 'taiwan_strait',
    name: 'Taiwan Strait Crisis',
    intensity: 'high',
    location: 'Taiwan Strait',
    parties: ['China', 'Taiwan', 'US regional presence'],
    description: 'Escalating cross-strait military activity with heightened maritime and airspace confrontation risk.',
    coords: [[118.3, 26.6], [123.3, 26.8], [123.1, 22.0], [118.5, 21.8], [118.3, 26.6]],
  },
  {
    id: 'ukraine',
    name: 'Ukraine War',
    intensity: 'high',
    location: 'Ukraine',
    parties: ['Russia', 'Ukraine', 'NATO support'],
    description: 'Full-scale war with trench warfare, drones, artillery and infrastructure strikes.',
    coords: [[22.137, 48.09], [24.09, 51.89], [32.76, 52.32], [40.18, 49.6], [35.19, 46.1], [29.6, 45.38], [22.137, 48.09]],
  },
  {
    id: 'gaza',
    name: 'Gaza Conflict',
    intensity: 'high',
    location: 'Gaza Strip',
    parties: ['Israel', 'Hamas'],
    description: 'Urban war, humanitarian crisis and regional escalation pressure.',
    coords: [[34, 32], [35, 32], [35, 31], [34, 31], [34, 32]],
  },
  {
    id: 'south_lebanon',
    name: 'Israel-Lebanon Border',
    intensity: 'high',
    location: 'Southern Lebanon / Northern Israel',
    parties: ['Israel', 'Hezbollah'],
    description: 'Cross-border fires with high escalation potential.',
    coords: [[35.1, 33.0], [35.1, 33.4], [35.8, 33.4], [35.8, 33.0], [35.1, 33.0]],
  },
  {
    id: 'hormuz_crisis',
    name: 'Hormuz Crisis',
    intensity: 'high',
    location: 'Persian Gulf Approaches',
    parties: ['Iran', 'US Navy', 'Coalition'],
    description: 'Oil transit, naval maneuvers and tanker vulnerability.',
    coords: [[54.5, 25.5], [58.5, 25], [58.5, 26.8], [54.5, 27], [54.5, 25.5]],
  },
  {
    id: 'red_sea',
    name: 'Red Sea Crisis',
    intensity: 'high',
    location: 'Red Sea & Gulf of Aden',
    parties: ['Houthis', 'US/UK', 'Commercial shipping'],
    description: 'Maritime campaign against shipping and cable corridors.',
    coords: [[42.6, 16.5], [43.3, 12.6], [48, 14], [52.2, 15.6], [46, 17.2], [42.6, 16.5]],
  },
  {
    id: 'pak_afghan',
    name: 'Pakistan-Afghanistan Border',
    intensity: 'medium',
    location: 'KP / Balochistan border belt',
    parties: ['Pakistan', 'TTP', 'Taliban'],
    description: 'Cross-border militancy and intermittent state strikes.',
    coords: [[72.5, 35.7], [69.4, 31.69], [65.95, 29.33], [71.02, 36.55], [72.5, 35.7]],
  },
];

export const MILITARY_BASES: MilitaryBase[] = [
  { id: 'norfolk', name: 'Norfolk Naval', lat: 36.95, lon: -76.31, type: 'us-nato', country: 'United States', arm: 'Navy', description: 'Atlantic Fleet hub and carrier support.' },
  { id: 'ramstein', name: 'Ramstein', lat: 49.443, lon: 7.77161, type: 'us-nato', country: 'Germany', arm: 'Air Force', description: 'US air mobility and European logistics backbone.' },
  { id: 'camp_lemonnier', name: 'Camp Lemonnier', lat: 11.5436, lon: 43.1486, type: 'us-nato', country: 'Djibouti', arm: 'Combined', description: 'Horn of Africa and Red Sea operations hub.' },
  { id: 'al_udeid', name: 'Al Udeid', lat: 25.2793, lon: 51.5224, type: 'us-nato', country: 'Qatar', arm: 'Air Force', description: 'CENTCOM air hub.' },
  { id: 'khmeimim', name: 'Khmeimim Air Base', lat: 35.411, lon: 35.945, type: 'russia', country: 'Syria', arm: 'Air Force', description: 'Russian expeditionary air base in Syria.' },
  { id: 'tartus', name: 'Tartus Naval Facility', lat: 34.915, lon: 35.874, type: 'russia', country: 'Syria', arm: 'Navy', description: 'Russian Mediterranean naval foothold.' },
  { id: 'djibouti_pla', name: 'Chinese PLA Support Base', lat: 11.5915, lon: 43.0602, type: 'china', country: 'Djibouti', arm: 'Navy', description: 'China\'s first acknowledged overseas base.' },
  { id: 'ream', name: 'Ream Naval Base', lat: 10.5034, lon: 103.609, type: 'china', country: 'Cambodia', arm: 'Navy access', description: 'Sensitive PLA-linked maritime access point.' },
  { id: 'hms_jufair', name: 'HMS Jufair', lat: 26.205, lon: 50.615, type: 'uk', country: 'Bahrain', arm: 'Royal Navy', description: 'UK naval support in the Gulf.' },
  { id: 'abu_dhabi_french', name: 'Abu Dhabi Base', lat: 24.52151, lon: 54.39611, type: 'france', country: 'United Arab Emirates', arm: 'Navy / Air Force', description: 'French regional posture base.' },
  { id: 'farkhor', name: 'Farkhor Air Base', lat: 37.47011, lon: 69.38089, type: 'india', country: 'Tajikistan', arm: 'Air Force', description: 'Indian regional reach and logistics node.' },
  { id: 'jsdf_djibouti', name: 'JSDF Djibouti', lat: 11.55311, lon: 43.14423, type: 'japan', country: 'Djibouti', arm: 'Air / Maritime', description: 'Japan\'s anti-piracy and sea lane presence.' },
];

export const UNDERSEA_CABLES: RouteLine[] = [
  { id: 'marea', name: 'MAREA', year: 2018, owner: 'Meta / Microsoft / Telxius', description: 'Major transatlantic hyperscale cable.', points: [[-76.1, 36.8], [-50.4, 37.9], [-9.9, 46.6], [-2.9, 43.3]] },
  { id: 'grace_hopper', name: 'Grace Hopper', year: 2022, owner: 'Google', description: 'Transatlantic cable linking US, UK and Spain.', points: [[-72.9, 40.8], [-23.4, 46], [-8.1, 49.7], [-2.9, 43.3]] },
  { id: 'dunant', name: 'Dunant', year: 2021, owner: 'Google', description: 'Atlantic cable from Virginia to France.', points: [[-76.1, 36.8], [-39.6, 39.7], [-16.2, 45.3], [-2, 46.7]] },
  { id: 'faster', name: 'FASTER', year: 2016, owner: 'Google consortium', description: 'Trans-Pacific cable between Japan, Taiwan and the US.', points: [[136.9, 34.3], [149.4, 37.6], [-129.6, 43.7], [121.5, 25.2]] },
  { id: 'southern_cross', name: 'Southern Cross', year: 2000, owner: 'Southern Cross', description: 'Core Pacific cable linking Oceania to the US.', points: [[174.8, -36.8], [178.9, -18], [-123, 45.5], [-158.1, 21.4]] },
  { id: '2africa', name: '2Africa', year: 2024, owner: 'Meta consortium', description: 'Large-scale Africa and Europe ring cable.', points: [[31.2, 30], [43.3, 11.8], [3.4, 6.4], [-17.45, 14.7], [13.4, 52.5]] },
];

export const PIPELINES: Pipeline[] = [
  { id: 'druzhba', name: 'Druzhba Pipeline', type: 'oil', operator: 'Transneft', capacity: '1.2 million bpd', points: [[52.3, 54.7], [37.6, 52.3], [24.0, 52.2], [14.4, 52.5]] },
  { id: 'btc', name: 'Baku-Tbilisi-Ceyhan', type: 'oil', operator: 'BP', capacity: '1.2 million bpd', points: [[49.9, 40.4], [44.8, 41.7], [41.6, 41.6], [35.9, 37.0]] },
  { id: 'east_west', name: 'East-West Pipeline', type: 'oil', operator: 'Saudi Aramco', capacity: '5 million bpd', points: [[50.1, 26.3], [44, 25.5], [38.5, 22.5]] },
  { id: 'cpc', name: 'Caspian Pipeline Consortium', type: 'oil', operator: 'CPC', capacity: '1.4 million bpd', points: [[53, 46.9], [45.5, 45.5], [37.4, 45]] },
  { id: 'north_stream', name: 'Nord Stream', type: 'gas', operator: 'Gazprom', capacity: '55 bcm/y', points: [[29.1, 60.1], [22.5, 58.9], [14.1, 54.5], [8.5, 54.1]] },
  { id: 'power_of_siberia', name: 'Power of Siberia', type: 'gas', operator: 'Gazprom', capacity: '38 bcm/y', points: [[126.6, 62.0], [121.0, 53.5], [116.3, 39.8]] },
  { id: 'keystone', name: 'Keystone Pipeline', type: 'oil', operator: 'TC Energy', capacity: '590,000 bpd', points: [[-104.05, 50.95], [-97.5, 44.4], [-95, 29.8]] },
  { id: 'colonial', name: 'Colonial Pipeline', type: 'products', operator: 'Colonial Pipeline Co', capacity: '2.5 million bpd', points: [[-95.4, 29.8], [-84.4, 33.8], [-74, 40.7]] },
];

export const PIPELINE_COLORS: Record<PipelineType, string> = {
  oil: '#ff6b35',
  gas: '#00b4d8',
  products: '#ffd166',
};

export type NewsCategory = 'ukraine' | 'iran' | 'cailian';

export interface NewsBrief {
  id: string;
  category: NewsCategory;
  title: string;
  summary?: string;
  date: string;
  lat: number;
  lon: number;
  source?: string;
}

export const NEWS_CATEGORY_META: Record<NewsCategory, { label: string; color: string }> = {
  ukraine: { label: '🇺🇦 俄乌战争', color: '#ff6b6b' },
  iran: { label: '🇮🇷 伊朗局势', color: '#f7a035' },
  cailian: { label: '📰 财联社', color: '#4a9eff' },
};

export function getMilitaryBaseColor(type: BaseType, alpha = 1): string {
  const colors: Record<BaseType, string> = {
    'us-nato': `rgba(68, 136, 255, ${alpha})`,
    russia: `rgba(255, 68, 68, ${alpha})`,
    china: `rgba(255, 136, 68, ${alpha})`,
    uk: `rgba(68, 170, 255, ${alpha})`,
    france: `rgba(0, 85, 164, ${alpha})`,
    india: `rgba(255, 153, 51, ${alpha})`,
    japan: `rgba(188, 0, 45, ${alpha})`,
    other: `rgba(136, 136, 136, ${alpha})`,
  };
  return colors[type];
}

export const BASEMAP_STYLE = 'https://tiles.openfreemap.org/styles/bright';

export interface GoldReserve {
  country: string;
  tonnes: number;
  yoyTonnes: number;   // year-over-year net change (+ = buying, - = selling)
  note?: string;       // geopolitical context
  lat: number;
  lon: number;
}

export const GOLD_RESERVES: GoldReserve[] = [
  { country: '美国',     tonnes: 8133.5, yoyTonnes:   0.0, lat:  38.9, lon:  -77.0 },
  { country: '德国',     tonnes: 3352.3, yoyTonnes:   0.0, lat:  52.5, lon:   13.4 },
  { country: '意大利',   tonnes: 2451.8, yoyTonnes:   0.0, lat:  41.9, lon:   12.5 },
  { country: '法国',     tonnes: 2436.9, yoyTonnes:   0.0, lat:  48.9, lon:    2.3 },
  { country: '俄罗斯',   tonnes: 2332.7, yoyTonnes: +31.1, note: '去美元化战略储备', lat: 55.8, lon:  37.6 },
  { country: '中国',     tonnes: 2279.6, yoyTonnes: +44.2, note: '人民币国际化压舱石', lat: 39.9, lon: 116.4 },
  { country: '瑞士',     tonnes: 1040.0, yoyTonnes:   0.0, lat:  46.9, lon:    7.4 },
  { country: '日本',     tonnes:  845.97,yoyTonnes:   0.0, lat:  35.7, lon:  139.7 },
  { country: '印度',     tonnes:  803.6, yoyTonnes: +72.6, note: '央行加速多元化外储', lat: 28.6, lon:   77.2 },
  { country: '荷兰',     tonnes:  612.5, yoyTonnes:   0.0, lat:  52.1, lon:    5.3 },
  { country: '土耳其',   tonnes:  570.6, yoyTonnes: +76.9, note: '对冲里拉贬值风险', lat: 39.9, lon:   32.9 },
  { country: '波兰',     tonnes:  377.4, yoyTonnes: +78.7, note: '东翼安全储备战略', lat: 52.2, lon:   21.0 },
  { country: '沙特阿拉伯', tonnes: 323.1, yoyTonnes: +4.6, note: '石油美元向实物黄金转移', lat: 24.7, lon: 46.7 },
  { country: '英国',     tonnes:  310.3, yoyTonnes:   0.0, lat:  51.5, lon:   -0.1 },
  { country: '哈萨克斯坦', tonnes: 300.3, yoyTonnes: +14.8, note: '国内矿产直接转储', lat: 51.2, lon:  71.4 },
];

export interface GoldMine {
  name: string;
  country: string;
  annualTonnes: number;  // approximate annual production (tonnes)
  lat: number;
  lon: number;
}

export const GOLD_MINES: GoldMine[] = [
  { name: 'Muruntau',         country: '乌兹别克斯坦', annualTonnes: 62,  lat:  41.5, lon:   64.6 },
  { name: 'Olimpiada',        country: '俄罗斯',       annualTonnes: 47,  lat:  58.5, lon:   93.0 },
  { name: 'Grasberg',         country: '印度尼西亚',   annualTonnes: 44,  lat:  -4.05,lon:  137.1 },
  { name: 'Kibali',           country: '刚果民主共和国', annualTonnes: 40, lat:   3.5, lon:   29.2 },
  { name: 'Carlin Trend',     country: '美国',         annualTonnes: 38,  lat:  40.7, lon: -116.1 },
  { name: 'Loulo-Gounkoto',   country: '马里',         annualTonnes: 26,  lat:  13.9, lon:  -11.8 },
  { name: 'Boddington',       country: '澳大利亚',     annualTonnes: 26,  lat: -32.8, lon:  116.4 },
  { name: 'Yanacocha',        country: '秘鲁',         annualTonnes: 22,  lat:  -6.97,lon:  -78.5 },
  { name: 'Kumtor',           country: '吉尔吉斯斯坦', annualTonnes: 18,  lat:  41.8, lon:   78.2 },
  { name: 'Mponeng',          country: '南非',         annualTonnes: 15,  lat: -26.4, lon:   27.4 },
  { name: 'Pueblo Viejo',     country: '多米尼加',     annualTonnes: 28,  lat:  18.8, lon:  -70.1 },
  { name: 'Detour Lake',      country: '加拿大',       annualTonnes: 18,  lat:  49.7, lon:  -79.9 },
];

export interface OilReserve {
  country: string;
  billionBarrels: number;
  lat: number;
  lon: number;
}

export const OIL_RESERVES: OilReserve[] = [
  { country: '委内瑞拉', billionBarrels: 303.8, lat: 8.0, lon: -66.0 },
  { country: '沙特阿拉伯', billionBarrels: 258.6, lat: 24.7, lon: 46.7 },
  { country: '加拿大', billionBarrels: 170.3, lat: 56.1, lon: -106.3 },
  { country: '伊朗', billionBarrels: 157.8, lat: 32.4, lon: 53.7 },
  { country: '伊拉克', billionBarrels: 145.0, lat: 33.3, lon: 44.4 },
];