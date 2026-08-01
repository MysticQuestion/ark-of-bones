import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrandActionRail({ label, actions }) {
  const headingId = `${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-pathways`;

  return (
    <section className="brand-action-section" aria-labelledby={headingId}>
      <p className="eyebrow" id={headingId}>{label}</p>
      <div className="brand-action-rail">
        {actions.map((action, index) => (
          <Link key={action.to} to={action.to}>
            <span>0{index + 1}</span>
            <h3>{action.title}</h3>
            <p>{action.description}</p>
            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  );
}
