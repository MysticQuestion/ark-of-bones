import { ArrowRight, ShoppingBag, Table2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import { ASSETS, BRAND, SITE_URL } from '../config/brand';
import { CONTACT } from '../config/contact';
import { officialProducts } from '../data/products';

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
        description="Ark of Bones builds custom domino tables and a focused collection of domino goods. Configure a table, preview the build, and send the specification directly for a quote."
        path="/"
        schema={schema}
      />

      <section
        className="home-hero home-hero--logo table-first-hero"
        style={{ '--home-hero-image': `url("${ASSETS.table}")` }}
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
          <h1 className="hero-declaration">Custom domino tables, built to be used.</h1>
          <p className="home-description">
            Configure the table before the quote. Review the finish, felt, engraving, intended setting, and build notes in one place.
          </p>
          <div className="hero-actions">
            <Link className="button button--gold" to="/tables#build-studio">
              Build your table<Table2 aria-hidden="true" />
            </Link>
            <Link className="button button--outline" to="/shop">
              Shop the collection<ShoppingBag aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="table-home-feature">
        <div className="table-home-feature-media">
          <SafeImage
            src={ASSETS.table}
            alt="Ark of Bones custom domino table"
            fallbackAlt="Ark of Bones custom domino table"
            width="1800"
            height="1200"
            loading="lazy"
          />
        </div>
        <div className="table-home-feature-copy">
          <p className="eyebrow">The table comes first</p>
          <h2>See the build before you send the request.</h2>
          <p>
            The table studio now keeps the specification and the preview together. Felt, engraving, use case, dimensions, and notes remain visible while the build takes shape.
          </p>
          <p>
            When the configuration is ready, the complete specification can be addressed directly to Anthony for review and quoting.
          </p>
          <Link className="button button--gold" to="/tables#build-studio">
            Open the table studio<ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="content-band home-shop-edit">
        <div className="home-shop-heading">
          <div>
            <p className="eyebrow">Shop</p>
            <h2>The collection stays in one place.</h2>
            <p>Current products and the wider design archive now live together instead of being presented as competing stores.</p>
          </div>
          <Link className="button button--outline" to="/shop">Open the shop<ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="product-grid">
          {officialProducts.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="coming-soon-strip">
        <div>
          <p className="eyebrow">In development</p>
          <h2>Future systems have their own place now.</h2>
          <p>
            Digital play, events, ratings, media, organizer tools, and other unfinished systems are collected on one Coming Soon page instead of being presented beside live products as if they already operate at the same level.
          </p>
        </div>
        <Link className="button button--gold" to="/coming-soon">Preview what is next<ArrowRight aria-hidden="true" /></Link>
      </section>
    </>
  );
}
