import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrandCard({ brand }) {
  return (
    <article className={`brand-card brand-card--${brand.tone}`}>
      <img src={brand.image} alt={`People gathered around the table representing ${brand.displayName}`} width="1600" height="900" loading="lazy" />
      <div className="brand-card-overlay">
        <p className="eyebrow">{brand.category}</p>
        <h3>{brand.displayName}</h3>
        <p>{brand.description}</p>
        <Link className="text-link" to={brand.path}>Enter brand page<ArrowRight aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
