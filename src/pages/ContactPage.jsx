import { Mail, MapPin, Phone } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import { ASSETS } from '../config/brand';
import { CONTACT } from '../config/contact';

export default function ContactPage() {
  return (
    <>
      <SEO title="Contact" description="Contact Ark of Bones for events, player participation, venue partnerships, tables, sponsorships, media, merchandise, and brand collaboration." path="/contact" />
      <PageHero eyebrow="Bookings, partnerships, and questions" title="Contact Ark of Bones" description="Choose the inquiry type that matches the opportunity and give the team enough context to respond effectively." image={ASSETS.event} compact />
      <section className="contact-layout">
        <aside className="contact-details">
          <p className="eyebrow">Verified contact</p>
          <h2>Let’s connect. Let’s play.</h2>
          <a href={`mailto:${CONTACT.email}`}><Mail aria-hidden="true" /><span>Email<strong>{CONTACT.email}</strong></span></a>
          <a href={CONTACT.phoneHref}><Phone aria-hidden="true" /><span>Telephone<strong>{CONTACT.phoneDisplay}</strong></span></a>
          <div><MapPin aria-hidden="true" /><span>Event location<strong>Include your city in the inquiry</strong></span></div>
          <div className="contact-socials" aria-label="Official social channels">
            <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on Facebook">FB</a>
            <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on Instagram">IG</a>
            <a href={CONTACT.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on TikTok">TT</a>
            <a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on YouTube">YT</a>
          </div>
        </aside>
        <div className="contact-form-wrap"><p className="eyebrow">Prepare an inquiry</p><h2>Tell us what you’re building.</h2><InquiryForm /></div>
      </section>
    </>
  );
}
