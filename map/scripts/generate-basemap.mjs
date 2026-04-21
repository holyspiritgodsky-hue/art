/**
 * 下载 CartoDB Positron 瓦片并拼接成一张静态底图占位图。
 * 用于地图加载前快速显示背景。
 *
 * 默认生成亚洲视角 (center≈[96,34], z=3) 的拼图。
 */

import sharp from 'sharp';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '..', 'public', 'basemap');

// Tile server – CartoDB Positron (light theme, similar to OpenFreeMap Bright)
const TILE_URL = 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png';

// --- Config for Asia view ---
const ZOOM = 3;
const X_MIN = 3;
const X_MAX = 7;
const Y_MIN = 1;
const Y_MAX = 5;
const TILE_SIZE = 512; // @2x tiles are 512px

const COLS = X_MAX - X_MIN + 1;
const ROWS = Y_MAX - Y_MIN + 1;
const WIDTH = COLS * TILE_SIZE;
const HEIGHT = ROWS * TILE_SIZE;

async function fetchTile(z, x, y) {
  const url = TILE_URL.replace('{z}', z).replace('{x}', x).replace('{y}', y);
  console.log(`  Downloading tile z=${z} x=${x} y=${y} ...`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  if (!existsSync(OUT_DIR)) {
    mkdirSync(OUT_DIR, { recursive: true });
  }

  console.log(`Downloading ${COLS}x${ROWS} = ${COLS * ROWS} tiles at zoom ${ZOOM}...`);

  // Download all tiles in parallel
  const tiles = [];
  for (let y = Y_MIN; y <= Y_MAX; y++) {
    for (let x = X_MIN; x <= X_MAX; x++) {
      tiles.push({
        x,
        y,
        bufferPromise: fetchTile(ZOOM, x, y),
      });
    }
  }

  // Resolve all downloads
  const compositeInputs = [];
  for (const tile of tiles) {
    const buffer = await tile.bufferPromise;
    compositeInputs.push({
      input: buffer,
      left: (tile.x - X_MIN) * TILE_SIZE,
      top: (tile.y - Y_MIN) * TILE_SIZE,
    });
  }

  console.log('Stitching tiles...');
  const image = sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 3,
      background: { r: 238, g: 246, b: 251 },
    },
  })
    .composite(compositeInputs)
    .jpeg({ quality: 82 });

  const outPath = path.join(OUT_DIR, 'placeholder.jpg');
  await image.toFile(outPath);

  console.log(`Done! Saved to ${outPath} (${WIDTH}x${HEIGHT})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
