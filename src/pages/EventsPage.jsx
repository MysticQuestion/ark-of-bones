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
    detail: 'Planning can cover tournament formats, screen output, audience flow, and approved sponsor moments.',
    icon: Building2,
  },
  {
    title: 'Corporate and Cultural Programs',
    note: 'Team events, community programs, and premium brand experiences.',
    detail: 'Each inquiry is qualified around the audience, venue, production needs, and media opportunities.',
    icon: BriefcaseBusiness,
  },
];

export default function EventsPage() {
  return (
    <>
      <SEO title="Events" description="Find verified Ark of Bones domino events, tournaments, participation details, and venue information." path="/events" />
      <PageHero eyebrow="Play in person" title="Events" description="Confirmed dates, venues, host brands, formats, and participation information for the Ark of Bones community." image={ASSETS.event} />
      <section className="content-band">
        <SectionHeader eyebrow="Upcoming" title="Next at the table" description="Only confirmed public dates are listed as upcoming events." />
        {events.upcoming.length ? (
          <div className="event-list">{events.upcoming.map((event) => <EventCard key={event.id} event={event} />)}</div>
        ) : (
          <EmptyState title="No public event is scheduled at the moment" description="Follow Ark of Bones for the next announcement, or begin a conversation about hosting an event in your city." actionLabel="Host an event" actionTo="/contact?inquiry=Host%20an%20Event" />
        )}
      </section>
      <section className="content-band content-band--quiet">
        <SectionHeader eyebrow="Archive" title="Past events" description="Completed events appear here when public details and recaps are available." />
        {events.past.length ? (
          <div className="event-list">{events.past.map((event) => <EventCard key={event.id} event={event} />)}</div>
        ) : (
          <EmptyState title="The public event archive is currently empty" description="Follow the official channels for published recaps and future event announcements." />
        )}
      </section>
      <section className="content-band event-formats">
        <SectionHeader
          eyebrow="Event experiences"
          title="Bring the Ark to rooms where people gather"
          description="Every format begins with a direct planning conversation. No availability, venue, or production commitment is implied until the team confirms it."
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
