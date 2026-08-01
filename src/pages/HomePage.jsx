import { ArrowRight, CalendarDays, Handshake, Play, ShoppingBag, Tv, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandCard from '../components/BrandCard';
import CampaignBand from '../components/CampaignBand';
import CTASection from '../components/CTASection';
import EmptyState from '../components/EmptyState';
import EventCard from '../components/EventCard';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import VideoCard from '../components/VideoCard';
import { ASSETS, BRAND, SITE_URL } from '../config/brand';
import { CONTACT } from '../config/contact';
import { brands } from '../data/brands';
import { events } from '../data/events';
import { campaigns } from '../data/promotions';
import { featuredVideo } from '../data/videos';

const pathways = [
  { title: 'Play', label: 'Events', description: 'Confirmed dates, participation details, and hosted experiences.', to: '/events', icon: CalendarDays },
  { title: 'Watch', label: 'Media', description: 'Competition, interviews, instruction, and culture on screen.', to: '/watch', icon: Tv },
  { title: 'Partner', label: 'Tables and venues', description: 'Build an audience-ready domino program for a venue or event.', to: '/tables', icon: Handshake },
  { title: 'Shop', label: 'Official merchandise', description: 'Buy published apparel and explore the wider design archive.', to: '/shop', icon: ShoppingBag },
];

export default function HomePage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: BRAND.name,
      url: SITE_URL,
      email: CONTACT.email,
      telephone: '+1-951-599-0214',
      sameAs: Object.values(CONTACT.social),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: BRAND.name,
      url: SITE_URL,
      description: BRAND.description,
    },
  ];

  return (
    <>
      <SEO title={BRAND.name} description={BRAND.description} path="/" schema={schema} />
      <section
        className="home-hero home-hero--logo"
        style={{
          '--home-hero-image': `url("${ASSETS.hero}")`,
          '--hero-logo-image': `url("${ASSETS.heroLogo}")`,
        }}
      >
        <div className="home-hero-content home-hero-content--center">
          <p className="hero-brand-line">{BRAND.proposition}</p>
          <h1 className="sr-only">Ark of Bones</h1>
          <div className="hero-logo-stage" aria-hidden="true">
            <img
              className="hero-logo"
              src={ASSETS.heroLogoSmall}
              srcSet={`${ASSETS.heroLogoSmall} 1440w, ${ASSETS.heroLogo} 4096w`}
              sizes="(max-width: 720px) 88vw, 480px"
              alt=""
              width="4096"
              height="3026"
              fetchPriority="high"
            />
            <span className="hero-logo-shine" />
          </div>
          <p className="hero-declaration">Dominoes belong on the main stage.</p>
          <p className="home-description">Live competition. Connected tables. Original media. Official merchandise.</p>
          <div className="hero-actions">
            <Link className="button button--gold" to="/events">Find an event<ArrowRight aria-hidden="true" /></Link>
            <Link className="button button--light" to="/watch"><Play aria-hidden="true" />Watch now</Link>
            <Link className="button button--outline" to="/contact?inquiry=Tables%20%2F%20Venue%20Partnership">Bring the Ark to your venue</Link>
          </div>
          <Link className="home-shop-link" to="/shop">Shop the collection <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="home-hero-index" aria-label="Ark of Bones areas of focus">
          <span>Live play</span><span>Filmed competition</span><span>Signature tables</span><span>Community</span>
        </div>
      </section>

      <section className="content-band pathway-band" aria-labelledby="pathways-title">
        <SectionHeader id="pathways-title" eyebrow="Four ways in" title="Choose how you enter the game" description="Join an event, watch the action, build a venue program, or carry the brand." />
        <div className="pathway-grid">
          {pathways.map(({ icon: Icon, ...pathway }, index) => (
            <Link className="pathway-card" to={pathway.to} key={pathway.title}>
              <span className="pathway-number">0{index + 1}</span>
              <Icon aria-hidden="true" />
              <p className="eyebrow">{pathway.label}</p>
              <h3>{pathway.title}</h3>
              <p>{pathway.description}</p>
              <span className="text-link">Explore <ArrowRight aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-band content-band--wood">
        <SectionHeader eyebrow="Events" title="The next date starts here" description="Confirmed dates publish with venue, format, and participation details." />
        {events.upcoming.length ? (
          <div className="event-list">{events.upcoming.slice(0, 3).map((event) => <EventCard key={event.id} event={event} />)}</div>
        ) : (
          <EmptyState title="The calendar is open" description="No public event is listed today. Follow the official channels for announcements or request a hosted program." actionLabel="Discuss an event" actionTo="/contact?inquiry=Host%20an%20Event" />
        )}
      </section>

      <section className="content-band media-preview">
        <div className="media-preview-copy">
          <p className="eyebrow">Watch</p>
          <h2>See every angle of the game.</h2>
          <p>Competition, personalities, instruction, and cultural storytelling move from the table to the screen.</p>
          <Link className="button button--outline" to="/watch">Open the watch hub<ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="media-preview-frame">
          {featuredVideo ? (
            <VideoCard video={featuredVideo} />
          ) : (
            <EmptyState title="The channel is ready" description="Open YouTube for published matches, clips, and cultural stories." actionLabel="Visit YouTube" actionTo={CONTACT.social.youtube} external />
          )}
        </div>
      </section>

      <section className="image-story image-story--reverse">
        <div className="image-story-media"><SafeImage src={ASSETS.table} alt="Handcrafted Ark of Bones domino table at a tournament" fallbackAlt="Ark of Bones table experience; Ark of Bones mark shown" width="1600" height="1200" loading="lazy" /></div>
        <div className="image-story-copy">
          <p className="eyebrow">Tables and venues</p>
          <h2>The room follows the action.</h2>
          <p>Connected screens, live-game viewing, and deliberate guest flow give players focus and audiences a clear view.</p>
          <Link className="button button--dark" to="/tables">See the venue experience<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="content-band brand-family-preview">
        <SectionHeader eyebrow="Brand family" title="Two identities. One Ark." description="Domino Mother Fucker owns the expression. Big Six Bones owns the competitive edge." />
        <div className="brand-grid">{brands.map((brand) => <BrandCard compact key={brand.key} brand={brand} />)}</div>
      </section>

      <CampaignBand campaign={campaigns.homeShop} />

      <section className="mission-band">
        <div>
          <p className="eyebrow">Culture and community</p>
          <h2>A game handed forward.</h2>
        </div>
        <div>
          <p>Across barbershops, community centers, backyards, cafés, and street corners, dominoes has endured as a shared language of competition, tradition, and connection.</p>
          <p>Events, education, and media make room for experienced players, new players, families, and future generations.</p>
        </div>
        <Users aria-hidden="true" />
      </section>

      <section className="content-band learn-preview">
        <SectionHeader eyebrow="Learn" title="Read the room. Know the rules." description="Start with domino fundamentals and Big Six Bones, then move through five additional game guides." />
        <div className="learn-preview-grid">
          <Link to="/learn#dominoes"><span>01</span><h3>Dominoes</h3><p>Objective, setup, board control, scoring, strategy, and table etiquette.</p><ArrowRight aria-hidden="true" /></Link>
          <Link to="/learn#big-six-bones"><span>02</span><h3>Big Six game guide</h3><p>Fast rounds, double-six pressure, visible scoring, and agreed house rules.</p><ArrowRight aria-hidden="true" /></Link>
          <Link to="/learn"><span>07</span><h3>Full resource center</h3><p>Spades, Euchre, Booray, Tonk, and Poker complete the collection.</p><ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <CTASection eyebrow="Partnerships" title="Turn an audience into participants." description="Build a venue program, event, sponsorship, media feature, or cultural collaboration around domino play." label="Open a partnership inquiry" to="/contact?inquiry=Sponsorship" secondaryLabel="Review venue formats" secondaryTo="/tables" />
    </>
  );
}
