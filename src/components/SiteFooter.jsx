import { Link } from 'react-router-dom';
import { BRAND } from '../config/brand';
import { CONTACT } from '../config/contact';

const columns = [
  ['Play', [['Official Play', '/official-play'], ['Events', '/events'], ['Watch', '/watch']]],
  ['Company', [['About', '/about'], ['Around the Table', '/around-the-table'], ['Brands', '/brands']]],
  ['Access', [['Shop', '/shop'], ['Tables', '/tables'], ['Partnerships', '/partnerships'], ['Contact', '/contact']]],
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-positioning">
          <Link to="/" className="footer-brand">{BRAND.name}</Link>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
        <div className="footer-links" aria-label="Footer navigation">
          {columns.map(([heading, links]) => (
            <div key={heading}>
              <strong>{heading}</strong>
              {links.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ark of Bones</span>
        <div className="social-links" aria-label="Ark of Bones social channels">
          <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href={CONTACT.social.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
