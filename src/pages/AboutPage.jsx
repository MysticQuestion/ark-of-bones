import { Link } from 'react-router-dom';
import SafeImage from '../components/SafeImage';
import SEO from '../components/SEO';
import { ASSETS } from '../config/brand';

const chronology = [
  ['31 MAR 2025', 'AOB Intro 2', 'Film record', '/watch'],
  ['16 APR 2025', 'Founder introduction and table film published', 'Media record', '/watch'],
  ['17 APR 2025', 'Ark of Bones short published', 'Media record', '/watch'],
  ['2026', 'Institutional website record established', 'Company record', '/journal'],
];

export default function AboutPage() {
  return (
    <>
      <SEO title="About" description="Ark of Bones company record, founder, brands, and chronology." path="/about" />
      <header className="about-mast"><p className="eyebrow">Company record</p><h1>Ark of Bones</h1></header>
      <section className="founder-record">
        <SafeImage src={ASSETS.owner} alt="Ark of Bones founder Tony Covington" fallbackAlt="Tony Covington, founder of Ark of Bones" width="1500" height="1092" loading="eager" />
        <div><p className="eyebrow">Founder</p><h2>Tony Covington</h2><dl><div><dt>Organization</dt><dd>Ark of Bones</dd></div><div><dt>Primary work</dt><dd>Domino tables, events, film, competition systems, published goods</dd></div><div><dt>Public introduction</dt><dd>16 April 2025</dd></div></dl><Link className="text-link" to="/watch">Watch founder record</Link></div>
      </section>
      <section className="chronology" aria-labelledby="chronology-title">
        <div><p className="eyebrow">Chronology</p><h2 id="chronology-title">Public record</h2></div>
        <div>{chronology.map(([date, title, type, to]) => <Link key={`${date}-${title}`} to={to}><time>{date}</time><strong>{title}</strong><span>{type}</span></Link>)}</div>
      </section>
      <section className="identity-register">
        <p className="eyebrow">Identity register</p>
        <Link to="/brands"><span>01</span><strong>Ark of Bones</strong><em>Parent identity</em></Link>
        <Link to="/brands/big-six-bones"><span>02</span><strong>Big Six Bones</strong><em>Game identity</em></Link>
        <Link to="/brands/domino-mother-fucker"><span>03</span><strong>Domino Mother Fucker</strong><em>Product identity</em></Link>
      </section>
    </>
  );
}
