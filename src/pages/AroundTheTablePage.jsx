import EmptyState from '../components/EmptyState';
import SEO from '../components/SEO';
import eventHero from '../assets/editorial/events-1.webp';
import tableDetail from '../assets/editorial/events-2.webp';
import rackDetail from '../assets/editorial/events-3.webp';

const recordTypes = ['Interviews', 'Oral histories', 'Photo essays', 'Event records'];

export default function AroundTheTablePage() {
  return (
    <>
      <SEO
        title="Around the Table"
        description="Ark of Bones interviews, oral histories, photo essays, and event records."
        path="/around-the-table"
        image={eventHero}
      />

      <header className="journal-mast journal-mast--split">
        <div><p className="eyebrow">Editorial record</p><h1>Around <br />the Table</h1></div>
        <span>0 published entries</span>
      </header>

      <figure className="record-lead-image record-lead-image--flush">
        <img src={eventHero} alt="Players gathered around an Ark of Bones domino table" width="1800" height="900" />
        <figcaption>Ark of Bones / table record</figcaption>
      </figure>

      <section className="around-register" aria-labelledby="around-register-title">
        <div>
          <p className="eyebrow" id="around-register-title">Archive</p>
          <h2>People, play, and table history.</h2>
        </div>
        <EmptyState title="No entries published" description="The archive opens with documented material." />
      </section>

      <section className="record-index">
        <div className="record-index__label"><p className="eyebrow">Record types</p></div>
        <div className="record-index__rows">
          {recordTypes.map((type, index) => <div className="record-index__row" key={type}><span>{String(index + 1).padStart(2, '0')}</span><strong>{type}</strong></div>)}
        </div>
      </section>

      <section className="record-gallery record-gallery--editorial">
        <figure><img src={tableDetail} alt="Ark of Bones table during active play" width="1400" height="700" loading="lazy" /><figcaption>Play / table view</figcaption></figure>
        <figure><img src={rackDetail} alt="Dominoes in illuminated table racks" width="1400" height="700" loading="lazy" /><figcaption>Object / rack detail</figcaption></figure>
      </section>
    </>
  );
}
