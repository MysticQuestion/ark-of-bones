# Ark of Bones Digital Headquarters

The Vite + React production application for **Ark of Bones — The Home of Domino Entertainment**.

The site presents Ark of Bones as an entertainment and competition company rather than a furniture catalog. The current public model centers live play, media, official-play infrastructure, venue partnerships, merchandise, family legacy sessions, and community participation.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The compiled site is written to `dist/`. `vercel.json`, `public/_redirects`, and the GitHub Pages workflow provide SPA fallbacks for supported hosts.

## Primary Routes

- `/` — reduced editorial homepage
- `/events` — verified event listings and archive
- `/watch` — broadcasts and media archive
- `/official-play` — rankings, sanctioned events, rules, referee certification, scoring technology, and pilot strategy
- `/tables` — venue and table experience
- `/shop` — published merchandise only
- `/shop/archive` — separate merchandise concept archive
- `/around-the-table` — family legacy-session product
- `/about` — founder, cultural context, operating principles, and business direction
- `/contact` — partnerships, pilots, bookings, and program inquiries
- `/brands` — subsidiary brand portfolio
- `/learn` — game education center
- `/faq` — categorized questions

Legacy Squarespace paths remain redirected in `src/app/routes.jsx`.

## Editorial Standard

The site is intentionally moving away from repetitive component grids and over-explanation. Public pages should follow four tests:

1. Does the element introduce necessary information?
2. Does it provide evidence rather than repeat a claim?
3. Does it make the next action clearer?
4. If none of the above are true, can it be removed or moved deeper into the site?

## Commercial Direction

The current roadmap treats the physical table as a customer-acquisition and production surface, while recurring value is expected to come from official-play infrastructure: rules, rankings, event sanctioning, referee certification, scoring technology, data, media, sponsorship, memberships or participation programs, and partner relationships.

The pilot is designed to measure four numbers before wider expansion:

- cost per player acquired
- replay attach rate
- editing minutes per sellable asset
- sponsor renewal rate

The public roadmap does not include dual-currency or cash-redeemable sweepstakes mechanics and does not assume territory sales before a working unit-economic model exists.

## Cultural Participation

Dominoes and spades predate Ark of Bones and belong to many Black American, Caribbean, Latino, military, family, neighborhood, and social traditions. Future official-play programs are being designed to document credited house-rule contributions, feature experienced players and elders as authorities, and create transparent participation for clubs, hosts, and community partners.

## Current Integration Status

- GitHub Pages is the production host for the public headquarters.
- `www.arkofbones.com` is the canonical domain.
- Merchandise checkout remains on the existing Squarespace Commerce store through exact product links.
- The Shop page separates six published products from the larger concept archive.
- The inquiry form currently validates entries and opens a prepared email; a persistent CRM/form backend still needs to be connected.
- No real-money wagering or sweepstakes system is implemented.
- Automated scoring, national rankings, sanctioning, and referee certification are roadmap/pilot systems and are not represented as mature production services.

## Deployment

The production workflow runs from `main` using GitHub Actions:

- install: `npm ci`
- build: `npm run build`
- output: `dist`
- canonical hostname: `www.arkofbones.com`

Before major launches, verify HTTPS, route fallbacks, merchandise deep links, inquiry handling, mobile rendering, and current public claims.
