import { CheckCircle2, ExternalLink, Layers3, ShoppingBag } from 'lucide-react';
import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS, SUBSIDIARY_BRANDS } from '../config/brand';
import {
  catalogConcepts,
  catalogDepartments,
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
    const source = collection === 'official' ? officialProducts : catalogConcepts;

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
        description={`Explore verified Ark of Bones, ${SUBSIDIARY_BRANDS.bigSixBones.name}, and ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} merchandise plus the complete presentation concept catalog.`}
        path="/shop"
        schema={productSchema}
      />
      <PageHero
        eyebrow="Official store and merchandise catalog"
        title="Wear the brand. Carry the culture."
        description="Shop currently listed merchandise or review every concept from the Ark of Bones merchandise presentation."
        image={ASSETS.event}
        compact
      />

      <section className="shop-status-band" aria-label="Merchandise catalog status">
        <div><strong>{officialProducts.length}</strong><span>Verified store listings</span></div>
        <div><strong>{catalogConcepts.length}</strong><span>Individual concepts</span></div>
        <div><strong>{catalogDepartments.length}</strong><span>Concept departments</span></div>
        <div><strong>External</strong><span>Official checkout</span></div>
      </section>

      <section className="content-band shop-page">
        <div className="shop-toolbar">
          <SectionHeader
            eyebrow="Choose a collection"
            title={collection === 'official' ? 'Available through the official store' : 'Complete presentation concept catalog'}
            description={
              collection === 'official'
                ? 'These six products have verified public prices. Each link opens the official Ark of Bones store.'
                : 'All 53 pieces from the supplied merchandise presentation are shown individually. Working names, pricing, sizes, production, and availability still require team approval.'
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
            <span>Official store<strong>{officialProducts.length} verified products</strong></span>
          </button>
          <button
            type="button"
            className={collection === 'concepts' ? 'is-active' : ''}
            aria-pressed={collection === 'concepts'}
            onClick={() => switchCollection('concepts')}
          >
            <Layers3 aria-hidden="true" />
            <span>Concept catalog<strong>{catalogConcepts.length} individual pieces</strong></span>
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
          {collection === 'concepts' ? (
            <label className="department-filter">
              <span>Department</span>
              <select value={departmentFilter} onChange={(event) => setDepartmentFilter(event.target.value)}>
                {departmentFilters.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
                ))}
              </select>
            </label>
          ) : null}
        </div>

        <div className={`shop-disclosure${collection === 'concepts' ? ' shop-disclosure--concept' : ''}`}>
          <CheckCircle2 aria-hidden="true" />
          <p>
            {collection === 'official'
              ? 'Prices shown apply only to the six verified public store listings. Checkout occurs on the official external store.'
              : 'Concept cards are review items, not product listings. No order can be placed and no payment is collected for these concepts.'}
          </p>
        </div>

        <div className="shop-results-heading" aria-live="polite">
          <strong>{visibleProducts.length}</strong>
          <span>{collection === 'official' ? 'verified products shown' : 'presentation concepts shown'}</span>
        </div>

        {visibleProducts.length ? (
          <div className={`product-grid${collection === 'concepts' ? ' product-grid--concepts' : ''}`}>
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
