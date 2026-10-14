import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import eventHero from '../assets/editorial/events-1.webp';
import eventTable from '../assets/editorial/events-2.webp';
import eventRacks from '../assets/editorial/events-3.webp';
import { eventPhotos } from '../data/media';

export default function EventsPage() {
  const eventPreview = eventPhotos.slice(0, 6);

  return (
    <>
      <SEO title="Events" description="The gatherings, games, and community around Ark of Bones." path="/events" image={eventHero} />
      <header className="editorial-mast">
        <p className="eyebrow">Ark of Bones / Events</p>
        <h1>The Table Brings Us Together.</h1>
        <p>Competition brings the energy. The people make it memorable.</p>
        <div className="editorial-rule" aria-hidden="true"><span /></div>
      </header>
      <section className="editorial-wide-media editorial-page-gutter">
        <img src={eventHero} alt="People gathered around an Ark of Bones domino table" width="1800" height="900" />
        <p className="editorial-caption">The games are part of the tradition. So is gathering to play them.</p>
      </section>
      <section className="editorial-split editorial-band">
        <div>
          <p className="eyebrow">Events & gatherings</p>
          <h2>Come for the game. Stay for the company.</h2>
        </div>
        <div className="editorial-copy">
          <p>Ark of Bones celebrates the competition, conversation, and shared memories that begin when people sit down to play.</p>
          <p>Check back here for event news and announcements. No upcoming public dates have been announced.</p>
          <div className="hero-actions">
            <Link className="button button--gold" to="/around-the-table">Watch Ark of Bones<ArrowRight aria-hidden="true" /></Link>
            <Link className="button button--outline" to="/contact">Get in touch<ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <section className="editorial-band editorial-band--quiet">
        <div className="editorial-section-heading">
          <p className="eyebrow">At the table</p>
          <h2>There is no substitute for being there.</h2>
        </div>
        <div className="editorial-gallery editorial-gallery--pair">
          <figure>
            <img src={eventTable} alt="Ark of Bones game table photographed during play" width="1400" height="700" loading="lazy" />
            <figcaption>Competition and conversation across the table.</figcaption>
          </figure>
          <figure>
            <img src={eventRacks} alt="Detail of the Ark of Bones table and game setup" width="1400" height="700" loading="lazy" />
            <figcaption>A closer look at the table.</figcaption>
          </figure>
        </div>
      </section>

      <section className="editorial-band editorial-band--quiet event-photo-preview">
        <div className="editorial-section-heading">
          <p className="eyebrow">From the table</p>
          <h2>What the room actually looks like.</h2>
          <div className="editorial-rule" aria-hidden="true"><span /></div>
        </div>
        <div className="event-photo-strip">
          {eventPreview.map((photo) => (
            <figure key={photo.id}>
              <SafeImage
                src={photo.src}
                alt={photo.alt}
                fallbackAlt="Ark of Bones event photography"
                width={photo.orientation === 'portrait' ? '900' : '1400'}
                height={photo.orientation === 'portrait' ? '1200' : '900'}
                loading="lazy"
              />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <Link className="button button--outline" to="/media">Open the full media library</Link>
      </section>
    </>
  );
}
