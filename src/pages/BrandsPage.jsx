import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SUBSIDIARY_BRANDS } from '../config/brand';
import { brands } from '../data/brands';

export default function BrandsPage() {
  return (
    <>
      <SEO title="Brands" description={`Ark of Bones brand register: ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} and ${SUBSIDIARY_BRANDS.bigSixBones.name}.`} path="/brands" />

      <header className="about-mast brand-register-mast">
        <p className="eyebrow">Identity register / 03 marks</p>
        <h1>Brands</h1>
      </header>

      <section className="brand-parent-record">
        <div><span>00</span><p className="eyebrow">Parent organization</p><h2>Ark of Bones</h2></div>
        <dl>
          <div><dt>Events</dt><dd>Ark of Bones</dd></div>
          <div><dt>Film archive</dt><dd>Ark of Bones</dd></div>
          <div><dt>Tables</dt><dd>Ark of Bones</dd></div>
          <div><dt>Published catalogue</dt><dd>Three identities</dd></div>
        </dl>
      </section>

      <section className="brand-record-list" aria-label="Ark of Bones properties">
        {brands.map((brand, index) => (
          <Link className={`brand-record brand-record--${brand.tone}`} to={brand.path} key={brand.key}>
            <img src={brand.image} alt="" width="1600" height="1000" loading="lazy" />
            <div>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p className="eyebrow">{brand.category}</p>
              <h2>{brand.displayName}</h2>
              <p>{brand.description}</p>
              <strong>Open record <ArrowRight aria-hidden="true" /></strong>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
