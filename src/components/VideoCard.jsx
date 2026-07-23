import { ExternalLink, Play } from 'lucide-react';

export default function VideoCard({ video }) {
  return (
    <article className="video-card">
      <div className="video-card-image">
        <img src={video.thumbnail} alt={video.thumbnailAlt || ''} width="1280" height="720" loading="lazy" />
        <Play aria-hidden="true" />
      </div>
      <div className="video-card-body">
        <p className="eyebrow">{video.category}</p>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <a className="text-link" href={video.href} target="_blank" rel="noopener noreferrer">Watch on {video.platform}<ExternalLink aria-hidden="true" /></a>
      </div>
    </article>
  );
}
