'use client';

import { motion } from 'framer-motion';
import type { Dict } from '@/lib/i18n';

export function Timeline({ dict }: { dict: Dict }) {
  return (
    <section id="milestones" className="relative bg-navy-gradient py-32 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-brand-red blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-brand-navy-light blur-3xl" />
      </div>

      <div className="relative container-page">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span className="eyebrow !text-white/80 mb-4 justify-center">
            {dict.timeline.eyebrow}
          </span>
          <h2 className="font-display text-display-lg font-bold tracking-tight">{dict.timeline.title}</h2>
          <p className="mt-6 text-lg text-white/70">{dict.timeline.subtitle}</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Center vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-red via-white/30 to-brand-red md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {dict.timeline.events.map((ev, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${ev.year}-${i}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center md:justify-between md:gap-8 ${
                    isLeft ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 grid h-8 w-8 -translate-x-1/2 place-items-center md:left-1/2">
                    <div className="absolute h-8 w-8 animate-ping rounded-full bg-brand-red/30" />
                    <div className="relative h-4 w-4 rounded-full bg-brand-red ring-4 ring-brand-navy" />
                  </div>

                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${isLeft ? 'md:text-right' : ''}`}>
                    <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-brand-red/30">
                      <div className="mb-2 font-display text-3xl font-bold text-brand-red">{ev.year}</div>
                      <h3 className="mb-2 font-display text-lg font-bold text-white">{ev.title}</h3>
                      <p className="text-sm leading-relaxed text-white/65">{ev.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
