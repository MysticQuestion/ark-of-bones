# Ark of Bones Digital Headquarters

The Vite + React production application for **Ark of Bones — The Home of Domino Entertainment**.

This is the modern digital headquarters that replaces the original Squarespace brochure site. It presents Ark of Bones as the parent entertainment company, with Domino Mother Fucker and Big Six Bones as subsidiary brands. Events, media, venue partnerships, merchandise, education, and business inquiries each have a dedicated route under one direct, minimal visual system.

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
- `/shop` - six verified store listings plus 53 individually presented merchandise concepts
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
- The Shop route clearly separates six verified, priced store listings from 53 merchandise presentation concepts.
- Concept cards do not link to checkout and are labeled as pending pricing, production, sizing, and availability approval.
- Merchandise links use the verified official collection URL; individual product checkout URLs should only be added when confirmed.
- Social sharing, robots, sitemap, canonical metadata, and route-specific metadata are included.
- No payment processing, event registration, video player, CMS, analytics, or CRM integration is configured in this repository.

## Deployment

Use the standard Vite settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node package install: `npm install` or `npm ci`
- SPA fallback: `vercel.json` and `public/_redirects`

### Production (canonical domain)

- **Canonical URL:** `https://www.arkofbones.com`
- **Production host:** Vercel project `ark-of-bones`
- **Staging preview:** GitHub Pages from `codex/staging-digital-headquarters` at `https://mysticquestion.github.io/ark-of-bones/` (noindex)
- **Git branch:** `main` is production source of truth

### Domain cutover from Squarespace

`arkofbones.com` currently uses Squarespace DNS and hosts the legacy brochure site. The React headquarters cannot run inside Squarespace page templates — the domain must point at Vercel.

1. Keep merch checkout on the Squarespace Commerce store (or map to `shop.arkofbones.com` later).
2. Attach `arkofbones.com` and `www.arkofbones.com` on the Vercel project.
3. In Squarespace Domains → DNS, replace only the website A/CNAME records with Vercel’s values. **Do not remove Google Workspace MX records.**
4. After DNS propagates, verify routes, OG tags, and shop deep links.
5. Unpublish the Squarespace marketing site (or leave it disconnected) so it no longer competes with the new headquarters.

Before launch checklist: inquiry form provider, privacy policy, current event schedule, product checkout URLs, and trademark styling.
