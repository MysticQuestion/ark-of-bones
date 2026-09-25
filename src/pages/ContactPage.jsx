import { Mail, MapPin, Phone } from 'lucide-react';
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
        description="Contact Ark of Bones about a custom table, current merchandise, or a specific question. Table specifications are reviewed by Anthony before a quote."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="Request details."
        description="General questions use info@arkofbones.com. A configured table can be sent directly to Anthony from the table studio."
        image={ASSETS.table}
        compact
      />
      <section className="contact-layout">
        <aside className="contact-details">
          <p className="eyebrow">Direct contact</p>
          <h2>Use the address that matches the request.</h2>
          <p>Table builds are not cart items. Anthony reviews the specification, then sends a written quote. Merchandise checkout stays on the published product pages.</p>
          <a href={`mailto:${CONTACT.email}`}><Mail aria-hidden="true" /><span>General<strong>{CONTACT.email}</strong></span></a>
          <a href={`mailto:${CONTACT.tablesEmail}`}><Mail aria-hidden="true" /><span>Tables<strong>{CONTACT.tablesEmail}</strong></span></a>
          <a href={CONTACT.phoneHref}><Phone aria-hidden="true" /><span>Telephone<strong>{CONTACT.phoneDisplay}</strong></span></a>
          <div><MapPin aria-hidden="true" /><span>Location<strong>Include your city and delivery area</strong></span></div>
          <div className="contact-socials" aria-label="Official social channels">
            <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on Facebook">FB</a>
            <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on Instagram">IG</a>
            <a href={CONTACT.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on TikTok">TT</a>
            <a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on YouTube">YT</a>
          </div>
        </aside>
        <div className="contact-form-wrap">
          <p className="eyebrow">Start the conversation</p>
          <h2>Give us enough context to respond usefully.</h2>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
