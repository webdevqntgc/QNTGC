'use client';

interface Props {
  className?: string;
  variant?: 'default' | 'white';
}

/**
 * Inline SVG approximation of the QNTGC orbital mark — three intertwined
 * ribbons (red, navy, grey). Replace with the official logo file by swapping
 * for an <Image> pointing at /public/qntgc-logo.svg when ready.
 */
export function LogoMark({ className = '', variant = 'default' }: Props) {
  const red = variant === 'white' ? '#ffffff' : '#B01117';
  const navy = variant === 'white' ? '#ffffff' : '#002561';
  const grey = variant === 'white' ? 'rgba(255,255,255,0.7)' : '#919497';

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g fill="none" strokeWidth="9" strokeLinecap="round">
        <ellipse cx="60" cy="60" rx="44" ry="20" stroke={red} transform="rotate(-25 60 60)" />
        <ellipse cx="60" cy="60" rx="44" ry="20" stroke={navy} transform="rotate(25 60 60)" />
        <ellipse cx="60" cy="60" rx="44" ry="20" stroke={grey} transform="rotate(90 60 60)" opacity="0.7" />
      </g>
      <circle cx="60" cy="60" r="6" fill={navy} />
    </svg>
  );
}

export function LogoLockup({ locale, variant = 'default' }: { locale: string; variant?: 'default' | 'white' }) {
  // Use the real horizontal lockup image. The "white" variant inverts via CSS
  // filter so the navy/red logo reads on the dark navy footer.
  return (
    <div className="flex items-center" lang={locale}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/QNTGC Logo.png"
        alt="Qatar National Trading Group"
        className={`h-16 w-auto shrink-0 md:h-20 lg:h-24 ${variant === 'white' ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
}
