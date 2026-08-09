import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ExternalRedirect from '../components/ExternalRedirect';
import { officialProducts } from '../data/products';

const AboutPage = lazy(() => import('../pages/AboutPage'));
const AroundTheTablePage = lazy(() => import('../pages/AroundTheTablePage'));
const BigSixBonesPage = lazy(() => import('../pages/BigSixBonesPage'));
const BrandsPage = lazy(() => import('../pages/BrandsPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const DominoMotherFuckerPage = lazy(() => import('../pages/DominoMotherFuckerPage'));
const EventsPage = lazy(() => import('../pages/EventsPage'));
const FAQPage = lazy(() => import('../pages/FAQPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const LearnPage = lazy(() => import('../pages/LearnPage'));
const MediaPage = lazy(() => import('../pages/MediaPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const OfficialPlayPage = lazy(() => import('../pages/OfficialPlayPage'));
const ShopArchivePage = lazy(() => import('../pages/ShopArchivePage'));
const ShopPage = lazy(() => import('../pages/ShopPage'));
const TablesPage = lazy(() => import('../pages/TablesPage'));
const WatchPage = lazy(() => import('../pages/WatchPage'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/watch" element={<WatchPage />} />
      <Route path="/media" element={<MediaPage />} />
      <Route path="/official-play" element={<OfficialPlayPage />} />
      <Route path="/tables" element={<TablesPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/shop/archive" element={<ShopArchivePage />} />
      <Route path="/brands" element={<BrandsPage />} />
      <Route path="/brands/domino-mother-fucker" element={<DominoMotherFuckerPage />} />
      <Route path="/brands/big-six-bones" element={<BigSixBonesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/around-the-table" element={<AroundTheTablePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/learn" element={<LearnPage />} />
      <Route path="/faq" element={<FAQPage />} />

      <Route path="/domino-mother-fucker" element={<Navigate to="/brands/domino-mother-fucker" replace />} />
      <Route path="/big-six-bones" element={<Navigate to="/brands/big-six-bones" replace />} />
      <Route path="/home-live-soon" element={<Navigate to="/" replace />} />
      <Route path="/events-1" element={<Navigate to="/events" replace />} />
      <Route path="/events-2" element={<Navigate to="/events" replace />} />
      <Route path="/events/event-one-dkrkk" element={<Navigate to="/events" replace />} />
      <Route path="/watch-1" element={<Navigate to="/watch" replace />} />
      <Route path="/watch-2" element={<Navigate to="/watch" replace />} />
      <Route path="/videos-2" element={<Navigate to="/watch" replace />} />
      <Route path="/videos-2/watch-archives" element={<Navigate to="/watch" replace />} />
      <Route path="/videos-2/v/sunday-nights-with-aob" element={<Navigate to="/watch" replace />} />
      <Route path="/videos-2/v/aob-game-night" element={<Navigate to="/watch" replace />} />
      <Route path="/videos-2/v/anywhere" element={<Navigate to="/watch" replace />} />
      <Route path="/videos-2/v/who-is-aob" element={<Navigate to="/watch#founder-video-title" replace />} />
      <Route path="/videos-2/v/game-night" element={<Navigate to="/watch" replace />} />
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
