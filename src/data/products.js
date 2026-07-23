import { SITE_URL, SUBSIDIARY_BRANDS } from '../config/brand';

export const STORE_URL = `${SITE_URL}/merch`;

export const products = [
  {
    id: 'ark-embroidered-sweatshirt',
    name: 'Ark of Bones - Embroidered Sweatshirt',
    brand: 'Ark of Bones',
    brandKey: 'ark-of-bones',
    price: '$90.00',
    description:
      'A soft cotton-polyester unisex sweatshirt with a relaxed fit and an embroidered Ark of Bones logo.',
    href: STORE_URL,
    image:
      'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/9d5984b4-40fc-4481-b388-49dbc00bc6ea/11.png?format=1000w',
  },
  {
    id: 'big-six-long-sleeve',
    name: 'Big Six Bones - Long Sleeve Crew Neck',
    brand: SUBSIDIARY_BRANDS.bigSixBones.name,
    brandKey: SUBSIDIARY_BRANDS.bigSixBones.key,
    price: '$40.00',
    description:
      'A 100% cotton long-sleeve crew neck with Big Six Bones on the front and Ark of Bones on the back.',
    href: STORE_URL,
    image:
      'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/49624525-9541-4009-afcd-7fc9ae785f0a/13.png?format=1000w',
  },
  {
    id: 'dmf-graphic-tee',
    name: `${SUBSIDIARY_BRANDS.dominoMotherFucker.name} - Graphic Tee`,
    brand: SUBSIDIARY_BRANDS.dominoMotherFucker.name,
    brandKey: SUBSIDIARY_BRANDS.dominoMotherFucker.key,
    price: '$25.00',
    description:
      'A breathable 100% cotton crew-neck tee with a bold printed design and clean everyday fit.',
    href: STORE_URL,
    image:
      'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/8b08d37a-9290-48fa-96ae-cf535cc8e608/8.png?format=1000w',
  },
  {
    id: 'big-six-short-sleeve',
    name: 'Big Six Bones - Short Sleeved Tee',
    brand: SUBSIDIARY_BRANDS.bigSixBones.name,
    brandKey: SUBSIDIARY_BRANDS.bigSixBones.key,
    price: '$25.00',
    description:
      'A breathable 100% cotton short-sleeve tee featuring the Big Six Bones identity.',
    href: STORE_URL,
    image:
      'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/7ee6ab93-5e51-40df-a118-7873f7686555/Add%2Ba%2Bheading%2B%283%2Bx%2B5%2Bin%29%2B%282000%2Bx%2B2000%2Bpx%29%2B%282%29.png?format=1000w',
  },
  {
    id: 'dmf-embroidered-beanie',
    name: `${SUBSIDIARY_BRANDS.dominoMotherFucker.name} - Embroidered Beanie`,
    brand: SUBSIDIARY_BRANDS.dominoMotherFucker.name,
    brandKey: SUBSIDIARY_BRANDS.dominoMotherFucker.key,
    price: '$32.00',
    description:
      'A cuffed acrylic beanie with insulated lining and an embroidered subsidiary-brand mark.',
    href: STORE_URL,
    image:
      'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/ab6fe276-cfd5-4f82-833c-769e7e82245f/download.png?format=1000w',
  },
  {
    id: 'ark-beanie',
    name: 'Ark of Bones - Beanie',
    brand: 'Ark of Bones',
    brandKey: 'ark-of-bones',
    price: '$32.00',
    description:
      'A cuffed acrylic beanie with insulated lining and embroidered Ark of Bones branding.',
    href: STORE_URL,
    image:
      'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/6b49d4b7-231a-4d22-858a-0972410377ea/preview.jpeg?format=1000w',
  },
];

export const productFilters = [
  { label: 'All', value: 'all' },
  { label: 'Ark of Bones', value: 'ark-of-bones' },
  { label: 'Big Six Bones', value: SUBSIDIARY_BRANDS.bigSixBones.key },
  { label: SUBSIDIARY_BRANDS.dominoMotherFucker.name, value: SUBSIDIARY_BRANDS.dominoMotherFucker.key },
];
