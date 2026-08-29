import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StatusLabel from '../components/StatusLabel';
import tableHero from '../assets/editorial/tables-1.webp';
import tableRackPortrait from '../assets/editorial/tables-2.webp';
import tablePlayerPortrait from '../assets/editorial/tables-3.webp';
import tableRackDetail from '../assets/editorial/tables-4.webp';
import tableFeltDetail from '../assets/editorial/tables-5.webp';
import tableRoom from '../assets/editorial/tables-6.webp';
import tableInPlay from '../assets/editorial/tables-7.webp';

const observedDetails = [
  ['Play surface', 'Felt'],
  ['Racks', 'Recessed / illuminated'],
  ['Rail', 'Padded'],
  ['Configuration', 'Four-player table'],
];

const pendingPolicy = [
  'Dimensions and weight',
  'Available finishes',
  'Finish and marking options',
  'Electrical requirements',
  'Production lead time',
  'Delivery and installation area',
  'Warranty and maintenance',
  'Price and payment terms',
];

export default function TablesPage() {
  return (
    <>
      <SEO title="Tables" description="Ark of Bones table design record and current inquiry status." path="/tables" image={tableHero} />
      <header className="table-document-mast">
        <div><p className="eyebrow">Industrial record / Table 01</p><h1>Tables</h1></div>
        <div><StatusLabel state="Research" /><p>Commercial policy under review</p></div>
      </header>
      <figure className="table-document-hero">
        <img src={tableHero} alt="Four players at an Ark of Bones domino table with illuminated recessed racks" width="1800" height="900" />
        <figcaption>Table 01 / Four-player configuration / Photographic record</figcaption>
      </figure>
      <section className="table-document-grid">
        <div className="table-document-specs">
          <p className="eyebrow">Visible construction</p>
          <dl>{observedDetails.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl>
        </div>
        <div className="table-document-notice">
          <p className="eyebrow">Before quotation</p>
          <h2>Production terms are not published.</h2>
          <p>Availability, specifications, delivery area, installation, lead time, warranty, and price require written confirmation.</p>
          <Link className="text-link" to="/contact?inquiry=Tables">Table inquiry <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
      <section className="table-plate-grid">
        <figure><img src={tableRackPortrait} alt="Dominoes in a recessed illuminated rack" width="900" height="1800" loading="lazy" /><figcaption>01 / Rack</figcaption></figure>
        <figure><img src={tablePlayerPortrait} alt="Player seated behind the padded table rail" width="900" height="1800" loading="lazy" /><figcaption>02 / Rail</figcaption></figure>
        <figure><img src={tableRackDetail} alt="Close view of the illuminated domino rack" width="1000" height="1000" loading="lazy" /><figcaption>03 / Light</figcaption></figure>
        <figure><img src={tableFeltDetail} alt="Dominoes on the felt play surface" width="1000" height="1000" loading="lazy" /><figcaption>04 / Surface</figcaption></figure>
      </section>
      <section className="specification-pending">
        <div><p className="eyebrow">Specification register</p><h2>Confirmation required</h2></div>
        <ol>{pendingPolicy.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}<em>Pending</em></li>)}</ol>
      </section>
      <figure className="table-room-record">
        <img src={tableRoom} alt="Ark of Bones table installed in an entertainment room" width="1400" height="900" loading="lazy" />
        <img src={tableInPlay} alt="Ark of Bones table during active domino play" width="1800" height="900" loading="lazy" />
      </figure>
    </>
  );
}
