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

const brand = SUBSIDIARY_BRANDS.dominoMotherFucker;
const name = brandDisplayName(brand);

export default function DominoMotherFuckerPage() {
  const brandProducts = products.filter((product) => product.brandKey === brand.key);
  const brandEvents = [...events.upcoming, ...events.past].filter((event) => event.brand === brand.name);
  const brandVideos = videos.filter((video) => video.category === brand.name);

  return (
    <>
      <SEO title={name} description={`${name} is the expressive culture, media, storytelling, and merchandise subsidiary within Ark of Bones.`} path={brand.path} />
      <PageHero eyebrow="An Ark of Bones subsidiary" title={name} description="The expressive cultural identity associated with victory, attitude, humor, storytelling, media, and merchandise." image={ASSETS.event} theme="red">
        <Link className="button button--light" to="/brands">View the brand family</Link>
      </PageHero>
      <section className="brand-narrative"><p className="eyebrow">The point of view</p><h2>Domino culture with the volume turned up.</h2><p>{name} carries the expressive side of the table: the sayings, humor, confidence, fashion, and stories that live around the game. It operates as a subsidiary identity within Ark of Bones, not as a competing parent brand.</p></section>
      <section className="content-band"><SectionHeader eyebrow="Associated events" title="At the table" />{brandEvents.length ? <div className="event-list">{brandEvents.map((event) => <EventCard key={event.id} event={event} />)}</div> : <EmptyState title="No brand-specific event is currently listed" description="Confirmed dates will appear here when they are publicly available." actionLabel="View all events" actionTo="/events" />}</section>
      <section className="content-band content-band--quiet"><SectionHeader eyebrow="Associated media" title="Watch the voice of the brand" />{brandVideos.length ? <div className="video-grid">{brandVideos.map((video) => <VideoCard key={video.id} video={video} />)}</div> : <EmptyState title="No brand-specific video is currently listed" description="Use the Watch page and official channels for published Ark of Bones media." actionLabel="Open Watch" actionTo="/watch" />}</section>
      <section className="content-band"><SectionHeader eyebrow="Merchandise" title={`Wear ${name}`} /><div className="product-grid product-grid--compact">{brandProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
      <section className="parent-brand-return"><div><p className="eyebrow">Part of Ark of Bones</p><h2>One cultural lane inside the home of domino entertainment.</h2></div><Link className="button button--gold" to="/about">About Ark of Bones<ArrowRight aria-hidden="true" /></Link></section>
    </>
  );
}
