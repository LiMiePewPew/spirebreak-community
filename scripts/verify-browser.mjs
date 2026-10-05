import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const base = process.env.VERIFY_BASE_URL || 'http://127.0.0.1:4173';
await mkdir('verification', { recursive: true });
const browser = await chromium.launch();
const results = [];
const errors = [];
try {
  for (const width of [320, 360, 768, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push({ width, url: page.url(), error: String(error) }));
    page.on('response', response => {
      if (response.url().startsWith(base) && response.status() >= 400) errors.push({ width, url: response.url(), status: response.status() });
    });
    const routes = width === 360 || width === 1440
      ? ['/', '/game', '/development', '/roadmap', '/issues', '/changelog', '/changelog/development-update-10', '/changelog/development-update-11', '/changelog/development-update-12', '/changelog/development-update-13', '/changelog/development-update-9']
      : ['/', '/game', '/changelog/development-update-13'];
    for (const route of routes) {
      const response = await page.goto(base + route, { waitUntil: 'networkidle' });
      assert(response?.ok(), `Route failed: ${route}`);
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator('h1').count(), 1, `${route}: one h1`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
      assert(!overflow, `${route}: horizontal overflow at ${width}`);
      const images = await page.locator('img:visible').all();
      for (const image of images) {
        await image.scrollIntoViewIfNeeded();
        await image.evaluate(img => img.decode());
      }
      await page.evaluate(() => scrollTo(0, 0));
      const name = `${width}-${route === '/' ? 'home' : route.slice(1).replaceAll('/', '-')}`;
      await page.screenshot({ path: `verification/${name}.png`, fullPage: true });
      results.push({ route, width, status: response.status(), horizontalOverflow: overflow });
    }
    await page.goto(base + '/', { waitUntil: 'networkidle' });
    const arenaToggle = page.getByRole('checkbox', { name: 'Full arena', exact: true });
    const stageImage = page.locator('#stage-early img');
    const detailTransform = await stageImage.evaluate(img => getComputedStyle(img).transform);
    assert.notEqual(detailTransform, 'matrix(1, 0, 0, 1, 0, 0)', 'Build starts in detail view');
    await arenaToggle.check();
    await page.waitForFunction(() => getComputedStyle(document.querySelector('#stage-early img')).transform === 'matrix(1, 0, 0, 1, 0, 0)');
    assert.equal(await stageImage.evaluate(img => getComputedStyle(img).transform), 'matrix(1, 0, 0, 1, 0, 0)', 'Full arena removes the detail crop');
    assert.equal(await stageImage.evaluate(img => getComputedStyle(img).objectFit), 'contain', 'Full arena fits the entire capture');
    await arenaToggle.uncheck();
    await page.waitForFunction(expected => getComputedStyle(document.querySelector('#stage-early img')).transform === expected, detailTransform);
    assert.equal(await stageImage.evaluate(img => getComputedStyle(img).transform), detailTransform, 'Detail crop is restored');
    await page.getByRole('tab', { name: 'Fortified', exact: true }).click();
    assert.equal(await page.locator('#stage-mid').isVisible(), true);
    await page.keyboard.press('ArrowRight');
    assert.equal(await page.locator('#stage-late').isVisible(), true);
    await page.getByRole('button', { name: 'Watch gameplay', exact: true }).click();
    assert.equal(await page.getByRole('dialog').isVisible(), true);
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('dialog').isVisible(), false);
    await context.close();
  }
  assert.deepEqual(errors, [], 'Browser runtime or local resource errors');
  console.log(`PASS: ${results.length} responsive route captures; 4 widths; gallery mouse/keyboard and video-dialog checks; no page errors or missing local responses.`);
} finally {
  await writeFile('verification/browser-results.json', JSON.stringify({ results, errors }, null, 2));
  await browser.close();
}
