import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import eventHero from '../assets/editorial/events-1.webp';
import eventTable from '../assets/editorial/events-2.webp';
import eventRacks from '../assets/editorial/events-3.webp';

const formats = ['Private gatherings', 'Venue programs', 'Cultural programs'];

export default function EventsPage() {
  return (
    <>
      <SEO
        title="Events"
        description="Ark of Bones events, competition records, and confirmed dates."
        path="/events"
        image={eventHero}
      />

      <header className="record-mast">
        <div>
          <p className="eyebrow">Events / 2026</p>
          <h1>Calendar</h1>
        </div>
        <p className="record-mast__status">No public date confirmed</p>
      </header>

      <figure className="record-lead-image">
        <img src={eventHero} alt="Players gathered around an Ark of Bones domino table" width="1800" height="900" />
        <figcaption>Ark of Bones / live play</figcaption>
      </figure>

      <section className="event-ledger" aria-labelledby="event-ledger-title">
        <div className="event-ledger__head">
          <p className="eyebrow" id="event-ledger-title">Schedule</p>
          <span>Confirmed records only</span>
        </div>
        <div className="event-ledger__empty">
          <span>—</span>
          <strong>No public event is currently listed.</strong>
          <Link className="text-link" to="/contact?inquiry=Host%20an%20Event">Event inquiry <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="record-gallery">
        <figure>
          <img src={eventTable} alt="Ark of Bones table in active play" width="1400" height="700" loading="lazy" />
          <figcaption>Table / active play</figcaption>
        </figure>
        <figure>
          <img src={eventRacks} alt="Players using illuminated domino racks" width="1400" height="700" loading="lazy" />
          <figcaption>Rack detail</figcaption>
        </figure>
      </section>

      <section className="record-index">
        <div className="record-index__label"><p className="eyebrow">Formats</p></div>
        <div className="record-index__rows">
          {formats.map((format, index) => (
            <div className="record-index__row" key={format}>
              <span>0{index + 1}</span>
              <strong>{format}</strong>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
