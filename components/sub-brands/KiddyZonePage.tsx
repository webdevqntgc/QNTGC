'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Star,
  Gift,
  Smile,
  Shield,
  Heart,
  Rocket,
  ToyBrick,
  Wand2,
  Zap,
  Instagram,
  Facebook,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Official Kiddy Zone brand palette (from the 2026 brand guideline)         */
/* -------------------------------------------------------------------------- */

const KZ = {
  primary: '#2B398B', // primary deep blue — RGB 43, 57, 139
  purple:  '#6F2277', // RGB 111, 34, 119
  pink:    '#C92C99', // RGB 201, 44, 153
  red:     '#DA002F', // RGB 218, 0, 47
  green:   '#00B451', // RGB 0, 180, 81
  yellow:  '#FEC956', // RGB 254, 201, 86
  cyan:    '#00B2E3', // RGB 0, 178, 227
  navy:    '#1B2A5E', // dark text/contrast
  cream:   '#FFF8E7',
};

/* -------------------------------------------------------------------------- */

export function KiddyZonePage() {
  return (
    <main className="bg-white" style={{ color: KZ.navy }}>
      <Hero />
      <About />
      <MeetKiddy />
      <SupportingCharacters />
      <BrandExperience />
      <Locations />
      <WhyUs />
      <FinalCTA />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*  HERO                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-20 text-white md:pt-16 md:pb-28 lg:pt-20"
      style={{
        background:
          'radial-gradient(130% 100% at 50% 0%, #3a4cb5 0%, #2B398A 55%, #1a2566 100%)',
      }}
    >
      <BlinkingStars />
      <FloatingPlanets />

      {/* Drifting planet — top right */}
      <motion.img
        src="/sub%20brands/kiddyzone/planet_kz.png"
        alt=""
        aria-hidden
        draggable={false}
        className="pointer-events-none absolute -right-12 top-6 h-32 w-32 select-none md:-right-6 md:top-10 md:h-44 md:w-44 lg:h-56 lg:w-56"
        animate={{ rotateY: 360, y: [0, -16, 0] }}
        transition={{
          rotateY: { duration: 14, repeat: Infinity, ease: 'linear' },
          y:       { duration: 8,  repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          filter: 'drop-shadow(0 22px 32px rgba(0,0,0,0.45)) drop-shadow(0 0 28px rgba(254,201,86,0.18))',
          transformPerspective: 1000,
          backfaceVisibility: 'visible',
        }}
      />

      {/* Drifting planet — bottom left, smaller, opposite spin */}
      <motion.img
        src="/sub%20brands/kiddyzone/Planet_001.svg"
        alt=""
        aria-hidden
        draggable={false}
        className="pointer-events-none absolute -left-10 bottom-4 h-28 w-28 select-none md:-left-6 md:bottom-10 md:h-36 md:w-36 lg:h-44 lg:w-44"
        animate={{ rotate: -360, y: [0, 14, 0] }}
        transition={{
          rotate: { duration: 90, repeat: Infinity, ease: 'linear' },
          y:      { duration: 10, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ filter: 'drop-shadow(0 18px 28px rgba(0,0,0,0.45)) drop-shadow(0 0 24px rgba(201,44,153,0.22))' }}
      />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm"
            >
              <Star className="h-3 w-3" style={{ color: KZ.yellow }} fill="currentColor" /> Sub-brand of QNTGC
            </span>

            <div className="mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brands/KZ-Logo.svg"
                alt="Kiddy Zone"
                className="h-20 w-auto md:h-28 lg:h-32"
                draggable={false}
                style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.45))' }}
              />
            </div>

            <h1
              className="mt-8 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl"
              style={{ textShadow: '0 4px 24px rgba(0,0,0,0.35)' }}
            >
              A Gift from
              <span className="block" style={{ color: '#CE2736' }}>
                Another Planet
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              Qatar's largest toy retail destination — bringing joy, imagination, and play to families since 2006.
              Fourteen branches and counting, across Qatar, the UAE and Oman.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://kiddyzone.com/pages/store-locator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: KZ.red,
                  boxShadow: `0 12px 30px -5px ${KZ.red}80`,
                }}
              >
                Find a Store
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://kiddyzone.com/collections"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#2B398A]"
              >
                Browse Categories
              </a>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                { num: '2006', label: 'Est.' },
                { num: '14',   label: 'Branches' },
                { num: '3',    label: 'Countries' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold md:text-4xl" style={{ color: KZ.yellow }}>
                    {s.num}
                  </div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/70">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Kiddy character */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <OrbitRings />

            <motion.div
              className="absolute inset-1/4 rounded-full blur-3xl"
              style={{ background: `radial-gradient(circle, ${KZ.red}55, transparent 70%)` }}
              animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.95, 1.08, 0.95] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="absolute inset-0 grid place-items-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.img
                src="/sub%20brands/kiddyzone/Kiddy_Hero.svg"
                alt="Kiddy character"
                draggable={false}
                animate={{ rotate: [-6, 8, -6, 8, -6] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                className="h-64 w-64 select-none object-contain md:h-80 md:w-80 lg:h-96 lg:w-96"
                style={{
                  filter:
                    'drop-shadow(0 22px 30px rgba(0,0,0,0.25)) drop-shadow(0 0 36px rgba(230,57,70,0.3))',
                }}
              />
            </motion.div>

            {[
              { x: -8, y: 18, d: 0,   s: 28 },
              { x: 92, y: 22, d: 0.4, s: 22 },
              { x: 88, y: 72, d: 1.0, s: 26 },
              { x: 4,  y: 78, d: 1.6, s: 20 },
              { x: 50, y: -2, d: 0.8, s: 32 },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                animate={{ y: [0, -8, 0], rotate: [0, 20, 0] }}
                transition={{ duration: 3 + i, delay: p.d, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Star
                  style={{ width: p.s, height: p.s, color: KZ.yellow, fill: KZ.yellow }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingPlanets() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full opacity-50 blur-3xl" style={{ background: `${KZ.red}55` }} />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full opacity-50 blur-3xl" style={{ background: `${KZ.pink}40` }} />
      <div className="absolute left-1/2 -top-32 h-72 w-72 -translate-x-1/2 rounded-full opacity-40 blur-3xl" style={{ background: `${KZ.yellow}30` }} />
    </div>
  );
}

/* Animated blinking stars across the cosmic hero backdrop */
function BlinkingStars() {
  /* Three layers: tiny twinkles, mid stars, plus a handful of shooting stars */
  const tiny = Array.from({ length: 60 });
  const mid  = Array.from({ length: 12 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Tiny twinkling dots */}
      {tiny.map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        const size = 1.5 + r(3) * 2.5;
        const colors = ['#ffffff', KZ.yellow, KZ.cyan];
        const c = colors[i % colors.length];
        return (
          <motion.span
            key={`t-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${r(1) * 100}%`,
              top: `${r(2) * 100}%`,
              width: size,
              height: size,
              background: c,
              boxShadow: `0 0 ${4 + size * 2}px ${c}`,
            }}
            animate={{ opacity: [0.15, 1, 0.15], scale: [0.7, 1.3, 0.7] }}
            transition={{
              duration: 1.6 + r(4) * 2.4,
              delay: r(5) * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}

      {/* Mid-size 4-point stars with cross glow */}
      {mid.map((_, i) => {
        const seed = (i * 4271 + 13007) % 99991;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        const size = 10 + r(3) * 8;
        const c = i % 2 === 0 ? KZ.yellow : '#ffffff';
        return (
          <motion.div
            key={`m-${i}`}
            className="absolute"
            style={{
              left: `${5 + r(1) * 90}%`,
              top: `${5 + r(2) * 90}%`,
              width: size,
              height: size,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.6, 1.15, 0.6], rotate: [0, 25, 0] }}
            transition={{
              duration: 3 + r(4) * 2.5,
              delay: r(5) * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg viewBox="0 0 24 24" fill={c} className="h-full w-full" style={{ filter: `drop-shadow(0 0 8px ${c})` }}>
              <path d="M12 0 L13.6 10.4 L24 12 L13.6 13.6 L12 24 L10.4 13.6 L0 12 L10.4 10.4 Z" />
            </svg>
          </motion.div>
        );
      })}

      {/* Shooting stars — diagonal streaks coming from the left */}
      {[0, 1].map((i) => (
        <motion.span
          key={`s-${i}`}
          className="absolute h-px"
          style={{
            top: `${15 + i * 35}%`,
            left: '-10%',
            width: '180px',
            background: `linear-gradient(90deg, transparent, ${KZ.yellow}, #fff)`,
            boxShadow: `0 0 12px ${KZ.yellow}`,
            transform: 'rotate(15deg)',
            transformOrigin: 'left center',
          }}
          animate={{ x: ['0%', '700%'], opacity: [0, 1, 0] }}
          transition={{
            duration: 2.2,
            delay: 3 + i * 4,
            repeat: Infinity,
            repeatDelay: 7 + i * 2,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Falling stars — streaks dropping in from the top sky */}
      {[0, 1, 2].map((i) => (
        <motion.span
          key={`f-${i}`}
          className="absolute w-px"
          style={{
            left: `${18 + i * 28}%`,
            top: '-10%',
            height: '160px',
            background: `linear-gradient(180deg, transparent, ${KZ.yellow}, #fff)`,
            boxShadow: `0 0 12px ${KZ.yellow}`,
            transform: 'rotate(12deg)',
            transformOrigin: 'top center',
          }}
          animate={{ y: ['0%', '800%'], opacity: [0, 1, 0] }}
          transition={{
            duration: 5.5,
            delay: 1.5 + i * 3,
            repeat: Infinity,
            repeatDelay: 8 + i * 2,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  );
}

function OrbitRings() {
  return (
    <>
      <motion.div
        className="absolute inset-8 rounded-full border-2 border-dashed"
        style={{ borderColor: `${KZ.red}40` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute h-4 w-4 rounded-full" style={{ background: KZ.red, top: 0, left: '50%', transform: 'translate(-50%, -50%)', boxShadow: `0 0 16px ${KZ.red}` }} />
      </motion.div>
      <motion.div
        className="absolute inset-16 rounded-full border border-dashed"
        style={{ borderColor: `${KZ.primary}40` }}
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute h-3 w-3 rounded-full" style={{ background: KZ.yellow, top: '50%', right: 0, transform: 'translate(50%, -50%)', boxShadow: `0 0 14px ${KZ.yellow}` }} />
      </motion.div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  ABOUT — brand story                                                        */
/* -------------------------------------------------------------------------- */

function About() {
  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em]" style={{ background: `${KZ.red}15`, color: KZ.red }}>
            <Sparkles className="h-3 w-3" /> Our Story
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl" style={{ color: KZ.primary }}>
            Joy, Built in
            <span className="block" style={{ color: KZ.red }}>Qatar</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed" style={{ color: `${KZ.navy}b3` }}>
            <p>
              Kiddy Zone opened its first store in Doha in <strong style={{ color: KZ.red }}>2006</strong> with one simple promise: to be Qatar's most loved place for families to discover, play, and gift the very best toys.
            </p>
            <p>
              Two decades later we're the country's <strong style={{ color: KZ.primary }}>largest toy retail chain</strong>, with fourteen branches across Qatar, the UAE and Oman — and that promise is still the same.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-3xl p-8 text-white shadow-2xl md:p-10" style={{ background: `linear-gradient(135deg, ${KZ.primary}, ${KZ.purple})` }}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: '20', suf: '+', label: 'Years of Play' },
                { val: '14', suf: '',  label: 'Stores' },
                { val: '300', suf: 'K+', label: 'Customers/yr' },
                { val: '50', suf: '+', label: 'Top Brands' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl font-bold md:text-5xl" style={{ color: KZ.yellow }}>
                    {s.val}<span style={{ color: KZ.pink }}>{s.suf}</span>
                  </div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-white/15 pt-6">
              <blockquote className="text-base italic leading-relaxed text-white/85 md:text-lg">
                "We don't just sell toys. We sell the moment a child's face lights up — and everything that comes after."
              </blockquote>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wider" style={{ color: KZ.yellow }}>
                — The Kiddy Zone Promise
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -top-4 -right-4 grid h-14 w-14 place-items-center rounded-full shadow-xl"
            style={{ background: KZ.yellow }}
            animate={{ rotate: [0, 12, -12, 0], y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Star className="h-7 w-7" style={{ color: KZ.red, fill: KZ.red }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  MEET KIDDY — dedicated mascot section                                      */
/* -------------------------------------------------------------------------- */

function MeetKiddy() {
  const traits = [
    { Icon: Smile,    label: 'Friendly',       color: KZ.yellow },
    { Icon: Wand2,    label: 'Playful',        color: KZ.pink },
    { Icon: Sparkles, label: 'Magical',        color: KZ.cyan },
    { Icon: Zap,      label: 'Full of Energy', color: KZ.green },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: KZ.cream }}>
      <div aria-hidden className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,_rgba(43,57,139,0.4)_1.5px,_transparent_0)] [background-size:32px_32px]" />

      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left: big Kiddy with rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
        >
          {/* Spotlight floor */}
          <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: `radial-gradient(circle at center, ${KZ.yellow}40, transparent 60%)` }} />

          {/* Multiple animated rings */}
          {[
            { inset: 4,  color: KZ.pink,    dur: 30, dir: 1 },
            { inset: 12, color: KZ.cyan,    dur: 45, dir: -1 },
            { inset: 20, color: KZ.green,   dur: 25, dir: 1 },
          ].map((r, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-dashed"
              style={{ inset: `${r.inset}%`, borderColor: `${r.color}60` }}
              animate={{ rotate: 360 * r.dir }}
              transition={{ duration: r.dur, repeat: Infinity, ease: 'linear' }}
            >
              <span
                className="absolute h-3 w-3 rounded-full"
                style={{
                  background: r.color,
                  top: 0,
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 14px ${r.color}`,
                }}
              />
            </motion.div>
          ))}

          {/* Floating toy icons */}
          {[
            { Icon: Rocket,   x:  4, y: 16, c: KZ.red,    d: 0   },
            { Icon: Heart,    x: 88, y: 22, c: KZ.pink,   d: 0.5 },
            { Icon: Gift,     x: 92, y: 70, c: KZ.green,  d: 1.0 },
            { Icon: ToyBrick, x:  6, y: 78, c: KZ.yellow, d: 1.5 },
          ].map((f, i) => (
            <motion.div
              key={i}
              className="absolute grid h-12 w-12 place-items-center rounded-2xl text-white shadow-xl"
              style={{ left: `${f.x}%`, top: `${f.y}%`, background: f.c }}
              animate={{ y: [0, -10, 0], rotate: [-6, 6, -6] }}
              transition={{ duration: 3 + i, delay: f.d, repeat: Infinity, ease: 'easeInOut' }}
            >
              <f.Icon className="h-6 w-6" />
            </motion.div>
          ))}

          <motion.img
            src="/sub%20brands/kiddyzone/KiddyFly.svg"
            alt="Kiddy mascot"
            draggable={false}
            animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative h-full w-full select-none object-contain"
            style={{
              filter:
                'drop-shadow(0 22px 30px rgba(0,0,0,0.22)) drop-shadow(0 0 40px rgba(254,201,86,0.5))',
            }}
          />
        </motion.div>

        {/* Right: copy + trait cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white"
            style={{ background: KZ.red }}
          >
            <Heart className="h-3 w-3" /> The Mascot
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl" style={{ color: KZ.primary }}>
            Meet
            <span className="block" style={{ color: KZ.red }}>Kiddy</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed md:text-xl" style={{ color: `${KZ.navy}c0` }}>
            Kiddy is the friendly face of Kiddy Zone — bringing fun, imagination,
            and excitement to every child's shopping experience.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {traits.map(({ Icon, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <div
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-display text-base font-bold" style={{ color: KZ.primary }}>
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SUPPORTING CHARACTERS — colorful friends                                   */
/*  Files live at /public/sub-brands/kiddyzone/characters/char-{color}.webp     */
/* -------------------------------------------------------------------------- */

function SupportingCharacters() {
  // Platform colour order: Purple, Blue, Red, Yellow, Green.
  // Image files reassigned so each character matches its platform colour.
  const base = '/sub%20brands/kiddyzone/characters';
  const characters = [
    { name: 'Purple', color: KZ.purple, img: `${base}/1.webp`, bobDelay: 0,   rotate: 'wave'   as const },
    { name: 'Blue',   color: KZ.cyan,   img: `${base}/2.webp`, bobDelay: 0.3, rotate: 'bounce' as const },
    { name: 'Red',    color: KZ.red,    img: `${base}/4.webp`, bobDelay: 0.6, rotate: 'wave'   as const },
    { name: 'Yellow', color: KZ.yellow, img: `${base}/3.webp`, bobDelay: 0.9, rotate: 'bounce' as const },
    { name: 'Green',  color: KZ.green,  img: `${base}/5.webp`, bobDelay: 1.2, rotate: 'wave'   as const },
  ];

  return (
    <section
      id="characters"
      className="relative overflow-hidden py-20 md:py-28 text-white"
      style={{ background: `linear-gradient(180deg, ${KZ.primary} 0%, ${KZ.purple} 100%)` }}
    >
      {/* Starry brand backdrop */}
      <div aria-hidden className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.7)_1.5px,_transparent_0)] [background-size:36px_36px]" />
      {/* Stage floor — gradient blur strip */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 blur-2xl"
        style={{ background: `linear-gradient(180deg, transparent, ${KZ.cyan}25)` }}
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white"
            style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
          >
            <Sparkles className="h-3 w-3" /> Kiddy's Friends
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Our
            <span className="ms-3" style={{ color: KZ.yellow }}>Colorful Friends</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Together with Kiddy, our colorful friends bring more fun, movement, and
            imagination to the Kiddy Zone world.
          </p>
        </div>

        {/* Stage with 5 characters on light beams */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {characters.map((c, i) => (
            <CharacterOnStage key={c.name} character={c} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function CharacterOnStage({
  character,
  index,
}: {
  character: { name: string; color: string; img: string; bobDelay: number; rotate: 'wave' | 'bounce' };
  index: number;
}) {
  const motion_anim =
    character.rotate === 'wave'
      ? { rotate: [-8, 10, -8, 10, -8], y: [0, -4, 0] }
      : { y: [0, -16, 0], rotate: [-4, 4, -4] };

  const motion_trans =
    character.rotate === 'wave'
      ? { duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: character.bobDelay }
      : { duration: 2,   repeat: Infinity, ease: 'easeInOut', delay: character.bobDelay };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col items-center"
    >
      {/* Vertical light beam behind */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-1/2 top-0 h-full w-32 -translate-x-1/2"
        style={{
          background: `linear-gradient(180deg, ${character.color}55 0%, ${character.color}00 80%)`,
          filter: 'blur(12px)',
        }}
      />

      {/* The character */}
      <div className="relative grid h-44 w-44 place-items-center md:h-52 md:w-52">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src={character.img}
          alt=""
          draggable={false}
          animate={motion_anim}
          transition={motion_trans}
          className="h-full w-full select-none object-contain"
          style={{ filter: `drop-shadow(0 14px 18px rgba(0,0,0,0.4)) drop-shadow(0 0 24px ${character.color}55)` }}
        />
      </div>

      {/* Glowing circular platform */}
      <div className="relative -mt-3 grid w-full place-items-center">
        <motion.div
          className="h-3 w-32 rounded-full md:w-36"
          style={{
            background: `radial-gradient(ellipse at center, ${character.color}, ${character.color}00 70%)`,
            filter: 'blur(4px)',
          }}
          animate={{ scaleX: [0.9, 1.05, 0.9], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: character.bobDelay }}
        />
        {/* Solid platform ellipse */}
        <div
          className="h-2 w-24 rounded-full md:w-28"
          style={{
            background: `linear-gradient(90deg, transparent, ${character.color}cc, transparent)`,
          }}
        />
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  BRAND EXPERIENCE — "A World of Fun"                                         */
/* -------------------------------------------------------------------------- */

function BrandExperience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const charY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const starsY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32 text-white"
      style={{ background: `linear-gradient(135deg, ${KZ.red} 0%, ${KZ.pink} 100%)` }}
    >
      <motion.div aria-hidden className="absolute inset-0" style={{ y: starsY }}>
        {Array.from({ length: 22 }).map((_, i) => {
          const seed = (i * 9301 + 49297) % 233280;
          const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${r(1) * 100}%`,
                top: `${r(2) * 100}%`,
                width: 2 + r(3) * 4,
                height: 2 + r(3) * 4,
                boxShadow: '0 0 8px rgba(255,255,255,0.9)',
              }}
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.7, 1.3, 0.7] }}
              transition={{ duration: 2.5 + r(4) * 2, delay: r(5) * 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          );
        })}
      </motion.div>

      {/* Floating toy box silhouettes */}
      {[
        { Icon: Gift,     x: 8,  y: 30, s: 60 },
        { Icon: ToyBrick, x: 88, y: 24, s: 56 },
        { Icon: Rocket,   x: 12, y: 75, s: 64 },
        { Icon: Heart,    x: 85, y: 72, s: 50 },
      ].map((f, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute text-white/20"
          style={{ left: `${f.x}%`, top: `${f.y}%` }}
          animate={{ y: [0, -12, 0], rotate: [-8, 8, -8] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
        >
          <f.Icon style={{ width: f.s, height: f.s }} strokeWidth={1.5} />
        </motion.div>
      ))}

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm"
            >
              <Star className="h-3 w-3" fill="currentColor" /> The World of Kiddy Zone
            </span>
            <h2 className="mt-5 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              A World of Fun,
              <span className="block" style={{ color: KZ.yellow }}>Color & Imagination</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90 md:text-xl">
              Kiddy Zone is more than a toy store. It is a playful destination where
              children discover new adventures, families find joyful moments, and every
              product brings a smile.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-sm md:max-w-md"
          style={{ y: charY }}
        >
          <div
            className="absolute inset-8 rounded-full"
            style={{ background: 'rgba(255,255,255,0.1)', filter: 'blur(40px)' }}
          />
          <motion.img
            src="/icon_KiddyZone.svg"
            alt=""
            draggable={false}
            className="relative h-full w-full select-none object-contain"
            animate={{ rotate: [-4, 6, -4], y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 24px 30px rgba(0,0,0,0.3))' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  STORE LOCATIONS                                                            */
/* -------------------------------------------------------------------------- */

function Locations() {
  const stores = [
    { name: 'Dar Al Salam Mall',  area: 'Doha' },
    { name: 'Ezdan Mall',         area: 'Doha' },
    { name: 'Hyatt Plaza',        area: 'Doha' },
    { name: 'Landmark Mall',      area: 'Doha' },
    { name: 'Porto Arabia',       area: 'The Pearl' },
    { name: 'Doha Festival City', area: 'Doha' },
    { name: 'Gulf Mall',          area: 'Doha' },
    { name: 'Place Vendôme',      area: 'Lusail' },
    { name: 'Boulevard',          area: 'Lusail' },
    { name: 'Mall of Qatar',      area: 'Al Rayyan' },
    { name: 'Medina Centrale',    area: 'The Pearl' },
    { name: 'Oman Avenue Mall',   area: 'Oman' },
    { name: 'Dalma Mall',         area: 'Abu Dhabi, UAE' },
  ];

  return (
    <section id="locations" className="relative py-20 md:py-28" style={{ background: KZ.cream }}>
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: KZ.red }}
          >
            <MapPin className="h-3 w-3" /> Our Locations
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl" style={{ color: KZ.primary }}>
            Stores Across Qatar, the UAE & Oman
          </h2>
          <p className="mt-5 text-lg" style={{ color: `${KZ.navy}b3` }}>
            Wherever you are, Kiddy Zone is never far — from Doha to Lusail, Abu Dhabi to Muscat.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stores.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              whileHover={{ x: 4 }}
              className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div
                className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white transition-transform duration-300 group-hover:scale-110"
                style={{ background: KZ.red }}
              >
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-base font-bold" style={{ color: KZ.primary }}>
                  {s.name}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: `${KZ.navy}80` }}>
                  {s.area}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  WHY US                                                                     */
/* -------------------------------------------------------------------------- */

function WhyUs() {
  const pillars = [
    { Icon: Sparkles, title: 'Curated, Not Just Sold',  desc: 'Every product is hand-picked — only the toys we\'d give our own kids make the shelf.', color: KZ.pink },
    { Icon: Shield,   title: 'Quality You Can Trust',    desc: 'Authentic, age-appropriate, safety-tested toys from the world\'s most loved brands.', color: KZ.cyan },
    { Icon: Smile,    title: 'A Family Experience',      desc: 'Bright stores, helpful staff, and play zones where kids try before you buy.',         color: KZ.green },
    { Icon: Gift,     title: 'The Gift Specialists',     desc: 'Premium wrapping, gift cards, and recommendations for every age and occasion.',       color: KZ.red },
  ];

  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white"
            style={{ background: KZ.primary }}
          >
            The Kiddy Difference
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl" style={{ color: KZ.primary }}>
            Why Families Choose Kiddy Zone
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-3xl border bg-white p-7 text-center shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover"
              style={{ borderColor: `${KZ.navy}15` }}
            >
              <div
                className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                  boxShadow: `0 12px 24px -6px ${color}80`,
                }}
              >
                <Icon className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="font-display text-lg font-bold" style={{ color: KZ.primary }}>
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: `${KZ.navy}aa` }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FINAL CTA — Step Into the World of Kiddy Zone                              */
/* -------------------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] p-10 text-center md:p-16"
          style={{ background: `linear-gradient(135deg, ${KZ.primary}, ${KZ.purple})` }}
        >
          {/* Confetti */}
          {[KZ.yellow, KZ.pink, KZ.cyan, KZ.green, KZ.red].map((c, i) => (
            <motion.div
              key={i}
              aria-hidden
              className="absolute h-3 w-3 rounded-sm"
              style={{
                background: c,
                left: `${10 + i * 18}%`,
                top: `${5 + (i % 2) * 8}%`,
                boxShadow: `0 0 10px ${c}aa`,
              }}
              animate={{ y: [0, 12, 0], rotate: [0, 90, 0] }}
              transition={{ duration: 3 + i, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
          {[KZ.cyan, KZ.green, KZ.yellow, KZ.pink].map((c, i) => (
            <motion.div
              key={i + 100}
              aria-hidden
              className="absolute h-2 w-2 rounded-full"
              style={{
                background: c,
                right: `${10 + i * 18}%`,
                bottom: `${5 + (i % 2) * 8}%`,
                boxShadow: `0 0 10px ${c}aa`,
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5 + i, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          <div
            aria-hidden
            className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.6)_1px,_transparent_0)] [background-size:32px_32px]"
          />
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl" style={{ background: `${KZ.red}55` }} />
          <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full blur-3xl" style={{ background: `${KZ.yellow}40` }} />

          <div className="relative">
            <motion.div
              animate={{ rotate: [-5, 5, -5], y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto mb-6 inline-block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icon_KiddyZone.svg"
                alt=""
                className="h-28 w-28"
                style={{ filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.4))' }}
              />
            </motion.div>
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Step Into the World of
              <span className="block" style={{ color: KZ.yellow }}>Kiddy Zone</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
              Discover toys, characters, colors, and magical moments made for every child.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://kiddyzone.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: KZ.red, boxShadow: `0 14px 30px -5px ${KZ.red}80` }}
              >
                Visit Store
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/en/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#2B398B]"
              >
                Back to QNTGC
              </a>
            </div>

            {/* Follow on social media */}
            <div className="mt-10">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/65">Follow Kiddy Zone</div>
              <div className="mt-3 flex flex-wrap justify-center gap-3">
                <SocialIconButton href="https://www.instagram.com/kiddyzoneqatar/?hl=en" type="instagram" />
                <SocialIconButton href="https://www.facebook.com/kiddyzone.qa/" type="facebook" />
                <SocialIconButton href="https://www.tiktok.com/@kiddyzoneqatar?is_from_webapp=1&sender_device=pc" type="tiktok" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Social icon button                                                         */
/* -------------------------------------------------------------------------- */

function SocialIconButton({
  href,
  type,
}: {
  href: string;
  type: 'instagram' | 'facebook' | 'tiktok';
}) {
  const label = type[0].toUpperCase() + type.slice(1);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="grid h-11 w-11 place-items-center rounded-full bg-white/12 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#2B398B] hover:shadow-lg"
    >
      {type === 'instagram' && <Instagram className="h-4.5 w-4.5" />}
      {type === 'facebook'  && <Facebook  className="h-4.5 w-4.5" />}
      {type === 'tiktok'    && <TikTokIcon className="h-4.5 w-4.5" />}
    </a>
  );
}

function TikTokIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/>
    </svg>
  );
}
