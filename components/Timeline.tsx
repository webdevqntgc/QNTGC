'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, type MotionValue } from 'framer-motion';
import {
  Rocket,
  ShoppingBag,
  Activity,
  Box,
  Gift,
  Candy,
  Coffee,
  Gamepad2,
  Sparkles,
  Globe2,
  type LucideIcon,
} from 'lucide-react';
import type { Dict, Locale } from '@/lib/i18n';

type CharacterAnim = 'jump' | 'wave' | 'bounce';

interface Milestone {
  year: string;
  brand: string;
  brand_ar: string;
  icon: LucideIcon;
  color: string;
  emoji?: string;              // playful 3D-feel decoration popping out of the card
  character?: string;          // path under /public — renders a floating 3D-feel mascot
  characterAnim?: CharacterAnim;
  logoImg?: string;            // when set, replaces the gradient icon tile with the actual logo
  tileBg?: string;             // if set, the tile uses this brand color with a smaller contained logo (instead of edge-to-edge cover on white)
  specialMug?: boolean;        // renders the animated coffee-mug-with-steam decoration (L'Art du Café)
}

const MILESTONES: Milestone[] = [
  { year: '2003', brand: 'Spacetoys',     brand_ar: 'Spacetoys',                 icon: Rocket,      color: '#3A86FF', logoImg: '/our%20journey/logo_space%20toys.webp', character: '/icon_SpaceToys.svg', characterAnim: 'jump' },
  { year: '2006', brand: 'QNTGC',         brand_ar: 'المجموعة القطرية الوطنية',  icon: Rocket,      color: '#B01117', logoImg: '/our%20journey/logo_qntgc.webp', character: '/icon_QNTGC.svg', characterAnim: 'wave' },
  { year: '2006', brand: 'Kiddy Zone',    brand_ar: 'Kiddy Zone',                icon: Rocket,      color: '#E63946', logoImg: '/our%20journey/logo_Kiddy%20zone.webp', tileBg: '#333b88', character: '/icon_KiddyZone.svg', characterAnim: 'wave' },
  { year: '2015', brand: 'Trampo Extreme',brand_ar: 'Trampo Extreme',            icon: Activity,    color: '#06A77D', logoImg: '/our%20journey/logo_trampoextreme.webp', tileBg: '#f06b3c', character: '/icon_trampo.svg', characterAnim: 'jump' },
  { year: '2018', brand: 'PhotoBrick',    brand_ar: 'PhotoBrick',                icon: Box,         color: '#FFB703', logoImg: '/our%20journey/logo_photobric.webp', character: '/icon_Photosbrik.svg', characterAnim: 'wave' },
  { year: '2023', brand: 'Rondvill',      brand_ar: 'Rondvill',                  icon: Gift,        color: '#9D4EDD', logoImg: '/our%20journey/logo_ronvill.webp', tileBg: '#ac2228', character: '/icon_Ronvill.svg', characterAnim: 'bounce' },
  { year: '2023', brand: 'Candyvill',     brand_ar: 'Candyvill',                 icon: Candy,       color: '#FF6B9D', logoImg: '/our%20journey/logo_%20candyvill.webp', tileBg: '#cb2129', character: '/icon_CandyVill.svg', characterAnim: 'bounce' },
  { year: '2023', brand: 'L ’Art du Café', brand_ar: 'L’Art du Café', icon: Coffee, color: '#7F5539', logoImg: '/our%20journey/logo_L%20art%20du%20cafe.webp', tileBg: '#71cac8', character: "/icon_L'Artducafe.svg", characterAnim: 'bounce' },
  { year: '2025', brand: 'West Fun',      brand_ar: 'West Fun',                  icon: Gamepad2,    color: '#F77F00', logoImg: '/our%20journey/logo_westfun.webp', tileBg: '#38421d', character: '/icon_WestFun.svg', characterAnim: 'wave' },
  { year: '2025', brand: 'Ecolandia',     brand_ar: 'Ecolandia',                 icon: Sparkles,    color: '#52B788', logoImg: '/our%20journey/logo_ecolandia.webp', tileBg: '#ffffff', character: '/icon_Ecolandia.svg', characterAnim: 'bounce' },
];

export function Timeline({ dict, locale }: { dict: Dict; locale?: Locale }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 40%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const pulseTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      id="milestones"
      className="relative overflow-hidden bg-gradient-to-b from-[#000510] via-[#001a44] to-[#000510] py-20 text-white md:py-32"
    >
      <Atmosphere />

      <div className="relative container-page">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow !text-white/80 mb-4 justify-center">{dict.timeline.eyebrow}</span>
          <h2 className="font-display text-display-lg font-bold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(255,42,48,0.25)]">
            {dict.timeline.title}
          </h2>
          <p className="mt-6 text-lg text-white/70">{dict.timeline.subtitle}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto mt-20 max-w-5xl pb-10 md:mt-28">
          {/* MOBILE: straight glowing line */}
          <div
            className="absolute left-5 top-0 h-full w-px -translate-x-1/2 bg-white/10 md:hidden"
            aria-hidden
          />
          <motion.div
            aria-hidden
            className="absolute left-5 top-0 w-[3px] -translate-x-1/2 rounded-full md:hidden"
            style={{
              height: lineHeight,
              background:
                'linear-gradient(to bottom, rgba(176,17,23,0.15), #FF2A30 50%, #FF8A8A)',
              boxShadow:
                '0 0 20px 4px rgba(255,42,48,0.7), 0 0 40px 8px rgba(255,42,48,0.35)',
            }}
          />
          <motion.div
            aria-hidden
            className="absolute left-5 z-20 -translate-x-1/2 -translate-y-1/2 md:hidden"
            style={{ top: pulseTop }}
          >
            <div className="relative grid place-items-center">
              <span className="absolute h-12 w-12 animate-ping rounded-full bg-brand-red/30" />
              <span className="absolute h-7 w-7 rounded-full bg-brand-red/40 blur-md" />
              <span className="relative h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_30px_8px_rgba(255,48,55,0.95)]" />
            </div>
          </motion.div>

          {/* DESKTOP: snake-shaped glowing path that scroll-draws */}
          <SnakePath scrollYProgress={scrollYProgress} />

          {/* Desktop pulse dot riding the snake spine */}
          <motion.div
            aria-hidden
            className="absolute left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block"
            style={{ top: pulseTop }}
          >
            <div className="relative grid place-items-center">
              <span className="absolute h-14 w-14 animate-ping rounded-full bg-brand-red/30" />
              <span className="absolute h-8 w-8 rounded-full bg-brand-red/50 blur-md" />
              <span className="relative h-4 w-4 rounded-full bg-white shadow-[0_0_30px_10px_rgba(255,48,55,0.95)]" />
            </div>
          </motion.div>

          {/* Milestones */}
          <div className="space-y-14 md:space-y-24">
            {MILESTONES.map((m, i) => (
              <MilestoneRow key={`${m.year}-${m.brand}`} milestone={m} index={i} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Milestone row                                                              */
/* -------------------------------------------------------------------------- */

function MilestoneRow({
  milestone,
  index,
  locale,
}: {
  milestone: Milestone;
  index: number;
  locale?: Locale;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const isLeft = index % 2 === 0;
  const Icon = milestone.icon;
  const brand = locale === 'ar' ? milestone.brand_ar : milestone.brand;

  return (
    <div ref={ref} className="relative">
      {/* Floating 3D-feel character mascot (only when defined) */}
      {milestone.character && (
        <Character
          src={milestone.character}
          anim={milestone.characterAnim ?? 'bounce'}
          accent={milestone.color}
          side={isLeft ? 'left' : 'right'}
          inView={inView}
        />
      )}

      {/* Special: animated coffee mug + steam (L'Art du Café only) */}
      {milestone.specialMug && (
        <CoffeeMug accent={milestone.color} side={isLeft ? 'left' : 'right'} inView={inView} />
      )}

      {/* Dot wrapper handles positioning, inner motion handles entry */}
      <div
        className="pointer-events-none absolute z-10 left-5 top-1/2 md:left-1/2"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative grid place-items-center"
        >
          {/* Ping burst on activation */}
          {inView && (
            <motion.span
              className="absolute rounded-full"
              style={{
                width: 40,
                height: 40,
                background: milestone.color,
              }}
              initial={{ scale: 0.5, opacity: 0.7 }}
              animate={{ scale: 2.4, opacity: 0 }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            />
          )}
          {/* Halo */}
          <span
            className="absolute h-7 w-7 rounded-full blur-sm"
            style={{ background: milestone.color, opacity: 0.55 }}
          />
          {/* Solid */}
          <span
            className="relative h-5 w-5 rounded-full ring-2 ring-white/85"
            style={{
              background: milestone.color,
              boxShadow: `0 0 22px 5px ${milestone.color}`,
            }}
          />
        </motion.div>
      </div>

      {/* Connecting horizontal — desktop only */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 hidden h-px md:block"
        style={{
          width: '3.5rem',
          left: isLeft ? 'auto' : '50%',
          right: isLeft ? '50%' : 'auto',
          background: isLeft
            ? `linear-gradient(to left, ${milestone.color}aa, transparent)`
            : `linear-gradient(to right, ${milestone.color}aa, transparent)`,
          transformOrigin: isLeft ? 'right center' : 'left center',
        }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
      />

      {/* Card column */}
      <div className={`flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
        <motion.div
          initial={{
            opacity: 0,
            x: isLeft ? -60 : 60,
            scale: 0.92,
            rotate: isLeft ? -2 : 2,
          }}
          animate={
            inView
              ? { opacity: 1, x: 0, scale: 1, rotate: 0 }
              : { opacity: 0, x: isLeft ? -60 : 60, scale: 0.92, rotate: isLeft ? -2 : 2 }
          }
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={`ml-14 w-full md:ml-0 md:w-[calc(50%-3.5rem)] ${
            isLeft ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
          }`}
        >
          <TiltCard>
            <div
              className="group relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/15 backdrop-blur-xl hover:bg-white/[0.07]"
              style={{
                boxShadow: `0 20px 50px -20px ${milestone.color}40, inset 0 1px 0 rgba(255,255,255,0.08)`,
              }}
            >
              {/* Decorative 3D-feel emoji popping out of the inner-top corner */}
              {milestone.emoji && (
                <motion.div
                  aria-hidden
                  className={`pointer-events-none absolute -top-6 z-30 select-none ${
                    isLeft ? '-right-3 md:-right-4' : '-left-3 md:-left-4'
                  }`}
                  initial={{ opacity: 0, scale: 0, rotate: -25 }}
                  animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.55, duration: 0.7, type: 'spring', stiffness: 220 }}
                >
                  <motion.span
                    animate={{ y: [0, -8, 0], rotate: [-6, 6, -6] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="block text-[3rem] leading-none drop-shadow-[0_10px_22px_rgba(0,0,0,0.55)] md:text-[3.75rem]"
                    style={{ filter: 'drop-shadow(0 0 18px rgba(255,255,255,0.18))' }}
                  >
                    {milestone.emoji}
                  </motion.span>
                </motion.div>
              )}

              <div
                className={`relative z-10 flex items-center gap-5 ${
                  isLeft ? 'md:flex-row-reverse md:text-right' : ''
                }`}
              >
                {/* Icon tile — actual logo image when provided, else gradient + Lucide icon */}
                {milestone.logoImg ? (
                  <motion.div
                    animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl shadow-lg ${milestone.tileBg ? 'grid place-items-center p-2' : ''}`}
                    style={{
                      background: milestone.tileBg ?? '#ffffff',
                      boxShadow: `0 14px 36px -6px ${milestone.color}80, inset 0 1px 0 rgba(255,255,255,0.5)`,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={milestone.logoImg}
                      alt={`${milestone.brand} logo`}
                      className={`block select-none ${milestone.tileBg ? 'h-full w-full object-contain' : 'h-full w-full object-cover'}`}
                      draggable={false}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ y: [0, -6, 0], rotate: [0, 4, -4, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-xl shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}aa)`,
                      boxShadow: `0 14px 36px -6px ${milestone.color}80, inset 0 1px 0 rgba(255,255,255,0.3)`,
                    }}
                  >
                    <Icon className="h-7 w-7 text-white" strokeWidth={2.2} />
                  </motion.div>
                )}

                {/* Year + brand only */}
                <div className="min-w-0">
                  <div
                    className="font-display text-2xl font-bold"
                    style={{
                      color: '#FF2A30',
                      textShadow: '0 0 30px rgba(255,42,48,0.5)',
                    }}
                  >
                    {milestone.year}
                  </div>
                  <div className="font-display text-lg font-bold text-white md:text-xl">{brand}</div>
                </div>
              </div>

              {/* Inner top-light accent */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 30% 0%, ${milestone.color}22, transparent 60%)`,
                }}
              />
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Pieces                                                                     */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  Character mascot                                                            */
/* -------------------------------------------------------------------------- */

function Character({
  src,
  anim,
  accent,
  side,
  inView,
}: {
  src: string;
  anim: CharacterAnim;
  accent: string;
  side: 'left' | 'right';
  inView: boolean;
}) {
  // Three distinct idle motions
  const motions: Record<CharacterAnim, { animate: any; transition: any }> = {
    jump: {
      animate: { y: [0, -22, 0, -10, 0], scale: [1, 1.06, 1, 1.03, 1] },
      transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
    },
    wave: {
      animate: { rotate: [-7, 9, -7, 9, -7], y: [0, -3, 0] },
      transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
    },
    bounce: {
      animate: { y: [0, -14, 0], rotate: [-4, 4, -4] },
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
  };
  const m = motions[anim];

  // Sticks out on the OUTER side of the card on desktop; on mobile, peeks out
  // the right edge for every card (since all cards live right of the timeline)
  const sideClasses =
    side === 'left'
      ? '-right-4 md:right-auto md:-left-24'
      : '-right-4 md:-right-24';

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-1/2 z-30 hidden -translate-y-1/2 md:block ${sideClasses}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.4, y: 30 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.4, y: 30 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Spotlight halo behind character */}
        <motion.span
          className="absolute left-1/2 top-1/2 -z-10 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:h-52 md:w-52"
          style={{ background: `radial-gradient(circle, ${accent}66, transparent 70%)` }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.08, 0.95] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Twinkling sparkles around character */}
        {[
          { x: -28, y: -34, d: 0 },
          { x: 36, y: -24, d: 0.6 },
          { x: 38, y: 28, d: 1.2 },
          { x: -32, y: 24, d: 1.8 },
          { x: 0, y: -50, d: 2.4 },
        ].map((s, i) => (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-white"
            style={{
              transform: `translate(${s.x}px, ${s.y}px)`,
              boxShadow: `0 0 8px 2px ${accent}`,
            }}
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1.4, 0.6] }}
            transition={{ duration: 2.2, delay: s.d, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Character image — wraps a perspective-tilted div so the idle motion
            (rotate/y) doesn't fight with the static 3D rotation */}
        <div
          className="relative"
          style={{
            transform: side === 'left' ? 'perspective(800px) rotateY(8deg)' : 'perspective(800px) rotateY(-8deg)',
          }}
        >
          <motion.img
            src={src}
            alt=""
            draggable={false}
            animate={inView ? m.animate : {}}
            transition={m.transition}
            className="relative h-28 w-28 select-none object-contain md:h-40 md:w-40 lg:h-48 lg:w-48"
            style={{
              filter:
                'drop-shadow(0 14px 18px rgba(0,0,0,0.55)) drop-shadow(0 0 30px rgba(255,255,255,0.15))',
            }}
          />
          {/* Soft elliptical ground shadow */}
          <span
            className="absolute -bottom-1 left-1/2 h-2.5 w-20 -translate-x-1/2 rounded-full bg-black/50 blur-md md:w-28"
          />
        </div>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Animated coffee mug with rising steam — L'Art du Café special              */
/* -------------------------------------------------------------------------- */

function CoffeeMug({
  accent,
  side,
  inView,
}: {
  accent: string;
  side: 'left' | 'right';
  inView: boolean;
}) {
  // Same positioning grammar as the Character mascots
  const sideClasses =
    side === 'left'
      ? '-right-4 md:right-auto md:-left-24'
      : '-right-4 md:-right-24';

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-1/2 z-30 hidden -translate-y-1/2 md:block ${sideClasses}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.55, y: 30 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.55, y: 30 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Warm spotlight halo behind the mug */}
        <motion.span
          className="absolute left-1/2 top-1/2 -z-10 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl md:h-36 md:w-36"
          style={{ background: `radial-gradient(circle, ${accent}55, transparent 70%)` }}
          animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.95, 1.08, 0.95] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* The mug — compact, vertically centred on the card */}
        <motion.svg
          viewBox="0 0 100 100"
          className="relative h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28"
          aria-hidden
          animate={{ y: [0, -4, 0], rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            filter:
              'drop-shadow(0 14px 18px rgba(0,0,0,0.55)) drop-shadow(0 0 22px rgba(255,255,255,0.12))',
          }}
        >
          <defs>
            <linearGradient id="mug-body" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF8F0" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E8DFD2" />
            </linearGradient>
            <linearGradient id="coffee" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5C3317" />
              <stop offset="100%" stopColor="#3B2415" />
            </linearGradient>
          </defs>

          {/* Saucer */}
          <ellipse cx="50" cy="86" rx="38" ry="5" fill={accent} opacity="0.9" />
          <ellipse cx="50" cy="85" rx="38" ry="3" fill="#FFFFFF" opacity="0.4" />

          {/* Handle */}
          <path d="M 76 44 C 96 44, 96 72, 76 72" fill="none" stroke={accent} strokeWidth="6" strokeLinecap="round" />
          <path d="M 76 48 C 90 48, 90 68, 76 68" fill="none" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />

          {/* Mug body */}
          <rect x="20" y="32" width="56" height="50" rx="6" fill="url(#mug-body)" stroke={accent} strokeWidth="3" />

          {/* Coffee surface */}
          <ellipse cx="48" cy="34" rx="26" ry="4" fill="url(#coffee)" />
          <ellipse cx="48" cy="34" rx="22" ry="2.5" fill="#5C3317" />
          <ellipse cx="42" cy="33" rx="6" ry="1" fill="rgba(255,255,255,0.18)" />

          {/* Highlight on body */}
          <rect x="26" y="38" width="3" height="40" rx="1.5" fill="rgba(255,255,255,0.6)" />
        </motion.svg>

        {/* Realistic cloudy steam — rises ABOVE the mug, drifts and sways */}
        <SteamCloud />
      </motion.div>
    </div>
  );
}

/**
 * Soft cloud-like steam: a swarm of small blurred wisps drifting upward with
 * slight horizontal sway, fading in/out as they rise — no rigid SVG paths.
 */
function SteamCloud() {
  // Deterministic wisp configuration so the swarm is reproducible (no SSR jitter)
  const wisps = [
    { x: 38, size: 16, delay: 0.0, dur: 4.0, sway: -10, scale: [0.4, 1.0, 1.5] as [number, number, number], travel: -90, opacity: 0.55 },
    { x: 46, size: 14, delay: 0.5, dur: 4.4, sway:  12, scale: [0.5, 1.1, 1.6] as [number, number, number], travel: -100, opacity: 0.6 },
    { x: 52, size: 18, delay: 1.0, dur: 3.8, sway:  -8, scale: [0.4, 1.0, 1.4] as [number, number, number], travel: -85, opacity: 0.5 },
    { x: 42, size: 12, delay: 1.5, dur: 4.6, sway:  14, scale: [0.5, 1.0, 1.5] as [number, number, number], travel: -95, opacity: 0.55 },
    { x: 50, size: 20, delay: 2.0, dur: 4.2, sway: -12, scale: [0.4, 1.2, 1.7] as [number, number, number], travel: -100, opacity: 0.65 },
    { x: 36, size: 11, delay: 2.5, dur: 4.0, sway:  10, scale: [0.5, 1.0, 1.4] as [number, number, number], travel: -90, opacity: 0.5 },
    { x: 56, size: 15, delay: 3.0, dur: 4.4, sway: -10, scale: [0.4, 1.1, 1.5] as [number, number, number], travel: -95, opacity: 0.55 },
    { x: 44, size: 13, delay: 3.5, dur: 4.0, sway:  12, scale: [0.5, 1.0, 1.6] as [number, number, number], travel: -90, opacity: 0.5 },
  ];

  return (
    <div className="pointer-events-none absolute bottom-[58%] left-0 right-0 h-32 md:h-44 lg:h-52">
      {wisps.map((w, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${w.x}%`,
            bottom: 0,
            width: w.size,
            height: w.size,
            filter: 'blur(7px)',
            mixBlendMode: 'screen',
          }}
          initial={{ opacity: 0, y: 0, x: 0, scale: w.scale[0] }}
          animate={{
            opacity: [0, w.opacity, w.opacity * 0.6, 0],
            y: [0, w.travel * 0.4, w.travel * 0.75, w.travel],
            x: [0, w.sway * 0.5, w.sway, w.sway * 1.5],
            scale: [w.scale[0], w.scale[1], w.scale[2], w.scale[2] + 0.2],
          }}
          transition={{
            duration: w.dur,
            delay: w.delay,
            repeat: Infinity,
            ease: 'easeOut',
            times: [0, 0.3, 0.7, 1],
          }}
        />
      ))}
    </div>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * 5}deg) rotateX(${(0.5 - y) * 5}deg)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (el) el.style.transform = '';
      }}
      className="transition-transform duration-300 will-change-transform"
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Snake-shaped scroll-driven SVG path (desktop only)                          */
/* -------------------------------------------------------------------------- */

/**
 * Vertical snaking path that weaves between the milestone dots.
 * 10 anchor points at y = 5, 15, 25, …, 95 (all on the spine x = 50).
 * 9 quadratic Bezier control points alternate left/right (x = 30 and x = 70)
 * to create the wave between dots.
 */
const SNAKE_PATH =
  'M 50 5 Q 30 10 50 15 Q 70 20 50 25 Q 30 30 50 35 Q 70 40 50 45 Q 30 50 50 55 Q 70 60 50 65 Q 30 70 50 75 Q 70 80 50 85 Q 30 90 50 95';

function SnakePath({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="snakeStroke" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FF8A8A" />
          <stop offset="50%" stopColor="#FF2A30" />
          <stop offset="100%" stopColor="#FF8A8A" />
        </linearGradient>
      </defs>

      {/* Dim base — full path always visible at low contrast */}
      <path
        d={SNAKE_PATH}
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />

      {/* Wide blurred glow (drawn progressively) */}
      <motion.path
        d={SNAKE_PATH}
        stroke="rgba(255,42,48,0.55)"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        style={{ pathLength: scrollYProgress, filter: 'blur(5px)' }}
      />

      {/* Crisp foreground stroke (drawn progressively) */}
      <motion.path
        d={SNAKE_PATH}
        stroke="url(#snakeStroke)"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        style={{ pathLength: scrollYProgress }}
      />
    </svg>
  );
}

function Atmosphere() {
  return (
    <>
      {/* Ambient glows */}
      <div className="absolute -top-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-brand-red/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-[30rem] w-[30rem] rounded-full bg-brand-navy-light/30 blur-[120px]" />

      {/* Light ray */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(176,17,23,0.05) 50%, rgba(255,255,255,0) 100%)',
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:60px_60px]"
      />

      {/* Particles */}
      <Particles count={36} />

      {/* Faint floating playful icons */}
      <FloatingIcons />
    </>
  );
}

function Particles({ count }: { count: number }) {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        const left = r(1) * 100;
        const top = r(2) * 100;
        const size = 1 + r(3) * 2.5;
        const dur = 6 + r(4) * 8;
        const delay = r(5) * 4;
        const isRed = i % 4 === 0;
        return (
          <motion.span
            key={i}
            className={`absolute rounded-full ${isRed ? 'bg-brand-red' : 'bg-white/60'}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              boxShadow: isRed ? '0 0 8px rgba(255,42,48,0.7)' : '0 0 6px rgba(255,255,255,0.6)',
            }}
            animate={{ y: [0, -12, 0], opacity: [0.2, 0.85, 0.2] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}
    </div>
  );
}

function FloatingIcons() {
  // Tiny faint silhouettes drifting in the background
  const items = [
    { Icon: Box,        x: 8,  y: 12, size: 28 },
    { Icon: Candy,      x: 92, y: 18, size: 24 },
    { Icon: Coffee,     x: 6,  y: 70, size: 26 },
    { Icon: Rocket,     x: 90, y: 65, size: 30 },
    { Icon: Gamepad2,   x: 16, y: 40, size: 24 },
    { Icon: Sparkles,   x: 84, y: 42, size: 22 },
  ];
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {items.map(({ Icon, x, y, size }, i) => (
        <motion.div
          key={i}
          className="absolute text-white/[0.05]"
          style={{ left: `${x}%`, top: `${y}%` }}
          animate={{ y: [0, -10, 0], rotate: [0, 6, -6, 0] }}
          transition={{ duration: 10 + i, delay: i * 0.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon style={{ width: size, height: size }} strokeWidth={1.4} />
        </motion.div>
      ))}
    </div>
  );
}