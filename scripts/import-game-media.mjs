#!/usr/bin/env node

import { copyFile, mkdir, readFile, realpath, stat, writeFile } from 'node:fs/promises';
import { extname, isAbsolute, relative, resolve, sep } from 'node:path';

const args = process.argv.slice(2);
const valueAfter = (flag) => {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
};

const gameRepoArg = valueAfter('--game-repo');
const manifestArg = valueAfter('--manifest');
const apply = args.includes('--apply');

if (!gameRepoArg) {
  console.error('Usage: npm run media:import -- --game-repo ../spirebreak [--manifest path] [--apply]');
  process.exit(2);
}

const communityRoot = await realpath(process.cwd());
const gameRoot = await realpath(resolve(gameRepoArg));
const manifestPath = manifestArg
  ? resolve(manifestArg)
  : resolve(gameRoot, 'docs/marketing/community-media.json');

const isInside = (parent, child) => {
  const rel = relative(parent, child);
  return rel === '' || (!rel.startsWith(`..${sep}`) && rel !== '..' && !isAbsolute(rel));
};

const safeSegment = (value, label) => {
  if (typeof value !== 'string' || !/^[a-z0-9][a-z0-9-]*$/.test(value)) {
    throw new Error(`${label} must match [a-z0-9-]+: ${String(value)}`);
  }
  return value;
};

const allowedExtensions = new Set(['.webp', '.avif', '.png', '.jpg', '.jpeg', '.webm', '.mp4']);
const imageExtensions = new Set(['.webp', '.avif', '.png', '.jpg', '.jpeg']);
const videoExtensions = new Set(['.webm', '.mp4']);

const raw = JSON.parse(await readFile(manifestPath, 'utf8'));
if (raw.version !== 1 || !Array.isArray(raw.assets)) {
  throw new Error('Unsupported manifest. Expected version=1 and assets[].');
}

const publicRoot = resolve(communityRoot, 'public/media/game');
const dataFile = resolve(communityRoot, 'src/data/media.ts');
const approved = raw.assets.filter((asset) => asset?.approved_public === true);
const seenIds = new Set();
const seenDestinations = new Set();
const output = [];

for (const asset of approved) {
  const id = safeSegment(asset.id, 'asset.id');
  const category = safeSegment(asset.category ?? 'misc', 'asset.category');
  if (seenIds.has(id)) throw new Error(`Duplicate media id: ${id}`);
  seenIds.add(id);

  if (typeof asset.source !== 'string' || isAbsolute(asset.source) || asset.source.includes('..')) {
    throw new Error(`Unsafe source path for ${id}`);
  }

  const unresolvedSource = resolve(gameRoot, asset.source);
  const source = await realpath(unresolvedSource);
  if (!isInside(gameRoot, source)) throw new Error(`Source escapes game repository: ${id}`);

  const sourceStat = await stat(source);
  if (!sourceStat.isFile()) throw new Error(`Source is not a file: ${id}`);

  const extension = extname(source).toLowerCase();
  if (!allowedExtensions.has(extension)) throw new Error(`Unsupported media extension for ${id}: ${extension}`);

  const kind = asset.kind;
  if (kind !== 'image' && kind !== 'video') throw new Error(`Invalid kind for ${id}: ${kind}`);
  if (kind === 'image' && !imageExtensions.has(extension)) throw new Error(`Image ${id} has video extension`);
  if (kind === 'video' && !videoExtensions.has(extension)) throw new Error(`Video ${id} has image extension`);

  const width = Number(asset.width);
  const height = Number(asset.height);
  if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) {
    throw new Error(`width/height must be positive integers for ${id}`);
  }

  const alt = typeof asset.alt === 'string' ? asset.alt.trim() : '';
  if (!alt && asset.decorative !== true) throw new Error(`Missing alt text for ${id}`);

  const placements = Array.isArray(asset.placement) ? asset.placement : [asset.placement].filter(Boolean);
  if (!placements.length || placements.some((item) => typeof item !== 'string' || !item.trim())) {
    throw new Error(`At least one placement is required for ${id}`);
  }

  const destination = resolve(publicRoot, category, `${id}${extension}`);
  if (!isInside(publicRoot, destination)) throw new Error(`Destination escapes public media root: ${id}`);
  if (seenDestinations.has(destination)) throw new Error(`Duplicate media destination: ${destination}`);
  seenDestinations.add(destination);

  const publicPath = `/${relative(resolve(communityRoot, 'public'), destination).split(sep).join('/')}`;
  const aspectRatio = `${width}/${height}`;
  const record = {
    id,
    kind,
    src: publicPath,
    width,
    height,
    aspectRatio,
    alt,
    caption: typeof asset.caption === 'string' ? asset.caption.trim() : '',
    category,
    placements: placements.map((item) => item.trim()),
    gameBuild: String(raw.game_build ?? asset.game_build ?? 'unknown'),
    ...(typeof asset.focus === 'string' && asset.focus.trim() ? { focus: asset.focus.trim() } : {}),
  };

  output.push(record);
  console.log(`${apply ? 'COPY' : 'WOULD COPY'} ${relative(gameRoot, source)} -> ${relative(communityRoot, destination)} (${sourceStat.size} bytes)`);

  if (apply) {
    await mkdir(resolve(publicRoot, category), { recursive: true });
    await copyFile(source, destination);
  }
}

const generated = `export type GameMediaKind = 'image' | 'video';\n\nexport type GameMedia = {\n  id: string;\n  kind: GameMediaKind;\n  src: string;\n  width: number;\n  height: number;\n  aspectRatio: string;\n  alt: string;\n  caption: string;\n  category: string;\n  placements: string[];\n  gameBuild: string;\n  poster?: string;\n  focus?: string;\n};\n\n// Generated by scripts/import-game-media.mjs. Do not hand-edit synced records.\nexport const gameMedia: GameMedia[] = ${JSON.stringify(output, null, 2)};\n\nexport const mediaFor = (placement: string): GameMedia[] =>\n  gameMedia.filter((asset) => asset.placements.includes(placement));\n\nexport const firstMediaFor = (placement: string): GameMedia | undefined =>\n  mediaFor(placement)[0];\n`;

console.log(`${apply ? 'WRITE' : 'WOULD WRITE'} ${relative(communityRoot, dataFile)} with ${output.length} approved media record(s)`);
console.log('DELETE nothing (stale public assets are never removed automatically)');

if (apply) {
  await writeFile(dataFile, generated, 'utf8');
}

console.log(apply ? 'Media import applied.' : 'Dry run complete. Re-run with --apply to mutate the community repository.');
