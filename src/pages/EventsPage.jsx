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
      <PageHero eyebrow="Play in person" title="Events" description="Confirmed dates, participation details, and hosted formats for players, spectators, and venues." image={ASSETS.event} />
      <section className="content-band">
        <SectionHeader eyebrow="Schedule" title="Confirmed upcoming dates" description="Each listing includes the venue, city, format, host brand, and participation route." />
        {events.upcoming.length ? (
          <div className="event-list">{events.upcoming.map((event) => <EventCard key={event.id} event={event} />)}</div>
        ) : (
          <EmptyState title="No public date is on the calendar" description="Event announcements publish here as soon as the details are confirmed." actionLabel="Discuss hosting" actionTo="/contact?inquiry=Host%20an%20Event" />
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
          title="Choose the format that fits the occasion"
          description="Private celebrations, hospitality activations, and cultural programs each call for a distinct format."
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
      <CTASection eyebrow="For venues and hosts" title="Put a date, room, and audience around the game." description="Share the occasion, location, expected guests, and event objectives." label="Request an event conversation" to="/contact?inquiry=Host%20an%20Event" secondaryLabel="Review venue production" secondaryTo="/tables" />
    </>
  );
}
