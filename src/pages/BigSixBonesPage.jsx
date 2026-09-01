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
  { title: 'Learn the format', description: 'Read the Big Six Bones guide for setup, play, scoring, strategy, and etiquette.', to: '/learn#big-six-bones' },
  { title: 'Find a competition', description: 'Check confirmed Ark of Bones dates and participation details.', to: '/events' },
  { title: 'Shop published products', description: 'Open buyable Big Six Bones merchandise with published prices and product pages.', to: `/shop?brand=${brand.key}` },
  { title: 'Browse the design archive', description: 'See Big Six Bones concept designs kept separate from currently available inventory.', to: `/shop/archive?brand=${brand.key}` },
];

export default function BigSixBonesPage() {
  return (
    <>
      <SEO title={name} description={`${name} brings competition, events, game education, and community play to Ark of Bones.`} path={brand.path} />
      <PageHero eyebrow="The competition label from Ark of Bones" title={name} description="Fast rounds, visible pressure, American domino tradition, and community competition." image={ASSETS.players} theme="gold">
        <Link className="button button--light" to="/learn#big-six-bones">Read the game guide</Link>
      </PageHero>
      <section className="brand-narrative"><p className="eyebrow">The competitive identity</p><h2>Short rounds. Immediate stakes. No hiding.</h2><p>{name} concentrates quick play, clear scoring, education, and community competition into one game-centered brand, carrying familiar American domino energy from living rooms and backyards into organized entertainment.</p></section>
      <BrandActionRail label="Take the next position" actions={actions} />
      <CampaignBand campaign={campaigns.bigSixBrand} />
      <section className="parent-brand-return"><div><p className="eyebrow">The competitive branch</p><h2>Competition is one lane inside a broader cultural company.</h2></div><Link className="button button--gold" to="/brands">Compare the brand identities<ArrowRight aria-hidden="true" /></Link></section>
    </>
  );
}
