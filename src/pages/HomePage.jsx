import { ArrowRight, BookOpen, CalendarDays, PlayCircle, ShoppingBag, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import { ASSETS, BRAND, SITE_URL } from '../config/brand';
import { CONTACT } from '../config/contact';
import { officialProducts } from '../data/products';

const platformCards = [
  {
    title: 'Watch',
    text: 'Live and recorded domino action, replays, highlights, and culture around the table.',
    to: '/around-the-table',
    icon: PlayCircle,
  },
  {
    title: 'Events',
    text: 'Official updates, community gatherings, tournament visibility, and public announcements.',
    to: '/coming-soon',
    icon: CalendarDays,
  },
  {
    title: 'Game Education',
    text: 'Rules, setup, scoring, etiquette, and primers for Dominoes, Big Six Bones, Spades, Euchre, Booray, Tonk, and Poker.',
    to: '/library',
    icon: BookOpen,
  },
  {
    title: 'Shop',
    text: 'Confirmed Ark of Bones, Big Six Bones, and Domino Mother Fucker merch and accessories.',
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
      <SEO
        title={BRAND.name}
        description="Ark of Bones is a domino culture platform for live and recorded play, events, game education, official merch, publishing, and community connection."
        path="/"
        schema={schema}
      />

      <section
        className="home-hero home-hero--logo table-first-hero"
        style={{ '--home-hero-image': `url("${ASSETS.hero}")` }}
      >
        <div className="home-hero-content home-hero-content--center">
          <p className="hero-brand-line">Ark of Bones</p>
          <div className="hero-logo-stage" aria-hidden="true">
            <img
              className="hero-logo"
              src={ASSETS.heroLogo}
              srcSet={`${ASSETS.mark} 384w, ${ASSETS.heroLogo} 1440w`}
              sizes="(max-width: 720px) min(88vw, 360px), (max-height: 760px) min(38vw, 420px), min(42vw, 480px)"
              alt=""
              width="1440"
              height="1064"
              fetchPriority="high"
            />
          </div>
          <h1 className="hero-declaration">Domino Culture. Live Play. Official Goods.</h1>
          <p className="home-description">
            Ark of Bones brings together domino culture, competitive play, recorded media, education, official merch, publishing, and community connection. The app now represents only confirmed public offerings and does not advertise table sales or customization services.
          </p>
          <div className="hero-actions">
            <Link className="button button--gold" to="/around-the-table">
              Watch Ark of Bones<PlayCircle aria-hidden="true" />
            </Link>
            <Link className="button button--outline" to="/shop">
              Shop Official Merch<ShoppingBag aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="content-band table-home-feature">
        <div className="table-home-feature-media">
          <SafeImage
            src={ASSETS.hero}
            alt="Ark of Bones domino culture photography"
            fallbackAlt="Ark of Bones domino culture photography"
            width="1800"
            height="1200"
            loading="lazy"
          />
        </div>
        <div className="table-home-feature-copy">
          <h2>What the site should promote</h2>
          <p>
            The correct focus is not custom furniture. The stronger public offer is Ark of Bones as a premium domino culture and media platform: games, events, watchable play, merch, education, and publishing.
          </p>
          <p>
            Every page should direct visitors toward confirmed public actions: watch, learn, shop, follow, read, or contact.
          </p>
          <Link className="button button--gold" to="/about">
            Read the Story<ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="content-band home-shop-edit">
        <div className="home-shop-heading">
          <div>
            <h2>Core Platform</h2>
            <p>Actual site pillars, stripped of invented services and aligned with the Ark of Bones brand system.</p>
          </div>
        </div>
        <div className="product-grid">
          {platformCards.map(({ title, text, to, icon: Icon }) => (
            <article className="product-card" key={title}>
              <div className="product-card__image product-card__image--placeholder">
                <Icon aria-hidden="true" />
              </div>
              <div className="product-card__body">
                <p className="eyebrow"><Users aria-hidden="true" /> Ark of Bones</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link className="button button--outline" to={to}>Open {title}<ArrowRight aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-band home-shop-edit">
        <div className="home-shop-heading">
          <div>
            <h2>Shop</h2>
            <p>Ark of Bones, Big Six Bones, and Domino Mother Fucker apparel and accessories.</p>
          </div>
          <Link className="button button--outline" to="/shop">Open Shop<ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="product-grid">
          {officialProducts.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </>
  );
}
