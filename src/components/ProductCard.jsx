import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const isGallery = product.kind === 'gallery';
  const inquiryItem = product.variant ? `${product.name} - ${product.variant}` : product.name;

  return (
    <article className={`product-card${isGallery ? ' product-card--gallery' : ''}`}>
      <div className="product-card-image">
        <img
          src={product.image}
          alt={`${product.name}, ${product.variant ?? product.brand}`}
          width={isGallery ? '1400' : '1000'}
          height={isGallery ? '788' : '1000'}
          loading="lazy"
        />
        {isGallery ? <span className="product-card-number">{product.catalogNumber}</span> : null}
      </div>
      <div className="product-card-body">
        <div className="product-card-kicker">
          <p className="eyebrow">{product.brand}</p>
          {isGallery ? <span>{product.department}</span> : null}
        </div>
        <h3>{product.name}</h3>
        {product.variant ? <p className="product-variant">{product.variant}</p> : null}
        {product.description ? <p>{product.description}</p> : null}
        <div className="product-card-footer">
          <strong>{product.price}</strong>
          {product.href ? (
            <a className="button button--dark" href={product.href} target="_blank" rel="noopener noreferrer">
              Shop collection<span className="sr-only"> for {product.name} on the Ark of Bones store</span><ExternalLink aria-hidden="true" />
            </a>
          ) : (
            <Link className="button button--dark" to={`/contact?inquiry=Merchandise&item=${encodeURIComponent(inquiryItem)}`}>
              Ask about this piece<ArrowRight aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
