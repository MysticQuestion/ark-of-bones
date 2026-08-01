import { ExternalLink, Radio } from 'lucide-react';
import CampaignBand from '../components/CampaignBand';
import EmptyState from '../components/EmptyState';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import VideoCard from '../components/VideoCard';
import { ASSETS } from '../config/brand';
import { campaigns } from '../data/promotions';
import { featuredVideo, liveBroadcast, mediaChannels, videoCategories, videos } from '../data/videos';

export default function WatchPage() {
  return (
    <>
      <SEO title="Watch" description="Watch Ark of Bones live domino games, recorded matches, interviews, tutorials, and cultural stories." path="/watch" />
      <PageHero eyebrow="Live and on demand" title="Watch" description="Competition, conversation, instruction, and culture captured from the player’s side of the table." image={ASSETS.players} />
      <section className="content-band live-status-band">
        <div className="live-status-heading"><Radio aria-hidden="true" /><div><p className="eyebrow">Live status</p><h2>{liveBroadcast ? liveBroadcast.title : 'Off air. Archive open.'}</h2></div></div>
        {!liveBroadcast ? (
          <EmptyState title="Watch what is already in play" description="The official YouTube channel carries published matches, clips, and stories between live broadcasts." actionLabel="Open YouTube" actionTo={mediaChannels[0].href} external />
        ) : null}
      </section>
      {featuredVideo ? (
        <section className="content-band content-band--wood">
          <SectionHeader eyebrow="Featured program" title="From the Ark" />
          <VideoCard video={featuredVideo} />
        </section>
      ) : null}
      <section className="content-band">
        <SectionHeader eyebrow="Programming" title="Every side of domino entertainment" description="The archive is organized for competition, brand series, tutorials, interviews, and cultural stories." />
        {videos.length ? <div className="video-grid">{videos.map((video) => <VideoCard key={video.id} video={video} />)}</div> : null}
        <div className="category-strip" aria-label="Ark of Bones media series">{videoCategories.map((category) => <span key={category}>{category}</span>)}</div>
      </section>
      <CampaignBand campaign={campaigns.watchShop} reverse />
      <section className="channel-band">
        <SectionHeader eyebrow="Official channels" title="Follow the next release" description="Find long-form video, short clips, event announcements, and brand stories across the official network." />
        <div className="channel-grid">{mediaChannels.map((channel) => <a key={channel.label} href={channel.href} target="_blank" rel="noopener noreferrer"><span>{channel.label}</span><ExternalLink aria-hidden="true" /></a>)}</div>
      </section>
    </>
  );
}
