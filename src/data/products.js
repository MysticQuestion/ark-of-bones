import { BRAND, SITE_URL, SUBSIDIARY_BRANDS } from '../config/brand';

export const STORE_URL = `${SITE_URL}/merch`;

const galleryImages = import.meta.glob('../assets/shop/product-*.jpg', {
  eager: true,
  import: 'default',
  query: '?url',
});

const galleryImage = (number) => {
  const filename = `product-${String(number).padStart(2, '0')}.jpg`;
  return galleryImages[`../assets/shop/${filename}`];
};

const brandNames = {
  'ark-of-bones': BRAND.name,
  [SUBSIDIARY_BRANDS.bigSixBones.key]: SUBSIDIARY_BRANDS.bigSixBones.name,
  [SUBSIDIARY_BRANDS.dominoMotherFucker.key]: SUBSIDIARY_BRANDS.dominoMotherFucker.name,
};

export const officialProducts = [
  {
    id: 'ark-embroidered-sweatshirt',
    name: 'Ark of Bones - Embroidered Sweatshirt',
    brand: BRAND.name,
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
      'A cuffed acrylic beanie with insulated lining and an embroidered Domino Mother Fucker mark.',
    href: STORE_URL,
    image:
      'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/ab6fe276-cfd5-4f82-833c-769e7e82245f/download.png?format=1000w',
  },
  {
    id: 'ark-beanie',
    name: 'Ark of Bones - Beanie',
    brand: BRAND.name,
    brandKey: 'ark-of-bones',
    price: '$32.00',
    description:
      'A cuffed acrylic beanie with insulated lining and embroidered Ark of Bones branding.',
    href: STORE_URL,
    image:
      'https://images.squarespace-cdn.com/content/v1/6734f898cdf3986b5838dda2/6b49d4b7-231a-4d22-858a-0972410377ea/preview.jpeg?format=1000w',
  },
];

const galleryDepartmentData = [
  {
    id: 'tees-polos-tanks',
    name: 'Tees, Polos and Tanks',
    note: 'Core logo pieces and statement graphics',
    products: [
      { name: 'Big Six Bones Classic Tee', variant: 'White', image: 4, brandKey: 'big-six-bones' },
      { name: 'Ark Domino Border Tee', variant: 'Black', image: 5, brandKey: 'ark-of-bones' },
      { name: 'Ark Domino Border Tee', variant: 'White', image: 6, brandKey: 'ark-of-bones' },
      { name: "Follow That Cab Women's Tee", variant: 'Charcoal', image: 7, brandKey: 'ark-of-bones' },
      { name: 'DMF Long-Sleeve Tee', variant: 'Black and gold', image: 8, brandKey: 'domino-mother-fucker' },
      { name: 'Big Six Bones Long-Sleeve Tee', variant: 'Black and gold', image: 9, brandKey: 'big-six-bones' },
      { name: 'DMF Logo Tee', variant: 'Black and gold', image: 10, brandKey: 'domino-mother-fucker' },
      { name: 'DMF Performance Polo', variant: 'Black and gold', image: 11, brandKey: 'domino-mother-fucker' },
      { name: 'Big Six Bones Tank', variant: 'Black and gold', image: 12, brandKey: 'big-six-bones' },
      { name: 'DMF Basketball Tank', variant: 'Black with gold trim', image: 13, brandKey: 'domino-mother-fucker' },
      { name: 'DMF Statement Tee', variant: 'Sand and black', image: 14, brandKey: 'domino-mother-fucker' },
      { name: 'Big Six Bones Classic Tee', variant: 'Black and gold', image: 14, brandKey: 'big-six-bones' },
    ],
  },
  {
    id: 'sweatshirts-hoodies',
    name: 'Sweatshirts and Hoodies',
    note: 'Layering pieces for players and crews',
    products: [
      { name: 'How Many Cheeses Crewneck', variant: 'White-to-black fade', image: 15, brandKey: 'domino-mother-fucker' },
      { name: "Don't Domino Crewneck", variant: 'White', image: 16, brandKey: 'ark-of-bones' },
      { name: 'Plenty Hoodie', variant: 'Sand', image: 17, brandKey: 'ark-of-bones' },
      { name: "Beggin' Ronald Reagan Hoodie", variant: 'Gray and black', image: 18, brandKey: 'ark-of-bones' },
      { name: "Beggin' Ronald Reagan Pullover", variant: 'Black and gold', image: 19, brandKey: 'ark-of-bones' },
      { name: 'Big Bones Pullover Hoodie', variant: 'Black and gold', image: 20, brandKey: 'big-six-bones' },
      { name: 'Ark Monogram Tracksuit', variant: 'Black and gold set', image: 21, brandKey: 'ark-of-bones' },
      { name: 'DMF Pullover Hoodie', variant: 'Charcoal and gold', image: 22, brandKey: 'domino-mother-fucker' },
      { name: 'Big Six Bones Zip Hoodie', variant: 'Black and gold', image: 23, brandKey: 'big-six-bones' },
    ],
  },
  {
    id: 'outerwear',
    name: 'Outerwear',
    note: 'Statement layers built around the Ark pattern',
    products: [
      { name: 'Ark Monogram Puffer Vest', variant: 'Black and gold', image: 24, brandKey: 'ark-of-bones' },
      { name: 'Ark Logo Puffer Jacket', variant: 'Black with gold lining', image: 25, brandKey: 'ark-of-bones' },
    ],
  },
  {
    id: 'headwear',
    name: 'Headwear',
    note: 'Snapbacks, bucket hats, visors and beanies',
    products: [
      { name: 'DMF Snapback', variant: 'DMF side mark', image: 26, brandKey: 'domino-mother-fucker' },
      { name: 'DMF Snapback', variant: 'Ark of Bones side mark', image: 27, brandKey: 'domino-mother-fucker' },
      { name: 'DMF x Ark Snapback', variant: 'Black and gold', image: 28, brandKey: 'domino-mother-fucker' },
      { name: 'Big Bones Snapback', variant: 'Black and gold', image: 30, brandKey: 'big-six-bones' },
      { name: 'Ark Monogram Bucket Hat', variant: 'All-over black and gold', image: 31, brandKey: 'ark-of-bones' },
      { name: 'Ark Logo Bucket Hat', variant: 'Sand', image: 32, brandKey: 'ark-of-bones' },
      { name: 'Ark Logo Bucket Hat', variant: 'Black', image: 32, brandKey: 'ark-of-bones' },
      { name: 'Big Six Bones Visor', variant: 'Black and gray options', image: 33, brandKey: 'big-six-bones' },
      { name: 'Ark Cuffed Beanie', variant: 'Black', image: 34, brandKey: 'ark-of-bones' },
      { name: 'Ark Logo Beanie', variant: 'Sand', image: 35, brandKey: 'ark-of-bones' },
      { name: 'DMF Logo Beanie', variant: 'Black', image: 35, brandKey: 'domino-mother-fucker' },
      { name: 'Big Six Bones Beanie', variant: 'Ivory', image: 35, brandKey: 'big-six-bones' },
    ],
  },
  {
    id: 'drinkware',
    name: 'Drinkware',
    note: 'Branded pieces for events, travel and game night',
    products: [
      { name: 'Ark Monogram Soda Cup', variant: 'Black and gold', image: 36, brandKey: 'ark-of-bones' },
      { name: 'Ark Monogram Water Bottle', variant: 'Natural and black', image: 37, brandKey: 'ark-of-bones' },
      { name: 'DMF Wordmark Water Bottle', variant: 'Clear and black', image: 37, brandKey: 'domino-mother-fucker' },
      { name: 'Ark Monogram Travel Mug', variant: 'Patterned black and gold', image: 38, brandKey: 'ark-of-bones' },
      { name: 'Ark Logo Travel Mug', variant: 'Solid black and gold', image: 38, brandKey: 'ark-of-bones' },
      { name: 'DMF Travel Mug', variant: 'Black and gold', image: 39, brandKey: 'domino-mother-fucker' },
      { name: 'Ark Can Koozie', variant: 'Monogram pattern', image: 40, brandKey: 'ark-of-bones' },
    ],
  },
  {
    id: 'accessories',
    name: 'Accessories',
    note: 'Small-format brand goods and event credentials',
    products: [
      { name: 'Ark Round Keychain', variant: 'Black and gold', image: 41, brandKey: 'ark-of-bones' },
      { name: 'DMF Round Keychain', variant: 'Black and gold', image: 41, brandKey: 'domino-mother-fucker' },
      { name: 'DMF Contact Keychain', variant: 'Black and gold', image: 42, brandKey: 'domino-mother-fucker' },
      { name: 'Ark Monogram Key Fob', variant: 'Patterned black and gold', image: 42, brandKey: 'ark-of-bones' },
      { name: 'Ark Bottle Opener Keychain', variant: 'Black metal', image: 43, brandKey: 'ark-of-bones' },
      { name: 'Ark Tie Clip', variant: 'Brushed gold', image: 44, brandKey: 'ark-of-bones' },
      { name: 'Ark Money Clip', variant: 'Brushed gold', image: 44, brandKey: 'ark-of-bones' },
      { name: 'Ark iPhone Case', variant: 'Monogram black and gold', image: 45, brandKey: 'ark-of-bones' },
      { name: 'Ark Event ID Cards', variant: 'Custom credential system', image: 46, brandKey: 'ark-of-bones' },
      { name: 'Ark Event Lanyard', variant: 'Black and gold', image: 47, brandKey: 'ark-of-bones' },
      { name: 'Ark Logo Pins', variant: 'Round black and gold', image: 48, brandKey: 'ark-of-bones' },
    ],
  },
];

let catalogNumber = 0;

export const galleryDepartments = galleryDepartmentData.map((department) => ({
  ...department,
  products: department.products.map((product) => {
    catalogNumber += 1;
    const number = String(catalogNumber).padStart(2, '0');

    return {
      ...product,
      id: `gallery-${number}-${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
      brand: brandNames[product.brandKey],
      department: department.name,
      departmentId: department.id,
      catalogNumber: number,
      image: galleryImage(product.image),
      price: 'Ask for details',
      kind: 'gallery',
    };
  }),
}));

export const galleryProducts = galleryDepartments.flatMap((department) => department.products);

// Brand pages show products that can be purchased online.
export const products = officialProducts;

export const productFilters = [
  { label: 'All brands', value: 'all' },
  { label: BRAND.name, value: 'ark-of-bones' },
  { label: SUBSIDIARY_BRANDS.bigSixBones.name, value: SUBSIDIARY_BRANDS.bigSixBones.key },
  {
    label: SUBSIDIARY_BRANDS.dominoMotherFucker.name,
    value: SUBSIDIARY_BRANDS.dominoMotherFucker.key,
  },
];

export const departmentFilters = [
  { label: 'All categories', value: 'all' },
  ...galleryDepartments.map((department) => ({
    label: department.name,
    value: department.id,
  })),
];
