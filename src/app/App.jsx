import { Suspense, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import DominoLoader from '../components/DominoLoader';
import PageErrorBoundary from '../components/PageErrorBoundary';
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

function RouteContent() {
  const location = useLocation();

  return (
    <PageErrorBoundary key={location.pathname}>
      <Suspense fallback={<DominoLoader />}>
        <AppRoutes />
      </Suspense>
    </PageErrorBoundary>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <RouteFocus />
      <main id="main-content" className="page-shell" tabIndex="-1">
        <RouteContent />
      </main>
      <SiteFooter />
    </div>
  );
}
