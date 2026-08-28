import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import SEO from '../components/SEO';
import {
  correctionProcedure,
  matches,
  officialPlayStatus,
  rankings,
  recordRequirements,
  rulesets,
} from '../data/competition';

const authorities = [
  ['Rules', rulesets.length ? `${rulesets.length} published` : 'No canonical version published', '/rules'],
  ['Match records', matches.length ? `${matches.length} verified` : 'No verified records', '#records'],
  ['Rankings', rankings.length ? `${rankings.length} active` : 'Not active', '/rankings'],
];

export default function OfficialPlayPage() {
  return (
    <>
      <SEO
        title="Official Play"
        description="Ark of Bones rules, match standards, verification, corrections, and competition records."
        path="/official-play"
      />
      <header className="authority-mast">
        <div><p className="eyebrow">Competition authority</p><h1>Official Play</h1></div>
        <span className="status-label">{officialPlayStatus.label}</span>
      </header>
      <section className="authority-index" aria-label="Official Play status">
        {authorities.map(([title, status, to], index) => (
          <Link key={title} to={to} className="authority-index__row">
            <span>{String(index + 1).padStart(2, '0')}</span><strong>{title}</strong><span>{status}</span><ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </section>
      <section className="authority-section" id="records" aria-labelledby="record-standard-title">
        <div className="authority-section__heading">
          <p className="eyebrow">Record standard</p><h2 id="record-standard-title">A result requires a source.</h2>
        </div>
        <ol className="record-requirements">
          {recordRequirements.map((requirement, index) => (
            <li key={requirement}><span>{String(index + 1).padStart(2, '0')}</span>{requirement}</li>
          ))}
        </ol>
      </section>
      <section className="record-status-grid" aria-label="Current competition records">
        <EmptyState title="Match record" description="No verified match records." />
        <EmptyState title="Rules authority" description="Canonical rules not published." />
        <EmptyState title="Rankings" description="Rankings not active." />
      </section>
      <section className="authority-section authority-section--bone" aria-labelledby="corrections-title">
        <div className="authority-section__heading">
          <p className="eyebrow">Corrections</p><h2 id="corrections-title">The original record remains traceable.</h2>
        </div>
        <div className="correction-ledger">
          {correctionProcedure.map(([number, title, detail]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></article>
          ))}
        </div>
      </section>
      <footer className="authority-contact">
        <span>Rules contribution or record correction</span>
        <Link to="/contact?inquiry=Official%20Play">Submit material <ArrowRight aria-hidden="true" /></Link>
      </footer>
    </>
  );
}
