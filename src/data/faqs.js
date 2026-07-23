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
      'Ark of Bones is the parent entertainment company connecting live play, filmed competition, table experiences, cultural storytelling, merchandise, and community through dominoes.',
  },
  {
    category: 'Events',
    question: 'Where can I find upcoming events?',
    answer:
      'Verified public dates are published on the Events page. When no event is listed, follow the official social channels for the next announcement.',
  },
  {
    category: 'Events',
    question: 'Can Ark of Bones produce an event at my venue?',
    answer:
      'Use the Contact page and select Host an Event. Share the city, venue, audience, and event goals so the team can evaluate the opportunity.',
  },
  {
    category: 'Watch',
    question: 'Where can I watch Ark of Bones?',
    answer:
      'The Watch page gathers verified broadcast and video links. The official YouTube, Instagram, TikTok, and Facebook channels are also linked there.',
  },
  {
    category: 'Watch',
    question: 'Is a live game scheduled now?',
    answer:
      'The Watch page shows the current live status. If no verified broadcast is scheduled, it directs viewers to official channels without displaying a broken player.',
  },
  {
    category: 'Tables and Venue Partnerships',
    question: 'What is the Ark of Bones table experience?',
    answer:
      'It is an entertainment-centered domino setup designed to support live play, audience engagement, connected screens, and live streaming where the venue and production plan allow.',
  },
  {
    category: 'Tables and Venue Partnerships',
    question: 'Are table prices or delivery timelines published?',
    answer:
      'No. Contact Ark of Bones for a venue or event conversation. Pricing, availability, and technical requirements are not published on this site.',
  },
  {
    category: 'Shop',
    question: 'Where does merchandise checkout happen?',
    answer:
      'Product cards lead to the official Ark of Bones merchandise collection. Checkout occurs on the official external store.',
  },
  {
    category: 'Brands',
    question: `How does ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} relate to Ark of Bones?`,
    answer:
      'It is a subsidiary cultural, media, and merchandise identity within the Ark of Bones brand family.',
  },
  {
    category: 'Brands',
    question: 'What is Big Six Bones?',
    answer:
      'Big Six Bones is the competitive, game-centered subsidiary identity associated with American domino play, events, education, and community competition.',
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
