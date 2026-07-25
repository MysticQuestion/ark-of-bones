import BrandCard from '../components/BrandCard';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS, SUBSIDIARY_BRANDS } from '../config/brand';
import { brands } from '../data/brands';

export default function BrandsPage() {
  return (
    <>
      <SEO title="Brands" description={`Meet the Ark of Bones family: ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} and ${SUBSIDIARY_BRANDS.bigSixBones.name}.`} path="/brands" />
      <PageHero eyebrow="The Ark of Bones family" title="One home. Distinct voices." description={`${SUBSIDIARY_BRANDS.dominoMotherFucker.name} brings the attitude. ${SUBSIDIARY_BRANDS.bigSixBones.name} brings the competition. Ark of Bones brings it all together.`} image={ASSETS.hero} />
      <section className="content-band">
        <SectionHeader eyebrow="Meet the brands" title="Different expressions of the same culture" description="Two voices, each rooted in the energy of the table." />
        <div className="brand-grid brand-grid--large">{brands.map((brand) => <BrandCard key={brand.key} brand={brand} />)}</div>
      </section>
      <section className="brand-architecture">
        <div><span>The home</span><strong>Ark of Bones</strong><p>Events · Media · Tables · Partnerships · Merchandise · Community</p></div>
        <div><span>The attitude</span><strong>{brands[0].displayName}</strong><p>Humor · Storytelling · Media · Merchandise · Victory</p></div>
        <div><span>The competition</span><strong>{brands[1].displayName}</strong><p>Game play · Tournaments · Events · Education · Community</p></div>
      </section>
      <CTASection eyebrow="Brand collaboration" title="Build with the right part of the Ark of Bones family." description="Start a conversation about media, merchandise, events, sponsorship, or cultural collaboration." label="Discuss a collaboration" to="/contact?inquiry=Brand%20Collaboration" secondaryLabel="Explore the company" secondaryTo="/about" />
    </>
  );
}
