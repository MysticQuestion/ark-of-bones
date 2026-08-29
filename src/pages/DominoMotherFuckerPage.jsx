import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { ASSETS, SUBSIDIARY_BRANDS } from '../config/brand';
import { officialProducts } from '../data/products';

const brand = SUBSIDIARY_BRANDS.dominoMotherFucker;
const products = officialProducts.filter((product) => product.brandKey === brand.key);

export default function DominoMotherFuckerPage() {
  return (
    <>
      <SEO title={brand.name} description={`${brand.name} identity and published merchandise from Ark of Bones.`} path={brand.path} />

      <header className="dmf-mast" style={{ '--dmf-image': `url("${ASSETS.event}")` }}>
        <div><p className="eyebrow">Ark of Bones / Product identity</p><h1>DMF</h1></div>
        <dl>
          <div><dt>Full name</dt><dd>{brand.name}</dd></div>
          <div><dt>Parent</dt><dd>Ark of Bones</dd></div>
          <div><dt>Current catalogue</dt><dd>{products.length} products</dd></div>
        </dl>
      </header>

      <section className="dmf-wordmark" aria-label={brand.name}>
        <span>Domino</span><span>Mother</span><span>Fucker</span>
      </section>

      <section className="identity-register identity-register--compact">
        <p className="eyebrow">Record index</p>
        <Link to={`/shop?brand=${brand.key}`}><span>01</span><strong>Published catalogue</strong><em>{products.length} products</em></Link>
        <Link to={`/shop/archive?brand=${brand.key}`}><span>02</span><strong>Design archive</strong><em>Concept records</em></Link>
        <Link to="/watch"><span>03</span><strong>Film</strong><em>Ark archive</em></Link>
      </section>

      {products.length ? (
        <section className="brand-goods brand-goods--dmf">
          <div className="home-section-heading"><div><p className="eyebrow">Published goods</p><h2>{brand.name}</h2></div><Link className="text-link" to={`/shop?brand=${brand.key}`}>Full selection <ArrowRight aria-hidden="true" /></Link></div>
          <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        </section>
      ) : null}
    </>
  );
}
