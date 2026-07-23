import { ExternalLink } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={`${product.name} merchandise`} width="1000" height="1000" loading="lazy" />
      </div>
      <div className="product-card-body">
        <p className="eyebrow">{product.brand}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card-footer">
          <strong>{product.price}</strong>
          <a className="button button--dark" href={product.href} target="_blank" rel="noopener noreferrer">
            Shop collection<span className="sr-only"> for {product.name} on the official external store</span><ExternalLink aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
