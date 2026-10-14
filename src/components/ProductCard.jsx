import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SafeImage from './SafeImage';

export default function ProductCard({ product }) {
  const isGallery = product.kind === 'gallery';
  const inquiryItem = product.variant ? `${product.name} - ${product.variant}` : product.name;

  return (
    <article className={`product-card${isGallery ? ' product-card--gallery' : ''}`}>
      <div className="product-card-image">
        <SafeImage
          src={product.image}
          alt={`${product.name}, ${product.variant ?? product.brand}`}
          fallbackAlt={`${product.name} image is unavailable; Ark of Bones mark shown`}
          width={isGallery ? '1400' : '1000'}
          height={isGallery ? '788' : '1000'}
          loading="lazy"
        />
        {isGallery ? <span className="product-card-number">{product.catalogNumber}</span> : null}
      </div>
      <div className="product-card-body">
        <div className="product-card-kicker">
          <p className="eyebrow">{product.brand}</p>
          <span>{isGallery ? product.department : product.category}</span>
        </div>
        <h3>{product.name}</h3>
        {product.variant ? <p className="product-variant">{product.variant}</p> : null}
        {!isGallery && product.specs?.length ? <p>{product.specs.slice(0, 2).join(' · ')}</p> : null}
        <div className="product-card-footer">
          {product.price ? <strong>{product.price}</strong> : <span className="product-status">{product.status}</span>}
          {product.href ? (
            <a
              className="button button--dark"
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${product.ctaLabel} - ${product.name} in the Ark of Bones shop`}
            >
              {product.ctaLabel}<ExternalLink aria-hidden="true" />
            </a>
          ) : (
            <Link className="button button--dark" to={`/contact?inquiry=Merchandise&item=${encodeURIComponent(inquiryItem)}`}>
              Request details<ArrowRight aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
