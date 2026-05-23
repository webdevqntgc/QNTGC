'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock,
  Phone,
  Mail,
  Gift,
  Sparkles,
  Star,
  Blocks,
  Rocket,
  Crown,
  Heart,
  Puzzle,
  Bike,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Rondvill brand palette (from the official brand guideline)                 */
/* -------------------------------------------------------------------------- */

const RV = {
  red:    '#AB2328',
  redDk:  '#7C1418',
  beige:  '#C9BA9C',
  beigeL: '#E7DEC9',
  black:  '#1A1714',
  white:  '#FFFFFF',
  grey:   '#8A8580',
};

/* Playful toy-store accent colours */
const TOY = {
  yellow: '#F4B400',
  teal:   '#19A79F',
  blue:   '#2E86DE',
  green:  '#4CAF50',
  orange: '#F46A25',
  pink:   '#E5598C',
};

const CHARS = {
  c1: '/sub%20brands/rondvill/ronbear%201.webp',
  c2: '/sub%20brands/rondvill/ronbear%202.webp',
  c3: '/sub%20brands/rondvill/ronbear%203.webp',
  c4: '/sub%20brands/rondvill/ronbear%204.webp',
  c5: '/sub%20brands/rondvill/ronbear%205.webp',
  c6: '/sub%20brands/rondvill/ronbear%206.webp',
};

const LOGO = '/brands/Rondvill-Logo.svg';

/* -------------------------------------------------------------------------- */

export function RondvillPage() {
  return (
    <main className="overflow-hidden" style={{ background: RV.white, color: RV.black }}>
      <Hero />
      <WhyRondvill />
      <ShopByCategory />
      <MeetRonBears />
      <GiftWrapFun />
      <VisitKatara />
      <FinalCTA />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*  Decorative — fine geometric line motif                                      */
/* -------------------------------------------------------------------------- */

function LineMotif({ color, className }: { color: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden>
      <rect x="14" y="14" width="92" height="92" stroke={color} strokeWidth="1" />
      <rect x="34" y="34" width="52" height="52" stroke={color} strokeWidth="1" />
      <line x1="14" y1="14" x2="34" y2="34" stroke={color} strokeWidth="1" />
      <line x1="106" y1="14" x2="86" y2="34" stroke={color} strokeWidth="1" />
      <line x1="14" y1="106" x2="34" y2="86" stroke={color} strokeWidth="1" />
      <line x1="106" y1="106" x2="86" y2="86" stroke={color} strokeWidth="1" />
    </svg>
  );
}

/* The hero gift reveal — Rondvill gift SVG, large and floating */
function HeroGiftReveal() {
  return (
    <div className="relative mx-auto flex w-full max-w-2xl items-end justify-center" style={{ minHeight: 560 }}>
      {/* Floor shadow */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 bottom-0 -translate-x-1/2 rounded-[50%] blur-2xl"
        style={{ width: 420, height: 60, background: 'rgba(0,0,0,0.45)' }}
        animate={{ scaleX: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* The Rondvill gift box (SVG) */}
      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sub%20brands/rondvill/Ronvilgift.svg"
            alt="Rondvill gift"
            draggable={false}
            className="mx-auto w-full max-w-[34rem] select-none"
            style={{ filter: 'drop-shadow(0 30px 36px rgba(0,0,0,0.5))' }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* Confetti / floating toy dots backdrop */
function PlayDots({ colors }: { colors: string[] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 18 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        const size = 8 + r(3) * 16;
        return (
          <motion.span
            key={i}
            className={i % 2 ? 'absolute rounded-full' : 'absolute rounded-md'}
            style={{
              left: `${r(1) * 100}%`,
              top: `${r(2) * 100}%`,
              width: size,
              height: size,
              background: colors[i % colors.length],
              opacity: 0.5,
            }}
            animate={{ y: [0, -22, 0], rotate: [0, 180, 0] }}
            transition={{ duration: 5 + r(4) * 5, delay: r(5) * 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  HERO                                                                        */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section
      className="relative flex min-h-[92vh] items-center overflow-hidden"
      style={{ background: `radial-gradient(120% 100% at 50% 0%, ${RV.red} 0%, ${RV.redDk} 70%, #5A0F12 100%)` }}
    >
      {/* Architectural panels */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/3" style={{ background: 'rgba(0,0,0,0.18)' }} />
        <div className="absolute right-0 top-0 h-full w-1/4" style={{ background: 'rgba(255,255,255,0.04)' }} />
        <LineMotif color={RV.beige} className="absolute left-[6%] top-[14%] h-28 w-28 opacity-20" />
        <LineMotif color={RV.beige} className="absolute right-[8%] bottom-[16%] h-36 w-36 opacity-15" />
        {/* Floating ribbon strips */}
        {[
          { x: 14, w: 3, h: 220, d: 0 },
          { x: 82, w: 2, h: 300, d: 1 },
          { x: 60, w: 2, h: 160, d: 2 },
        ].map((r, i) => (
          <motion.div
            key={i}
            className="absolute top-0"
            style={{ left: `${r.x}%`, width: r.w, height: r.h, background: `${RV.beige}55` }}
            animate={{ y: [0, 24, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 9 + r.d * 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-12">
        {/* Copy */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Logo */}
            <div className="inline-flex rounded-sm bg-white px-6 py-4 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGO} alt="Rondvill" className="h-12 w-auto md:h-14" draggable={false} />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10" style={{ background: RV.beige }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em]" style={{ color: RV.beige }}>
                A QNTGC Brand · Est. 2023
              </span>
            </div>

            <h1
              className="mt-5 font-display text-6xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl"
              style={{ textShadow: '0 12px 40px rgba(0,0,0,0.4)' }}
            >
              RONDVILL
            </h1>
            <p className="mt-4 font-display text-2xl font-medium tracking-wide md:text-3xl" style={{ color: RV.beige }}>
              A Premium Gift &amp; Toy Destination
            </p>
            <p className="mt-3 font-ar text-xl font-semibold text-white/85 md:text-2xl" dir="rtl" lang="ar">
              وجهة فاخرة للهدايا والألعاب
            </p>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
              Step inside a refined world of toys, gifts, collectibles, and memorable
              family discoveries at Katara Gift Box.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="#categories"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] shadow-xl transition-colors"
                style={{ background: RV.beige, color: RV.black }}
              >
                Discover Rondvill
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#location"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white"
                style={{ borderColor: `${RV.beige}88` }}
                onMouseEnter={(e) => (e.currentTarget.style.color = RV.red)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                Visit Katara Gift Box
                <MapPin className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Gift box bursts open */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative mx-auto flex w-full max-w-md items-center justify-center"
          >
            {/* Spotlight */}
            <motion.div
              aria-hidden
              className="absolute -top-10 h-[120%] w-[85%] blur-3xl"
              style={{ background: `radial-gradient(circle at 50% 25%, ${RV.beige}66, transparent 65%)` }}
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <HeroGiftReveal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  WHY RONDVILL — playful feature cards                                        */
/* -------------------------------------------------------------------------- */

function WhyRondvill() {
  const items = [
    { title: 'Premium Toy Brands', desc: 'Original, hand-picked toys families love.', color: TOY.blue,   Icon: Sparkles },
    { title: 'Free Gift Wrapping', desc: 'Every gift wrapped beautifully, ready to give.', color: RV.red,   Icon: Gift },
    { title: 'At Katara Gift Box', desc: "A magical stop inside Children's Mall, Doha.", color: TOY.teal,  Icon: MapPin },
    { title: 'Loyalty Rewards',    desc: 'Earn rewards every time you play & shop.', color: TOY.orange, Icon: Star },
  ];
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white" style={{ background: RV.red }}>
            <Heart className="h-3 w-3" fill="currentColor" /> Why Families Love Us
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: RV.red }}>
            A Toy Store Full of
            <span className="block" style={{ color: RV.black }}>Happy Surprises</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, color, Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] border p-7 shadow-lg transition-shadow duration-500 hover:shadow-2xl"
              style={{ borderColor: `${color}33`, background: '#fff' }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-15 blur-2xl" style={{ background: color }} />
              <motion.div
                animate={{ y: [0, -7, 0], rotate: [-7, 7, -7] }}
                transition={{ duration: 3.6, delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-5 grid h-16 w-16 place-items-center rounded-2xl text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
              >
                <Icon className="h-8 w-8" strokeWidth={2.3} />
              </motion.div>
              <h3 className="font-display text-lg font-extrabold leading-tight" style={{ color: RV.black }}>{title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: RV.grey }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SHOP BY CATEGORY — colourful toy cards                                      */
/* -------------------------------------------------------------------------- */

function ShopByCategory() {
  const cats = [
    { name: 'Building Blocks', desc: 'Build, stack & create.',        color: RV.red,     Icon: Blocks },
    { name: 'Action Figures',  desc: 'Heroes & adventures await.',    color: TOY.blue,   Icon: Rocket },
    { name: 'Dolls & Playsets',desc: 'Imagine your own little world.',color: TOY.pink,   Icon: Crown },
    { name: 'Plush & Soft Toys',desc:'Cuddly friends for every age.', color: TOY.orange, Icon: Heart },
    { name: 'Games & Puzzles', desc: 'Fun for the whole family.',     color: TOY.teal,   Icon: Puzzle },
    { name: 'Outdoor Play',    desc: 'Ride, run & explore.',          color: TOY.green,  Icon: Bike },
  ];
  return (
    <section id="categories" className="relative overflow-hidden py-20 md:py-28" style={{ background: RV.beigeL }}>
      <PlayDots colors={[RV.red, TOY.yellow, TOY.teal, TOY.blue]} />
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white" style={{ background: TOY.blue }}>
            <Sparkles className="h-3 w-3" /> Shop by Category
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: RV.red }}>
            Pick Your Kind
            <span className="block" style={{ color: RV.black }}>of Play!</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map(({ name, desc, color, Icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] p-7 text-white shadow-xl transition-shadow duration-500 hover:shadow-2xl"
              style={{ background: `linear-gradient(155deg, ${color}, ${color}cc)` }}
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/25 blur-2xl" />
              <div aria-hidden className="absolute -bottom-4 -right-4 h-24 w-24 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.85)_1.5px,_transparent_0)] [background-size:14px_14px]" />
              <div className="relative z-10 flex items-start gap-4">
                <motion.div
                  animate={{ y: [0, -7, 0], rotate: [-8, 8, -8] }}
                  transition={{ duration: 3.6, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white shadow-lg"
                  style={{ color }}
                >
                  <Icon className="h-8 w-8" strokeWidth={2.3} />
                </motion.div>
                <div>
                  <h3 className="font-display text-xl font-extrabold leading-tight">{name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/90">{desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider">
                    Explore <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
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
/*  MEET RON BEARS — mascot showcase                                            */
/* -------------------------------------------------------------------------- */

function MeetRonBears() {
  const bears = [
    { src: CHARS.c2, color: TOY.yellow, delay: 0   },
    { src: CHARS.c3, color: RV.beige,   delay: 0.3 },
    { src: CHARS.c4, color: TOY.teal,   delay: 0.6 },
  ];
  return (
    <section
      className="relative overflow-hidden py-20 text-white md:py-28"
      style={{ background: `radial-gradient(120% 120% at 20% 0%, ${RV.red} 0%, ${RV.redDk} 70%, #5A0F12 100%)` }}
    >
      <PlayDots colors={[TOY.yellow, RV.beige, '#ffffff']} />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
            <Star className="h-3 w-3" fill="currentColor" /> Our Mascots
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Meet the
            <span className="block" style={{ color: RV.beige }}>Ron Bears!</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            The friendly Ron Bears welcome every family into Rondvill — ready to help
            you discover the perfect toy, gift, and play moment.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {bears.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative flex flex-col items-center"
            >
              <div aria-hidden className="absolute bottom-8 h-10 w-44 rounded-full blur-xl" style={{ background: `${b.color}aa` }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src={b.src}
                alt="Ron Bear mascot"
                draggable={false}
                animate={{ y: [0, -20, 0], rotate: [-6, 6, -6] }}
                transition={{ duration: 3.4 + i * 0.4, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-48 w-48 select-none object-contain md:h-56 md:w-56"
                style={{ filter: `drop-shadow(0 18px 24px rgba(0,0,0,0.5)) drop-shadow(0 0 26px ${b.color}70)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  GIFT WRAP FUN — playful gift wrapping banner                                */
/* -------------------------------------------------------------------------- */

function GiftWrapFun() {
  return (
    <section className="relative py-16 md:py-24" style={{ background: RV.white }}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative grid items-center gap-8 overflow-hidden rounded-[2.5rem] p-8 md:grid-cols-12 md:p-12"
          style={{ background: `linear-gradient(120deg, ${TOY.teal} 0%, ${TOY.blue} 100%)` }}
        >
          <PlayDots colors={[TOY.yellow, '#ffffff', RV.beige]} />

          {/* Gift icon planet */}
          <motion.div
            className="relative z-10 flex justify-center md:col-span-3"
            animate={{ y: [0, -14, 0], rotate: [-6, 6, -6] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              className="grid h-32 w-32 place-items-center rounded-3xl shadow-2xl md:h-40 md:w-40"
              style={{ background: `linear-gradient(135deg, ${RV.red}, ${TOY.orange})` }}
            >
              <Gift className="h-16 w-16 text-white md:h-20 md:w-20" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Copy */}
          <div className="relative z-10 text-white md:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] backdrop-blur-sm">
              <Sparkles className="h-3 w-3" /> The Fun Part
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-5xl">
              Every Gift Wrapped
              <span className="block" style={{ color: TOY.yellow }}>With a Smile!</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/90">
              Pick a toy, and we&apos;ll wrap it up in our signature Rondvill style —
              free gift wrapping that makes every surprise extra special.
            </p>
            <motion.a
              href="#location"
              whileHover={{ y: -3 }}
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider shadow-xl"
              style={{ color: TOY.blue }}
            >
              Visit &amp; Discover
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>

          {/* Ron Bear */}
          <div className="relative z-10 flex justify-center md:col-span-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src={CHARS.c5}
              alt="Ron Bear with a gift"
              draggable={false}
              animate={{ y: [0, -16, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="h-44 w-44 select-none object-contain md:h-56 md:w-56"
              style={{ filter: 'drop-shadow(0 22px 26px rgba(0,0,0,0.45))' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  VISIT KATARA — playful location section                                     */
/* -------------------------------------------------------------------------- */

function VisitKatara() {
  const cards = [
    { Icon: MapPin, label: 'Location', lines: ['Katara Gift Box', "Children's Mall, Doha"], color: RV.red },
    { Icon: Clock, label: 'Opening Hours', lines: ['Sat – Thu: 10 AM – 12 AM', 'Friday: 1 PM – 12 AM'], color: TOY.teal },
    { Icon: Phone, label: 'Call Us', lines: ['+974 66360088'], color: TOY.blue },
    { Icon: Mail, label: 'Email', lines: ['online@rondvill.com'], color: TOY.orange },
  ];
  return (
    <section id="location" className="relative overflow-hidden py-20 md:py-28" style={{ background: RV.beigeL }}>
      <PlayDots colors={[RV.red, TOY.yellow, TOY.teal]} />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        {/* Info */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white" style={{ background: RV.red }}>
            <MapPin className="h-3 w-3" /> Come & Play
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: RV.red }}>
            Visit Rondvill at
            <span className="block" style={{ color: RV.black }}>Katara Gift Box</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed" style={{ color: RV.grey }}>
            Bring the whole family for a day of discovery, play, and the perfect gift —
            right inside the Children&apos;s Mall at Katara.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cards.map(({ Icon, label, lines, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border bg-white p-5 shadow-md"
                style={{ borderColor: `${color}33` }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl text-white shadow-md" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
                  <Icon className="h-5 w-5" />
                </span>
                <div className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.18em]" style={{ color }}>{label}</div>
                {lines.map((l) => (
                  <div key={l} className="mt-0.5 text-sm font-bold" style={{ color: RV.black }}>{l}</div>
                ))}
              </motion.div>
            ))}
          </div>

          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Katara+Gift+Box+Doha"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="mt-8 inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl"
            style={{ background: RV.red }}
          >
            Get Directions
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>

        {/* Playful map card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl">
            <div
              className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[2rem]"
              style={{ background: `linear-gradient(150deg, ${RV.red}, ${RV.redDk})` }}
            >
              <div aria-hidden className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:34px_34px]" />

              <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full">
                <path d="M 20 130 Q 70 100 90 70 T 170 30" fill="none" stroke={RV.beige} strokeWidth="3" strokeDasharray="6 5" strokeLinecap="round" />
              </svg>

              <motion.div
                className="absolute left-[50%] top-[36%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                animate={{ y: [-4, -12, -4] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg viewBox="0 0 48 64" width={52} height={68} style={{ filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.4))' }}>
                  <path d="M 24 0 C 12 0, 3 9, 3 21 C 3 38, 24 62, 24 62 C 24 62, 45 38, 45 21 C 45 9, 36 0, 24 0 Z" fill={RV.beige} stroke="#fff" strokeWidth="3" />
                  <circle cx="24" cy="21" r="8" fill={RV.red} />
                </svg>
                <div className="mt-1 rounded-full bg-white px-4 py-1 text-xs font-extrabold uppercase tracking-wide shadow-lg" style={{ color: RV.red }}>
                  Katara
                </div>
              </motion.div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src={CHARS.c6}
                alt=""
                draggable={false}
                className="absolute z-20 h-24 w-24 select-none object-contain md:h-28 md:w-28"
                initial={{ left: '-6%', bottom: '-9%', rotate: -10 }}
                animate={{
                  left: ['-6%', '15%', '35%', '48%'],
                  bottom: ['-9%', '8%', '28%', '42%'],
                  rotate: [-10, 8, -6, 4],
                  scale: [1, 1.08, 1.03, 0.9],
                }}
                transition={{ duration: 4.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                style={{ filter: 'drop-shadow(0 10px 16px rgba(0,0,0,0.4))' }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FINAL CTA — playful                                                         */
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
          style={{ background: `radial-gradient(120% 130% at 80% 0%, ${RV.red} 0%, ${RV.redDk} 65%, #5A0F12 100%)` }}
        >
          <PlayDots colors={[TOY.yellow, RV.beige, '#ffffff', TOY.teal]} />

          {/* Heart Ron Bear flying across */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src={CHARS.c3}
            alt=""
            draggable={false}
            className="pointer-events-none absolute top-8 h-24 w-24 select-none object-contain"
            initial={{ x: '-30%' }}
            animate={{ x: ['-30%', '120%'] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 10px 16px rgba(0,0,0,0.5))' }}
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              <Gift className="h-3 w-3" /> Let&apos;s Play
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Open the Gift.
              <span className="block" style={{ color: RV.beige }}>Discover Rondvill.</span>
            </h2>
            <p className="mt-3 font-ar text-xl font-bold text-white/90 md:text-2xl" dir="rtl" lang="ar">
              افتح الهدية واكتشف روندفيل
            </p>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
              Plan your visit to Katara Gift Box for a day of toys, gifts, and family fun.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=Katara+Gift+Box+Doha"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider shadow-xl"
                style={{ background: RV.beige, color: RV.black }}
              >
                Plan Your Visit
                <MapPin className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="/en/#contact"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-white px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#AB2328]"
              >
                Contact Rondvill
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>

            <div className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/80">
              <span className="flex items-center gap-2"><Phone className="h-4 w-4" style={{ color: RV.beige }} /> +974 66360088</span>
              <span className="flex items-center gap-2"><Mail className="h-4 w-4" style={{ color: RV.beige }} /> online@rondvill.com</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
