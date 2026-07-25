import { Building2, BriefcaseBusiness, PartyPopper } from 'lucide-react';
import CTASection from '../components/CTASection';
import EmptyState from '../components/EmptyState';
import EventCard from '../components/EventCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS } from '../config/brand';
import { events } from '../data/events';

const experienceFormats = [
  {
    title: 'Private Events',
    note: 'Milestone celebrations, reunions, VIP game nights, and hosted gatherings.',
    detail: 'The format can combine table setup, structured play, optional recording, and branded photo moments.',
    icon: PartyPopper,
  },
  {
    title: 'Casino and Venue Activations',
    note: 'Domino programming for hospitality and entertainment environments.',
    detail: 'Bring together tournament play, screens, audience energy, and sponsor moments that fit the room.',
    icon: Building2,
  },
  {
    title: 'Corporate and Cultural Programs',
    note: 'Team events, community programs, and premium brand experiences.',
    detail: 'Shape the gathering around your audience, venue, and goals for the day.',
    icon: BriefcaseBusiness,
  },
];

export default function EventsPage() {
  return (
    <>
      <SEO title="Events" description="Find Ark of Bones domino events, tournaments, participation details, and venue information." path="/events" />
      <PageHero eyebrow="Play in person" title="Events" description="Find where Ark of Bones is playing next, or bring the table to your city." image={ASSETS.event} />
      <section className="content-band">
        <SectionHeader eyebrow="Upcoming" title="Next at the table" description="Find dates, venues, formats, and ways to join." />
        {events.upcoming.length ? (
          <div className="event-list">{events.upcoming.map((event) => <EventCard key={event.id} event={event} />)}</div>
        ) : (
          <EmptyState title="No event is scheduled at the moment" description="Follow Ark of Bones for the next announcement, or bring an event to your city." actionLabel="Host an event" actionTo="/contact?inquiry=Host%20an%20Event" />
        )}
      </section>
      {events.past.length ? (
        <section className="content-band content-band--quiet">
          <SectionHeader eyebrow="Past events" title="From tables we have shared" description="Highlights and recaps from Ark of Bones gatherings." />
          <div className="event-list">{events.past.map((event) => <EventCard key={event.id} event={event} />)}</div>
        </section>
      ) : null}
      <section className="content-band event-formats">
        <SectionHeader
          eyebrow="Event experiences"
          title="Bring the Ark to rooms where people gather"
          description="Tell us about your crowd, your space, and the kind of gathering you want to create."
        />
        <div className="event-format-grid">
          {experienceFormats.map(({ title, note, detail, icon: Icon }) => (
            <article key={title}>
              <Icon aria-hidden="true" />
              <p className="eyebrow">{note}</p>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection eyebrow="For venues and hosts" title="Create a domino experience people will remember." description="Tell us about your venue, audience, city, and event goals." label="Discuss hosting an event" to="/contact?inquiry=Host%20an%20Event" secondaryLabel="Explore table experiences" secondaryTo="/tables" />
    </>
  );
}
