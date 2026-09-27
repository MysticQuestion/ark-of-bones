import BrandCard from '../components/BrandCard';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { ASSETS, SUBSIDIARY_BRANDS } from '../config/brand';
import { brands } from '../data/brands';

export default function BrandsPage() {
  return (
    <>
      <SEO title="Brands" description={`Ark of Bones brands: ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} and ${SUBSIDIARY_BRANDS.bigSixBones.name}.`} path="/brands" />
      <PageHero
        title="Ark of Bones Brands"
        description="Domino Mother Fucker and Big Six Bones are labels within Ark of Bones."
        image={ASSETS.table}
      />
      <section className="content-band">
        <div className="brand-grid brand-grid--large">
          {brands.map((brand) => <BrandCard key={brand.key} brand={brand} />)}
        </div>
      </section>
    </>
  );
}
