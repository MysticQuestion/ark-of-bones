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
  'work with us',
  'cost per player acquired',
  'sponsor renewal rate',
  'territory sales',
  'unit economics',
  'acquisition economics',
  'replay attach rate',
  'editing minutes per asset',
  'where culture meets',
  'redefining dominoes',
  'reimagining dominoes',
  'game-changing',
  'future of domino',
  'at the intersection of',
  'experience unlike any other',
  'join the movement',
  'explore our world',
  '4–6 week',
  '4-6 week',
  'nationwide shipping',
  'financing available',
  'custom builds are available',
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
  const rawContent = await readFile(file, 'utf8');
  const content = rawContent.toLowerCase();
  for (const phrase of bannedPhrases) {
    if (content.includes(phrase)) findings.push(`${file}: "${phrase}"`);
  }

  const brandedEmails = rawContent.match(/[\w.+-]+@arkofbones\.com/gi) || [];
  if (brandedEmails.some((email) => email.toLowerCase() !== 'info@arkofbones.com')) {
    findings.push(`${file}: non-public Ark of Bones email address`);
  }
}

if (findings.length) {
  console.error('Public copy audit failed:\n');
  console.error(findings.join('\n'));
  process.exit(1);
}

console.log(`Public copy audit passed across ${files.length} built files.`);
