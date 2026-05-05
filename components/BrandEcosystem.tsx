'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Dict, Locale } from '@/lib/i18n';
import { brands, type BrandCategory } from '@/lib/brands';

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
    { id: 'lifestyle', label: dict.brandsSection.filterLifestyle },
  ];

  const filtered = filter === 'all' ? brands : brands.filter((b) => b.category === filter);

  return (
    <section id="brands" className="relative overflow-hidden py-32">
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
              return (
                <motion.article
                  key={brand.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-card transition-shadow duration-500 hover:shadow-card-hover"
                  style={{ borderTop: `4px solid ${brand.accent}` }}
                >
                  {/* Glow */}
                  <div
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                    style={{ background: brand.accent }}
                  />

                  {/* Brand mark — real logo if provided, fallback to gradient initials */}
                  {brand.logo ? (
                    <div className="mb-6 grid h-20 w-20 place-items-center rounded-2xl bg-white p-2 shadow-md ring-1 ring-brand-navy/5 transition-transform duration-500 group-hover:scale-110">
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
                    <h3 className="font-display text-xl font-bold text-brand-navy">{brand.name}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-navy/40">
                      {dict.brandsSection.established} {brand.year}
                    </span>
                  </div>

                  {slogan && (
                    <p className="mb-3 text-sm font-semibold italic" style={{ color: brand.accent }}>
                      “{slogan}”
                    </p>
                  )}

                  <p className="mb-5 text-sm leading-relaxed text-brand-navy/65">{desc}</p>

                  {brand.locations && brand.locations.length > 0 && (
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {brand.locations.map((loc) => (
                        <span
                          key={loc}
                          className="inline-flex items-center gap-1 rounded-full bg-brand-grey-light px-2.5 py-0.5 text-[11px] font-medium text-brand-navy/70"
                        >
                          <MapPin className="h-2.5 w-2.5" /> {loc}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navy transition-colors group-hover:text-brand-red"
                  >
                    {dict.brandsSection.explore}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
