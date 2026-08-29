import { ASSETS, SUBSIDIARY_BRANDS, brandDisplayName } from '../config/brand';

export const brands = [
  {
    ...SUBSIDIARY_BRANDS.dominoMotherFucker,
    displayName: brandDisplayName(SUBSIDIARY_BRANDS.dominoMotherFucker),
    category: 'Merchandise and media identity',
    description: 'Wordmark, apparel, product graphics, and media connected to Ark of Bones.',
    image: ASSETS.event,
    tone: 'red',
  },
  {
    ...SUBSIDIARY_BRANDS.bigSixBones,
    displayName: brandDisplayName(SUBSIDIARY_BRANDS.bigSixBones),
    category: 'Domino game identity',
    description: 'Game development, rules publication, match records, and related products.',
    image: ASSETS.players,
    tone: 'gold',
  },
];
