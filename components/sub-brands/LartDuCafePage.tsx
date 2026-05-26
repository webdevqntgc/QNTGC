'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock,
  Instagram,
  Star,
  Sparkles,
  Heart,
  Coffee,
  Cake,
  Cookie,
  UtensilsCrossed,
  Palette,
  Music,
} from 'lucide-react';
import type { Locale } from '@/lib/i18n';

/* -------------------------------------------------------------------------- */
/*  L'Art du Café palette                                                      */
/* -------------------------------------------------------------------------- */

const LC = {
  brown:  '#7F5539',
  brownD: '#5C3A24',
  brownL: '#9C7156',
  teal:   '#71CAC8',
  tealD:  '#3FA8A4',
  cream:  '#F5EBE0',
  creamL: '#FAF4EC',
  gold:   '#C9A45C',
  goldD:  '#A8853F',
  dark:   '#241712',
  ink:    '#3A271C',
};

const LOGO = '/brands/Lart du cafe-Logo.svg';
const ICON = "/icon_L'Artducafe.svg";
const INSTAGRAM = 'https://www.instagram.com/lartducafe.qa/';

/* Serif heading style */
const SERIF: React.CSSProperties = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
  letterSpacing: '-0.01em',
};

/* -------------------------------------------------------------------------- */
/*  Translation dictionary                                                     */
/* -------------------------------------------------------------------------- */

type Dict = {
  heroEyebrow: string;
  heroTitle1: string;
  heroTitle2: string;
  heroBody: string;
  heroCta1: string;
  heroCta2: string;
  chipSpecialty: string;
  chipArt: string;

  storyEyebrow: string;
  storyTitle1: string;
  storyTitle2: string;
  storyBody: string;
  statKataraTitle: string;
  statKataraLabel: string;
  statSpecialtyTitle: string;
  statSpecialtyLabel: string;
  statCuratedTitle: string;
  statCuratedLabel: string;

  menuEyebrow: string;
  menuTitle1: string;
  menuTitle2: string;
  menuItem1Title: string;
  menuItem1Desc: string;
  menuItem2Title: string;
  menuItem2Desc: string;
  menuItem3Title: string;
  menuItem3Desc: string;
  menuItem4Title: string;
  menuItem4Desc: string;

  expEyebrow: string;
  expTitle1: string;
  expTitle2: string;
  expCard1Title: string;
  expCard1Desc: string;
  expCard2Title: string;
  expCard2Desc: string;
  expCard3Title: string;
  expCard3Desc: string;

  visitEyebrow: string;
  visitTitle1: string;
  visitTitle2: string;
  visitBody: string;
  visitCardLocation: string;
  visitCardLocationLine1: string;
  visitCardLocationLine2: string;
  visitCardHours: string;
  visitCardHoursLine: string;
  visitCardFollow: string;
  visitCardSpecialty: string;
  visitCardSpecialtyLine: string;
  visitDirections: string;
  visitMapPin: string;

  ctaEyebrow: string;
  ctaTitle1: string;
  ctaTitle2: string;
  ctaBody: string;
  ctaPlanVisit: string;
  ctaFollowIg: string;
};

const EN: Dict = {
  heroEyebrow: 'Katara · Doha · Est. 2023',
  heroTitle1: 'Where Art',
  heroTitle2: 'Meets Coffee.',
  heroBody:
    'A refined café experience in the heart of Katara — speciality coffees, artisan desserts, French pastries, and a curated atmosphere worth lingering in.',
  heroCta1: 'Visit the Café',
  heroCta2: 'Follow on Instagram',
  chipSpecialty: 'Speciality',
  chipArt: 'Art',

  storyEyebrow: 'Our Story',
  storyTitle1: 'Change the World,',
  storyTitle2: 'Start with a Coffee.',
  storyBody:
    "Tucked inside Katara's cultural village, L'Art du Café is more than a coffee shop. It's a refined destination where every detail is considered — the cup, the crema, the artwork on the wall, and the quiet warmth of a place built for slow mornings and conversations worth having.",
  statKataraTitle: 'Katara',
  statKataraLabel: 'Cultural Village',
  statSpecialtyTitle: 'Specialty',
  statSpecialtyLabel: 'Coffee · Pastry',
  statCuratedTitle: 'Curated',
  statCuratedLabel: 'Art · Ambience',

  menuEyebrow: 'The Menu',
  menuTitle1: 'A Taste of',
  menuTitle2: 'Refined Indulgence',
  menuItem1Title: 'Speciality Coffees',
  menuItem1Desc: 'Single-origin beans, expertly pulled espressos and signature brews.',
  menuItem2Title: 'Artisan Desserts',
  menuItem2Desc: 'Hand-finished cakes and seasonal sweets crafted in-house.',
  menuItem3Title: 'French Pastries',
  menuItem3Desc: 'Buttery croissants, viennoiserie, and pastry-counter classics.',
  menuItem4Title: 'Gourmet Plates',
  menuItem4Desc: 'Refined all-day dining, plated with care.',

  expEyebrow: 'The Experience',
  expTitle1: 'More Than a Café.',
  expTitle2: 'A Place to Linger.',
  expCard1Title: 'Curated Art',
  expCard1Desc:
    'Rotating works and design objects from Qatari and international artists, woven into the café experience.',
  expCard2Title: 'Ambient Music',
  expCard2Desc:
    'A carefully programmed soundtrack — quiet enough for a chapter, warm enough for a long talk.',
  expCard3Title: 'Slow Mornings',
  expCard3Desc: 'A pace that respects your coffee. Stay as long as you like.',

  visitEyebrow: 'Visit Us',
  visitTitle1: 'Find Us in',
  visitTitle2: 'Katara',
  visitBody:
    "Tucked inside Katara's cultural village — a quiet doorway, a warm interior, and the unmistakable scent of fresh coffee.",
  visitCardLocation: 'Location',
  visitCardLocationLine1: 'Katara Cultural Village',
  visitCardLocationLine2: 'Doha, Qatar',
  visitCardHours: 'Open Daily',
  visitCardHoursLine: 'Morning to late evening',
  visitCardFollow: 'Follow Us',
  visitCardSpecialty: 'Speciality',
  visitCardSpecialtyLine: 'Coffee · Pastry · Art',
  visitDirections: 'Get Directions',
  visitMapPin: 'Katara',

  ctaEyebrow: 'Come In',
  ctaTitle1: 'Pour Yourself a Moment',
  ctaTitle2: "at L'Art du Café.",
  ctaBody:
    'A doorway in Katara, a warm cup, and a quiet kind of beauty. Visit us or follow along on Instagram.',
  ctaPlanVisit: 'Plan Your Visit',
  ctaFollowIg: 'Follow on Instagram',
};

const AR: Dict = {
  heroEyebrow: 'كتارا · الدوحة · تأسس ٢٠٢٣',
  heroTitle1: 'حيث يلتقي الفن',
  heroTitle2: 'بالقهوة.',
  heroBody:
    'تجربة مقهى راقية في قلب كتارا — قهوة مختصة، حلويات حرفية، معجنات فرنسية، وأجواء منسّقة بعناية تستحق المكوث فيها.',
  heroCta1: 'زر المقهى',
  heroCta2: 'تابعنا على إنستغرام',
  chipSpecialty: 'قهوة مختصة',
  chipArt: 'فن',

  storyEyebrow: 'قصتنا',
  storyTitle1: 'غيّر العالم،',
  storyTitle2: 'ابدأ بقهوة.',
  storyBody:
    'في قلب قرية كتارا الثقافية، لارت دو كافيه أكثر من مجرّد مقهى. إنه وجهة راقية يُعتنى فيها بكل تفصيلة — الفنجان، الكريما، اللوحة على الجدار، والدفء الهادئ لمكان صُمم للصباحات الجميلة والمحادثات التي تستحق.',
  statKataraTitle: 'كتارا',
  statKataraLabel: 'الحي الثقافي',
  statSpecialtyTitle: 'مختص',
  statSpecialtyLabel: 'قهوة · معجنات',
  statCuratedTitle: 'منسّق',
  statCuratedLabel: 'فن · أجواء',

  menuEyebrow: 'القائمة',
  menuTitle1: 'مذاق من',
  menuTitle2: 'المتعة الراقية',
  menuItem1Title: 'قهوة مختصة',
  menuItem1Desc: 'حبوب أصلية وإسبريسو محضّر بدقة ومشروبات مميزة.',
  menuItem2Title: 'حلويات حرفية',
  menuItem2Desc: 'كيك مصنوع يدويًا وحلويات موسمية تُعدّ داخل المقهى.',
  menuItem3Title: 'معجنات فرنسية',
  menuItem3Desc: 'كرواسون بالزبدة، فطائر فرنسية، وكلاسيكيات المخبز.',
  menuItem4Title: 'أطباق راقية',
  menuItem4Desc: 'وجبات راقية على مدار اليوم، تُقدّم بعناية.',

  expEyebrow: 'التجربة',
  expTitle1: 'أكثر من مجرّد مقهى.',
  expTitle2: 'مكان للاسترخاء.',
  expCard1Title: 'فن منسّق',
  expCard1Desc: 'أعمال فنية متجدّدة وقطع تصميم من فنانين قطريين وعالميين، مدمجة في تجربة المقهى.',
  expCard2Title: 'موسيقى الأجواء',
  expCard2Desc: 'قائمة موسيقية مختارة بعناية — هادئة بما يكفي لقراءة فصل، ودافئة بما يكفي لحوار طويل.',
  expCard3Title: 'صباحات هادئة',
  expCard3Desc: 'إيقاع يحترم قهوتك. ابقَ كما يحلو لك.',

  visitEyebrow: 'زورونا',
  visitTitle1: 'تجدوننا في',
  visitTitle2: 'كتارا',
  visitBody: 'في قلب قرية كتارا الثقافية — بوّابة هادئة، أجواء دافئة، ورائحة القهوة الطازجة لا تُخطئها.',
  visitCardLocation: 'الموقع',
  visitCardLocationLine1: 'قرية كتارا الثقافية',
  visitCardLocationLine2: 'الدوحة، قطر',
  visitCardHours: 'مفتوح يوميًا',
  visitCardHoursLine: 'من الصباح حتى وقت متأخر من المساء',
  visitCardFollow: 'تابعنا',
  visitCardSpecialty: 'تخصصنا',
  visitCardSpecialtyLine: 'قهوة · معجنات · فن',
  visitDirections: 'الاتجاهات',
  visitMapPin: 'كتارا',

  ctaEyebrow: 'تفضلوا',
  ctaTitle1: 'اصنع لنفسك لحظة',
  ctaTitle2: 'في لارت دو كافيه.',
  ctaBody: 'بوابة في كتارا، فنجان دافئ، وجمال هادئ من نوع خاص. زورنا أو تابعونا على إنستغرام.',
  ctaPlanVisit: 'خطّط لزيارتك',
  ctaFollowIg: 'تابعنا على إنستغرام',
};

/* -------------------------------------------------------------------------- */

export function LartDuCafePage({ locale }: { locale: Locale }) {
  const isAr = locale === 'ar';
  const t = isAr ? AR : EN;

  return (
    <main className="overflow-hidden" style={{ background: LC.creamL, color: LC.ink }}>
      <Hero t={t} isAr={isAr} />
      <Story t={t} isAr={isAr} />
      <MenuHighlights t={t} isAr={isAr} />
      <Experience t={t} isAr={isAr} />
      <VisitSection t={t} isAr={isAr} />
      <FinalCTA t={t} isAr={isAr} />
    </main>
  );
}

type SP = { t: Dict; isAr: boolean };
const arProps = (isAr: boolean) =>
  isAr ? ({ dir: 'rtl' as const, lang: 'ar', className: 'font-ar' }) : ({});

/* -------------------------------------------------------------------------- */
/*  Coffee cup SVG with animated steam                                          */
/* -------------------------------------------------------------------------- */

function CoffeeCup({ size = 320 }: { size?: number }) {
  return (
    <div className="relative" style={{ width: size, height: size * 1.25 }}>
      {/* Steam wisps */}
      <svg className="absolute left-1/2 -translate-x-1/2" style={{ top: -size * 0.05, width: size * 0.7, height: size * 0.5 }} viewBox="0 0 140 100" fill="none">
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M ${40 + i * 30} 90 C ${30 + i * 30} 70, ${50 + i * 30} 50, ${40 + i * 30} 30 C ${30 + i * 30} 15, ${50 + i * 30} 5, ${40 + i * 30} 0`}
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.55"
            animate={{ opacity: [0, 0.65, 0], y: [10, -8, -22] }}
            transition={{ duration: 3.5, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>

      {/* Cup */}
      <svg className="absolute inset-x-0 bottom-0" viewBox="0 0 200 220" fill="none">
        <ellipse cx="100" cy="200" rx="86" ry="14" fill={LC.brownD} opacity="0.85" />
        <ellipse cx="100" cy="198" rx="84" ry="11" fill={LC.brownL} />
        <ellipse cx="100" cy="195" rx="80" ry="9" fill={LC.cream} />
        <ellipse cx="100" cy="194" rx="74" ry="7" fill={LC.brownL} opacity="0.4" />

        <path d="M 158 115 Q 200 115 200 150 Q 200 185 158 185" fill="none" stroke="#fff" strokeWidth="14" strokeLinecap="round" />
        <path d="M 158 115 Q 200 115 200 150 Q 200 185 158 185" fill="none" stroke={LC.brown} strokeWidth="2" strokeLinecap="round" />
        <path d="M 162 130 Q 185 130 185 150 Q 185 170 162 170" fill="none" stroke={LC.brown} strokeWidth="1" opacity="0.4" />

        <path d="M 42 95 L 52 178 Q 52 195 100 195 Q 148 195 148 178 L 158 95 Z" fill="#fff" />
        <path d="M 42 95 L 52 178 Q 52 195 100 195 Q 148 195 148 178 L 158 95 Z" fill="none" stroke={LC.brown} strokeWidth="2.5" />
        <path d="M 145 100 L 150 175 Q 150 188 130 192" fill="none" stroke={LC.brown} strokeWidth="1" opacity="0.25" />

        <ellipse cx="100" cy="95" rx="58" ry="11" fill={LC.brownD} />
        <ellipse cx="100" cy="94" rx="56" ry="9.5" fill={LC.cream} />
        <ellipse cx="100" cy="94" rx="50" ry="7.5" fill={LC.brownD} />

        <g transform="translate(100 94)">
          {[-12, 0, 12].map((dx, i) => (
            <ellipse key={i} cx={dx} cy="0" rx="6" ry="2.2" fill={LC.cream} opacity={0.85 - i * 0.08} />
          ))}
          <path d="M -20 0 Q -18 -4 -8 -2 Q -2 0 -8 2 Q -18 4 -20 0 Z" fill={LC.cream} opacity="0.85" />
          <path d="M 20 0 Q 18 -4 8 -2 Q 2 0 8 2 Q 18 4 20 0 Z" fill={LC.cream} opacity="0.85" />
          <path d="M 0 -2 L 0 3" stroke={LC.brownD} strokeWidth="1" />
        </g>

        <text x="100" y="160" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="13" fill={LC.brown}>L&apos;Art du Café</text>
      </svg>
    </div>
  );
}

/* Golden ornate art frame */
function ArtFrame({ children, tone = LC.gold, className = '' }: { children: React.ReactNode; tone?: string; className?: string }) {
  return (
    <div
      className={`relative rounded-[1.5rem] p-3 ${className}`}
      style={{
        background: `linear-gradient(140deg, ${tone}, ${LC.goldD})`,
        boxShadow: `0 20px 40px rgba(0,0,0,0.25), inset 0 0 0 2px rgba(255,255,255,0.4)`,
      }}
    >
      <div className="relative rounded-[1.1rem] p-2" style={{ background: LC.creamL }}>
        <div
          className="relative overflow-hidden rounded-[0.85rem]"
          style={{ background: `linear-gradient(160deg, ${LC.creamL}, ${LC.cream})`, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)' }}
        >
          {children}
        </div>
      </div>
      {['top-1 left-1', 'top-1 right-1', 'bottom-1 left-1', 'bottom-1 right-1'].map((p) => (
        <div key={p} className={`absolute ${p} h-3 w-3 rounded-full`} style={{ background: '#fff', opacity: 0.55 }} />
      ))}
    </div>
  );
}

/* Coffee bean & art motifs backdrop */
function CafeBackdrop({ color = LC.brown }: { color?: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 14 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        const size = 16 + r(3) * 22;
        return (
          <motion.svg
            key={i}
            viewBox="0 0 40 60"
            className="absolute"
            style={{ left: `${r(1) * 100}%`, top: `${r(2) * 100}%`, width: size, height: size * 1.5, opacity: 0.12 }}
            animate={{ y: [0, -22, 0], rotate: [-12, 12, -12] }}
            transition={{ duration: 8 + r(4) * 5, delay: r(5) * 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ellipse cx="20" cy="30" rx="13" ry="22" fill={color} />
            <path d="M 20 8 Q 24 30 20 52" stroke={LC.creamL} strokeWidth="1.6" fill="none" />
          </motion.svg>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  HERO                                                                        */
/* -------------------------------------------------------------------------- */

function Hero({ t, isAr }: SP) {
  return (
    <section
      className="relative overflow-hidden pt-16 pb-28 md:pt-20 md:pb-36"
      style={{ background: `radial-gradient(120% 100% at 80% 0%, ${LC.cream} 0%, ${LC.creamL} 60%, #FFFCF7 100%)` }}
    >
      <CafeBackdrop color={LC.brown} />

      <svg aria-hidden className="pointer-events-none absolute -left-10 top-10 h-40 w-40 opacity-25" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" stroke={LC.gold} strokeWidth="1" />
        <circle cx="50" cy="50" r="36" stroke={LC.gold} strokeWidth="0.6" />
        <circle cx="50" cy="50" r="24" stroke={LC.gold} strokeWidth="0.6" />
      </svg>
      <svg aria-hidden className="pointer-events-none absolute -right-10 bottom-10 h-48 w-48 opacity-25" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" stroke={LC.brown} strokeWidth="1" />
        <circle cx="50" cy="50" r="32" stroke={LC.brown} strokeWidth="0.6" />
      </svg>

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            {...arProps(isAr)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="L'Art du Café" className="h-16 w-auto md:h-20" draggable={false} />

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-10" style={{ background: LC.gold }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em]" style={{ color: LC.brown }}>
                {t.heroEyebrow}
              </span>
            </div>

            <h1 className="mt-4 text-5xl font-bold leading-[0.98] md:text-6xl lg:text-7xl" style={{ ...SERIF, color: LC.brownD }}>
              {t.heroTitle1}
              <span className="block italic" style={{ color: LC.brown }}>{t.heroTitle2}</span>
            </h1>

            <p className="mt-5 max-w-md text-lg leading-relaxed" style={{ color: LC.brown }}>
              {t.heroBody}
            </p>
            {!isAr && (
              <p className="mt-3 font-ar text-xl font-semibold md:text-2xl" dir="rtl" lang="ar" style={{ color: LC.brown }}>
                غيّر العالم، ابدأ بقهوة
              </p>
            )}

            <div className="mt-9 flex flex-wrap gap-3">
              <motion.a
                href="#visit"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl"
                style={{ background: LC.brown, boxShadow: `0 14px 30px -8px ${LC.brown}` }}
              >
                {t.heroCta1}
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
                style={{ borderColor: LC.brown, color: LC.brown }}
                onMouseEnter={(e) => { e.currentTarget.style.background = LC.brown; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = LC.brown; }}
              >
                {t.heroCta2}
                <Instagram className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex w-full max-w-md items-center justify-center"
          >
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ background: `radial-gradient(circle at 50% 50%, ${LC.teal}55, transparent 65%)` }}
              animate={{ opacity: [0.4, 0.85, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full"
            >
              <ArtFrame>
                <div className="grid place-items-center p-6">
                  <CoffeeCup size={260} />
                </div>
              </ArtFrame>
            </motion.div>

            <motion.div
              className="absolute -left-4 -top-4 rounded-full bg-white px-3 py-1 shadow-lg"
              style={{ color: LC.brown }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider" {...arProps(isAr)}>
                <Coffee className="h-3.5 w-3.5" /> {t.chipSpecialty}
              </span>
            </motion.div>
            <motion.div
              className="absolute -right-4 bottom-8 rounded-full bg-white px-3 py-1 shadow-lg"
              style={{ color: LC.teal }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider" {...arProps(isAr)}>
                <Palette className="h-3.5 w-3.5" /> {t.chipArt}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  STORY                                                                       */
/* -------------------------------------------------------------------------- */

function Story({ t, isAr }: SP) {
  return (
    <section className="relative py-20 md:py-28" style={{ background: '#fff' }}>
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="relative lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem]" style={{ background: LC.teal, opacity: 0.45 }} />
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem]" style={{ background: LC.brown, opacity: 0.15 }} />
            <div
              className="relative grid aspect-square place-items-center overflow-hidden rounded-[2rem]"
              style={{ background: `linear-gradient(160deg, ${LC.cream}, ${LC.creamL})` }}
            >
              <CafeBackdrop color={LC.brown} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src={ICON}
                alt=""
                draggable={false}
                animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-3/4 w-3/4 select-none object-contain"
                style={{ filter: 'drop-shadow(0 18px 24px rgba(0,0,0,0.18))' }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-7"
          {...arProps(isAr)}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10" style={{ background: LC.brown }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em]" style={{ color: LC.brown }}>
              {t.storyEyebrow}
            </span>
          </div>
          <h2 className="mt-5 text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl" style={{ ...SERIF, color: LC.brownD }}>
            {t.storyTitle1}
            <span className="block italic" style={{ color: LC.brown }}>{t.storyTitle2}</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: LC.brown }}>
            {t.storyBody}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: t.statKataraTitle, v: t.statKataraLabel, c: LC.brown },
              { k: t.statSpecialtyTitle, v: t.statSpecialtyLabel, c: LC.teal },
              { k: t.statCuratedTitle, v: t.statCuratedLabel, c: LC.gold },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border bg-white p-5 shadow-sm" style={{ borderColor: `${LC.brown}22` }}>
                <div className="text-2xl font-bold" style={{ ...SERIF, color: s.c }}>{s.k}</div>
                <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: LC.brown }}>{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  MENU HIGHLIGHTS                                                             */
/* -------------------------------------------------------------------------- */

function MenuHighlights({ t, isAr }: SP) {
  const items = [
    { title: t.menuItem1Title, desc: t.menuItem1Desc, color: LC.brown,  Icon: Coffee },
    { title: t.menuItem2Title, desc: t.menuItem2Desc, color: LC.gold,   Icon: Cake },
    { title: t.menuItem3Title, desc: t.menuItem3Desc, color: LC.tealD,  Icon: Cookie },
    { title: t.menuItem4Title, desc: t.menuItem4Desc, color: LC.brownD, Icon: UtensilsCrossed },
  ];
  return (
    <section className="relative py-20 md:py-28" style={{ background: LC.creamL }}>
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center" {...arProps(isAr)}>
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em]" style={{ color: LC.brown }}>
            {t.menuEyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl" style={{ ...SERIF, color: LC.brownD }}>
            {t.menuTitle1}
            <span className="italic" style={{ color: LC.brown }}> {t.menuTitle2}</span>
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
              className="group relative overflow-hidden rounded-[1.5rem] border bg-white p-7 shadow-md transition-shadow duration-500 hover:shadow-2xl"
              style={{ borderColor: `${color}33` }}
              {...arProps(isAr)}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-15 blur-2xl" style={{ background: color }} />
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [-4, 4, -4] }}
                transition={{ duration: 4, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-5 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-md"
                style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
              >
                <Icon className="h-7 w-7" strokeWidth={1.8} />
              </motion.div>
              <h3 className="text-xl font-bold leading-tight" style={{ ...SERIF, color: LC.brownD }}>{title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: LC.brown }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  EXPERIENCE                                                                  */
/* -------------------------------------------------------------------------- */

function Experience({ t, isAr }: SP) {
  const cards = [
    { title: t.expCard1Title, desc: t.expCard1Desc, Icon: Palette, tone: LC.brown },
    { title: t.expCard2Title, desc: t.expCard2Desc, Icon: Music,   tone: LC.teal },
    { title: t.expCard3Title, desc: t.expCard3Desc, Icon: Heart,   tone: LC.gold },
  ];
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: LC.brownD, color: '#fff' }}>
      <CafeBackdrop color={LC.cream} />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center" {...arProps(isAr)}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
            <Sparkles className="h-3 w-3" style={{ color: LC.gold }} /> {t.expEyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl" style={SERIF}>
            {t.expTitle1}
            <span className="block italic" style={{ color: LC.gold }}>{t.expTitle2}</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(({ title, desc, Icon, tone }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 p-7 shadow-2xl backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.06)' }}
              {...arProps(isAr)}
            >
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [-5, 5, -5] }}
                transition={{ duration: 4, delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-5 grid h-14 w-14 place-items-center rounded-2xl"
                style={{ background: `linear-gradient(135deg, ${tone}, ${tone}cc)`, color: '#fff', boxShadow: `0 12px 24px -8px ${tone}` }}
              >
                <Icon className="h-7 w-7" strokeWidth={1.8} />
              </motion.div>
              <h3 className="text-xl font-bold leading-tight" style={SERIF}>{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  VISIT — Katara location                                                     */
/* -------------------------------------------------------------------------- */

function VisitSection({ t, isAr }: SP) {
  return (
    <section id="visit" className="relative overflow-hidden py-20 md:py-28" style={{ background: '#fff' }}>
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div {...arProps(isAr)}>
          <div className="flex items-center gap-3">
            <span className="h-px w-10" style={{ background: LC.brown }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em]" style={{ color: LC.brown }}>
              {t.visitEyebrow}
            </span>
          </div>
          <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl" style={{ ...SERIF, color: LC.brownD }}>
            {t.visitTitle1}
            <span className="block italic" style={{ color: LC.brown }}>{t.visitTitle2}</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: LC.brown }}>
            {t.visitBody}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { Icon: MapPin,    label: t.visitCardLocation,  lines: [t.visitCardLocationLine1, t.visitCardLocationLine2], color: LC.brown },
              { Icon: Clock,     label: t.visitCardHours,     lines: [t.visitCardHoursLine],                                color: LC.teal },
              { Icon: Instagram, label: t.visitCardFollow,    lines: ['@lartducafe.qa'],                                    color: LC.gold },
              { Icon: Coffee,    label: t.visitCardSpecialty, lines: [t.visitCardSpecialtyLine],                            color: LC.brownD },
            ].map(({ Icon, label, lines, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border bg-white p-5 shadow-sm"
                style={{ borderColor: `${color}33` }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl text-white shadow-md" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
                  <Icon className="h-5 w-5" />
                </span>
                <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color }}>{label}</div>
                {lines.map((l) => (
                  <div key={l} className="mt-0.5 text-sm font-semibold" style={{ color: LC.ink }}>{l}</div>
                ))}
              </motion.div>
            ))}
          </div>

          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Lart+du+Cafe+Katara+Doha"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl"
            style={{ background: LC.brown }}
          >
            {t.visitDirections}
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-md"
        >
          <ArtFrame tone={LC.gold}>
            <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[0.85rem]" style={{ background: `linear-gradient(160deg, ${LC.cream}, ${LC.creamL})` }}>
              <div aria-hidden className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />

              <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full">
                <path d="M 20 220 Q 70 180 90 130 T 170 50" fill="none" stroke={LC.brown} strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" />
              </svg>

              <motion.div
                className="absolute left-1/2 top-[28%] flex -translate-x-1/2 flex-col items-center"
                animate={{ y: [-4, -14, -4] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg viewBox="0 0 48 64" width={56} height={72} style={{ filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.3))' }}>
                  <path d="M 24 0 C 12 0 3 9 3 21 C 3 38 24 62 24 62 C 24 62 45 38 45 21 C 45 9 36 0 24 0 Z" fill={LC.brown} stroke="#fff" strokeWidth="3" />
                  <circle cx="24" cy="21" r="9" fill={LC.cream} />
                </svg>
                <div className="mt-1 rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] shadow-lg" style={{ color: LC.brown }} {...arProps(isAr)}>
                  {t.visitMapPin}
                </div>
              </motion.div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <motion.div animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                  <CoffeeCup size={120} />
                </motion.div>
              </div>
            </div>
          </ArtFrame>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FINAL CTA                                                                   */
/* -------------------------------------------------------------------------- */

function FinalCTA({ t, isAr }: SP) {
  return (
    <section className="relative py-20 md:py-28" style={{ background: LC.creamL }}>
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] p-10 text-center text-white md:p-16"
          style={{ background: `radial-gradient(120% 130% at 80% 0%, ${LC.brown} 0%, ${LC.brownD} 70%, #1F140C 100%)` }}
        >
          <CafeBackdrop color={LC.cream} />

          <motion.div
            className="pointer-events-none absolute -left-6 -top-6 h-40 w-40"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CoffeeCup size={140} />
          </motion.div>

          <div className="relative" {...arProps(isAr)}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              <Star className="h-3 w-3" fill="currentColor" style={{ color: LC.gold }} /> {t.ctaEyebrow}
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl" style={SERIF}>
              {t.ctaTitle1}
              <span className="block italic" style={{ color: LC.gold }}>{t.ctaTitle2}</span>
            </h2>
            {!isAr && (
              <p className="mt-3 font-ar text-xl font-semibold text-white/85 md:text-2xl" dir="rtl" lang="ar">
                لحظة لك مع فنجان قهوة
              </p>
            )}
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              {t.ctaBody}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=Lart+du+Cafe+Katara+Doha"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] shadow-xl"
                style={{ background: LC.gold, color: LC.brownD }}
              >
                {t.ctaPlanVisit}
                <MapPin className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white"
                onMouseEnter={(e) => (e.currentTarget.style.color = LC.brownD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                {t.ctaFollowIg}
                <Instagram className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
