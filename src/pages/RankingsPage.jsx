import EmptyState from '../components/EmptyState';
import SEO from '../components/SEO';
import { rankings } from '../data/competition';

export default function RankingsPage() {
  return (
    <>
      <SEO title="Rankings" description="Ark of Bones verified competition rankings." path="/rankings" />
      <header className="record-mast">
        <div><p className="eyebrow">Official Play / Rankings</p><h1>Rankings</h1></div>
        <span className="status-label">In Development</span>
      </header>
      <section className="single-record-state">
        {rankings.length ? null : <EmptyState title="Rankings not active" description="Verified match volume is not sufficient for publication." />}
      </section>
      <p className="record-note">Every future position must link to the match records that produced it.</p>
    </>
  );
}
