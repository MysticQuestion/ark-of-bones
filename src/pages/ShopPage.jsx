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
    setBrandFilter(productFilters.some((item) => item.value === requestedBrand) ? requestedBrand : 'all');
  }, [requestedBrand]);

  const visibleProducts = useMemo(
    () => officialProducts.filter((product) => brandFilter === 'all' || product.brandKey === brandFilter),
    [brandFilter],
  );

  const productSchema = officialProducts.map((product) => ({
    '@context': 'https://schema.org', '@type': 'Product', name: `${product.brand} ${product.name}`, description: product.specs.join(', '),
    image: product.image, brand: { '@type': 'Brand', name: product.brand },
    offers: { '@type': 'Offer', priceCurrency: 'USD', price: product.price.replace('$', ''), url: product.href },
  }));

  const changeBrand = (nextBrand) => {
    setBrandFilter(nextBrand);
    const nextParams = new URLSearchParams(searchParams);
    if (nextBrand === 'all') nextParams.delete('brand'); else nextParams.set('brand', nextBrand);
    setSearchParams(nextParams, { replace: true });
  };

  return (
    <>
      <SEO title="Shop" description={`Ark of Bones, ${SUBSIDIARY_BRANDS.bigSixBones.name}, and ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} merchandise.`} path="/shop" schema={productSchema} />

      <header className="record-mast shop-mast">
        <div><p className="eyebrow">Collection / 2026</p><h1>Shop</h1></div>
        <a className="record-mast__status" href={STORE_URL} target="_blank" rel="noopener noreferrer">Checkout <ExternalLink aria-hidden="true" /></a>
      </header>

      <nav className="catalog-filter" aria-label="Filter products by brand">
        {productFilters.map((item) => (
          <button key={item.value} type="button" className={brandFilter === item.value ? 'is-active' : ''} aria-pressed={brandFilter === item.value} onClick={() => changeBrand(item.value)}>
            {item.label}
          </button>
        ))}
      </nav>

      <section className="catalog-grid" aria-live="polite">
        {visibleProducts.map((product, index) => (
          <div className="catalog-item" key={product.id}>
            <span className="catalog-item__number">{String(index + 1).padStart(2, '0')}</span>
            <ProductCard product={product} />
          </div>
        ))}
      </section>

      <div className="catalog-foot">
        <span>{visibleProducts.length} published products</span>
        <a href={STORE_URL} target="_blank" rel="noopener noreferrer">Store checkout <ExternalLink aria-hidden="true" /></a>
      </div>
    </>
  );
}
