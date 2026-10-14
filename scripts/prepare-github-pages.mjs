import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CANONICAL_HOST, canonicalRoutes, legacyRedirects } from '../src/config/publicRoutes.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const indexHtml = join(dist, 'index.html');

const routesSource = await readFile(join(root, 'src/app/routes.jsx'), 'utf8');
const productsSource = await readFile(join(root, 'src/data/products.js'), 'utf8');

if (!routesSource.includes('legacyRedirects')) {
  console.error('src/app/routes.jsx must render legacyRedirects from src/config/publicRoutes.js');
  process.exit(1);
}

const staticPaths = [...routesSource.matchAll(/path="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((path) => path !== '*');

for (const route of canonicalRoutes) {
  if (route.path !== '/' && !staticPaths.includes(route.path)) {
    console.error(`Canonical route ${route.path} is missing from src/app/routes.jsx`);
    process.exit(1);
  }
}

const productPaths = [...productsSource.matchAll(/productPage\('([^']+)'\)/g)]
  .map((match) => `/merch/p/${match[1]}`);

if (productPaths.length !== 6) {
  console.error(`Expected 6 Squarespace product fallbacks, found ${productPaths.length}`);
  process.exit(1);
}

const fallbackPaths = [...new Set([
  ...staticPaths.filter((path) => path !== '/'),
  ...legacyRedirects.map((route) => route.path),
  ...productPaths,
  ...canonicalRoutes.map((route) => route.path).filter((path) => path !== '/'),
])];

if (!fallbackPaths.includes('/coming-soon')) {
  console.error('GitHub Pages fallback for /coming-soon was not generated');
  process.exit(1);
}

await readFile(indexHtml);

async function writeIfChanged(path, content) {
  let current = '';
  try {
    current = await readFile(path, 'utf8');
  } catch {
    current = '';
  }
  if (current.replaceAll('\r\n', '\n') === content) return;
  await writeFile(path, content);
}

for (const path of fallbackPaths) {
  const directory = join(dist, path);
  await mkdir(directory, { recursive: true });
  await cp(indexHtml, join(directory, 'index.html'));
}

await cp(indexHtml, join(dist, '404.html'));
await writeFile(join(dist, 'CNAME'), `${CANONICAL_HOST}\n`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${canonicalRoutes.map((route) => `  <url><loc>https://${CANONICAL_HOST}${route.path}</loc><priority>${route.priority}</priority></url>`).join('\n')}
</urlset>
`;

await writeIfChanged(join(dist, 'sitemap.xml'), sitemap);
await writeIfChanged(join(root, 'public/sitemap.xml'), sitemap);

console.log(`GitHub Pages fallbacks written for ${fallbackPaths.length} routes, including /coming-soon.`);
