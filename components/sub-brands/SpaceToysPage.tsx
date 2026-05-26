'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  Sparkles,
  Rocket,
  Gift,
  Truck,
  ShieldCheck,
  Package,
  Store,
  Blocks,
  Trophy,
  Palette,
  Bike,
  ShoppingCart,
  MapPin,
  Clock,
  Instagram,
  Facebook,
} from 'lucide-react';
import type { Locale } from '@/lib/i18n';

/* -------------------------------------------------------------------------- */
/*  Space Toys brand palette                                                   */
/* -------------------------------------------------------------------------- */

const ST = {
  navy:   '#005C96',
  dark:   '#071A4A',
  deep:   '#03102E',
  yellow: '#FFD600',
  red:    '#EF2B2D',
  green:  '#26A843',
  sky:    '#22A7E8',
  purple: '#B848B8',
  cloud:  '#EEF4FB',
};

const CHARS = {
  c1: '/sub%20brands/space_toys/orbicharacter%201.webp',
  c2: '/sub%20brands/space_toys/orbicharacter%202.webp',
  c3: '/sub%20brands/space_toys/orbicharacter%203.webp',
  c4: '/sub%20brands/space_toys/orbicharacter%204.webp',
  c6: '/sub%20brands/space_toys/orbicharacter%206.webp',
};

const SITE = 'https://spacetoyss.com/';

/* 3D puffy headline shadow stack */
const PUFFY: React.CSSProperties = {
  textShadow:
    '0 2px 0 rgba(0,0,0,0.25), 0 4px 0 rgba(0,0,0,0.2), 0 8px 18px rgba(0,0,0,0.55), 0 0 38px rgba(34,167,232,0.45)',
};

/* -------------------------------------------------------------------------- */
/*  Translation dictionary                                                     */
/* -------------------------------------------------------------------------- */

type Dict = typeof EN;
const EN = {
  heroBadge: "Qatar's Trusted Toy Destination Since 2003",
  heroTitle1: 'JUST THE',
  heroTitle2: 'RIGHT TOYS!',
  heroBody: "Carefully selected toys from the world's best brands — to spark imagination, create smiles, and make every moment special.",
  heroCta1: 'Shop Now',
  heroCta2: 'Explore Offers',
  pill1: 'Same-Day Delivery',
  pill2: 'Click & Collect',
  pill3: 'Free Pickup in 1 Hour',

  trust1Label: 'Same-Day Delivery',
  trust1Desc: 'Fast doorstep delivery across Qatar.',
  trust2Label: 'Original Brands',
  trust2Desc: '100% authentic, parent-trusted toys.',
  trust3Label: 'Gift Wrapping',
  trust3Desc: 'Beautifully wrapped, ready to gift.',
  trust4Label: 'Click & Collect',
  trust4Desc: 'Order online, pick up in-store.',

  catsEyebrow: 'Shop by Category',
  catsTitle1: 'Explore Every',
  catsTitle2: 'Planet of Play',
  cat1Name: 'LEGO & Blocks',
  cat1Desc: 'Build, create, and imagine.',
  cat2Name: 'Collectibles',
  cat2Desc: 'TCG, figures & rare finds.',
  cat3Name: 'Plush',
  cat3Desc: 'Soft, cuddly companions.',
  cat4Name: 'Outdoor',
  cat4Desc: 'Bikes, scooters & active play.',
  cat5Name: 'Arts & Crafts',
  cat5Desc: 'Spark creativity & colour.',
  browse: 'Browse',

  mascotEyebrow: 'Our Mascot',
  mascotTitle1: 'Meet',
  mascotTitle2: 'ORBI the Explorer',
  mascotBody: 'ORBI is our brave little astronaut, zooming across the galaxy to bring home the most fun, original, and imaginative toys for every child.',

  colEyebrow: "Collector's Corner",
  colTitle1: 'A Galaxy of',
  colTitle2: 'Collectibles',
  colBody: "Since 2003, Space Toys has been Qatar's destination for collectors — from the latest TCG releases to rare figures and the flagship branch at Doha City Centre.",
  stat1Label: 'Years of trust',
  stat2Label: 'Original brands',
  stat3Label: 'Collector hub',
  stat4Label: 'Flagship branch',
  colCta: 'Shop Collectibles',

  visitEyebrow: 'Visit Us',
  visitTitle: 'Find Us In-Store',
  visitBody: 'Visit our flagship branch at Doha City Centre or shop the full galaxy of toys online — delivered fast across Qatar.',
  flagshipLabel: 'Flagship',
  flagshipName: 'Doha City Centre',
  locationLabel: 'Location',
  locationName: 'Doha, Qatar',
  shopOnline: 'Shop Online',
  getDirections: 'Get Directions',
  mapPin: 'City Centre',

  ctaBadge: 'Blast Off',
  ctaTitle1: 'Ready for a Universe',
  ctaTitle2: 'of Play?',
  ctaBody: 'Original toys, trusted choices, big smiles — discover the right toy for every little explorer at Space Toys.',
  ctaShop: 'Shop Now',
  ctaContact: 'Contact Us',
  followLabel: 'Follow Space Toys',
};

const AR: Dict = {
  heroBadge: 'وجهة قطر الموثوقة للألعاب منذ ٢٠٠٣',
  heroTitle1: 'الألعاب',
  heroTitle2: 'المثالية!',
  heroBody: 'ألعاب مختارة بعناية من أفضل العلامات حول العالم — لإطلاق الخيال وصنع الابتسامات وجعل كل لحظة مميّزة.',
  heroCta1: 'تسوّق الآن',
  heroCta2: 'استكشف العروض',
  pill1: 'توصيل في نفس اليوم',
  pill2: 'اطلب واستلم',
  pill3: 'استلام مجاني خلال ساعة',

  trust1Label: 'توصيل في نفس اليوم',
  trust1Desc: 'توصيل سريع إلى باب منزلك في قطر.',
  trust2Label: 'علامات أصلية',
  trust2Desc: 'ألعاب أصلية ١٠٠٪ يثق بها الآباء.',
  trust3Label: 'تغليف الهدايا',
  trust3Desc: 'مغلّفة بأناقة وجاهزة للإهداء.',
  trust4Label: 'اطلب واستلم',
  trust4Desc: 'اطلب أونلاين واستلم من المتجر.',

  catsEyebrow: 'تسوّق حسب الفئة',
  catsTitle1: 'استكشف كل',
  catsTitle2: 'كوكب للّعب',
  cat1Name: 'ليغو ومكعبات',
  cat1Desc: 'ابنِ، أبدع، تخيّل.',
  cat2Name: 'مقتنيات',
  cat2Desc: 'بطاقات وشخصيات نادرة.',
  cat3Name: 'دُمى قطنية',
  cat3Desc: 'رفاق ناعمون يلاطفون.',
  cat4Name: 'خارجي',
  cat4Desc: 'دراجات وسكوترات ولعب نشِط.',
  cat5Name: 'فنون وحرف',
  cat5Desc: 'إطلق الإبداع والألوان.',
  browse: 'تصفّح',

  mascotEyebrow: 'شخصيتنا',
  mascotTitle1: 'تعرّفوا على',
  mascotTitle2: 'أوربي المستكشف',
  mascotBody: 'أوربي رائد فضاء صغير شجاع يجوب المجرّة ليحضر أمتع وأصلى وأكثر الألعاب خيالًا لكل طفل.',

  colEyebrow: 'ركن المقتنيات',
  colTitle1: 'مجرّة من',
  colTitle2: 'المقتنيات',
  colBody: 'منذ ٢٠٠٣، سبيس تويز هي وجهة قطر للمقتنيات — من أحدث إصدارات بطاقات التداول إلى الشخصيات النادرة، وفرعنا الرئيسي في سيتي سنتر الدوحة.',
  stat1Label: 'سنوات من الثقة',
  stat2Label: 'علامات أصلية',
  stat3Label: 'مركز المقتنيات',
  stat4Label: 'الفرع الرئيسي',
  colCta: 'تسوّق المقتنيات',

  visitEyebrow: 'زورونا',
  visitTitle: 'تجدوننا في المتجر',
  visitBody: 'زر فرعنا الرئيسي في سيتي سنتر الدوحة أو تسوّق المجرّة الكاملة من الألعاب أونلاين — توصيل سريع في قطر.',
  flagshipLabel: 'الفرع الرئيسي',
  flagshipName: 'سيتي سنتر الدوحة',
  locationLabel: 'الموقع',
  locationName: 'الدوحة، قطر',
  shopOnline: 'تسوّق أونلاين',
  getDirections: 'الاتجاهات',
  mapPin: 'سيتي سنتر',

  ctaBadge: 'انطلق',
  ctaTitle1: 'مستعد لعالم',
  ctaTitle2: 'من اللعب؟',
  ctaBody: 'ألعاب أصلية وخيارات موثوقة وابتسامات كبيرة — اكتشف اللعبة المثالية لكل مستكشف صغير في سبيس تويز.',
  ctaShop: 'تسوّق الآن',
  ctaContact: 'تواصل معنا',
  followLabel: 'تابع سبيس تويز',
};

type SP = { t: Dict; isAr: boolean };
const arProps = (isAr: boolean) =>
  isAr ? ({ dir: 'rtl' as const, lang: 'ar', className: 'font-ar' }) : ({});

/* -------------------------------------------------------------------------- */

export function SpaceToysPage({ locale }: { locale: Locale }) {
  const isAr = locale === 'ar';
  const t = isAr ? AR : EN;
  return (
    <main className="bg-white" style={{ color: ST.dark }}>
      <Hero t={t} isAr={isAr} />
      <TrustBar t={t} isAr={isAr} />
      <ShopByCategory t={t} isAr={isAr} />
      <MascotStory t={t} isAr={isAr} />
      <Collections t={t} isAr={isAr} />
      <VisitSection t={t} isAr={isAr} />
      <FinalCTA t={t} isAr={isAr} />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*  Shared — starfield                                                          */
/* -------------------------------------------------------------------------- */

function Stars({ count = 46 }: { count?: number }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = (n: number) => ((seed * (n + 1)) % 1000) / 1000;
        const colors = [ST.yellow, '#ffffff', ST.sky];
        const size = 2 + r(3) * 4;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${r(1) * 100}%`,
              top: `${r(2) * 100}%`,
              width: size,
              height: size,
              background: colors[i % colors.length],
              boxShadow: `0 0 ${6 + size}px ${colors[i % colors.length]}`,
            }}
            animate={{ opacity: [0.15, 1, 0.15], scale: [0.6, 1.35, 0.6] }}
            transition={{ duration: 2 + r(4) * 3, delay: r(5) * 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}
    </div>
  );
}

/* Nebula + stars backdrop for the dark sections */
function GalaxyBackdrop({ dense = false }: { dense?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl" style={{ background: `${ST.purple}80` }} />
      <div className="absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl" style={{ background: `${ST.sky}80` }} />
      <div className="absolute left-1/3 top-1/2 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: ST.navy }} />
      <Stars count={dense ? 60 : 38} />
    </div>
  );
}

/* A glossy planet */
function Planet({ size, c1, c2, ring }: { size: number; c1: string; c2: string; ring?: boolean }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {ring && (
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%]"
          style={{
            width: size * 1.85,
            height: size * 0.6,
            border: `${Math.max(3, size * 0.07)}px solid ${c2}aa`,
            transform: 'translate(-50%,-50%) rotate(-22deg)',
          }}
        />
      )}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 32% 28%, ${c1}, ${c2} 78%)`,
          boxShadow: `inset ${size * 0.12}px ${size * 0.14}px ${size * 0.3}px rgba(0,0,0,0.45), 0 0 ${size * 0.4}px ${c1}66`,
        }}
      />
      <div
        className="absolute rounded-full bg-white/55 blur-[1px]"
        style={{ width: size * 0.22, height: size * 0.14, left: size * 0.22, top: size * 0.18 }}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  HERO                                                                        */
/* -------------------------------------------------------------------------- */

function Hero({ t, isAr }: SP) {
  const pills = [
    { label: t.pill1, Icon: Truck },
    { label: t.pill2, Icon: Package },
    { label: t.pill3, Icon: Clock },
  ];
  return (
    <section
      className="relative pt-16 pb-40 md:pt-20 md:pb-52"
      style={{ background: `radial-gradient(130% 100% at 78% 6%, ${ST.navy} 0%, ${ST.dark} 52%, ${ST.deep} 100%)` }}
    >
      <Stars count={64} />

      {/* Big orbit rings */}
      <div aria-hidden className="absolute right-[-14%] top-[6%] hidden md:block">
        {[440, 620, 820].map((d, i) => (
          <motion.div
            key={d}
            className="absolute rounded-[50%]"
            style={{
              width: d,
              height: d * 0.42,
              left: -d / 2,
              top: -d * 0.21,
              border: `2px solid ${i === 1 ? ST.yellow : ST.sky}44`,
              transform: 'rotate(-20deg)',
            }}
          />
        ))}
        {/* Planet riding the middle ring */}
        <motion.div
          className="absolute"
          style={{ left: -10, top: -10, width: 620, height: 260 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute -right-6 top-1/2" style={{ transform: 'rotate(20deg)' }}>
            <Planet size={58} c1={ST.purple} c2={ST.navy} ring />
          </div>
        </motion.div>
      </div>

      {/* Earth glow bottom-right */}
      <div
        aria-hidden
        className="absolute -bottom-40 right-[-10%] h-[34rem] w-[34rem] rounded-full opacity-70 blur-2xl"
        style={{ background: `radial-gradient(circle at 40% 35%, ${ST.sky}cc, ${ST.navy}99 55%, transparent 72%)` }}
      />

      <div className="container-page relative grid items-center gap-10 lg:grid-cols-12">
        {/* Copy */}
        <div className="lg:col-span-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white"
            style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
            {...arProps(isAr)}
          >
            <Star className="h-3 w-3" style={{ color: ST.yellow }} fill="currentColor" />
            {t.heroBadge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-[3.4rem] font-extrabold leading-[0.92] tracking-tight md:text-7xl lg:text-[5.4rem]"
            style={PUFFY}
            {...arProps(isAr)}
          >
            <span className="text-white">{t.heroTitle1}</span>
            <span className="block" style={{ color: ST.yellow }}>{t.heroTitle2}</span>
          </motion.h1>

          {!isAr && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3 font-ar text-2xl font-bold text-white/85 md:text-3xl"
              dir="rtl"
              lang="ar"
            >
              الألعاب المناسبة تمامًا
            </motion.p>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-white/75 md:text-lg"
            {...arProps(isAr)}
          >
            {t.heroBody}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <motion.a
              href={SITE}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm font-extrabold uppercase tracking-wider shadow-xl"
              style={{ background: ST.yellow, color: ST.dark, boxShadow: `0 16px 34px -8px ${ST.yellow}` }}
            >
              {t.heroCta1}
              <Rocket className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="#categories"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/40 bg-white/5 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#071A4A]"
            >
              {t.heroCta2}
              <Gift className="h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-x-7 gap-y-3"
          >
            {pills.map(({ label, Icon }) => (
              <div key={label} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
                <span className="grid h-8 w-8 place-items-center rounded-full" style={{ background: `${ST.sky}33`, color: ST.yellow }}>
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ORBI scene */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-xl"
          >
            {/* Hero glow */}
            <motion.div
              className="absolute inset-[18%] rounded-full blur-3xl"
              style={{ background: `radial-gradient(circle, ${ST.sky}, transparent 70%)` }}
              animate={{ opacity: [0.4, 0.85, 0.4], scale: [0.95, 1.12, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Floating planets */}
            <motion.div
              className="absolute left-[2%] top-[10%]"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Planet size={72} c1={ST.yellow} c2={ST.red} />
            </motion.div>
            <motion.div
              className="absolute right-[4%] bottom-[14%]"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Planet size={56} c1={ST.green} c2={ST.navy} ring />
            </motion.div>

            {/* ORBI astronaut flying */}
            <motion.div
              className="absolute inset-0 grid place-items-center"
              animate={{ y: [0, -22, 0], x: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Rocket flame trail */}
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: 22 - i * 4,
                    height: 22 - i * 4,
                    background: i < 2 ? ST.yellow : ST.red,
                    left: `${24 - i * 6}%`,
                    top: `${70 + i * 5}%`,
                    filter: 'blur(2px)',
                  }}
                  animate={{ opacity: [0, 0.85 - i * 0.18, 0], scale: [0.6, 1.2, 0.6] }}
                  transition={{ duration: 1.4, delay: i * 0.12, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src={CHARS.c1}
                alt="ORBI — the Space Toys astronaut mascot"
                draggable={false}
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-[20rem] w-[20rem] select-none object-contain md:h-[26rem] md:w-[26rem]"
                style={{ filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.6))' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Cloud divider */}
      <svg className="absolute inset-x-0 bottom-0 h-20 w-full md:h-28" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0 60 C 150 110, 350 0, 600 50 S 1050 110, 1200 50 L1200 120 L0 120 Z" fill="#ffffff" />
      </svg>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  TRUST BAR                                                                   */
/* -------------------------------------------------------------------------- */

function TrustBar({ t, isAr }: SP) {
  const items = [
    { label: t.trust1Label, desc: t.trust1Desc, color: ST.sky,    Icon: Truck },
    { label: t.trust2Label, desc: t.trust2Desc, color: ST.green,  Icon: ShieldCheck },
    { label: t.trust3Label, desc: t.trust3Desc, color: ST.red,    Icon: Gift },
    { label: t.trust4Label, desc: t.trust4Desc, color: ST.purple, Icon: Package },
  ];
  return (
    <section className="relative bg-white pb-4 pt-2">
      <div className="container-page">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ label, desc, color, Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex items-center gap-4 rounded-3xl border border-black/5 bg-white p-5 shadow-lg"
              {...arProps(isAr)}
            >
              <span
                className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white shadow-md"
                style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
              >
                <Icon className="h-7 w-7" strokeWidth={2.3} />
              </span>
              <div>
                <h3 className="font-display text-base font-extrabold leading-tight" style={{ color: ST.dark }}>{label}</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-black/55">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SHOP BY CATEGORY                                                            */
/* -------------------------------------------------------------------------- */

function ShopByCategory({ t, isAr }: SP) {
  const cats = [
    { name: t.cat1Name, desc: t.cat1Desc, color: ST.red,    Icon: Blocks },
    { name: t.cat2Name, desc: t.cat2Desc, color: ST.yellow, Icon: Trophy },
    { name: t.cat3Name, desc: t.cat3Desc, color: ST.purple, Icon: Star },
    { name: t.cat4Name, desc: t.cat4Desc, color: ST.green,  Icon: Bike },
    { name: t.cat5Name, desc: t.cat5Desc, color: ST.sky,    Icon: Palette },
  ];
  return (
    <section id="categories" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div aria-hidden className="absolute -left-24 top-10 h-72 w-72 rounded-full opacity-10 blur-3xl" style={{ background: ST.sky }} />
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center" {...arProps(isAr)}>
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white" style={{ background: ST.navy }}>
            <Rocket className="h-3 w-3" /> {t.catsEyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: ST.navy }}>
            {t.catsTitle1}
            <span className="block" style={{ color: ST.red }}>{t.catsTitle2}</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {cats.map(({ name, desc, color, Icon }, i) => (
            <motion.a
              key={name}
              href={SITE}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] p-6 text-white shadow-xl transition-shadow duration-500 hover:shadow-2xl"
              style={{ background: `linear-gradient(155deg, ${color}, ${color}cc)` }}
              {...arProps(isAr)}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
              <div aria-hidden className="absolute -bottom-4 -right-4 h-24 w-24 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.85)_1.5px,_transparent_0)] [background-size:14px_14px]" />
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [0, -7, 0], rotate: [-8, 8, -8] }}
                  transition={{ duration: 3.6, delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                  className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-lg"
                  style={{ color }}
                >
                  <Icon className="h-7 w-7" strokeWidth={2.4} />
                </motion.div>
                <h3 className="font-display text-lg font-extrabold leading-tight">{name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/90">{desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider">
                  {t.browse} <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  MASCOT STORY — Meet ORBI                                                    */
/* -------------------------------------------------------------------------- */

function MascotStory({ t, isAr }: SP) {
  const orbis = [
    { src: CHARS.c2, color: ST.yellow, delay: 0   },
    { src: CHARS.c3, color: ST.sky,    delay: 0.3 },
    { src: CHARS.c4, color: ST.red,    delay: 0.6 },
  ];
  return (
    <section
      className="relative overflow-hidden py-20 text-white md:py-28"
      style={{ background: `radial-gradient(120% 120% at 20% 0%, ${ST.navy} 0%, ${ST.dark} 65%, ${ST.deep} 100%)` }}
    >
      <GalaxyBackdrop />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center" {...arProps(isAr)}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
            <Rocket className="h-3 w-3" /> {t.mascotEyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {t.mascotTitle1}
            <span className="block" style={{ color: ST.yellow }}>{t.mascotTitle2}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            {t.mascotBody}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {orbis.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative flex flex-col items-center"
            >
              <div aria-hidden className="absolute bottom-8 h-10 w-44 rounded-full blur-xl" style={{ background: `${o.color}aa` }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src={o.src}
                alt="ORBI mascot"
                draggable={false}
                animate={{ y: [0, -20, 0], rotate: [-6, 6, -6] }}
                transition={{ duration: 3.4 + i * 0.4, delay: o.delay, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-48 w-48 select-none object-contain md:h-56 md:w-56"
                style={{ filter: `drop-shadow(0 18px 24px rgba(0,0,0,0.5)) drop-shadow(0 0 26px ${o.color}80)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  COLLECTIONS                                                                 */
/* -------------------------------------------------------------------------- */

function Collections({ t, isAr }: SP) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: ST.cloud }}>
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          {...arProps(isAr)}
        >
          <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white" style={{ background: ST.purple }}>
            <Trophy className="h-3 w-3" /> {t.colEyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" style={{ color: ST.navy }}>
            {t.colTitle1}
            <span className="block" style={{ color: ST.red }}>{t.colTitle2}</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-black/65">
            {t.colBody}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              { k: '20+', v: t.stat1Label, c: ST.navy },
              { k: '100%', v: t.stat2Label, c: ST.green },
              { k: 'TCG', v: t.stat3Label, c: ST.purple },
              { k: 'DCC', v: t.stat4Label, c: ST.red },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                <div className="font-display text-2xl font-extrabold" style={{ color: s.c }}>{s.k}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-black/50">{s.v}</div>
              </div>
            ))}
          </div>

          <motion.a
            href={SITE}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg transition-all duration-300"
            style={{ background: ST.navy, boxShadow: `0 14px 30px -5px ${ST.navy}80` }}
          >
            {t.colCta}
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* Layered showcase card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div className="absolute -left-6 top-6 h-full w-full rounded-[2.5rem]" style={{ background: ST.yellow }} />
          <div className="absolute left-3 -top-4 h-full w-full rounded-[2.5rem]" style={{ background: ST.sky }} />
          <div
            className="absolute inset-0 grid place-items-center overflow-hidden rounded-[2.5rem] shadow-2xl"
            style={{ background: `radial-gradient(120% 120% at 30% 20%, ${ST.navy}, ${ST.dark})` }}
          >
            <div aria-hidden className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.85)_2px,_transparent_0)] [background-size:30px_30px]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src={CHARS.c6}
              alt=""
              draggable={false}
              animate={{ y: [0, -16, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-3/4 w-3/4 select-none object-contain"
              style={{ filter: 'drop-shadow(0 20px 26px rgba(0,0,0,0.5))' }}
            />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src={CHARS.c4}
            alt=""
            draggable={false}
            className="absolute -bottom-6 -right-6 h-28 w-28 select-none object-contain"
            animate={{ y: [0, -9, 0], rotate: [-8, 8, -8] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 12px 18px rgba(0,0,0,0.35))' }}
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
      style={{ background: `linear-gradient(160deg, ${ST.sky} 0%, ${ST.navy} 100%)` }}
    >
      <div aria-hidden className="absolute -right-24 top-10 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: ST.yellow }} />
      <div aria-hidden className="absolute -left-24 bottom-10 h-80 w-80 rounded-full opacity-25 blur-3xl" style={{ background: ST.purple }} />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        <div className="text-white" {...arProps(isAr)}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] backdrop-blur-sm">
            <Store className="h-3 w-3" /> {t.visitEyebrow}
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {t.visitTitle}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">
            {t.visitBody}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl bg-white/12 p-4 backdrop-blur-sm">
              <span className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: ST.yellow, color: ST.dark }}>
                <Store className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">{t.flagshipLabel}</div>
                <div className="text-sm font-bold">{t.flagshipName}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/12 p-4 backdrop-blur-sm">
              <span className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: ST.red }}>
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">{t.locationLabel}</div>
                <div className="text-sm font-bold">{t.locationName}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href={SITE}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider shadow-lg transition-all duration-300"
              style={{ background: ST.yellow, color: ST.dark, boxShadow: `0 14px 30px -5px ${ST.yellow}aa` }}
            >
              {t.shopOnline}
              <ShoppingCart className="h-4 w-4" />
            </motion.a>
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Space+Toys+Doha+City+Centre"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-[#005C96]"
            >
              {t.getDirections}
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>

        {/* Store map card */}
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
              style={{ background: `linear-gradient(150deg, ${ST.navy}, ${ST.dark})` }}
            >
              <div aria-hidden className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:34px_34px]" />

              <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full">
                <path d="M 20 130 Q 70 100 90 70 T 170 30" fill="none" stroke={ST.yellow} strokeWidth="3" strokeDasharray="6 5" strokeLinecap="round" />
              </svg>

              <motion.div
                className="absolute left-[50%] top-[38%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                animate={{ y: [-4, -12, -4] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg viewBox="0 0 48 64" width={52} height={68} style={{ filter: 'drop-shadow(0 8px 12px rgba(0,0,0,0.4))' }}>
                  <path d="M 24 0 C 12 0, 3 9, 3 21 C 3 38, 24 62, 24 62 C 24 62, 45 38, 45 21 C 45 9, 36 0, 24 0 Z" fill={ST.red} stroke="#fff" strokeWidth="3" />
                  <circle cx="24" cy="21" r="8" fill="#fff" />
                </svg>
                <div className="mt-1 rounded-full bg-white px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-slate-900 shadow-lg" {...arProps(isAr)}>
                  {t.mapPin}
                </div>
              </motion.div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src={CHARS.c3}
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
          style={{ background: `radial-gradient(120% 130% at 80% 0%, ${ST.navy} 0%, ${ST.dark} 60%, ${ST.deep} 100%)` }}
        >
          <GalaxyBackdrop />

          {/* ORBI flying across */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src={CHARS.c1}
            alt=""
            draggable={false}
            className="pointer-events-none absolute top-8 h-24 w-24 select-none object-contain"
            initial={{ x: '-30%' }}
            animate={{ x: ['-30%', '120%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 10px 16px rgba(0,0,0,0.5))' }}
          />

          <div className="relative" {...arProps(isAr)}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
              <Sparkles className="h-3 w-3" /> {t.ctaBadge}
            </span>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {t.ctaTitle1}
              <span className="block" style={{ color: ST.yellow }}>{t.ctaTitle2}</span>
            </h2>
            {!isAr && (
              <p className="mt-3 font-ar text-xl font-bold text-white/90 md:text-2xl" dir="rtl" lang="ar">
                عالم لا حدود له من المرح
              </p>
            )}
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
              {t.ctaBody}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.a
                href={SITE}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider shadow-xl transition-transform duration-300"
                style={{ background: ST.yellow, color: ST.dark }}
              >
                {t.ctaShop}
                <ShoppingCart className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={`/${isAr ? 'ar' : 'en'}/#contact`}
                whileHover={{ y: -3 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white hover:text-[#071A4A]"
              >
                {t.ctaContact}
              </motion.a>
            </div>

            {/* Follow on social media */}
            <div className="mt-10">
              <div className="text-xs font-extrabold uppercase tracking-[0.25em] text-white/65">{t.followLabel}</div>
              <div className="mt-3 flex flex-wrap justify-center gap-3">
                <SocialIconButton href="https://www.instagram.com/spacetoys_qa" type="instagram" />
                <SocialIconButton href="https://www.facebook.com/spacetoysqa/" type="facebook" />
                <SocialIconButton href="https://www.tiktok.com/@spacetoys_qa" type="tiktok" />
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
}: {
  href: string;
  type: 'instagram' | 'facebook' | 'tiktok';
}) {
  const label = type[0].toUpperCase() + type.slice(1);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="grid h-11 w-11 place-items-center rounded-full bg-white/12 text-white ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#071A4A] hover:shadow-lg"
    >
      {type === 'instagram' && <Instagram className="h-[18px] w-[18px]" />}
      {type === 'facebook'  && <Facebook  className="h-[18px] w-[18px]" />}
      {type === 'tiktok'    && <TikTokIcon className="h-[18px] w-[18px]" />}
    </a>
  );
}

function TikTokIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z"/>
    </svg>
  );
}
