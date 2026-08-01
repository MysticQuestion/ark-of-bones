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
    link: { label: 'Read the company story', to: '/about' },
  },
  {
    category: 'Events',
    question: 'Where can I find upcoming events?',
    answer:
      'Visit the Events page for upcoming dates and ways to join. Follow Ark of Bones on social media for new announcements.',
    link: { label: 'View events', to: '/events' },
  },
  {
    category: 'Events',
    question: 'Can Ark of Bones produce an event at my venue?',
    answer:
      'Yes. Use the Contact page and select Host an Event. Share your city, venue, audience, and event goals to start the conversation.',
    link: { label: 'Request a hosted event', to: '/contact?inquiry=Host%20an%20Event' },
  },
  {
    category: 'Watch',
    question: 'Where can I watch Ark of Bones?',
    answer:
      'Visit the Watch page or follow Ark of Bones on YouTube, Instagram, TikTok, and Facebook.',
    link: { label: 'Open the watch hub', to: '/watch' },
  },
  {
    category: 'Watch',
    question: 'Is a live game scheduled now?',
    answer:
      'The Watch page shows when Ark of Bones is live and connects you to recent matches and clips between broadcasts.',
    link: { label: 'Check live status', to: '/watch' },
  },
  {
    category: 'Tables and Venue Partnerships',
    question: 'What is the Ark of Bones table experience?',
    answer:
      'It brings live play, audience engagement, connected screens, and streaming possibilities together around the table.',
    link: { label: 'Explore venue experiences', to: '/tables' },
  },
  {
    category: 'Tables and Venue Partnerships',
    question: 'How do I get table pricing and details?',
    answer:
      'Start a Tables / Venue Partnership inquiry and tell us about your space, city, audience, and event goals.',
    link: { label: 'Request table details', to: '/contact?inquiry=Tables%20%2F%20Venue%20Partnership' },
  },
  {
    category: 'Shop',
    question: 'Where does merchandise checkout happen?',
    answer:
      'Products with online pricing link directly to the Ark of Bones store for checkout.',
    link: { label: 'Shop published products', to: '/shop' },
  },
  {
    category: 'Brands',
    question: `How does ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} relate to Ark of Bones?`,
    answer:
      `It is the expressive Ark of Bones brand for attitude, humor, storytelling, media, and merchandise around the game.`,
    link: { label: `Enter ${SUBSIDIARY_BRANDS.dominoMotherFucker.name}`, to: SUBSIDIARY_BRANDS.dominoMotherFucker.path },
  },
  {
    category: 'Brands',
    question: 'What is Big Six Bones?',
    answer:
      'Big Six Bones is the competitive Ark of Bones brand for American domino play, events, education, and community competition.',
    link: { label: 'Enter Big Six Bones', to: SUBSIDIARY_BRANDS.bigSixBones.path },
  },
  {
    category: 'Game Guides',
    question: 'Which games are covered?',
    answer:
      'The resource center covers Dominoes, Big Six Bones, Spades, Euchre, Booray, Tonk, and Poker.',
    link: { label: 'Open the resource center', to: '/learn' },
  },
  {
    category: 'Game Guides',
    question: 'Are the guides official tournament rules?',
    answer:
      'No. They are practical player primers. House, event, and tournament rules should always be confirmed before play starts.',
    link: { label: 'Review the guides', to: '/learn' },
  },
  {
    category: 'Contact',
    question: 'How do I contact Ark of Bones?',
    answer: `Email ${CONTACT.email} or call ${CONTACT.phoneDisplay}. The Contact page also prepares a detailed inquiry for your email application.`,
    link: { label: 'Contact Ark of Bones', to: '/contact' },
  },
];
