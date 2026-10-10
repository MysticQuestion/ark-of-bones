export const CANONICAL_HOST = 'www.arkofbones.com';

/**
 * Indexable destinations only. Legacy redirects are intentionally excluded.
 * GitHub Pages fallbacks and public/sitemap.xml are generated from this list
 * together with the routes rendered in src/app/routes.jsx.
 */
export const canonicalRoutes = [
  { path: '/', priority: '1.0' },
  { path: '/around-the-table', priority: '0.9' },
  { path: '/shop', priority: '0.9' },
  { path: '/library', priority: '0.8' },
  { path: '/about', priority: '0.7' },
  { path: '/contact', priority: '0.6' },
  { path: '/faq', priority: '0.5' },
  { path: '/brands', priority: '0.6' },
  { path: '/brands/domino-mother-fucker', priority: '0.5' },
  { path: '/brands/big-six-bones', priority: '0.5' },
  { path: '/coming-soon', priority: '0.4' },
  { path: '/tables', priority: '0.1' },
];

export const legacyRedirects = [
  { path: '/events', to: '/coming-soon#events' },
  { path: '/watch', to: '/around-the-table' },
  { path: '/official-play', to: '/coming-soon#circuit' },
  { path: '/learn', to: '/library' },
  { path: '/partnerships', to: '/coming-soon#venue-programs' },
  { path: '/play', to: '/coming-soon#digital-game' },
  { path: '/shop/archive', to: '/shop#archive' },
  { path: '/domino-mother-fucker', to: '/brands/domino-mother-fucker' },
  { path: '/big-six-bones', to: '/brands/big-six-bones' },
  { path: '/home-live-soon', to: '/' },
  { path: '/events-1', to: '/coming-soon#events' },
  { path: '/events-2', to: '/coming-soon#events' },
  { path: '/events/event-one-dkrkk', to: '/coming-soon#events' },
  { path: '/watch-1', to: '/around-the-table' },
  { path: '/watch-2', to: '/around-the-table' },
  { path: '/videos-2', to: '/around-the-table' },
  { path: '/videos-2/watch-archives', to: '/around-the-table' },
  { path: '/videos-2/v/sunday-nights-with-aob', to: '/around-the-table' },
  { path: '/videos-2/v/aob-game-night', to: '/around-the-table' },
  { path: '/videos-2/v/anywhere', to: '/around-the-table' },
  { path: '/videos-2/v/who-is-aob', to: '/around-the-table' },
  { path: '/videos-2/v/game-night', to: '/around-the-table' },
  { path: '/merch', to: '/shop' },
  { path: '/merch-1', to: '/shop' },
  { path: '/merch-2', to: '/shop' },
  { path: '/merch-3', to: '/shop' },
  { path: '/merch/big-six-bones-merch', to: '/shop?brand=big-six-bones' },
  { path: '/merch/domino-mother-fucker-merch', to: '/shop?brand=domino-mother-fucker' },
];
