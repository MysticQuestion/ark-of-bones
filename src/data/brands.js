import { ASSETS, SUBSIDIARY_BRANDS, brandDisplayName } from '../config/brand';

export const brands = [
  {
    ...SUBSIDIARY_BRANDS.dominoMotherFucker,
    displayName: brandDisplayName(SUBSIDIARY_BRANDS.dominoMotherFucker),
    category: 'Apparel and merchandise',
    proposition: 'Domino Mother Fucker',
    description:
      'The irreverent apparel and merchandise label within Ark of Bones.',
    image: ASSETS.table,
    tone: 'gold',
  },
  {
    ...SUBSIDIARY_BRANDS.bigSixBones,
    displayName: brandDisplayName(SUBSIDIARY_BRANDS.bigSixBones),
    category: 'American domino play and merchandise',
    proposition: 'Big Six Bones',
    description:
      'The Ark of Bones label centered on American domino play and related merchandise.',
    image: ASSETS.table,
    tone: 'gold',
  },
];
