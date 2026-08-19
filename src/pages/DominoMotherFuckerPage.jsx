import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandActionRail from '../components/BrandActionRail';
import CampaignBand from '../components/CampaignBand';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { ASSETS, SUBSIDIARY_BRANDS, brandDisplayName } from '../config/brand';
import { campaigns } from '../data/promotions';

const brand = SUBSIDIARY_BRANDS.dominoMotherFucker;
const name = brandDisplayName(brand);
const actions = [
  { title: 'See the culture in motion', description: 'Open the Ark of Bones media hub for competition, interviews, and stories.', to: '/watch' },
  { title: 'Put DMF on the bill', description: 'Build an event, media feature, or cultural collaboration around the brand.', to: '/contact?inquiry=Brand%20Collaboration' },
  { title: 'Shop published products', description: 'Open buyable Domino Mother Fucker merchandise with published prices and product pages.', to: `/shop?brand=${brand.key}` },
  { title: 'Browse the design archive', description: 'See Domino Mother Fucker concept designs kept separate from currently available inventory.', to: `/shop/archive?brand=${brand.key}` },
];

export default function DominoMotherFuckerPage() {
  return (
    <>
      <SEO title={name} description={`${name} brings victory, attitude, humor, storytelling, media, and merchandise to Ark of Bones.`} path={brand.path} />
      <PageHero eyebrow="The cultural label from Ark of Bones" title={name} description="The expressive identity for victory, attitude, humor, storytelling, media, and merchandise." image={ASSETS.event} theme="red">
        <Link className="button button--light" to="/brands">See the complete brand family</Link>
      </PageHero>
      <section className="brand-narrative"><p className="eyebrow">The point of view</p><h2>The last word belongs to the winner.</h2><p>{name} turns the sayings, humor, confidence, fashion, and stories surrounding the game into a distinct cultural signal: an unofficial anthem for the comeback, the blowout, and the perfect final play.</p></section>
      <BrandActionRail label="Move through the brand" actions={actions} />
      <CampaignBand campaign={campaigns.dmfBrand} reverse />
      <section className="parent-brand-return"><div><p className="eyebrow">Within the Ark</p><h2>Attitude is one part of a larger entertainment platform.</h2></div><Link className="button button--gold" to="/about">See the company behind the brand<ArrowRight aria-hidden="true" /></Link></section>
    </>
  );
}
