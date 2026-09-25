import { ExternalLink } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { SUBSIDIARY_BRANDS } from '../config/brand';
import {
  departmentFilters,
  galleryProducts,
  officialProducts,
  productFilters,
  STORE_URL,
} from '../data/products';

const brandFromQuery = (value) => (productFilters.some((item) => item.value === value) ? value : 'all');

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const requestedBrand = brandFromQuery(searchParams.get('brand'));
  const [availableBrand, setAvailableBrand] = useState(requestedBrand);
  const [archiveBrand, setArchiveBrand] = useState(requestedBrand);
  const [departmentFilter, setDepartmentFilter] = useState('all');

  useEffect(() => {
    setAvailableBrand(requestedBrand);
    setArchiveBrand(requestedBrand);
  }, [requestedBrand]);

  const availableProducts = useMemo(
    () => officialProducts.filter((product) => availableBrand === 'all' || product.brandKey === availableBrand),
    [availableBrand],
  );

  const archiveProducts = useMemo(
    () => galleryProducts.filter((product) => {
      const brandMatches = archiveBrand === 'all' || product.brandKey === archiveBrand;
      const departmentMatches = departmentFilter === 'all' || product.departmentId === departmentFilter;
      return brandMatches && departmentMatches;
    }),
    [archiveBrand, departmentFilter],
  );

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

  return (
    <>
      <SEO
        title="Shop"
        description={`Browse Ark of Bones, ${SUBSIDIARY_BRANDS.bigSixBones.name}, and ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} goods, including current products and the wider design archive.`}
        path="/shop"
        schema={productSchema}
      />

      <PageHero
        eyebrow="Ark of Bones shop"
        title="The collection."
        description="Current products and the design archive now live together. Items with a published price link to checkout; archive pieces can be requested for production details."
        image={officialProducts[0].image}
        compact
      />

      <section className="content-band shop-page shop-current">
        <div className="shop-toolbar">
          <SectionHeader
            eyebrow="Available"
            title="Current products"
            description="Published products with current pricing and direct checkout."
          />
          <a className="button button--gold" href={STORE_URL} target="_blank" rel="noopener noreferrer">
            Open checkout<ExternalLink aria-hidden="true" />
          </a>
        </div>

        <div className="shop-controls">
          <div className="filter-control" role="group" aria-label="Filter current products by brand">
            {productFilters.map((item) => (
              <button
                key={item.value}
                type="button"
                className={availableBrand === item.value ? 'is-active' : ''}
                aria-pressed={availableBrand === item.value}
                onClick={() => setAvailableBrand(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="product-grid">
          {availableProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="content-band shop-page shop-archive" id="archive">
        <div className="shop-toolbar">
          <SectionHeader
            eyebrow="Design archive"
            title="Archive and special requests"
            description="The archive stays visible as part of the shop. These designs are not represented as stocked inventory; use the request button on any piece to ask about production, sizing, pricing, or availability."
          />
        </div>

        <div className="shop-controls shop-controls--archive">
          <div className="filter-control" role="group" aria-label="Filter archive designs by brand">
            {productFilters.map((item) => (
              <button
                key={item.value}
                type="button"
                className={archiveBrand === item.value ? 'is-active' : ''}
                aria-pressed={archiveBrand === item.value}
                onClick={() => setArchiveBrand(item.value)}
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

        <div className="product-grid product-grid--gallery">
          {archiveProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </>
  );
}
