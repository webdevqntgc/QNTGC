'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Star,
  Sparkles,
  Heart,
  Users,
  Rocket,
  CalendarDays,
  Clock,
  Phone,
  Bird,
  Leaf,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  Ecolandia brand palette (from the brand guideline)                          */
/* -------------------------------------------------------------------------- */

const EC = {
  purple:    '#A000BC',
  yellow:    '#FFB700',
  pink:      '#FF004E',
  blue:      '#0073B2',
  turquoise: '#00C5B3',
  orange:    '#FF7A00',
  cream:     '#FFF6E6',
  ink:       '#241036',
};

const CHARS = {
  c1: '/sub%20brands/ecolandia/EcolandiaCharacter__1.webp',
  c2: '/sub%20brands/ecolandia/EcolandiaCharacter__2.webp',
  c3: '/sub%20brands/ecolandia/EcolandiaCharacter__3.webp',
  c4: '/sub%20brands/ecolandia/EcolandiaCharacter__4.webp',
};

/* -------------------------------------------------------------------------- */

export function EcolandiaPage() {
  return (
    <main className="bg-white" style={{ color: EC.ink }}>
      <Hero />
      <About />
      <Activities />
      <MascotStory />
      <Gallery />
      <Promotions />
      <VisitSection />
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
      className="relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32"
      style={{ background: `linear-gradient(150deg, ${EC.orange} 0%, ${EC.pink} 55%, ${EC.purple} 100%)` }}
    >
      <PlaygroundBackdrop />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white"
              style={{ background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(8px)' }}
            >
              <Star className="h-3 w-3" fill="currentColor" /> Sub-brand of QNTGC
            </span>

            <div className="mt-6 inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sub brands/ecolandia/eO.png"
                alt="Ecolandia"
                className="h-16 w-auto md:h-20 lg:h-24"
                draggable={false}
              />
            </div>

            <h1 className="mt-8 font-display text-5xl font-extrabold leading-[1] tracking-tight text-white md:text-6xl lg:text-7xl">
              Where Fun
              <span className="block" style={{ color: EC.yellow }}>Takes Flight!</span>
            </h1>
            <p className="mt-3 font-ar text-2xl font-bold text-white/90 md:text-3xl" dir="rtl" lang="ar">
              حيث تنطلق المتعة
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              A colorful family entertainment destination where kids explore, play, laugh,
              and create unforgettable memories.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <motion.a
                href="#activities"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl transition-colors duration-300"
                style={{ background: EC.pink, boxShadow: `0 14px 30px -5px ${EC.pink}aa` }}
                onMouseEnter={(e) => (e.currentTarget.style.background = EC.yellow)}
                onMouseLeave={(e) => (e.currentTarget.style.background = EC.pink)}
              >
                Explore Activities
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#visit"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white"
                onMouseEnter={(e) => (e.currentTarget.style.color = EC.purple)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                Visit Ecolandia
                <MapPin className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bird mascot scene */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            {/* Soft glow */}
            <motion.div
              className="absolute inset-1/4 rounded-full blur-3xl"
              style={{ background: `radial-gradient(circle, ${EC.yellow}cc, transparent 70%)` }}
              animate={{ opacity: [0.5, 0.95, 0.5], scale: [0.95, 1.1, 0.95] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Foam blocks orbiting */}
            {[
              { x: -4, y: 14, c: EC.turquoise, s: 46, rot: -12 },
              { x: 90, y: 8,  c: EC.yellow,    s: 38, rot: 14 },
              { x: 92, y: 74, c: EC.blue,      s: 44, rot: -8 },
              { x: 2,  y: 80, c: EC.purple,    s: 40, rot: 10 },
            ].map((b, i) => (
              <motion.div
                key={i}
                className="absolute rounded-2xl"
                style={{
                  left: `${b.x}%`,
                  top: `${b.y}%`,
                  width: b.s,
                  height: b.s,
                  background: `linear-gradient(135deg, ${b.c}, ${b.c}cc)`,
                  boxShadow: `0 10px 22px -4px ${b.c}aa, inset 0 2px 0 rgba(255,255,255,0.4)`,
                }}
                animate={{ y: [0, -14, 0], rotate: [b.rot - 8, b.rot + 8, b.rot - 8] }}
                transition={{ duration: 3.5 + i, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}

            {/* Main bird mascot — flying with motion trail */}
            <motion.div
              className="absolute inset-0 grid place-items-center"
              animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Motion trail dots */}
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: 10 - i * 2,
                    height: 10 - i * 2,
                    background: EC.yellow,
                    left: `${28 - i * 8}%`,
                    top: `${56 + i * 4}%`,
                    opacity: 0.6 - i * 0.18,
                  }}
                  animate={{ opacity: [0, 0.6 - i * 0.18, 0] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src={CHARS.c1}
                alt="Ecolandia bird mascot"
                draggable={false}
                animate={{ rotate: [-7, 7, -7] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-60 w-60 select-none object-contain md:h-72 md:w-72"
                style={{ filter: 'drop-shadow(0 22px 28px rgba(0,0,0,0.35))' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PlaygroundBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Big soft blobs */}
      <div className="absolute -left-32 top-16 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: `${EC.turquoise}90` }} />
      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full opacity-40 blur-3xl" style={{ background: `${EC.yellow}80` }} />
      {/* Bubble dots */}
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.7)_2px,_transparent_0)] [background-size:46px_46px]" />
      {/* Soft clouds */}
      {[
        { x: 10, y: 12, s: 90 },
        { x: 70, y: 20, s: 70 },
        { x: 40, y: 70, s: 80 },
      ].map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/15 blur-xl"
          style={{ left: `${c.x}%`, top: `${c.y}%`, width: c.s, height: c.s * 0.6 }}
          animate={{ x: [0, 24, 0] }}
          transition={{ duration: 16 + i * 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {/* Bottom wave */}
      <svg className="absolute inset-x-0 bottom-0 h-32 w-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <motion.path
          d="M 0 120 C 240 60, 480 160, 720 110 S 1080 60, 1200 120 L 1200 200 L 0 200 Z"
          fill="white"
          opacity="0.12"
          animate={{ d: [
            'M 0 120 C 240 60, 480 160, 720 110 S 1080 60, 1200 120 L 1200 200 L 0 200 Z',
            'M 0 100 C 240 150, 480 70, 720 120 S 1080 150, 1200 100 L 1200 200 L 0 200 Z',
            'M 0 120 C 240 60, 480 160, 720 110 S 1080 60, 1200 120 L 1200 200 L 0 200 Z',
          ] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  ABOUT                                                                      */
/* -------------------------------------------------------------------------- */

function About() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: `${EC.turquoise}1a` }}>
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white"
            style={{ background: EC.turquoise }}
          >
            <Leaf className="h-3 w-3" /> Our World
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: EC.purple }}>
            Welcome to
            <span className="block" style={{ color: EC.pink }}>Ecolandia</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: `${EC.ink}c0` }}>
            Ecolandia is a playful entertainment space designed for children and families
            to enjoy active fun in a safe, colorful, and welcoming environment.
          </p>
          <motion.a
            href="#activities"
            whileHover={{ y: -3 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg transition-all duration-300"
            style={{ background: EC.purple, boxShadow: `0 14px 30px -5px ${EC.purple}80` }}
          >
            Discover the Fun
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* Layered colorful card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          {/* Back shapes */}
          <div className="absolute -left-6 top-6 h-full w-full rounded-[2.5rem]" style={{ background: EC.yellow }} />
          <div className="absolute left-3 -top-4 h-full w-full rounded-[2.5rem]" style={{ background: EC.turquoise }} />
          {/* Front card */}
          <div
            className="absolute inset-0 grid place-items-center overflow-hidden rounded-[2.5rem] shadow-2xl"
            style={{ background: `linear-gradient(160deg, ${EC.purple}, ${EC.pink})` }}
          >
            <div aria-hidden className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.8)_2px,_transparent_0)] [background-size:30px_30px]" />
            <motion.img
              src={CHARS.c2}
              alt=""
              draggable={false}
              animate={{ y: [0, -14, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-3/4 w-3/4 select-none object-contain"
              style={{ filter: 'drop-shadow(0 18px 24px rgba(0,0,0,0.3))' }}
            />
          </div>
          {/* Peeking bird sticker */}
          <motion.img
            src={CHARS.c3}
            alt=""
            draggable={false}
            className="absolute -bottom-6 -right-6 h-28 w-28 select-none object-contain"
            animate={{ y: [0, -8, 0], rotate: [-8, 8, -8] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 10px 16px rgba(0,0,0,0.3))' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  ACTIVITIES                                                                  */
/* -------------------------------------------------------------------------- */

function Activities() {
  const cards = [
    { name: 'Play Zones',          desc: 'Safe and colorful spaces for kids to move, jump, and explore.',                color: EC.purple,    Icon: Rocket },
    { name: 'Adventure Activities',desc: 'Interactive experiences designed for energy, movement, and imagination.',        color: EC.pink,      Icon: Sparkles },
    { name: 'Family Moments',      desc: 'A welcoming destination for parents and children to enjoy together.',            color: EC.blue,      Icon: Heart },
    { name: 'Weekend Fun',         desc: 'Special promotions, seasonal activities, and exciting family events.',           color: EC.turquoise, Icon: CalendarDays },
  ];

  return (
    <section id="activities" className="relative bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white" style={{ background: EC.pink }}>
            <Star className="h-3 w-3" fill="currentColor" /> Activities
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: EC.purple }}>
            Fun for Every
            <span className="block" style={{ color: EC.pink }}>Little Explorer</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ name, desc, color, Icon }, i) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] p-7 text-white shadow-xl transition-shadow duration-500 hover:shadow-2xl"
              style={{ background: `linear-gradient(150deg, ${color}, ${color}cc)` }}
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/20 blur-2xl" />
              <div aria-hidden className="absolute -bottom-4 -right-4 h-24 w-24 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.8)_1.5px,_transparent_0)] [background-size:14px_14px]" />
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [-6, 6, -6] }}
                  transition={{ duration: 3.5, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-lg"
                  style={{ color }}
                >
                  <Icon className="h-7 w-7" strokeWidth={2.4} />
                </motion.div>
                <h3 className="font-display text-xl font-extrabold leading-tight">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">{desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  MASCOT STORY                                                                */
/* -------------------------------------------------------------------------- */

function MascotStory() {
  const birds = [
    { src: CHARS.c2, color: EC.purple,      delay: 0   },
    { src: CHARS.c4, color: EC.purple,    delay: 0.3 },
    { src: CHARS.c3, color: EC.orange,    delay: 0.6 },
  ];
  return (
    <section
      className="relative overflow-hidden py-20 text-white md:py-28"
      style={{ background: `linear-gradient(160deg, ${EC.purple} 0%, ${EC.blue} 100%)` }}
    >
      {/* Stars + dots */}
      {Array.from({ length: 22 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        const colors = [EC.yellow, '#fff', EC.turquoise];
        return (
          <motion.span
            key={i}
            aria-hidden
            className="absolute rounded-full"
            style={{
              left: `${r(1) * 100}%`,
              top: `${r(2) * 100}%`,
              width: 4 + r(3) * 5,
              height: 4 + r(3) * 5,
              background: colors[i % colors.length],
              boxShadow: `0 0 10px ${colors[i % colors.length]}`,
            }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
            transition={{ duration: 2.5 + r(4) * 2, delay: r(5) * 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
            <Bird className="h-3 w-3" /> Our Mascots
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Meet the
            <span className="block" style={{ color: EC.yellow }}>Ecolandia Birds</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
            Our cheerful little birds guide children through a world full of movement,
            color, laughter, and imagination.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {birds.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative flex flex-col items-center"
            >
              {/* Glow platform */}
              <div
                aria-hidden
                className="absolute bottom-8 h-10 w-40 rounded-full blur-xl"
                style={{ background: `${b.color}aa` }}
              />
              <motion.img
                src={b.src}
                alt="Ecolandia bird"
                draggable={false}
                animate={{ y: [0, -18, 0], rotate: [-6, 6, -6] }}
                transition={{ duration: 3 + i * 0.4, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-44 w-44 select-none object-contain md:h-52 md:w-52"
                style={{ filter: `drop-shadow(0 16px 22px rgba(0,0,0,0.4)) drop-shadow(0 0 24px ${b.color}80)` }}
              />
              {/* Tiny orbiting stars */}
              {[0, 1].map((s) => (
                <motion.span
                  key={s}
                  className="absolute h-2 w-2 rounded-full"
                  style={{ background: EC.yellow, top: `${20 + s * 30}%`, left: `${s ? 78 : 16}%` }}
                  animate={{ scale: [0.5, 1.4, 0.5], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, delay: s * 0.6, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  GALLERY                                                                     */
/* -------------------------------------------------------------------------- */

function Gallery() {
  const tiles = [
    { label: 'Play',     color: EC.purple,    span: 'sm:row-span-2' },
    { label: 'Explore',  color: EC.yellow },
    { label: 'Laugh',    color: EC.pink },
    { label: 'Fly',      color: EC.turquoise },
    { label: 'Discover', color: EC.blue },
  ];

  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white" style={{ background: EC.blue }}>
            <Sparkles className="h-3 w-3" /> The Experience
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: EC.purple }}>
            A World Bursting <span style={{ color: EC.pink }}>With Color</span>
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-4 sm:grid-cols-3 md:auto-rows-[180px]">
          {tiles.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className={`group relative grid place-items-center overflow-hidden rounded-[1.75rem] shadow-lg ${t.span ?? ''}`}
              style={{ background: `linear-gradient(150deg, ${t.color}, ${t.color}cc)` }}
            >
              <div aria-hidden className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.8)_2px,_transparent_0)] [background-size:26px_26px]" />
              {/* Soft blobs */}
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-xl" />
              {/* Sticker label */}
              <span className="relative rounded-full bg-white px-5 py-2 font-display text-lg font-extrabold uppercase tracking-wide shadow-md transition-transform duration-300 group-hover:scale-110" style={{ color: t.color }}>
                {t.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  PROMOTIONS                                                                  */
/* -------------------------------------------------------------------------- */

function Promotions() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: EC.orange }}>
      <div aria-hidden className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_2px_2px,_rgba(0,0,0,0.5)_2px,_transparent_0)] [background-size:36px_36px]" />
      <div aria-hidden className="absolute -left-24 top-10 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: EC.yellow }} />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        <div className="text-black">
          <span className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white">
            <CalendarDays className="h-3 w-3" /> Promotions
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Weekend Fun
            <span className="block" style={{ color: EC.pink }}>is Calling!</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-black/80">
            Join us for exciting activities, family moments, and colorful adventures at Ecolandia.
          </p>
          <motion.a
            href="#visit"
            whileHover={{ y: -3 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg transition-transform duration-300"
          >
            View Offers
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>

        {/* Notification-style card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* Phone-notification card */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-3xl bg-white/95 p-5 shadow-2xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              {/* App icon — bird */}
              <div
                className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-md"
                style={{ background: `linear-gradient(135deg, ${EC.pink}, ${EC.purple})` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icon_Ecolandia.svg" alt="" className="h-8 w-8 object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-extrabold" style={{ color: EC.purple }}>Ecolandia</span>
                  <span className="text-[11px] font-semibold text-black/45">5:00 PM</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-black/70">
                  This weekend only, we're offering a special promotion on all activities. 🎉
                </p>
              </div>
            </div>
          </motion.div>

          {/* Floating bird peeking */}
          <motion.img
            src={CHARS.c1}
            alt=""
            draggable={false}
            className="absolute -right-8 -top-12 h-28 w-28 select-none object-contain"
            animate={{ y: [0, -10, 0], rotate: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 12px 18px rgba(0,0,0,0.3))' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  VISIT SECTION                                                               */
/* -------------------------------------------------------------------------- */

function VisitSection() {
  return (
    <section
      id="visit"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: `linear-gradient(160deg, ${EC.turquoise} 0%, ${EC.blue} 100%)` }}
    >
      <div aria-hidden className="absolute -right-24 top-10 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: EC.yellow }} />
      <div aria-hidden className="absolute -left-24 bottom-10 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: EC.pink }} />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] backdrop-blur-sm">
            <MapPin className="h-3 w-3" /> Visit Us
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Plan Your Visit
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">
            Bring your family and let your children discover a world where fun takes flight.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-white/12 p-4 backdrop-blur-sm">
              <span className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: EC.yellow, color: EC.ink }}>
                <Clock className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">Open Daily</div>
                <div className="text-sm font-bold">10:00 AM — 10:00 PM</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/12 p-4 backdrop-blur-sm">
              <span className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: EC.pink }}>
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">Location</div>
                <div className="text-sm font-bold">Doha, Qatar</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="/en/#contact"
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg transition-all duration-300"
              style={{ background: EC.pink, boxShadow: `0 14px 30px -5px ${EC.pink}aa` }}
            >
              Contact Us
              <Phone className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Ecolandia+Qatar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white"
              onMouseEnter={(e) => (e.currentTarget.style.color = EC.blue)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
            >
              Get Directions
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>

        {/* Map-style card */}
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
      style={{ background: `linear-gradient(150deg, ${EC.yellow}, ${EC.orange})` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:34px_34px]"
      />

      {/* Route line */}
      <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full">
        <path
          d="M 20 130 Q 70 100 90 70 T 170 30"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeDasharray="6 5"
          strokeLinecap="round"
        />
      </svg>

      {/* Pin + Pearl Qatar label */}
      <motion.div
        className="absolute left-[50%] top-[38%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
        animate={{ y: [-4, -12, -4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 48 64"
          width={52}
          height={68}
          style={{ filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.35))" }}
        >
          <path
            d="M 24 0 C 12 0, 3 9, 3 21 C 3 38, 24 62, 24 62 C 24 62, 45 38, 45 21 C 45 9, 36 0, 24 0 Z"
            fill={EC.pink}
            stroke="#fff"
            strokeWidth="3"
          />
          <circle cx="24" cy="21" r="8" fill="#fff" />
        </svg>

        <div className="mt-1 rounded-full bg-white px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-900 shadow-lg">
          Pearl Qatar
        </div>
      </motion.div>

      {/* Flying bird sticker */}
      <motion.img
        src={CHARS.c4}
        alt=""
        draggable={false}
        className="absolute z-20 h-24 w-24 select-none object-contain md:h-28 md:w-28"
        initial={{
          left: "-6%",
          bottom: "-9%",
          rotate: -10,
          scale: 1,
        }}
        animate={{
          left: ["-6%", "15%", "35%", "48%"],
          bottom: ["-9%", "8%", "28%", "42%"],
          rotate: [-10, 8, -6, 4],
          scale: [1, 1.08, 1.03, 0.9],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{
          filter: "drop-shadow(0 10px 16px rgba(0,0,0,0.3))",
        }}
      />
    </div>
  </div>
</motion.div>
 </div>      // container-page grid
</section>  // section
);          // return
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
          style={{ background: `linear-gradient(135deg, ${EC.purple} 0%, ${EC.pink} 50%, ${EC.orange} 100%)` }}
        >
          <div aria-hidden className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.8)_2px,_transparent_0)] [background-size:34px_34px]" />

          {/* Confetti */}
          {[EC.yellow, EC.turquoise, '#fff', EC.blue].map((c, i) => (
            <motion.div
              key={i}
              aria-hidden
              className="absolute h-3 w-3 rounded-sm"
              style={{ background: c, left: `${12 + i * 22}%`, top: `${8 + (i % 2) * 10}%`, boxShadow: `0 0 10px ${c}` }}
              animate={{ y: [0, 14, 0], rotate: [0, 180, 0] }}
              transition={{ duration: 3 + i, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          {/* Bird flying across */}
          <motion.img
            src={CHARS.c1}
            alt=""
            draggable={false}
            className="pointer-events-none absolute top-8 h-24 w-24 select-none object-contain"
            initial={{ x: '-30%' }}
            animate={{ x: ['-30%', '120%'] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 10px 16px rgba(0,0,0,0.35))' }}
          />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
              <Bird className="h-3 w-3" /> Let's Go
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Ready to Fly
              <span className="block" style={{ color: EC.yellow }}>Into Fun?</span>
            </h2>
            <p className="mt-3 font-ar text-xl font-bold text-white/90 md:text-2xl" dir="rtl" lang="ar">
              استعدوا لعالم مليء بالمرح
            </p>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
              Visit Ecolandia and make every family day colorful, active, and unforgettable.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.a
                href="#visit"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider shadow-xl transition-transform duration-300"
                style={{ color: EC.pink }}
              >
                Visit Us Today
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="/en/#contact"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white"
                onMouseEnter={(e) => (e.currentTarget.style.color = EC.purple)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
