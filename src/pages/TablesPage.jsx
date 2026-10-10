import { ArrowRight, BookOpen, PlayCircle, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SafeImage from '../components/SafeImage';
import { ASSETS } from '../config/brand';

export default function TablesPage() {
  return (
    <>
      <SEO
        title="Explore Ark of Bones"
        description="Discover Ark of Bones video, game guides, merchandise, publishing, and community."
        path="/tables"
        image={ASSETS.hero}
      />

      <header className="editorial-mast table-mast">
        <h1>The Culture of the Table</h1>
        <p className="table-mast-copy">
          Discover the games, people, and stories behind Ark of Bones. Explore videos, game guides, and official merchandise.
        </p>
        <div className="editorial-rule" aria-hidden="true"><span /></div>
      </header>

      <section className="editorial-wide-media editorial-page-gutter">
        <SafeImage
          src={ASSETS.hero}
          alt="Ark of Bones domino culture photography"
          fallbackAlt="Ark of Bones domino culture photography"
          width="1800"
          height="900"
        />
        <p className="editorial-caption">
          Ark of Bones celebrates the social and competitive traditions of dominoes and table games.
        </p>
      </section>

      <section className="editorial-band editorial-band--quiet">
        <div className="editorial-section-heading">
          <h2>Explore the Collection</h2>
          <p>
            Start with the stories, learn the games, or browse official Ark of Bones designs.
          </p>
        </div>
        <div className="feature-card-grid">
          <article className="feature-card">
            <PlayCircle aria-hidden="true" />
            <h3>Watch</h3>
            <p>Live play, recorded matches, highlights, and community media.</p>
            <Link className="button button--gold" to="/around-the-table">Open Watch<ArrowRight aria-hidden="true" /></Link>
          </article>
          <article className="feature-card">
            <ShoppingBag aria-hidden="true" />
            <h3>Shop</h3>
            <p>Confirmed Ark of Bones, Big Six Bones, and Domino Mother Fucker merch.</p>
            <Link className="button button--gold" to="/shop">Open Shop<ArrowRight aria-hidden="true" /></Link>
          </article>
          <article className="feature-card">
            <BookOpen aria-hidden="true" />
            <h3>Learn</h3>
            <p>Game education, rules, scoring, etiquette, and cultural reading.</p>
            <Link className="button button--gold" to="/library">Open Library<ArrowRight aria-hidden="true" /></Link>
          </article>
        </div>
      </section>
    </>
  );
}
