# ARK ARENA
## Consolidated Product and Build Specification

**Prepared for:** Anthony Covington, Ark of Bones  
**Prepared:** October 19, 2026  
**Status:** Review-ready product direction and implementation contract. This document describes the proposed build; it does not claim that online games, accounts, or tournaments are live.

## The product

Ark of Bones should give people one connected way to learn the games, play at home, bring friends to a private table, keep a record of their matches, and eventually compete in organized play. The website remains the public home for Ark of Bones. **Play Ark** is the player-facing entry; **Ark Arena** is the working name for the game platform; **Big Six Bones** is its flagship game.

The game should feel like Ark of Bones: dark surfaces, warm bone color, restrained gold, clear typography, tactile dominoes, and the domino-pip transition already used on the website. The table should be quick to understand and comfortable to use on a phone, laptop, or desktop monitor.

## What the earlier work established

| Earlier work | Strongest decision to retain | How it fits the build |
|---|---|---|
| *Ark of Bones Future Platform Proposal* (September 2026) | Make free play a way into learning and competition; let a player try the game before creating an account; separate game rules, table state, AI, networking, and measurement; start with Big Six Bones rather than releasing several unfinished games. | Retain its product sequence and focus. Use one rules engine for related domino play, while keeping Dominoes and Big Six Bones distinct in the game hall and match records. |
| *ARK OF BONES — ARK ARENA Master Implementation Directive for Grok* (October 14, 2026) | Treat all seven games listed by the site as the complete product target; require real server-validated human play; protect private hands; version rules; support reconnection; test finished matches and existing-site links; do not present bots as humans or planned systems as live. | Retain its quality bar and game coverage. Build and test progressively, but do not call the general release complete until every game and required mode passes its evidence matrix. |
| Current `ark-of-bones` repository and README | The site is a Node 22, Vite, React, and React Router site with educational, editorial, brand, event, and merchandise pages. Its game entries are guides, not playable engines. GitHub Pages serves public production; Vercel is used for previews and diagnostics; Squarespace remains the merchandise checkout. | Preserve the current site and its content audit. Build the game platform as an independently deployable product and connect it through an approved Play Ark route when it is ready. |
| Current connected platform inventory | Vercel has Ark of Bones and Ark of Bones staging projects. The connected Supabase account has no project identified as Ark of Bones or Ark Arena. | Use Vercel staging for a separate game client when appropriate. Create a dedicated Supabase project only after ownership, access, and budget are confirmed; do not point experiments at an unrelated database. |

The older platform proposal also included ideas for table customization and sales. Those are excluded from this game build. The current site README and copy audit prohibit advertising custom tables, furniture, financing, or table-order services.

## Product principles

1. **A real game before a game-shaped menu.** Every Play button must start the mode it names. Games without a complete engine remain clearly marked as learning content or in development.
2. **Guest first, account optional.** Let a visitor start a practice match without registration. Offer an Ark ID when they want synced records, friends, or online competition.
3. **Play honestly.** Computer seats are labeled as computer seats. A human queue contains actual people; when no human match is available, explain that and offer a private room or practice game.
4. **Rules are explicit and credited.** State the active rule pack before the deal. Distinguish common defaults, regional or house variants, and rules approved by Ark's designated rules steward. Never label an unapproved proposal “official.”
5. **Free, fair competition.** Use non-purchasable, non-redeemable points only. The first build includes no wagering, cash stakes, deposits, cash prizes, or cash-out.
6. **Respect the existing brand and site.** Reuse the current logo and design tokens. Do not redesign the main site or change production hosting as part of the game launch.

## Player journey

**Ark of Bones → Play Ark → Game Hall → Learn / Practice / Play a Computer / Private Table / Quick Match / Ranked → Lobby → Table → Results → Rematch or return.**

The first screen makes the available action clear. A guest may learn rules, play offline against computer opponents, or create an online private room if that service is available. Registration is offered at a useful moment, not as a gate before the first move. The result screen reports the game, rule-pack version, players or clearly labeled computer seats, score, and next action.

### Account and saved play

- An optional Ark ID supports a chosen display name, saved settings, synced match history, wins and losses, friend list, and later competition eligibility.
- Guest records remain local until the player chooses to connect them to an account. Explain what will be copied before merging.
- Use Supabase Auth for sign-in, PostgreSQL for durable account and match records, and Row Level Security for user-owned data. A browser client may use a publishable key only; privileged keys stay server-side.
- Provide account export and deletion paths before public account registration. Do not expose email addresses or private profile details on leaderboards.

### Game notes and tips

The game screen should make help available without interrupting play:

- Before the first deal: objective, seats and teams, scoring, selected rule pack, and any material house-rule choice.
- During play: short, contextual tips such as explaining a legal move, why a play is blocked, how a score was calculated, or what a player may do next.
- After a match: a concise round summary and links to the relevant Ark of Bones learning material.
- For regional or family rules: collect the variant name, contributor attribution preference, community or region, source or interview date, and moderation status. A submitted rule remains a proposal until reviewed.

Tips should teach from the selected rules and visible game state. They must not leak hidden information, speak as if an unverified history is settled fact, or interrupt a player's turn with promotional copy.

## Game coverage and release sequence

The current site lists seven first-class games: **Dominoes, Big Six Bones, Spades, Euchre, Booray, Tonk, and Poker.** The shared catalog should be the single source for game names, rules, seat formats, capabilities, learning links, and release status.

| Release gate | Required result |
|---|---|
| **A — Rules and foundation** | Confirm Ark's initial Big Six Bones and general Dominoes rule packs with Anthony or a named rules steward. Record every choice, version, citation or contributor credit, and any unresolved regional differences. Build the shared game catalog, state/event contract, accessibility baseline, and automated rules-test harness. |
| **B — Domino practice release** | Deliver complete, tested Big Six Bones and general Dominoes matches against legal computer opponents. Include offline solo play, scoring, rematch, rules and tips, graceful resume, and responsive phone/desktop tables. Keep both game labels distinct. This is a focused test release, not a claim that the seven-game platform is finished. |
| **C — All seven playable** | Deliver complete match engines and solo computer play for Spades, Euchre, Booray, Tonk, and Poker in addition to the two domino entries. Poker must name its supported variant; the prior directive names Texas Hold'em, Five-Card Draw, and Seven-Card Stud as separate required modules. Do not expose a playable mode until a complete game can start, score, end, and rematch under a disclosed rule pack. |
| **D — Accounts and human play** | Add optional sign-in and synced match history, real private rooms, invite codes, server-validated moves, private player views, reconnect, and independent-device end-to-end tests. Add quick human matchmaking only after private games are reliable. Bots may fill a seat only when shown as bots. |
| **E — Competition** | Add ranked play and ratings for rule-locked human matches, then tournament registration, brackets or round-robin formats, result review, moderation, replay permissions, and spectator mode. Exclude unfinished buttons and synthetic player counts. |

The gates let players test the core early without lowering the definition of the complete product. A public “all games” release is blocked until all seven entries can finish valid matches and the required human-play evidence exists.

### Rule modules

- **Dominoes / Big Six Bones:** share tile enumeration, shuffle, legal matching, board ends, draw/pass handling, blocked-round detection, pip counting, and scoring primitives. Use separate rule-pack IDs, presentation, match history, and approved defaults. Candidate Block, Draw, and All Fives variants must specify doubles, spinner behavior, starter, passing, boneyard, tie handling, and target score.
- **Spades:** four seats in partnerships, complete bidding, nil options where selected, follow-suit, trump, bags, penalties, and match target.
- **Euchre:** a disclosed deck and regional rule pack; correct bowers, bidding, lone-hand behavior, trick resolution, and scoring.
- **Booray:** disclosed player count and house-rule choices for trump, folding, ties, and bourré penalty. Use nonredeemable score tokens only if a pot-style score display is needed.
- **Tonk:** disclosed opening Tonk, card values, knock, spreading, layoff, deadwood, failed-knock, and stock-exhaustion rules.
- **Poker:** separately selectable, tested variants; free nonredeemable play chips only. No cash balance or purchase path.

The roster and candidate variants are not proof that Ark has sanctioned any particular rule set. Founder approval and community attribution remain human decisions.

## Shared platform and deployment plan

### Keep the public site stable

Keep `www.arkofbones.com`, its current routes, GitHub Pages build, editorial content, copy audit, and Squarespace checkout intact. Do not redirect `/play` or publish availability claims until a staging client passes acceptance. The game client should have its own release switch and deployment.

### Web, phone, and computer

- **Responsive web client:** the first shared interface, usable in current desktop and mobile browsers.
- **Installable web app:** a Progressive Web App (PWA) with cached rules and assets, local practice state, and offline play against computer opponents where supported. Online play, account sync, and multiplayer require an internet connection.
- **Desktop downloads:** after the browser version and offline mode pass, package the same client for Windows and macOS with Tauri or an equivalent thin wrapper. Linux packaging can follow the same tested build if requested. Signed installers, update handling, crash reporting, and platform QA are release work; a PWA install prompt alone is not a native desktop installer.
- **Phone apps:** prioritize browser/PWA usability first. Add iOS and Android store packages only after gameplay, account deletion, privacy disclosures, deep links, and store review requirements have been tested.

All platforms use the same versioned game rules and shared player experience. No platform-specific rewrite of the rules is allowed.

### Recommended code boundaries

Create a separate `ark-arena` repository or an isolated `arena/` workspace after an ownership decision. The recommended default is a separate repository so the current public site's build and Pages workflow remain low-risk. The game product should contain:

- `client` — responsive React/TypeScript web and installable client;
- `shared` — game catalog, protocol types, validators, and error codes;
- `engines` — tested rules modules and legal computer opponents;
- `backend` — trusted command handling, session authorization, match adjudication, and persistence;
- `supabase` — migrations, Row Level Security policies, Edge Functions or transactional routines, and labeled local seed fixtures;
- `e2e` — two-client gameplay and reconnect tests;
- `desktop` — thin package configuration, added after browser release gates.

Keep Node dependencies pinned and commit one lockfile per installable workspace. Existing website scripts and copy audit continue to run unchanged.

### Supabase and Vercel responsibilities

- **Supabase:** provision a dedicated project for Arena; use Auth, Postgres, and authorized private Realtime channels. Store durable accounts, versioned rules, matches, ordered events, and results in Postgres with RLS on exposed tables. Realtime transports sanitized updates; it is not the rules authority. Each move must be adjudicated through a trusted server-side path and committed atomically before subscribers receive an update. Never accept a client-supplied winner, score, turn, or hidden-hand state as fact.
- **Vercel:** use the existing staging project for a reviewable Arena web deployment if the project and domain setup support it. Use Vercel for static delivery and request/response functions that fit its runtime. Do not assume a Vercel serverless function is a persistent game server. If the chosen turn-based server-side adjudication and Realtime approach cannot meet reconnect, concurrency, and latency tests, add a separate persistent service rather than weakening server authority.
- **Current state:** no Arena-specific Supabase project has been identified in the connected account. No Arena project or public game endpoint is being treated as live. Create the database only after the account owner approves the resource and budget.

This uses Supabase Realtime's private channels with authorization, while keeping game adjudication in trusted code. All exposed data tables require RLS and least-privilege policies. A client must never receive another player's hand, the unplayed tile or card order, bot-private state, or an unauthorized replay.

## Visual and interaction standard

- Reuse the existing Ark of Bones logo files and design tokens: near-black and charcoal surfaces, bone and warm-paper text, restrained gold, DM Serif Display for display type, and Manrope for body text.
- Keep the table legible before decorative. Use tactile tile/card rendering, clear current-turn and team states, visible score, legal-move feedback, sound controls, and direct recovery from loading, disconnect, or error states.
- Use the existing domino transition as a short brand signature between major game states: entering Play, opening a game, dealing, and ending a match. Keep it lightweight, avoid delaying a legal move, and honor reduced-motion and sound preferences.
- Support keyboard selection as well as pointer and touch play. Never make drag-and-drop the only way to play. Screen readers must receive turn, score, legal action, and result updates.
- Test portrait phone, landscape phone, tablet, and desktop sizes before accepting a build. Keep all seven games' controls usable on small screens, including the 13-card Spades hand.

## Reliability, safety, and fair play

The trusted game service owns shuffle, deal, seat assignment, active turn, legal move validation, clocks, scoring, result finalization, and ranked eligibility. Clients submit commands; they do not write canonical match state. Every command uses an idempotency key and state version so retries cannot apply the same move twice.

The game service must:

- generate shuffled decks/tiles with a secure random source and keep unrevealed information private;
- validate actor, seat, turn, legal move, rule-pack version, match status, and command freshness;
- persist ordered game events and a recoverable state snapshot;
- restore a player after a refresh or temporary network loss without changing their hand or the score;
- calculate the result once and update ratings only for eligible human matches;
- use AI that sees only its own hand and public table state;
- enforce private room membership, rate limits, report/block/mute controls, and role-based administration;
- retain only necessary account and gameplay data and document export, deletion, retention, and replay visibility.

No microphones or cameras are recorded by default. Replays and spectators require explicit visibility rules; spectators must not infer unrevealed cards or tiles. No paid chips, gambling, wagers, cash prizes, or redeemable points are part of this build.

## Acceptance standard

The product is ready for a public launch only when each game has an evidence row marked PASS for its approved rule version, complete solo game, AI difficulty, scoring and rematch tests, phone and desktop usability, reconnect, and applicable multiplayer modes. Human PvP needs two independent authenticated sessions on separate browser contexts or devices. A local bot demonstration does not count as PvP.

Release tests must also demonstrate:

1. Every game can start, complete a legal match, resolve edge cases, show an accurate result, and rematch.
2. Private-room invites work on a second device without exposing unauthorized state.
3. A refresh and temporary disconnect restore the correct seat and game state without a lost or duplicated move.
4. A queue matches actual humans or reports that no human match is available; it never silently fills the room with a bot.
5. Ratings and tournament results are committed once and only from eligible, valid matches.
6. The existing site routes, merchandise links, public-copy audit, and Pages build continue to pass.
7. Current phone and desktop browsers show no broken actions, hidden text, unusable controls, or horizontal overflow.
8. Privacy, accessibility, moderation, release rollback, monitoring, and backup procedures are documented and tested.

Use a PASS / FAIL / BLOCKED report with test identifiers and real staging evidence. A failed or unavailable integration stays BLOCKED; a screenshot or successful frontend build is not multiplayer evidence.

## Decisions for Anthony

These are the few choices that require company ownership rather than engineering guesswork:

1. Confirm **Play Ark** as the public entry and **Ark Arena** as the working platform name.
2. Name the person authorized to approve Big Six Bones and regional rule packs, and identify the first launch rule set.
3. Approve a dedicated Supabase project, account owner, and spending limit before database provisioning.
4. Confirm whether the initial home-computer release means an installable PWA first, followed by signed Windows/macOS downloads after browser validation. That sequence is recommended.
5. Approve the separate Arena repository and Vercel staging deployment; production domains and the public `/play` route stay untouched until acceptance is complete.

## Recommended build order

1. Create the isolated Arena repository and establish local development, linting, game-engine tests, and protected preview deployments.
2. Build the catalog, rule registry, Big Six Bones and Dominoes engines, computer players, accessible table, PWA, and offline practice.
3. Validate the first two games with real Ark players; record rule changes and credit consented contributors.
4. Complete the other five game modules and AI before marking the game hall as fully playable.
5. Provision Supabase, then add Ark ID, cloud match records, private multiplayer, reconnect, and a real two-session test suite.
6. Add quick matchmaking, rankings, tournaments, replays, and spectators as separately gated releases.
7. Package desktop downloads and mobile store apps from the shared client after the web acceptance gates pass.
8. Connect the public site to the tested Arena release and announce only capabilities that have passed acceptance.

**Product promise:** A player can sit down at an Ark table on the screen, learn the rules, make a legal move, finish a fair game, and return later with their record intact.

## Materials reviewed

- `ARK_OF_BONES_GROK_MASTER_BUILD_DIRECTIVE.md` — October 14, 2026.
- `Ark_of_Bones_Future_Platform_Proposal.pptx` — September 15, 2026.
- `MysticQuestion/ark-of-bones` default-branch `README.md`, `package.json`, `src/data/games.js`, and `src/app/routes.jsx` — reviewed October 19, 2026.
- Supabase documentation on Realtime concepts and Row Level Security — accessed October 19, 2026.
- Connected Vercel and Supabase project inventories — accessed October 19, 2026.
