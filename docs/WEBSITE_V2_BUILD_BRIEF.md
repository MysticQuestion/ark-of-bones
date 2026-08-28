# Ark of Bones Website v2 — Build Brief

## Objective
Rebuild the site with stronger hierarchy, better typography, better use of imagery, cleaner information architecture, and less copy.

## Editorial rule
Do not explain what the interface can show.

Use words for information, not atmosphere.

Default to:
- image
- film
- score
- date
- city
- player name
- event name
- product specification
- rule
- status
- caption
- direct action

Avoid:
- marketing paragraphs
- mission-heavy homepage copy
- pitch-deck language
- slogan stacking
- “not X, but Y” language
- “more than” language
- “where X meets Y” language
- “X + Y = Z” language
- generic aspirational copy
- filler text added only to balance a layout

## Homepage
Recommended opening:

`ARK OF BONES`

Full-bleed live-play image or film.

Navigation remains visible.

Below the fold, show current information rather than explanation:

`NEXT EVENT`
Event name
Date
City
`REGISTER`

Then:
- latest result
- current film or match
- Official Play status
- selected table/product
- current journal story

No mandatory hero paragraph.
No mandatory tagline.
No “who we are” block on the homepage unless there is factual information that belongs there.

## Navigation
Primary:
- Play
- Events
- Watch
- Tables
- Journal
- About

Secondary:
- Rules
- Rankings
- Partners
- Shop
- Contact

## Layout
- 12-column desktop grid
- strong negative space
- deliberate image scale
- compact data surfaces
- restrained borders and radii
- no wall of cards
- no repeated section templates

## Typography
- one strong display family
- one restrained text/UI family
- tabular numerals for scores, dates, standings, and rankings
- headlines should be short
- body copy should be rare and useful

## Imagery
Primary visual material:
- real games
- hands and bones
- players
- spectators
- tables in use
- venue context
- scorekeeping
- archival material
- product details

Avoid generic stock photography and decorative AI imagery when real Ark material exists.

## Motion
Use motion only when it adds information or presence:
- live footage
- score changes
- match transitions
- short editorial transitions

No perpetual background effects.

## Core components
- Masthead
- Event fixture
- Scoreline
- Result row
- Player identity
- Ranking table
- Rules notice
- Status label
- Film feature
- Photo feature
- Product specifications
- Caption
- Footer

Components should not require marketing copy to feel complete.

## Content model
### Event
id, slug, title, status, date/time, venue, city, format, ruleset, registration URL, participants, results, media, partners.

### Match
id, event, players/teams, score, ruleset version, verification status, official, date, footage, correction history.

### Player
id, display name, location/club, verified results, record, ranking state, media, consent state.

### Ruleset
id, game, version, effective date, status, source, credited contributors, changelog.

### Story/media
id, type, headline, author/producer, date, subjects, linked event, media, rights state.

### Product
id, name, availability, price, specifications, images, fulfillment status, purchase/inquiry path.

## Calls to action
Use specific labels only:
- Register
- Watch
- Results
- Rules
- Shop
- Inquire
- Contact
- Read
- View Event
- View Match

Avoid generic `Learn More` buttons.

## Discoverability
Use technical metadata without turning SEO language into visible copy:
- unique titles and descriptions
- Organization schema
- Event schema for real events
- Product schema for real products
- VideoObject for real video
- canonical URLs
- sitemap
- OpenGraph metadata
- alt text
- internal links

## Build order
### 1. Shell
Navigation, typography, spacing, color, footer.

### 2. Homepage
Minimal opening, current event, result, media, Official Play status, selected product, journal.

### 3. Competition
Play, rules, events, results, players, rankings when data is sufficient.

### 4. Media
Watch, match pages, films, photography, editorial.

### 5. Commerce
Tables and Shop using only verified products, configurations, pricing, and fulfillment terms.

### 6. Institutional pages
About, Partners, Contact.

## Release rules
- No unsupported claim.
- No stale legacy copy.
- No filler section.
- No fake metric.
- No hidden development status.
- No paragraph where structured information would work better.
- No animation required for the composition to succeed.
- Mobile receives the same editorial care as desktop.
- Accessibility and performance are release requirements.

## Final test
If deleting a paragraph makes the page stronger and no factual information is lost, delete it.
