import { ArrowRight, Building2, MonitorPlay, Users, Workflow } from 'lucide-react';
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
  'Sponsor and brand activations',
  'Community-centered gatherings',
];

const process = [
  ['01', 'Tell us about the room', 'Share the venue, city, audience, date, and experience you want to create.'],
  ['02', 'Shape the format', 'Choose how live play, screens, media, and audience participation come together.'],
  ['03', 'Prepare the space', 'Plan the table, seating, displays, cameras, sound, and guest flow.'],
  ['04', 'Open the table', 'Welcome players and give the room a clear view of the action.'],
];

const planningAreas = [
  ['The playing surface', 'Place the table where players can focus and the room can follow the game.'],
  ['Cameras and sound', 'Capture the pace, conversation, and character of play without crowding the table.'],
  ['Screens and viewing', 'Bring the action closer to guests throughout the room.'],
  ['The guest experience', 'Connect arrival, seating, play, food, music, and media into one gathering.'],
];

const confirmationChecklist = [
  'The room and playing area',
  'Audience size and seating',
  'Screens, cameras, and sound',
  'Power and internet access',
  'Arrival, setup, and breakdown',
  'Event date and schedule',
  'Hosts, players, and guests',
  'Branding, photography, and media',
];

export default function TablesPage() {
  return (
    <>
      <SEO title="Tables" description="Explore Ark of Bones domino table experiences and venue partnerships for live play, screens, streaming, events, and audience engagement." path="/tables" />
      <PageHero eyebrow="Tables and venue partnerships" title="Give every seat a view of the game." description="Ark of Bones shapes domino play for venues that want focused competition, visible action, and stronger audience engagement." image={ASSETS.hero}>
        <Link className="button button--gold" to="/contact?inquiry=Tables%20%2F%20Venue%20Partnership">Plan a venue experience<ArrowRight aria-hidden="true" /></Link>
      </PageHero>
      <section className="feature-ledger">
        <article><Users aria-hidden="true" /><span>Live play</span><p>Protect player focus while keeping the competition visible.</p></article>
        <article><MonitorPlay aria-hidden="true" /><span>Screen connection</span><p>Extend table action to multiple screens where the venue plan supports it.</p></article>
        <article><Workflow aria-hidden="true" /><span>Streaming potential</span><p>Bring live-game streaming and remote viewing into venues equipped to support it.</p></article>
        <article><Building2 aria-hidden="true" /><span>Venue value</span><p>Create repeatable cultural programming around competition and community.</p></article>
      </section>
      <section className="image-story">
        <div className="image-story-media"><SafeImage src={ASSETS.players} alt="Players focused on a domino game around a green table" fallbackAlt="Competitive domino play; Ark of Bones mark shown" width="1800" height="1200" loading="lazy" /></div>
        <div className="image-story-copy"><p className="eyebrow">Built for participation</p><h2>More than furniture. A live format.</h2><p>Tournaments, celebrations, hospitality programs, festivals, activations, and community events can all begin from the same focal point.</p></div>
      </section>
      <section className="content-band table-planning">
        <SectionHeader
          eyebrow="Production design"
          title="Every detail serves the action"
          description="The playing surface, sightlines, sound, screens, and guest flow work as one system."
        />
        <div className="table-planning-grid">
          {planningAreas.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="confirmation-panel">
          <div>
            <p className="eyebrow">Your venue</p>
            <h3>The setup follows the space.</h3>
            <p>Venue dimensions, audience needs, technical access, and the program format determine the right configuration.</p>
          </div>
          <ul>
            {confirmationChecklist.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>
      <section className="content-band content-band--wood">
        <SectionHeader eyebrow="Applications" title="One format, many settings" description="An intimate game night and a spectator event require different production, but both can keep dominoes at the center." />
        <div className="use-grid">{uses.map((use) => <div key={use}><span aria-hidden="true" />{use}</div>)}</div>
      </section>
      <section className="content-band">
        <SectionHeader eyebrow="How it comes together" title="From first conversation to game day" />
        <div className="process-grid">{process.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>
      <CTASection eyebrow="Venue inquiries" title="Build the right configuration for the room." description="Share the location, audience, timing, technical access, and intended format." label="Request a venue conversation" to="/contact?inquiry=Tables%20%2F%20Venue%20Partnership" secondaryLabel="Plan a hosted event" secondaryTo="/contact?inquiry=Host%20an%20Event" />
    </>
  );
}
