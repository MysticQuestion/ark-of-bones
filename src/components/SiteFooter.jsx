import { Link } from 'react-router-dom';
import { BRAND } from '../config/brand';
import { CONTACT } from '../config/contact';

const exploreLinks = [
  ['Events', '/events'],
  ['Watch', '/watch'],
  ['Official Play', '/official-play'],
  ['Tables', '/tables'],
  ['Shop', '/shop'],
];

const companyLinks = [
  ['About', '/about'],
  ['Around the Table', '/around-the-table'],
  ['Brands', '/brands'],
  ['Work With Us', '/contact'],
];

const resourceLinks = [
  ['Learn', '/learn'],
  ['FAQ', '/faq'],
  ['Design Archive', '/shop/archive'],
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-positioning">
          <Link to="/" className="footer-brand">{BRAND.name}</Link>
          <p>Live competition, official play, media, and community.</p>
          <p className="footer-contact">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br />
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          </p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <div>
            <strong>Explore</strong>
            {exploreLinks.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}
          </div>
          <div>
            <strong>Company</strong>
            {companyLinks.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}
          </div>
          <div>
            <strong>Resources</strong>
            {resourceLinks.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ark of Bones. All rights reserved.</span>
        <div className="social-links" aria-label="Ark of Bones social channels">
          <a className="social-wordmark" href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on Facebook">FB</a>
          <a className="social-wordmark" href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on Instagram">IG</a>
          <a className="social-wordmark" href={CONTACT.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on TikTok">TT</a>
          <a className="social-wordmark" href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="Ark of Bones on YouTube">YT</a>
        </div>
      </div>
    </footer>
  );
}
