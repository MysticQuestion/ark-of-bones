export const CANONICAL_HOST = 'www.arkofbones.com';

/**
 * Indexable destinations only. Legacy redirects are intentionally excluded.
 * GitHub Pages fallbacks and public/sitemap.xml are generated from this list
 * together with the routes rendered in src/app/routes.jsx.
 */
export const canonicalRoutes = [
  { path: '/', priority: '1.0' },
  { path: '/tables', priority: '0.9' },
  { path: '/shop', priority: '0.9' },
  { path: '/coming-soon', priority: '0.5' },
  { path: '/about', priority: '0.7' },
  { path: '/contact', priority: '0.6' },
  { path: '/faq', priority: '0.5' },
  { path: '/brands', priority: '0.6' },
  { path: '/brands/domino-mother-fucker', priority: '0.5' },
  { path: '/brands/big-six-bones', priority: '0.5' },
  { path: '/around-the-table', priority: '0.4' },
  { path: '/library', priority: '0.5' },
];

export const legacyRedirects = [
  { path: '/events', to: '/coming-soon#events' },
  { path: '/watch', to: '/coming-soon#media' },
  { path: '/official-play', to: '/coming-soon#circuit' },
  { path: '/learn', to: '/coming-soon#circuit' },
  { path: '/partnerships', to: '/coming-soon#venue-programs' },
  { path: '/play', to: '/coming-soon#digital-game' },
  { path: '/shop/archive', to: '/shop#archive' },
  { path: '/domino-mother-fucker', to: '/brands/domino-mother-fucker' },
  { path: '/big-six-bones', to: '/brands/big-six-bones' },
  { path: '/home-live-soon', to: '/' },
  { path: '/events-1', to: '/coming-soon#events' },
  { path: '/events-2', to: '/coming-soon#events' },
  { path: '/events/event-one-dkrkk', to: '/coming-soon#events' },
  { path: '/watch-1', to: '/coming-soon#media' },
  { path: '/watch-2', to: '/coming-soon#media' },
  { path: '/videos-2', to: '/coming-soon#media' },
  { path: '/videos-2/watch-archives', to: '/coming-soon#media' },
  { path: '/videos-2/v/sunday-nights-with-aob', to: '/coming-soon#media' },
  { path: '/videos-2/v/aob-game-night', to: '/coming-soon#media' },
  { path: '/videos-2/v/anywhere', to: '/coming-soon#media' },
  { path: '/videos-2/v/who-is-aob', to: '/coming-soon#media' },
  { path: '/videos-2/v/game-night', to: '/coming-soon#media' },
  { path: '/merch', to: '/shop' },
  { path: '/merch-1', to: '/shop' },
  { path: '/merch-2', to: '/shop' },
  { path: '/merch-3', to: '/shop' },
  { path: '/merch/big-six-bones-merch', to: '/shop?brand=big-six-bones' },
  { path: '/merch/domino-mother-fucker-merch', to: '/shop?brand=domino-mother-fucker' },
];
