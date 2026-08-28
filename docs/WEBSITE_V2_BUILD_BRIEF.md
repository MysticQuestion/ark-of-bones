# Ark of Bones Website v2 — Build Brief

## Objective
Rebuild the public headquarters so Ark reads as a credible cultural competition and entertainment institution with commercial discipline. Preserve factual capabilities from the current production system while replacing elementary presentation, stale copy, repetitive layouts and unsupported claims.

## Non-negotiable product principles
1. Evidence before aspiration.
2. Editorial hierarchy before component abundance.
3. Real photography/film before decorative graphics.
4. Mobile is a first-class publication surface.
5. Accessibility, semantic HTML and performance are design requirements.
6. No fake social proof or placeholder metrics in production.
7. Roadmap concepts carry explicit state labels.
8. Promotion is structural: every event, result, story, rules page and product is a durable share/search destination.

## Homepage concept
Hero line candidate: **Dominoes deserve a major stage.**
Supporting copy: **Ark of Bones produces competition, media and the systems required to record serious play.**
Primary actions: `Enter Official Play` / `See What’s Live`.

Alternative institutional line: **The table is the stage. The game is the institution.**

Do not stack slogans. Pick one proposition per surface.

## Design system
### Layout
- 12-column desktop editorial grid.
- max reading width 70–76ch.
- generous section spacing; density increases intentionally on data/results surfaces.
- square/low-radius UI by default; pills only for statuses/tags.

### Type
- Display: high-authority serif or condensed editorial display family.
- UI/body: neutral grotesk/sans with excellent numerals.
- Tabular numerals for scores, dates and rankings.
- Avoid oversized type as a substitute for composition.

### Surfaces
- primary dark institutional surface;
- editorial light surface for long-form reading;
- restrained accent derived from the existing Ark identity;
- photographs retain natural tonal range; avoid indiscriminate duotone filters.

### Motion
- 150–350ms interface transitions.
- match footage and score motion may be more expressive.
- respect `prefers-reduced-motion`.
- no perpetual background animation.

## Core reusable components
- Masthead / institutional navigation
- Live status strip
- Editorial hero
- Event fixture
- Result card
- Scoreline
- Player identity block
- Ranking table
- Rules version notice
- Program status (`Live`, `Pilot`, `Development`, `Research`)
- Film/story feature
- Photo essay module
- Partner proof block
- Product specification table
- Press fact block
- Newsletter module
- Structured footer

## Data/content model
Treat content as records rather than hard-coded marketing sections.

### Event
id, slug, title, status, start/end, venue, city, format, ruleset, registration URL, participants, result IDs, media IDs, partner IDs.

### Match/result
id, event, players/teams, score, ruleset version, verification status, official/referee, played_at, footage, correction history.

### Player
id, display name, location/club, verified results, record, ranking state, profile media, consent state.

### Ruleset
id, game, version, effective date, status, source/provenance, credited contributors, changelog.

### Story/media
id, type, headline, dek, author/producer, date, subjects, event linkage, media, rights state, SEO fields.

### Partner
id, type, name, program, permission to display logo/name, evidence/case study.

## SEO / discoverability
- unique title/meta for every canonical page;
- Organization schema;
- Event schema for verified public events;
- Product schema only for actual purchasable products;
- VideoObject where Ark hosts/indexes real video;
- breadcrumbs on deep editorial/system pages;
- sitemap and robots controls;
- OpenGraph/Twitter cards with intentional art direction;
- canonical URLs;
- descriptive image alt text;
- internal linking between event → result → player → ruleset → media.

## Conversion architecture
No generic `Learn More` proliferation.

Primary conversions:
- Attend/register
- Host a program/event
- Become a venue/organizational partner
- Sponsor a property
- Enter/learn Official Play
- Watch a match/story
- Purchase a verified product
- Join the mailing list

Each conversion receives a dedicated landing context rather than a universal contact form.

## Promotion engine
For every completed flagship event generate:
1. canonical event page;
2. verified results;
3. match/replay pages as available;
4. editorial recap;
5. 3–8 short social cuts from owned footage;
6. photography package;
7. player/profile updates;
8. partner/sponsor recap metrics;
9. newsletter module;
10. internal links into rules, rankings and next event.

This makes the website the source system and social channels distribution endpoints.

## Build phases
### Phase 0 — Canon audit
Resolve table sales/customization policy, live offerings, brands, rights, event claims, merch inventory and partner permissions.

### Phase 1 — Institutional shell
Navigation, homepage, About, Partners, Contact, Journal shell, design tokens, accessibility baseline, SEO foundations.

### Phase 2 — Competition
Play/Official Play, rules registry, event model, results model, player profiles. Rankings remain hidden until enough verified data exists.

### Phase 3 — Media
Watch index, video/story templates, match recaps, photo essays, structured rights metadata.

### Phase 4 — Commerce
Tables and Shop rebuilt around verified inventory/configuration and actual fulfillment policy.

### Phase 5 — Growth instrumentation
Privacy-conscious analytics, conversion events, newsletter attribution, event acquisition source, replay attach rate and partner reporting.

## Acceptance criteria
- No stale legacy FAQ language survives by accident.
- No unsupported financing/shipping/customization claims.
- No homepage section exists solely to repeat positioning.
- All roadmap systems are state-labeled.
- Core pages pass keyboard navigation and contrast review.
- Core Web Vitals are treated as release gates.
- Site is coherent without animation.
- Search/social metadata are production-ready.
- A venue director, serious player, journalist and sponsor can each understand Ark's proposition and find their next action in under two minutes.
