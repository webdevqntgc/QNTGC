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
  Instagram,
} from 'lucide-react';
import type { Locale } from '@/lib/i18n';

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
/*  Translation dictionary                                                     */
/* -------------------------------------------------------------------------- */

type Dict = typeof EN;
const EN = {
  heroBadge: 'Sub-brand of QNTGC',
  heroTitle1: 'Where Fun',
  heroTitle2: 'Takes Flight!',
  heroBody: 'A colorful family entertainment destination where kids explore, play, laugh, and create unforgettable memories.',
  heroCta1: 'Explore Activities',
  heroCta2: 'Visit Ecolandia',

  aboutEyebrow: 'Our World',
  aboutTitle1: 'Welcome to',
  aboutTitle2: 'Ecolandia',
  aboutBody: 'Ecolandia is a playful entertainment space designed for children and families to enjoy active fun in a safe, colorful, and welcoming environment.',
  aboutCta: 'Discover the Fun',

  actEyebrow: 'Activities',
  actTitle1: 'Fun for Every',
  actTitle2: 'Little Explorer',
  actName1: 'Play Zones',
  actDesc1: 'Safe and colorful spaces for kids to move, jump, and explore.',
  actName2: 'Adventure Activities',
  actDesc2: 'Interactive experiences designed for energy, movement, and imagination.',
  actName3: 'Family Moments',
  actDesc3: 'A welcoming destination for parents and children to enjoy together.',
  actName4: 'Weekend Fun',
  actDesc4: 'Special promotions, seasonal activities, and exciting family events.',

  mascotEyebrow: 'Our Mascots',
  mascotTitle1: 'Meet the',
  mascotTitle2: 'Ecolandia Birds',
  mascotBody: 'Our cheerful little birds guide children through a world full of movement, color, laughter, and imagination.',

  galleryEyebrow: 'The Experience',
  galleryTitle1: 'A World Bursting',
  galleryTitle2: 'With Color',
  tilePlay: 'Play',
  tileExplore: 'Explore',
  tileLaugh: 'Laugh',
  tileFly: 'Fly',
  tileDiscover: 'Discover',

  promoEyebrow: 'Promotions',
  promoTitle1: 'Weekend Fun',
  promoTitle2: 'is Calling!',
  promoBody: 'Join us for exciting activities, family moments, and colorful adventures at Ecolandia.',
  promoCta: 'View Offers',
  notifTime: '5:00 PM',
  notifBody: "This weekend only, we're offering a special promotion on all activities. 🎉",

  visitEyebrow: 'Visit Us',
  visitTitle: 'Plan Your Visit',
  visitBody: 'Bring your family and let your children discover a world where fun takes flight.',
  cardOpen: 'Open Daily',
  cardOpenLine: '10:00 AM — 10:00 PM',
  cardLocation: 'Location',
  cardLocationLine: 'Doha, Qatar',
  contactCta: 'Contact Us',
  getDirections: 'Get Directions',
  mapPin: 'Pearl Qatar',

  ctaBadge: "Let's Go",
  ctaTitle1: 'Ready to Fly',
  ctaTitle2: 'Into Fun?',
  ctaBody: 'Visit Ecolandia and make every family day colorful, active, and unforgettable.',
  ctaPrimary: 'Visit Us Today',
  ctaSecondary: 'Contact Us',
  followLabel: 'Follow Ecolandia',
};

const AR: Dict = {
  heroBadge: 'علامة فرعية من المجموعة',
  heroTitle1: 'حيث تنطلق',
  heroTitle2: 'المتعة!',
  heroBody: 'وجهة ترفيهية ملوّنة للعائلات يستكشف فيها الأطفال ويلعبون ويضحكون ويصنعون ذكريات لا تُنسى.',
  heroCta1: 'استكشف الأنشطة',
  heroCta2: 'زر إيكولانديا',

  aboutEyebrow: 'عالمنا',
  aboutTitle1: 'أهلًا بكم في',
  aboutTitle2: 'إيكولانديا',
  aboutBody: 'إيكولانديا فضاء ترفيهي مرح صُمّم للأطفال والعائلات للاستمتاع بمرح نشِط في بيئة آمنة وملوّنة ودافئة.',
  aboutCta: 'اكتشف المرح',

  actEyebrow: 'الأنشطة',
  actTitle1: 'مرح لكلّ',
  actTitle2: 'مستكشف صغير',
  actName1: 'مناطق اللعب',
  actDesc1: 'مساحات آمنة وملوّنة للأطفال للحركة والقفز والاستكشاف.',
  actName2: 'أنشطة المغامرة',
  actDesc2: 'تجارب تفاعلية مصمّمة للطاقة والحركة والخيال.',
  actName3: 'لحظات عائلية',
  actDesc3: 'وجهة ترحيبية للآباء والأطفال للاستمتاع معًا.',
  actName4: 'مرح نهاية الأسبوع',
  actDesc4: 'عروض خاصة وأنشطة موسمية وفعاليات عائلية مشوّقة.',

  mascotEyebrow: 'شخصياتنا',
  mascotTitle1: 'تعرّفوا على',
  mascotTitle2: 'طيور إيكولانديا',
  mascotBody: 'طيورنا الصغيرة المرحة ترشد الأطفال في عالم مليء بالحركة والألوان والضحك والخيال.',

  galleryEyebrow: 'التجربة',
  galleryTitle1: 'عالم زاخر',
  galleryTitle2: 'بالألوان',
  tilePlay: 'العب',
  tileExplore: 'استكشف',
  tileLaugh: 'اضحك',
  tileFly: 'حلّق',
  tileDiscover: 'اكتشف',

  promoEyebrow: 'العروض',
  promoTitle1: 'مرح نهاية الأسبوع',
  promoTitle2: 'بانتظاركم!',
  promoBody: 'انضموا إلينا لأنشطة مشوّقة ولحظات عائلية ومغامرات ملوّنة في إيكولانديا.',
  promoCta: 'شاهد العروض',
  notifTime: '٥:٠٠ م',
  notifBody: 'في هذه العطلة فقط، نقدّم عرضًا خاصًا على جميع الأنشطة. 🎉',

  visitEyebrow: 'زورونا',
  visitTitle: 'خطّط لزيارتك',
  visitBody: 'أحضر عائلتك واترك أطفالك يكتشفون عالمًا تنطلق فيه المتعة.',
  cardOpen: 'مفتوح يوميًا',
  cardOpenLine: '١٠:٠٠ صباحًا — ١٠:٠٠ مساءً',
  cardLocation: 'الموقع',
  cardLocationLine: 'الدوحة، قطر',
  contactCta: 'تواصل معنا',
  getDirections: 'الاتجاهات',
  mapPin: 'اللؤلؤة قطر',

  ctaBadge: 'هيا بنا',
  ctaTitle1: 'مستعدون للتحليق',
  ctaTitle2: 'إلى المرح؟',
  ctaBody: 'زوروا إيكولانديا واجعلوا كل يوم عائلي ملوّنًا ونشِطًا لا يُنسى.',
  ctaPrimary: 'زورونا اليوم',
  ctaSecondary: 'تواصل معنا',
  followLabel: 'تابعونا',
};

type SP = { t: Dict; isAr: boolean };
const arProps = (isAr: boolean) =>
  isAr ? ({ dir: 'rtl' as const, lang: 'ar', className: 'font-ar' }) : ({});

/* -------------------------------------------------------------------------- */

export function EcolandiaPage({ locale }: { locale: Locale }) {
  const isAr = locale === 'ar';
  const t = isAr ? AR : EN;
  return (
    <main className="bg-white" style={{ color: EC.ink }}>
      <Hero t={t} isAr={isAr} />
      <About t={t} isAr={isAr} />
      <Activities t={t} isAr={isAr} />
      <MascotStory t={t} isAr={isAr} />
      <Gallery t={t} isAr={isAr} />
      <Promotions t={t} isAr={isAr} />
      <VisitSection t={t} isAr={isAr} />
      <FinalCTA t={t} isAr={isAr} />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*  HERO                                                                       */
/* -------------------------------------------------------------------------- */

function Hero({ t, isAr }: SP) {
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
            {...arProps(isAr)}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.2em] text-white"
              style={{ background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(8px)' }}
            >
              <Star className="h-3 w-3" fill="currentColor" /> {t.heroBadge}
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
              {t.heroTitle1}
              <span className="block" style={{ color: EC.yellow }}>{t.heroTitle2}</span>
            </h1>
            {!isAr && (
              <p className="mt-3 font-ar text-2xl font-bold text-white/90 md:text-3xl" dir="rtl" lang="ar">
                حيث تنطلق المتعة
              </p>
            )}

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              {t.heroBody}
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
                {t.heroCta1}
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
                {t.heroCta2}
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

function About({ t, isAr }: SP) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: `${EC.turquoise}1a` }}>
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          {...arProps(isAr)}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white"
            style={{ background: EC.turquoise }}
          >
            <Leaf className="h-3 w-3" /> {t.aboutEyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: EC.purple }}>
            {t.aboutTitle1}
            <span className="block" style={{ color: EC.pink }}>{t.aboutTitle2}</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: `${EC.ink}c0` }}>
            {t.aboutBody}
          </p>
          <motion.a
            href="#activities"
            whileHover={{ y: -3 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg transition-all duration-300"
            style={{ background: EC.purple, boxShadow: `0 14px 30px -5px ${EC.purple}80` }}
          >
            {t.aboutCta}
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

function Activities({ t, isAr }: SP) {
  const cards = [
    { name: t.actName1, desc: t.actDesc1, color: EC.purple,    Icon: Rocket },
    { name: t.actName2, desc: t.actDesc2, color: EC.pink,      Icon: Sparkles },
    { name: t.actName3, desc: t.actDesc3, color: EC.blue,      Icon: Heart },
    { name: t.actName4, desc: t.actDesc4, color: EC.turquoise, Icon: CalendarDays },
  ];

  return (
    <section id="activities" className="relative bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center" {...arProps(isAr)}>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white" style={{ background: EC.pink }}>
            <Star className="h-3 w-3" fill="currentColor" /> {t.actEyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: EC.purple }}>
            {t.actTitle1}
            <span className="block" style={{ color: EC.pink }}>{t.actTitle2}</span>
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
              {...arProps(isAr)}
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

function MascotStory({ t, isAr }: SP) {
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
        <div className="mx-auto max-w-3xl text-center" {...arProps(isAr)}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
            <Bird className="h-3 w-3" /> {t.mascotEyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {t.mascotTitle1}
            <span className="block" style={{ color: EC.yellow }}>{t.mascotTitle2}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
            {t.mascotBody}
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

function Gallery({ t, isAr }: SP) {
  const tiles = [
    { label: t.tilePlay,     color: EC.purple,    span: 'sm:row-span-2' },
    { label: t.tileExplore,  color: EC.yellow },
    { label: t.tileLaugh,    color: EC.pink },
    { label: t.tileFly,      color: EC.turquoise },
    { label: t.tileDiscover, color: EC.blue },
  ];

  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center" {...arProps(isAr)}>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white" style={{ background: EC.blue }}>
            <Sparkles className="h-3 w-3" /> {t.galleryEyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: EC.purple }}>
            {t.galleryTitle1} <span style={{ color: EC.pink }}>{t.galleryTitle2}</span>
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[150px] grid-cols-2 gap-4 sm:grid-cols-3 md:auto-rows-[180px]">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className={`group relative grid place-items-center overflow-hidden rounded-[1.75rem] shadow-lg ${tile.span ?? ''}`}
              style={{ background: `linear-gradient(150deg, ${tile.color}, ${tile.color}cc)` }}
            >
              <div aria-hidden className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.8)_2px,_transparent_0)] [background-size:26px_26px]" />
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-xl" />
              <span className="relative rounded-full bg-white px-5 py-2 font-display text-lg font-extrabold uppercase tracking-wide shadow-md transition-transform duration-300 group-hover:scale-110" style={{ color: tile.color, ...(isAr ? { fontFamily: 'inherit' } : {}) }} {...arProps(isAr)}>
                {tile.label}
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

function Promotions({ t, isAr }: SP) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: EC.orange }}>
      <div aria-hidden className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_2px_2px,_rgba(0,0,0,0.5)_2px,_transparent_0)] [background-size:36px_36px]" />
      <div aria-hidden className="absolute -left-24 top-10 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: EC.yellow }} />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        <div className="text-black" {...arProps(isAr)}>
          <span className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white">
            <CalendarDays className="h-3 w-3" /> {t.promoEyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {t.promoTitle1}
            <span className="block" style={{ color: EC.pink }}>{t.promoTitle2}</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-black/80">
            {t.promoBody}
          </p>
          <motion.a
            href="#visit"
            whileHover={{ y: -3 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg transition-transform duration-300"
          >
            {t.promoCta}
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
                  <span className="font-display text-sm font-extrabold" style={{ color: EC.purple }}>{isAr ? 'إيكولانديا' : 'Ecolandia'}</span>
                  <span className="text-[11px] font-semibold text-black/45">{t.notifTime}</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-black/70" {...arProps(isAr)}>
                  {t.notifBody}
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

function VisitSection({ t, isAr }: SP) {
  return (
    <section
      id="visit"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: `linear-gradient(160deg, ${EC.turquoise} 0%, ${EC.blue} 100%)` }}
    >
      <div aria-hidden className="absolute -right-24 top-10 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: EC.yellow }} />
      <div aria-hidden className="absolute -left-24 bottom-10 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: EC.pink }} />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        <div className="text-white" {...arProps(isAr)}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] backdrop-blur-sm">
            <MapPin className="h-3 w-3" /> {t.visitEyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {t.visitTitle}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">
            {t.visitBody}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-white/12 p-4 backdrop-blur-sm">
              <span className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: EC.yellow, color: EC.ink }}>
                <Clock className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">{t.cardOpen}</div>
                <div className="text-sm font-bold">{t.cardOpenLine}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/12 p-4 backdrop-blur-sm">
              <span className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: EC.pink }}>
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">{t.cardLocation}</div>
                <div className="text-sm font-bold">{t.cardLocationLine}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href={`/${isAr ? 'ar' : 'en'}/#contact`}
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg transition-all duration-300"
              style={{ background: EC.pink, boxShadow: `0 14px 30px -5px ${EC.pink}aa` }}
            >
              {t.contactCta}
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
              {t.getDirections}
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

        <div className="mt-1 rounded-full bg-white px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-900 shadow-lg" {...arProps(isAr)}>
          {t.mapPin}
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

function FinalCTA({ t, isAr }: SP) {
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

          <div className="relative" {...arProps(isAr)}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
              <Bird className="h-3 w-3" /> {t.ctaBadge}
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {t.ctaTitle1}
              <span className="block" style={{ color: EC.yellow }}>{t.ctaTitle2}</span>
            </h2>
            {!isAr && (
              <p className="mt-3 font-ar text-xl font-bold text-white/90 md:text-2xl" dir="rtl" lang="ar">
                استعدوا لعالم مليء بالمرح
              </p>
            )}
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
              {t.ctaBody}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.a
                href="#visit"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider shadow-xl transition-transform duration-300"
                style={{ color: EC.pink }}
              >
                {t.ctaPrimary}
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={`/${isAr ? 'ar' : 'en'}/#contact`}
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white"
                onMouseEnter={(e) => (e.currentTarget.style.color = EC.purple)}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
              >
                {t.ctaSecondary}
              </motion.a>
            </div>

            {/* Follow on social media */}
            <div className="mt-10">
              <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/70">{t.followLabel}</div>
              <div className="mt-3 flex flex-wrap justify-center gap-3">
                <a
                  href="https://www.instagram.com/ecolandia.qa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
                  onMouseEnter={(e) => (e.currentTarget.style.color = EC.purple)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                >
                  <Instagram className="h-[18px] w-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
