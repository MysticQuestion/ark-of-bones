import { Mail, Phone } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { ASSETS } from '../config/brand';
import { CONTACT } from '../config/contact';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact Ark of Bones about custom tables, merchandise, press, or other company work."
        path="/contact"
      />
      <PageHero
        title="Contact Ark of Bones"
        description="Questions about tables, merchandise, press, or other Ark of Bones work can be sent below."
        image={ASSETS.table}
        compact
      />
      <section className="contact-layout">
        <aside className="contact-details">
          <h2>Contact Information</h2>
          <a href={`mailto:${CONTACT.email}`}><Mail aria-hidden="true" /><span>General inquiries<strong>{CONTACT.email}</strong></span></a>
          <a href={`mailto:${CONTACT.tablesEmail}`}><Mail aria-hidden="true" /><span>Custom tables<strong>{CONTACT.tablesEmail}</strong></span></a>
          <a href={CONTACT.phoneHref}><Phone aria-hidden="true" /><span>Telephone<strong>{CONTACT.phoneDisplay}</strong></span></a>
          <div className="contact-socials" aria-label="Official social channels">
            <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on Facebook">FB</a>
            <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on Instagram">IG</a>
            <a href={CONTACT.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on TikTok">TT</a>
            <a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on YouTube">YT</a>
          </div>
        </aside>
        <div className="contact-form-wrap">
          <h2>Send an Inquiry</h2>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
