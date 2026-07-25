import { ArrowRight, Building2, MonitorPlay, Users, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
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
      <PageHero eyebrow="Tables and venue partnerships" title="The table is the center of the experience." description="Ark of Bones helps venues and event organizers turn domino play into a visible, social, audience-ready program." image={ASSETS.hero}>
        <Link className="button button--gold" to="/contact?inquiry=Tables%20%2F%20Venue%20Partnership">Bring Ark of Bones to your venue<ArrowRight aria-hidden="true" /></Link>
      </PageHero>
      <section className="feature-ledger">
        <article><Users aria-hidden="true" /><span>Live play</span><p>Center the players while giving the room a reason to gather.</p></article>
        <article><MonitorPlay aria-hidden="true" /><span>Screen connection</span><p>Extend table action to multiple screens where the venue plan supports it.</p></article>
        <article><Workflow aria-hidden="true" /><span>Streaming potential</span><p>Bring live-game streaming and remote viewing into venues equipped to support it.</p></article>
        <article><Building2 aria-hidden="true" /><span>Venue value</span><p>Create repeatable cultural programming around competition and community.</p></article>
      </section>
      <section className="image-story">
        <div className="image-story-media"><img src={ASSETS.players} alt="Players focused on a domino game around a green table" width="1800" height="1200" loading="lazy" /></div>
        <div className="image-story-copy"><p className="eyebrow">Built for participation</p><h2>More than furniture. A reason to gather.</h2><p>Bring tournaments, celebrations, hospitality, festivals, activations, and community programs to life around the table.</p></div>
      </section>
      <section className="content-band table-planning">
        <SectionHeader
          eyebrow="The experience around the table"
          title="Every detail serves the room"
          description="The playing surface, sightlines, sound, screens, and guest flow all work together."
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
            <h3>Every room calls for a different setup.</h3>
            <p>Tell us about your space, your audience, and your goals. We will shape the table, media, and event experience around what fits.</p>
          </div>
          <ul>
            {confirmationChecklist.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>
      <section className="content-band content-band--wood">
        <SectionHeader eyebrow="Where it fits" title="A flexible entertainment format" description="From an intimate game night to a room full of spectators, the experience starts with the people gathering around it." />
        <div className="use-grid">{uses.map((use) => <div key={use}><span aria-hidden="true" />{use}</div>)}</div>
      </section>
      <section className="content-band">
        <SectionHeader eyebrow="How it comes together" title="From first conversation to game day" />
        <div className="process-grid">{process.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>
      <CTASection eyebrow="Start with the venue" title="Bring Ark of Bones to your venue." description="Tell us about your space, audience, city, and event goals." label="Start a tables and venue inquiry" to="/contact?inquiry=Tables%20%2F%20Venue%20Partnership" secondaryLabel="Ask about an event" secondaryTo="/contact?inquiry=Host%20an%20Event" />
    </>
  );
}
