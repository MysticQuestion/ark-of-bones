# Ark of Bones

Premium domino culture, game education, and official table goods.

## What was added

This repository was empty when initialized, so the site was seeded as a Vite + React production-ready single-page application.

### Education section

The app includes detailed how-to-play guides for:

- Dominoes
- Big Six Bones
- Spades
- Euchre
- Booray
- Tonk
- Poker

Each guide includes objective, setup, play sequence, scoring, strategy, and etiquette notes.

### Product section

The product cards are wired to the live Ark of Bones shop path and structured for the currently visible product catalog:

- Ark of Bones Embroidered Sweatshirt
- Big Six Bones Long Sleeve
- Domino Mother Fucker Graphic Tee
- Big Six Bones Short Sleeve Tee
- Domino Mother Fucker Embroidered Beanie
- Ark of Bones Beanie

The live product-image CDN URLs were not reliably exposed through the available tooling. The code contains a dedicated `image` field for each product in `src/main.jsx`. Replace each empty string with the exact arkofbones.com/Squarespace CDN image URL when available.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Connect this repository to Vercel or Lovable/GitHub import, then use the standard Vite build settings:

- Build command: `npm run build`
- Output directory: `dist`
