import { useMemo, useState } from 'react';
import { ArrowRight, Mail, RotateCcw } from 'lucide-react';
import SEO from '../components/SEO';
import { CONTACT } from '../config/contact';
import tableHero from '../assets/editorial/tables-1.webp';
import tableRackDetail from '../assets/editorial/tables-4.webp';
import tableFeltDetail from '../assets/editorial/tables-5.webp';
import tableRoom from '../assets/editorial/tables-6.webp';

const specifications = [
  ['Configuration', 'Built to order'],
  ['Racks', 'Recessed and illuminated'],
  ['Surface', 'Felt play field'],
  ['Rail', 'Padded and upholstered'],
  ['Finish', 'Confirmed during scoping'],
  ['Timeline', 'Confirmed in the written quote'],
  ['Delivery', 'Confirmed by destination and access'],
];

const feltOptions = [
  { name: 'Midnight', color: '#101010' },
  { name: 'Tournament green', color: '#214a39' },
  { name: 'Oxblood', color: '#5b2328' },
  { name: 'Navy', color: '#1b2940' },
  { name: 'Slate', color: '#343437' },
];

const engravingOptions = ['None', 'Rail', 'Center'];
const useOptions = ['Private / Home', 'Venue / Commercial', 'Event / Hospitality', 'Custom project'];

const initialContact = {
  name: '',
  email: '',
  phone: '',
  city: '',
  dimensions: '',
  notes: '',
};

export default function TablesPage() {
  const [felt, setFelt] = useState(feltOptions[0].name);
  const [engraving, setEngraving] = useState('Rail');
  const [engravingText, setEngravingText] = useState('ARK OF BONES');
  const [intendedUse, setIntendedUse] = useState(useOptions[0]);
  const [contact, setContact] = useState(initialContact);

  const selectedFelt = feltOptions.find((option) => option.name === felt) ?? feltOptions[0];

  const updateContact = (event) => {
    const { name, value } = event.target;
    setContact((current) => ({ ...current, [name]: value }));
  };

  const buildSummary = useMemo(() => [
    'ARK OF BONES — CUSTOM TABLE BUILD',
    '',
    `Intended use: ${intendedUse}`,
    `Felt: ${felt}`,
    `Engraving position: ${engraving}`,
    `Engraving text: ${engraving === 'None' ? 'None' : (engravingText.trim() || 'To be confirmed')}`,
    `Requested dimensions: ${contact.dimensions.trim() || 'To be discussed'}`,
    '',
    `Name: ${contact.name.trim() || 'Not provided'}`,
    `Email: ${contact.email.trim() || 'Not provided'}`,
    `Phone: ${contact.phone.trim() || 'Not provided'}`,
    `City / delivery area: ${contact.city.trim() || 'Not provided'}`,
    '',
    'Build notes:',
    contact.notes.trim() || 'No additional notes.',
  ].join('\n'), [contact, engraving, engravingText, felt, intendedUse]);

  const buildEmailHref = useMemo(() => {
    const subject = `Ark of Bones table build — ${contact.name.trim() || intendedUse}`;
    return `mailto:${CONTACT.tablesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildSummary)}`;
  }, [buildSummary, contact.name, intendedUse]);

  const resetBuild = () => {
    setFelt(feltOptions[0].name);
    setEngraving('Rail');
    setEngravingText('ARK OF BONES');
    setIntendedUse(useOptions[0]);
    setContact(initialContact);
  };

  return (
    <>
      <SEO
        title="Custom Domino Tables"
        description="Configure an Ark of Bones custom domino table, preview the build as you make selections, and send the completed specification directly for review."
        path="/tables"
        image={tableHero}
      />

      <header className="editorial-mast table-mast">
        <p className="eyebrow">Custom tables</p>
        <h1>Build the table before the quote.</h1>
        <p className="table-mast-copy">The preview is not a fabrication drawing. It is a live visual reference that keeps the selected finish decisions together while the request is being prepared.</p>
        <div className="editorial-rule" aria-hidden="true"><span /></div>
      </header>

      <section className="editorial-wide-media editorial-page-gutter">
        <img
          src={tableHero}
          alt="Ark of Bones custom domino table with illuminated racks"
          width="1800"
          height="900"
        />
        <p className="editorial-caption">The current table concept centers the playing surface, recessed illuminated racks, padded rail, and a finish selected for the room where it will live.</p>
      </section>

      <section className="table-studio editorial-band" id="build-studio">
        <div className="table-studio-heading">
          <p className="eyebrow">Table studio</p>
          <h2>Configure. Preview. Send.</h2>
          <p>Selections update the preview immediately. The final build request is prepared for <a href={`mailto:${CONTACT.tablesEmail}`}>{CONTACT.tablesEmail}</a>.</p>
        </div>

        <div className="table-studio-grid">
          <div className="table-preview-column">
            <div className="table-preview-shell">
              <div className="table-preview-label">
                <span>Live preview</span>
                <strong>{felt}</strong>
              </div>
              <div
                className="table-preview-stage"
                style={{ '--preview-felt': selectedFelt.color }}
                aria-label={`Preview of a ${felt} Ark of Bones table with ${engraving.toLowerCase()} engraving`}
              >
                <div className="table-preview-top">
                  <span className="preview-rack preview-rack--north" />
                  <span className="preview-rack preview-rack--east" />
                  <span className="preview-rack preview-rack--south" />
                  <span className="preview-rack preview-rack--west" />
                  <div className="preview-center-mark">AOB</div>
                  {engraving !== 'None' ? (
                    <div className={`preview-engraving preview-engraving--${engraving.toLowerCase()}`}>
                      {engravingText.trim() || 'CUSTOM'}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="table-preview-spec">
                <span>{intendedUse}</span>
                <span>{contact.dimensions.trim() || 'Dimensions to be confirmed'}</span>
                <span>{engraving === 'None' ? 'No engraving' : `${engraving} engraving`}</span>
              </div>
            </div>

            <div className="editorial-spec-list table-studio-specs">
              {specifications.map(([term, detail]) => (
                <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>
              ))}
            </div>
          </div>

          <div className="table-builder-panel">
            <fieldset>
              <legend>Intended use</legend>
              <div className="builder-choice-grid">
                {useOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={intendedUse === option}
                    onClick={() => setIntendedUse(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>Felt</legend>
              <div className="builder-felt-grid">
                {feltOptions.map((option) => (
                  <button
                    key={option.name}
                    type="button"
                    aria-pressed={felt === option.name}
                    onClick={() => setFelt(option.name)}
                  >
                    <span style={{ backgroundColor: option.color }} aria-hidden="true" />
                    {option.name}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>Engraving</legend>
              <div className="builder-choice-grid builder-choice-grid--three">
                {engravingOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={engraving === option}
                    onClick={() => setEngraving(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {engraving !== 'None' ? (
                <label className="builder-field">
                  <span>Engraving text</span>
                  <input value={engravingText} onChange={(event) => setEngravingText(event.target.value)} maxLength="28" />
                </label>
              ) : null}
            </fieldset>

            <div className="builder-field-grid">
              <label className="builder-field">
                <span>Your name</span>
                <input name="name" value={contact.name} onChange={updateContact} autoComplete="name" />
              </label>
              <label className="builder-field">
                <span>Email</span>
                <input name="email" type="email" value={contact.email} onChange={updateContact} autoComplete="email" />
              </label>
              <label className="builder-field">
                <span>Phone</span>
                <input name="phone" type="tel" value={contact.phone} onChange={updateContact} autoComplete="tel" />
              </label>
              <label className="builder-field">
                <span>City / delivery area</span>
                <input name="city" value={contact.city} onChange={updateContact} autoComplete="address-level2" />
              </label>
              <label className="builder-field builder-field--wide">
                <span>Requested dimensions</span>
                <input name="dimensions" value={contact.dimensions} onChange={updateContact} placeholder="Leave blank if you want recommendations" />
              </label>
              <label className="builder-field builder-field--wide">
                <span>Build notes</span>
                <textarea name="notes" value={contact.notes} onChange={updateContact} rows="5" placeholder="Room, seating, finish, delivery access, reference dimensions, or anything Anthony should know." />
              </label>
            </div>

            <div className="build-submit-panel">
              <div>
                <p className="eyebrow">Ready for review</p>
                <h3>Send this configuration to Anthony.</h3>
                <p>The button opens a prepared email with the build specification already addressed to {CONTACT.tablesEmail}. No payment is requested at this stage.</p>
              </div>
              <div className="build-submit-actions">
                <a className="button button--gold" href={buildEmailHref}>
                  <Mail aria-hidden="true" />Send build request
                </a>
                <button className="button button--outline" type="button" onClick={resetBuild}>
                  <RotateCcw aria-hidden="true" />Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-band editorial-band--quiet table-detail-edit">
        <div className="editorial-section-heading">
          <p className="eyebrow">Material reference</p>
          <h2>Details should earn the premium.</h2>
        </div>
        <div className="editorial-gallery editorial-gallery--three">
          <figure>
            <img src={tableRackDetail} alt="Close view of an illuminated domino rack" width="1000" height="1000" loading="lazy" />
            <figcaption>Recessed illuminated rack detail.</figcaption>
          </figure>
          <figure>
            <img src={tableFeltDetail} alt="Dominoes arranged across the felt playing surface" width="1000" height="1000" loading="lazy" />
            <figcaption>Playing-surface reference.</figcaption>
          </figure>
          <figure>
            <img src={tableRoom} alt="Ark of Bones domino table in an interior setting" width="1000" height="1000" loading="lazy" />
            <figcaption>Room and placement reference.</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
