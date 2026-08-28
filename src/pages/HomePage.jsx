import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import VideoCard from '../components/VideoCard';
import { ASSETS, BRAND, SITE_URL } from '../config/brand';
import { CONTACT } from '../config/contact';
import { officialProducts } from '../data/products';
import { featuredVideo } from '../data/videos';

const index = [
  { label: 'Competition', title: 'Official Play', state: 'Development', to: '/official-play' },
  { label: 'Live', title: 'Events', state: 'Schedule + archive', to: '/events' },
  { label: 'Media', title: 'Watch', state: 'Films + matches', to: '/watch' },
  { label: 'Commerce', title: 'Shop', state: `${officialProducts.length} published products`, to: '/shop' },
];

export default function HomePage() {
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: BRAND.name,
      url: SITE_URL,
      email: CONTACT.email,
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
        description="Ark of Bones: domino competition, events, film, official play development, tables, and published merchandise."
        path="/"
        schema={schema}
      />

      <section className="institutional-hero" style={{ '--institutional-hero-image': `url("${ASSETS.hero}")` }}>
        <div className="institutional-hero-shade" />
        <div className="institutional-hero-inner">
          <h1 className="sr-only">Ark of Bones</h1>
          <img
            className="institutional-mark"
            src={ASSETS.heroLogoSmall}
            srcSet={`${ASSETS.heroLogoSmall} 1440w, ${ASSETS.heroLogo} 4096w`}
            sizes="(max-width: 720px) 68vw, 420px"
            width="4096"
            height="3026"
            alt="Ark of Bones"
            fetchPriority="high"
          />
          <div className="institutional-hero-actions">
            <Link to="/events">Events <ArrowRight aria-hidden="true" /></Link>
            <Link to="/watch">Watch <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="institutional-index" aria-label="Ark of Bones index">
        {index.map((item) => (
          <Link className="institutional-index-item" to={item.to} key={item.title}>
            <span className="institutional-index-label">{item.label}</span>
            <strong>{item.title}</strong>
            <span>{item.state}</span>
            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </section>

      {featuredVideo ? (
        <section className="editorial-feature">
          <div className="editorial-feature-copy">
            <span className="institutional-index-label">Film</span>
            <h2>{featuredVideo.title}</h2>
            <span>{featuredVideo.uploadDate}</span>
            <Link className="text-link" to="/watch">Watch archive <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className="editorial-feature-media">
            <VideoCard video={featuredVideo} />
          </div>
        </section>
      ) : null}

      <section className="home-shop" aria-labelledby="home-shop-title">
        <div className="home-section-heading">
          <div>
            <span className="institutional-index-label">Shop</span>
            <h2 id="home-shop-title">Published collection</h2>
          </div>
          <Link className="text-link" to="/shop">All products <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="product-grid product-grid--home">
          {officialProducts.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="record-feature">
        <SafeImage
          src={ASSETS.players}
          alt="Domino players gathered around a table"
          fallbackAlt="Domino players gathered around a table"
          width="1800"
          height="1200"
          loading="lazy"
        />
        <div className="record-feature-copy">
          <span className="institutional-index-label">Record</span>
          <h2>Around the Table</h2>
          <Link className="text-link" to="/around-the-table">Open archive <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
