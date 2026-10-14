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
      'Ark of Bones celebrates dominoes, spirited competition, and the people who make every game worth remembering. Explore recorded play, game guides, original merchandise, and writing by founder Anthony Covington.',
    link: { label: 'Learn about Ark of Bones', to: '/about' },
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
