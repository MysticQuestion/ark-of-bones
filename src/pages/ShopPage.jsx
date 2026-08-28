import { ExternalLink } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
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
        description={`Ark of Bones, ${SUBSIDIARY_BRANDS.bigSixBones.name}, and ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} merchandise.`}
        path="/shop"
        schema={productSchema}
      />

      <header className="shop-page-header content-band">
        <p className="eyebrow">Shop</p>
        <div className="shop-page-header__row">
          <h1>Ark of Bones</h1>
          <a className="text-link" href={STORE_URL} target="_blank" rel="noopener noreferrer">
            Checkout <ExternalLink aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="content-band shop-page">
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

        <div className="product-grid">
          {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </>
  );
}
