import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import EventCard from '../components/EventCard';
import PageHero from '../components/PageHero';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import VideoCard from '../components/VideoCard';
import { ASSETS, SUBSIDIARY_BRANDS, brandDisplayName } from '../config/brand';
import { events } from '../data/events';
import { products } from '../data/products';
import { videos } from '../data/videos';

const brand = SUBSIDIARY_BRANDS.bigSixBones;
const name = brandDisplayName(brand);

export default function BigSixBonesPage() {
  const brandProducts = products.filter((product) => product.brandKey === brand.key);
  const brandEvents = [...events.upcoming, ...events.past].filter((event) => event.brand === brand.name);
  const brandVideos = videos.filter((video) => video.category === brand.name);

  return (
    <>
      <SEO title={name} description={`${name} brings competition, events, game education, and community play to Ark of Bones.`} path={brand.path} />
      <PageHero eyebrow="An Ark of Bones brand" title={name} description="Fast rounds, big plays, American domino tradition, and community competition." image={ASSETS.players} theme="gold">
        <Link className="button button--light" to="/learn#big-six-bones">Read the game guide</Link>
      </PageHero>
      <section className="brand-narrative"><p className="eyebrow">At the table</p><h2>Game-centered energy for players and the crowd.</h2><p>{name} brings quick rounds, clear scoring, events, education, and community competition to Ark of Bones.</p></section>
      <section className="content-band"><SectionHeader eyebrow="Events" title="Compete with Big Six Bones" />{brandEvents.length ? <div className="event-list">{brandEvents.map((event) => <EventCard key={event.id} event={event} />)}</div> : <EmptyState title="Bring Big Six Bones to your next table" description="Ask about competitive play for your venue, event, or community." actionLabel="Host an event" actionTo="/contact?inquiry=Host%20an%20Event" />}</section>
      <section className="content-band content-band--quiet"><SectionHeader eyebrow="Watch" title="Matches and learning" />{brandVideos.length ? <div className="video-grid">{brandVideos.map((video) => <VideoCard key={video.id} video={video} />)}</div> : <EmptyState title="Watch and learn with Ark of Bones" description="Find match footage, game guides, and stories from around the table." actionLabel="Open Watch" actionTo="/watch" />}</section>
      <section className="content-band"><SectionHeader eyebrow="Merchandise" title="Big Six Bones collection" /><div className="product-grid product-grid--compact">{brandProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
      <section className="parent-brand-return"><div><p className="eyebrow">Part of Ark of Bones</p><h2>The competitive voice inside the home of domino entertainment.</h2></div><Link className="button button--gold" to="/brands">View the brand family<ArrowRight aria-hidden="true" /></Link></section>
    </>
  );
}
