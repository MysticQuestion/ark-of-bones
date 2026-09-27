import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { ASSETS, SUBSIDIARY_BRANDS, brandDisplayName } from '../config/brand';
import { officialProducts } from '../data/products';

const brand = SUBSIDIARY_BRANDS.bigSixBones;
const name = brandDisplayName(brand);

export default function BigSixBonesPage() {
  const products = officialProducts.filter((product) => product.brandKey === brand.key);

  return (
    <>
      <SEO
        title={name}
        description="Big Six Bones is the Ark of Bones label for American domino play and related merchandise."
        path={brand.path}
      />
      <PageHero
        title={name}
        description="Big Six Bones is the Ark of Bones label for American domino play and related merchandise."
        image={ASSETS.table}
        theme="gold"
      >
        <Link className="button button--light" to={`/shop?brand=${brand.key}`}>Shop Big Six Bones</Link>
      </PageHero>
      <section className="content-band">
        <h2>Big Six Bones Merchandise</h2>
        <div className="product-grid">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <p><Link className="text-link" to={`/shop?brand=${brand.key}#archive`}>View the design archive</Link></p>
      </section>
    </>
  );
}
