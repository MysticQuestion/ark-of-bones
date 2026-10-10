import { ArrowRight, BookOpen, PlayCircle, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SafeImage from '../components/SafeImage';
import { ASSETS } from '../config/brand';

export default function TablesPage() {
  return (
    <>
      <SEO
        title="Ark of Bones Platform"
        description="Ark of Bones does not advertise custom table builds on this app. Explore live play, game education, official merch, publishing, and community content."
        path="/tables"
        image={ASSETS.hero}
      />

      <header className="editorial-mast table-mast">
        <h1>No Table Sales or Custom Builds</h1>
        <p className="table-mast-copy">
          This app has been corrected. Ark of Bones is not represented here as a custom domino table sales or furniture customization service.
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
          Correct positioning: domino culture, live and recorded play, events, game education, official merch, publishing, and community connection.
        </p>
      </section>

      <section className="editorial-band editorial-band--quiet">
        <div className="editorial-section-heading">
          <h2>Use these actual public paths instead.</h2>
          <p>
            The former configurator and quote language has been removed because it implied services that should not be advertised on arkofbones.app.
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
