import heroLogo from '../assets/brand/aob-logo-1440.webp';
import mark from '../assets/brand/aob-mark-384.webp';

export const SITE_URL = 'https://www.arkofbones.com';

const heroImage = 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/3395c4cf-2c85-4047-afee-12412bba1003/AOB-55.jpg?format=2500w';

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
