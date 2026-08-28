import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { ASSETS, BRAND } from '../config/brand';
import { primaryNavigation } from '../config/navigation';
import MobileNavigation from './MobileNavigation';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
    if (location.hash) {
      window.requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash, closeMenu]);

  return (
    <>
      <header className="site-header">
        <Link className="site-brand" to="/" aria-label={`${BRAND.name} home`}>
          <img src={ASSETS.heroLogoSmall} alt="" width="42" height="42" />
          <span>{BRAND.name}</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
          ))}
        </nav>
        <Link className="header-contact" to="/contact">Contact</Link>
        <button
          className="menu-button"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(true)}
        >
          <Menu aria-hidden="true" />
        </button>
      </header>
      <div id="mobile-navigation">
        <MobileNavigation open={menuOpen} onClose={closeMenu} />
      </div>
    </>
  );
}
