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
  ['01', 'Share the opportunity', 'Tell us about the venue, city, audience, timing, and desired experience.'],
  ['02', 'Define the format', 'Ark of Bones reviews the live-play, screen, streaming, event, and brand requirements.'],
  ['03', 'Plan the experience', 'Both teams confirm responsibilities, production needs, guest flow, and public messaging.'],
  ['04', 'Bring it to the room', 'The approved experience moves into event or venue execution.'],
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
        <article><Workflow aria-hidden="true" /><span>Streaming potential</span><p>Prepare live-game streaming and remote viewing around the venue infrastructure and production plan.</p></article>
        <article><Building2 aria-hidden="true" /><span>Venue value</span><p>Create repeatable cultural programming around competition and community.</p></article>
      </section>
      <section className="image-story">
        <div className="image-story-media"><img src={ASSETS.players} alt="Players focused on a domino game around a green table" width="1800" height="1200" loading="lazy" /></div>
        <div className="image-story-copy"><p className="eyebrow">Built for participation</p><h2>More than furniture. A reason to gather.</h2><p>The experience can support tournaments, celebrations, hospitality spaces, festivals, activations, and community programming. The exact format is shaped around each venue and its production needs.</p></div>
      </section>
      <section className="content-band content-band--wood">
        <SectionHeader eyebrow="Where it fits" title="A flexible entertainment format" description="Every use begins with the audience and venue, not with unsupported promises about inventory or specifications." />
        <div className="use-grid">{uses.map((use) => <div key={use}><span aria-hidden="true" />{use}</div>)}</div>
      </section>
      <section className="content-band">
        <SectionHeader eyebrow="Partnership process" title="From conversation to approved experience" />
        <div className="process-grid">{process.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>
      <CTASection eyebrow="Start with the venue" title="Bring Ark of Bones to your venue." description="No public table pricing, inventory, manufacturing timeline, or technical guarantee is implied. The team evaluates each opportunity directly." label="Start a tables and venue inquiry" to="/contact?inquiry=Tables%20%2F%20Venue%20Partnership" secondaryLabel="Ask about an event" secondaryTo="/contact?inquiry=Host%20an%20Event" />
    </>
  );
}
