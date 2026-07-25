import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { primaryNavigation, resourceNavigation } from '../config/navigation';

export default function MobileNavigation({ open, onClose }) {
  const firstLink = useRef(null);
  const panel = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    firstLink.current?.focus();
    const handleKeydown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = panel.current?.querySelectorAll('a[href], button:not([disabled])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeydown);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="mobile-nav-layer">
      <button className="mobile-nav-backdrop" type="button" onClick={onClose} aria-label="Close navigation" />
      <div ref={panel} className="mobile-nav-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
        <div className="mobile-nav-heading">
          <span>Navigate</span>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close menu">
            <X aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {primaryNavigation.map((item, index) => (
            <NavLink
              ref={index === 0 ? firstLink : null}
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={onClose}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-resource-links">
          {resourceNavigation.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={onClose}>{item.label}</NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
