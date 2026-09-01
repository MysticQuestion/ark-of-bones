import { ArrowRight, BarChart3, Camera, Handshake, MapPin, PlayCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS } from '../config/brand';

const partnershipOffers = [
  {
    number: '01',
    title: 'Recorded venue game nights',
    description: 'A scoped program for venues that want live competition, visible action, and media that extends the night beyond the room.',
    deliverables: ['Event format and show flow', 'Production and replay options', 'Promotion and measurement plan'],
    Icon: MapPin,
  },
  {
    number: '02',
    title: 'Sponsor and brand programs',
    description: 'A collaboration built around the culture of the table, with defined rights, moments, content, and hospitality inventory.',
    deliverables: ['Sponsor inventory and usage rights', 'On-site and content integration', 'Post-event delivery report'],
    Icon: Handshake,
  },
  {
    number: '03',
    title: 'Production collaborations',
    description: 'A multi-camera game-night, interview, livestream, or community-story production shaped for the audience and the occasion.',
    deliverables: ['Production scope and crew plan', 'Capture, edit, and delivery workflow', 'Participant and footage permissions'],
    Icon: Camera,
  },
];

const pilotSteps = [
  ['01', 'Discover', 'Define the venue, audience, capacity, date, operating constraints, and desired outcome.'],
  ['02', 'Scope', 'Choose the game format, capture approach, sponsor inventory, content rights, and measurement.'],
  ['03', 'Operate', 'Coordinate promotion, releases, show flow, filming, guest experience, and incident readiness.'],
  ['04', 'Deliver', 'Close the event ledger, deliver agreed media, review performance, and make the renewal decision.'],
];

const measures = [
  ['Attendance', 'Who came, how the room performed, and what participation looked like.'],
  ['Content output', 'What was captured, delivered, published, and available for approved reuse.'],
  ['Replay demand', 'How many players and guests requested or purchased follow-on media.'],
  ['Partner renewal', 'Whether the venue and sponsor have enough evidence to repeat the program.'],
];

export default function PartnershipsPage() {
  return (
    <>
      <SEO
        title="Partnerships"
        description="Partner with Ark of Bones on recorded venue game nights, sponsorships, production collaborations, and measured pilot programs."
        path="/partnerships"
      />
      <PageHero
        eyebrow="Venue, sponsor, and production partnerships"
        title="Build a game night people can play, watch, and remember."
        description="Ark of Bones combines live game culture, venue programming, and multi-camera production into partnership formats designed around the room, audience, and occasion."
        image={ASSETS.hero}
      >
        <Link className="button button--gold" to="/contact?inquiry=Partnership%20Pilot">
          Design a partnership pilot<ArrowRight aria-hidden="true" />
        </Link>
        <Link className="button button--outline" to="#partnership-options">Explore the options</Link>
      </PageHero>

      <section className="partnership-thesis">
        <div>
          <p className="eyebrow">Play to content</p>
          <h2>One live session can create value before, during, and after the game.</h2>
        </div>
        <p>Venue programming brings people into the room. Production makes the action visible. Approved clips and replays extend the experience. A clear measurement plan gives partners a reason to repeat it.</p>
      </section>

      <section className="partnership-proof" aria-label="Partnership system">
        <article><PlayCircle aria-hidden="true" /><span>Live experience</span><p>A format built around competition, culture, and hospitality.</p></article>
        <article><Camera aria-hidden="true" /><span>Recorded media</span><p>A capture brief that defines what is filmed, edited, and delivered.</p></article>
        <article><BarChart3 aria-hidden="true" /><span>Measurable proof</span><p>A closed event ledger and partner-facing performance review.</p></article>
        <article><ShieldCheck aria-hidden="true" /><span>Clear permissions</span><p>Rights, releases, and responsibilities established before filming.</p></article>
      </section>

      <section className="content-band partnership-options" id="partnership-options">
        <SectionHeader
          eyebrow="Choose the partnership"
          title="Start with the outcome, then build the room around it."
          description="Every engagement is scoped for its venue, audience, technical access, rights, and delivery requirements."
        />
        <div className="partnership-offer-list">
          {partnershipOffers.map(({ number, title, description, deliverables, Icon }) => (
            <article key={number}>
              <span className="partnership-offer-number">{number}</span>
              <div className="partnership-offer-heading">
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
              </div>
              <p>{description}</p>
              <ul>{deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band content-band--wood partnership-pilot">
        <SectionHeader
          eyebrow="The 60-day pilot"
          title="A complete operating product, not an undefined promise."
          description="The pilot produces a repeatable process, usable media, a closed ledger, and a renewal recommendation."
        />
        <ol className="partnership-pilot-steps">
          {pilotSteps.map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="content-band partnership-measurement">
        <SectionHeader
          eyebrow="What proves value"
          title="A partner should know what happened and whether to do it again."
          description="The final scorecard is agreed before the event so the post-event review is useful, comparable, and honest."
        />
        <div className="partnership-measure-grid">
          {measures.map(([title, description]) => (
            <article key={title}><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
        <div className="partnership-responsibility">
          <ShieldCheck aria-hidden="true" />
          <div>
            <p className="eyebrow">Responsible scope</p>
            <h3>Standard partnerships are family-entertainment and media engagements.</h3>
            <p>Pricing, production, rights, insurance, cancellation terms, and delivery are established in the proposal. Regulated wagering, raffles, casino approvals, or jurisdiction-specific gaming activity are not included unless separately reviewed and documented by qualified counsel and partners.</p>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Partnership inquiries"
        title="Pilot one recorded game-night series."
        description="Share the venue, audience, date, capacity, technical access, and the outcome you want to prove."
        label="Request a pilot conversation"
        to="/contact?inquiry=Partnership%20Pilot"
        secondaryLabel="Explore venue experiences"
        secondaryTo="/tables"
      />
    </>
  );
}
