import { useState } from 'react';
import { Briefcase } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  hoverZoom?: boolean;
  scrim?: 'none' | 'subtle' | 'hero' | 'bottom';
  fallbackTitle?: string;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  hoverZoom = false,
  scrim = 'none',
  fallbackTitle,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(priority);

  return (
    <div className={`relative overflow-hidden bg-[#141311] ${containerClassName}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${
            hoverZoom
              ? 'transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]'
              : ''
          } ${className}`}
        />
      ) : (
        <div
          className="w-full h-full min-h-[220px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#181715] via-[#252421] to-[#10100F] border border-[#2C2A26]"
          role="img"
          aria-label={alt}
        >
          <Briefcase className="w-6 h-6 text-[#C9A45C] mb-3" strokeWidth={1.5} />
          <p className="font-serif text-base text-[#F5F3EE] max-w-xs">
            {fallbackTitle || alt}
          </p>
        </div>
      )}

      {scrim === 'subtle' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080807]/70 via-[#080807]/20 to-transparent"
        />
      )}

      {scrim === 'bottom' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080807]/90 via-[#080807]/45 to-transparent"
        />
      )}

      {scrim === 'hero' && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080807] via-[#080807]/72 to-[#080807]/52"
        />
      )}
    </div>
  );
}
