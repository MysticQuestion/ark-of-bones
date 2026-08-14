import { ArrowRight, ExternalLink, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    thumbnailUrl: video.poster || video.thumbnail,
    contentUrl: video.hostedUrl || video.href,
    ...(!video.hostedUrl && video.embedUrl ? { embedUrl: video.embedUrl } : {}),
    ...(video.uploadDate ? { uploadDate: video.uploadDate } : {}),
    ...(video.durationSeconds ? { duration: `PT${video.durationSeconds}S` } : {}),
  }));

  return (
    <>
      <SEO
        title="Watch Domino Competition & Table Features"
        description="Watch Ark of Bones competition, table features, player stories, interviews, tutorials, and cultural programming—and see the media-ready domino table behind the production."
        path="/watch"
        schema={videoSchema}
      />
      <PageHero eyebrow="Live and on demand" title="Watch" description="Competition, conversation, instruction, and culture captured from the player’s side of the table." image={ASSETS.players} />

      <section className="content-band live-status-band">
        <div className="live-status-heading"><Radio aria-hidden="true" /><div><p className="eyebrow">Live status</p><h2>{liveBroadcast ? liveBroadcast.title : 'Off air. Archive open.'}</h2></div></div>
        {!liveBroadcast ? (
          <EmptyState title="Watch what is already in play" description="Start with the founder introduction, then explore official introductions and table features from the archive." actionLabel="Open YouTube" actionTo={mediaChannels[0].href} external />
        ) : null}
      </section>

      <section className="mission-vision-grid">
        <article>
          <span>What you are seeing</span>
          <h2>The table is part of the production system.</h2>
          <p>Player-view cameras, table sound, display routing, lighting, and live-play design are intended to make domino competition easier to follow without stripping away the conversation around the game.</p>
          <Link className="text-link" to="/tables">See the professional table experience<ArrowRight aria-hidden="true" /></Link>
        </article>
        <article>
          <span>Build interest</span>
          <h2>Want this experience in your own space?</h2>
          <p>Private buyers and venue operators can request build details, scope a configuration, and understand the process before any deposit conversation.</p>
          <Link className="text-link" to="/contact?inquiry=Private%20%2F%20Home%20Table">Request private build details<ArrowRight aria-hidden="true" /></Link>
        </article>
      </section>

      {featuredVideo ? (
        <section className="content-band content-band--wood">
          <SectionHeader eyebrow="Featured program" title="From the Ark" />
          <VideoCard video={featuredVideo} />
        </section>
      ) : null}

      <section className="content-band">
        <SectionHeader eyebrow="Programming" title="Every side of domino entertainment" description="Official introductions, table features, competition, and culture—organized for quick viewing." />
        {videos.length ? <div className="video-grid">{videos.map((video) => <VideoCard key={video.id} video={video} />)}</div> : null}
        <div className="category-strip" aria-label="Ark of Bones media series">{videoCategories.map((category) => <span key={category}>{category}</span>)}</div>
      </section>

      <CampaignBand campaign={campaigns.watchShop} reverse />
      <FounderVideo video={founderVideo} />

      <section className="channel-band">
        <SectionHeader eyebrow="Official channels" title="Follow the next release" description="Find long-form video, short clips, event announcements, and brand stories across the official network." />
        <div className="channel-grid">{mediaChannels.map((channel) => <a key={channel.label} href={channel.href} target="_blank" rel="noopener noreferrer"><span>{channel.label}</span><ExternalLink aria-hidden="true" /></a>)}</div>
      </section>
    </>
  );
}
