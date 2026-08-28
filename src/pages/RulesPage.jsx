import { Link } from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import SEO from '../components/SEO';
import { rulesets } from '../data/competition';

export default function RulesPage() {
  return (
    <>
      <SEO title="Rules" description="Ark of Bones rules versions and change records." path="/rules" />
      <header className="record-mast">
        <div><p className="eyebrow">Official Play / Rules</p><h1>Rules</h1></div>
        <span className="status-label">In Development</span>
      </header>
      <section className="single-record-state">
        {rulesets.length ? null : (
          <EmptyState title="Canonical rules not published" description="No citeable Ark of Bones rules version is active." />
        )}
      </section>
      <section className="rules-requirement">
        <p className="eyebrow">Publication standard</p>
        <dl>
          <div><dt>Version</dt><dd>Required</dd></div>
          <div><dt>Effective date</dt><dd>Required</dd></div>
          <div><dt>Source</dt><dd>Required</dd></div>
          <div><dt>Changelog</dt><dd>Required</dd></div>
          <div><dt>Contributors</dt><dd>Credited where approved</dd></div>
        </dl>
        <Link className="text-link" to="/contact?inquiry=Official%20Play">Submit rules material</Link>
      </section>
    </>
  );
}
