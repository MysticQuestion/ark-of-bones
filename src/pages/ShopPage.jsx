import { CheckCircle2, ExternalLink, Layers3, ShoppingBag } from 'lucide-react';
import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS, SUBSIDIARY_BRANDS } from '../config/brand';
import {
  galleryDepartments,
  galleryProducts,
  departmentFilters,
  officialProducts,
  productFilters,
  STORE_URL,
} from '../data/products';

export default function ShopPage() {
  const [collection, setCollection] = useState('official');
  const [brandFilter, setBrandFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  const visibleProducts = useMemo(() => {
    const source = collection === 'official' ? officialProducts : galleryProducts;

    return source.filter((product) => {
      const brandMatches = brandFilter === 'all' || product.brandKey === brandFilter;
      const departmentMatches =
        collection === 'official'
        || departmentFilter === 'all'
        || product.departmentId === departmentFilter;

      return brandMatches && departmentMatches;
    });
  }, [brandFilter, collection, departmentFilter]);

  const productSchema = officialProducts.map((product) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { '@type': 'Brand', name: product.brand },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.price.replace('$', ''),
      url: product.href,
    },
  }));

  const switchCollection = (nextCollection) => {
    setCollection(nextCollection);
    setDepartmentFilter('all');
  };

  return (
    <>
      <SEO
        title="Shop"
        description={`Shop Ark of Bones, ${SUBSIDIARY_BRANDS.bigSixBones.name}, and ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} apparel, headwear, drinkware, and accessories.`}
        path="/shop"
        schema={productSchema}
      />
      <PageHero
        eyebrow="Official merchandise"
        title="Wear the brand. Carry the culture."
        description="Shop available styles and explore the full Ark of Bones collection."
        image={ASSETS.event}
        compact
      />

      <section className="shop-status-band" aria-label="Merchandise collection overview">
        <div><strong>{officialProducts.length}</strong><span>Available online</span></div>
        <div><strong>{galleryProducts.length}</strong><span>Collection pieces</span></div>
        <div><strong>{galleryDepartments.length}</strong><span>Product categories</span></div>
        <div><strong>Ark Store</strong><span>Shop and checkout</span></div>
      </section>

      <section className="content-band shop-page">
        <div className="shop-toolbar">
          <SectionHeader
            eyebrow="Choose a collection"
            title={collection === 'official' ? 'Available now' : 'Explore the full collection'}
            description={
              collection === 'official'
                ? 'Open the Ark of Bones store for current prices and checkout.'
                : 'Browse apparel, headwear, drinkware, and accessories. Ask us about any piece that catches your eye.'
            }
          />
          {collection === 'official' ? (
            <a className="button button--gold" href={STORE_URL} target="_blank" rel="noopener noreferrer">
              Open official store<ExternalLink aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <div className="collection-switcher" role="group" aria-label="Choose merchandise collection">
          <button
            type="button"
            className={collection === 'official' ? 'is-active' : ''}
            aria-pressed={collection === 'official'}
            onClick={() => switchCollection('official')}
          >
            <ShoppingBag aria-hidden="true" />
            <span>Shop online<strong>{officialProducts.length} products with prices</strong></span>
          </button>
          <button
            type="button"
            className={collection === 'gallery' ? 'is-active' : ''}
            aria-pressed={collection === 'gallery'}
            onClick={() => switchCollection('gallery')}
          >
            <Layers3 aria-hidden="true" />
            <span>Full collection<strong>{galleryProducts.length} pieces across six categories</strong></span>
          </button>
        </div>

        <div className="shop-controls">
          <div className="filter-control" role="group" aria-label="Filter products by brand">
            {productFilters.map((item) => (
              <button
                key={item.value}
                type="button"
                className={brandFilter === item.value ? 'is-active' : ''}
                aria-pressed={brandFilter === item.value}
                onClick={() => setBrandFilter(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
          {collection === 'gallery' ? (
            <label className="department-filter">
              <span>Category</span>
              <select value={departmentFilter} onChange={(event) => setDepartmentFilter(event.target.value)}>
                {departmentFilters.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
                ))}
              </select>
            </label>
          ) : null}
        </div>

        <div className={`shop-disclosure${collection === 'gallery' ? ' shop-disclosure--gallery' : ''}`}>
          <CheckCircle2 aria-hidden="true" />
          <p>
            {collection === 'official'
              ? 'Prices and checkout are handled by the Ark of Bones store.'
              : 'Interested in a collection piece? Use its inquiry button to ask about availability, sizing, and ordering.'}
          </p>
        </div>

        <div className="shop-results-heading" aria-live="polite">
          <strong>{visibleProducts.length}</strong>
          <span>{collection === 'official' ? 'products shown' : 'collection pieces shown'}</span>
        </div>

        {visibleProducts.length ? (
          <div className={`product-grid${collection === 'gallery' ? ' product-grid--gallery' : ''}`}>
            {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="shop-empty" role="status">
            <h3>No products match these filters.</h3>
            <button type="button" onClick={() => { setBrandFilter('all'); setDepartmentFilter('all'); }}>
              Reset filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}
