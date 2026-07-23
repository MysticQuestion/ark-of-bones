import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection({ eyebrow, title, description, label, to, secondaryLabel, secondaryTo }) {
  return (
    <section className="cta-section">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="cta-actions">
        <Link className="button button--gold" to={to}>{label}<ArrowRight aria-hidden="true" /></Link>
        {secondaryLabel ? <Link className="button button--outline" to={secondaryTo}>{secondaryLabel}</Link> : null}
      </div>
    </section>
  );
}
