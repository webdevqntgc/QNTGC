'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Star,
  Shield,
  Users,
  Compass,
  Heart,
  Sparkles,
  Trophy,
  Trees,
  PartyPopper,
  Eye,
  Target,
  Instagram,
  Facebook,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*  West Fun brand palette                                                      */
/* -------------------------------------------------------------------------- */

const WF = {
  jungle:    '#39451C',  // deep jungle green
  olive:     '#778A2A',
  earth:     '#855114',
  yellow:    '#FFCE0A',
  orange:    '#F66E1A',
  gold:      '#B17E25',
  cream:     '#FFF6E1',
  shadow:    '#1F2811',
};

/* Character path (only one character icon available — used as accent mascot) */
const CHAR = '/sub%20brands/west%20fun/icon_WestFun.svg';

/* -------------------------------------------------------------------------- */

export function WestFunPage() {
  return (
    <main className="bg-white" style={{ color: WF.shadow }}>
      <Hero />
      <PlayfulForest />
      <ExperienceZones />
      <LocationSection />
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
    <section
      className="relative overflow-hidden pt-12 pb-24 text-white md:pt-16 md:pb-32"
      style={{ background: `linear-gradient(180deg, ${WF.jungle} 0%, ${WF.shadow} 100%)` }}
    >
      <JungleBackdrop />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Copy column */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white"
              style={{ background: WF.orange }}
            >
              <Star className="h-3 w-3" fill="currentColor" /> Sub-brand of QNTGC
            </span>

            <h1 className="mt-8 font-display text-5xl font-extrabold leading-[1] tracking-tight md:text-7xl lg:text-8xl">
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${WF.yellow}, ${WF.orange}, ${WF.gold})`,
                  WebkitTextStroke: '0.5px rgba(0,0,0,0.1)',
                }}
              >
                WELCOME TO
              </span>
              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${WF.yellow}, ${WF.orange})`,
                }}
              >
                WEST FUN
              </span>
            </h1>

            <p className="mt-6 font-display text-2xl font-extrabold tracking-tight md:text-3xl" style={{ color: WF.yellow }}>
              TAKE THE WALK TO THE WILD.
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              A nature-inspired entertainment destination where kids, teens, and families
              explore, play, and belong together.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#zones"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: WF.orange, boxShadow: `0 14px 30px -5px ${WF.orange}80` }}
              >
                Explore the Wild
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#location"
                className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderColor: WF.yellow, color: WF.yellow }}
              >
                Visit West Walk
                <MapPin className="h-4 w-4" />
              </a>
            </div>

            {/* Floating feature badges */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {[
                { Icon: Shield, label: 'Safe Play',     color: WF.yellow },
                { Icon: Heart,  label: 'Family Fun',    color: WF.orange },
                { Icon: Compass,label: 'Wild Adventure',color: WF.olive  },
              ].map(({ Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full" style={{ background: color, color: WF.shadow }}>
                    <Icon className="h-3 w-3" />
                  </span>
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Jungle scene with character */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <JungleScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function JungleBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Warm orange spotlight */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full opacity-30 blur-3xl" style={{ background: `${WF.orange}80` }} />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full opacity-30 blur-3xl" style={{ background: `${WF.yellow}40` }} />
      {/* Leaf texture pattern */}
      <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_2px_2px,_rgba(255,206,10,0.4)_1.5px,_transparent_0)] [background-size:42px_42px]" />

      {/* Floating leaves */}
      {Array.from({ length: 14 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${r(1) * 100}%`,
              top: `${r(2) * 100}%`,
              opacity: 0.35 + r(3) * 0.25,
            }}
            animate={{
              y: [0, 30 + r(4) * 30, 0],
              x: [0, 14 - r(5) * 28, 0],
              rotate: [r(1) * 360, r(1) * 360 + 180, r(1) * 360],
            }}
            transition={{
              duration: 12 + r(4) * 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: r(5) * 4,
            }}
          >
            <Leaf size={20 + r(3) * 20} color={i % 2 ? WF.olive : WF.yellow} />
          </motion.div>
        );
      })}

      {/* Fireflies */}
      {Array.from({ length: 24 }).map((_, i) => {
        const seed = (i * 4567 + 8901) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        return (
          <motion.span
            key={`fl-${i}`}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{
              left: `${r(1) * 100}%`,
              top: `${r(2) * 100}%`,
              background: WF.yellow,
              boxShadow: `0 0 8px ${WF.yellow}, 0 0 16px ${WF.yellow}80`,
            }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.6, 0.5] }}
            transition={{ duration: 2 + r(3) * 3, delay: r(4) * 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}

      {/* Mist at the bottom */}
      <svg className="absolute inset-x-0 bottom-0 h-32 w-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
        <motion.path
          d="M 0 100 C 200 60, 400 140, 600 100 S 1000 60, 1200 100 L 1200 200 L 0 200 Z"
          fill="white"
          opacity="0.06"
          animate={{ d: [
            'M 0 100 C 200 60, 400 140, 600 100 S 1000 60, 1200 100 L 1200 200 L 0 200 Z',
            'M 0 80  C 200 140, 400 60, 600 80 S 1000 140, 1200 80 L 1200 200 L 0 200 Z',
            'M 0 100 C 200 60, 400 140, 600 100 S 1000 60, 1200 100 L 1200 200 L 0 200 Z',
          ] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

/* Tiny leaf SVG used in the floating backdrop */
function Leaf({ size, color }: { size: number; color: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size}>
      <path
        d="M 12 2 C 18 4, 22 10, 20 18 C 18 22, 12 22, 8 20 C 4 18, 2 12, 4 6 C 6 3, 9 2, 12 2 Z"
        fill={color}
        opacity="0.85"
      />
      <path d="M 12 2 C 11 10, 11 14, 14 22" stroke={WF.shadow} strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}

function JungleScene() {
  return (
    <div className="relative h-full w-full">
      {/* Warm spotlight behind characters */}
      <motion.div
        aria-hidden
        className="absolute inset-4 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${WF.orange}aa, transparent 70%)` }}
        animate={{ opacity: [0.55, 0.95, 0.55], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Jungle frame — wooden arch */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="wood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={WF.earth} />
            <stop offset="50%" stopColor={WF.gold} />
            <stop offset="100%" stopColor={WF.earth} />
          </linearGradient>
          <linearGradient id="moss" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={WF.olive} />
            <stop offset="100%" stopColor={WF.jungle} />
          </linearGradient>
        </defs>
        {/* Wooden arch frame */}
        <path d="M 28 100 Q 28 30 100 30 Q 172 30 172 100 L 172 180 L 28 180 Z" fill="none" stroke="url(#wood)" strokeWidth="6" />
        {/* Mossy platform */}
        <ellipse cx="100" cy="178" rx="78" ry="10" fill="url(#moss)" />
        <ellipse cx="100" cy="174" rx="78" ry="8" fill={WF.olive} opacity="0.85" />
        {/* Big leaves at top corners */}
        <g transform="translate(20 20)">
          <Leaf size={48} color={WF.olive} />
        </g>
        <g transform="translate(140 30)">
          <Leaf size={42} color={WF.olive} />
        </g>
      </svg>

      {/* Jungle character ensemble — official West Fun characters around the mascot */}
      {/* Giraffe (back left) */}
      <motion.img
        src="/sub%20brands/west%20fun/Jerap.webp"
        alt="Giraffe"
        draggable={false}
        className="pointer-events-none absolute select-none object-contain"
        style={{
          left: '-2%',
          top: '8%',
          width: 96,
          filter: 'drop-shadow(0 12px 16px rgba(0,0,0,0.5))',
        }}
        animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Parrot (top right) */}
      <motion.img
        src="/sub%20brands/west%20fun/parot.webp"
        alt="Parrot"
        draggable={false}
        className="pointer-events-none absolute select-none object-contain"
        style={{
          right: '-2%',
          top: '6%',
          width: 78,
          filter: 'drop-shadow(0 12px 16px rgba(0,0,0,0.5))',
        }}
        animate={{ y: [0, -12, 0], rotate: [-7, 7, -7] }}
        transition={{ duration: 3.5, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Elephant (back right) */}
      <motion.img
        src="/sub%20brands/west%20fun/elepant.webp"
        alt="Elephant"
        draggable={false}
        className="pointer-events-none absolute select-none object-contain"
        style={{
          right: '4%',
          top: '40%',
          width: 92,
          filter: 'drop-shadow(0 12px 16px rgba(0,0,0,0.5))',
        }}
        animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4.8, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* WestFun character — front centre, the brand mascot */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ y: [-8, 0, -8], rotate: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={CHAR}
          alt="West Fun mascot"
          draggable={false}
          className="h-44 w-44 select-none object-contain md:h-56 md:w-56"
          style={{
            filter:
              'drop-shadow(0 22px 28px rgba(0,0,0,0.55)) drop-shadow(0 0 30px rgba(255,206,10,0.5))',
          }}
        />
      </motion.div>

      {/* Tiger cub (front left) */}
      <motion.div
        className="absolute"
        style={{ left: '6%', bottom: '14%', fontSize: 52 }}
        animate={{ y: [0, -6, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 3.8, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        🐯
      </motion.div>

      {/* Lion (front right) */}
      <motion.div
        className="absolute"
        style={{ right: '8%', bottom: '12%', fontSize: 56 }}
        animate={{ y: [0, -7, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 3.6, delay: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        🦁
      </motion.div>

      {/* Monkey peeking from top */}
      <motion.div
        className="absolute"
        style={{ left: '38%', top: '4%', fontSize: 40 }}
        animate={{ y: [0, 4, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 2.8, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
      >
        🐒
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  A PLAYFUL FOREST WORLD                                                     */
/* -------------------------------------------------------------------------- */

function PlayfulForest() {
  const cards = [
    { Icon: Trees,     title: 'Jungle Adventure', body: 'Wander, climb, and discover hidden trails inside our living forest playground.', color: WF.olive,  emoji: '🌿' },
    { Icon: Sparkles,  title: 'Active Play',      body: 'Tunnels, towers, and movement zones designed for kids to burn energy and grow.', color: WF.orange, emoji: '🪢' },
    { Icon: Heart,     title: 'Family Bonding',   body: 'Spaces and moments built so parents and kids can play together — not apart.', color: WF.yellow, emoji: '🧡' },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: WF.cream }}>
      {/* Subtle foliage pattern */}
      <div aria-hidden className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_2px_2px,_rgba(57,69,28,0.6)_2px,_transparent_0)] [background-size:30px_30px]" />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white"
            style={{ background: WF.jungle }}
          >
            <Trees className="h-3 w-3" /> The Forest
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: WF.jungle }}>
            A Playful <span style={{ color: WF.orange }}>Forest World</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: `${WF.shadow}b3` }}>
            Step into a living jungle filled with imagination, movement, and meaningful moments — a place where families
            explore, play actively, and create memories that last.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(({ Icon, title, body, color, emoji }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-card transition-shadow duration-500 hover:shadow-card-hover"
            >
              {/* Coloured corner accent */}
              <div
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: color }}
              />
              <motion.div
                animate={{ rotate: [-4, 4, -4] }}
                transition={{ duration: 3.5, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                className="text-6xl"
              >
                {emoji}
              </motion.div>
              <div className="mt-5 flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg text-white shadow-md" style={{ background: color }}>
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="font-display text-xl font-extrabold uppercase tracking-tight" style={{ color: WF.jungle }}>
                  {title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: `${WF.shadow}b0` }}>{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  EXPERIENCE ZONES                                                           */
/* -------------------------------------------------------------------------- */

function ExperienceZones() {
  const zones = [
    {
      name: 'Wild Play Zone',
      tag:  'Soft + active jungle play',
      body: 'Tunnels, ball pits, soft mountains and themed jungle climbs for under-10s.',
      color: WF.olive,
      emoji: '🌴',
    },
    {
      name: 'Adventure Challenges',
      tag:  'Test your wild side',
      body: 'Obstacle runs, balance bridges and timed quests built for active kids and teens.',
      color: WF.orange,
      emoji: '🪜',
    },
    {
      name: 'Family Moments',
      tag:  'Play together',
      body: 'Photo spots, themed corners and shared games designed for parents AND kids.',
      color: WF.yellow,
      emoji: '📸',
    },
    {
      name: 'Birthday & Events',
      tag:  'Loud, wild, unforgettable',
      body: 'Themed party rooms with full hosts, decoration packages and cake moments.',
      color: WF.gold,
      emoji: '🎉',
    },
  ];

  return (
    <section
      id="zones"
      className="relative overflow-hidden py-20 text-white md:py-28"
      style={{ background: `linear-gradient(180deg, ${WF.jungle} 0%, ${WF.shadow} 100%)` }}
    >
      {/* Background fireflies */}
      {Array.from({ length: 16 }).map((_, i) => {
        const seed = (i * 4567 + 8901) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        return (
          <motion.span
            key={i}
            aria-hidden
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{
              left: `${r(1) * 100}%`,
              top: `${r(2) * 100}%`,
              background: WF.yellow,
              boxShadow: `0 0 8px ${WF.yellow}, 0 0 16px ${WF.yellow}80`,
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2.5 + r(3) * 2, delay: r(4) * 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em]"
            style={{ background: WF.yellow, color: WF.shadow }}
          >
            <Compass className="h-3 w-3" /> Inside the Park
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Experience <span style={{ color: WF.yellow }}>Zones</span>
          </h2>
          <p className="mt-5 text-lg text-white/85">
            Four worlds of jungle play, all under one wild roof at West Walk.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {zones.map((z, i) => (
            <motion.article
              key={z.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-white/8 p-7 ring-1 ring-white/15 backdrop-blur-sm transition-all duration-500 hover:bg-white/12 hover:ring-white/30"
            >
              {/* Coloured glow corner */}
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60" style={{ background: z.color }} />
              {/* Wooden accent left bar */}
              <div className="absolute inset-y-7 left-0 w-1 rounded-r-full" style={{ background: z.color }} />

              <div className="relative ml-3">
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [-5, 5, -5] }}
                  transition={{ duration: 3.5, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-6xl"
                >
                  {z.emoji}
                </motion.div>
                <div className="mt-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: z.color }}>{z.tag}</div>
                  <h3 className="mt-1 font-display text-2xl font-extrabold uppercase tracking-tight">{z.name}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">{z.body}</p>
                  <a
                    href="#location"
                    className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-white"
                    style={{ color: '#fff' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = WF.shadow)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                  >
                    Discover Zone <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  LOCATION                                                                   */
/* -------------------------------------------------------------------------- */

function LocationSection() {
  return (
    <section id="location" className="relative overflow-hidden py-20 md:py-28" style={{ background: WF.cream }}>
      <div aria-hidden className="absolute -right-32 top-10 h-96 w-96 rounded-full opacity-20 blur-3xl" style={{ background: `${WF.orange}80` }} />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Copy */}
        <div className="lg:col-span-6">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white"
            style={{ background: WF.orange }}
          >
            <MapPin className="h-3 w-3" /> Find Us
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight md:text-5xl lg:text-6xl" style={{ color: WF.jungle }}>
            One Wild Stop at
            <span className="block" style={{ color: WF.orange }}>West Walk</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed md:text-lg" style={{ color: `${WF.shadow}b0` }}>
            Right inside one of Qatar's freshest lifestyle destinations — easy to find, easy to love.
          </p>

          {/* Tag pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {['Lifestyle Destination', 'Family Entertainment', 'Adventure Concept'].map((t, i) => (
              <span
                key={t}
                className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: [WF.yellow, WF.olive, WF.orange][i],
                  color: i === 0 ? WF.shadow : '#fff',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=West+Walk+Qatar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: WF.jungle, boxShadow: `0 14px 30px -5px ${WF.jungle}80` }}
          >
            View Location
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Location card + wooden sign */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative lg:col-span-6"
        >
          {/* Building card */}
          <div
            className="relative overflow-hidden rounded-3xl p-6 text-white shadow-2xl md:p-8"
            style={{ background: `linear-gradient(180deg, ${WF.jungle} 0%, ${WF.shadow} 100%)` }}
          >
            <div aria-hidden className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.7)_1px,_transparent_0)] [background-size:24px_24px]" />

            {/* Stylised modern building */}
            <div className="relative">
              <svg viewBox="0 0 320 180" className="h-auto w-full">
                <defs>
                  <linearGradient id="bld-roof" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={WF.gold} />
                    <stop offset="100%" stopColor={WF.earth} />
                  </linearGradient>
                  <linearGradient id="bld-front" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FAEFD5" />
                    <stop offset="100%" stopColor="#D7C29B" />
                  </linearGradient>
                </defs>
                {/* Sky stars */}
                {[40, 100, 220, 280].map((x, i) => (
                  <circle key={x} cx={x} cy={20 + i * 6} r="1.5" fill={WF.yellow} opacity="0.85" />
                ))}
                {/* Building shadow */}
                <ellipse cx="160" cy="172" rx="120" ry="6" fill="rgba(0,0,0,0.35)" />
                {/* Trees behind */}
                <g>
                  <circle cx="40"  cy="120" r="28" fill={WF.olive} />
                  <rect x="36" y="140" width="8" height="20" fill={WF.earth} />
                  <circle cx="290" cy="124" r="32" fill={WF.olive} />
                  <rect x="286" y="148" width="8" height="20" fill={WF.earth} />
                </g>
                {/* Main building body */}
                <rect x="70" y="70"  width="180" height="90" rx="6" fill="url(#bld-front)" />
                {/* Roof */}
                <path d="M 60 70 L 160 30 L 260 70 Z" fill="url(#bld-roof)" />
                {/* Door */}
                <rect x="148" y="118" width="24" height="42" rx="2" fill={WF.jungle} />
                <circle cx="166" cy="140" r="1.5" fill={WF.yellow} />
                {/* Windows */}
                {[88, 124, 196, 232].map((x, i) => (
                  <rect key={x} x={x} y={88 + (i % 2) * 4} width="20" height="22" rx="2" fill={WF.yellow} opacity="0.85" />
                ))}
                {/* West Walk sign */}
                <rect x="110" y="46" width="100" height="14" rx="3" fill={WF.orange} />
                <text x="160" y="56" textAnchor="middle" fontSize="9" fontWeight="800" fill="#fff" letterSpacing="2">WEST WALK</text>
              </svg>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-4">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/55">Address</div>
                <div className="font-bold">West Walk, Qatar</div>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-full" style={{ background: WF.yellow }}>
                <MapPin className="h-5 w-5" style={{ color: WF.shadow }} />
              </div>
            </div>
          </div>

          {/* Wooden sign — "This way to fun!" */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -right-4 -top-6 hidden md:block"
            animate={{ rotate: [-7, -3, -7] }}
          >
            <WoodenSign label="This Way to Fun!" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function WoodenSign({ label }: { label: string }) {
  return (
    <div className="relative">
      <svg viewBox="0 0 180 90" width={180} height={90} style={{ filter: 'drop-shadow(0 10px 16px rgba(0,0,0,0.3))' }}>
        <defs>
          <linearGradient id="ws-wood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={WF.earth} />
            <stop offset="50%" stopColor={WF.gold} />
            <stop offset="100%" stopColor={WF.earth} />
          </linearGradient>
        </defs>
        {/* Sign body */}
        <path d="M 0 18 L 150 18 L 175 45 L 150 72 L 0 72 Z" fill="url(#ws-wood)" stroke={WF.shadow} strokeWidth="2" />
        {/* Plank lines */}
        <line x1="0" y1="35" x2="160" y2="35" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
        <line x1="0" y1="55" x2="160" y2="55" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
        {/* Nails */}
        <circle cx="8" cy="24" r="2" fill={WF.shadow} />
        <circle cx="8" cy="66" r="2" fill={WF.shadow} />
        {/* Label */}
        <text x="76" y="50" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" letterSpacing="0.5" style={{ textTransform: 'uppercase' }}>
          {label}
        </text>
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  VISION & MISSION                                                            */
/* -------------------------------------------------------------------------- */

function VisionMission() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: WF.jungle }}>
      <div aria-hidden className="absolute -left-32 top-10 h-96 w-96 rounded-full opacity-20 blur-3xl" style={{ background: `${WF.yellow}50` }} />
      <div aria-hidden className="absolute -right-32 bottom-10 h-96 w-96 rounded-full opacity-25 blur-3xl" style={{ background: `${WF.orange}70` }} />

      {/* Floating parrot */}
      <motion.img
        src="/sub%20brands/west%20fun/parot.webp"
        alt="Parrot"
        draggable={false}
        className="pointer-events-none absolute hidden select-none object-contain md:block"
        style={{
          right: '6%',
          top: '8%',
          width: 120,
          filter: 'drop-shadow(0 14px 20px rgba(0,0,0,0.4))',
        }}
        animate={{ y: [0, -14, 0], rotate: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-page relative grid gap-6 text-white lg:grid-cols-2">
        {[
          {
            label: 'Our Vision',
            heading: "Qatar's Most-Loved Jungle Park",
            body: "To become Qatar's most loved jungle-inspired family entertainment destination.",
            Icon: Eye,
            bg: WF.olive,
          },
          {
            label: 'Our Mission',
            heading: 'Safe, Active, Unforgettable',
            body: 'Creating safe, active, and unforgettable experiences where every child can laugh, every teen can explore, and every family can connect.',
            Icon: Target,
            bg: WF.orange,
          },
        ].map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative overflow-hidden rounded-3xl p-8 ring-1 ring-white/15 md:p-10"
            style={{ background: c.bg }}
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <c.Icon className="h-6 w-6" style={{ color: WF.yellow }} />
              </div>
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: WF.yellow }}>
                {c.label}
              </div>
              <h3 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl">{c.heading}</h3>
              <p className="mt-5 text-base leading-relaxed text-white/90 md:text-lg">{c.body}</p>
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
    { Icon: Shield,      title: 'Safety First',          body: 'Every climb, slide and corner engineered with kids in mind.', color: WF.orange },
    { Icon: Users,       title: 'Inclusive Play',         body: 'A space that welcomes every child, every age, every story.', color: WF.olive },
    { Icon: Compass,     title: 'Adventure & Curiosity',  body: 'Spaces that ask kids to wander, climb and try something new.', color: WF.yellow },
    { Icon: Heart,       title: 'Family Togetherness',     body: 'Activities designed for parents and kids — not parallel play.', color: WF.gold },
    { Icon: Sparkles,    title: 'Active Fun',              body: 'Movement-first play that swaps screens for jungle adventure.', color: WF.orange },
    { Icon: Trophy,      title: 'Memorable Experiences',   body: 'The moments families talk about long after they leave.',     color: WF.olive },
  ];

  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white"
            style={{ background: WF.jungle }}
          >
            <Star className="h-3 w-3" fill="currentColor" /> What We Stand For
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: WF.jungle }}>
            Our <span style={{ color: WF.orange }}>Values</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ Icon, title, body, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-black/8 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" style={{ background: color }} />
              <div className="relative">
                <div
                  className="mb-4 grid h-12 w-12 place-items-center rounded-xl text-white shadow-md transition-transform duration-300 group-hover:scale-110"
                  style={{ background: color, boxShadow: `0 8px 20px -4px ${color}aa` }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-extrabold uppercase tracking-tight" style={{ color: WF.jungle }}>{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: `${WF.shadow}aa` }}>{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FINAL CTA — Step into the wild side of fun                                  */
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
          style={{ background: `linear-gradient(135deg, ${WF.jungle} 0%, ${WF.shadow} 100%)` }}
        >
          {/* Fireflies inside the panel */}
          {Array.from({ length: 16 }).map((_, i) => {
            const seed = (i * 7919 + 1597) % 233280;
            const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
            return (
              <motion.span
                key={i}
                aria-hidden
                className="absolute h-1.5 w-1.5 rounded-full"
                style={{
                  left: `${r(1) * 100}%`,
                  top: `${r(2) * 100}%`,
                  background: WF.yellow,
                  boxShadow: `0 0 8px ${WF.yellow}, 0 0 16px ${WF.yellow}80`,
                }}
                animate={{ opacity: [0, 1, 0], scale: [0.6, 1.5, 0.6] }}
                transition={{ duration: 2.4 + r(3) * 2, delay: r(4) * 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            );
          })}

          {/* Hanging monkey from a vine — top right */}
          <motion.div
            className="pointer-events-none absolute right-6 top-0 hidden md:block"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Vine */}
            <div className="mx-auto h-20 w-1 rounded-full" style={{ background: WF.olive }} />
            {/* Monkey */}
            <motion.div
              className="text-5xl md:text-6xl"
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top center' }}
            >
              🐒
            </motion.div>
          </motion.div>

          {/* Leaf accents on the panel corners */}
          <div aria-hidden className="absolute -left-2 -top-2 opacity-60">
            <Leaf size={56} color={WF.olive} />
          </div>
          <div aria-hidden className="absolute -bottom-2 -left-8 opacity-50">
            <Leaf size={64} color={WF.olive} />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
              <PartyPopper className="h-3 w-3" /> Ready to Roar
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Step Into the
              <span className="block" style={{ color: WF.yellow }}>Wild Side of Fun</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
              From playful jungle details to family adventures, West Fun turns every visit into a shared memory.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#location"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: WF.orange, boxShadow: `0 14px 30px -5px ${WF.orange}80` }}
              >
                Plan Your Visit
                <MapPin className="h-4 w-4" />
              </a>
              <a
                href="/en/#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition-all duration-300 hover:border-white hover:bg-white"
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = WF.jungle)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                Contact West Fun
              </a>
            </div>

            {/* Follow on social media */}
            <div className="mt-10">
              <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/65">Follow West Fun</div>
              <div className="mt-3 flex flex-wrap justify-center gap-3">
                <SocialIconButton href="https://www.instagram.com/westfun.qa" type="instagram" hoverColor={WF.jungle} />
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
