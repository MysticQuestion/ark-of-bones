import heroLogoSmall from '../assets/brand/aob-logo-1440.webp';
import heroLogo4k from '../assets/brand/aob-logo-4k.webp';

export const SITE_URL = 'https://www.arkofbones.com';

export const ASSETS = {
  logo: 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/273fa447-0add-4ecb-b99a-a0ce8d893111/Ark+Of+Bones+Domino+LOGO+GOLD.png?format=500w',
  heroLogo: heroLogo4k,
  heroLogoSmall,
  hero: 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/3395c4cf-2c85-4047-afee-12412bba1003/AOB-55.jpg?format=2500w',
  table: 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/3395c4cf-2c85-4047-afee-12412bba1003/AOB-55.jpg?format=1800w',
  owner: 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/f96cc1d7-4f62-4aaa-ab70-dca20554672f/Untitled+%281080+x+786+px%29.png?format=1500w',
  players: 'https://drive.google.com/thumbnail?id=1X48APY0t6pAlAvaTDT4WPNv4Q71mogGb&sz=w1800',
  event: 'https://drive.google.com/thumbnail?id=1572SbfaOL6JIdURixI65pz6QbeOvu4mz&sz=w2200',
  learn: 'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/3395c4cf-2c85-4047-afee-12412bba1003/AOB-55.jpg?format=1600w',
  social: '/og-ark-of-bones.webp',
};

export const BRAND = {
  name: 'Ark of Bones',
  proposition: 'The Home of Domino Entertainment',
  description:
    'Ark of Bones is the home for live domino competition, connected table experiences, original media, and official merchandise rooted in the communities that keep the game alive.',
};

// Trademark presentation is centralized here until legal approval is documented.
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
