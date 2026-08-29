import { ArrowRight, Camera, Handshake, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS } from '../config/brand';

const partnershipOffers = [
  {
    number: '01',
    title: 'Venue nights',
    items: ['Format', 'Production', 'Replay options', 'Reporting'],
    Icon: MapPin,
  },
  {
    number: '02',
    title: 'Sponsors',
    items: ['Rights', 'On-site presence', 'Content use', 'Post-event report'],
    Icon: Handshake,
  },
  {
    number: '03',
    title: 'Production',
    items: ['Multi-camera capture', 'Interviews', 'Livestream', 'Editing'],
    Icon: Camera,
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <SEO
        title="Partnerships"
        description="Ark of Bones venue, sponsor, and production partnerships."
        path="/partnerships"
      />

      <PageHero
        eyebrow="Partnerships"
        title="Venue. Sponsor. Production."
        image={ASSETS.hero}
      >
        <Link className="button button--gold" to="/contact?inquiry=Partnerships">
          Contact<ArrowRight aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="content-band partnership-options" id="partnership-options">
        <div className="partnership-offer-list">
          {partnershipOffers.map(({ number, title, items, Icon }) => (
            <article key={number}>
              <span className="partnership-offer-number">{number}</span>
              <div className="partnership-offer-heading">
                <Icon aria-hidden="true" />
                <h2>{title}</h2>
              </div>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band partnership-measurement">
        <SectionHeader eyebrow="Terms" title="Defined before the event." />
        <div className="partnership-responsibility">
          <ShieldCheck aria-hidden="true" />
          <div>
            <p>Scope, rights, insurance, cancellation, production, and delivery are documented in writing.</p>
            <p>Regulated wagering or jurisdiction-specific gaming activity requires separate legal review.</p>
          </div>
        </div>
      </section>
    </>
  );
}
