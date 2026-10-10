import { CONTACT } from '../config/contact';

export const faqCategories = [
  'Identity',
  'Watch',
  'Shop',
  'Contact',
];

export const faqs = [
  {
    category: 'Identity',
    question: 'What is Ark of Bones?',
    answer:
      'Ark of Bones is a domino culture platform centered on live and recorded play, events, game education, official merchandise, publishing, and community connection.',
    link: { label: 'Learn about Ark of Bones', to: '/about' },
  },
  {
    category: 'Identity',
    question: 'Does Ark of Bones sell or customize domino tables?',
    answer:
      'No. This app does not advertise custom table builds, table orders, table financing, engraving packages, or made-to-order furniture. It only represents current confirmed public offerings.',
    link: { label: 'View the current site focus', to: '/' },
  },
  {
    category: 'Watch',
    question: 'Where can I watch Ark of Bones content?',
    answer:
      'Use the Around the Table section and official social channels for live play, recorded matches, highlights, and community media.',
    link: { label: 'Open Around the Table', to: '/around-the-table' },
  },
  {
    category: 'Shop',
    question: 'Where do I purchase merchandise?',
    answer:
      'Available products are listed in the Ark of Bones Shop and link to secure checkout pages for official apparel and accessories.',
    link: { label: 'Open the shop', to: '/shop' },
  },
  {
    category: 'Contact',
    question: 'How do I contact Ark of Bones?',
    answer: `General inquiries: ${CONTACT.email}. Telephone: ${CONTACT.phoneDisplay}.`,
    link: { label: 'Open contact', to: '/contact' },
  },
];
