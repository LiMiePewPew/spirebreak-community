#!/usr/bin/env node
// Keep the public command, but use the one reviewed private export implementation.
import { spawnSync } from 'node:child_process';
import { realpathSync } from 'node:fs';
import { dirname, isAbsolute, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2).filter(value => value !== '--');
let gameRepo;
let manifest;
let mode = '--dry-run';
let explicitMode = false;
for (let i = 0; i < args.length; i++) {
  const flag = args[i];
  if (flag === '--game-repo' || flag === '--manifest') {
    const value = args[++i];
    if (!value || value.startsWith('--')) throw new Error(`Missing value for ${flag}`);
    if (flag === '--game-repo') gameRepo = value;
    else manifest = value;
  } else if (flag === '--apply' || flag === '--dry-run') {
    if (explicitMode) throw new Error('Choose only one of --apply and --dry-run');
    mode = flag;
    explicitMode = true;
  } else {
    throw new Error(`Unknown option: ${flag}`);
  }
}
if (!gameRepo) {
  console.error('Usage: npm run media:import -- --game-repo <checkout> [--manifest <relative-path>] [--dry-run | --apply]');
  process.exit(2);
}
const gameRoot = realpathSync(resolve(gameRepo));
const communityRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const command = [resolve(gameRoot, 'tools/marketing/sync_community_media.py'),
  '--game-repo', gameRoot, '--community-repo', communityRoot, mode];
if (manifest) {
  const path = isAbsolute(manifest) ? relative(gameRoot, manifest) : manifest;
  command.push('--manifest', path);
}
const result = spawnSync(process.env.SPIREBREAK_MEDIA_PYTHON || 'python3', command, { stdio: 'inherit' });
if (result.error) throw result.error;
process.exit(result.status ?? 1);
