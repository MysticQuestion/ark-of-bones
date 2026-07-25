import { CircleCheck, ExternalLink } from 'lucide-react';
import { SITE_URL } from '../config/brand';

export default function PreviewStatus() {
  return (
    <aside className="preview-status" aria-label="Staging preview status">
      <div className="preview-status-inner">
        <strong><CircleCheck aria-hidden="true" />Public staging preview</strong>
        <span>Noindex active</span>
        <span>Production site untouched</span>
        <span>Concept checkout disabled</span>
        <a href={SITE_URL} target="_blank" rel="noopener noreferrer">
          Open current production site
          <ExternalLink aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}
