import { ArrowRight, Building2, Camera, Gauge, Home, Lightbulb, Mic2, MonitorPlay, Radio, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS } from '../config/brand';

const uses = [
  'Hospitality and entertainment venues',
  'Domino tournaments and leagues',
  'Private homes and entertainment rooms',
  'Private and corporate events',
  'Festivals and cultural programming',
  'Community and institutional programs',
];

const process = [
  ['01', 'Define the use case', 'Share the space, audience, location, timeline, and the way you want people to play or watch.'],
  ['02', 'Confirm the build', 'Ark of Bones confirms the feature set, customization, technical requirements, scope, lead time, and quote before a deposit is requested.'],
  ['03', 'Build and prepare', 'A custom build typically follows a 4–6 week production window after scope and deposit, subject to the final configuration.'],
  ['04', 'Install or deliver', 'Delivery, setup, venue integration, and event support are scoped according to the project rather than assumed in the base build.'],
];

const buildOptions = [
  ['Player-view cameras', 'Camera positions can make the board and player reactions legible beyond the seats.', Camera],
  ['Table microphones', 'Capture table talk, reactions, instruction, and the social character of the game.', Mic2],
  ['Lighting and indicators', 'Integrated lighting can define the playing surface and support scoring or production cues.', Lightbulb],
  ['Scoring and tracking', 'Sensor and scoring integrations can be scoped according to the build and the official-play roadmap.', Gauge],
  ['Streaming and screens', 'Route play to displays or a production workflow when the room and technical setup support it.', Radio],
  ['Customization', 'Colors, logos, engraving, lighting choices, and other finish details can be reviewed during scoping.', MonitorPlay],
];

const preDepositChecks = [
  'Final dimensions and room fit',
  'Materials and finish selection',
  'Power, display, camera, and network requirements',
  'Included technology and optional integrations',
  'Delivery, shipping, installation, or event support',
  'Warranty and service terms for the quoted build',
  'Production timeline and deposit schedule',
  'Branding, engraving, lighting, and finish approvals',
];

export default function TablesPage() {
  return (
    <>
      <SEO
        title="Professional Domino Tables & Venue Experiences"
        description="Explore Ark of Bones professional domino tables: handcrafted, media-ready builds for private homes, venues, tournaments, streaming, and cultural events."
        path="/tables"
      />
      <PageHero
        eyebrow="The Ark of Bones table"
        title="A handcrafted domino table built to become the studio floor."
        description="For private spaces and public venues, Ark of Bones combines the social ritual of dominoes with cameras, sound, lighting, display integration, and custom finishes."
        image={ASSETS.hero}
      >
        <Link className="button button--gold" to="/contact?inquiry=Tables%20%2F%20Venue%20Partnership">
          Plan a venue experience<ArrowRight aria-hidden="true" />
        </Link>
        <Link className="button button--light" to="/contact?inquiry=Private%20%2F%20Home%20Table">
          Design a private table<Home aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="feature-ledger">
        <article><Camera aria-hidden="true" /><span>Player-view cameras</span><p>Make the game readable beyond the four seats.</p></article>
        <article><Mic2 aria-hidden="true" /><span>Table sound</span><p>Capture conversation, reactions, and the character of play.</p></article>
        <article><MonitorPlay aria-hidden="true" /><span>Screen connection</span><p>Extend live action throughout a room when the setup supports it.</p></article>
        <article><Users aria-hidden="true" /><span>Audience format</span><p>Protect player focus while giving guests a clear reason to stay engaged.</p></article>
      </section>

      <section className="image-story">
        <div className="image-story-media">
          <SafeImage
            src={ASSETS.table}
            alt="Ark of Bones professional domino table prepared for live play"
            fallbackAlt="Ark of Bones professional domino table"
            width="1600"
            height="1200"
            loading="lazy"
          />
        </div>
        <div className="image-story-copy">
          <p className="eyebrow">Cultural broadcast studio</p>
          <h2>The value is what the table enables.</h2>
          <p>A conventional game table serves the players sitting around it. Ark of Bones is designed to support a larger experience: visible competition, recorded conversation, audience viewing, streaming workflows, and a repeatable event format.</p>
          <p>Every custom build is scoped before deposit so the buyer knows what technology, finish work, delivery, and support are actually included.</p>
        </div>
      </section>

      <section className="content-band">
        <SectionHeader
          eyebrow="Build options"
          title="Configure the experience around the space"
          description="The final build sheet should be specific enough to compare, approve, and price—without forcing every customer into the same configuration."
        />
        <div className="table-feature-grid">
          {buildOptions.map(([title, body, Icon]) => (
            <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="mission-vision-grid">
        <article>
          <span>Venue / B2B</span>
          <h2>Build an attraction people can see from across the room.</h2>
          <p>For bars, clubs, event spaces, campuses, institutions, and cultural programs, the conversation starts with audience size, technical access, programming goals, and repeatability.</p>
          <Link className="text-link" to="/contact?inquiry=Tables%20%2F%20Venue%20Partnership">Request venue build details<ArrowRight aria-hidden="true" /></Link>
        </article>
        <article>
          <span>Private / residential</span>
          <h2>Build the table around the way your people actually gather.</h2>
          <p>Private builds can prioritize finish, room fit, lighting, media, engraving, and the social experience of a home game without requiring a venue-scale production package.</p>
          <Link className="text-link" to="/contact?inquiry=Private%20%2F%20Home%20Table">Request private build details<ArrowRight aria-hidden="true" /></Link>
        </article>
      </section>

      <section className="content-band content-band--wood">
        <SectionHeader eyebrow="Where it works" title="One product, different operating contexts" />
        <div className="use-grid">
          {uses.map((use) => <div key={use}><Building2 aria-hidden="true" />{use}</div>)}
        </div>
      </section>

      <section className="content-band">
        <SectionHeader
          eyebrow="Before any deposit"
          title="The quote should remove uncertainty"
          description="Ark of Bones should confirm the operational details that matter to a serious buyer before asking for money."
        />
        <div className="confirmation-panel">
          <div>
            <p className="eyebrow">Build sheet</p>
            <h3>No mystery configuration.</h3>
            <p>Pricing is quoted by scope until a standardized production specification and public starting price are formally approved.</p>
          </div>
          <ul>
            {preDepositChecks.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="content-band content-band--wood">
        <SectionHeader eyebrow="Build process" title="From serious interest to a confirmed scope" />
        <div className="process-grid">
          {process.map(([number, title, body]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="image-story image-story--reverse">
        <div className="image-story-media">
          <SafeImage
            src={ASSETS.players}
            alt="Players using an Ark of Bones domino table during a gathering"
            fallbackAlt="Players gathered around an Ark of Bones domino table"
            width="1800"
            height="1200"
            loading="lazy"
          />
        </div>
        <div className="image-story-copy">
          <p className="eyebrow">Proof before scale</p>
          <h2>The table should generate evidence, not just impressions.</h2>
          <p>Venue pilots should document participation, watch time, replay demand, repeat attendance, sponsor response, and operating cost. Those numbers make the next table easier to sell.</p>
          <Link className="text-link" to="/official-play">See how official play extends beyond the table<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <CTASection
        eyebrow="Build inquiries"
        title="Serious builds start with a real conversation."
        description="Share the space, city, timeline, use case, and what matters most. No payment is required to request build details or determine the right next step."
        label="Plan a venue build"
        to="/contact?inquiry=Tables%20%2F%20Venue%20Partnership"
        secondaryLabel="Design a private table"
        secondaryTo="/contact?inquiry=Private%20%2F%20Home%20Table"
      />
    </>
  );
}
