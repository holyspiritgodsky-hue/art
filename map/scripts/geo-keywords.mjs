/**
 * 关键词 → 地理坐标 + 新闻分类 映射表。
 * fetch-news.mjs 用此表将新闻标题匹配到地图坐标。
 *
 * category: 'ukraine' | 'iran' | 'cailian'
 * 匹配规则：按数组顺序，第一个命中的关键词决定坐标和分类。
 */

/** @type {{ keywords: string[]; lat: number; lon: number; category: string }[]} */
export const GEO_RULES = [
  // ── 俄乌战争 ──
  { keywords: ['基辅', 'Kyiv'], lat: 50.45, lon: 30.5, category: 'ukraine' },
  { keywords: ['哈尔科夫', 'Kharkiv'], lat: 49.99, lon: 36.23, category: 'ukraine' },
  { keywords: ['扎波罗热', 'Zaporizhzhia'], lat: 47.84, lon: 35.14, category: 'ukraine' },
  { keywords: ['赫尔松', 'Kherson'], lat: 46.63, lon: 32.62, category: 'ukraine' },
  { keywords: ['顿涅茨克', 'Donetsk'], lat: 48.0, lon: 37.8, category: 'ukraine' },
  { keywords: ['卢甘斯克', 'Luhansk'], lat: 48.57, lon: 39.31, category: 'ukraine' },
  { keywords: ['克里米亚', 'Crimea'], lat: 44.95, lon: 34.1, category: 'ukraine' },
  { keywords: ['敖德萨', 'Odesa', 'Odessa'], lat: 46.48, lon: 30.73, category: 'ukraine' },
  { keywords: ['乌克兰', 'Ukraine', '泽连斯基', 'Zelensky'], lat: 48.38, lon: 31.17, category: 'ukraine' },
  { keywords: ['莫斯科', 'Moscow', '克里姆林宫', 'Kremlin'], lat: 55.75, lon: 37.6, category: 'ukraine' },
  { keywords: ['俄罗斯', 'Russia', '俄军', '俄方', '普京', 'Putin'], lat: 55.75, lon: 37.6, category: 'ukraine' },
  { keywords: ['北约', 'NATO'], lat: 50.85, lon: 4.35, category: 'ukraine' },

  // ── 伊朗局势 ──
  { keywords: ['德黑兰', 'Tehran', '伊朗', 'Iran', 'IRGC', '革命卫队'], lat: 35.7, lon: 51.4, category: 'iran' },
  { keywords: ['霍尔木兹', 'Hormuz'], lat: 26.5, lon: 56.5, category: 'iran' },
  { keywords: ['胡塞', 'Houthi', '红海', 'Red Sea', '也门', 'Yemen'], lat: 14.5, lon: 42.9, category: 'iran' },
  { keywords: ['真主党', 'Hezbollah', '黎巴嫩', 'Lebanon'], lat: 33.89, lon: 35.5, category: 'iran' },
  { keywords: ['加沙', 'Gaza', '哈马斯', 'Hamas'], lat: 31.5, lon: 34.47, category: 'iran' },
  { keywords: ['以色列', 'Israel'], lat: 31.77, lon: 35.22, category: 'iran' },
  { keywords: ['叙利亚', 'Syria', '大马士革', 'Damascus'], lat: 33.51, lon: 36.29, category: 'iran' },

  // ── 财联社要闻（中国 / 亚太 / 全球财经）──
  { keywords: ['台海', '台湾', 'Taiwan', '台独'], lat: 24.0, lon: 119.5, category: 'cailian' },
  { keywords: ['南海', 'South China Sea'], lat: 15.0, lon: 114.0, category: 'cailian' },
  { keywords: ['朝鲜', '平壤', 'DPRK', 'Pyongyang'], lat: 39.02, lon: 125.75, category: 'cailian' },
  { keywords: ['北京', '中南海', '国务院', '中央'], lat: 39.9, lon: 116.4, category: 'cailian' },
  { keywords: ['上海', '沪指', '上证', '浦东'], lat: 31.23, lon: 121.47, category: 'cailian' },
  { keywords: ['深圳', '深成指', '创业板'], lat: 22.54, lon: 114.06, category: 'cailian' },
  { keywords: ['香港', '恒生', '港股'], lat: 22.32, lon: 114.17, category: 'cailian' },
  { keywords: ['央行', '降准', '降息', 'MLF', 'LPR'], lat: 39.9, lon: 116.4, category: 'cailian' },
  { keywords: ['美联储', 'Fed', '美元', '华尔街', 'Wall Street'], lat: 40.7, lon: -74.0, category: 'cailian' },
  { keywords: ['日本', '东京', '日元', '日经', 'BOJ'], lat: 35.68, lon: 139.69, category: 'cailian' },
  { keywords: ['欧洲央行', 'ECB', '欧元'], lat: 50.11, lon: 8.68, category: 'cailian' },
  { keywords: ['原油', 'OPEC', '油价', '布伦特'], lat: 26.0, lon: 50.55, category: 'cailian' },
  { keywords: ['黄金', '金价', 'Gold'], lat: 40.75, lon: -73.97, category: 'cailian' },
];

/**
 * 根据标题文本匹配地理坐标和分类。
 * @param {string} title
 * @returns {{ lat: number; lon: number; category: string } | null}
 */
export function matchGeo(title) {
  for (const rule of GEO_RULES) {
    for (const kw of rule.keywords) {
      if (title.includes(kw)) {
        return { lat: rule.lat, lon: rule.lon, category: rule.category };
      }
    }
  }
  return null;
}
