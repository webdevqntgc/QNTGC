'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { Dict } from '@/lib/i18n';
import { brands } from '@/lib/brands';

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState('0');
  const numeric = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (Number.isNaN(numeric)) {
      setDisplay(value);
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(Math.floor(eased * numeric) + suffix);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [numeric, suffix, value]);

  return (
    <div ref={ref} className="space-y-1">
      <div className="font-display text-4xl font-bold text-brand-red lg:text-5xl">{display}</div>
      <div className="text-xs font-medium uppercase tracking-wider text-brand-navy/60">{label}</div>
    </div>
  );
}

export function About({ dict }: { dict: Dict }) {
  return (
    <section id="about" className="relative py-32">
      <div className="container-page grid items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow mb-6 block">{dict.about.eyebrow}</span>
          <h2 className="heading-display mb-8">{dict.about.title}</h2>
          <p className="text-lg leading-relaxed text-brand-navy/75">{dict.about.body}</p>

          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <Counter value={dict.about.stat1Value} label={dict.about.stat1Label} />
            <Counter value={dict.about.stat2Value} label={dict.about.stat2Label} />
            <Counter value={dict.about.stat3Value} label={dict.about.stat3Label} />
            <Counter value={dict.about.stat4Value} label={dict.about.stat4Label} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative aspect-square"
        >
          <BrandOrbit />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Animated ecosystem visual: the QNTGC mark in the centre with all sub-brand
 * logos orbiting it on two concentric, counter-rotating rings. Pure CSS/SVG
 * geometry — no R3F — so it's lightweight and reads well on every screen.
 */
function BrandOrbit() {
  // Split brands across two rings for visual balance.
  const inner = brands.slice(0, 4);
  const outer = brands.slice(4);

  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="relative aspect-square h-full w-full">
        {/* Background concentric guides */}
        {[0.45, 0.7, 0.95].map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-dashed border-brand-navy/10"
            style={{ transform: `scale(${s})` }}
          />
        ))}

        {/* Soft brand-tinted halos */}
        <div className="absolute inset-[10%] rounded-full bg-brand-red/5 blur-3xl" />
        <div className="absolute inset-[20%] rounded-full bg-brand-navy/5 blur-2xl" />

        {/* Inner ring — counter-clockwise */}
        <motion.div
          className="absolute inset-0"
          style={{ transform: 'scale(0.55)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
        >
          {inner.map((b, i) => {
            const angle = (i / inner.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * 50;
            const y = 50 + Math.sin(angle) * 50;
            return <BrandSatellite key={b.id} brand={b} x={x} y={y} counter={360} size={64} />;
          })}
        </motion.div>

        {/* Outer ring — clockwise */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        >
          {outer.map((b, i) => {
            const angle = (i / outer.length) * Math.PI * 2 - Math.PI / 2 + 0.3;
            const x = 50 + Math.cos(angle) * 47;
            const y = 50 + Math.sin(angle) * 47;
            return <BrandSatellite key={b.id} brand={b} x={x} y={y} counter={-360} size={72} />;
          })}
        </motion.div>

        {/* Centre — QNTGC master mark */}
        <div className="absolute inset-0 grid place-items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.3 }}
            className="relative grid h-36 w-36 place-items-center rounded-full bg-white p-4 shadow-2xl ring-4 ring-brand-red/10 sm:h-40 sm:w-40"
          >
            <div className="absolute inset-0 -z-10 animate-pulse-slow rounded-full bg-brand-red/10 blur-2xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/QNTGC Logo.png"
              alt="QNTGC"
              className="h-full w-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function BrandSatellite({
  brand,
  x,
  y,
  counter,
  size,
}: {
  brand: { id: string; name: string; logo?: string; accent: string };
  x: number;
  y: number;
  counter: number;
  size: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 + Math.random() * 0.4, type: 'spring', stiffness: 120 }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
    >
      {/* Counter-rotate so the logo stays upright while its parent ring spins */}
      <motion.div
        animate={{ rotate: counter }}
        transition={{ duration: counter < 0 ? 38 : 55, repeat: Infinity, ease: 'linear' }}
        className="grid h-full w-full place-items-center rounded-full bg-white p-2 shadow-card ring-1 ring-brand-navy/5 transition-transform hover:scale-110 hover:shadow-card-hover"
        style={{ borderTop: `3px solid ${brand.accent}` }}
        title={brand.name}
      >
        {brand.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={brand.logo} alt={brand.name} className="h-full w-full object-contain" />
        ) : (
          <span className="font-display text-[10px] font-bold text-brand-navy">{brand.name.slice(0, 4)}</span>
        )}
      </motion.div>
    </motion.div>
  );
}
