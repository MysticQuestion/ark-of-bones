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
        description="Custom domino tables from Ark of Bones. Configure felt, engraving, dimensions, and project details, request a quote, or shop current Ark of Bones merchandise."
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
          <h1 className="hero-declaration">Custom Domino Tables</h1>
          <p className="home-description">
            Built-to-order tables for homes, game rooms, hospitality spaces, and other commissioned settings. Configure the felt, engraving, dimensions, and intended use before requesting a quote.
          </p>
          <div className="hero-actions">
            <Link className="button button--gold" to="/tables#build-studio">
              Design a Table<Table2 aria-hidden="true" />
            </Link>
            <Link className="button button--outline" to="/shop">
              Shop<ShoppingBag aria-hidden="true" />
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
          <h2>Custom Tables</h2>
          <p>
            Ark of Bones tables can be configured by intended use, felt color, engraving, requested dimensions, and project notes.
          </p>
          <p>
            Each request is reviewed by Anthony Covington before pricing, production timing, and delivery terms are confirmed.
          </p>
          <Link className="button button--gold" to="/tables#build-studio">
            Design a Table<ArrowRight aria-hidden="true" />
          </Link>
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
