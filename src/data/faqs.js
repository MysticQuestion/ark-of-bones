import { CONTACT } from '../config/contact';
import { SUBSIDIARY_BRANDS } from '../config/brand';

export const faqCategories = [
  'Ark of Bones',
  'Events',
  'Watch',
  'Tables',
  'Shop',
  'Brands',
  'Library',
  'Contact',
];

export const faqs = [
  {
    category: 'Ark of Bones',
    question: 'What is Ark of Bones?',
    answer:
      'Ark of Bones builds custom domino tables and sells a small published collection of goods. Digital play, events, and competition tools are in development and are not offered as live services.',
    link: { label: 'Read the company note', to: '/about' },
  },
  {
    category: 'Events',
    question: 'Where can I find upcoming events?',
    answer:
      'No public event calendar is published. Event tools are described on the Coming Soon page and should not be read as confirmed dates or registration.',
    link: { label: 'See the events note', to: '/coming-soon#events' },
  },
  {
    category: 'Events',
    question: 'Can Ark of Bones produce an event at my venue?',
    answer:
      'There is no operating event program to book from this site. If you have a specific table or hospitality request, send the city, setting, and what you need quoted.',
    link: { label: 'Send an inquiry', to: '/contact?inquiry=Venue%20%2F%20Commercial%20Table' },
  },
  {
    category: 'Watch',
    question: 'Where can I watch Ark of Bones?',
    answer:
      'There is no live watch hub. Follow the official YouTube, Instagram, TikTok, and Facebook accounts for anything those channels actually publish.',
    link: { label: 'See the media note', to: '/coming-soon#media' },
  },
  {
    category: 'Watch',
    question: 'Is a live game scheduled now?',
    answer:
      'No. A broadcast schedule is not part of the current site.',
    link: { label: 'See what is in development', to: '/coming-soon#media' },
  },
  {
    category: 'Tables',
    question: 'What is specified on a current Ark of Bones table?',
    answer:
      'The studio covers intended use, felt, engraving position and text, and requested dimensions. Current reference builds include a felt play field, recessed illuminated racks, and a padded rail. Finish, price, timing, and delivery are confirmed only in the written quote.',
    link: { label: 'Open the table studio', to: '/tables#build-studio' },
  },
  {
    category: 'Tables',
    question: 'Can I order a table for a private home?',
    answer:
      'Yes. Choose Private / Home in the studio, add the room and delivery notes you already know, and send the specification to Anthony. It is a quote request, not a checkout.',
    link: { label: 'Configure a home table', to: '/tables#build-studio' },
  },
  {
    category: 'Tables',
    question: 'How does table pricing work?',
    answer:
      'This site does not publish a table price. Anthony reviews the specification and sends a written quote before any deposit.',
    link: { label: 'Start a build request', to: '/tables#build-studio' },
  },
  {
    category: 'Tables',
    question: 'How long does a custom build take?',
    answer:
      'A lead time is not published as a standard window. Timing is confirmed in the written quote after materials, configuration, and delivery conditions are reviewed.',
    link: { label: 'Review the build notes', to: '/tables' },
  },
  {
    category: 'Tables',
    question: 'What happens before I pay a deposit?',
    answer:
      'You receive a written scope for the specific build: dimensions, materials, engraving, delivery conditions, price, and timing. No payment is taken from the table studio.',
    link: { label: 'Send the specification', to: '/tables#build-studio' },
  },
  {
    category: 'Shop',
    question: 'Where does merchandise checkout happen?',
    answer:
      'Each of the six published products links to its matching Squarespace page. Options, cart, shipping, taxes, and payment are handled there. Archive designs are requests, not stocked inventory.',
    link: { label: 'Shop current products', to: '/shop' },
  },
  {
    category: 'Shop',
    question: 'What happens after I place an order?',
    answer:
      'Squarespace sends the order confirmation. Fulfillment email follows from that store when the order is released.',
    link: { label: 'Open the shop', to: '/shop' },
  },
  {
    category: 'Shop',
    question: 'How do I track a merchandise order?',
    answer:
      'Use the order-status link in the Squarespace confirmation email. Carrier tracking, when supplied, is included in the fulfillment email.',
    link: { label: 'Merchandise question', to: '/contact?inquiry=Merchandise' },
  },
  {
    category: 'Brands',
    question: `How does ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} relate to Ark of Bones?`,
    answer:
      'It is the expressive Ark of Bones label used on merchandise and brand language. It is not a separate store.',
    link: { label: `Enter ${SUBSIDIARY_BRANDS.dominoMotherFucker.name}`, to: SUBSIDIARY_BRANDS.dominoMotherFucker.path },
  },
  {
    category: 'Brands',
    question: 'What is Big Six Bones?',
    answer:
      'Big Six Bones is an Ark of Bones label for American domino play and related merchandise. It is not a live sanctioning body or event calendar.',
    link: { label: 'Enter Big Six Bones', to: SUBSIDIARY_BRANDS.bigSixBones.path },
  },
  {
    category: 'Library',
    question: 'Which books are listed?',
    answer:
      'The library lists one Anthony Covington title: Ark of Bones: Origins, Evolution, and Cultural Legacy of Dominoes, Spades, Euchre, and Booray. Lulu publishes it as a paperback and as an ebook. The ebook ISBN is 9798998832611. The paperback listing does not print an ISBN. A second title is not listed.',
    link: { label: 'Open the library', to: '/library' },
  },
  {
    category: 'Contact',
    question: 'How do I contact Ark of Bones?',
    answer: `Email ${CONTACT.email}, call ${CONTACT.phoneDisplay}, or send a table specification to ${CONTACT.tablesEmail}.`,
    link: { label: 'Open contact', to: '/contact' },
  },
];
