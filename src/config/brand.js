import heroLogoSmall from '../assets/brand/aob-logo-1440.webp';
import heroLogo4k from '../assets/brand/aob-logo-4k.webp';

export const SITE_URL = 'https://www.arkofbones.com';

const tableImage = 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/3395c4cf-2c85-4047-afee-12412bba1003/AOB-55.jpg?format=2500w';

export const ASSETS = {
  logo: 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/273fa447-0add-4ecb-b99a-a0ce8d893111/Ark+Of+Bones+Domino+LOGO+GOLD.png?format=500w',
  heroLogo: heroLogo4k,
  heroLogoSmall,
  hero: tableImage,
  table: tableImage,
  // Human-image placeholders intentionally resolve to verified table photography
  // until original, rights-cleared human photography is supplied.
  owner: tableImage,
  players: tableImage,
  event: tableImage,
  learn: tableImage,
  social: '/og-ark-of-bones.webp',
};

export const BRAND = {
  name: 'Ark of Bones',
  proposition: 'Custom Domino Tables & Goods',
  description:
    'Ark of Bones builds custom domino tables and develops a focused collection of domino goods, apparel, and future play experiences.',
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
