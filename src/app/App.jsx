import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PreviewStatus from '../components/PreviewStatus';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import AppRoutes from './routes';

function RouteFocus() {
  const location = useLocation();
  const initialLocationKey = useRef(location.key);

  useEffect(() => {
    if (location.key === initialLocationKey.current || location.hash) return;

    window.requestAnimationFrame(() => {
      document.getElementById('main-content')?.focus({ preventScroll: true });
    });
  }, [location.key, location.hash]);

  return null;
}

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <PreviewStatus />
      <SiteHeader />
      <RouteFocus />
      <main id="main-content" className="page-shell" tabIndex="-1">
        <AppRoutes />
      </main>
      <SiteFooter />
    </div>
  );
}
