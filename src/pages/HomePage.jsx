import { ArrowRight, BookOpen, CalendarDays, PlayCircle, ShoppingBag } from 'lucide-react';
import eventPhoto from '../assets/editorial/events-1.webp';
import gamePhoto from '../assets/editorial/tables-2.webp';
import tablePhoto from '../assets/editorial/tables-1.webp';
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
    eyebrow: 'On the table',
    text: 'Matches, memorable plays, and the personalities behind every hand.',
    to: '/around-the-table',
    action: 'Watch the play',
    image: eventPhoto,
    alt: 'Players gathered for an Ark of Bones game',
    icon: PlayCircle,
  },
  {
    title: 'Events',
    eyebrow: 'Around the table',
    text: 'Gatherings, competition, and a community brought together through play.',
    to: '/events',
    action: 'Explore events',
    image: tablePhoto,
    alt: 'An Ark of Bones gaming table',
    icon: CalendarDays,
  },
  {
    title: 'How to Play',
    eyebrow: 'Know the game',
    text: 'Learn the rules and strategy behind dominoes and six favorite card and tile games.',
    to: '/learn',
    action: 'Learn the games',
    image: gamePhoto,
    alt: 'Detail of the Ark of Bones game table',
    icon: BookOpen,
  },
  {
    title: 'The Collection',
    eyebrow: 'Ark of Bones originals',
    text: 'Clothing and accessories from Ark of Bones, Big Six Bones, and Domino Mother Fucker.',
    to: '/shop',
    action: 'Explore the shop',
    image: officialProducts[0].image,
    alt: 'Ark of Bones branded merchandise',
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
            <p className="eyebrow">The Ark of Bones experience</p>
            <h2 id="home-destinations-title">The Game. The People. The Culture.</h2>
            <p>Every hand has a history. Find your place at the table.</p>
          </div>
        </div>
        <div className="home-destination-grid">
          {platformCards.map(({ title, eyebrow, text, to, action, image, alt, icon: Icon }) => (
            <article className="home-destination-card" key={title}>
              <div className="home-destination-card__media">
                <SafeImage src={image} alt={alt} width="900" height="1060" loading="lazy" />
              </div>
              <div className="home-destination-card__content">
                <p className="home-destination-card__eyebrow"><Icon aria-hidden="true" />{eyebrow}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link className="home-destination-card__link" to={to}>
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
