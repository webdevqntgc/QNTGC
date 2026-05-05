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
    <section id="leadership" className="relative py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="eyebrow mb-4 justify-center">{dict.leadership.eyebrow}</span>
          <h2 className="heading-display">{dict.leadership.title}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
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
                className={`absolute inset-x-0 top-0 h-1 ${c.accent === 'red' ? 'bg-brand-red' : 'bg-brand-navy'}`}
              />
              <div className="grid grid-cols-3">
                {/* Portrait — real photo, fills the block */}
                <div className="relative min-h-[280px] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.photo}
                    alt={`${c.name} — ${c.role}`}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="col-span-2 p-8">
                  <Quote
                    className={`mb-3 h-7 w-7 ${c.accent === 'red' ? 'text-brand-red' : 'text-brand-navy'}`}
                  />
                  <p className="mb-6 text-base italic leading-relaxed text-brand-navy/80">{c.msg}</p>
                  <div
                    className={`h-px w-12 mb-4 ${c.accent === 'red' ? 'bg-brand-red' : 'bg-brand-navy'}`}
                  />
                  <div className="font-display text-lg font-bold text-brand-navy">{c.name}</div>
                  <div className="text-sm text-brand-navy/60">{c.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
