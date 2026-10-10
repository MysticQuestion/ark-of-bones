import { ArrowRight, BookOpen, PlayCircle, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import { ASSETS } from '../config/brand';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Ark of Bones is a domino culture platform founded by Anthony Covington, centered on live play, education, publishing, official merch, and community connection."
        path="/about"
      />

      <PageHero
        title="About Ark of Bones"
        description="Ark of Bones is a domino culture platform founded by Anthony Covington. The brand centers live and recorded play, game education, official merchandise, publishing, and the communities that keep domino culture active."
        image={ASSETS.hero}
      />

      <section className="leadership-feature">
        <div className="leadership-feature-media">
          <SafeImage
            src={ASSETS.hero}
            alt="Ark of Bones domino culture photography"
            fallbackAlt="Ark of Bones domino culture photography"
            width="1500"
            height="1092"
            loading="lazy"
          />
        </div>
        <div className="leadership-feature-copy">
          <h2>Anthony Covington</h2>
          <p>Anthony Covington is the founder of Ark of Bones and the author of <em>Ark of Bones: Origins, Evolution, and Cultural Legacy of Dominoes, Spades, Euchre, and Booray</em>.</p>
          <p>His work draws on the social history of dominoes and card games and the communities that have sustained them across generations.</p>
          <Link className="button button--dark" to="/library">View the Library<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="mission-vision-grid">
        <article>
          <PlayCircle aria-hidden="true" />
          <h2>Watch</h2>
          <p>Follow live play, recorded matches, highlights, and media built around the culture of the table.</p>
          <Link className="text-link" to="/around-the-table">Watch Content<ArrowRight aria-hidden="true" /></Link>
        </article>
        <article>
          <ShoppingBag aria-hidden="true" />
          <h2>Shop</h2>
          <p>Browse current Ark of Bones, Big Six Bones, and Domino Mother Fucker products.</p>
          <Link className="text-link" to="/shop">Shop Current Products<ArrowRight aria-hidden="true" /></Link>
        </article>
        <article>
          <BookOpen aria-hidden="true" />
          <h2>Library</h2>
          <p>Read the published work and educational material attached to Ark of Bones culture.</p>
          <Link className="text-link" to="/library">View Books<ArrowRight aria-hidden="true" /></Link>
        </article>
      </section>
    </>
  );
}
