import heroLogo from '../assets/brand/aob-logo-1440.webp';
import mark from '../assets/brand/aob-mark-384.webp';
import heroImage from '../assets/editorial/aob-table-hero.webp';

export const SITE_URL = 'https://www.arkofbones.com';

export const ASSETS = {
  logo: mark,
  mark,
  heroLogo,
  hero: heroImage,
  table: heroImage,
  owner: heroImage,
  players: heroImage,
  event: heroImage,
  learn: heroImage,
  social: '/og-ark-of-bones.webp',
};

export const BRAND = {
  name: 'Ark of Bones',
  proposition: 'Domino Culture, Live Play, Education & Official Merch',
  description:
    'Ark of Bones is a domino culture platform for live and recorded play, events, game education, official merchandise, publishing, and community connection.',
};

export const SUBSIDIARY_BRANDS = {
  dominoMotherFucker: {
    key: 'domino-mother-fucker',
    name: 'Domino Mother Fucker',
    trademark: '',
    shortName: 'DMF',
    path: '/brands/domino-mother-fucker',
  },
  bigSixBones: {
    key: 'big-six-bones',
    name: 'Big Six Bones',
    trademark: '',
    shortName: 'Big Six Bones',
    path: '/brands/big-six-bones',
  },
};

export function brandDisplayName(brand) {
  return `${brand.name}${brand.trademark}`;
}
