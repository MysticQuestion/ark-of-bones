import { ArrowRight, CalendarDays, Handshake, Play, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import VideoCard from '../components/VideoCard';
import { ASSETS, BRAND, SITE_URL } from '../config/brand';
import { CONTACT } from '../config/contact';
import { featuredVideo } from '../data/videos';

const pathways = [
  {
    title: 'Play',
    label: 'Events',
    description: 'Find public dates, participation details, and hosted competition.',
    to: '/events',
    icon: CalendarDays,
  },
  {
    title: 'Host',
    label: 'Venues and partners',
    description: 'Build a domino program for a venue, organization, campus, or community.',
    to: '/contact?inquiry=Tables%20%2F%20Venue%20Partnership',
    icon: Handshake,
  },
  {
    title: 'Shop',
    label: 'Official merchandise',
    description: 'Buy the published collection through secure Squarespace checkout.',
    to: '/shop',
    icon: ShoppingBag,
  },
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
          </div>
          <p className="hero-declaration">Domino entertainment built for competition, audiences, and culture.</p>
          <p className="home-description">Live play. Official competition systems. Original media.</p>
          <div className="hero-actions">
            <Link className="button button--gold" to="/contact?inquiry=Tables%20%2F%20Venue%20Partnership">
              Bring Ark of Bones to your venue<ArrowRight aria-hidden="true" />
            </Link>
            <Link className="button button--light" to="/watch"><Play aria-hidden="true" />Watch</Link>
          </div>
        </div>
      </section>

      <section className="content-band media-preview">
        <div className="media-preview-copy">
          <p className="eyebrow">See it in action</p>
          <h2>The game explains itself best on screen.</h2>
          <p>Watch competition, personalities, instruction, and the table experience without another layer of sales copy.</p>
          <Link className="button button--outline" to="/watch">Open the watch hub<ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="media-preview-frame">
          {featuredVideo ? <VideoCard video={featuredVideo} /> : null}
        </div>
      </section>

      <section className="image-story image-story--reverse">
        <div className="image-story-media">
          <SafeImage
            src={ASSETS.table}
            alt="Ark of Bones domino table prepared for live play"
            fallbackAlt="Ark of Bones table experience"
            width="1600"
            height="1200"
            loading="lazy"
          />
        </div>
        <div className="image-story-copy">
          <p className="eyebrow">The signature experience</p>
          <h2>The table is the field of play, not the whole business.</h2>
          <p>Cameras, sound, screens, and guest sightlines make the game visible. The larger system adds rules, rankings, sanctioned events, and repeatable competition.</p>
          <Link className="button button--dark" to="/official-play">See the official-play system<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="content-band pathway-band" aria-labelledby="pathways-title">
        <SectionHeader id="pathways-title" eyebrow="Get involved" title="Three direct ways to enter" />
        <div className="pathway-grid">
          {pathways.map(({ icon: Icon, ...pathway }, index) => (
            <Link className="pathway-card" to={pathway.to} key={pathway.title}>
              <span className="pathway-number">0{index + 1}</span>
              <Icon aria-hidden="true" />
              <p className="eyebrow">{pathway.label}</p>
              <h3>{pathway.title}</h3>
              <p>{pathway.description}</p>
              <span className="text-link">Continue <ArrowRight aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="image-story">
        <div className="image-story-media">
          <SafeImage
            src={ASSETS.players}
            alt="Players sharing a domino game together"
            fallbackAlt="Domino players gathered around a table"
            width="1800"
            height="1200"
            loading="lazy"
          />
        </div>
        <div className="image-story-copy">
          <p className="eyebrow">Around the Table</p>
          <h2>Record the people, not only the score.</h2>
          <p>A filmed family game can preserve voices, stories, jokes, rivalries, and knowledge that disappear when nobody records them.</p>
          <Link className="button button--dark" to="/around-the-table">Explore legacy sessions<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <CTASection
        eyebrow="Official play pilot"
        title="Make the next game count."
        description="Ark of Bones is developing rules, rankings, sanctioned events, referee certification, and automated scoring through a measured pilot before wider expansion."
        label="Explore official play"
        to="/official-play"
        secondaryLabel="Start a partnership inquiry"
        secondaryTo="/contact?inquiry=Official%20Play%20%2F%20Sanctioning"
      />
    </>
  );
}
