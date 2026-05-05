'use client';

import { motion } from 'framer-motion';
import { Eye, Target, Shield, Sparkles, Award, Lightbulb, Users, Heart, Leaf } from 'lucide-react';
import type { Dict } from '@/lib/i18n';

const valueIcons = [Shield, Sparkles, Award, Lightbulb, Users, Heart, Leaf];

export function VisionMission({ dict }: { dict: Dict }) {
  return (
    <section className="relative bg-brand-grey-light/40 py-32">
      <div className="absolute inset-x-0 top-0 ribbon-divider" />
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <span className="eyebrow mb-4 justify-center">{dict.vmv.eyebrow}</span>
          <h2 className="heading-display">{dict.vmv.title}</h2>
        </div>

        {/* Vision + Mission */}
        <div className="grid gap-6 lg:grid-cols-2 mb-20">
          {[
            { icon: Eye, title: dict.vmv.visionTitle, body: dict.vmv.vision, accent: 'navy' },
            { icon: Target, title: dict.vmv.missionTitle, body: dict.vmv.mission, accent: 'red' },
          ].map(({ icon: Icon, title, body, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-10 shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1"
            >
              <div
                className={`absolute -right-20 -top-20 h-60 w-60 rounded-full blur-3xl transition-opacity group-hover:opacity-80 ${
                  accent === 'red' ? 'bg-brand-red/10' : 'bg-brand-navy/10'
                }`}
              />
              <div
                className={`mb-6 inline-grid h-14 w-14 place-items-center rounded-2xl ${
                  accent === 'red' ? 'bg-brand-red text-white' : 'bg-brand-navy text-white'
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-display text-2xl font-bold text-brand-navy">{title}</h3>
              <p className="text-base leading-relaxed text-brand-navy/70">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="font-display text-2xl font-bold text-brand-navy">{dict.vmv.valuesTitle}</h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.vmv.values.map((v, i) => {
            const Icon = valueIcons[i] ?? Shield;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-brand-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-glow-red"
              >
                <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-brand-grey-light text-brand-navy transition-colors group-hover:bg-brand-red group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="mb-1.5 font-display text-base font-bold text-brand-navy">{v.title}</h4>
                <p className="text-sm leading-relaxed text-brand-navy/60">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
