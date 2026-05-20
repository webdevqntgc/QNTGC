'use client';

import { useRef } from 'react';
import type { FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Star,
  Heart,
  Leaf,
  ShieldCheck,
  Users,
  Smile,
  Recycle,
  Wand2,
  Candy as CandyIcon,
  Phone,
  Mail,
  Gift,
  Instagram,
  Facebook,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  CandyVill brand palette                                                     */
/* -------------------------------------------------------------------------- */

const CV = {
  red:        '#CB2129',   // primary brand
  redShadow:  '#8F0F18',
  pinkSoft:   '#FFD6E0',
  cream:      '#FFF5EA',
  sky:        '#DDF7FF',

  // Sub-brand palettes
  choco:      { dark: '#2A0F0A', mid: '#4B1E14', gold: '#D9A441', beige: '#FFF0D6' },
  corn:       { yellow: '#FFC928', butter: '#FFE89A', green: '#4CAF50' },
  ice:        { blue: '#AEEBFF', mint: '#8EF2D1', lavender: '#C9A7FF', pink: '#FF8BB3' },
  slush:      { pink: '#FF4FA3', purple: '#7C4DFF', blue: '#2EC7FF', yellow: '#FFE45E' },
};

/* -------------------------------------------------------------------------- */

export function CandyVillPage() {
  return (
    <main className="bg-white text-[#3B1A1C]">
      <Hero />
      <About />
      <FamilyOfBrands />
      <Chocovill />
      <Cornvill />
      <Icevill />
      <Slushvill />
      <Branches />
      <VisionMission />
      <CoreValues />
      <FinalCTA />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*  HERO                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 text-white md:pt-16 md:pb-28 lg:pt-20" style={{ background: `linear-gradient(180deg, ${CV.red} 0%, ${CV.redShadow} 100%)` }}>
      {/* Floating candy backdrop */}
      <CandyBackdrop />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white"
              style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}
            >
              <Star className="h-3 w-3" fill="currentColor" /> Sub-brand of QNTGC
            </span>

            <div className="mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sub%20brands/candyvill/hero_logo.svg"
                alt="CandyVill"
                className="h-20 w-auto md:h-24 lg:h-28"
                draggable={false}
              />
            </div>

            <h1 className="mt-8 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Welcome to
              <span className="block" style={{ color: CV.pinkSoft }}>CandyVill</span>
            </h1>
            <p className="mt-4 text-2xl font-bold text-white/95 md:text-3xl">A Magical Village of Sweetness</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Qatar's sweetest destination, where every corner tells a delicious story.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#family"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: CV.red, boxShadow: '0 12px 30px -5px rgba(0,0,0,0.3)' }}
              >
                Explore Our Worlds
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#branches"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white"
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = CV.red)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              >
                Visit Our Branches
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: floating CandyVill character + lollipop cluster */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            {/* Pulsing soft halo */}
            <motion.div
              className="absolute inset-1/4 rounded-full blur-3xl"
              style={{ background: `radial-gradient(circle, ${CV.pinkSoft}aa, transparent 70%)` }}
              animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.95, 1.1, 0.95] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Lollipop spokes */}
            {[0, 1, 2, 3].map((i) => {
              const angle = i * 90 - 45;
              return (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 origin-bottom"
                  style={{
                    transform: `translate(-50%, -100%) rotate(${angle}deg) translateY(-110px)`,
                  }}
                  animate={{ rotate: [angle - 4, angle + 4, angle - 4] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Lollipop size={48} fill={[CV.pinkSoft, '#fff', CV.pinkSoft, '#fff'][i]} />
                </motion.div>
              );
            })}

            {/* CandyVill mascot */}
            <motion.div
              className="absolute inset-0 grid place-items-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.img
                src="/icon_CandyVill.svg"
                alt="CandyVill mascot"
                draggable={false}
                animate={{ rotate: [-6, 8, -6, 8, -6] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                className="h-56 w-56 select-none object-contain md:h-72 md:w-72"
                style={{
                  filter:
                    'drop-shadow(0 18px 24px rgba(0,0,0,0.35)) drop-shadow(0 0 30px rgba(255,214,224,0.55))',
                }}
              />
            </motion.div>

            {/* Floating candy dots */}
            {[
              { x: -2, y: 22, c: CV.pinkSoft, s: 14 },
              { x: 92, y: 16, c: '#fff',      s: 10 },
              { x: 88, y: 78, c: CV.pinkSoft, s: 16 },
              { x: 4,  y: 82, c: '#fff',      s: 12 },
            ].map((d, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${d.x}%`,
                  top: `${d.y}%`,
                  width: d.s,
                  height: d.s,
                  background: d.c,
                  boxShadow: `0 0 12px ${d.c}aa`,
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CandyBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full opacity-40 blur-3xl" style={{ background: `${CV.pinkSoft}55` }} />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: `${CV.cream}40` }} />
      {/* Tiny candy sparkle pattern */}
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.65)_1.5px,_transparent_0)] [background-size:40px_40px]" />
    </div>
  );
}

function Lollipop({ size, fill }: { size: number; fill: string }) {
  return (
    <svg viewBox="0 0 32 64" width={size} height={size * 2}>
      <rect x="14" y="20" width="4" height="40" rx="2" fill="#fff" opacity="0.85" />
      <circle cx="16" cy="14" r="14" fill={fill} stroke="#fff" strokeWidth="2" opacity="0.95" />
      <circle cx="11" cy="10" r="3" fill="#fff" opacity="0.55" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  ABOUT — village concept                                                    */
/* -------------------------------------------------------------------------- */

function About() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: CV.cream }}>
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white"
            style={{ background: CV.red }}
          >
            <Sparkles className="h-3 w-3" /> The Village
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl" style={{ color: CV.redShadow }}>
            A Village of
            <span className="block" style={{ color: CV.red }}>Sweetness</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed" style={{ color: '#3B1A1Ccc' }}>
            <p>
              CandyVill is more than just a candy store — it's a <strong style={{ color: CV.red }}>village of sweetness</strong> where every corner tells a delicious story.
            </p>
            <p>
              Founded in <strong style={{ color: CV.red }}>2023</strong>, CandyVill brings together themed sweet worlds for chocolate lovers, ice cream fans, slush lovers, popcorn snackers, kids, families, and adults.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
        >
          <VillageMap />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * 3D candy showcase — a giant rotating lollipop centerpiece with
 * 6 sweets orbiting in true 3D space (CSS perspective + translateZ).
 * Replaces the earlier Qatar-map concept with something far more striking.
 */
function VillageMap() {
  // Orbiting sweets: 6 around a perfectly centered circle.
  // The orbit and the logo now use the same center point, so the logo will not sit low or off to the side.
  const orbiters = [
    { angle:   0, depth:  80, size: 104, dur: 18, Component: Donut       },
    { angle:  60, depth: -35, size: 86,  dur: 22, Component: WrappedCandy },
    { angle: 120, depth:  35, size: 96,  dur: 26, Component: IceCreamCone },
    { angle: 180, depth: -55, size: 92,  dur: 20, Component: ChocoBar     },
    { angle: 240, depth:  55, size: 84,  dur: 24, Component: Cupcake      },
    { angle: 300, depth: -25, size: 88,  dur: 28, Component: CandyCane    },
  ];

  return (
    <div className="relative h-full w-full overflow-visible" style={{ perspective: '1400px' }}>
      {/* Soft ambient halos behind the scene */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${CV.pinkSoft}cc, transparent 70%)` }}
        animate={{ opacity: [0.55, 0.95, 0.55], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: `conic-gradient(from 0deg, ${CV.red}40, ${CV.pinkSoft}60, ${CV.corn.yellow}40, ${CV.ice.lavender}40, ${CV.red}40)` }}
      />

      {/* 3D stage with subtle tilt for an isometric feel */}
      <div
        className="relative h-full w-full overflow-visible"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(8deg)',
        }}
      >
        {/* Disc floor — centered directly under the logo */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[78%] h-16 w-3/4 -translate-x-1/2 rounded-full"
          style={{
            background: `radial-gradient(ellipse at center, ${CV.red}40, transparent 70%)`,
            filter: 'blur(12px)',
            transform: 'translateX(-50%) rotateX(75deg)',
          }}
        />

        {/* Centered orbit box: this controls the orbit size and keeps it aligned with the logo */}
        <div
          className="absolute left-1/2 top-1/2 z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 md:h-[380px] md:w-[380px] lg:h-[430px] lg:w-[430px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Subtle visible orbit glow */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full border-2 border-white/50"
            style={{
              boxShadow: `0 0 35px ${CV.pinkSoft}80, inset 0 0 30px ${CV.red}20`,
              background: `radial-gradient(circle, transparent 58%, ${CV.pinkSoft}16 59%, transparent 68%)`,
            }}
          />

          {/* Slow auto-rotating orbit ring */}
          <motion.div
            className="absolute inset-0"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          >
            {orbiters.map((o, i) => {
              const radius = 46; // % of the centered orbit box
              const rad = (o.angle * Math.PI) / 180;
              const x = 50 + Math.cos(rad) * radius;
              const y = 50 + Math.sin(rad) * radius;

              return (
                <Orbiter
                  key={i}
                  x={x}
                  y={y}
                  depth={o.depth}
                  size={o.size}
                  spinAngle={-360}
                  spinDur={60}
                  Component={o.Component}
                  bobDelay={i * 0.4}
                  idleDur={o.dur / 6}
                />
              );
            })}
          </motion.div>
        </div>

        {/* CandyVill logo — bigger and exactly centered in the same position as the orbit */}
        <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center">
          <motion.div
            className="relative flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div style={{ transform: 'translateZ(130px)', transformStyle: 'preserve-3d' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sub%20brands/candyvill/Candyvill-ENG.png"
                alt="CandyVill"
                draggable={false}
                className="h-36 w-auto select-none md:h-48 lg:h-56"
                style={{
                  filter: `drop-shadow(0 28px 34px ${CV.red}75) drop-shadow(0 0 42px ${CV.pinkSoft}95)`,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Twinkling stars in front of everything */}
      {Array.from({ length: 12 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        const colors = ['#fff', CV.pinkSoft, CV.corn.yellow];

        return (
          <motion.span
            key={i}
            aria-hidden
            className="pointer-events-none absolute rounded-full"
            style={{
              left: `${r(1) * 100}%`,
              top: `${r(2) * 100}%`,
              width: 3 + r(3) * 5,
              height: 3 + r(3) * 5,
              background: colors[i % colors.length],
              boxShadow: `0 0 10px ${colors[i % colors.length]}`,
            }}
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1.4, 0.6] }}
            transition={{ duration: 2.5 + r(4) * 2, delay: r(5) * 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}
    </div>
  );
}

/* -------- Orbit slot: positions a sweet at (x,y) at depth, keeps it upright -- */

function Orbiter({
  x,
  y,
  depth,
  size,
  spinAngle,
  spinDur,
  Component,
  bobDelay,
  idleDur,
}: {
  x: number;
  y: number;
  depth: number;
  size: number;
  spinAngle: number;
  spinDur: number;
  Component: FC<{ size: number }>;
  bobDelay: number;
  idleDur: number;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) translateZ(${depth}px)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Counter-rotate so the sweet stays upright relative to the viewer */}
      <motion.div
        animate={{ rotate: spinAngle }}
        transition={{ duration: spinDur, repeat: Infinity, ease: 'linear' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Idle bob to break the perfect-orbit feel */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [-6, 6, -6] }}
          transition={{ duration: idleDur, delay: bobDelay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            filter: `drop-shadow(0 ${depth > 0 ? 14 : 8}px ${depth > 0 ? 18 : 12}px rgba(143,15,24,0.4))`,
          }}
        >
          <Component size={size} />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* -------- Sweet SVG components (all stand-alone, no external assets) -------- */

function BigLollipop({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 120 200" width={size} height={size * 1.7}>
      <defs>
        <radialGradient id="loli-ball" cx="35%" cy="30%" r="80%">
          <stop offset="0%"  stopColor="#FFD6E0" />
          <stop offset="60%" stopColor={CV.red} />
          <stop offset="100%" stopColor={CV.redShadow} />
        </radialGradient>
        <linearGradient id="loli-stick" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"  stopColor="#fff" />
          <stop offset="50%" stopColor="#F2F2F2" />
          <stop offset="100%" stopColor="#C8C8C8" />
        </linearGradient>
      </defs>
      {/* Stick */}
      <rect x="56" y="80" width="8" height="115" rx="4" fill="url(#loli-stick)" />
      {/* Ball */}
      <circle cx="60" cy="60" r="56" fill="url(#loli-ball)" />
      {/* Swirl pattern */}
      <g stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.85">
        <path d="M 60 12 Q 92 30 92 60 Q 92 92 60 108 Q 28 92 28 60 Q 28 30 60 12" />
        <path d="M 60 22 Q 82 38 82 60 Q 82 82 60 98 Q 38 82 38 60 Q 38 38 60 22" />
        <path d="M 60 32 Q 74 44 74 60 Q 74 76 60 88 Q 46 76 46 60 Q 46 44 60 32" />
      </g>
      {/* Glossy highlight */}
      <ellipse cx="40" cy="36" rx="14" ry="8" fill="#fff" opacity="0.55" />
      <ellipse cx="36" cy="32" rx="5" ry="3" fill="#fff" opacity="0.9" />
    </svg>
  );
}

function Donut({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <defs>
        <linearGradient id="donut-base" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0B97A" />
          <stop offset="100%" stopColor="#7C4F1D" />
        </linearGradient>
        <linearGradient id="donut-frost" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD6E0" />
          <stop offset="100%" stopColor={CV.ice.pink} />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#donut-base)" />
      <path d="M 50 8 Q 92 8 92 50 Q 92 70 80 76 Q 60 62 50 62 Q 40 62 20 76 Q 8 70 8 50 Q 8 8 50 8" fill="url(#donut-frost)" />
      <circle cx="50" cy="50" r="14" fill="#3B1A1C" />
      <circle cx="50" cy="50" r="10" fill="#5A2A2D" />
      {/* Sprinkles */}
      {[
        { x: 30, y: 28, c: CV.corn.yellow },
        { x: 62, y: 18, c: CV.ice.mint },
        { x: 76, y: 36, c: CV.slush.purple },
        { x: 24, y: 56, c: CV.slush.blue },
        { x: 78, y: 60, c: '#fff' },
        { x: 36, y: 14, c: CV.slush.pink },
      ].map((s, i) => (
        <rect key={i} x={s.x} y={s.y} width="6" height="2.5" rx="1" fill={s.c} transform={`rotate(${i * 36} ${s.x + 3} ${s.y + 1})`} />
      ))}
      <ellipse cx="36" cy="22" rx="10" ry="4" fill="#fff" opacity="0.4" />
    </svg>
  );
}

function WrappedCandy({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 140 80" width={size} height={size * 0.6}>
      <defs>
        <linearGradient id="candy-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={CV.slush.pink} />
          <stop offset="100%" stopColor={CV.red} />
        </linearGradient>
      </defs>
      {/* Left wrapper twist */}
      <path d="M 0 30 L 24 40 L 0 50 Z M 4 20 L 24 38 M 4 60 L 24 42" fill={CV.slush.pink} stroke={CV.red} strokeWidth="2" />
      {/* Right wrapper twist */}
      <path d="M 140 30 L 116 40 L 140 50 Z M 136 20 L 116 38 M 136 60 L 116 42" fill={CV.slush.pink} stroke={CV.red} strokeWidth="2" />
      {/* Candy body */}
      <ellipse cx="70" cy="40" rx="48" ry="26" fill="url(#candy-body)" />
      {/* Stripes */}
      <path d="M 40 22 Q 70 40 40 58" stroke="#fff" strokeWidth="3" fill="none" opacity="0.7" />
      <path d="M 70 18 Q 70 40 70 62" stroke="#fff" strokeWidth="3" fill="none" opacity="0.7" />
      <path d="M 100 22 Q 70 40 100 58" stroke="#fff" strokeWidth="3" fill="none" opacity="0.7" />
      <ellipse cx="55" cy="32" rx="14" ry="5" fill="#fff" opacity="0.4" />
    </svg>
  );
}

function IceCreamCone({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 100 140" width={size} height={size * 1.4}>
      <defs>
        <linearGradient id="cone-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0B97A" />
          <stop offset="100%" stopColor="#7C4F1D" />
        </linearGradient>
        <linearGradient id="cream-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor={CV.ice.pink} />
        </linearGradient>
      </defs>
      <path d="M 28 70 L 50 138 L 72 70 Z" fill="url(#cone-grad)" />
      <line x1="34" y1="78" x2="66" y2="78" stroke="#5A3915" strokeWidth="1.5" />
      <line x1="40" y1="98" x2="60" y2="98" stroke="#5A3915" strokeWidth="1.5" />
      <ellipse cx="50" cy="70" rx="28" ry="6" fill="#fff" />
      <path d="M 22 70 Q 30 30 50 30 Q 70 30 78 70 Z" fill="url(#cream-grad)" />
      <path d="M 28 50 Q 36 18 50 18 Q 64 18 72 50 Z" fill="url(#cream-grad)" />
      <circle cx="50" cy="14" r="6" fill={CV.red} />
      <rect x="34" y="42" width="3" height="2" rx="1" fill={CV.ice.mint} />
      <rect x="60" y="46" width="3" height="2" rx="1" fill={CV.slush.yellow} />
      <rect x="48" y="36" width="3" height="2" rx="1" fill={CV.slush.purple} />
    </svg>
  );
}

function ChocoBar({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 100 130" width={size} height={size * 1.3}>
      <defs>
        <linearGradient id="bar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B2A1C" />
          <stop offset="100%" stopColor="#2A0F0A" />
        </linearGradient>
        <linearGradient id="foil-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FBD37C" />
          <stop offset="100%" stopColor="#9C7220" />
        </linearGradient>
      </defs>
      <rect x="20" y="6" width="60" height="14" rx="2" fill="url(#foil-grad)" />
      <rect x="20" y="108" width="60" height="14" rx="2" fill="url(#foil-grad)" />
      <rect x="20" y="20" width="60" height="90" rx="3" fill="url(#bar-grad)" />
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => (
          <rect key={`${row}-${col}`} x={26 + col * 24} y={26 + row * 26} width="22" height="22" rx="2" fill="none" stroke="#2A0F0A" strokeWidth="2" />
        ))
      )}
      <rect x="26" y="26" width="3" height="80" fill="rgba(255,255,255,0.18)" />
    </svg>
  );
}

function Cupcake({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 100 130" width={size} height={size * 1.3}>
      <defs>
        <linearGradient id="cup-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor={CV.red} />
          <stop offset="100%" stopColor={CV.redShadow} />
        </linearGradient>
        <linearGradient id="frost-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"  stopColor="#fff" />
          <stop offset="100%" stopColor={CV.ice.pink} />
        </linearGradient>
      </defs>
      <path d="M 22 64 L 30 120 L 70 120 L 78 64 Z" fill="url(#cup-grad)" />
      {[28, 38, 48, 58, 68].map((x) => (
        <line key={x} x1={x} y1="64" x2={x + 4} y2="120" stroke="#fff" strokeWidth="1.5" opacity="0.55" />
      ))}
      <ellipse cx="50" cy="64" rx="32" ry="6" fill="#fff" />
      <path d="M 20 64 Q 28 22 50 22 Q 72 22 80 64 Z" fill="url(#frost-grad)" />
      <path d="M 30 50 Q 38 14 50 14 Q 62 14 70 50 Z" fill="url(#frost-grad)" />
      <circle cx="50" cy="10" r="7" fill={CV.red} />
      <rect x="36" y="36" width="3" height="2" rx="1" fill={CV.corn.yellow} />
      <rect x="58" y="42" width="3" height="2" rx="1" fill={CV.ice.mint} />
      <rect x="44" y="28" width="3" height="2" rx="1" fill={CV.slush.purple} />
    </svg>
  );
}

function CandyCane({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 100 160" width={size * 0.7} height={size * 1.2}>
      <defs>
        <linearGradient id="cane-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"  stopColor="#fff" />
          <stop offset="100%" stopColor="#F5F5F5" />
        </linearGradient>
      </defs>
      <path d="M 40 16 Q 78 16 78 50 L 78 150 L 60 150 L 60 50 Q 60 34 40 34 Z" fill="url(#cane-grad)" stroke="#E0E0E0" strokeWidth="2" />
      {/* Red stripes wrapping the cane */}
      {[20, 36, 52, 68, 88, 108, 128, 148].map((y, i) => (
        <path
          key={y}
          d={i < 4 ? `M ${44 - i * 2} ${y - 4} Q ${60 + i * 2} ${y - 8} ${78 + i * 2} ${y}` : `M 60 ${y - 6} L 80 ${y + 2}`}
          stroke={CV.red}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}


/* -------------------------------------------------------------------------- */
/*  FAMILY OF BRANDS                                                           */
/* -------------------------------------------------------------------------- */

function FamilyOfBrands() {
  const subs = [
    { name: 'Chocovill', tag: 'Premium Chocolate', color: CV.choco.mid,    icon: '🍫' },
    { name: 'Cornvill',  tag: 'Pop. Smile. Repeat.', color: CV.corn.yellow, icon: '🍿' },
    { name: 'Icevill',   tag: 'Scoop the Joy',     color: CV.ice.blue,     icon: '🍦' },
    { name: 'Slushvill', tag: 'Sip the Fun',       color: CV.slush.purple, icon: '🥤' },
  ];

  return (
    <section id="family" className="relative overflow-hidden py-20 md:py-28" style={{ background: '#fff' }}>
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white" style={{ background: CV.red }}>
            <CandyIcon className="h-3 w-3" /> A Family of Brands
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl" style={{ color: CV.redShadow }}>
            Four Worlds, One <span style={{ color: CV.red }}>Sweet Family</span>
          </h2>
          <p className="mt-5 text-lg" style={{ color: '#3B1A1Cb0' }}>
            Each sub-brand is its own delicious universe — bringing together everything you crave in one magical village.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subs.map((s, i) => (
            <motion.a
              key={s.name}
              href={`#${s.name.toLowerCase()}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl p-7 text-center text-white shadow-xl transition-shadow duration-500 hover:shadow-2xl"
              style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)` }}
            >
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 text-6xl drop-shadow-md transition-transform duration-500 group-hover:scale-110">{s.icon}</div>
                <h3 className="font-display text-2xl font-bold">{s.name}</h3>
                <p className="mt-2 text-sm text-white/90">{s.tag}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
                  Discover <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CHOCOVILL                                                                  */
/* -------------------------------------------------------------------------- */

function Chocovill() {
  return (
    <section
      id="chocovill"
      className="relative overflow-hidden py-20 md:py-28 text-white"
      style={{
        background: `linear-gradient(135deg, ${CV.choco.dark}, ${CV.choco.mid})`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,_rgba(217,164,65,0.7)_1.5px,_transparent_0)] [background-size:30px_30px]"
      />

      <div
        aria-hidden
        className="absolute -right-32 top-10 h-96 w-96 rounded-full blur-3xl"
        style={{ background: `${CV.choco.gold}30` }}
      />

      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: `${CV.choco.gold}18` }}
      />

      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <SubBrandIntro
          eyebrow="Chocovill"
          eyebrowBg={CV.choco.gold}
          eyebrowColor={CV.choco.dark}
          title="Where Chocolate Becomes a Premium Experience"
          titleAccent={CV.choco.gold}
          body="Chocovill is home to premium and Belgian chocolates, offering rich flavors, elegant presentation, and trend-driven chocolate selections crafted for those who love sweetness with sophistication."
          cta="Discover Chocovill"
          ctaBg={CV.choco.gold}
          ctaColor={CV.choco.dark}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative grid min-h-[360px] place-items-center md:min-h-[460px]"
        >
          {/* Chocovill Image */}
          <motion.img
            src="/sub%20brands/Candyvill/candyChocolate.webp"
            alt="Chocovill chocolate"
            draggable={false}
            className="relative z-20 w-[260px] select-none object-contain md:w-[340px] lg:w-[420px]"
            style={{
              filter: `drop-shadow(0 35px 45px rgba(0,0,0,0.65)) drop-shadow(0 0 35px ${CV.choco.gold}55)`,
            }}
            animate={{
              y: [0, -12, 0],
              rotate: [-1.5, 1.5, -1.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Premium golden glow behind image */}
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-1/2 z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:h-96 md:w-96"
            style={{
              background: `radial-gradient(circle, ${CV.choco.gold}35, transparent 70%)`,
            }}
            animate={{
              opacity: [0.45, 0.85, 0.45],
              scale: [0.95, 1.08, 0.95],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Floating cocoa beans */}
          {[
            { x: 2, y: 18 },
            { x: 86, y: 16 },
            { x: 90, y: 70 },
            { x: 6, y: 76 },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="absolute h-6 w-9 rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                background: `linear-gradient(135deg, ${CV.choco.mid}, ${CV.choco.dark})`,
                boxShadow: `inset 1px 1px 2px ${CV.choco.gold}80, 0 4px 8px rgba(0,0,0,0.4)`,
              }}
              animate={{
                y: [0, -8, 0],
                rotate: [-10, 10, -10],
              }}
              transition={{
                duration: 3 + i,
                delay: i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
/* -------------------------------------------------------------------------- */
/*  CORNVILL                                                                   */
/* -------------------------------------------------------------------------- */

function Cornvill() {
  return (
    <section id="cornvill" className="relative overflow-hidden py-20 md:py-28" style={{ background: `linear-gradient(135deg, ${CV.corn.butter} 0%, ${CV.corn.yellow} 100%)` }}>
      <div aria-hidden className="absolute -left-32 bottom-10 h-96 w-96 rounded-full blur-3xl" style={{ background: `${CV.red}25` }} />

      {/* Floating popcorn pieces */}
      {Array.from({ length: 14 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${r(1) * 100}%`,
              top: `${r(2) * 100}%`,
              width: 8 + r(3) * 8,
              height: 8 + r(3) * 8,
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
            }}
            animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 4 + r(4) * 3, delay: r(5) * 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}

      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center" style={{ color: CV.redShadow }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative order-2 grid place-items-center lg:order-1"
        >
          {/* Popcorn bucket SVG */}
          <motion.svg
            viewBox="0 0 240 280"
            className="w-56 md:w-72 lg:w-80"
            animate={{ y: [0, -6, 0], rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 20px 28px rgba(0,0,0,0.25))' }}
          >
            <defs>
              <linearGradient id="corn-stripes" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={CV.red} />
                <stop offset="100%" stopColor={CV.redShadow} />
              </linearGradient>
            </defs>
            {/* Bucket */}
            <path d="M 50 100 L 60 270 L 180 270 L 190 100 Z" fill="#fff" stroke={CV.redShadow} strokeWidth="3" />
            {/* Vertical red stripes */}
            {[60, 90, 120, 150, 180].map((x, i) => (
              <rect key={i} x={x} y="100" width="14" height="170" fill="url(#corn-stripes)" />
            ))}
            {/* Top rim */}
            <ellipse cx="120" cy="100" rx="70" ry="10" fill="#fff" stroke={CV.redShadow} strokeWidth="3" />
            {/* Popcorn pieces on top */}
            {[
              { x: 70, y: 90,  r: 18 },
              { x: 100, y: 75, r: 22 },
              { x: 130, y: 70, r: 20 },
              { x: 160, y: 80, r: 22 },
              { x: 90, y: 55,  r: 16 },
              { x: 145, y: 50, r: 18 },
              { x: 115, y: 40, r: 16 },
            ].map((p, i) => (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r={p.r} fill="#FFF8DC" />
                <circle cx={p.x + 3} cy={p.y - 3} r={p.r - 6} fill="#FFFAE6" />
                <circle cx={p.x - 6} cy={p.y - 5} r="4" fill="#FFE89A" />
              </g>
            ))}
            {/* CORNVILL label */}
            <text x="120" y="210" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" letterSpacing="3">
              CORNVILL
            </text>
          </motion.svg>
        </motion.div>

        <div className="order-1 lg:order-2">
          <SubBrandIntro
            eyebrow="Cornvill"
            eyebrowBg={CV.red}
            eyebrowColor="#fff"
            title="Pop. Smile. Repeat."
            titleAccent={CV.red}
            body="Cornvill celebrates the small moments that bring people together. From sweet and buttery corn cups to savory snacks, every kernel tells a story of warmth, flavor, and happiness."
            cta="Taste Cornvill"
            ctaBg={CV.red}
            ctaColor="#fff"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  ICEVILL                                                                    */
/* -------------------------------------------------------------------------- */

function Icevill() {
  return (
    <section id="icevill" className="relative overflow-hidden py-20 md:py-28" style={{ background: `linear-gradient(135deg, ${CV.ice.blue} 0%, ${CV.ice.lavender} 100%)` }}>
      {/* Drifting frost mist */}
      <div aria-hidden className="absolute inset-0 opacity-50">
        {Array.from({ length: 18 }).map((_, i) => {
          const seed = (i * 7919 + 1597) % 233280;
          const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
          return (
            <motion.span
              key={i}
              className="absolute h-3 w-3 rounded-full bg-white"
              style={{
                left: `${r(1) * 100}%`,
                top: `${r(2) * 100}%`,
                filter: 'blur(2px)',
              }}
              animate={{ y: [0, -40, 0], opacity: [0.3, 0.9, 0.3] }}
              transition={{ duration: 5 + r(3) * 3, delay: r(4) * 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          );
        })}
      </div>

      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center" style={{ color: CV.redShadow }}>
        <SubBrandIntro
          eyebrow="Icevill"
          eyebrowBg="#fff"
          eyebrowColor={CV.ice.pink}
          title="Scoop the Joy"
          titleAccent={CV.ice.pink}
          body="Icevill serves creamy, colorful ice creams crafted to bring joy in every scoop. Every flavor is made with creativity, turning simple moments into celebrations of taste and fun."
          cta="Explore Icevill"
          ctaBg={CV.ice.pink}
          ctaColor="#fff"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative grid place-items-center"
        >
          {/* Icevill picture — drifts up/down with subtle tilt */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src="/sub%20brands/candyvill/icevill.png"
            alt="Icevill"
            draggable={false}
            animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-56 select-none object-contain md:w-72 lg:w-80"
            style={{
              filter: 'drop-shadow(0 28px 36px rgba(0,0,0,0.3)) drop-shadow(0 0 30px rgba(255,255,255,0.4))',
            }}
          />

          {/* Falling sprinkles */}
          {Array.from({ length: 8 }).map((_, i) => {
            const seed = (i * 1597 + 7919) % 233280;
            const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
            const colors = [CV.ice.pink, CV.ice.mint, CV.slush.yellow, CV.ice.lavender];
            return (
              <motion.span
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${20 + r(1) * 60}%`,
                  top: `0%`,
                  width: 5,
                  height: 12,
                  background: colors[i % colors.length],
                  borderRadius: 3,
                }}
                animate={{ y: [0, 250], opacity: [0, 1, 0], rotate: [0, 180] }}
                transition={{ duration: 3 + r(2) * 2, delay: r(3) * 4, repeat: Infinity, ease: 'easeIn' }}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SLUSHVILL                                                                  */
/* -------------------------------------------------------------------------- */

function Slushvill() {
  return (
    <section id="slushvill" className="relative overflow-hidden py-20 md:py-28 text-white" style={{ background: `linear-gradient(135deg, ${CV.slush.purple} 0%, ${CV.slush.pink} 100%)` }}>
      {/* Rising bubbles */}
      {Array.from({ length: 16 }).map((_, i) => {
        const seed = (i * 4567 + 8901) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/40"
            style={{
              left: `${r(1) * 100}%`,
              bottom: `0%`,
              width: 6 + r(2) * 10,
              height: 6 + r(2) * 10,
              boxShadow: '0 0 8px rgba(255,255,255,0.4)',
            }}
            animate={{ y: [0, -400], opacity: [0, 0.8, 0] }}
            transition={{ duration: 5 + r(3) * 3, delay: r(4) * 4, repeat: Infinity, ease: 'easeOut' }}
          />
        );
      })}

      <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative order-2 grid place-items-center lg:order-1"
        >
          <motion.svg
            viewBox="0 0 200 280"
            className="w-48 md:w-64 lg:w-72"
            animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.4))' }}
          >
            <defs>
              <linearGradient id="slush-mix" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={CV.slush.blue} />
                <stop offset="50%" stopColor={CV.slush.purple} />
                <stop offset="100%" stopColor={CV.slush.pink} />
              </linearGradient>
            </defs>
            {/* Cup body (transparent) */}
            <path d="M 50 70 L 60 250 L 140 250 L 150 70 Z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" strokeWidth="3" />
            {/* Slush liquid inside */}
            <path d="M 56 90 L 64 240 L 136 240 L 144 90 Z" fill="url(#slush-mix)" />
            {/* Wavy top of liquid */}
            <path d="M 56 90 Q 75 80 95 92 T 144 90 L 144 100 L 56 100 Z" fill="rgba(255,255,255,0.35)" />
            {/* Ice cubes */}
            {[
              { x: 72, y: 140, s: 14 },
              { x: 110, y: 165, s: 16 },
              { x: 88, y: 195, s: 12 },
              { x: 122, y: 210, s: 14 },
            ].map((c, i) => (
              <rect key={i} x={c.x} y={c.y} width={c.s} height={c.s} rx="2" fill="rgba(255,255,255,0.4)" transform={`rotate(${i * 22} ${c.x + c.s / 2} ${c.y + c.s / 2})`} />
            ))}
            {/* Straw */}
            <rect x="95" y="40" width="8" height="60" rx="2" fill={CV.slush.yellow} transform="rotate(8 99 70)" />
            <rect x="95" y="50" width="8" height="6" fill={CV.slush.pink} transform="rotate(8 99 70)" />
            {/* Cup band */}
            <rect x="50" y="68" width="100" height="20" fill={CV.red} />
            <text x="100" y="82" textAnchor="middle" fontSize="10" fontWeight="800" fill="#fff" letterSpacing="3">SLUSHVILL</text>
            {/* Highlight */}
            <rect x="62" y="100" width="3" height="130" fill="rgba(255,255,255,0.5)" />
          </motion.svg>
        </motion.div>

        <div className="order-1 lg:order-2">
          <SubBrandIntro
            eyebrow="Slushvill"
            eyebrowBg="#fff"
            eyebrowColor={CV.slush.purple}
            title="Sip the Fun"
            titleAccent={CV.slush.yellow}
            body="Slushvill is the refreshment village of CandyVill, bringing flavor, color, and coolness in every sip. Customers can mix frozen flavors and enjoy refreshing slush drinks on the go."
            cta="Refresh with Slushvill"
            ctaBg="#fff"
            ctaColor={CV.slush.purple}
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared sub-brand copy layout                                                */
/* -------------------------------------------------------------------------- */

function SubBrandIntro({
  eyebrow,
  eyebrowBg,
  eyebrowColor,
  title,
  titleAccent,
  body,
  cta,
  ctaBg,
  ctaColor,
}: {
  eyebrow: string;
  eyebrowBg: string;
  eyebrowColor: string;
  title: string;
  titleAccent: string;
  body: string;
  cta: string;
  ctaBg: string;
  ctaColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      <span
        className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em]"
        style={{ background: eyebrowBg, color: eyebrowColor }}
      >
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
        <span style={{ color: titleAccent }}>{title}</span>
      </h2>
      <p className="mt-6 max-w-lg text-base leading-relaxed text-current/90 md:text-lg">{body}</p>
      <a
        href="#branches"
        className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
        style={{ background: ctaBg, color: ctaColor }}
      >
        {cta}
        <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  BRANCHES                                                                   */
/* -------------------------------------------------------------------------- */

function Branches() {
  const branches = [
    {
      name: 'Katara Gift Building',
      desc: 'The first CandyVill branch, where the sweet journey began in 2023.',
      tags: ['Premium', 'Cultural'],
      colors: { bg: CV.red, accent: '#FFD166' },
    },
    {
      name: 'Mall of Qatar',
      desc: 'A larger CandyVill concept store featuring themed zones like Chocovill, Icevill, and Slushvill.',
      tags: ['Family destination', 'All sub-brands'],
      colors: { bg: CV.choco.mid, accent: CV.pinkSoft },
    },
    {
      name: 'West Walk',
      desc: 'CandyVill\'s third branch, bringing sweet moments to one of Qatar\'s vibrant lifestyle destinations.',
      tags: ['Lifestyle', 'Snack stop'],
      colors: { bg: CV.corn.yellow, accent: CV.ice.mint },
    },
    {
      name: 'Hyatt Plaza',
      desc: 'A bright candy stop in one of Doha\'s most popular family malls — sweets for every shopper.',
      tags: ['Mall', 'Family'],
      colors: { bg: CV.ice.blue, accent: CV.ice.lavender },
    },
    {
      name: 'City Centre',
      desc: 'CandyVill in the heart of Doha — a colourful escape inside the city\'s landmark destination.',
      tags: ['Landmark', 'Central'],
      colors: { bg: CV.slush.purple, accent: CV.pinkSoft },
    },
  ];

  return (
    <section id="branches" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white" style={{ background: CV.red }}>
            <MapPin className="h-3 w-3" /> Branches
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl" style={{ color: CV.redShadow }}>
            Five Sweet Stops <span style={{ color: CV.red }}>Across Qatar</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl p-7 text-white shadow-xl transition-shadow duration-500 hover:shadow-2xl"
              style={{ background: `linear-gradient(135deg, ${b.colors.bg}, ${b.colors.bg}cc)` }}
            >
              {/* Pin */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-4 inline-grid h-14 w-14 place-items-center rounded-full text-white shadow-lg"
                style={{ background: b.colors.accent, color: b.colors.bg }}
              >
                <MapPin className="h-6 w-6" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold">{b.name}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {b.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/90">{b.desc}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                style={{ color: b.colors.accent }}
              >
                View Location <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  VISION & MISSION                                                           */
/* -------------------------------------------------------------------------- */

function VisionMission() {
  return (
    <section className="relative py-20 md:py-28" style={{ background: CV.cream }}>
      <div className="container-page grid gap-6 lg:grid-cols-2">
        {[
          {
            label: 'Vision',
            heading: 'The Region\'s Most Beloved Candy Destination',
            body: 'To become the region\'s most beloved and recognised destination for candies — sweet, unforgettable, and one-of-a-kind.',
            icon: <Wand2 className="h-6 w-6" />,
            bg: CV.red,
          },
          {
            label: 'Mission',
            heading: 'Spreading Happiness, One Treat at a Time',
            body: 'Creating a world of irresistible candies that brings joy to every visitor, every day, in every village corner.',
            icon: <Heart className="h-6 w-6" fill="currentColor" />,
            bg: CV.redShadow,
          },
        ].map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-3xl p-10 text-white shadow-xl"
            style={{ background: c.bg }}
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm" style={{ color: CV.pinkSoft }}>
                {c.icon}
              </div>
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: CV.pinkSoft }}>
                {c.label}
              </div>
              <h3 className="font-display text-3xl font-bold leading-tight md:text-4xl">{c.heading}</h3>
              <p className="mt-5 text-base leading-relaxed text-white/85 md:text-lg">{c.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CORE VALUES                                                                */
/* -------------------------------------------------------------------------- */

function CoreValues() {
  const values = [
    { Icon: ShieldCheck, title: 'Quality & Safety',         body: 'Trusted, premium, and safe ingredients from reliable sources.', color: CV.red },
    { Icon: Wand2,       title: 'Creativity & Fun',          body: 'Reinventing the candy experience with themes, designs and stories.', color: CV.slush.purple },
    { Icon: Smile,       title: 'Customer Delight',          body: 'Every detail — packaging to presentation — should make customers smile.', color: CV.corn.yellow },
    { Icon: Users,       title: 'Community & Togetherness',  body: 'Celebrating shared moments, family treats, and festive gifts.', color: CV.ice.pink },
    { Icon: Sparkles,    title: 'Innovation with Flavour',   body: 'Experimenting with new tastes, trends, and textures.', color: CV.slush.blue },
    { Icon: Recycle,     title: 'Sustainability of Smiles',  body: 'Responsible packaging, thoughtful sourcing, and ethical operations.', color: CV.ice.mint },
  ];
  return (
    <section className="relative overflow-hidden py-20 md:py-28 text-white" style={{ background: `linear-gradient(180deg, ${CV.redShadow} 0%, ${CV.red} 100%)` }}>
      <div aria-hidden className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.6)_1.2px,_transparent_0)] [background-size:34px_34px]" />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
            <Star className="h-3 w-3" fill="currentColor" /> Our Values
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            The Sweet Principles
            <span className="block" style={{ color: CV.pinkSoft }}>Behind Every Treat</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ Icon, title, body, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-white/15 bg-white/8 p-6 backdrop-blur-xl transition-shadow duration-300 hover:border-white/30"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <div
                className="mb-4 grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                style={{ background: color, boxShadow: `0 8px 20px -4px ${color}80` }}
              >
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/80">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FINAL CTA                                                                   */
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
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] p-10 text-center text-white md:p-16"
          style={{ background: `linear-gradient(135deg, ${CV.red}, ${CV.redShadow})` }}
        >
          {/* Candy confetti */}
          {[CV.pinkSoft, '#fff', CV.corn.yellow, CV.ice.mint, CV.slush.blue].map((c, i) => (
            <motion.div
              key={i}
              aria-hidden
              className="absolute h-3 w-3 rounded-sm"
              style={{
                background: c,
                left: `${8 + i * 18}%`,
                top: `${5 + (i % 2) * 8}%`,
                boxShadow: `0 0 10px ${c}aa`,
              }}
              animate={{ y: [0, 12, 0], rotate: [0, 90, 0] }}
              transition={{ duration: 3 + i, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          <div aria-hidden className="absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl" style={{ background: `${CV.pinkSoft}40` }} />

          <div className="relative">
            <motion.div
              animate={{ rotate: [-5, 5, -5], y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto mb-6 inline-block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon_CandyVill.svg" alt="" className="h-28 w-28" style={{ filter: 'drop-shadow(0 14px 20px rgba(0,0,0,0.4))' }} />
            </motion.div>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Step Into the
              <span className="block" style={{ color: CV.pinkSoft }}>Sweetest Village in Qatar</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
              From chocolates to ice cream, slush, and warm corn treats — CandyVill is made for every sweet tooth.
            </p>

            {/* Contact strip */}
            <div className="mx-auto mt-8 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-full bg-white/12 px-6 py-3 text-sm font-semibold backdrop-blur-sm">
              <a href="tel:+97440060685" className="inline-flex items-center gap-1.5 hover:text-yellow-200">
                <Phone className="h-3.5 w-3.5" /> +974 4006 0685
              </a>
              <span className="text-white/30">·</span>
              <a href="tel:+97451122332" className="inline-flex items-center gap-1.5 hover:text-yellow-200">
                <Phone className="h-3.5 w-3.5" /> +974 5112 2332
              </a>
              <span className="text-white/30">·</span>
              <a href="mailto:info@candyvill.com" className="inline-flex items-center gap-1.5 hover:text-yellow-200">
                <Mail className="h-3.5 w-3.5" /> info@candyvill.com
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#branches"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: CV.red }}
              >
                Visit CandyVill
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/en/#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white"
                onMouseEnter={(e) => (e.currentTarget.style.color = CV.red)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                Contact Us
              </a>
            </div>

            {/* Follow on social media */}
            <div className="mt-10">
              <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/65">Follow CandyVill</div>
              <div className="mt-3 flex flex-wrap justify-center gap-3">
                <SocialIconButton href="https://www.instagram.com/candyvill.qa" type="instagram" hoverColor={CV.red} />
                <SocialIconButton href="https://www.tiktok.com/@candyvill.qa" type="tiktok" hoverColor={CV.red} />
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
  hoverColor,
}: {
  href: string;
  type: 'instagram' | 'facebook' | 'tiktok';
  hoverColor: string;
}) {
  const label = type[0].toUpperCase() + type.slice(1);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="grid h-11 w-11 place-items-center rounded-full bg-white/12 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
      onMouseEnter={(e) => (e.currentTarget.style.color = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
    >
      {type === 'instagram' && <Instagram className="h-5 w-5" />}
      {type === 'facebook'  && <Facebook  className="h-5 w-5" />}
      {type === 'tiktok'    && <TikTokIcon />}
    </a>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
    </svg>
  );
}
