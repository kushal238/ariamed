import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
const routes = (process.env.ROUTES || '/,/pricing,/about,/contact')
  .split(',')
  .map((r) => r.trim())
  .filter(Boolean);

const outDir = process.env.OUTPUT_DIR || 'artifacts/after';
const diffDir = process.env.DIFF_DIR || 'artifacts/diff';
const beforeDir = process.env.BEFORE_DIR || 'artifacts/before';

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function slug(route) {
  return route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '_');
}

async function screenshotAll() {
  ensureDir(outDir);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

  for (const route of routes) {
    const url = baseUrl + route;
    await page.goto(url, { waitUntil: 'networkidle' });
    const file = path.join(outDir, `${slug(route)}.png`);
    await page.screenshot({ path: file, fullPage: true });
  }

  await browser.close();
}

function diffAll() {
  ensureDir(diffDir);
  for (const route of routes) {
    const name = `${slug(route)}.png`;
    const beforePath = path.join(beforeDir, name);
    const afterPath = path.join(outDir, name);
    if (!fs.existsSync(beforePath) || !fs.existsSync(afterPath)) continue;

    const img1 = PNG.sync.read(fs.readFileSync(beforePath));
    const img2 = PNG.sync.read(fs.readFileSync(afterPath));
    const { width, height } = img1;
    const diff = new PNG({ width, height });
    pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });
    fs.writeFileSync(path.join(diffDir, name), PNG.sync.write(diff));
  }
}

if (process.argv.includes('--diff')) {
  diffAll();
} else {
  screenshotAll();
}
