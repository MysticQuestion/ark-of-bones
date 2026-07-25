import { ExternalLink } from 'lucide-react';

export default function ProductCard({ product }) {
  const isConcept = product.kind === 'concept';

  return (
    <article className={`product-card${isConcept ? ' product-card--concept' : ''}`}>
      <div className="product-card-image">
        <img
          src={product.image}
          alt={`${product.name}, ${product.variant ?? product.brand}`}
          width={isConcept ? '1400' : '1000'}
          height={isConcept ? '788' : '1000'}
          loading="lazy"
        />
        {isConcept ? <span className="product-card-number">{product.catalogNumber}</span> : null}
      </div>
      <div className="product-card-body">
        <div className="product-card-kicker">
          <p className="eyebrow">{product.brand}</p>
          {isConcept ? <span>{product.department}</span> : null}
        </div>
        <h3>{product.name}</h3>
        {product.variant ? <p className="product-variant">{product.variant}</p> : null}
        {product.description ? <p>{product.description}</p> : null}
        <div className="product-card-footer">
          <strong>{product.price}</strong>
          {product.href ? (
            <a className="button button--dark" href={product.href} target="_blank" rel="noopener noreferrer">
              Shop collection<span className="sr-only"> for {product.name} on the official external store</span><ExternalLink aria-hidden="true" />
            </a>
          ) : (
            <span className="concept-status">{product.status}</span>
          )}
        </div>
      </div>
    </article>
  );
}
