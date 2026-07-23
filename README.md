# Ark of Bones Digital Headquarters

The Vite + React staging application for **Ark of Bones - The Home of Domino Entertainment**.

The site presents Ark of Bones as the parent entertainment company, with Domino Mother Fucker and Big Six Bones organized as subsidiary brands. Events, media, venue partnerships, merchandise, education, and business inquiries each have a dedicated route.

## Local Development

```bash
npm install
npm run dev
```

The local server uses Vite and is available on the URL printed in the terminal.

## Production Build

```bash
npm run build
npm run preview
```

The compiled site is written to `dist/`. `vercel.json` and `public/_redirects` provide single-page application fallbacks for Vercel and compatible static hosts.

## Routes

- `/` - parent-brand homepage
- `/events` - verified event listings and archive
- `/watch` - broadcasts and media archive
- `/tables` - table and venue partnerships
- `/shop` - verified merchandise catalog
- `/brands` - brand portfolio
- `/brands/domino-mother-fucker` - subsidiary brand page
- `/brands/big-six-bones` - subsidiary brand page
- `/about` - company story and mission
- `/contact` - business inquiry system
- `/learn` - seven-game education center
- `/faq` - categorized questions

Legacy public paths are redirected in `src/app/routes.jsx`.

## Content Management

Business identity, official brand names, navigation, contact information, and social links are centralized in `src/config/`. Structured events, videos, products, brands, games, and FAQs live in `src/data/`. Page components consume these records without owning the business data, so a future CMS or API can replace the local data modules without redesigning the routes.

The official subsidiary spelling and trademark treatment are controlled only in `src/config/brand.js`.

## Current Integration Status

- Events and videos intentionally show honest empty states until verified records are supplied.
- The inquiry form validates entries and opens a pre-addressed email because no form backend is configured.
- Merchandise links use the verified official collection URL; individual product checkout URLs should only be added when confirmed.
- Social sharing, robots, sitemap, canonical metadata, and route-specific metadata are included.
- No payment processing, event registration, video player, CMS, analytics, or CRM integration is configured in this repository.

## Deployment

Use the standard Vite settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node package install: `npm install` or `npm ci`

Before production launch, confirm the canonical domain, deploy target, inquiry form provider, privacy requirements, current event schedule, verified video IDs, product-specific checkout URLs, and any legally approved trademark styling.
