import { ArrowRight, Building2, Camera, Mic2, MonitorPlay, Users } from 'lucide-react';
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
  'Private and corporate events',
  'Festivals and cultural programming',
];

const process = [
  ['01', 'Tell us about the space', 'Share the venue, audience, timing, and what you want the room to feel like.'],
  ['02', 'Build the format', 'Match the table, cameras, sound, screens, play structure, and audience flow to the space.'],
  ['03', 'Run the program', 'Open the table, capture the action, and measure what worked before the next event.'],
];

export default function TablesPage() {
  return (
    <>
      <SEO title="Tables" description="Explore Ark of Bones table experiences and venue partnerships for visible competition, live audiences, and repeatable programming." path="/tables" />
      <PageHero
        eyebrow="Tables and venue partnerships"
        title="Give every seat a view of the game."
        description="Ark of Bones uses the table as the focal point for competition, cameras, sound, screens, and audience participation."
        image={ASSETS.hero}
      >
        <Link className="button button--gold" to="/contact?inquiry=Tables%20%2F%20Venue%20Partnership">
          Plan a venue experience<ArrowRight aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="feature-ledger">
        <article><Camera aria-hidden="true" /><span>Player-view cameras</span><p>Make the board legible beyond the four seats.</p></article>
        <article><Mic2 aria-hidden="true" /><span>Table sound</span><p>Capture conversation, reactions, and the character of play.</p></article>
        <article><MonitorPlay aria-hidden="true" /><span>Screen connection</span><p>Extend live action throughout a room when the venue supports it.</p></article>
        <article><Users aria-hidden="true" /><span>Audience format</span><p>Protect player focus while giving guests a clear reason to stay engaged.</p></article>
      </section>

      <section className="image-story">
        <div className="image-story-media">
          <SafeImage
            src={ASSETS.table}
            alt="Ark of Bones domino table at a live event"
            fallbackAlt="Ark of Bones table experience"
            width="1600"
            height="1200"
            loading="lazy"
          />
        </div>
        <div className="image-story-copy">
          <p className="eyebrow">A production surface</p>
          <h2>Use the table to prove the audience.</h2>
          <p>The near-term goal is not to install tables everywhere. It is to run strong mobile and venue pilots, document watch time and participation, and build repeatable demand before heavy venue investment.</p>
          <Link className="text-link" to="/official-play">See how official play extends beyond the table<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="content-band content-band--wood">
        <SectionHeader eyebrow="Where it works" title="A format that can travel" />
        <div className="use-grid">
          {uses.map((use) => <div key={use}><Building2 aria-hidden="true" />{use}</div>)}
        </div>
      </section>

      <section className="content-band">
        <SectionHeader eyebrow="How it comes together" title="Three steps from room to game day" />
        <div className="process-grid">
          {process.map(([number, title, body]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Venue inquiries"
        title="Start with one room and measurable results."
        description="Share the location, audience, date, technical access, and intended format."
        label="Request a venue conversation"
        to="/contact?inquiry=Tables%20%2F%20Venue%20Partnership"
        secondaryLabel="Explore official play"
        secondaryTo="/official-play"
      />
    </>
  );
}
