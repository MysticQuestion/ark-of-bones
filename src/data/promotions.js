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
    title: 'Ark of Bones Embroidered Sweatshirt',
    description: 'Cotton-polyester sweatshirt with an embroidered Ark of Bones front mark.',
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
    title: 'Big Six Bones Long-Sleeve Tee',
    description: '100% cotton long-sleeve tee with Big Six Bones on the front and Ark of Bones on the back.',
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
    title: 'Big Six Bones',
    description: 'American domino play and related Big Six Bones merchandise.',
    label: 'Enter Big Six Bones',
    to: '/brands/big-six-bones',
    external: false,
    image: ASSETS.players,
    alt: 'Players focused on competitive domino play',
  },
  dmfBrand: {
    id: 'dmf-brand-beanie',
    eyebrow: 'Domino Mother Fucker merchandise',
    title: 'Domino Mother Fucker Embroidered Beanie',
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
    title: 'Big Six Bones Short-Sleeve Tee',
    description: '100% cotton short-sleeve tee with a printed Big Six Bones front design.',
    price: bigSixTee.price,
    label: 'Choose a size',
    to: bigSixTee.href,
    external: true,
    image: bigSixTee.image,
    alt: 'Big Six Bones short-sleeve tee',
  },
};
