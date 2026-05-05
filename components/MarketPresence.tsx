'use client';

import { motion } from 'framer-motion';
import type { Dict } from '@/lib/i18n';

// Approximate map coordinates as percentages on a 100x100 viewport
const countryCoords: Record<string, { x: number; y: number }> = {
  Qatar: { x: 58, y: 50 },
  'الإمارات': { x: 62, y: 53 },
  UAE: { x: 62, y: 53 },
  Oman: { x: 65, y: 56 },
  'عُمان': { x: 65, y: 56 },
  Kuwait: { x: 56, y: 47 },
  'الكويت': { x: 56, y: 47 },
  Australia: { x: 85, y: 78 },
  'أستراليا': { x: 85, y: 78 },
  USA: { x: 22, y: 42 },
  'أمريكا': { x: 22, y: 42 },
};

export function MarketPresence({ dict }: { dict: Dict }) {
  const hub = dict.market.countries[0]; // Qatar
  const hubCoord = countryCoords[hub];

  return (
    <section className="relative py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="eyebrow mb-4 justify-center">{dict.market.eyebrow}</span>
          <h2 className="heading-display mb-6">{dict.market.title}</h2>
          <p className="text-lg text-brand-navy/70">{dict.market.subtitle}</p>
        </div>

        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-5">
          {dict.market.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-brand-navy/10 bg-white p-6 text-center shadow-soft"
            >
              <div className="font-display text-3xl font-bold text-brand-red lg:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-navy/60">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* World map visualization */}
        <div className="relative mx-auto aspect-[2/1] max-w-5xl rounded-3xl bg-navy-gradient p-6 sm:p-10 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] [background-size:24px_24px]" />

          <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            {dict.market.countries.slice(1).map((country, i) => {
              const c = countryCoords[country];
              if (!c || !hubCoord) return null;
              return (
                <motion.line
                  key={country}
                  x1={hubCoord.x}
                  y1={hubCoord.y * 0.6}
                  x2={c.x}
                  y2={c.y * 0.6}
                  stroke="#B01117"
                  strokeWidth="0.15"
                  strokeDasharray="0.5 0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 + i * 0.15 }}
                />
              );
            })}
          </svg>

          {dict.market.countries.map((country, i) => {
            const c = countryCoords[country];
            if (!c) return null;
            const isHub = i === 0;
            return (
              <motion.div
                key={country}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${c.x}%`, top: `${c.y}%` }}
              >
                <div className="relative">
                  {isHub && (
                    <div className="absolute inset-0 -m-3 animate-ping rounded-full bg-brand-red/40" />
                  )}
                  <div
                    className={`relative h-3 w-3 rounded-full ${isHub ? 'bg-brand-red shadow-glow-red' : 'bg-white shadow-md'}`}
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold text-white">
                    {country}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
