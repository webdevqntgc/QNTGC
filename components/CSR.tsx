'use client';

import { motion } from 'framer-motion';
import { Heart, Stethoscope, Users, Leaf } from 'lucide-react';
import type { Dict } from '@/lib/i18n';

const icons = [Heart, Stethoscope, Users, Leaf];

export function CSR({ dict }: { dict: Dict }) {
  return (
    <section id="csr" className="relative bg-brand-grey-light/40 py-20 md:py-32">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="eyebrow mb-4 block">{dict.csr.eyebrow}</span>
              <h2 className="heading-display mb-8">{dict.csr.title}</h2>
              <p className="text-lg leading-relaxed text-brand-navy/75">{dict.csr.body}</p>
            </motion.div>

            {/* Decorative metric */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 inline-flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card"
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-brand-red text-white">
                <Leaf className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-brand-navy">23+ tons</div>
                <div className="text-xs font-medium uppercase tracking-wider text-brand-navy/60">
                  Annual waste reduction
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {dict.csr.pillars.map((p, i) => {
                const Icon = icons[i] ?? Heart;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group rounded-3xl bg-white p-7 shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1"
                  >
                    <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-grey-light text-brand-navy transition-colors group-hover:bg-brand-navy group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 font-display text-lg font-bold text-brand-navy">{p.title}</h3>
                    <p className="text-sm leading-relaxed text-brand-navy/65">{p.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
