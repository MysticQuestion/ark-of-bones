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
        <div className="live-status-heading"><Radio aria-hidden="true" /><div><p className="eyebrow">Broadcast</p><h2>{liveBroadcast ? liveBroadcast.title : 'Between broadcasts'}</h2></div></div>
        {!liveBroadcast ? (
          <EmptyState title="Catch up around the table" description="Watch recent matches, clips, and stories while you wait for the next live game." actionLabel="Watch on YouTube" actionTo={mediaChannels[0].href} external />
        ) : null}
      </section>
      {featuredVideo ? (
        <section className="content-band content-band--wood">
          <SectionHeader eyebrow="Featured program" title="From the Ark" />
          <VideoCard video={featuredVideo} />
        </section>
      ) : null}
      <section className="content-band">
        <SectionHeader eyebrow="Watch by series" title="Matches, interviews, culture, and learning" description="Follow every side of the game, from competition and tutorials to the people and stories around it." />
        {videos.length ? <div className="video-grid">{videos.map((video) => <VideoCard key={video.id} video={video} />)}</div> : null}
        <div className="category-strip" aria-label="Ark of Bones media series">{videoCategories.map((category) => <span key={category}>{category}</span>)}</div>
      </section>
      <section className="channel-band">
        <SectionHeader eyebrow="Stay close to the table" title="Follow Ark of Bones" description="Find matches, clips, announcements, and stories on every channel." />
        <div className="channel-grid">{mediaChannels.map((channel) => <a key={channel.label} href={channel.href} target="_blank" rel="noopener noreferrer"><span>{channel.label}</span><ExternalLink aria-hidden="true" /></a>)}</div>
      </section>
    </>
  );
}
