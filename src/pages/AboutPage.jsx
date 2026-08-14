import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import { ASSETS } from '../config/brand';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Meet Ark of Bones founder Tony Covington and the company building a modern competition, media, and community platform around domino play."
        path="/about"
      />

      <PageHero
        eyebrow="The company"
        title="A larger platform for a game people already love."
        description="Ark of Bones brings live competition, media, venue programming, merchandise, and an emerging official-play system under one company."
        image={ASSETS.players}
      />

      <section className="leadership-feature">
        <div className="leadership-feature-media">
          <SafeImage
            src={ASSETS.owner}
            alt="Ark of Bones founder Tony Covington at a domino tournament"
            fallbackAlt="Tony Covington, founder of Ark of Bones"
            width="1500"
            height="1092"
            loading="lazy"
          />
        </div>
        <div className="leadership-feature-copy">
          <p className="eyebrow">Founder</p>
          <h2>Tony Covington</h2>
          <p>Tony Covington built Ark of Bones around a straightforward idea: dominoes can hold the attention of a room, carry family and community history, and support a serious competition business without losing the social character that made the game matter in the first place.</p>
          <Link className="button button--dark" to="/watch#founder-video-title"><Play aria-hidden="true" />Hear Tony explain the concept</Link>
        </div>
      </section>

      <section className="about-story">
        <div>
          <p className="eyebrow">Why dominoes</p>
          <h2>The culture existed before the company.</h2>
        </div>
        <div>
          <p>Dominoes and spades have been sustained for generations in Black American, Caribbean, Latino, military, family, neighborhood, and social settings. Ark of Bones does not claim ownership of those traditions.</p>
          <p>The company’s opportunity is to build better ways to document play, organize competition, compensate partners, preserve local knowledge, and create media that gives skilled players and longtime community authorities more visibility.</p>
        </div>
      </section>

      <section className="mission-vision-grid">
        <article>
          <span>Operating principle</span>
          <h2>Credit the people who built the game.</h2>
          <p>Future sanctioned programs are being designed to document house-rule contributions, feature elders and experienced players as authorities, and create meaningful participation for clubs, hosts, and community partners.</p>
        </article>
        <article>
          <span>Business direction</span>
          <h2>Build recurring systems around the event.</h2>
          <p>The long-term value is not another piece of furniture. It is the rules, rankings, sanctioned competition, referee network, scoring technology, data, media, and partner relationships that can improve with every recorded game.</p>
        </article>
      </section>

      <section className="image-story image-story--reverse">
        <div className="image-story-media">
          <SafeImage
            src={ASSETS.learn}
            alt="Dominoes arranged for learning and play"
            fallbackAlt="Domino game education"
            width="1600"
            height="1000"
            loading="lazy"
          />
        </div>
        <div className="image-story-copy">
          <p className="eyebrow">Where it goes next</p>
          <h2>Prove the model before scaling it.</h2>
          <p>Ark of Bones is prioritizing pilots, audience evidence, repeatable event economics, official-play infrastructure, and automated scoring before pursuing heavy venue expansion or territory sales.</p>
          <Link className="text-link" to="/official-play">Review the official-play roadmap<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <CTASection
        eyebrow="Work with Ark of Bones"
        title="Bring a real setting, audience, or community to the next pilot."
        description="Venue operators, event hosts, military MWR programs, campuses, community organizations, sponsors, and cultural partners can start with one measurable program."
        label="Start a partnership inquiry"
        to="/contact?inquiry=General%20Partnership"
        secondaryLabel="Explore Around the Table"
        secondaryTo="/around-the-table"
      />
    </>
  );
}
