'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Heart,
  Sparkles,
  Star,
  Upload,
  Hammer,
  ImageIcon,
  Truck,
  Globe,
  Camera,
  Frame,
  Gift,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  PhotoBrick palette — playful brick colours                                 */
/* -------------------------------------------------------------------------- */

const PB = {
  yellow: '#FFB703',
  red:    '#E63946',
  blue:   '#2196F3',
  green:  '#4CAF50',
  pink:   '#E91E63',
  orange: '#F77F00',
  dark:   '#1F1B24',
  cream:  '#FFF8E7',
  beige:  '#F2E7CF',
};

const PALETTE = [PB.red, PB.yellow, PB.blue, PB.green, PB.pink, PB.orange];

const ASSETS = {
  bricks: '/sub%20brands/photobrick/bricks.svg',
  icon:   '/sub%20brands/photobrick/icon_Photosbrik.svg',
};
const LOGO = '/brands/Photobrick-Logo.svg';
const SITE = 'https://photobrick.com.qa/';

/* -------------------------------------------------------------------------- */
/*  Pixel-brick patterns                                                       */
/* -------------------------------------------------------------------------- */

// 9x8 heart
const HEART: number[][] = [
  [0,1,1,0,0,0,1,1,0],
  [1,1,1,1,0,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,0],
  [0,0,1,1,1,1,1,0,0],
  [0,0,0,1,1,1,0,0,0],
];

// 8x8 star
const STAR_P: number[][] = [
  [0,0,0,1,1,0,0,0],
  [0,0,1,1,1,1,0,0],
  [1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,0],
  [0,1,1,1,1,1,1,0],
  [0,1,1,0,0,1,1,0],
  [0,1,1,0,0,1,1,0],
  [1,1,0,0,0,0,1,1],
];

// 8x8 smile
const SMILE: number[][] = [
  [0,1,1,1,1,1,1,0],
  [1,1,1,1,1,1,1,1],
  [1,0,1,1,1,1,0,1],
  [1,0,1,1,1,1,0,1],
  [1,1,1,1,1,1,1,1],
  [1,1,0,1,1,0,1,1],
  [1,1,1,0,0,1,1,1],
  [0,1,1,1,1,1,1,0],
];

/* -------------------------------------------------------------------------- */

export function PhotoBrickPage() {
  return (
    <main className="overflow-hidden" style={{ background: PB.cream, color: PB.dark }}>
      <Hero />
      <HowItWorks />
      <WhyPhotoBrick />
      <BrickShowcase />
      <GlobalReach />
      <FinalCTA />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*  Brick primitives                                                           */
/* -------------------------------------------------------------------------- */

function Brick({ color, size, delay, studs = true }: { color: string; size: number; delay: number; studs?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.25, y: -14 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.45, delay, ease: [0.34, 1.5, 0.5, 1] }}
      className="relative shrink-0 rounded-[18%]"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(140deg, ${color}, ${color}cc)`,
        boxShadow: `0 ${size * 0.1}px ${size * 0.18}px rgba(0,0,0,0.25), inset 0 ${size * 0.06}px 0 rgba(255,255,255,0.5), inset 0 -${size * 0.08}px 0 rgba(0,0,0,0.18)`,
      }}
    >
      {studs && (
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: size * 0.38,
            height: size * 0.38,
            background: `radial-gradient(circle at 35% 30%, rgba(255,255,255,0.85), ${color})`,
            boxShadow: `inset 0 0 ${size * 0.08}px rgba(0,0,0,0.25)`,
          }}
        />
      )}
    </motion.div>
  );
}

function BrickFrame({
  pattern,
  fg,
  bg = PB.beige,
  brickSize = 26,
  multi = false,
}: {
  pattern: number[][];
  fg: string;
  bg?: string;
  brickSize?: number;
  multi?: boolean;
}) {
  return (
    <div
      className="relative inline-block rounded-[1.25rem] p-3 shadow-2xl"
      style={{ background: PB.dark, boxShadow: '0 24px 40px rgba(0,0,0,0.35), inset 0 0 0 4px rgba(255,255,255,0.05)' }}
    >
      <div
        className="rounded-[0.75rem] p-2"
        style={{ background: '#fff' }}
      >
        <div className="flex flex-col gap-[3px]">
          {pattern.map((row, r) => (
            <div key={r} className="flex gap-[3px]">
              {row.map((cell, c) => {
                const color = cell === 1
                  ? multi ? PALETTE[(r * 3 + c * 5) % PALETTE.length] : fg
                  : bg;
                const delay = ((r + c) * 0.035) + 0.2;
                return <Brick key={c} color={color} size={brickSize} delay={delay} />;
              })}
            </div>
          ))}
        </div>
      </div>
      {/* Brand strip at bottom */}
      <div className="mt-2 flex items-center justify-center gap-2 px-2 pb-1">
        <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-white/70">PhotoBrick</span>
      </div>
    </div>
  );
}

/* Confetti-style floating shapes backdrop */
function FloatingBricks({ count = 16, colors = PALETTE }: { count?: number; colors?: string[] }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        const size = 14 + r(3) * 20;
        const color = colors[i % colors.length];
        return (
          <motion.div
            key={i}
            className="absolute rounded-[22%]"
            style={{
              left: `${r(1) * 100}%`,
              top: `${r(2) * 100}%`,
              width: size,
              height: size,
              background: `linear-gradient(140deg, ${color}, ${color}cc)`,
              boxShadow: `0 4px 8px rgba(0,0,0,0.18), inset 0 2px 0 rgba(255,255,255,0.4)`,
              opacity: 0.7,
            }}
            animate={{ y: [0, -22, 0], rotate: [0, 30, 0] }}
            transition={{ duration: 6 + r(4) * 5, delay: r(5) * 4, repeat: Infinity, ease: 'easeInOut' }}
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
      className="relative overflow-hidden pt-14 pb-24 md:pt-20 md:pb-32"
      style={{ background: `radial-gradient(120% 100% at 20% 0%, ${PB.cream} 0%, ${PB.beige} 100%)` }}
    >
      <FloatingBricks count={22} />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sub%20brands/photobrick/logo_photobric.webp"
              alt="PhotoBrick"
              className="h-16 w-auto md:h-20"
              draggable={false}
            />

            <div className="mt-7 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white" style={{ background: PB.dark }}>
              <Sparkles className="h-3 w-3" style={{ color: PB.yellow }} /> A QNTGC Brand · Since 2018
            </div>

            <h1
              className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl"
              style={{ color: PB.dark }}
            >
              Build Your
              <span className="block" style={{ color: PB.red }}>Memories</span>
              <span className="block" style={{ color: PB.yellow }}>One Brick at a Time.</span>
            </h1>
            <p className="mt-4 font-ar text-2xl font-bold md:text-3xl" dir="rtl" lang="ar" style={{ color: PB.dark }}>
              ابنِ ذكرياتك مكعبًا تلو الآخر
            </p>

            <p className="mt-6 max-w-md text-base leading-relaxed md:text-lg" style={{ color: '#5a544c' }}>
              Turn your favourite photo into a stunning, personalised brick mosaic —
              hand-built, framed, and delivered to your door.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <motion.a
                href={SITE}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl"
                style={{ background: PB.red, boxShadow: `0 14px 30px -8px ${PB.red}` }}
              >
                Build Yours Now
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#how"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-2xl border-2 px-7 py-4 text-sm font-extrabold uppercase tracking-wider transition-colors hover:text-white"
                style={{ borderColor: PB.dark, color: PB.dark }}
                onMouseEnter={(e) => { e.currentTarget.style.background = PB.dark; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                How It Works
                <Hammer className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Animated brick photo */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex w-full max-w-md items-center justify-center"
          >
            {/* Floating PhotoBrick icon character behind frame */}
            <motion.img
              src={ASSETS.icon}
              alt=""
              draggable={false}
              className="absolute -left-10 -top-6 h-32 w-32 select-none object-contain opacity-90 md:h-44 md:w-44"
              animate={{ y: [0, -14, 0], rotate: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ filter: 'drop-shadow(0 14px 22px rgba(0,0,0,0.25))' }}
            />

            {/* Big bricks SVG floating */}
            <motion.img
              src={ASSETS.bricks}
              alt=""
              draggable={false}
              className="absolute -right-8 -bottom-6 h-36 w-36 select-none object-contain md:h-48 md:w-48"
              animate={{ y: [0, -16, 0], rotate: [4, -4, 4] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{ filter: 'drop-shadow(0 14px 22px rgba(0,0,0,0.3))' }}
            />

            {/* Brick frame with heart */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <BrickFrame pattern={HEART} fg={PB.red} brickSize={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  HOW IT WORKS                                                                */
/* -------------------------------------------------------------------------- */

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Upload Your Photo',   desc: 'Pick your favourite picture — pets, family, weddings, milestones.', color: PB.blue,   Icon: Upload },
    { n: '02', title: 'We Pixelize It',      desc: 'Our designers translate your photo into a perfect brick pattern.',   color: PB.yellow, Icon: ImageIcon },
    { n: '03', title: 'Hand-Built in Bricks',desc: 'Skilled hands assemble every brick into your one-of-a-kind mosaic.', color: PB.green,  Icon: Hammer },
    { n: '04', title: 'Framed & Delivered',  desc: 'Wrapped, framed, and shipped to your door — ready to hang.',         color: PB.red,    Icon: Truck },
  ];
  return (
    <section id="how" className="relative overflow-hidden py-20 md:py-28" style={{ background: '#fff' }}>
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white" style={{ background: PB.red }}>
            <Hammer className="h-3 w-3" /> How It Works
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: PB.dark }}>
            From Photo to
            <span className="block" style={{ color: PB.red }}>Brick Masterpiece</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg" style={{ color: '#5a544c' }}>
            Four simple steps — your memory, immortalised in colourful bricks.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ n, title, desc, color, Icon }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] border bg-white p-7 shadow-lg transition-shadow duration-500 hover:shadow-2xl"
              style={{ borderColor: `${color}33` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-15 blur-2xl" style={{ background: color }} />
              <div className="mb-4 flex items-center gap-3">
                <span className="font-display text-4xl font-extrabold" style={{ color: `${color}` }}>{n}</span>
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [-7, 7, -7] }}
                  transition={{ duration: 3.6, delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                  className="ml-auto grid h-12 w-12 place-items-center rounded-2xl text-white shadow-md"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.3} />
                </motion.div>
              </div>
              <h3 className="font-display text-lg font-extrabold leading-tight" style={{ color: PB.dark }}>{title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#5a544c' }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  WHY PHOTOBRICK                                                              */
/* -------------------------------------------------------------------------- */

function WhyPhotoBrick() {
  const items = [
    { title: '100% Personalised', desc: 'Every mosaic is uniquely yours.', color: PB.pink,   Icon: Heart },
    { title: 'Premium Frames',    desc: 'Crafted wood, ready to hang.',    color: PB.yellow, Icon: Frame },
    { title: 'Worldwide Delivery',desc: 'Branches across four continents.',color: PB.blue,   Icon: Globe },
    { title: 'Made with Care',    desc: 'Built brick by brick, by hand.',  color: PB.green,  Icon: Sparkles },
  ];
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: PB.dark, color: '#fff' }}>
      <FloatingBricks count={16} />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
            <Star className="h-3 w-3" fill="currentColor" style={{ color: PB.yellow }} /> Why PhotoBrick
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Memories That
            <span className="block" style={{ color: PB.yellow }}>Last a Lifetime</span>
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
              className="group relative overflow-hidden rounded-[2rem] p-7 shadow-xl"
              style={{ background: `linear-gradient(155deg, ${color}, ${color}cc)` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
              <motion.div
                animate={{ y: [0, -7, 0], rotate: [-8, 8, -8] }}
                transition={{ duration: 3.6, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-lg"
                style={{ color }}
              >
                <Icon className="h-7 w-7" strokeWidth={2.3} />
              </motion.div>
              <h3 className="font-display text-lg font-extrabold leading-tight text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/90">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  BRICK SHOWCASE                                                              */
/* -------------------------------------------------------------------------- */

function BrickShowcase() {
  const showcase = [
    { pattern: HEART,   fg: PB.red,    label: 'Love & Family' },
    { pattern: STAR_P,  fg: PB.yellow, label: 'Stars & Heroes', multi: true },
    { pattern: SMILE,   fg: PB.orange, label: 'Smiles & Joy' },
  ];
  return (
    <section className="relative py-20 md:py-28" style={{ background: PB.cream }}>
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white" style={{ background: PB.blue }}>
            <Camera className="h-3 w-3" /> Showcase
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: PB.dark }}>
            Built from Bricks.
            <span className="block" style={{ color: PB.red }}>Made with Love.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {showcase.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ rotate: -2, y: -6 }}
                transition={{ type: 'spring', stiffness: 200, damping: 14 }}
              >
                <BrickFrame pattern={s.pattern} fg={s.fg} brickSize={22} multi={s.multi} />
              </motion.div>
              <div className="mt-6 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ background: s.fg }} />
                <span className="font-display text-sm font-extrabold uppercase tracking-[0.2em]" style={{ color: PB.dark }}>{s.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  GLOBAL REACH                                                                */
/* -------------------------------------------------------------------------- */

function GlobalReach() {
  const locations = [
    { country: 'Qatar',     flag: '🇶🇦', color: PB.red,    note: 'Home Branch' },
    { country: 'UAE',       flag: '🇦🇪', color: PB.green,  note: 'Across the Gulf' },
    { country: 'USA',       flag: '🇺🇸', color: PB.blue,   note: 'Coast to coast' },
    { country: 'Australia', flag: '🇦🇺', color: PB.yellow, note: 'Down under' },
  ];
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: '#fff' }}>
      <motion.img
        src={ASSETS.bricks}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 opacity-20 md:h-72 md:w-72"
        animate={{ y: [0, -16, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src={ASSETS.icon}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-6 h-52 w-52 opacity-20 md:h-72 md:w-72"
        animate={{ y: [0, -14, 0], rotate: [6, -6, 6] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white" style={{ background: PB.green }}>
            <Globe className="h-3 w-3" /> Worldwide
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: PB.dark }}>
            Across Four
            <span className="block" style={{ color: PB.red }}>Continents</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg" style={{ color: '#5a544c' }}>
            From Doha to Dubai, the US, and Australia — building memories around the world.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map(({ country, flag, color, note }, i) => (
            <motion.div
              key={country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[1.75rem] border bg-white p-6 text-center shadow-lg"
              style={{ borderColor: `${color}33` }}
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-15 blur-2xl" style={{ background: color }} />
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                className="mx-auto grid h-16 w-16 place-items-center rounded-2xl text-3xl shadow-md"
                style={{ background: PB.cream }}
              >
                {flag}
              </motion.div>
              <h3 className="mt-4 font-display text-lg font-extrabold uppercase tracking-tight" style={{ color: PB.dark }}>{country}</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider" style={{ color }}>{note}</p>
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
          style={{ background: `linear-gradient(135deg, ${PB.red} 0%, ${PB.pink} 50%, ${PB.orange} 100%)` }}
        >
          <FloatingBricks count={14} colors={[PB.yellow, '#ffffff', PB.blue, PB.green]} />

          {/* Floating brick illustration */}
          <motion.img
            src={ASSETS.bricks}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 opacity-25 md:h-60 md:w-60"
            animate={{ y: [0, -14, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src={ASSETS.icon}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -left-8 -top-6 h-36 w-36 opacity-30 md:h-48 md:w-48"
            animate={{ y: [0, -12, 0], rotate: [5, -5, 5] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              <Gift className="h-3 w-3" /> Make It Yours
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Turn Your Photo
              <span className="block" style={{ color: PB.yellow }}>Into a Brick Masterpiece</span>
            </h2>
            <p className="mt-3 font-ar text-xl font-bold text-white/90 md:text-2xl" dir="rtl" lang="ar">
              حوّل صورتك إلى تحفة من المكعبات
            </p>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
              The perfect gift for weddings, birthdays, anniversaries — or simply because.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.a
                href={SITE}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider shadow-xl"
                style={{ color: PB.red }}
              >
                Build Yours Now
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="/en/#contact"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-white px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-white"
                onMouseEnter={(e) => (e.currentTarget.style.color = PB.red)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/85">
              <span className="flex items-center gap-2"><Globe className="h-4 w-4" style={{ color: PB.yellow }} /> photobrick.com.qa</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" style={{ color: PB.yellow }} /> Qatar · UAE · USA · Australia</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
