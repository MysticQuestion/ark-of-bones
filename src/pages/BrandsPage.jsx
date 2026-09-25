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
      <SEO title="Brands" description={`Ark of Bones labels: ${SUBSIDIARY_BRANDS.dominoMotherFucker.name} and ${SUBSIDIARY_BRANDS.bigSixBones.name}. Merchandise for both is in the shop.`} path="/brands" />
      <PageHero eyebrow="The Ark of Bones family" title="Two labels. One company." description={`${SUBSIDIARY_BRANDS.dominoMotherFucker.name} carries the expressive voice. ${SUBSIDIARY_BRANDS.bigSixBones.name} carries the game voice. Current goods for both are in the shop.`} image={ASSETS.table} />
      <section className="content-band">
        <SectionHeader eyebrow="The portfolio" title="Culture and competition, clearly defined" description="Each brand has a distinct role while remaining visibly connected to Ark of Bones." />
        <div className="brand-grid brand-grid--large">{brands.map((brand) => <BrandCard key={brand.key} brand={brand} />)}</div>
      </section>
      <section className="brand-architecture">
        <div><span>The home</span><strong>Ark of Bones</strong><p>Custom tables · Current goods · Library</p></div>
        <div><span>The attitude</span><strong>{brands[0].displayName}</strong><p>Humor · Storytelling · Merchandise</p></div>
        <div><span>The game</span><strong>{brands[1].displayName}</strong><p>American domino play · Merchandise</p></div>
      </section>
      <CTASection eyebrow="Brand question" title="Ask about a label before treating it as a program." description="Merchandise is in the shop. Events, media, and competition systems are not live services." label="Contact" to="/contact?inquiry=Brand%20Collaboration" secondaryLabel="See what is in development" secondaryTo="/coming-soon" />
    </>
  );
}
