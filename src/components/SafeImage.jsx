import { useEffect, useState } from 'react';
import fallbackImage from '../assets/brand/aob-logo-1440.webp';

export default function SafeImage({ src, alt, fallbackAlt, onError, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const usingFallback = currentSrc === fallbackImage;

  useEffect(() => setCurrentSrc(src), [src]);

  const handleError = (event) => {
    onError?.(event);
    if (!usingFallback) setCurrentSrc(fallbackImage);
  };

  return (
    <img
      {...props}
      src={currentSrc}
      alt={usingFallback ? (fallbackAlt || alt) : alt}
      onError={handleError}
    />
  );
}
