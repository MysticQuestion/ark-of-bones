import { ArrowRight, CalendarDays, Handshake, Play, ShoppingBag, Tv, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandCard from '../components/BrandCard';
import CTASection from '../components/CTASection';
import EmptyState from '../components/EmptyState';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS, BRAND, SITE_URL } from '../config/brand';
import { CONTACT } from '../config/contact';
import { brands } from '../data/brands';
import { events } from '../data/events';
import { featuredVideo } from '../data/videos';

const pathways = [
  { title: 'Play', label: 'Events', description: 'Find the next place to play, watch, and gather.', to: '/events', icon: CalendarDays },
  { title: 'Watch', label: 'Live and on-demand media', description: 'Matches, interviews, and stories from around the table.', to: '/watch', icon: Tv },
  { title: 'Partner', label: 'Tables and venues', description: 'Build a live domino experience for your venue or crowd.', to: '/tables', icon: Handshake },
  { title: 'Shop', label: 'Official merchandise', description: 'Apparel, headwear, drinkware, and accessories from the Ark.', to: '/shop', icon: ShoppingBag },
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
        <SectionHeader id="pathways-title" eyebrow="Start here" title="Choose your seat at the table" description="Play, watch, build an experience, or carry the brand." />
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
        <SectionHeader eyebrow="Events" title="Meet at the table" description="Find dates, venues, host brands, and ways to join the next gathering." />
        {events.upcoming.length ? null : (
          <EmptyState title="Ready for the next table" description="Follow Ark of Bones for event announcements, or bring the experience to your city." actionLabel="Host an event" actionTo="/contact?inquiry=Host%20an%20Event" />
        )}
      </section>

      <section className="content-band media-preview">
        <div className="media-preview-copy">
          <p className="eyebrow">Watch</p>
          <h2>The table is also a stage.</h2>
          <p>Ark of Bones media brings viewers closer to the strategy, personalities, sound, and culture surrounding competitive play.</p>
          <Link className="button button--outline" to="/watch">Watch Ark of Bones<ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="media-preview-frame">
          {featuredVideo ? null : (
            <EmptyState title="The game continues on YouTube" description="Watch match footage, clips, and stories from around the table." actionLabel="Watch on YouTube" actionTo={CONTACT.social.youtube} external />
          )}
        </div>
      </section>

      <section className="image-story image-story--reverse">
        <div className="image-story-media"><img src={ASSETS.event} alt="Ark of Bones domino table experience at a live gathering" width="1600" height="1200" loading="lazy" /></div>
        <div className="image-story-copy">
          <p className="eyebrow">The table experience</p>
          <h2>Built to gather a room around the game.</h2>
          <p>Ark of Bones combines domino play with connected screens, live-game streaming, and an event environment designed for players and audiences.</p>
          <Link className="button button--dark" to="/tables">Explore tables and venue partnerships<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="content-band brand-family-preview">
        <SectionHeader eyebrow="Brand family" title="One house. Two unmistakable voices." description="Domino Mother Fucker carries the attitude. Big Six Bones carries the competition. Both belong to Ark of Bones." />
        <div className="brand-grid">{brands.map((brand) => <BrandCard key={brand.key} brand={brand} />)}</div>
      </section>

      <section className="mission-band">
        <div>
          <p className="eyebrow">Culture and community</p>
          <h2>The game lives wherever people gather.</h2>
        </div>
        <div>
          <p>Across barbershops, community centers, backyards, cafés, and street corners, dominoes has endured as a shared language of competition, tradition, and connection.</p>
          <p>Ark of Bones creates spaces for experienced players, new players, families, and communities to meet one another through the table.</p>
        </div>
        <Users aria-hidden="true" />
      </section>

      <section className="content-band learn-preview">
        <SectionHeader eyebrow="Learn" title="Know the game before the first tile lands" description="Start with domino fundamentals and Big Six Bones, then explore the full seven-game resource center." />
        <div className="learn-preview-grid">
          <Link to="/learn#dominoes"><span>01</span><h3>Dominoes</h3><p>Objective, setup, board control, scoring, strategy, and table etiquette.</p><ArrowRight aria-hidden="true" /></Link>
          <Link to="/learn#big-six-bones"><span>02</span><h3>Big Six Bones</h3><p>Fast rounds, double-six pressure, visible scoring, and agreed house rules.</p><ArrowRight aria-hidden="true" /></Link>
          <Link to="/learn"><span>07</span><h3>Full resource center</h3><p>Spades, Euchre, Booray, Tonk, and Poker complete the collection.</p><ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <CTASection eyebrow="Partnerships" title="Put real domino competition in front of your crowd." description="Talk with Ark of Bones about venues, live events, sponsorship, media, or a collaboration built around the table." label="Start a partnership inquiry" to="/contact?inquiry=Sponsorship" secondaryLabel="Explore tables" secondaryTo="/tables" />
    </>
  );
}
