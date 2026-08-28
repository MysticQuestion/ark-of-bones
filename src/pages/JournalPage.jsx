import EmptyState from '../components/EmptyState';
import SEO from '../components/SEO';
import { journalEntries, journalTypes } from '../data/journal';

export default function JournalPage() {
  return (
    <>
      <SEO title="Journal" description="Ark of Bones reports, interviews, histories, notices, and visual records." path="/journal" />
      <header className="journal-mast"><p className="eyebrow">Editorial archive</p><h1>Journal</h1><span>{journalEntries.length} published entries</span></header>
      <section className="journal-empty"><EmptyState title="No entries published" description="The archive opens with documented material." /></section>
      <section className="journal-register">
        <p className="eyebrow">Register</p>
        {journalTypes.map((type, index) => <div key={type}><span>{String(index + 1).padStart(2, '0')}</span><strong>{type}</strong></div>)}
      </section>
    </>
  );
}
