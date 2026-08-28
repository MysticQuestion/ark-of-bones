import { Mail, Phone } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import SEO from '../components/SEO';
import { CONTACT, INQUIRY_TYPES } from '../config/contact';

export default function ContactPage() {
  return (
    <>
      <SEO title="Contact" description="Contact Ark of Bones about events, tables, Official Play, partnerships, media, or shop support." path="/contact" />
      <header className="record-mast">
        <div><p className="eyebrow">Inquiry desk</p><h1>Contact</h1></div>
        <span className="record-mast__status">Los Angeles / United States</span>
      </header>
      <section className="contact-index" aria-label="Inquiry categories">
        {INQUIRY_TYPES.map((type, index) => <div key={type}><span>{String(index + 1).padStart(2, '0')}</span><strong>{type}</strong></div>)}
      </section>
      <section className="contact-layout contact-layout--institutional">
        <aside className="contact-details">
          <p className="eyebrow">Direct</p>
          <a href={`mailto:${CONTACT.email}`}><Mail aria-hidden="true" /><span>Email<strong>{CONTACT.email}</strong></span></a>
          <a href={CONTACT.phoneHref}><Phone aria-hidden="true" /><span>Telephone<strong>{CONTACT.phoneDisplay}</strong></span></a>
          <p className="contact-note">The form opens a prepared email. No data is stored by this website.</p>
        </aside>
        <div className="contact-form-wrap">
          <p className="eyebrow">Structured intake</p>
          <h2>Inquiry record</h2>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
