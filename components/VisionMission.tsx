'use client';

import { motion } from 'framer-motion';
import {
  Eye,
  Target,
  Shield,
  Wand2,
  Award,
  Lightbulb,
  Users,
  Heart,
  Leaf,
  type LucideIcon,
} from 'lucide-react';
import type { Dict } from '@/lib/i18n';

// Icon + accent color per value, mirroring the reference design
const VALUE_META: Array<{ Icon: LucideIcon; color: string; ring: string }> = [
  { Icon: Shield,    color: '#5B8DEF', ring: 'rgba(91,141,239,0.4)'  }, // Trust
  { Icon: Wand2,     color: '#9B7FFF', ring: 'rgba(155,127,255,0.4)' }, // Creativity
  { Icon: Award,     color: '#D4D8E0', ring: 'rgba(212,216,224,0.4)' }, // Excellence
  { Icon: Lightbulb, color: '#FF8B8B', ring: 'rgba(255,139,139,0.4)' }, // Innovation
  { Icon: Users,     color: '#5B8DEF', ring: 'rgba(91,141,239,0.4)'  }, // Collaboration
  { Icon: Heart,     color: '#FF6B9D', ring: 'rgba(255,107,157,0.4)' }, // Diversity & Inclusion
  { Icon: Leaf,      color: '#4DD0A8', ring: 'rgba(77,208,168,0.4)'  }, // Sustainability
];

export function VisionMission({ dict }: { dict: Dict }) {
  return (
    <>
      {/* Vision + Mission (light section, kept as-is) */}
      <section className="relative bg-brand-grey-light/40 py-20 md:py-32">
        <div className="absolute inset-x-0 top-0 ribbon-divider" />
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <span className="eyebrow mb-4 justify-center">{dict.vmv.eyebrow}</span>
            <h2 className="heading-display">{dict.vmv.title}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
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
        </div>
      </section>

      {/* Our Values — premium 3D glass section */}
      <ValuesSection dict={dict} />
    </>
  );
}

function ValuesSection({ dict }: { dict: Dict }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#000a24] via-[#001a52] to-[#000a24] py-20 text-white md:py-32">
      <BackgroundField />

      <div className="relative container-page">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          {/* Pill eyebrow with side dashes (matches reference) */}
          <div className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/85">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/60" />
            <span>OUR FOUNDATION</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400/60" />
          </div>

          <h2 className="font-display text-display-lg font-bold tracking-tight">
            <span className="bg-gradient-to-b from-white via-white to-cyan-200/80 bg-clip-text text-transparent">
              Our Values
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
            The principles that guide every brand, experience, and relationship we build.
          </p>
        </motion.div>

        {/* Row 1: 4 cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.vmv.values.slice(0, 4).map((v, i) => (
            <ValueCard key={v.title} v={v} meta={VALUE_META[i]} index={i} />
          ))}
        </div>

        {/* Row 2: 3 cards centered */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:mx-auto lg:max-w-[78%]">
          {dict.vmv.values.slice(4).map((v, i) => (
            <ValueCard key={v.title} v={v} meta={VALUE_META[i + 4]} index={i + 4} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  v,
  meta,
  index,
}: {
  v: { title: string; desc: string };
  meta: { Icon: LucideIcon; color: string; ring: string };
  index: number;
}) {
  const { Icon, color, ring } = meta;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{ transformStyle: 'preserve-3d' }}
      className="group relative rounded-3xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-xl transition-shadow duration-500 hover:border-white/30"
    >
      {/* Inner top-light */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-3xl"
        style={{
          background: `linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 30%)`,
        }}
      />

      {/* Outer color halo on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: ring }}
      />

      {/* 3D icon tile */}
      <div className="relative mb-5 flex justify-center">
        <div className="relative">
          {/* Icon glow halo */}
          <span
            aria-hidden
            className="absolute -inset-2 rounded-2xl blur-xl transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: ring, opacity: 0.5 }}
          />
          <div
            className="relative grid h-20 w-20 place-items-center rounded-2xl border border-white/30 bg-gradient-to-br from-white/25 via-white/10 to-white/[0.04] backdrop-blur-lg transition-transform duration-500 group-hover:scale-105"
            style={{
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.5), 0 12px 30px rgba(0,0,0,0.4), 0 0 24px ${ring}`,
            }}
          >
            <Icon
              className="h-9 w-9 transition-all duration-500"
              style={{
                color,
                filter: `drop-shadow(0 0 10px ${color}80) drop-shadow(0 4px 8px rgba(0,0,0,0.4))`,
              }}
              strokeWidth={1.6}
            />
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-center font-display text-xl font-bold tracking-tight text-white">
        {v.title}
      </h3>

      {/* Mini accent divider */}
      <div className="mx-auto my-3 h-0.5 w-10 rounded-full" style={{ background: color, opacity: 0.7 }} />

      {/* Description */}
      <p className="text-center text-sm leading-relaxed text-white/70">{v.desc}</p>

      {/* Bottom edge glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[3px] w-3/4 -translate-x-1/2 rounded-full opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
      />
    </motion.div>
  );
}

function BackgroundField() {
  return (
    <>
      {/* Large blurred orbs at edges */}
      <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-blue-500/15 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan-400/12 blur-[120px]" />
      <div className="absolute top-1/2 -right-40 h-72 w-72 rounded-full bg-brand-red/10 blur-[100px]" />

      {/* Glass spheres (decorative floaters) */}
      {[
        { x: 4,  y: 8,  size: 110 },
        { x: 92, y: 12, size: 70  },
        { x: 2,  y: 60, size: 90  },
        { x: 95, y: 78, size: 100 },
      ].map((s, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background:
              'radial-gradient(circle at 30% 30%, rgba(140,180,255,0.35), rgba(80,130,220,0.15) 50%, transparent 70%)',
            boxShadow: 'inset 0 0 30px rgba(255,255,255,0.15), 0 0 30px rgba(80,130,220,0.25)',
          }}
          animate={{ y: [0, -16, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 8 + i * 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Subtle wave lines (SVG) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="wave" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="rgba(91,141,239,0)" />
            <stop offset="50%" stopColor="rgba(91,141,239,0.5)" />
            <stop offset="100%" stopColor="rgba(91,141,239,0)" />
          </linearGradient>
        </defs>
        {[200, 320, 480, 640, 760].map((y, i) => (
          <motion.path
            key={i}
            d={`M 0 ${y} Q 400 ${y - 30 + i * 8} 800 ${y} T 1600 ${y}`}
            stroke="url(#wave)"
            strokeWidth={1}
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: i * 0.3, ease: 'easeOut' }}
          />
        ))}
      </svg>

      {/* Floating glow particles */}
      {Array.from({ length: 30 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        const left = r(1) * 100;
        const top = r(2) * 100;
        const size = 1 + r(3) * 2.2;
        const dur = 6 + r(4) * 8;
        const delay = r(5) * 5;
        return (
          <motion.span
            key={i}
            aria-hidden
            className="pointer-events-none absolute rounded-full bg-cyan-200/70"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              boxShadow: '0 0 6px rgba(173,220,255,0.7)',
            }}
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.85, 0.2] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}

      {/* Top dark vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(0,5,20,0.6) 100%)',
        }}
      />
    </>
  );
}
