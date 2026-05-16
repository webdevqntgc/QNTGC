'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { Dict } from '@/lib/i18n';

export function Leadership({ dict }: { dict: Dict }) {
  const cards = [
    { name: dict.leadership.ceoName, role: dict.leadership.ceoRole, msg: dict.leadership.ceoMessage, accent: 'red' as const, photo: '/Team/CEO - Qntgc.jpg' },
    { name: dict.leadership.cooName, role: dict.leadership.cooRole, msg: dict.leadership.cooMessage, accent: 'navy' as const, photo: '/Team/COO - Qntgc.jpg' },
  ];

  return (
    <section id="leadership" className="relative py-20 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
          <span className="eyebrow mb-4 justify-center">{dict.leadership.eyebrow}</span>
          <h2 className="heading-display">{dict.leadership.title}</h2>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {cards.map((c, i) => (
            <motion.article
              key={c.role}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div
                className={`absolute inset-x-0 top-0 z-10 h-1 ${c.accent === 'red' ? 'bg-brand-red' : 'bg-brand-navy'}`}
              />
              {/* Stack on mobile, side-by-side from sm.
                  Portrait gets fluid aspect ratios so faces stay visible at every width. */}
              <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-3">
                {/* Portrait — full-width banner on mobile, 2/5 column on tablet, 1/3 on desktop */}
                <div className="relative aspect-[4/3] w-full overflow-hidden sm:col-span-2 sm:aspect-auto sm:min-h-[300px] md:min-h-[340px] lg:col-span-1 lg:min-h-[360px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.photo}
                    alt={`${c.name} — ${c.role}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 sm:object-center"
                  />
                </div>

                <div className="p-6 sm:col-span-3 sm:p-7 md:p-8 lg:col-span-2">
                  <Quote
                    className={`mb-3 h-6 w-6 sm:h-7 sm:w-7 ${c.accent === 'red' ? 'text-brand-red' : 'text-brand-navy'}`}
                  />
                  <p className="mb-6 text-sm italic leading-relaxed text-brand-navy/80 sm:text-base">{c.msg}</p>
                  <div
                    className={`h-px w-12 mb-4 ${c.accent === 'red' ? 'bg-brand-red' : 'bg-brand-navy'}`}
                  />
                  <div className="font-display text-base font-bold text-brand-navy sm:text-lg">{c.name}</div>
                  <div className="text-xs text-brand-navy/60 sm:text-sm">{c.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
