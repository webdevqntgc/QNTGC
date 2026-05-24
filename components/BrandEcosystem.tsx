'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Dict, Locale } from '@/lib/i18n';
import { brands, type BrandCategory } from '@/lib/brands';

/** True if the hex colour is light enough to need dark text on top of it. */
function isLightBg(hex: string): boolean {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6;
}

interface Props { dict: Dict; locale: Locale }

type Filter = BrandCategory | 'all';

export function BrandEcosystem({ dict, locale }: Props) {
  const [filter, setFilter] = useState<Filter>('all');
  const isAr = locale === 'ar';

  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: dict.brandsSection.filterAll },
    { id: 'retail', label: dict.brandsSection.filterRetail },
    { id: 'entertainment', label: dict.brandsSection.filterEntertainment },
    { id: 'fnb', label: dict.brandsSection.filterFnb },
    { id: 'creative', label: dict.brandsSection.filterCreative },
  ];

  const filtered = filter === 'all' ? brands : brands.filter((b) => b.category === filter);

  return (
    <section id="brands" className="relative overflow-hidden py-20 md:py-32">
      {/* Cosmic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-grey-light/30 to-white" />
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand-red/5 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-brand-navy/5 blur-3xl" />

      <div className="relative container-page">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="eyebrow mb-4 justify-center">{dict.brandsSection.eyebrow}</span>
          <h2 className="heading-display mb-6">{dict.brandsSection.title}</h2>
          <p className="text-lg text-brand-navy/70">{dict.brandsSection.subtitle}</p>
        </div>

        {/* Filter pills */}
        <div className="mb-14 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                filter === f.id
                  ? 'bg-brand-navy text-white shadow-glow-navy'
                  : 'bg-white text-brand-navy/70 hover:bg-brand-grey-light hover:text-brand-navy border border-brand-navy/10'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Brand grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((brand, i) => {
              const desc = isAr ? brand.description_ar : brand.description_en;
              const slogan = isAr ? brand.slogan_ar : brand.slogan;
              const lightBg = isLightBg(brand.bg);

              // Text/chip palette per bg luminance
              const titleClass = lightBg ? 'text-brand-navy' : 'text-white';
              const yearClass  = lightBg ? 'text-brand-navy/45' : 'text-white/55';
              const descClass  = lightBg ? 'text-brand-navy/70' : 'text-white/80';
              const chipBg     = lightBg ? 'bg-brand-navy/8 text-brand-navy/75' : 'bg-white/15 text-white/85';
              const exploreCls = lightBg
                ? 'text-brand-navy group-hover:text-brand-red'
                : 'text-white group-hover:text-yellow-300';

              const subBrandIds = ['kiddyzone','candyvill','trampo','westfun','ecolandia','spacetoys','rondvill','photobrick','lartducafe'];
              const cardHref = subBrandIds.includes(brand.id)
                ? `/${locale}/brands/${brand.id}`
                : `/${locale}/#contact`;

              return (
                <motion.a
                  key={brand.id}
                  href={cardHref}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group relative block overflow-hidden rounded-3xl p-8 shadow-card transition-shadow duration-500 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  style={{ background: brand.bg }}
                  aria-label={`Explore ${brand.name}`}
                >
                  {/* Glow */}
                  <div
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                    style={{ background: brand.accent }}
                  />

                  {/* Brand mark — real logo if provided, fallback to gradient initials.
                      Always render the logo on a white tile so colored brand SVGs read
                      cleanly even when the card background is dark. */}
                  {brand.logo ? (
                    <div className="mb-6 grid h-20 w-20 place-items-center rounded-2xl bg-white p-2 shadow-md ring-1 ring-black/10 transition-transform duration-500 group-hover:scale-110">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className="mb-6 grid h-16 w-16 place-items-center rounded-2xl text-xl font-display font-bold text-white shadow-md transition-transform duration-500 group-hover:scale-110"
                      style={{ background: `linear-gradient(135deg, ${brand.accent}, ${brand.accent}cc)` }}
                    >
                      {brand.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}

                  <div className="mb-2 flex items-baseline justify-between gap-2">
                    <h3 className={`font-display text-xl font-bold ${titleClass}`}>{brand.name}</h3>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${yearClass}`}>
                      {dict.brandsSection.established} {brand.year}
                    </span>
                  </div>

                  {slogan && (
                    <p
                      className="mb-3 text-sm font-semibold italic"
                      style={{ color: lightBg ? brand.accent : '#ffffff' }}
                    >
                      “{slogan}”
                    </p>
                  )}

                  <p className={`mb-5 text-sm leading-relaxed ${descClass}`}>{desc}</p>

                  {brand.locations && brand.locations.length > 0 && (
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {brand.locations.map((loc) => (
                        <span
                          key={loc}
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${chipBg}`}
                        >
                          <MapPin className="h-2.5 w-2.5" /> {loc}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Whole card is the link — this is just the visible "Explore" affordance */}
                  <span
                    className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors ${exploreCls}`}
                  >
                    {dict.brandsSection.explore}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </motion.a>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
