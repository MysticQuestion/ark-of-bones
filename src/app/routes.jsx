import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const AboutPage = lazy(() => import('../pages/AboutPage'));
const BigSixBonesPage = lazy(() => import('../pages/BigSixBonesPage'));
const BrandsPage = lazy(() => import('../pages/BrandsPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const DominoMotherFuckerPage = lazy(() => import('../pages/DominoMotherFuckerPage'));
const EventsPage = lazy(() => import('../pages/EventsPage'));
const FAQPage = lazy(() => import('../pages/FAQPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const LearnPage = lazy(() => import('../pages/LearnPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const ShopPage = lazy(() => import('../pages/ShopPage'));
const TablesPage = lazy(() => import('../pages/TablesPage'));
const WatchPage = lazy(() => import('../pages/WatchPage'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/watch" element={<WatchPage />} />
      <Route path="/tables" element={<TablesPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/brands" element={<BrandsPage />} />
      <Route path="/brands/domino-mother-fucker" element={<DominoMotherFuckerPage />} />
      <Route path="/brands/big-six-bones" element={<BigSixBonesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/learn" element={<LearnPage />} />
      <Route path="/faq" element={<FAQPage />} />

      <Route path="/domino-mother-fucker" element={<Navigate to="/brands/domino-mother-fucker" replace />} />
      <Route path="/big-six-bones" element={<Navigate to="/brands/big-six-bones" replace />} />
      <Route path="/videos-2" element={<Navigate to="/watch" replace />} />
      <Route path="/merch" element={<Navigate to="/shop" replace />} />
      <Route path="/merch-3" element={<Navigate to="/shop" replace />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
