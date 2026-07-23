import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <SEO title="Page Not Found" description="The requested Ark of Bones page could not be found." path="/404" />
      <p className="eyebrow">404 · Off the table</p>
      <h1>That page is not in play.</h1>
      <p>The destination may have moved, or the address may be incomplete.</p>
      <Link className="button button--gold" to="/"><ArrowLeft aria-hidden="true" />Return to Ark of Bones</Link>
    </section>
  );
}
