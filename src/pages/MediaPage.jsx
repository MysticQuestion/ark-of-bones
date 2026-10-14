import { ArrowRight, Download, ExternalLink, Image as ImageIcon, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import PageHero from '../components/PageHero';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import SectionHeader from '../components/SectionHeader';
import { eventPhotos, featuredEventPhoto, wallpapers } from '../data/media';

export default function MediaPage() {
  return (
    <>
      <SEO
        title="Media"
        description="Explore Ark of Bones event photography, table culture, downloadable wallpaper art, and links to the official video archive."
        path="/media"
      />

      <PageHero
        eyebrow="The visual archive"
        title="Media"
        description="Photography from the table, downloadable artwork, and a direct route into the moving-image archive."
        image={featuredEventPhoto?.src}
      />

      <section className="content-band media-library-intro">
        <SectionHeader
          eyebrow="From the room"
          title="The people and the play are the proof."
          description="A curated record of Ark of Bones sessions: the table in use, players in competition, and the social life around the game."
        />
        <div className="media-photo-grid">
          {eventPhotos.map((photo, index) => (
            <figure
              className={`media-photo-card ${photo.orientation === 'portrait' ? 'media-photo-card--portrait' : ''}`}
              key={photo.id}
            >
              <a href={photo.href} target="_blank" rel="noopener noreferrer" aria-label={`Open full image: ${photo.caption}`}>
                <SafeImage
                  src={photo.src}
                  alt={photo.alt}
                  fallbackAlt="Ark of Bones event photography"
                  width={photo.orientation === 'portrait' ? '1200' : '1800'}
                  height={photo.orientation === 'portrait' ? '1600' : '1200'}
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </a>
              <figcaption>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{photo.caption}</strong>
                <ExternalLink aria-hidden="true" />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="content-band content-band--quiet wallpaper-library" id="wallpapers">
        <SectionHeader
          eyebrow="Downloads"
          title="Wallpaper art"
          description="Selected Ark of Bones artwork prepared for desktop backgrounds and personal screens."
        />

        {wallpapers.length ? (
          <div className="wallpaper-grid">
            {wallpapers.map((wallpaper) => (
              <article className="wallpaper-card" key={wallpaper.id}>
                <div className="wallpaper-card-image">
                  <SafeImage
                    src={wallpaper.src}
                    alt={wallpaper.alt}
                    fallbackAlt="Ark of Bones wallpaper art"
                    width="1920"
                    height="1080"
                    loading="lazy"
                  />
                </div>
                <div className="wallpaper-card-body">
                  <div>
                    <p className="eyebrow">{wallpaper.format || 'Desktop wallpaper'}</p>
                    <h3>{wallpaper.title}</h3>
                  </div>
                  <a
                    className="button button--gold"
                    href={wallpaper.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download aria-hidden="true" />Download
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            title="The first wallpaper pack is being staged"
            description="The approved desktop artwork is ready; the public download files are being connected to a durable media location before this page is released."
          />
        )}
      </section>

      <section className="media-routing-band">
        <article>
          <ImageIcon aria-hidden="true" />
          <p className="eyebrow">Still image</p>
          <h2>Need approved imagery for a story, venue, or partnership?</h2>
          <p>Start with the public media library. For a specific format or usage request, contact Ark of Bones directly.</p>
          <Link className="text-link" to="/contact?inquiry=General%20Partnership">Start a media inquiry<ArrowRight aria-hidden="true" /></Link>
        </article>
        <article>
          <Play aria-hidden="true" />
          <p className="eyebrow">Moving image</p>
          <h2>Video stays in Watch.</h2>
          <p>Competition clips, table features, interviews, introductions, and published short-form programming remain organized in the Watch hub.</p>
          <Link className="text-link" to="/watch">Open Watch<ArrowRight aria-hidden="true" /></Link>
        </article>
      </section>
    </>
  );
}
