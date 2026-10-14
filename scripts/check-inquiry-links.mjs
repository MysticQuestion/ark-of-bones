import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { INQUIRY_TYPES } from '../src/config/contact.js';

const routes = await readFile(new URL('../src/app/routes.jsx', import.meta.url), 'utf8');
const pages = [...routes.matchAll(/import\('\.\.\/pages\/([^']+)'\)/g)].map((match) => match[1]);
let checked = 0;
for (const page of pages) {
  const source = await readFile(new URL(`../src/pages/${page}.jsx`, import.meta.url), 'utf8');
  for (const match of source.matchAll(/to="(\/contact\?[^"\s]+)"/g)) {
    const type = new URL(match[1], 'https://www.arkofbones.com').searchParams.get('inquiry');
    if (!type) continue;
    assert(INQUIRY_TYPES.includes(type), `${page}: inquiry “${type}” would silently select the default.`);
    checked += 1;
  }
}
assert(checked > 0, 'No mounted inquiry links were checked.');
console.log(`Mounted inquiry-link regression passed (${checked} link${checked === 1 ? '' : 's'}).`);
