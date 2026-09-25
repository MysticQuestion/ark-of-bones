import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandActionRail from '../components/BrandActionRail';
import CampaignBand from '../components/CampaignBand';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { ASSETS, SUBSIDIARY_BRANDS, brandDisplayName } from '../config/brand';
import { campaigns } from '../data/promotions';

const brand = SUBSIDIARY_BRANDS.bigSixBones;
const name = brandDisplayName(brand);
const actions = [
  { title: 'Shop published products', description: 'Open buyable Big Six Bones merchandise with published prices and product pages.', to: `/shop?brand=${brand.key}` },
  { title: 'Request an archive design', description: 'Archive pieces are not stocked inventory. Ask for production details from the shop.', to: `/shop?brand=${brand.key}#archive` },
  { title: 'Competition is not live', description: 'Dates, rankings, and sanctioning are not published. The note lives with the other unfinished systems.', to: '/coming-soon#circuit' },
  { title: 'Ask a brand question', description: 'Send a specific question about the label or its goods.', to: '/contact?inquiry=Brand%20Collaboration' },
];

export default function BigSixBonesPage() {
  return (
    <>
      <SEO title={name} description={`${name} is an Ark of Bones label for American domino play and related merchandise. It is not a live event calendar.`} path={brand.path} />
      <PageHero eyebrow="The competition label from Ark of Bones" title={name} description="The game voice of Ark of Bones. Published goods are in the shop. Tournaments and rankings are not a live service." image={ASSETS.table} theme="gold">
        <Link className="button button--light" to={`/shop?brand=${brand.key}`}>Shop Big Six Bones goods</Link>
      </PageHero>
      <section className="brand-narrative"><p className="eyebrow">The competitive identity</p><h2>Short rounds. Immediate stakes. No hiding.</h2><p>{name} concentrates quick play, clear scoring, education, and community competition into one game-centered brand, carrying familiar American domino energy from living rooms and backyards into organized entertainment.</p></section>
      <BrandActionRail label="Take the next position" actions={actions} />
      <CampaignBand campaign={campaigns.bigSixBrand} />
      <section className="parent-brand-return"><div><p className="eyebrow">The game label</p><h2>The name is a label, not a sanctioning body.</h2></div><Link className="button button--gold" to="/brands">Compare the brand identities<ArrowRight aria-hidden="true" /></Link></section>
    </>
  );
}
