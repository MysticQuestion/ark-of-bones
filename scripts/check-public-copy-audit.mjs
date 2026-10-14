import assert from 'node:assert/strict';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const directory = await mkdtemp(join(tmpdir(), 'ark-copy-regression-'));
const audit = fileURLToPath(new URL('./audit-public-copy.mjs', import.meta.url));
try {
  await writeFile(join(directory, 'index.html'), '<p>The app now represents only confirmed public offerings.</p>');
  const rejected = spawnSync(process.execPath, [audit, directory], { encoding: 'utf8' });
  assert.equal(rejected.status, 1, 'The screenshot’s internal process copy must fail the public-copy gate.');
  assert.match(rejected.stderr, /Public copy audit failed/);

  await writeFile(join(directory, 'index.html'), '<p>Explore the games, discover the stories, and shop the collection.</p>');
  const accepted = spawnSync(process.execPath, [audit, directory], { encoding: 'utf8' });
  assert.equal(accepted.status, 0, accepted.stderr);
  console.log('Public-copy regression passed: process copy rejected; visitor copy accepted.');
} finally {
  await rm(directory, { recursive: true, force: true });
}
