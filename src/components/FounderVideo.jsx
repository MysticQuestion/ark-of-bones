import { ExternalLink, PlayCircle } from 'lucide-react';

export default function FounderVideo({ video }) {
  return (
    <section className="founder-video" aria-labelledby="founder-video-title">
      <div className="founder-video-copy">
        <p className="eyebrow">The founder's view</p>
        <h2 id="founder-video-title">The idea, in Tony's own words.</h2>
        <p>{video.description}</p>
        <a className="text-link" href={video.href} target="_blank" rel="noopener noreferrer">
          Open on YouTube<ExternalLink aria-hidden="true" />
        </a>
      </div>
      <div className="founder-video-player">
        <div className="founder-video-frame">
          <iframe
            src={`${video.embedUrl}?rel=0`}
            title={`${video.title} - Tony Covington`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="founder-video-caption">
          <PlayCircle aria-hidden="true" />
          <div><span>Official Ark of Bones video</span><strong>{video.title}</strong></div>
        </div>
      </div>
    </section>
  );
}
