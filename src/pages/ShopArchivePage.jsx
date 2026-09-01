import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS } from '../config/brand';
import { departmentFilters, galleryProducts, productFilters } from '../data/products';

export default function ShopArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedBrand = searchParams.get('brand');
  const initialBrand = productFilters.some((item) => item.value === requestedBrand) ? requestedBrand : 'all';
  const [brandFilter, setBrandFilter] = useState(initialBrand);
  const [departmentFilter, setDepartmentFilter] = useState('all');

  useEffect(() => {
    const nextBrand = productFilters.some((item) => item.value === requestedBrand) ? requestedBrand : 'all';
    setBrandFilter(nextBrand);
  }, [requestedBrand]);

  const changeBrand = (nextBrand) => {
    setBrandFilter(nextBrand);
    const nextParams = new URLSearchParams(searchParams);
    if (nextBrand === 'all') nextParams.delete('brand');
    else nextParams.set('brand', nextBrand);
    setSearchParams(nextParams, { replace: true });
  };

  const visibleProducts = useMemo(
    () => galleryProducts.filter((product) => {
      const brandMatches = brandFilter === 'all' || product.brandKey === brandFilter;
      const departmentMatches = departmentFilter === 'all' || product.departmentId === departmentFilter;
      return brandMatches && departmentMatches;
    }),
    [brandFilter, departmentFilter],
  );

  return (
    <>
      <SEO
        title="Merchandise Design Archive"
        description="Browse the Ark of Bones merchandise design archive. Archive concepts require confirmation of production, price, sizing, and availability."
        path="/shop/archive"
      />
      <PageHero
        eyebrow="Design archive"
        title="Concepts, kept separate from the store."
        description="These designs document the wider merchandise system. They are not presented as available inventory."
        image={ASSETS.hero}
        compact
      />

      <section className="content-band shop-page">
        <div className="shop-toolbar">
          <SectionHeader
            eyebrow="Archive"
            title={`${galleryProducts.length} designs for discovery`}
            description="Request current details on any design before assuming production, price, sizing, or availability."
          />
          <Link className="button button--dark" to="/shop">Return to available products</Link>
        </div>

        <div className="shop-controls">
          <div className="filter-control" role="group" aria-label="Filter archive by brand">
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
          <label className="department-filter">
            <span>Category</span>
            <select value={departmentFilter} onChange={(event) => setDepartmentFilter(event.target.value)}>
              {departmentFilters.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
          </label>
        </div>

        <div className="shop-results-heading" aria-live="polite">
          <strong>{visibleProducts.length}</strong>
          <span>archive designs shown</span>
        </div>

        <div className="product-grid product-grid--gallery">
          {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </>
  );
}
