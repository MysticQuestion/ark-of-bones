import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ExternalRedirect from '../components/ExternalRedirect';
import { legacyRedirects } from '../config/publicRoutes';
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
const LibraryPage = lazy(() => import('../pages/LibraryPage'));
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
      <Route path="/library" element={<LibraryPage />} />

      {legacyRedirects.map((route) => (
        <Route key={route.path} path={route.path} element={<Navigate to={route.to} replace />} />
      ))}

      {officialProducts.map((product) => {
        const productPath = new URL(product.href).pathname;
        return <Route key={product.id} path={productPath} element={<ExternalRedirect to={product.href} />} />;
      })}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
