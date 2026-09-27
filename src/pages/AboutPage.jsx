import { ArrowRight } from 'lucide-react';
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
        description="Ark of Bones is a domino table and game-culture company founded by Anthony Covington."
        path="/about"
      />

      <PageHero
        title="About Ark of Bones"
        description="Ark of Bones is a domino table and game-culture company founded by Anthony Covington. The company produces built-to-order domino tables, apparel, publishing projects, and related work centered on social and competitive table play."
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
          <h2>Anthony Covington</h2>
          <p>Anthony Covington is the founder of Ark of Bones and the author of <em>Ark of Bones: Origins, Evolution, and Cultural Legacy of Dominoes, Spades, Euchre, and Booray</em>.</p>
          <p>His work draws on the social history of dominoes and card games and the communities that have sustained them across generations.</p>
          <Link className="button button--dark" to="/library">View the Library<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="mission-vision-grid">
        <article>
          <h2>Custom Tables</h2>
          <p>Design and request a built-to-order domino table.</p>
          <Link className="text-link" to="/tables#build-studio">Design a Table<ArrowRight aria-hidden="true" /></Link>
        </article>
        <article>
          <h2>Shop</h2>
          <p>Browse current Ark of Bones, Big Six Bones, and Domino Mother Fucker products.</p>
          <Link className="text-link" to="/shop">Shop Current Products<ArrowRight aria-hidden="true" /></Link>
        </article>
        <article>
          <h2>Library</h2>
          <p>Books by Anthony Covington on dominoes and table-game culture.</p>
          <Link className="text-link" to="/library">View Books<ArrowRight aria-hidden="true" /></Link>
        </article>
      </section>
    </>
  );
}
