import { ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import VideoCard from '../components/VideoCard';
import { allVideos, featuredVideo, founderVideo, mediaChannels, videos } from '../data/videos';

export default function WatchPage() {
  const archive = [featuredVideo, ...videos, founderVideo].filter(Boolean);
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
      <SEO title="Watch" description="Ark of Bones film and match archive." path="/watch" schema={videoSchema} />

      <header className="record-mast record-mast--media">
        <div>
          <p className="eyebrow">Film / Archive</p>
          <h1>Watch</h1>
        </div>
        <span className="record-mast__status">{archive.length} records</span>
      </header>

      {featuredVideo ? (
        <section className="watch-lead">
          <div className="watch-lead__media"><VideoCard video={featuredVideo} /></div>
          <div className="watch-lead__index">
            <span>01</span>
            <p className="eyebrow">Featured</p>
            <h2>{featuredVideo.title}</h2>
            <time dateTime={featuredVideo.uploadDate}>{featuredVideo.uploadDate}</time>
          </div>
        </section>
      ) : null}

      <section className="watch-archive">
        <div className="watch-archive__head">
          <p className="eyebrow">Archive</p>
          <span>Date / format / title</span>
        </div>
        <div className="watch-archive__grid">
          {archive.slice(1).map((video, index) => (
            <article className="watch-record" key={`${video.id}-${index}`}>
              <VideoCard video={video} />
              <div className="watch-record__meta">
                <span>{String(index + 2).padStart(2, '0')}</span>
                <time dateTime={video.uploadDate}>{video.uploadDate || '—'}</time>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="channel-line" aria-label="Official media channels">
        <span>Official channels</span>
        <div>{mediaChannels.map((channel) => (
          <a key={channel.label} href={channel.href} target="_blank" rel="noopener noreferrer">
            {channel.label}<ExternalLink aria-hidden="true" />
          </a>
        ))}</div>
      </footer>
    </>
  );
}
