import { ASSETS, SUBSIDIARY_BRANDS, brandDisplayName } from '../config/brand';

export const brands = [
  {
    ...SUBSIDIARY_BRANDS.dominoMotherFucker,
    displayName: brandDisplayName(SUBSIDIARY_BRANDS.dominoMotherFucker),
    category: 'Culture, media and merchandise',
    proposition: 'Victory with a point of view.',
    description:
      'Attitude, humor, storytelling, media, and merchandise connected to the table.',
    image: ASSETS.event,
    tone: 'red',
  },
  {
    ...SUBSIDIARY_BRANDS.bigSixBones,
    displayName: brandDisplayName(SUBSIDIARY_BRANDS.bigSixBones),
    category: 'Competition, events and education',
    proposition: 'Fast rounds. Big plays. Community competition.',
    description:
      'American domino play, events, education, and tournament energy from Ark of Bones.',
    image: ASSETS.players,
    tone: 'gold',
  },
];
