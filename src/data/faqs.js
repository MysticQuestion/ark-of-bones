import { CONTACT } from '../config/contact';
import { SUBSIDIARY_BRANDS } from '../config/brand';

export const faqCategories = ['Organization', 'Events', 'Film', 'Tables', 'Shop', 'Official Play', 'Contact'];

export const faqs = [
  {
    category: 'Organization',
    question: 'What is Ark of Bones?',
    answer: 'Ark of Bones publishes domino events, films, competition records, table documentation, and merchandise.',
    link: { label: 'Company record', to: '/about' },
  },
  {
    category: 'Events',
    question: 'Is an event currently scheduled?',
    answer: 'No public date is confirmed. Published dates will appear in the event calendar.',
    link: { label: 'Event calendar', to: '/events' },
  },
  {
    category: 'Events',
    question: 'How do I submit an event inquiry?',
    answer: 'Use the Events category on the contact form and include the city, venue, date, and proposed format.',
    link: { label: 'Event inquiry', to: '/contact?inquiry=Events' },
  },
  {
    category: 'Film',
    question: 'Where is Ark of Bones footage published?',
    answer: 'The Watch archive links to films published on the official Ark of Bones YouTube channel.',
    link: { label: 'Film archive', to: '/watch' },
  },
  {
    category: 'Tables',
    question: 'Are table specifications published?',
    answer: 'A photographic construction record is public. Dimensions, electrical requirements, delivery area, lead time, warranty, and price are not published.',
    link: { label: 'Table record', to: '/tables' },
  },
  {
    category: 'Tables',
    question: 'How do I request current table information?',
    answer: 'Use the Tables category on the contact form. Written confirmation is required before relying on commercial or technical terms.',
    link: { label: 'Table inquiry', to: '/contact?inquiry=Tables' },
  },
  {
    category: 'Shop',
    question: 'Which products are available?',
    answer: 'The Shop lists six published products with current displayed prices and direct product links.',
    link: { label: 'Published catalogue', to: '/shop' },
  },
  {
    category: 'Shop',
    question: 'Where does checkout happen?',
    answer: 'Each published product opens its matching Squarespace product page for options and checkout.',
    link: { label: 'Shop', to: '/shop' },
  },
  {
    category: 'Shop',
    question: 'Are archive designs available to buy?',
    answer: 'No. Archive records are labeled as concepts and remain separate from the published catalogue.',
    link: { label: 'Design archive', to: '/shop/archive' },
  },
  {
    category: 'Official Play',
    question: 'Are official rules and rankings active?',
    answer: 'No canonical rules version is published, and rankings are not active.',
    link: { label: 'Official Play status', to: '/official-play' },
  },
  {
    category: 'Organization',
    question: `How do ${SUBSIDIARY_BRANDS.bigSixBones.name} and ${SUBSIDIARY_BRANDS.dominoMotherFucker.shortName} relate to Ark of Bones?`,
    answer: `${SUBSIDIARY_BRANDS.bigSixBones.name} is the game identity. ${SUBSIDIARY_BRANDS.dominoMotherFucker.shortName} is a merchandise and media identity. Ark of Bones is the parent organization.`,
    link: { label: 'Brand register', to: '/brands' },
  },
  {
    category: 'Contact',
    question: 'How do I contact Ark of Bones?',
    answer: `Email ${CONTACT.email}, call ${CONTACT.phoneDisplay}, or use the structured contact form.`,
    link: { label: 'Contact', to: '/contact' },
  },
];
