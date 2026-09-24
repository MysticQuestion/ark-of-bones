import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ExternalRedirect from '../components/ExternalRedirect';
import { officialProducts } from '../data/products';

const AboutPage = lazy(() => import('../pages/AboutPage'));
const AroundTheTablePage = lazy(() => import('../pages/AroundTheTablePage'));
const BigSixBonesPage = lazy(() => import('../pages/BigSixBonesPage'));
const BrandsPage = lazy(() => import('../pages/BrandsPage'));
const ComingSoonPage = lazy(() => import('../pages/ComingSoonPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const DominoMotherFuckerPage = lazy(() => import('../pages/DominoMotherFuckerPage'));
const FAQPage = lazy(() => import('../pages/FAQPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const ShopPage = lazy(() => import('../pages/ShopPage'));
const TablesPage = lazy(() => import('../pages/TablesPage'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tables" element={<TablesPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/coming-soon" element={<ComingSoonPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/brands" element={<BrandsPage />} />
      <Route path="/brands/domino-mother-fucker" element={<DominoMotherFuckerPage />} />
      <Route path="/brands/big-six-bones" element={<BigSixBonesPage />} />
      <Route path="/around-the-table" element={<AroundTheTablePage />} />

      <Route path="/events" element={<Navigate to="/coming-soon#events" replace />} />
      <Route path="/watch" element={<Navigate to="/coming-soon#media" replace />} />
      <Route path="/official-play" element={<Navigate to="/coming-soon#circuit" replace />} />
      <Route path="/learn" element={<Navigate to="/coming-soon#circuit" replace />} />
      <Route path="/partnerships" element={<Navigate to="/coming-soon#venue-programs" replace />} />
      <Route path="/play" element={<Navigate to="/coming-soon#digital-game" replace />} />
      <Route path="/shop/archive" element={<Navigate to="/shop#archive" replace />} />

      <Route path="/domino-mother-fucker" element={<Navigate to="/brands/domino-mother-fucker" replace />} />
      <Route path="/big-six-bones" element={<Navigate to="/brands/big-six-bones" replace />} />
      <Route path="/home-live-soon" element={<Navigate to="/" replace />} />
      <Route path="/events-1" element={<Navigate to="/coming-soon#events" replace />} />
      <Route path="/events-2" element={<Navigate to="/coming-soon#events" replace />} />
      <Route path="/events/event-one-dkrkk" element={<Navigate to="/coming-soon#events" replace />} />
      <Route path="/watch-1" element={<Navigate to="/coming-soon#media" replace />} />
      <Route path="/watch-2" element={<Navigate to="/coming-soon#media" replace />} />
      <Route path="/videos-2" element={<Navigate to="/coming-soon#media" replace />} />
      <Route path="/videos-2/watch-archives" element={<Navigate to="/coming-soon#media" replace />} />
      <Route path="/videos-2/v/sunday-nights-with-aob" element={<Navigate to="/coming-soon#media" replace />} />
      <Route path="/videos-2/v/aob-game-night" element={<Navigate to="/coming-soon#media" replace />} />
      <Route path="/videos-2/v/anywhere" element={<Navigate to="/coming-soon#media" replace />} />
      <Route path="/videos-2/v/who-is-aob" element={<Navigate to="/coming-soon#media" replace />} />
      <Route path="/videos-2/v/game-night" element={<Navigate to="/coming-soon#media" replace />} />
      <Route path="/merch" element={<Navigate to="/shop" replace />} />
      <Route path="/merch-1" element={<Navigate to="/shop" replace />} />
      <Route path="/merch-2" element={<Navigate to="/shop" replace />} />
      <Route path="/merch-3" element={<Navigate to="/shop" replace />} />
      <Route path="/merch/big-six-bones-merch" element={<Navigate to="/shop?brand=big-six-bones" replace />} />
      <Route path="/merch/domino-mother-fucker-merch" element={<Navigate to="/shop?brand=domino-mother-fucker" replace />} />
      {officialProducts.map((product) => {
        const productPath = new URL(product.href).pathname;
        return <Route key={product.id} path={productPath} element={<ExternalRedirect to={product.href} />} />;
      })}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
