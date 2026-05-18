'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Dict } from '@/lib/i18n';

/* -------------------------------------------------------------------------- */
/*  All coordinates are % of the image container. Tweak as needed —            */
/*  the dev server hot-reloads.                                                */
/* -------------------------------------------------------------------------- */

interface Branch {
  id: string;
  name: string;
  x: number;
  y: number;
}

// All pins safely inside the Qatar map silhouette, clustered in the Doha area
const BRANCHES: Record<string, Branch> = {
  darsalam:    { id: 'darsalam',    name: 'Dar Al Salam Mall',  x: 55, y: 48 },
  ezdan:       { id: 'ezdan',       name: 'Ezdan Mall',         x: 63, y: 64 },
  hyatt:       { id: 'hyatt',       name: 'Hyatt Plaza',        x: 53, y: 56 },
  landmark:    { id: 'landmark',    name: 'Landmark Mall',      x: 58, y: 44 },
  dfc:         { id: 'dfc',         name: 'Doha Festival City', x: 52, y: 30 },
  gulf:        { id: 'gulf',        name: 'Gulf Mall',          x: 63, y: 50 },
  vendome:     { id: 'vendome',     name: 'Place Vendome',      x: 52, y: 35 },
  boulevard:   { id: 'boulevard',   name: 'Boulevard',          x: 52, y: 40 },
  mallqatar:   { id: 'mallqatar',   name: 'Mall of Qatar',      x: 50, y: 62 },
  medina:      { id: 'medina',      name: 'Medina Centrale',    x: 64, y: 52 },
  portoarabia: { id: 'portoarabia', name: 'Porto Arabia',       x: 62, y: 56 },
  citycentre:  { id: 'citycentre',  name: 'City Centre Dafna',  x: 55, y: 50 },
  katara:      { id: 'katara',      name: 'Katara',             x: 60, y: 50 },
  westwalk:    { id: 'westwalk',    name: 'West Walk',          x: 51, y: 60 },
  aspire:      { id: 'aspire',      name: 'Aspire Zone',        x: 53, y: 64 },
  pearl:       { id: 'pearl',       name: 'The Pearl',          x: 64, y: 50 },
};

interface Brand {
  id: string;
  name: string;
  card: { x: number; y: number };  // hover-zone center on the image (% of container)
  side: 'left' | 'right' | 'top';
  branches: string[];
  /** Character icon path under /public; falls back to the brand logo when no character exists */
  character: string;
}

const BRANDS: Brand[] = [
  { id: 'kiddyzone',  name: 'Kiddy Zone',     card: { x: 17, y: 13 }, side: 'left',  character: '/icon_KiddyZone.svg',      branches: ['darsalam','ezdan','hyatt','landmark','porto','dfc','gulf','vendome','boulevard','mallqatar','medina','portoarabia'] },
  { id: 'rondvill',   name: 'Rondvill',       card: { x: 11, y: 30 }, side: 'left',  character: '/icon_Ronvill.svg', branches: ['katara'] },
  { id: 'lartducafe', name: 'L’Art du Café',  card: { x: 11, y: 50 }, side: 'left',  character: "/icon_L'Artducafe.svg", branches: ['katara'] },
  { id: 'photobrick', name: 'PhotoBrick',     card: { x: 11, y: 72 }, side: 'left',  character: '/icon_Photosbrik.svg', branches: ['katara','dfc'] },
  { id: 'ecolandia',  name: 'Ecolandia',      card: { x: 50, y: 8  }, side: 'top',   character: '/icon_Ecolandia.svg',      branches: ['pearl'] },
  { id: 'spacetoys',  name: 'Space Toys',     card: { x: 86, y: 13 }, side: 'right', character: '/icon_SpaceToys.svg',      branches: ['citycentre'] },
  { id: 'candyvill',  name: 'Candyvill',      card: { x: 89, y: 30 }, side: 'right', character: '/icon_CandyVill.svg',      branches: ['hyatt','westwalk','citycentre','katara','mallqatar'] },
  { id: 'trampo',     name: 'Trampo Extreme', card: { x: 89, y: 52 }, side: 'right', character: '/icon_trampo.svg',         branches: ['aspire'] },
  { id: 'westfun',    name: 'West Fun',       card: { x: 89, y: 72 }, side: 'right', character: '/icon_WestFun.svg',        branches: ['westwalk'] },
];

// Convergence point on the map — where the brand's "trunk" line splits into branches.
// Anchored at the Kiddy character's position in the image so it matches the existing visual.
const SPLIT = { x: 40, y: 58 };

/* -------------------------------------------------------------------------- */

export function MarketPresence({ dict }: { dict: Dict }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = BRANDS.find((b) => b.id === hovered) ?? null;

  return (
    <section id="market" className="relative overflow-hidden bg-white py-20 text-brand-navy md:py-32">
      {/* Subtle atmosphere */}
      <div className="absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-red/5 blur-[120px]" />
      <div className="absolute -right-40 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-navy/5 blur-[120px]" />

      <div className="relative container-page">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <span className="eyebrow mb-4 justify-center">{dict.market.eyebrow}</span>
          <h2 className="heading-display">{dict.market.title}</h2>
          <p className="mt-6 text-lg text-brand-navy/70">{dict.market.subtitle}</p>
        </div>

        {/* Stats */}
        <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-5">
          {dict.market.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-brand-navy/10 bg-white p-6 text-center shadow-soft"
            >
              <div className="font-display text-3xl font-bold text-brand-red lg:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-navy/60">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* The image + interactive overlay */}
        <div className="relative mx-auto w-full max-w-6xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/market%20presence.png"
            alt="QNTGC market presence"
            draggable={false}
            className="block h-auto w-full select-none"
            style={{
              filter:
                'contrast(1.12) saturate(1.18) brightness(1.06) drop-shadow(0 30px 60px rgba(0,0,0,0.6))',
              imageRendering: 'auto',
            }}
          />

          {/* Hover zones — divs (not buttons) so no browser focus ring or tap highlight */}
          {BRANDS.map((b) => (
            <div
              key={b.id}
              role="presentation"
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: `${b.card.x}%`,
                top: `${b.card.y}%`,
                width: '14%',
                height: '13%',
                background: 'transparent',
                WebkitTapHighlightColor: 'transparent',
              }}
              onMouseEnter={() => setHovered(b.id)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(b.id)}
            />
          ))}

          {/* SVG overlay for animated golden lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="goldHover" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.2" />
                <stop offset="60%" stopColor="#FFE066" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>
              <filter id="goldGlowSm" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <AnimatePresence mode="wait">
              {active && <BrandFan key={active.id} brand={active} />}
            </AnimatePresence>
          </svg>

          {/* Branch pins + single character at the split point — appear on hover */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div key={active.id + '-pins'} className="pointer-events-none absolute inset-0">
                {/* Single character/logo at the convergence point */}
                <SplitMarker character={active.character} brandName={active.name} />

                {/* One small dot + label at each branch location */}
                {active.branches.map((bid, i) => {
                  const br = BRANCHES[bid];
                  if (!br) return null;
                  return <BranchPin key={bid} branch={br} index={i} />;
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Animated golden trunk + branches                                           */
/* -------------------------------------------------------------------------- */

function BrandFan({ brand }: { brand: Brand }) {
  const trunkD = bezierPath(brand.card.x, brand.card.y, SPLIT.x, SPLIT.y, brand.side);
  return (
    <g filter="url(#goldGlowSm)">
      {/* Wide soft glow trunk */}
      <motion.path
        d={trunkD}
        fill="none"
        stroke="rgba(255,215,0,0.85)"
        strokeWidth="3.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.85 }}
        exit={{ opacity: 0 }}
        transition={{ pathLength: { duration: 0.55, ease: 'easeOut' }, opacity: { duration: 0.2 } }}
        style={{ filter: 'blur(1.6px)' }}
      />
      {/* Crisp bright trunk */}
      <motion.path
        d={trunkD}
        fill="none"
        stroke="url(#goldHover)"
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ pathLength: { duration: 0.55, ease: 'easeOut' }, opacity: { duration: 0.2 } }}
      />

      {/* Branches: SPLIT → each pin (also beefed up) */}
      {brand.branches.map((id, i) => {
        const br = BRANCHES[id];
        if (!br) return null;
        const d = `M ${SPLIT.x} ${SPLIT.y} L ${br.x} ${br.y}`;
        return (
          <g key={id}>
            <motion.path
              d={d}
              fill="none"
              stroke="rgba(255,215,0,0.8)"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{
                pathLength: { duration: 0.4, delay: 0.5 + i * 0.05, ease: 'easeOut' },
                opacity: { duration: 0.2 },
              }}
              style={{ filter: 'blur(1px)' }}
            />
            <motion.path
              d={d}
              fill="none"
              stroke="#FFE066"
              strokeWidth="0.7"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                pathLength: { duration: 0.4, delay: 0.5 + i * 0.05, ease: 'easeOut' },
                opacity: { duration: 0.2 },
              }}
            />
          </g>
        );
      })}
    </g>
  );
}

function BranchPin({ branch, index }: { branch: Branch; index: number }) {
  const delay = 0.5 + index * 0.05 + 0.4;
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${branch.x}%`, top: `${branch.y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ delay, duration: 0.3, type: 'spring', stiffness: 220 }}
    >
      <div className="relative grid place-items-center">
        <motion.span
          className="absolute h-5 w-5 rounded-full bg-yellow-300/60 blur-[3px]"
          animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span
          className="relative h-2 w-2 rounded-full bg-yellow-300 ring-2 ring-white/85"
          style={{ boxShadow: '0 0 10px 2px rgba(255,215,0,0.95)' }}
        />
        <motion.span
          initial={{ opacity: 0, x: 4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.1 }}
          className="absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-yellow-300/60 bg-[#000814]/90 px-1.5 py-0.5 text-[9px] font-semibold tracking-tight text-yellow-200 backdrop-blur-sm md:text-[10px]"
          style={{ boxShadow: '0 0 12px rgba(255,215,0,0.25)' }}
        >
          {branch.name}
        </motion.span>
      </div>
    </motion.div>
  );
}

/**
 * Single character / logo rendered at the convergence point — the place where
 * the brand's trunk line splits into branches.
 */
function SplitMarker({ character, brandName }: { character: string; brandName: string }) {
  // Character icons live at /icon_*.svg and have transparent backgrounds —
  // render them bare (no disc). Logo fallbacks live under /brands/ and keep
  // their white circular tile so coloured logos read against the dark map.
  const isCharacter = character.startsWith('/icon_');

  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${SPLIT.x}%`, top: `${SPLIT.y}%` }}
      initial={{ opacity: 0, scale: 0, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.4, y: 8 }}
      transition={{ delay: 0.45, duration: 0.5, type: 'spring', stiffness: 200 }}
    >
      <div className="relative grid place-items-center">
        {/* Pulsing golden halo */}
        <motion.span
          className="absolute h-14 w-14 rounded-full bg-yellow-300/55 blur-lg md:h-16 md:w-16"
          animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {isCharacter ? (
          // ── Character: transparent PNG/SVG, no disc, just the figure ──
          <motion.img
            src={character}
            alt={`${brandName} character`}
            draggable={false}
            className="relative h-12 w-12 select-none object-contain md:h-16 md:w-16"
            style={{
              filter:
                'drop-shadow(0 8px 14px rgba(0,0,0,0.55)) drop-shadow(0 0 18px rgba(255,215,0,0.6))',
            }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ) : (
          // ── Logo fallback: keep the white circular tile + ring ──
          <motion.div
            className="relative grid h-10 w-10 place-items-center rounded-full bg-white p-1.5 ring-2 ring-yellow-300 md:h-14 md:w-14 md:p-2"
            style={{
              boxShadow:
                '0 8px 22px rgba(0,0,0,0.5), 0 0 20px rgba(255,215,0,0.65), inset 0 1px 0 rgba(255,255,255,0.6)',
            }}
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={character}
              alt={`${brandName} logo`}
              draggable={false}
              className="h-full w-full select-none object-contain"
            />
          </motion.div>
        )}

        {/* Subtle floor-glow disc */}
        <span
          aria-hidden
          className="absolute -bottom-2 h-1.5 w-9 rounded-full bg-yellow-300/55 blur-md md:w-12"
        />
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */

function bezierPath(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  side: 'left' | 'right' | 'top'
): string {
  let cx = (fromX + toX) / 2;
  let cy = (fromY + toY) / 2;
  if (side === 'left') {
    cx += -6;
    cy += 4;
  } else if (side === 'right') {
    cx += 8;
    cy += 4;
  } else {
    cy += -8;
  }
  return `M ${fromX} ${fromY} Q ${cx} ${cy} ${toX} ${toY}`;
}
