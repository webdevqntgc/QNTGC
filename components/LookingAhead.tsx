'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Dict } from '@/lib/i18n';

export function LookingAhead({ dict }: { dict: Dict }) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-32 text-white">
      {/* Animated orbital lines */}
      <div className="absolute inset-0 grid place-items-center opacity-30">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute aspect-square rounded-full border border-white/15"
            style={{ width: `${20 + i * 18}%` }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 40 + i * 8, repeat: Infinity, ease: 'linear' }}
          >
            <div
              className="absolute h-2.5 w-2.5 rounded-full bg-brand-red shadow-glow-red"
              style={{
                top: '0%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-navy/40 to-brand-navy" />

      <div className="relative container-page text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow !text-white/60 mb-6 justify-center">{dict.future.eyebrow}</span>
          <h2 className="font-display text-display-lg font-bold tracking-tight mx-auto max-w-3xl">
            {dict.future.title}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
            {dict.future.body}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-glow-red transition-all hover:bg-white hover:text-brand-navy hover:-translate-y-0.5 group">
              {dict.future.ctaPartner}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-brand-navy hover:border-white">
              {dict.future.ctaContact}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
