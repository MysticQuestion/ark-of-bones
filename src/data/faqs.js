import { CONTACT } from '../config/contact';

export const faqCategories = [
  'Tables',
  'Shop',
  'Contact',
];

export const faqs = [
  {
    category: 'Tables',
    question: 'How do I request a custom table?',
    answer:
      'Configure the table online and submit the specification to Anthony Covington. Pricing, production timing, and delivery are confirmed in the written quote.',
    link: { label: 'Open the table configurator', to: '/tables#build-studio' },
  },
  {
    category: 'Tables',
    question: 'What can I customize?',
    answer:
      'Current options include intended use, felt color, engraving, requested dimensions, and project notes. Additional construction details are confirmed during review.',
    link: { label: 'Review table options', to: '/tables#build-studio' },
  },
  {
    category: 'Tables',
    question: 'How are tables priced?',
    answer:
      'Each table is quoted individually according to dimensions, materials, customization, destination, and installation requirements.',
    link: { label: 'Request a quote', to: '/tables#build-studio' },
  },
  {
    category: 'Tables',
    question: 'Is payment required to submit a table request?',
    answer:
      'No payment is required to submit a table specification for review.',
    link: { label: 'Design a table', to: '/tables#build-studio' },
  },
  {
    category: 'Shop',
    question: 'Where do I purchase merchandise?',
    answer:
      'Available products are listed in the Ark of Bones Shop and link to the secure checkout page for product options and payment.',
    link: { label: 'Open the shop', to: '/shop' },
  },
  {
    category: 'Contact',
    question: 'How do I contact Ark of Bones?',
    answer: `General inquiries: ${CONTACT.email}. Table inquiries: ${CONTACT.tablesEmail}. Telephone: ${CONTACT.phoneDisplay}.`,
    link: { label: 'Open contact', to: '/contact' },
  },
];
