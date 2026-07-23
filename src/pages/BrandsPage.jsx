import BrandCard from '../components/BrandCard';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS, BRAND, SUBSIDIARY_BRANDS } from '../config/brand';
import { brands } from '../data/brands';

export default function BrandsPage() {
  return (
    <>
      <SEO title="Brands" description={`Explore the Ark of Bones brand portfolio: ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} and ${SUBSIDIARY_BRANDS.bigSixBones.name}, two distinct subsidiaries within one domino entertainment company.`} path="/brands" />
      <PageHero eyebrow="The Ark of Bones portfolio" title="One home. Distinct voices." description={`${BRAND.name} is the parent entertainment company. Its subsidiary brands create focused lanes for culture, media, merchandise, competition, events, and education.`} image={ASSETS.hero} />
      <section className="content-band">
        <SectionHeader eyebrow="Subsidiary brands" title="Different expressions of the same culture" description="Each brand has its own purpose and audience while remaining connected to Ark of Bones." />
        <div className="brand-grid brand-grid--large">{brands.map((brand) => <BrandCard key={brand.key} brand={brand} />)}</div>
      </section>
      <section className="brand-architecture">
        <div><span>Parent company</span><strong>Ark of Bones</strong><p>Events · Media · Tables · Partnerships · Merchandise · Community</p></div>
        <div><span>Culture lane</span><strong>{brands[0].displayName}</strong><p>Attitude · Humor · Storytelling · Media · Merchandise</p></div>
        <div><span>Competition lane</span><strong>{brands[1].displayName}</strong><p>Game play · Tournaments · Events · Education · Community</p></div>
      </section>
      <CTASection eyebrow="Brand collaboration" title="Build with the right part of the Ark of Bones family." description="Start a conversation about media, merchandise, events, sponsorship, or cultural collaboration." label="Discuss a collaboration" to="/contact?inquiry=Brand%20Collaboration" secondaryLabel="Explore the company" secondaryTo="/about" />
    </>
  );
}
