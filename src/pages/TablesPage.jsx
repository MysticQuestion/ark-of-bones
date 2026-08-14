import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import tableHero from '../assets/editorial/tables-1.webp';
import tableRackPortrait from '../assets/editorial/tables-2.webp';
import tablePlayerPortrait from '../assets/editorial/tables-3.webp';
import tableRackDetail from '../assets/editorial/tables-4.webp';
import tableFeltDetail from '../assets/editorial/tables-5.webp';
import tableRoom from '../assets/editorial/tables-6.webp';
import tableInPlay from '../assets/editorial/tables-7.webp';
import tableCommunity from '../assets/editorial/tables-8.webp';

const specifications = [
  ['Configuration', 'Built to order'],
  ['Racks', 'Recessed and illuminated'],
  ['Surface', 'Felt play field'],
  ['Rail', 'Padded and upholstered'],
  ['Finish', 'Selected during scoping'],
  ['Media', 'Available according to build scope'],
  ['Timeline', 'Confirmed in the written quote'],
  ['Delivery', 'Confirmed by destination and access'],
];

const feltOptions = [
  { name: 'Table green', color: '#1f5138' },
  { name: 'Oxblood', color: '#7a1b1b' },
  { name: 'Navy', color: '#12213f' },
  { name: 'Charcoal', color: '#2e2e2c' },
  { name: 'Wine', color: '#5c1f3a' },
];

const engravingOptions = ['None', 'Rail', 'Center'];

export default function TablesPage() {
  const [felt, setFelt] = useState(feltOptions[0].name);
  const [engraving, setEngraving] = useState('Rail');
  const quotePath = useMemo(() => {
    const item = `Custom domino table — ${felt} felt, ${engraving.toLowerCase()} engraving`;
    return `/contact?inquiry=Private%20%2F%20Home%20Table&item=${encodeURIComponent(item)}`;
  }, [engraving, felt]);

  return (
    <>
      <SEO
        title="Custom Domino Tables"
        description="Explore Ark of Bones built-to-order domino tables with illuminated racks, upholstered rails, custom finishes, and optional media integration."
        path="/tables"
        image={tableHero}
      />

      <header className="editorial-mast">
        <p className="eyebrow">Tables</p>
        <h1>The racks light up.</h1>
        <div className="editorial-rule" aria-hidden="true"><span /></div>
      </header>

      <section className="editorial-wide-media editorial-page-gutter">
        <img
          src={tableHero}
          alt="Players gathered around an Ark of Bones table with illuminated racks"
          width="1800"
          height="900"
        />
        <p className="editorial-caption">Recessed illuminated racks keep each hand visible while the game stays centered on the felt.</p>
      </section>

      <section className="table-build editorial-band">
        <div className="table-build-portraits">
          <figure>
            <img src={tableRackPortrait} alt="Illuminated rack holding dominoes" width="900" height="1800" loading="lazy" />
            <figcaption>The rack sits inside the table instead of interrupting the playing surface.</figcaption>
          </figure>
          <figure>
            <img src={tablePlayerPortrait} alt="Player seated at an Ark of Bones domino table" width="900" height="1800" loading="lazy" />
            <figcaption>A padded rail supports long games and keeps the room close to the action.</figcaption>
          </figure>
        </div>

        <div className="table-build-panel">
          <p className="eyebrow">Build profile</p>
          <dl className="editorial-spec-list">
            {specifications.map(([term, detail]) => (
              <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>
            ))}
          </dl>

          <div className="table-configurator">
            <fieldset>
              <legend>Felt</legend>
              <div className="felt-options">
                {feltOptions.map((option) => (
                  <button
                    key={option.name}
                    type="button"
                    aria-label={option.name}
                    aria-pressed={felt === option.name}
                    onClick={() => setFelt(option.name)}
                    style={{ backgroundColor: option.color }}
                  />
                ))}
              </div>
              <p className="editorial-muted">Selected: {felt}</p>
            </fieldset>

            <fieldset>
              <legend>Engraving</legend>
              <div className="engraving-options">
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
            </fieldset>
          </div>

          <div className="table-quote-panel">
            <p className="eyebrow">Built to order</p>
            <h2>Quoted by configuration.</h2>
            <p>Final dimensions, materials, features, delivery, service terms, production timing, and payment schedule are confirmed in writing before a deposit is requested.</p>
            <div className="hero-actions">
              <Link className="button button--gold" to={quotePath}>Request this configuration<ArrowRight aria-hidden="true" /></Link>
              <Link className="button button--outline" to="/contact?inquiry=Tables%20%2F%20Venue%20Partnership">Discuss a venue build</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-band editorial-band--quiet">
        <div className="editorial-section-heading">
          <p className="eyebrow">Details</p>
          <div className="editorial-rule" aria-hidden="true"><span /></div>
        </div>
        <div className="editorial-gallery editorial-gallery--three">
          <figure>
            <img src={tableRackDetail} alt="Close view of an illuminated domino rack" width="1000" height="1000" loading="lazy" />
            <figcaption>Rack detail.</figcaption>
          </figure>
          <figure>
            <img src={tableFeltDetail} alt="Dominoes arranged across the felt playing surface" width="1000" height="1000" loading="lazy" />
            <figcaption>A playing surface with room for the line to develop.</figcaption>
          </figure>
          <figure>
            <img src={tableRoom} alt="Ark of Bones domino table in an entertainment room" width="1000" height="1000" loading="lazy" />
            <figcaption>Designed for a room that gets used.</figcaption>
          </figure>
        </div>
      </section>

      <section className="editorial-split editorial-band editorial-band--light">
        <div>
          <p className="eyebrow">Ordering</p>
          <h2>Scope first. Approval before production.</h2>
        </div>
        <div className="editorial-copy">
          <p>Choose the intended use, finish direction, and key features. Ark of Bones then confirms the build details, drawings or approvals, delivery requirements, timeline, and quote.</p>
          <p className="editorial-muted">Venue, league, event, and multi-table requirements are reviewed separately.</p>
          <Link className="button button--dark" to={quotePath}>Start a build inquiry<ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="editorial-band">
        <div className="editorial-section-heading">
          <p className="eyebrow">In use</p>
          <div className="editorial-rule" aria-hidden="true"><span /></div>
        </div>
        <div className="editorial-gallery editorial-gallery--pair">
          <figure>
            <img src={tableInPlay} alt="A full Ark of Bones domino table in play" width="1800" height="900" loading="lazy" />
            <figcaption>Built for the players at the table and the people gathered around them.</figcaption>
          </figure>
          <figure>
            <img src={tableCommunity} alt="Ark of Bones community gathered around an illuminated domino table" width="1400" height="700" loading="lazy" />
            <figcaption>The product is the table; the value is the gathering it supports.</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
