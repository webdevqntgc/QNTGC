'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Section {
  heading: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalPage({ title, intro, lastUpdated, sections }: LegalPageProps) {
  return (
    <section className="relative overflow-hidden bg-brand-grey-light/40 py-16 md:py-24">
      {/* Soft brand-tinted ambience */}
      <div className="absolute -left-40 top-20 h-[24rem] w-[24rem] rounded-full bg-brand-red/5 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-[24rem] w-[24rem] rounded-full bg-brand-navy/5 blur-[120px]" />
      <div className="absolute top-0 left-0 h-1.5 w-32 bg-brand-red md:w-48" />

      <div className="relative container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white p-8 shadow-[0_40px_100px_-20px_rgba(0,37,97,0.18)] ring-1 ring-brand-navy/5 md:p-12 lg:p-16"
        >
          <span className="eyebrow">Legal</span>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-brand-navy md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/45">
            Last updated: {lastUpdated}
          </div>

          <p className="mt-8 text-base leading-relaxed text-brand-navy/75 md:text-lg">{intro}</p>

          <div className="mt-10 space-y-8 md:mt-12 md:space-y-10">
            {sections.map((s, i) => (
              <motion.section
                key={s.heading}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-red/10 text-xs font-bold text-brand-red">
                    {i + 1}
                  </span>
                  <h2 className="font-display text-xl font-bold text-brand-navy md:text-2xl">
                    {s.heading}
                  </h2>
                </div>
                <div className="ml-10 space-y-3 text-sm leading-relaxed text-brand-navy/75 md:text-base [&_a]:font-semibold [&_a]:text-brand-red [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
                  {s.body}
                </div>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
