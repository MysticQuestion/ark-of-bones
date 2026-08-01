import { ExternalLink, PlayCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function FounderVideo({ video }) {
  const videoRef = useRef(null);
  const [playbackError, setPlaybackError] = useState(false);

  useEffect(() => {
    const player = videoRef.current;
    let hls;
    let active = true;

    if (!player || !video.hostedUrl) return undefined;

    import('hls.js').then(({ default: Hls }) => {
      if (!active) return;

      if (Hls.isSupported()) {
        hls = new Hls({ enableWorker: true });
        hls.loadSource(video.hostedUrl);
        hls.attachMedia(player);
        hls.on(Hls.Events.ERROR, (_event, data) => {
          if (data.fatal) setPlaybackError(true);
        });
        return;
      }

      if (player.canPlayType('application/vnd.apple.mpegurl')) {
        player.src = video.hostedUrl;
        return;
      }

      setPlaybackError(true);
    }).catch(() => setPlaybackError(true));

    return () => {
      active = false;
      hls?.destroy();
    };
  }, [video.hostedUrl]);

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
          <video
            ref={videoRef}
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
            aria-label={`${video.title} - Tony Covington`}
          />
          {playbackError ? <div className="founder-video-fallback" role="status">Playback is unavailable here. Open the official video on YouTube.</div> : null}
        </div>
        <div className="founder-video-caption">
          <PlayCircle aria-hidden="true" />
          <div><span>Official Ark of Bones video</span><strong>{video.title}</strong></div>
        </div>
      </div>
    </section>
  );
}
