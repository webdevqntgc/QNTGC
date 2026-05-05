'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArrowRight, ArrowDown } from 'lucide-react';
import type { Dict, Locale } from '@/lib/i18n';

const OrbitScene = dynamic(() => import('./hero/OrbitScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 watermark-orbit" />,
});

interface Props {
  locale: Locale;
  dict: Dict;
}

export function Hero({ locale, dict }: Props) {
  const isRtl = locale === 'ar';
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
      {/* 3D background */}
      <div className="absolute inset-0 opacity-90">
        <OrbitScene />
      </div>

      {/* Subtle vignette to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white" />

      {/* Decorative red bar (brand stationery motif) */}
      <div className={`absolute top-1/2 ${isRtl ? 'right-0' : 'left-0'} h-32 w-1.5 -translate-y-1/2 rounded-full bg-brand-red`} />

      <div className="relative container-page flex min-h-screen flex-col justify-center pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="eyebrow mb-6 block"
          >
            {dict.hero.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-display-xl font-bold tracking-tight text-brand-navy"
          >
            {dict.hero.title.split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="inline-block me-3"
              >
                {i === dict.hero.title.split(' ').length - 1 ? (
                  <span className="bg-gradient-to-r from-brand-red to-brand-navy bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-brand-navy/75"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#brands" className="btn-primary group">
              {dict.hero.ctaPrimary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
            <a href="#about" className="btn-secondary">
              {dict.hero.ctaSecondary}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-navy/50"
        >
          <span>{dict.hero.scroll}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
