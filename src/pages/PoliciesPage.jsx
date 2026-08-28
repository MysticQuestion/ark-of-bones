import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const policies = ['Privacy', 'Terms', 'Shipping', 'Returns / Refunds', 'Accessibility', 'Copyright / Trademark', 'Event Terms', 'Media / Recording'];

export default function PoliciesPage() {
  return (
    <>
      <SEO title="Policies" description="Ark of Bones policy publication register." path="/policies" />
      <header className="record-mast"><div><p className="eyebrow">Trust / Publication register</p><h1>Policies</h1></div><span className="status-label">In Development</span></header>
      <section className="policy-register">
        {policies.map((policy, index) => <div key={policy}><span>{String(index + 1).padStart(2, '0')}</span><strong>{policy}</strong><em>Not published</em></div>)}
      </section>
      <footer className="policy-notice">
        <p>No policy text is presented as authoritative until approved and dated.</p>
        <Link className="text-link" to="/contact?inquiry=General">Request current terms</Link>
      </footer>
    </>
  );
}
