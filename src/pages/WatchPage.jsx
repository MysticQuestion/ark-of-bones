import { ExternalLink, Radio } from 'lucide-react';
import EmptyState from '../components/EmptyState';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import VideoCard from '../components/VideoCard';
import { ASSETS } from '../config/brand';
import { featuredVideo, liveBroadcast, mediaChannels, videoCategories, videos } from '../data/videos';

export default function WatchPage() {
  return (
    <>
      <SEO title="Watch" description="Watch Ark of Bones live domino games, recorded matches, interviews, tutorials, and cultural stories." path="/watch" />
      <PageHero eyebrow="Live and on demand" title="Watch" description="One destination for broadcasts, recorded competition, interviews, tutorials, and the stories surrounding the table." image={ASSETS.players} />
      <section className="content-band live-status-band">
        <div className="live-status-heading"><Radio aria-hidden="true" /><div><p className="eyebrow">Live status</p><h2>{liveBroadcast ? liveBroadcast.title : 'Currently off air'}</h2></div></div>
        {!liveBroadcast ? (
          <EmptyState title="No live game is scheduled at the moment" description="Explore official channels for recent matches and clips, or follow Ark of Bones for the next broadcast." actionLabel="Open official YouTube channel" actionTo={mediaChannels[0].href} external />
        ) : null}
      </section>
      <section className="content-band content-band--wood">
        <SectionHeader eyebrow="Featured program" title="From the Ark" description="A featured program will appear when a public Ark of Bones release is selected." />
        {featuredVideo ? <VideoCard video={featuredVideo} /> : <EmptyState title="No featured program is published here yet" description="Explore the official channels for currently available Ark of Bones media." />}
      </section>
      <section className="content-band">
        <SectionHeader eyebrow="Latest media" title="Matches, interviews, culture, and learning" />
        {videos.length ? <div className="video-grid">{videos.map((video) => <VideoCard key={video.id} video={video} />)}</div> : <EmptyState title="The public video archive is currently empty" description="Follow the official channels for matches, clips, interviews, and cultural stories." />}
        <div className="category-strip" aria-label="Planned archive categories">{videoCategories.map((category) => <span key={category}>{category}</span>)}</div>
      </section>
      <section className="channel-band">
        <SectionHeader eyebrow="Official channels" title="Follow the next release" description="External links open the official Ark of Bones social destinations." />
        <div className="channel-grid">{mediaChannels.map((channel) => <a key={channel.label} href={channel.href} target="_blank" rel="noopener noreferrer"><span>{channel.label}</span><ExternalLink aria-hidden="true" /></a>)}</div>
      </section>
    </>
  );
}
