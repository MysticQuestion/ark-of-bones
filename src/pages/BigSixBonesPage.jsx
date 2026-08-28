import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { ASSETS, SUBSIDIARY_BRANDS } from '../config/brand';
import { matches, rulesets } from '../data/competition';
import { officialProducts } from '../data/products';

const brand = SUBSIDIARY_BRANDS.bigSixBones;
const products = officialProducts.filter((product) => product.brandKey === brand.key);

export default function BigSixBonesPage() {
  return (
    <>
      <SEO title={brand.name} description="Big Six Bones game identity, rules status, records, and published products." path={brand.path} />
      <header className="game-identity-mast" style={{ '--game-image': `url("${ASSETS.players}")` }}>
        <div><p className="eyebrow">Ark of Bones / Game identity</p><h1>Big Six<br />Bones</h1></div>
        <dl>
          <div><dt>Game type</dt><dd>Dominoes</dd></div>
          <div><dt>Official status</dt><dd>Research</dd></div>
          <div><dt>Rules version</dt><dd>Not published</dd></div>
        </dl>
      </header>
      <section className="game-record-grid">
        <EmptyState title="Canonical rules unavailable" description="No official Big Six Bones rules version has been published." actionLabel="Rules status" actionTo="/rules" />
        <EmptyState title="No verified matches" description="Related match records are not active." />
        <EmptyState title="No confirmed events" description="Related event records are not active." actionLabel="Event calendar" actionTo="/events" />
      </section>
      <section className="game-standard">
        <div><p className="eyebrow">Publication threshold</p><h2>A house guide is not an official ruleset.</h2></div>
        <dl>
          <div><dt>Rulesets</dt><dd>{rulesets.length}</dd></div>
          <div><dt>Verified matches</dt><dd>{matches.length}</dd></div>
          <div><dt>Ranking status</dt><dd>Inactive</dd></div>
        </dl>
      </section>
      {products.length ? (
        <section className="brand-goods">
          <div className="home-section-heading"><div><p className="eyebrow">Published goods</p><h2>Big Six Bones</h2></div><Link className="text-link" to={`/shop?brand=${brand.key}`}>Full selection <ArrowRight aria-hidden="true" /></Link></div>
          <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
        </section>
      ) : null}
    </>
  );
}
