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
      <SEO title={name} description={`${name} brings victory, attitude, humor, storytelling, media, and merchandise to Ark of Bones.`} path={brand.path} />
      <PageHero eyebrow="An Ark of Bones brand" title={name} description="Victory, attitude, humor, storytelling, media, and merchandise born around the table." image={ASSETS.event} theme="red">
        <Link className="button button--light" to="/brands">View the brand family</Link>
      </PageHero>
      <section className="brand-narrative"><p className="eyebrow">The point of view</p><h2>Domino culture with the volume turned up.</h2><p>{name} carries the sayings, humor, confidence, fashion, and stories that live around the game.</p></section>
      <section className="content-band"><SectionHeader eyebrow="Events" title="At the table" />{brandEvents.length ? <div className="event-list">{brandEvents.map((event) => <EventCard key={event.id} event={event} />)}</div> : <EmptyState title="Bring the attitude to your next gathering" description="Ask about an Ark of Bones event for your venue, audience, or community." actionLabel="Host an event" actionTo="/contact?inquiry=Host%20an%20Event" />}</section>
      <section className="content-band content-band--quiet"><SectionHeader eyebrow="Watch" title="Stories with a point of view" />{brandVideos.length ? <div className="video-grid">{brandVideos.map((video) => <VideoCard key={video.id} video={video} />)}</div> : <EmptyState title="Watch the world around the table" description="Find match footage, clips, interviews, and Ark of Bones stories." actionLabel="Open Watch" actionTo="/watch" />}</section>
      <section className="content-band"><SectionHeader eyebrow="Merchandise" title={`Wear ${name}`} /><div className="product-grid product-grid--compact">{brandProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
      <section className="parent-brand-return"><div><p className="eyebrow">Part of Ark of Bones</p><h2>The expressive voice inside the home of domino entertainment.</h2></div><Link className="button button--gold" to="/about">About Ark of Bones<ArrowRight aria-hidden="true" /></Link></section>
    </>
  );
}
