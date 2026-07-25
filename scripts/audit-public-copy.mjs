import { readdir, readFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const root = process.argv[2] || 'dist';
const bannedPhrases = [
  'public staging preview',
  'noindex active',
  'production site untouched',
  'concept checkout disabled',
  'concept catalog',
  'presentation concept',
  'presentation concepts',
  'merchandise presentation',
  'verified store',
  'verified product',
  'verified public',
  'team approval',
  'review items',
  'working names',
  'original staging concept',
  'unsupported promises',
  'unsupported pricing',
  'currently listed',
  'being selected',
  'public archive is currently empty',
  'public event archive',
  'planned archive',
  'official company representation',
  'competing parent brand',
  'technical and commercial details',
  'commitment is implied',
  'external store',
  'will appear here',
  'appears here',
  'production plan',
  'approved experience',
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectFiles(path) : path;
  }));

  return files.flat();
}

const files = (await collectFiles(root)).filter((file) => ['.html', '.js'].includes(extname(file)));
const findings = [];

for (const file of files) {
  const content = (await readFile(file, 'utf8')).toLowerCase();
  for (const phrase of bannedPhrases) {
    if (content.includes(phrase)) findings.push(`${file}: "${phrase}"`);
  }
}

if (findings.length) {
  console.error('Public copy audit failed:\n');
  console.error(findings.join('\n'));
  process.exit(1);
}

console.log(`Public copy audit passed across ${files.length} built files.`);
