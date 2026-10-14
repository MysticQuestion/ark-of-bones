import { ArrowRight, BookOpen, CalendarDays, PlayCircle, ShoppingBag } from 'lucide-react';
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
    text: 'Recorded matches, highlights, and stories from around the table.',
    to: '/around-the-table',
    action: 'Watch',
    icon: PlayCircle,
  },
  {
    title: 'Events',
    text: 'Gatherings, competition, and news from the Ark of Bones community.',
    to: '/events',
    action: 'See events',
    icon: CalendarDays,
  },
  {
    title: 'Game Education',
    text: 'Learn dominoes, Big Six Bones, Spades, Euchre, Booray, Tonk, and Poker.',
    to: '/learn',
    action: 'Learn the games',
    icon: BookOpen,
  },
  {
    title: 'Shop',
    text: 'Clothing and accessories from Ark of Bones, Big Six Bones, and Domino Mother Fucker.',
    to: '/shop',
    action: 'Visit the shop',
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
            Dominoes have always been more than a game. Ark of Bones celebrates the players, traditions, rivalries, and stories that make the table a gathering place. Explore the games, discover the stories, and shop the collection.
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
          <h2>More Than a Game</h2>
          <p>
            From neighborhood gatherings to competitive play, Ark of Bones documents the games and the people who give them meaning.
          </p>
          <p>
            Discover original storytelling, guides to the games, and designs inspired by the culture of play.
          </p>
          <Link className="button button--gold" to="/about">
            Read the Story<ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="content-band home-shop-edit home-destinations" aria-labelledby="home-destinations-title">
        <div className="home-shop-heading">
          <div>
            <h2 id="home-destinations-title">Explore Ark of Bones</h2>
            <p>The games, stories, merchandise, and community behind the name.</p>
          </div>
        </div>
        <div className="home-destination-grid">
          {platformCards.map(({ title, text, to, action, icon: Icon }) => (
            <article className="product-card home-platform-card" key={title}>
              <div className="product-card-image home-platform-card__icon" aria-hidden="true">
                <Icon />
              </div>
              <div className="product-card-body">
                <h3>{title}</h3>
                <p>{text}</p>
                <Link className="button button--dark" to={to}>
                  {action}<ArrowRight aria-hidden="true" />
                </Link>
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
