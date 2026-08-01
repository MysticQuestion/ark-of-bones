import { ExternalLink, Radio } from 'lucide-react';
import CampaignBand from '../components/CampaignBand';
import EmptyState from '../components/EmptyState';
import FounderVideo from '../components/FounderVideo';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import VideoCard from '../components/VideoCard';
import { ASSETS } from '../config/brand';
import { campaigns } from '../data/promotions';
import { allVideos, featuredVideo, founderVideo, liveBroadcast, mediaChannels, videoCategories, videos } from '../data/videos';

export default function WatchPage() {
  const videoSchema = allVideos.map((video) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnail,
    contentUrl: video.href,
    embedUrl: video.embedUrl,
    ...(video.uploadDate ? { uploadDate: video.uploadDate } : {}),
  }));

  return (
    <>
      <SEO title="Watch" description="Watch official Ark of Bones introductions, table features, competition, interviews, tutorials, and cultural stories." path="/watch" schema={videoSchema} />
      <PageHero eyebrow="Live and on demand" title="Watch" description="Competition, conversation, instruction, and culture captured from the player’s side of the table." image={ASSETS.players} />
      <section className="content-band live-status-band">
        <div className="live-status-heading"><Radio aria-hidden="true" /><div><p className="eyebrow">Live status</p><h2>{liveBroadcast ? liveBroadcast.title : 'Off air. Archive open.'}</h2></div></div>
        {!liveBroadcast ? (
          <EmptyState title="Watch what is already in play" description="Start with the founder introduction, then explore official introductions and table features from the archive." actionLabel="Open YouTube" actionTo={mediaChannels[0].href} external />
        ) : null}
      </section>
      <FounderVideo video={founderVideo} />
      {featuredVideo ? (
        <section className="content-band content-band--wood">
          <SectionHeader eyebrow="Featured program" title="From the Ark" />
          <VideoCard video={featuredVideo} />
        </section>
      ) : null}
      <section className="content-band">
        <SectionHeader eyebrow="Programming" title="Every side of domino entertainment" description="Official introductions, table features, competition, and culture — organized for quick viewing." />
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
