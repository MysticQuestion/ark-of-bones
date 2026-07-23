import { Navigate, Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import BigSixBonesPage from '../pages/BigSixBonesPage';
import BrandsPage from '../pages/BrandsPage';
import ContactPage from '../pages/ContactPage';
import DominoMotherFuckerPage from '../pages/DominoMotherFuckerPage';
import EventsPage from '../pages/EventsPage';
import FAQPage from '../pages/FAQPage';
import HomePage from '../pages/HomePage';
import LearnPage from '../pages/LearnPage';
import NotFoundPage from '../pages/NotFoundPage';
import ShopPage from '../pages/ShopPage';
import TablesPage from '../pages/TablesPage';
import WatchPage from '../pages/WatchPage';

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
