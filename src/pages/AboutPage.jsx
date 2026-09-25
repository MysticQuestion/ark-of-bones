import { ArrowRight } from 'lucide-react';
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
        description="Ark of Bones, founded by Tony Covington, builds custom domino tables and publishes a focused collection of domino goods."
        path="/about"
      />

      <PageHero
        eyebrow="The company"
        title="The table is the work that exists today."
        description="Ark of Bones builds custom domino tables and sells the goods that are actually published. Events, digital play, and competition tools are separated until they are real."
        image={ASSETS.table}
      />

      <section className="leadership-feature">
        <div className="leadership-feature-media">
          <SafeImage
            src={ASSETS.table}
            alt="Ark of Bones custom domino table"
            fallbackAlt="Ark of Bones custom domino table"
            width="1500"
            height="1092"
            loading="lazy"
          />
        </div>
        <div className="leadership-feature-copy">
          <p className="eyebrow">Founder</p>
          <h2>Tony Covington</h2>
          <p>Tony Covington founded Ark of Bones. The public site now leads with the tables that can be configured and the goods that can be purchased, instead of presenting unfinished systems as operating services.</p>
          <Link className="button button--dark" to="/tables#build-studio">Review a custom table<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="about-story">
        <div>
          <p className="eyebrow">Why dominoes</p>
          <h2>The culture existed before the company.</h2>
        </div>
        <div>
          <p>Dominoes and spades have been sustained for generations in Black American, Caribbean, Latino, military, family, neighborhood, and social settings. Ark of Bones does not claim ownership of those traditions.</p>
          <p>The company's current work is the table, the published goods, and a written record of the games. Broader systems stay on the Coming Soon page until they can be offered plainly.</p>
        </div>
      </section>

      <section className="mission-vision-grid">
        <article>
          <span>What can be ordered</span>
          <h2>A table specification, then a quote.</h2>
          <p>Configure felt, engraving, intended use, and dimensions. Anthony reviews the specification and confirms price, timing, and delivery in writing. Nothing is charged from this site at that step.</p>
        </article>
        <article>
          <span>What is not live</span>
          <h2>Do not treat a plan as a service.</h2>
          <p>Digital play, event calendars, ratings, media, and organizer tools are in development. They are not rankings, sanctioning, or a broadcast schedule.</p>
        </article>
      </section>

      <section className="image-story image-story--reverse">
        <div className="image-story-media">
          <SafeImage
            src={ASSETS.table}
            alt="Dominoes on an Ark of Bones table"
            fallbackAlt="Dominoes on an Ark of Bones table"
            width="1600"
            height="1000"
            loading="lazy"
          />
        </div>
        <div className="image-story-copy">
          <p className="eyebrow">Authorship</p>
          <h2>The book stays with the author.</h2>
          <p>Anthony Covington's verified title is listed in the library with the publisher cover, the paperback facts, and the ebook ISBN. A second title is not listed.</p>
          <Link className="text-link" to="/library">Open the library<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <CTASection
        eyebrow="Contact"
        title="Start with the table, the shop, or a direct question."
        description="Include the city, the use, and what should be quoted. Table requests can also be sent from the studio."
        label="Contact Ark of Bones"
        to="/contact"
        secondaryLabel="See what is still in development"
        secondaryTo="/coming-soon"
      />
    </>
  );
}
