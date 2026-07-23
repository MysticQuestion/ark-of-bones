import { Link } from 'react-router-dom';
import { BRAND } from '../config/brand';
import { CONTACT } from '../config/contact';
import { primaryNavigation, resourceNavigation } from '../config/navigation';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-positioning">
          <Link to="/" className="footer-brand">{BRAND.name}</Link>
          <p>{BRAND.proposition}</p>
          <p className="footer-contact">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><br />
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          </p>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          <div>
            <strong>Explore</strong>
            {primaryNavigation.slice(1, 5).map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          </div>
          <div>
            <strong>Company</strong>
            {primaryNavigation.slice(5).map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          </div>
          <div>
            <strong>Resources</strong>
            {resourceNavigation.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
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
