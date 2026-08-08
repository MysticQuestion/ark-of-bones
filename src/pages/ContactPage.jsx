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
        title="Work With Us"
        description="Work with Ark of Bones on official play, events, venue programs, institutional partnerships, legacy sessions, sponsorships, media, and merchandise."
        path="/contact"
      />
      <PageHero
        eyebrow="Partnerships, pilots, and bookings"
        title="Work with Ark of Bones."
        description="Tell us the setting, audience, city, and outcome you have in mind. We will route the conversation from there."
        image={ASSETS.event}
        compact
      />
      <section className="contact-layout">
        <aside className="contact-details">
          <p className="eyebrow">Direct contact</p>
          <h2>Start with the real opportunity.</h2>
          <p>Official-play pilots, venues, military MWR, campuses, community programs, Around the Table sessions, sponsorships, and media can all begin through the same intake.</p>
          <a href={`mailto:${CONTACT.email}`}><Mail aria-hidden="true" /><span>Email<strong>{CONTACT.email}</strong></span></a>
          <a href={CONTACT.phoneHref}><Phone aria-hidden="true" /><span>Telephone<strong>{CONTACT.phoneDisplay}</strong></span></a>
          <div><MapPin aria-hidden="true" /><span>Location<strong>Include your city and venue or organization</strong></span></div>
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
