'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Ticket,
  MapPin,
  ClipboardCheck,
  Users,
  Shield,
  CheckCircle2,
  PartyPopper,
  Cake,
  Gift,
  Trophy,
  Flame,
  Star,
  Phone,
  ExternalLink,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Trampo Extreme brand palette                                                */
/* -------------------------------------------------------------------------- */

const TX = {
  blue:    '#009CDE',
  green:   '#84BD00',
  orange:  '#FF6A39',
  purple:  '#7D55C7',
  yellow:  '#FFE916',
  cream:   '#F9F1DE',
  ink:     '#0F1A2E',
};

const SITE_URL = 'https://trampo-qatar.com/';

/* -------------------------------------------------------------------------- */

export function TrampoExtremePage() {
  return (
    <main className="bg-white" style={{ color: TX.ink }}>
      <Hero />
      <Activities />
      <Birthdays />
      <Camps />
      <Safety />
      <LocationSection />
      <FinalCTA />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*  HERO                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32" style={{ background: TX.cream }}>
      <DotWaveBackdrop />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Copy column */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white"
              style={{ background: TX.orange }}
            >
              <Star className="h-3 w-3" fill="currentColor" /> Sub-brand of QNTGC
            </span>

            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              Jump Into
              <span className="block" style={{ color: TX.orange }}>Extreme Fun</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/70 md:text-xl">
              Bounce, climb, explore, and celebrate unforgettable moments at{' '}
              <strong style={{ color: TX.blue }}>Trampo Extreme Qatar</strong>.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: TX.orange, boxShadow: `0 14px 30px -5px ${TX.orange}90` }}
              >
                Buy Tickets
                <Ticket className="h-4 w-4" />
              </a>
              <a
                href="#activities"
                className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderColor: TX.blue, color: TX.blue }}
              >
                Explore Activities
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#birthdays"
                className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderColor: TX.purple, color: TX.purple }}
              >
                Plan a Birthday
                <Cake className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-wider text-black/60">
              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" style={{ color: TX.green }} /> Aspire Park, Doha</span>
              <span className="hidden text-black/20 sm:inline">•</span>
              <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5" style={{ color: TX.blue }} /> Safe & Supervised</span>
              <span className="hidden text-black/20 sm:inline">•</span>
              <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" style={{ color: TX.purple }} /> All Ages</span>
            </div>
          </motion.div>
        </div>

        {/* Trampoline 3D-ish scene */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <TrampolineScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DotWaveBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full opacity-40 blur-3xl" style={{ background: `${TX.blue}50` }} />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: `${TX.orange}40` }} />
      <div className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: `${TX.purple}40` }} />
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,_rgba(15,26,46,0.4)_1px,_transparent_0)] [background-size:28px_28px]" />
      {/* Curving wave SVG */}
      <svg className="absolute inset-x-0 bottom-0 h-40 w-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <motion.path
          d="M 0 100 C 200 40, 400 160, 600 100 S 1000 40, 1200 100 L 1200 200 L 0 200 Z"
          fill={TX.blue}
          opacity="0.12"
          animate={{ d: [
            'M 0 100 C 200 40, 400 160, 600 100 S 1000 40, 1200 100 L 1200 200 L 0 200 Z',
            'M 0 120 C 200 60, 400 140, 600 120 S 1000 60, 1200 120 L 1200 200 L 0 200 Z',
            'M 0 100 C 200 40, 400 160, 600 100 S 1000 40, 1200 100 L 1200 200 L 0 200 Z',
          ] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

function TrampolineScene() {
  return (
    <div className="relative h-full w-full" style={{ perspective: '1200px' }}>
      {/* Soft glow halo */}
      <motion.div
        className="absolute inset-8 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${TX.orange}55, transparent 70%)` }}
        animate={{ opacity: [0.55, 0.95, 0.55], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Trampoline platform with perspective grid */}
      <div
        className="absolute left-1/2 top-[68%] h-2/5 w-3/4 -translate-x-1/2"
        style={{ transform: 'translate(-50%, -50%) rotateX(70deg)', transformStyle: 'preserve-3d' }}
      >
        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: TX.orange,
            boxShadow: `0 0 40px ${TX.orange}90`,
          }}
        />

        {/* Inner trampoline surface */}
        <div className="absolute inset-3 rounded-full" style={{ background: '#0F1A2E' }}>
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full opacity-30"
            preserveAspectRatio="none"
          >
            {[10, 25, 40, 55, 70, 85].map((p) => (
              <line
                key={`h${p}`}
                x1="0"
                y1={p}
                x2="100"
                y2={p}
                stroke={TX.yellow}
                strokeWidth="0.4"
              />
            ))}

            {[10, 25, 40, 55, 70, 85].map((p) => (
              <line
                key={`v${p}`}
                x1={p}
                y1="0"
                x2={p}
                y2="100"
                stroke={TX.yellow}
                strokeWidth="0.4"
              />
            ))}
          </svg>
        </div>

        {/* Springs */}
        {Array.from({ length: 20 }).map((_, i) => {
          const a = (i / 20) * Math.PI * 2;
          const cx = 50 + Math.cos(a) * 46;
          const cy = 50 + Math.sin(a) * 46;

          return (
            <span
              key={i}
              className="absolute h-1 w-3 rounded-full"
              style={{
                background: '#fff',
                left: `${cx}%`,
                top: `${cy}%`,
                transform: `translate(-50%, -50%) rotate(${(a * 180) / Math.PI + 90}deg)`,
              }}
            />
          );
        })}
      </div>

      {/* Single Trampo Character - Bigger and Centered */}
      <motion.img
        src="/sub%20brands/Trampo_extreme/trampoCharacter%2003.webp"
        alt="Trampo character"
        draggable={false}
        className="pointer-events-none absolute left-[30%] top-[13%] z-20 select-none object-contain"
        style={{
          width: 220,
          height: 220,
          transform: 'translateX(-50%)',
          filter:
            'drop-shadow(0 16px 20px rgba(255,106,57,0.48)) drop-shadow(0 0 24px rgba(255,233,22,0.38))',
        }}
        animate={{
          y: [0, -28, 0, -14, 0],
          rotate: [-4, 4, -4, 4, -4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating foam cubes + balls */}
      {[
        { x: 6, y: 28, c: TX.green, type: 'cube' as const },
        { x: 88, y: 36, c: TX.purple, type: 'cube' as const },
        { x: 12, y: 70, c: TX.yellow, type: 'ball' as const },
        { x: 86, y: 72, c: TX.blue, type: 'ball' as const },
        { x: 2, y: 52, c: TX.orange, type: 'ball' as const, small: true },
        { x: 94, y: 56, c: TX.green, type: 'cube' as const, small: true },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.small ? 28 : 40,
            height: p.small ? 28 : 40,
          }}
          animate={{
            y: [0, -10, 0],
            rotate: p.type === 'cube' ? [-12, 12, -12] : [0, 0, 0],
          }}
          transition={{
            duration: 3 + i * 0.3,
            delay: i * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {p.type === 'cube' ? (
            <div
              className="h-full w-full rounded-lg shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${p.c}, ${p.c}cc)`,
                boxShadow: `0 8px 20px -4px ${p.c}aa, inset 0 1px 0 rgba(255,255,255,0.4)`,
              }}
            />
          ) : (
            <div
              className="h-full w-full rounded-full shadow-xl"
              style={{
                background: `radial-gradient(circle at 35% 30%, #fff, ${p.c} 60%, ${p.c}cc)`,
                boxShadow: `0 8px 20px -4px ${p.c}aa`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
function BouncingTrampo({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  return (
    <motion.img
      src="/sub%20brands/Trampo_extreme/icon_trampo.svg"
      alt=""
      draggable={false}
      className="pointer-events-none absolute select-none object-contain"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        filter: 'drop-shadow(0 10px 14px rgba(255,106,57,0.5)) drop-shadow(0 0 18px rgba(255,233,22,0.35))',
      }}
      animate={{ y: [0, -24, 0, -12, 0], rotate: [-6, 6, -6, 6, -6] }}
      transition={{ duration: 1.8, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}


function Activities() {
  const items = [
    { name: 'Jump',        ages: 'Ages 5+',        height: '110 cm+',  desc: 'Wall-to-wall trampolines, foam pits, and freestyle zones for big air and bigger smiles.', color: TX.blue,   icon: '🤸' },
    { name: 'Climbing Area', ages: 'Ages 5+',      height: '110 cm+',  desc: 'Auto-belay walls with 12 routes — from beginner to expert, fully harnessed and supervised.', color: TX.orange, icon: '🧗' },
    { name: 'Skytrail',    ages: 'Ages 7+',        height: '120 cm+',  desc: 'High-rope adventure course suspended above the arena. Conquer balance beams, bridges, and ziplines.', color: TX.purple, icon: '🪢' },
    { name: 'Sky Tykes',   ages: 'Ages 3–6',       height: 'Under 110 cm', desc: 'A gentler high-rope course built just for little adventurers — same thrill, smaller scale.', color: TX.green,  icon: '🌟' },
    { name: 'Soft Play',   ages: 'Ages 1–6',       height: 'Under 110 cm', desc: 'Padded mazes, ball pits, tunnels, and slides — a safe sensory playground for tots.', color: TX.yellow, icon: '🎨' },
  ];

  return (
    <section id="activities" className="relative py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white"
            style={{ background: TX.blue }}
          >
            <Flame className="h-3 w-3" /> What You Can Do
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl" style={{ color: TX.ink }}>
            Our <span style={{ color: TX.orange }}>Activities</span>
          </h2>
          <p className="mt-5 text-lg text-black/70">
            Five worlds of action under one giant indoor adventure park.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl p-7 text-white shadow-xl transition-shadow duration-500 hover:shadow-2xl"
              style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)` }}
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              {/* Dot wave pattern in corner */}
              <div className="absolute -bottom-6 -right-6 h-28 w-28 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.7)_1px,_transparent_0)] [background-size:14px_14px]" />

              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [-5, 5, -5] }}
                  transition={{ duration: 3.5, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  className="mb-5 text-7xl drop-shadow-md"
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-display text-2xl font-extrabold">{item.name}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-white/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">{item.ages}</span>
                  <span className="rounded-full bg-white/25 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">{item.height}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/90">{item.desc}</p>
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-sm transition-colors hover:bg-white hover:text-current"
                  style={{ color: '#fff' }}
                >
                  Learn More <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  BIRTHDAYS                                                                   */
/* -------------------------------------------------------------------------- */

function Birthdays() {
  return (
    <section id="birthdays" className="relative overflow-hidden py-20 md:py-28" style={{ background: TX.purple }}>
      <div aria-hidden className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.8)_1.5px,_transparent_0)] [background-size:36px_36px]" />
      {/* Floating balloons */}
      {[
        { x: 5,  y: 14, c: TX.orange },
        { x: 88, y: 18, c: TX.yellow },
        { x: 12, y: 70, c: TX.blue },
        { x: 90, y: 72, c: TX.green },
      ].map((b, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${b.x}%`, top: `${b.y}%` }}
          animate={{ y: [0, -16, 0], rotate: [-6, 6, -6] }}
          transition={{ duration: 4 + i, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Balloon size={50} color={b.c} />
        </motion.div>
      ))}

      <div className="container-page relative grid gap-12 text-white lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
            <PartyPopper className="h-3 w-3" /> Birthday Parties
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
            The Loudest, Bounciest
            <span className="block" style={{ color: TX.yellow }}>Birthday in Doha</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/90 md:text-lg">
            Private party rooms, themed decor, dedicated host, jumping time for everyone, and a cake moment your kid will remember forever.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { Icon: Cake,         label: 'Party room' },
              { Icon: Gift,         label: 'Party host' },
              { Icon: PartyPopper,  label: 'Full themed setup' },
            ].map(({ Icon, label }, i) => (
              <div key={i} className="flex items-center gap-2.5 rounded-2xl bg-white/12 p-3 backdrop-blur-sm">
                <span className="grid h-9 w-9 place-items-center rounded-xl text-white" style={{ background: TX.orange }}>
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-bold">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{ color: TX.purple }}
            >
              Book a Party
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = TX.purple)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
            >
              See Party Packages
            </a>
          </div>
        </div>

        {/* Birthday stage visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <BirthdayStage />
        </motion.div>
      </div>
    </section>
  );
}

function Balloon({ size, color }: { size: number; color: string }) {
  return (
    <svg viewBox="0 0 40 60" width={size} height={size * 1.5}>
      <ellipse cx="20" cy="18" rx="14" ry="17" fill={color} />
      <ellipse cx="15" cy="14" rx="4" ry="6" fill="#fff" opacity="0.4" />
      <path d="M 18 35 L 22 35 L 20 38 Z" fill={color} />
      <line x1="20" y1="38" x2="20" y2="58" stroke="#fff" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

function BirthdayStage() {
  return (
    <div className="relative h-full w-full">
      {/* Cake at center */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Cake3D size={180} />
      </motion.div>

      {/* Floating gifts */}
      {[
        { x: 10, y: 18, c: TX.orange },
        { x: 76, y: 14, c: TX.yellow },
        { x: 8,  y: 70, c: TX.green  },
        { x: 80, y: 76, c: TX.blue   },
      ].map((g, i) => (
        <motion.div
          key={i}
          className="absolute h-12 w-12 rounded-lg shadow-xl"
          style={{
            left: `${g.x}%`,
            top: `${g.y}%`,
            background: `linear-gradient(135deg, ${g.c}, ${g.c}cc)`,
            boxShadow: `0 8px 22px -4px ${g.c}aa`,
          }}
          animate={{ y: [0, -8, 0], rotate: [-6, 6, -6] }}
          transition={{ duration: 3.5 + i * 0.4, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Ribbon */}
          <span className="absolute inset-y-0 left-1/2 w-2 -translate-x-1/2 bg-white/85" />
          <span className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 bg-white/85" />
        </motion.div>
      ))}
    </div>
  );
}

function Cake3D({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} style={{ filter: 'drop-shadow(0 30px 30px rgba(0,0,0,0.4))' }}>
      <defs>
        <linearGradient id="cake-tier-1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={TX.orange} />
          <stop offset="100%" stopColor="#D4502A" />
        </linearGradient>
        <linearGradient id="cake-tier-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={TX.yellow} />
          <stop offset="100%" stopColor="#D9C313" />
        </linearGradient>
        <linearGradient id="cake-tier-3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#EDEDED" />
        </linearGradient>
      </defs>
      {/* Plate */}
      <ellipse cx="100" cy="180" rx="80" ry="8" fill="#fff" opacity="0.7" />
      {/* Bottom tier */}
      <ellipse cx="100" cy="170" rx="70" ry="8" fill="#D4502A" />
      <rect x="30" y="120" width="140" height="50" fill="url(#cake-tier-1)" />
      <ellipse cx="100" cy="120" rx="70" ry="8" fill={TX.orange} />
      {/* Frosting drips */}
      <path d="M 30 130 Q 50 142 70 130 Q 90 144 110 130 Q 130 144 150 130 Q 168 142 170 130 L 170 124 L 30 124 Z" fill="#fff" />
      {/* Middle tier */}
      <ellipse cx="100" cy="118" rx="50" ry="6" fill="#D9C313" />
      <rect x="50" y="80" width="100" height="40" fill="url(#cake-tier-2)" />
      <ellipse cx="100" cy="80" rx="50" ry="6" fill={TX.yellow} />
      {/* Top tier */}
      <ellipse cx="100" cy="78" rx="32" ry="4" fill="#DDD" />
      <rect x="68" y="50" width="64" height="28" fill="url(#cake-tier-3)" />
      <ellipse cx="100" cy="50" rx="32" ry="4" fill="#fff" />
      {/* Candles */}
      {[80, 100, 120].map((x, i) => (
        <g key={x}>
          <rect x={x - 2} y="30" width="4" height="20" fill={[TX.blue, TX.purple, TX.green][i]} />
          {/* Flame */}
          <motion.ellipse
            cx={x}
            cy="26"
            rx="3"
            ry="6"
            fill={TX.yellow}
          />
          <ellipse cx={x} cy="25" rx="1.5" ry="3" fill={TX.orange} />
        </g>
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  EXTREME CAMPS                                                              */
/* -------------------------------------------------------------------------- */

function Camps() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative order-2 mx-auto grid aspect-square w-full max-w-md place-items-center lg:order-1"
        >
          {/* Rotating camp badge */}
          <motion.div
            className="relative grid h-full w-full place-items-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
              <defs>
                <path id="badge-circle" d="M 100 100 m -75 0 a 75 75 0 1 1 150 0 a 75 75 0 1 1 -150 0" />
              </defs>
              <text fontSize="14" fontWeight="700" letterSpacing="6" fill={TX.ink}>
                <textPath href="#badge-circle" startOffset="0%">
                  EXTREME CAMPS • JUMP • CLIMB • PLAY • LEARN • EXTREME CAMPS • JUMP • CLIMB • PLAY • LEARN •
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Centre badge — static */}
          <div className="absolute grid h-48 w-48 place-items-center rounded-full text-white shadow-2xl" style={{ background: `linear-gradient(135deg, ${TX.blue}, ${TX.purple})`, boxShadow: `0 24px 60px -10px ${TX.blue}80` }}>
            <Trophy className="absolute -top-3 left-1/2 -translate-x-1/2 h-8 w-8" style={{ color: TX.yellow, fill: TX.yellow }} />
            <div className="text-center">
              <div className="font-display text-3xl font-extrabold leading-none">CAMPS</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">Active. Safe. Fun.</div>
            </div>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white" style={{ background: TX.green }}>
            <Flame className="h-3 w-3" /> Extreme Camps
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl" style={{ color: TX.ink }}>
            Full-Day <span style={{ color: TX.green }}>Adventure Camps</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-black/70 md:text-lg">
            Active, supervised days packed with jumping, climbing, games, art, lunch, and new friends — for kids who can't sit still.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { Icon: Shield,        title: 'Always supervised', desc: 'Certified coaches, low ratios.' },
              { Icon: Users,         title: 'New friends',        desc: 'Mixed activities, real teamwork.' },
              { Icon: Trophy,        title: 'Skill-building',     desc: 'Climbing, agility, confidence.' },
              { Icon: CheckCircle2,  title: 'Healthy snacks',     desc: 'Energy meals and drinks included.' },
            ].map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-black/8 bg-white p-5 shadow-card transition-all duration-300 hover:shadow-card-hover"
              >
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl text-white" style={{ background: TX.green }}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold" style={{ color: TX.ink }}>{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-black/65">{desc}</p>
              </motion.div>
            ))}
          </div>

          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: TX.green, boxShadow: `0 14px 30px -5px ${TX.green}80` }}
          >
            Reserve a Camp Spot
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SAFETY & WAIVER                                                             */
/* -------------------------------------------------------------------------- */

function Safety() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: `linear-gradient(135deg, ${TX.blue}1a 0%, ${TX.green}1a 100%)` }}>
      <div aria-hidden className="absolute -left-32 top-20 h-80 w-80 rounded-full opacity-30 blur-3xl" style={{ background: `${TX.blue}40` }} />
      <div aria-hidden className="absolute -right-32 bottom-10 h-96 w-96 rounded-full opacity-30 blur-3xl" style={{ background: `${TX.green}40` }} />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          {/* Pulsing halo */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{ background: `radial-gradient(circle, ${TX.blue}55, transparent 70%)` }}
            animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0 grid place-items-center"
            animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ShieldArt size={260} />
          </motion.div>
        </motion.div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white" style={{ background: TX.blue }}>
            <Shield className="h-3 w-3" /> Safety First
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl" style={{ color: TX.ink }}>
            Built for <span style={{ color: TX.blue }}>Bounces.</span>
            <span className="block" style={{ color: TX.green }}>Engineered for Safety.</span>
          </h2>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              'Certified trampolines & equipment',
              'Trained on-court marshals',
              'Color-coded session bands',
              'Padded fall zones everywhere',
              'Auto-belay climbing safety',
              'Waiver required for all jumpers',
            ].map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-center gap-2.5 rounded-xl bg-white p-3 text-sm font-semibold shadow-sm"
                style={{ color: TX.ink }}
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: TX.green }} />
                {line}
              </motion.li>
            ))}
          </ul>

          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: TX.orange, boxShadow: `0 14px 30px -5px ${TX.orange}80` }}
          >
            Sign Waiver
            <ClipboardCheck className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ShieldArt({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 240 280" width={size} height={size * (280 / 240)} style={{ filter: 'drop-shadow(0 30px 40px rgba(0,156,222,0.4))' }}>
      <defs>
        <linearGradient id="shield-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={TX.blue} />
          <stop offset="100%" stopColor="#0078B0" />
        </linearGradient>
      </defs>
      <path d="M 120 14 L 220 50 L 215 150 Q 215 220 120 266 Q 25 220 25 150 L 20 50 Z" fill="url(#shield-grad)" />
      <path d="M 120 30 L 200 60 L 196 150 Q 196 206 120 246 Q 44 206 44 150 L 40 60 Z" fill={TX.blue} />
      <CheckCircle2 x="60" y="100" width="120" height="120" fill="#fff" strokeWidth="0" />
      {/* Big checkmark */}
      <path d="M 80 142 L 108 170 L 168 110" stroke="#fff" strokeWidth="14" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Star accents */}
      <Star x="180" y="50" width="20" height="20" fill={TX.yellow} />
      <Star x="40" y="180" width="16" height="16" fill={TX.yellow} />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  LOCATION                                                                    */
/* -------------------------------------------------------------------------- */

function LocationSection() {
  return (
    <section id="location" className="relative bg-white py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white" style={{ background: TX.orange }}>
            <MapPin className="h-3 w-3" /> Find Us
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl" style={{ color: TX.ink }}>
            Inside the <span style={{ color: TX.green }}>Heart of</span>
            <span className="block" style={{ color: TX.blue }}>Aspire Park</span>
          </h2>

          <div className="mt-8 space-y-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Trampo+Extreme+Aspire+Park+Doha"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ background: TX.orange }}>
                <MapPin className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-wider text-black/55">Address</div>
                <div className="mt-0.5 font-semibold" style={{ color: TX.ink }}>Aspire Park, Al Waab Street, Doha, Qatar</div>
              </div>
            </a>
            <a
              href={`tel:+97444115060`}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ background: TX.blue }}>
                <Phone className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-wider text-black/55">Call Us</div>
                <div className="mt-0.5 font-semibold" style={{ color: TX.ink }}>+974 4411 5060</div>
              </div>
            </a>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white" style={{ background: TX.green }}>
                <ExternalLink className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-wider text-black/55">Website</div>
                <div className="mt-0.5 font-semibold" style={{ color: TX.ink }}>trampo-qatar.com</div>
              </div>
            </a>
          </div>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Trampo+Extreme+Aspire+Park+Doha"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: TX.orange, boxShadow: `0 14px 30px -5px ${TX.orange}80` }}
          >
            Get Directions
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Live arena preview — replaces the map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <ArenaPreview />
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Live arena preview — a 3D trampoline arena with the Trampo mascot bouncing
 * in the centre, floating foam cubes + balls in the air, a glassy "Open Now"
 * status panel, and operating hours pills. Replaces the previous Qatar map.
 */
function ArenaPreview() {
  return (
    <div className="relative h-full w-full" style={{ perspective: '1200px' }}>
      {/* Glow halo behind */}
      <motion.div
        aria-hidden
        className="absolute inset-6 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${TX.orange}55, transparent 70%)` }}
        animate={{ opacity: [0.55, 0.95, 0.55] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Stage tilt */}
      <div className="relative h-full w-full" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(8deg)' }}>
        {/* Trampoline floor */}
        <div
          className="absolute left-1/2 top-[72%] h-[28%] w-[78%] -translate-x-1/2 -translate-y-1/2"
          style={{ transform: 'translate(-50%, -50%) rotateX(72deg)', transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 rounded-full" style={{ background: TX.orange, boxShadow: `0 0 48px ${TX.orange}cc` }} />
          <div className="absolute inset-3 rounded-full" style={{ background: TX.ink }}>
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="none">
              {[15, 30, 45, 60, 75].map((p) => (
                <line key={`h${p}`} x1="0" y1={p} x2="100" y2={p} stroke={TX.yellow} strokeWidth="0.4" />
              ))}
              {[15, 30, 45, 60, 75].map((p) => (
                <line key={`v${p}`} x1={p} y1="0" x2={p} y2="100" stroke={TX.yellow} strokeWidth="0.4" />
              ))}
            </svg>
          </div>
          {/* Springs */}
          {Array.from({ length: 18 }).map((_, i) => {
            const a = (i / 18) * Math.PI * 2;
            const cx = 50 + Math.cos(a) * 46;
            const cy = 50 + Math.sin(a) * 46;
            return (
              <span
                key={i}
                className="absolute h-1 w-3 rounded-full bg-white"
                style={{ left: `${cx}%`, top: `${cy}%`, transform: `translate(-50%, -50%) rotate(${(a * 180) / Math.PI + 90}deg)` }}
              />
            );
          })}
        </div>

        {/* Trampo mascot bouncing in centre */}
        <motion.img
          src="/sub%20brands/Trampo_extreme/icon_trampo.svg"
          alt="Trampo character"
          draggable={false}
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-32 w-32 -translate-x-1/2 -translate-y-1/2 select-none object-contain md:h-40 md:w-40 lg:h-44 lg:w-44"
          style={{
            transform: 'translate(-50%, -50%) translateZ(60px)',
            filter: 'drop-shadow(0 22px 26px rgba(255,106,57,0.55)) drop-shadow(0 0 28px rgba(255,233,22,0.45))',
          }}
          animate={{ y: ['-50%', 'calc(-50% - 26px)', '-50%', 'calc(-50% - 12px)', '-50%'], rotate: [-6, 6, -6, 6, -6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating foam cubes + balls */}
        {[
          { x: 6,  y: 28, c: TX.blue,   type: 'cube' as const },
          { x: 88, y: 22, c: TX.green,  type: 'ball' as const },
          { x: 10, y: 58, c: TX.purple, type: 'cube' as const, small: true },
          { x: 90, y: 60, c: TX.yellow, type: 'ball' as const },
          { x: 50, y: -2, c: TX.orange, type: 'ball' as const, small: true },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.small ? 26 : 36, height: p.small ? 26 : 36 }}
            animate={{ y: [0, -12, 0], rotate: p.type === 'cube' ? [-10, 10, -10] : [0, 0, 0] }}
            transition={{ duration: 3 + i * 0.3, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {p.type === 'cube' ? (
              <div
                className="h-full w-full rounded-lg"
                style={{
                  background: `linear-gradient(135deg, ${p.c}, ${p.c}cc)`,
                  boxShadow: `0 8px 18px -4px ${p.c}aa, inset 0 1px 0 rgba(255,255,255,0.4)`,
                }}
              />
            ) : (
              <div
                className="h-full w-full rounded-full"
                style={{
                  background: `radial-gradient(circle at 35% 30%, #fff, ${p.c} 60%, ${p.c}cc)`,
                  boxShadow: `0 8px 18px -4px ${p.c}aa`,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Glassy "Open Now" status pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="absolute left-4 top-4 z-30 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xl backdrop-blur-sm"
        style={{ color: TX.ink }}
      >
        <motion.span
          className="grid h-2.5 w-2.5 place-items-center rounded-full"
          style={{ background: TX.green, boxShadow: `0 0 10px ${TX.green}` }}
          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        Open Now
      </motion.div>

      {/* Bottom info panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-2 left-2 right-2 z-30 rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-black/5 backdrop-blur-md"
      >
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { label: 'Sat — Wed', value: '10am–10pm', color: TX.blue },
            { label: 'Thu — Fri', value: '10am–12am', color: TX.orange },
            { label: 'Free', value: 'Parking', color: TX.green },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-[9px] font-bold uppercase tracking-wider text-black/55">{s.label}</div>
              <div className="mt-0.5 text-sm font-extrabold" style={{ color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating energy dots in foreground */}
      {Array.from({ length: 8 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        const colors = [TX.orange, TX.yellow, TX.green, TX.blue];
        return (
          <motion.span
            key={i}
            aria-hidden
            className="pointer-events-none absolute rounded-full"
            style={{
              left: `${r(1) * 100}%`,
              top: `${r(2) * 100}%`,
              width: 4 + r(3) * 4,
              height: 4 + r(3) * 4,
              background: colors[i % colors.length],
              boxShadow: `0 0 8px ${colors[i % colors.length]}`,
            }}
            animate={{ y: [0, -12, 0], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3 + r(4) * 2, delay: r(5) * 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}
    </div>
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
          style={{ background: `linear-gradient(135deg, ${TX.orange} 0%, ${TX.purple} 100%)` }}
        >
          {/* Dot wave pattern */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.7)_1px,_transparent_0)] [background-size:30px_30px]"
          />

          {/* Floating confetti */}
          {[TX.yellow, TX.green, TX.blue, '#fff'].map((c, i) => (
            <motion.div
              key={i}
              aria-hidden
              className="absolute h-3 w-3 rounded-sm"
              style={{
                background: c,
                left: `${10 + i * 22}%`,
                top: `${6 + (i % 2) * 12}%`,
                boxShadow: `0 0 10px ${c}`,
              }}
              animate={{ y: [0, 14, 0], rotate: [0, 180, 0] }}
              transition={{
                duration: 3 + i,
                delay: i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          <div className="relative">
            {/* Trampo Character 05 */}
            <motion.img
              src="/sub%20brands/Trampo_extreme/trampoCharacter%2005.webp"
              alt="Trampo character"
              draggable={false}
              animate={{
                y: [0, -10, 0, -5, 0],
                rotate: [-3, 3, -3, 3, -3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mx-auto mb-6 h-36 w-36 select-none object-contain md:h-44 md:w-44"
              style={{
                filter:
                  'drop-shadow(0 16px 24px rgba(0,0,0,0.45)) drop-shadow(0 0 20px rgba(255,233,22,0.35))',
              }}
            />

            <h2 className="font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Ready to
              <span className="block" style={{ color: TX.yellow }}>
                Bounce?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
              Grab your tickets, sign your waiver, and lace up your jump socks. We'll see you in the arena.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ color: TX.orange }}
              >
                Visit Trampo Qatar
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href="/en/#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white"
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = TX.orange)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                Back to QNTGC
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
