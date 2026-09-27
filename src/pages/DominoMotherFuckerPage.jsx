import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { ASSETS, SUBSIDIARY_BRANDS, brandDisplayName } from '../config/brand';
import { officialProducts } from '../data/products';

const brand = SUBSIDIARY_BRANDS.dominoMotherFucker;
const name = brandDisplayName(brand);

export default function DominoMotherFuckerPage() {
  const products = officialProducts.filter((product) => product.brandKey === brand.key);

  return (
    <>
      <SEO
        title={name}
        description="Domino Mother Fucker is the irreverent merchandise label from Ark of Bones."
        path={brand.path}
      />
      <PageHero
        title={name}
        description="Domino Mother Fucker is the irreverent merchandise label from Ark of Bones, built around the language, humor, rivalry, and personality of domino play."
        image={ASSETS.table}
        theme="gold"
      >
        <Link className="button button--light" to={`/shop?brand=${brand.key}`}>Shop Domino Mother Fucker</Link>
      </PageHero>
      <section className="content-band">
        <h2>Available Merchandise</h2>
        <div className="product-grid">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <p><Link className="text-link" to={`/shop?brand=${brand.key}#archive`}>View the design archive</Link></p>
      </section>
    </>
  );
}
