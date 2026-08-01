import { CheckCircle2, ExternalLink, Layers3, ShoppingBag } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { SUBSIDIARY_BRANDS } from '../config/brand';
import {
  galleryDepartments,
  galleryProducts,
  departmentFilters,
  officialProducts,
  productFilters,
  STORE_URL,
} from '../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedBrand = searchParams.get('brand');
  const initialBrand = productFilters.some((item) => item.value === requestedBrand) ? requestedBrand : 'all';
  const [collection, setCollection] = useState('official');
  const [brandFilter, setBrandFilter] = useState(initialBrand);
  const [departmentFilter, setDepartmentFilter] = useState('all');

  useEffect(() => {
    const nextBrand = productFilters.some((item) => item.value === requestedBrand) ? requestedBrand : 'all';
    setBrandFilter(nextBrand);
  }, [requestedBrand]);

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

  const changeBrand = (nextBrand) => {
    setBrandFilter(nextBrand);
    const nextParams = new URLSearchParams(searchParams);
    if (nextBrand === 'all') nextParams.delete('brand');
    else nextParams.set('brand', nextBrand);
    setSearchParams(nextParams, { replace: true });
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
        title="The official Ark of Bones shop."
        description="Buy published products through their exact store pages, then explore the wider merchandise design archive."
        image={officialProducts[0].image}
        compact
      />

      <section className="shop-status-band" aria-label="Merchandise collection overview">
        <div><strong>{officialProducts.length}</strong><span>Published products</span></div>
        <div><strong>{galleryProducts.length}</strong><span>Archived designs</span></div>
        <div><strong>3</strong><span>Brand collections</span></div>
        <div><strong>Secure</strong><span>Squarespace checkout</span></div>
      </section>

      <section className="content-band shop-page">
        <div className="shop-toolbar">
          <SectionHeader
            eyebrow={collection === 'official' ? 'Buy online' : 'Design archive'}
            title={collection === 'official' ? 'Six products. Six direct store links.' : 'A broader view of the merchandise system.'}
            description={
              collection === 'official'
                ? 'Every purchase button opens the matching product page for options and checkout.'
                : 'Browse apparel, headwear, drinkware, and accessories, then request current details on a specific design.'
            }
          />
          {collection === 'official' ? (
            <a className="button button--gold" href={STORE_URL} target="_blank" rel="noopener noreferrer">
              Browse the complete shop<ExternalLink aria-hidden="true" />
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
            <span>Available to buy<strong>{officialProducts.length} published product pages</strong></span>
          </button>
          <button
            type="button"
            className={collection === 'gallery' ? 'is-active' : ''}
            aria-pressed={collection === 'gallery'}
            onClick={() => switchCollection('gallery')}
          >
            <Layers3 aria-hidden="true" />
            <span>Design archive<strong>{galleryProducts.length} designs across six categories</strong></span>
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
                onClick={() => changeBrand(item.value)}
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
              ? 'Published prices and product options are confirmed on the linked Ark of Bones shop pages. Checkout is completed securely through Squarespace.'
              : 'Archive designs are shown for collection discovery. Request details to confirm production, price, sizing, and availability.'}
          </p>
        </div>

        <div className="shop-results-heading" aria-live="polite">
          <strong>{visibleProducts.length}</strong>
          <span>{collection === 'official' ? 'buyable products shown' : 'archive designs shown'}</span>
        </div>

        {visibleProducts.length ? (
          <div className={`product-grid${collection === 'gallery' ? ' product-grid--gallery' : ''}`}>
            {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="shop-empty" role="status">
            <h3>No products match these filters.</h3>
            <button type="button" onClick={() => { changeBrand('all'); setDepartmentFilter('all'); }}>
              Reset filters
            </button>
          </div>
        )}
      </section>
    </>
  );
}
