import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmptyState({ title, description, actionLabel, actionTo, external = false }) {
  return (
    <div className="empty-state" role="status">
      <span className="empty-state-mark" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{description}</p>
      {actionLabel && actionTo ? (
        external ? (
          <a className="text-link" href={actionTo} target="_blank" rel="noopener noreferrer">{actionLabel}<ArrowRight aria-hidden="true" /></a>
        ) : (
          <Link className="text-link" to={actionTo}>{actionLabel}<ArrowRight aria-hidden="true" /></Link>
        )
      ) : null}
    </div>
  );
}
