'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Floating "back to top" rocket — fixed bottom-right.
 *
 * Appears after the user scrolls past ~500 px.
 * Idle: gentle bob + pulsing red halo + flickering thrust flame.
 * Hover: scale up + lift, halo brightens.
 * Click: rocket launches off-screen, smoke trails behind, page smooth-scrolls to top.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    if (launching) return;
    setLaunching(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setLaunching(false), 1400);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 30 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="group fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center outline-none md:bottom-8 md:right-8 md:h-16 md:w-16"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          {/* Pulsing red halo behind */}
          <motion.span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-brand-red/55 blur-xl"
            animate={{ scale: [0.95, 1.12, 0.95], opacity: [0.55, 0.9, 0.55] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Twinkling stars around the rocket */}
          {[
            { x: -18, y: -12, d: 0,   s: 3 },
            { x:  18, y: -16, d: 0.6, s: 2 },
            { x:  22, y:  10, d: 1.2, s: 2.5 },
            { x: -22, y:  14, d: 1.8, s: 2 },
          ].map((star, i) => (
            <motion.span
              key={i}
              aria-hidden
              className="absolute rounded-full bg-yellow-200"
              style={{
                width: star.s,
                height: star.s,
                transform: `translate(${star.x}px, ${star.y}px)`,
                boxShadow: '0 0 6px 1px rgba(255,215,0,0.9)',
              }}
              animate={{ opacity: [0, 1, 0], scale: [0.6, 1.4, 0.6] }}
              transition={{ duration: 2.2, delay: star.d, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          {/* The rocket itself — bobs gently in idle, shoots up on click */}
          <motion.div
            className="relative"
            animate={
              launching
                ? { y: -260, rotate: -4 }
                : { y: [0, -3, 0], rotate: [-2, 2, -2] }
            }
            transition={
              launching
                ? { duration: 1.2, ease: [0.7, 0, 0.84, 0] }
                : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
            }
            style={{
              filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.4)) drop-shadow(0 0 16px rgba(255,215,0,0.25))',
              transformStyle: 'preserve-3d',
            }}
          >
            <Rocket />

            {/* Thrust flame — small at idle, big on launch */}
            <motion.div
              aria-hidden
              className="absolute left-1/2 top-full -translate-x-1/2"
              animate={
                launching
                  ? { scaleY: [1, 2.6, 2.2], scaleX: [1, 1.2, 1.4], opacity: [1, 1, 1] }
                  : { scaleY: [0.85, 1.1, 0.85], scaleX: [0.95, 1.05, 0.95], opacity: [0.85, 1, 0.85] }
              }
              transition={
                launching
                  ? { duration: 0.7, ease: 'easeOut' }
                  : { duration: 0.45, repeat: Infinity, ease: 'easeInOut' }
              }
              style={{ transformOrigin: 'top center' }}
            >
              <Flame />
            </motion.div>
          </motion.div>

          {/* Smoke puffs on launch */}
          <AnimatePresence>
            {launching &&
              [0, 0.15, 0.3, 0.45].map((delay, i) => (
                <motion.span
                  key={i}
                  aria-hidden
                  className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 rounded-full bg-white/85"
                  style={{ filter: 'blur(3px)' }}
                  initial={{ opacity: 0.95, y: 0, scale: 0.5 }}
                  animate={{ opacity: 0, y: 40, scale: 2.4, x: (i % 2 ? 12 : -12) }}
                  transition={{ duration: 1, delay, ease: 'easeOut' }}
                />
              ))}
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* -------------------------------------------------------------------------- */
/*  Rocket and flame SVG — brand red body + navy fins + sky-blue window        */
/* -------------------------------------------------------------------------- */

function Rocket() {
  return (
    <svg viewBox="0 0 60 80" className="h-10 w-10 md:h-12 md:w-12" aria-hidden>
      <defs>
        {/* Body shading — left dark / centre bright / right dark for cylindrical 3D feel */}
        <linearGradient id="btt-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7A0A0F" />
          <stop offset="35%" stopColor="#D43A40" />
          <stop offset="55%" stopColor="#FF6168" />
          <stop offset="80%" stopColor="#B01117" />
          <stop offset="100%" stopColor="#6E090E" />
        </linearGradient>
        {/* Nose-cone shading */}
        <linearGradient id="btt-cone" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6E090E" />
          <stop offset="50%" stopColor="#B01117" />
          <stop offset="100%" stopColor="#6E090E" />
        </linearGradient>
        {/* Fins */}
        <linearGradient id="btt-fin" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#001a47" />
          <stop offset="100%" stopColor="#002561" />
        </linearGradient>
        {/* Window */}
        <radialGradient id="btt-window" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#BCE0FF" />
          <stop offset="100%" stopColor="#3A86FF" />
        </radialGradient>
      </defs>

      {/* Fins (drawn behind body) */}
      <path d="M 18 50 L 8 70 L 22 64 Z" fill="url(#btt-fin)" />
      <path d="M 42 50 L 52 70 L 38 64 Z" fill="url(#btt-fin)" />

      {/* Body cylinder */}
      <rect x="20" y="22" width="20" height="44" rx="2" fill="url(#btt-body)" />

      {/* Nose cone */}
      <path d="M 30 4 L 18 24 L 42 24 Z" fill="url(#btt-cone)" />

      {/* White stripe near top of body */}
      <rect x="20" y="28" width="20" height="2.5" fill="#FFFFFF" opacity="0.85" />

      {/* Window */}
      <circle cx="30" cy="40" r="5.5" fill="#FFFFFF" />
      <circle cx="30" cy="40" r="4" fill="url(#btt-window)" />
      {/* Tiny shine */}
      <circle cx="28" cy="38" r="1.2" fill="#FFFFFF" opacity="0.9" />

      {/* Body bottom band */}
      <rect x="20" y="62" width="20" height="4" fill="#7A0A0F" />

      {/* Thruster nozzle */}
      <path d="M 22 66 L 24 70 L 36 70 L 38 66 Z" fill="#3a3a3a" />
      <ellipse cx="30" cy="70" rx="6" ry="1" fill="#1a1a1a" />
    </svg>
  );
}

function Flame() {
  return (
    <svg viewBox="0 0 24 28" className="h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden>
      <defs>
        <linearGradient id="btt-flame" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="20%" stopColor="#FFE066" />
          <stop offset="55%" stopColor="#FF9633" />
          <stop offset="100%" stopColor="#FF2A30" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M 12 0 C 16 6, 22 12, 18 20 C 16 24, 14 26, 12 28 C 10 26, 8 24, 6 20 C 2 12, 8 6, 12 0 Z"
        fill="url(#btt-flame)"
      />
    </svg>
  );
}
