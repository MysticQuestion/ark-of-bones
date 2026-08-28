# Ark of Bones — Site Maturity Blueprint

## Release principle
The site should behave like a maintained organization, not a campaign page.

Every public surface must be one of the following:
- current information;
- an operating function;
- a documented record;
- a verified product;
- a clear contact path.

Anything else is optional.

## 1. Production architecture

### GitHub
- `main` remains production until V2 is approved.
- `ark-institutional-v2` is the controlled redesign branch.
- Every significant release should pass build, public-copy audit, accessibility review, route review, and link review before merge.
- Changes to commerce, events, rules, results, and legal language should be traceable in commit history.

### Vercel
Use Vercel as the preview, QA, and production observability layer.

Required state:
- Git integration connected to `MysticQuestion/ark-of-bones`.
- automatic preview deployment for every branch/PR;
- stable preview URL for `ark-institutional-v2`;
- production project configured explicitly for the approved production branch;
- build failures treated as release blockers;
- deployment logs reviewed after structural releases;
- custom domain moved only after V2 is approved and the canonical hosting decision is finalized;
- redirects and canonical URLs tested before domain cutover.

Current issue discovered 2026-08-27:
- recent Vercel builds fail because the public-copy audit catches the phrase `production plan` in `PartnershipsPage.jsx`.
- V2 removes that phrase and simplifies the page.

## 2. Global navigation

Primary:
- Play
- Events
- Watch
- Tables
- Journal
- Shop

Secondary:
- Rules
- Rankings when operational
- Partners
- About
- Contact

Mobile navigation must preserve the same hierarchy.

## 3. Homepage

The homepage should be short.

Required modules:
1. Ark identity / current visual.
2. One current event, result, film, or program.
3. Official Play status.
4. One strong media/editorial feature.
5. Selected merchandise or table image.
6. Footer.

No generic company-introduction section is required.
No multi-paragraph hero explanation.
No duplicate calls to action.

## 4. Shop

The shop must feel like part of Ark, not an attached merchandise widget.

Required:
- product photography at consistent aspect ratios;
- product name;
- brand;
- price;
- size/color variants only when actually available;
- direct product checkout destination;
- sold-out state;
- shipping/returns information linked from every product path;
- privacy and terms links near commerce actions;
- inventory status maintained from the actual commerce source;
- no concept products in the live catalog.

Brand filters:
- Ark of Bones
- Big Six Bones
- Domino MF / DMF

Future improvement:
- move from hard-coded product records to a commerce data source or API;
- preserve Squarespace checkout until replacement commerce is fully tested;
- only migrate checkout if a new platform materially improves inventory, fulfillment, reporting, or customer experience.

## 5. Product detail pages

Each live product should eventually have an Ark-native detail page with:
- gallery;
- price;
- available variants;
- materials/care when known;
- fulfillment note;
- return policy link;
- checkout action;
- related brand/products.

Do not use filler product storytelling.

## 6. Events

Required record fields:
- title;
- status;
- date/time;
- venue;
- city;
- format;
- registration path;
- ruleset;
- result link after completion;
- media link after publication.

Past events should remain as archive pages rather than disappearing.

## 7. Results and Official Play

Before rankings launch:
- versioned rules;
- documented match format;
- result verification method;
- correction process;
- player identity rules;
- official/referee attribution when applicable.

Only then:
- player profiles;
- records;
- rankings;
- season/series standings.

No placeholder ranking data.

## 8. Media / Watch

Required content types:
- full matches when rights permit;
- highlights;
- interviews;
- player profiles;
- event recaps;
- documentary pieces;
- photo essays.

Each media page should carry:
- title;
- date;
- people/event represented;
- rights/credit information;
- related event/result links.

## 9. Journal

Use only when there is something worth publishing.

Suitable material:
- event reports;
- rules notes;
- oral histories;
- player profiles;
- design notes;
- company notices;
- verified announcements.

Avoid generic thought-leadership posts.

## 10. Tables

The table page must follow the current approved commercial policy.

Before publication of any configuration, confirm:
- actual manufacturing capability;
- current options;
- pricing method;
- fulfillment region;
- lead time;
- warranty;
- shipping/delivery;
- customization policy.

If any item is unresolved, omit the claim.

## 11. Partnerships

Keep the page concise.

Public information should be limited to:
- partnership types;
- what can be scoped;
- contact path;
- terms/legal note where necessary.

Detailed proposals belong in private documents, not homepage-style sales prose.

## 12. Contact / CRM

Replace email-only inquiry behavior with a durable intake system.

Required fields:
- name;
- email;
- organization if relevant;
- inquiry type;
- message;
- consent/privacy notice.

Inquiry types:
- Events
- Partnerships
- Media
- Shop/order support
- Tables
- Press
- General

Required operations:
- server-side submission;
- spam protection;
- success/failure states;
- record retention policy;
- notification routing;
- CRM or structured database destination.

## 13. Legal and trust surfaces

Required before the site is considered complete:
- Privacy Policy
- Terms of Use
- Shipping Policy
- Return/Refund Policy
- Accessibility statement/contact method
- Copyright / trademark notice
- Media/participant release process for filmed events
- Event terms where registration occurs

If commerce remains on Squarespace, customer-facing policies must agree across both systems.

## 14. SEO and metadata

Required:
- canonical URL per page;
- unique title and description;
- sitemap;
- robots configuration;
- Organization schema;
- Product schema only for purchasable products;
- Event schema only for confirmed public events;
- VideoObject only for published media;
- social share image per major content type;
- redirect map for any changed routes.

## 15. Analytics

Track behavior, not vanity numbers.

Core events:
- event registration click;
- shop product click;
- checkout click;
- partnership inquiry;
- contact submission;
- video play;
- newsletter signup if used;
- rules download/view;
- repeat visit to event/result pages.

Do not publish internal analytics without a reason.

## 16. Accessibility

Release requirements:
- keyboard navigation;
- visible focus states;
- semantic headings;
- alt text for meaningful imagery;
- caption/transcript path for important video;
- sufficient contrast;
- reduced-motion support;
- forms with labels and error messaging;
- responsive text without clipping.

## 17. Performance

Targets:
- compress and properly size images;
- lazy-load offscreen media;
- code-split heavy routes;
- avoid loading large video on first paint unless essential;
- monitor Core Web Vitals;
- reduce unused component/CSS weight during V2 rebuild.

A current Vercel warning indicates some generated JS chunks exceed 500 kB after minification. Route-level code splitting should be added during the V2 implementation.

## 18. Security and operations

Required:
- no credentials committed to GitHub;
- secrets stored in deployment environment configuration;
- dependency updates reviewed regularly;
- production branch protected from accidental direct releases where feasible;
- commerce and form endpoints restricted to necessary origins;
- bot/spam controls on forms;
- domain/DNS ownership documented;
- recovery contacts documented privately.

## 19. Content governance

Every public claim should have an owner and a source.

High-change records:
- events;
- inventory;
- prices;
- shipping;
- product availability;
- partners;
- rules;
- rankings;
- event status.

These should eventually leave hard-coded JSX and move into a maintained data source.

## 20. Completion standard

Ark V2 is ready for production when:
- Vercel preview builds cleanly;
- all primary routes are finished;
- no stale/contradictory legacy copy remains;
- shop links and prices are verified;
- commerce policies exist;
- contact submissions persist somewhere durable;
- event/rules structures are ready even if no ranking data exists yet;
- legal pages are present;
- metadata and redirects are complete;
- mobile navigation and checkout paths have been tested;
- accessibility review passes;
- no section exists only to fill space.
