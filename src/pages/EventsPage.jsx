import { ArrowRight, Building2, PartyPopper, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';
import eventHero from '../assets/editorial/events-1.webp';
import eventTable from '../assets/editorial/events-2.webp';
import eventRacks from '../assets/editorial/events-3.webp';

const eventFormats = [
  {
    title: 'Private gatherings',
    body: 'Milestone celebrations, reunions, hosted game nights, and gatherings shaped around the people in the room.',
    icon: PartyPopper,
  },
  {
    title: 'Venue activations',
    body: 'Domino programming for hospitality and entertainment spaces, with the table, audience, and production needs scoped together.',
    icon: Building2,
  },
  {
    title: 'Cultural programs',
    body: 'Community, institutional, and team experiences that treat dominoes as both competition and shared culture.',
    icon: Users,
  },
];

export default function EventsPage() {
  return (
    <>
      <SEO
        title="Events"
        description="Follow confirmed Ark of Bones domino events and inquire about private gatherings, venue activations, and cultural programs."
        path="/events"
        image={eventHero}
      />

      <header className="editorial-mast">
        <p className="eyebrow">Events</p>
        <h1>Dates publish when they are confirmed.</h1>
        <div className="editorial-rule" aria-hidden="true"><span /></div>
      </header>

      <section className="editorial-wide-media editorial-page-gutter">
        <img
          src={eventHero}
          alt="Players gathered around an Ark of Bones domino table"
          width="1800"
          height="900"
        />
        <p className="editorial-caption">Competition, conversation, and a room gathered around the same game.</p>
      </section>

      <section className="editorial-split editorial-band">
        <div>
          <p className="eyebrow">Schedule</p>
          <h2>No public date is on the calendar yet.</h2>
        </div>
        <div className="editorial-copy">
          <p>Ark of Bones publishes announcements only after the date, city, venue, format, entry details, and participation route have been verified.</p>
          <p className="editorial-muted">For an invitation, private booking, or venue conversation, contact Ark of Bones directly.</p>
          <div className="hero-actions">
            <Link className="button button--gold" to="/contact?inquiry=Host%20an%20Event">Discuss an event<ArrowRight aria-hidden="true" /></Link>
            <Link className="button button--outline" to="/watch">Watch Ark of Bones</Link>
          </div>
        </div>
      </section>

      <section className="editorial-band editorial-band--quiet">
        <div className="editorial-section-heading">
          <p className="eyebrow">Around the table</p>
          <div className="editorial-rule" aria-hidden="true"><span /></div>
        </div>
        <div className="editorial-gallery editorial-gallery--pair">
          <figure>
            <img src={eventTable} alt="A full Ark of Bones table in active play" width="1400" height="700" loading="lazy" />
            <figcaption>The table carries the game; the people give the event its character.</figcaption>
          </figure>
          <figure>
            <img src={eventRacks} alt="Players using illuminated domino racks" width="1400" height="700" loading="lazy" />
            <figcaption>Illuminated racks keep each hand readable without pulling attention away from play.</figcaption>
          </figure>
        </div>
      </section>

      <section className="editorial-band editorial-band--light">
        <div className="editorial-section-heading">
          <p className="eyebrow">Event formats</p>
          <h2>Build the gathering around the occasion.</h2>
        </div>
        <div className="editorial-format-grid">
          {eventFormats.map(({ title, body, icon: Icon }) => (
            <article key={title}>
              <Icon aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="For hosts and venues"
        title="Put a real room and audience around the game."
        description="Share the occasion, city, space, expected guests, and what you want the experience to accomplish."
        label="Request an event conversation"
        to="/contact?inquiry=Host%20an%20Event"
        secondaryLabel="Review the table"
        secondaryTo="/tables"
      />
    </>
  );
}
