import { ArrowRight, ExternalLink } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { SUBSIDIARY_BRANDS } from '../config/brand';
import { officialProducts, productFilters, STORE_URL } from '../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedBrand = searchParams.get('brand');
  const initialBrand = productFilters.some((item) => item.value === requestedBrand) ? requestedBrand : 'all';
  const [brandFilter, setBrandFilter] = useState(initialBrand);

  useEffect(() => {
    const nextBrand = productFilters.some((item) => item.value === requestedBrand) ? requestedBrand : 'all';
    setBrandFilter(nextBrand);
  }, [requestedBrand]);

  const visibleProducts = useMemo(
    () => officialProducts.filter((product) => brandFilter === 'all' || product.brandKey === brandFilter),
    [brandFilter],
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
        description={`Shop published Ark of Bones, ${SUBSIDIARY_BRANDS.bigSixBones.name}, and ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} merchandise.`}
        path="/shop"
        schema={productSchema}
      />
      <PageHero
        eyebrow="Official merchandise"
        title="Available now."
        description="Every item on this page has a published price and a direct product page. Checkout stays on the secure Squarespace store."
        image={officialProducts[0].image}
        compact
      />

      <section className="content-band shop-page">
        <div className="shop-toolbar">
          <SectionHeader eyebrow="Published collection" title={`${officialProducts.length} products ready to buy`} />
          <div className="shop-toolbar-actions">
            <a className="button button--gold" href={STORE_URL} target="_blank" rel="noopener noreferrer">
              Open the complete shop<ExternalLink aria-hidden="true" />
            </a>
            <Link className="button button--outline" to="/shop/archive">
              Design archive<ArrowRight aria-hidden="true" />
            </Link>
          </div>
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
        </div>

        <div className="shop-results-heading" aria-live="polite">
          <strong>{visibleProducts.length}</strong>
          <span>buyable products shown</span>
        </div>

        <div className="product-grid">
          {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>

        <div className="shop-disclosure shop-disclosure--gallery">
          <p>The wider design library is kept separate so concept work cannot be mistaken for currently available merchandise.</p>
          <Link className="text-link" to="/shop/archive">View the design archive<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
