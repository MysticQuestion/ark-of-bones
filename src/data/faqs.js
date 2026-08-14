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
      'Ark of Bones is a domino entertainment company built around handcrafted table experiences, live and filmed competition, official-play systems, cultural storytelling, merchandise, and community programming.',
    link: { label: 'Read the company story', to: '/about' },
  },
  {
    category: 'Events',
    question: 'Where can I find upcoming events?',
    answer:
      'Visit the Events page for published dates and participation details. Follow the official Ark of Bones channels for newly announced programs and competitions.',
    link: { label: 'View events', to: '/events' },
  },
  {
    category: 'Events',
    question: 'Can Ark of Bones produce an event at my venue?',
    answer:
      'Yes. Venue and hosted-event inquiries begin with the location, expected audience, available technical infrastructure, timing, and the kind of experience you want to produce.',
    link: { label: 'Plan a venue experience', to: '/contact?inquiry=Tables%20%2F%20Venue%20Partnership' },
  },
  {
    category: 'Watch',
    question: 'Where can I watch Ark of Bones?',
    answer:
      'Visit the Watch page or follow Ark of Bones on YouTube, Instagram, TikTok, and Facebook for published footage, table features, competition, and cultural stories.',
    link: { label: 'Open the watch hub', to: '/watch' },
  },
  {
    category: 'Watch',
    question: 'Is a live game scheduled now?',
    answer:
      'The Watch page shows the current live status and keeps the archive available between broadcasts. When Ark of Bones is off air, recent footage and product context remain available.',
    link: { label: 'Check live status', to: '/watch' },
  },
  {
    category: 'Tables and Venue Partnerships',
    question: 'What makes an Ark of Bones table different from a standard domino table?',
    answer:
      'Ark of Bones treats the table as a media-ready playing surface. Depending on the build, the experience can incorporate player-view cameras, table sound, lighting and indicators, display or streaming integration, scoring or tracking technology, and custom finishes.',
    link: { label: 'Explore the table', to: '/tables' },
  },
  {
    category: 'Tables and Venue Partnerships',
    question: 'Can I order an Ark of Bones table for a private home?',
    answer:
      'Yes. Private builds can be scoped around room fit, finish, lighting, engraving, media features, typical group size, and the way the table will actually be used at home.',
    link: { label: 'Request private build details', to: '/contact?inquiry=Private%20%2F%20Home%20Table' },
  },
  {
    category: 'Tables and Venue Partnerships',
    question: 'How does table pricing work?',
    answer:
      'Pricing is quoted by scope because technology, finish work, branding, delivery, installation, and event support can vary materially between builds. Ark of Bones should confirm the build sheet, timeline, and included services before requesting a deposit.',
    link: { label: 'Start a build inquiry', to: '/tables' },
  },
  {
    category: 'Tables and Venue Partnerships',
    question: 'How long does a custom build take?',
    answer:
      'A custom build typically follows a 4–6 week production window after the final scope and deposit, subject to the configuration, material availability, delivery requirements, and any venue integration work.',
    link: { label: 'Review the build process', to: '/tables' },
  },
  {
    category: 'Tables and Venue Partnerships',
    question: 'What happens before I pay a deposit?',
    answer:
      'The goal is a clear written scope: dimensions and fit, materials and finishes, included technology, power and display requirements, customization, delivery or installation, service terms, timeline, and the deposit schedule for that specific build.',
    link: { label: 'Request build details', to: '/contact?inquiry=Private%20%2F%20Home%20Table' },
  },
  {
    category: 'Shop',
    question: 'Where does merchandise checkout happen?',
    answer:
      'Each published product links to its matching page in the official Ark of Bones Squarespace store. Product options, cart review, shipping, taxes, payment, and order confirmation are handled there.',
    link: { label: 'Shop published products', to: '/shop' },
  },
  {
    category: 'Shop',
    question: 'What happens after I place an order?',
    answer:
      'Squarespace sends the buyer an order confirmation and receipt while authorized Ark of Bones store managers receive the information needed to prepare the purchase. A fulfillment email follows when the order is released for delivery.',
    link: { label: 'Review the complete order journey', to: '/shop#commerce-journey-title' },
  },
  {
    category: 'Shop',
    question: 'How do I track a merchandise order?',
    answer:
      'Use the order-status link in the confirmation email. When carrier tracking is supplied during fulfillment, it is included in the fulfillment email.',
    link: { label: 'Contact merchandise support', to: '/contact?inquiry=Merchandise' },
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
      'No. The current guides are practical player primers. The Official Play program is the separate roadmap for standardized competition rules, ranking, sanctioning, and referee development.',
    link: { label: 'Explore official play', to: '/official-play' },
  },
  {
    category: 'Contact',
    question: 'How do I contact Ark of Bones?',
    answer: `Email ${CONTACT.email}, call ${CONTACT.phoneDisplay}, or use Work With Us to provide the location, timeline, use case, and scope needed for a useful response.`,
    link: { label: 'Work with Ark of Bones', to: '/contact' },
  },
];
