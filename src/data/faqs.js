import { CONTACT } from '../config/contact';
import { SUBSIDIARY_BRANDS } from '../config/brand';

export const faqCategories = [
  'Ark of Bones',
  'Events',
  'Watch',
  'Tables and Venue Partnerships',
  'Shop',
  'Brands',
  'Game Guides',
  'Contact',
];

export const faqs = [
  {
    category: 'Ark of Bones',
    question: 'What is Ark of Bones?',
    answer:
      'Ark of Bones is the home of domino entertainment: live play, filmed competition, table experiences, cultural storytelling, merchandise, and community.',
  },
  {
    category: 'Events',
    question: 'Where can I find upcoming events?',
    answer:
      'Visit the Events page for upcoming dates and ways to join. Follow Ark of Bones on social media for new announcements.',
  },
  {
    category: 'Events',
    question: 'Can Ark of Bones produce an event at my venue?',
    answer:
      'Yes. Use the Contact page and select Host an Event. Share your city, venue, audience, and event goals to start the conversation.',
  },
  {
    category: 'Watch',
    question: 'Where can I watch Ark of Bones?',
    answer:
      'Visit the Watch page or follow Ark of Bones on YouTube, Instagram, TikTok, and Facebook.',
  },
  {
    category: 'Watch',
    question: 'Is a live game scheduled now?',
    answer:
      'The Watch page shows when Ark of Bones is live and connects you to recent matches and clips between broadcasts.',
  },
  {
    category: 'Tables and Venue Partnerships',
    question: 'What is the Ark of Bones table experience?',
    answer:
      'It brings live play, audience engagement, connected screens, and streaming possibilities together around the table.',
  },
  {
    category: 'Tables and Venue Partnerships',
    question: 'How do I get table pricing and details?',
    answer:
      'Start a Tables / Venue Partnership inquiry and tell us about your space, city, audience, and event goals.',
  },
  {
    category: 'Shop',
    question: 'Where does merchandise checkout happen?',
    answer:
      'Products with online pricing link directly to the Ark of Bones store for checkout.',
  },
  {
    category: 'Brands',
    question: `How does ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} relate to Ark of Bones?`,
    answer:
      `It is the expressive Ark of Bones brand for attitude, humor, storytelling, media, and merchandise around the game.`,
  },
  {
    category: 'Brands',
    question: 'What is Big Six Bones?',
    answer:
      'Big Six Bones is the competitive Ark of Bones brand for American domino play, events, education, and community competition.',
  },
  {
    category: 'Game Guides',
    question: 'Which games are covered?',
    answer:
      'The resource center covers Dominoes, Big Six Bones, Spades, Euchre, Booray, Tonk, and Poker.',
  },
  {
    category: 'Game Guides',
    question: 'Are the guides official tournament rules?',
    answer:
      'No. They are practical player primers. House, event, and tournament rules should always be confirmed before play starts.',
  },
  {
    category: 'Contact',
    question: 'How do I contact Ark of Bones?',
    answer: `Email ${CONTACT.email} or call ${CONTACT.phoneDisplay}. The Contact page also prepares a detailed inquiry for your email application.`,
  },
];
