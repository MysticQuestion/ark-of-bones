import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS, SUBSIDIARY_BRANDS } from '../config/brand';
import { productFilters, products, STORE_URL } from '../data/products';

export default function ShopPage() {
  const [filter, setFilter] = useState('all');
  const visibleProducts = useMemo(
    () => (filter === 'all' ? products : products.filter((product) => product.brandKey === filter)),
    [filter],
  );
  const productSchema = products.map((product) => ({
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
      <SEO title="Shop" description={`Shop verified Ark of Bones, ${SUBSIDIARY_BRANDS.bigSixBones.name}, and ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} merchandise through the official external store.`} path="/shop" schema={productSchema} />
      <PageHero eyebrow="Official merchandise" title="Wear the brand. Carry the culture." description="Products from Ark of Bones and its subsidiary brands. Checkout occurs on the official external store." image={ASSETS.event} compact />
      <section className="content-band shop-page">
        <div className="shop-toolbar">
          <SectionHeader eyebrow="Current collection" title="Official merchandise" description="Current listed prices are shown below. Product cards open the general merchandise collection on the official store." />
          <a className="button button--gold" href={STORE_URL} target="_blank" rel="noopener noreferrer">Open official store</a>
        </div>
        <div className="filter-control" role="group" aria-label="Filter products by brand">
          {productFilters.map((item) => (
            <button key={item.value} type="button" className={filter === item.value ? 'is-active' : ''} aria-pressed={filter === item.value} onClick={() => setFilter(item.value)}>{item.label}</button>
          ))}
        </div>
        <p className="external-store-note">All “Shop collection” links open the official Ark of Bones store in a new tab.</p>
        <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
    </>
  );
}
