import { ASSETS } from '../config/brand';
import { officialProducts } from './products';

const product = (id) => officialProducts.find((item) => item.id === id);
const arkSweatshirt = product('ark-embroidered-sweatshirt');
const bigSixLongSleeve = product('big-six-long-sleeve');
const bigSixTee = product('big-six-short-sleeve');
const dmfBeanie = product('dmf-embroidered-beanie');

export const campaigns = {
  homeShop: {
    id: 'home-embroidered-sweatshirt',
    eyebrow: 'From the official shop',
    title: 'The Ark, embroidered.',
    description: 'A relaxed unisex sweatshirt finished with the Ark of Bones mark and built for easy layering.',
    price: arkSweatshirt.price,
    label: 'View the sweatshirt',
    to: arkSweatshirt.href,
    external: true,
    image: arkSweatshirt.image,
    alt: 'Ark of Bones embroidered sweatshirt',
  },
  watchShop: {
    id: 'watch-big-six-long-sleeve',
    eyebrow: 'Official Big Six Bones merchandise',
    title: 'Competition on the front. The Ark on the back.',
    description: 'The 100% cotton long-sleeve crew carries Big Six Bones up front and Ark of Bones across the back.',
    price: bigSixLongSleeve.price,
    label: 'Choose a size',
    to: bigSixLongSleeve.href,
    external: true,
    image: bigSixLongSleeve.image,
    alt: 'Big Six Bones long-sleeve crew neck',
  },
  learnBigSix: {
    id: 'learn-big-six-brand',
    eyebrow: 'Continue with Big Six Bones',
    title: 'Know the pressure behind every play.',
    description: 'Move from the rules into the competition, identity, and merchandise built around Big Six Bones.',
    label: 'Enter Big Six Bones',
    to: '/brands/big-six-bones',
    external: false,
    image: ASSETS.players,
    alt: 'Players focused on competitive domino play',
  },
  dmfBrand: {
    id: 'dmf-brand-beanie',
    eyebrow: 'Domino Mother Fucker merchandise',
    title: 'Victory, stitched in gold.',
    description: 'A cuffed acrylic beanie with insulated 3M Thinsulate lining and an embroidered front mark.',
    price: dmfBeanie.price,
    label: 'View the beanie',
    to: dmfBeanie.href,
    external: true,
    image: dmfBeanie.image,
    alt: 'Domino Mother Fucker embroidered beanie',
  },
  bigSixBrand: {
    id: 'big-six-brand-tee',
    eyebrow: 'Big Six Bones merchandise',
    title: 'The competitive mark, ready to move.',
    description: 'A breathable 100% cotton short-sleeve tee with a clean unisex fit and printed Big Six Bones identity.',
    price: bigSixTee.price,
    label: 'Choose a size',
    to: bigSixTee.href,
    external: true,
    image: bigSixTee.image,
    alt: 'Big Six Bones short-sleeve tee',
  },
};
