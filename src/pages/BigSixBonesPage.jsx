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
      <SEO title={name} description={`${name} is the competition, event, education, and community-game subsidiary within Ark of Bones.`} path={brand.path} />
      <PageHero eyebrow="An Ark of Bones subsidiary" title={name} description="Fast rounds, big plays, American domino tradition, and community competition." image={ASSETS.players} theme="gold">
        <Link className="button button--light" to="/learn#big-six-bones">Read the game guide</Link>
      </PageHero>
      <section className="brand-narrative"><p className="eyebrow">The competition lane</p><h2>Game-centered energy for the table and the crowd.</h2><p>{name} focuses the competitive side of Ark of Bones around double-six play, quick rounds, clear scoring, events, education, and community participation.</p></section>
      <section className="content-band"><SectionHeader eyebrow="Associated events" title="Compete with Big Six Bones" />{brandEvents.length ? <div className="event-list">{brandEvents.map((event) => <EventCard key={event.id} event={event} />)}</div> : <EmptyState title="No Big Six Bones event is currently listed" description="Confirmed competition dates will appear here when publicly available." actionLabel="View all events" actionTo="/events" />}</section>
      <section className="content-band content-band--quiet"><SectionHeader eyebrow="Associated media" title="Matches and learning" />{brandVideos.length ? <div className="video-grid">{brandVideos.map((video) => <VideoCard key={video.id} video={video} />)}</div> : <EmptyState title="No Big Six Bones video is currently listed" description="Use the Watch page for currently published Ark of Bones media destinations." actionLabel="Open Watch" actionTo="/watch" />}</section>
      <section className="content-band"><SectionHeader eyebrow="Merchandise" title="Big Six Bones collection" /><div className="product-grid product-grid--compact">{brandProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
      <section className="parent-brand-return"><div><p className="eyebrow">Part of Ark of Bones</p><h2>Competition connected to a larger entertainment company.</h2></div><Link className="button button--gold" to="/brands">View the brand family<ArrowRight aria-hidden="true" /></Link></section>
    </>
  );
}
