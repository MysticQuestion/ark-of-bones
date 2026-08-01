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
      <PageHero eyebrow="The Ark of Bones family" title="Two identities. One entertainment company." description={`${SUBSIDIARY_BRANDS.dominoMotherFucker.name} owns the expressive side of the culture. ${SUBSIDIARY_BRANDS.bigSixBones.name} sharpens the competitive side.`} image={ASSETS.hero} />
      <section className="content-band">
        <SectionHeader eyebrow="The portfolio" title="Culture and competition, clearly defined" description="Each brand has a distinct role while remaining visibly connected to Ark of Bones." />
        <div className="brand-grid brand-grid--large">{brands.map((brand) => <BrandCard key={brand.key} brand={brand} />)}</div>
      </section>
      <section className="brand-architecture">
        <div><span>The home</span><strong>Ark of Bones</strong><p>Events · Media · Tables · Partnerships · Merchandise · Community</p></div>
        <div><span>The attitude</span><strong>{brands[0].displayName}</strong><p>Humor · Storytelling · Media · Merchandise · Victory</p></div>
        <div><span>The competition</span><strong>{brands[1].displayName}</strong><p>Game play · Tournaments · Events · Education · Community</p></div>
      </section>
      <CTASection eyebrow="Brand collaboration" title="Choose the voice that fits the collaboration." description="Connect media, merchandise, events, sponsorship, or cultural programming to the appropriate brand." label="Discuss a collaboration" to="/contact?inquiry=Brand%20Collaboration" secondaryLabel="Understand the company" secondaryTo="/about" />
    </>
  );
}
