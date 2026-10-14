import cover from '../assets/library/origins-cover.js';

/**
 * One verified Anthony Covington title, in the two editions Lulu publishes.
 * A second title was not found in the repository or on the publisher listing.
 * The paperback listing does not print an ISBN. The ebook listing prints 9798998832611.
 */
export const books = [
  {
    id: 'origins-evolution-cultural-legacy',
    title: 'Ark of Bones: Origins, Evolution, and Cultural Legacy of Dominoes, Spades, Euchre, and Booray',
    author: 'Anthony Covington',
    cover,
    coverWidth: 384,
    coverHeight: 576,
    coverAlt: 'Cover of Ark of Bones by Anthony Covington. Gold dominoes and card suits on black.',
    summary: 'A cultural history of dominoes, spades, euchre, and booray by Anthony Covington.',
    editions: [
      {
        format: 'Paperback',
        published: 'May 8, 2025',
        pages: '28',
        binding: 'Paperback, saddle stitch',
        dimensions: 'US Trade, 6 × 9 in',
        language: 'English',
        isbn: 'Not printed on the paperback listing',
        href: 'https://www.lulu.com/shop/anthony-covington/ark-of-bones-origins-evolution-and-cultural-legacy-of-dominoes-spades-euchre-and-booray/paperback/product-zm72q7d.html',
        linkLabel: 'View the paperback',
      },
      {
        format: 'Ebook',
        published: 'May 8, 2025',
        pages: 'Not stated on the listing',
        binding: 'EPUB',
        language: 'English',
        isbn: '9798998832611',
        href: 'https://www.lulu.com/shop/anthony-covington/ark-of-bones/ebook/product-e7weppg.html',
        linkLabel: 'View the ebook',
      },
    ],
  },
];
