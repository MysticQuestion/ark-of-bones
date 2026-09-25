# Ark of Bones

Vite + React site for **Ark of Bones**. The public offer is custom domino tables first, current goods second, and unfinished systems kept on Coming Soon.

Canonical site: [https://www.arkofbones.com](https://www.arkofbones.com)

## What the site actually does

- **Tables** (`/tables`) — configure felt, engraving, intended use, and dimensions, preview the build, and open a specification addressed to `anthony@arkofbones.com`. Tables are quotes, not cart items. Price, lead time, and delivery are not published.
- **Shop** (`/shop`) — six published products with exact Squarespace Commerce links. The design archive on the same page is a request list, not stocked inventory.
- **Coming Soon** (`/coming-soon`) — digital play, events, Ark Circuit, media, and organizer tools. These are not live services.
- **Library** (`/library`) — verified Anthony Covington title only.
- **About, Contact, FAQ, Brands, Around the Table** — supporting pages. Contact is an inquiry desk, not a hiring page.

Approved public addresses:

- `info@arkofbones.com`
- `anthony@arkofbones.com`
- `(951) 599-0214`

## Routes

Canonical paths live in `src/config/publicRoutes.js` and must also be rendered in `src/app/routes.jsx`. Legacy redirects live in the same file and are mapped by the router.

`npm run build` writes GitHub Pages `index.html` fallbacks for every live route, legacy path, and merchandise deep link, plus `dist/404.html`, `dist/CNAME`, and `sitemap.xml`. Do not keep a second handwritten route list in the Pages workflow.

Primary navigation: Home, Tables, Shop, Coming Soon, About.

## Local development

Node.js **22.x** is the production runtime (GitHub Pages and `.nvmrc`).

```bash
npm ci
npm run dev
```

## Production build

```bash
npm ci
npm run build
npm run preview
```

`npm run build` ends with the public-copy audit. The audit must stay enabled. Approved Ark addresses are only `info@arkofbones.com` and `anthony@arkofbones.com`.

## Hosting

- **GitHub Pages** is production. Workflow: `.github/workflows/pages.yml`, branch `main`.
- **www.arkofbones.com** is the canonical hostname. The apex redirects to www.
- **Vercel** is for preview builds and diagnostics. It is not the public production host. Do not point the public domain at Vercel unless that hosting decision is explicitly changed.
- **Squarespace Commerce** (`https://bugle-marigold-6r8e.squarespace.com/merch`) remains merchandise checkout.

The high-resolution logo source remains `src/assets/brand/aob-logo-4k.webp`. Pages should use the 1440 hero file and the small mark, not the 4K file.

## Library records still needed

Listed: *Ark of Bones: Origins, Evolution, and Cultural Legacy of Dominoes, Spades, Euchre, and Booray* by Anthony Covington (Lulu, May 8, 2025, 28 pages, paperback saddle stitch).

Not published because they could not be verified:

- a second title
- an ISBN
- a rights-cleared cover file in this repository

## Editorial limit

Use words for specification, evidence, or an action. Do not describe unfinished systems as live rankings, sanctioning, events, or broadcasts. Do not invent table prices, lead times, or delivery coverage.
