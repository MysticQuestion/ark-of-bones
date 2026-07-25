import { Clapperboard, Handshake, Package, Radio, Table2, Users } from 'lucide-react';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { ASSETS } from '../config/brand';

const work = [
  ['Events', 'Live programs that bring players, spectators, venues, and communities together.', Users],
  ['Media', 'Filmed competition, interviews, cultural storytelling, and learning.', Clapperboard],
  ['Tables and venues', 'Domino-centered entertainment experiences shaped with venue partners.', Table2],
  ['Brands', 'Distinct voices for culture, competition, media, and merchandise.', Radio],
  ['Merchandise', 'Apparel and goods that carry the Ark of Bones family beyond the table.', Package],
  ['Community', 'Intergenerational participation, education, and gathering through games.', Handshake],
];

export default function AboutPage() {
  return (
    <>
      <SEO title="About" description="Learn the Ark of Bones company story, cultural mission, vision, work, and commitment to community through domino entertainment." path="/about" />
      <PageHero eyebrow="The company" title="About Ark of Bones" description="A domino entertainment company built around the game, the people who play it, and the culture that grows wherever a table is set." image={ASSETS.players} />
      <section className="about-story">
        <div><p className="eyebrow">Our story</p><h2>The game has always lived where people gather.</h2></div>
        <div><p>From the tables of the Caribbean and the porches of the American South to cafés throughout Europe and Latin America, dominoes has traveled through communities as a shared language of strategy, competition, tradition, and connection.</p><p>In barbershops, community centers, backyards, cafés, and street corners, the game belongs to the people around it. Ark of Bones exists to honor that living culture while creating modern ways to play, watch, gather, learn, and participate.</p></div>
      </section>
      <section className="mission-vision-grid">
        <article><span>Mission</span><h2>Honor the culture. Expand the experience.</h2><p>Create thoughtful events, media, table experiences, brands, merchandise, and educational resources that keep dominoes visible, social, and connected to community.</p></article>
        <article><span>Vision</span><h2>Build the home of domino entertainment.</h2><p>Establish one trusted destination where players, audiences, venues, partners, and future generations can meet the game in all its forms.</p></article>
      </section>
      <section className="content-band">
        <SectionHeader eyebrow="What we create" title="A company built around the whole experience" />
        <div className="work-grid">{work.map(([title, body, Icon]) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className="image-story image-story--reverse">
        <div className="image-story-media"><img src={ASSETS.learn} alt="Dominoes arranged on a wooden table for learning and play" width="1600" height="1000" loading="lazy" /></div>
        <div className="image-story-copy"><p className="eyebrow">Across generations</p><h2>Knowledge moves around the table.</h2><p>Dominoes carries memory, mathematics, language, humor, rivalry, and care from one generation to the next. Ark of Bones supports that exchange through accessible education and participatory experiences.</p></div>
      </section>
      <CTASection eyebrow="Build with Ark of Bones" title="Partner with the home of domino entertainment." description="Talk with the team about venues, events, sponsorships, media, community programming, or brand collaboration." label="Start a partnership inquiry" to="/contact?inquiry=Sponsorship" secondaryLabel="Explore table partnerships" secondaryTo="/tables" />
    </>
  );
}
