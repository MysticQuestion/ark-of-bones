import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafeImage from './SafeImage';

export default function BrandCard({ brand, compact = false }) {
  return (
    <article className={`brand-card brand-card--${brand.tone}`}>
      <SafeImage src={brand.image} alt={`People gathered around the table representing ${brand.displayName}`} fallbackAlt={`${brand.displayName}; Ark of Bones mark shown`} width="1600" height="900" loading="lazy" />
      <div className="brand-card-overlay">
        <p className="eyebrow">{brand.category}</p>
        <h3>{brand.displayName}</h3>
        <p>{compact ? brand.proposition : brand.description}</p>
        <Link className="text-link" to={brand.path}>{compact ? 'Meet the brand' : 'Enter brand page'}<ArrowRight aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
