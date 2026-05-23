'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import type { Locale, Dict } from '@/lib/i18n';
import { LogoLockup } from './LogoMark';
import { brands } from '@/lib/brands';
import clsx from 'clsx';

interface Props {
  locale: Locale;
  dict: Dict;
}

export function Navigation({ locale, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [brandsMobileOpen, setBrandsMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Anchor links are prefixed with the locale home so they work from any page
  // (homepage, /career, etc). Careers is its own page.
  const home = `/${locale}`;
  type Item =
    | { kind: 'link'; href: string; label: string; page: boolean }
    | { kind: 'brands'; label: string };
  const items: Item[] = [
    { kind: 'link', href: `${home}#about`,       label: dict.nav.about,       page: false },
    { kind: 'brands', label: dict.nav.brands },
    { kind: 'link', href: `${home}#milestones`,  label: dict.nav.milestones,  page: false },
    { kind: 'link', href: `${home}#market`,      label: dict.nav.market,      page: false },
    { kind: 'link', href: `${home}#csr`,         label: dict.nav.csr,         page: false },
    { kind: 'link', href: `${home}#leadership`,  label: dict.nav.leadership,  page: false },
    { kind: 'link', href: `${home}/career`,      label: dict.nav.careers,     page: true  },
    { kind: 'link', href: `${home}#contact`,     label: dict.nav.contact,     page: false },
  ];

  const otherLocale = locale === 'en' ? 'ar' : 'en';

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 bg-white backdrop-blur-xl transition-shadow duration-500',
          scrolled ? 'shadow-soft' : 'shadow-[0_1px_0_rgba(0,37,97,0.06)]'
        )}
      >
        <div className="container-page flex h-20 items-center justify-between md:h-24 lg:h-32">
          <Link href={`/${locale}`} className="shrink-0">
            <LogoLockup locale={locale} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {items.map((item) => {
              if (item.kind === 'brands') {
                return (
                  <div
                    key="brands"
                    className="relative"
                    onMouseEnter={() => setBrandsOpen(true)}
                    onMouseLeave={() => setBrandsOpen(false)}
                  >
                    <a
                      href={`${home}#brands`}
                      className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-brand-navy/80 transition-colors hover:bg-brand-grey-light hover:text-brand-navy"
                    >
                      {item.label}
                      <ChevronDown
                        className={clsx(
                          'h-3.5 w-3.5 transition-transform duration-300',
                          brandsOpen && 'rotate-180'
                        )}
                      />
                    </a>
                    <AnimatePresence>
                      {brandsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-1/2 top-full z-50 mt-2 w-[min(96vw,820px)] -translate-x-1/2"
                        >
                          {/* notch */}
                          <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white shadow-[-2px_-2px_4px_rgba(0,0,0,0.04)]" />
                          <div className="overflow-hidden rounded-3xl border border-brand-navy/10 bg-white shadow-2xl">
                            {/* Brand grid */}
                            <div className="grid grid-cols-3 gap-2 p-4 sm:grid-cols-5 md:grid-cols-9">
                              {brands.map((b) => (
                                <Link
                                  key={b.id}
                                  href={`/${locale}/brands/${b.id}`}
                                  className="group flex flex-col items-center gap-2 rounded-2xl p-2 transition-colors hover:bg-brand-grey-light/50"
                                  onClick={() => setBrandsOpen(false)}
                                >
                                  <span
                                    className="relative grid h-16 w-16 place-items-center rounded-full p-[3px] shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                                    style={{ background: `linear-gradient(135deg, ${b.accent}, ${b.bg})` }}
                                  >
                                    <span className="grid h-full w-full place-items-center rounded-full bg-white p-2">
                                      {b.logo ? (
                                        /* eslint-disable-next-line @next/next/no-img-element */
                                        <img
                                          src={b.logo}
                                          alt={`${b.name} logo`}
                                          className="h-full w-full object-contain"
                                          draggable={false}
                                        />
                                      ) : (
                                        <span className="font-display text-sm font-bold text-brand-navy">
                                          {b.name.slice(0, 2).toUpperCase()}
                                        </span>
                                      )}
                                    </span>
                                    {/* hover glow */}
                                    <span
                                      aria-hidden
                                      className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"
                                      style={{ background: b.accent }}
                                    />
                                  </span>
                                  <span className="text-center text-[10px] font-bold leading-tight text-brand-navy/85 transition-colors group-hover:text-brand-navy">
                                    {b.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return item.page ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-brand-navy/80 transition-colors hover:bg-brand-grey-light hover:text-brand-navy"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-brand-navy/80 transition-colors hover:bg-brand-grey-light hover:text-brand-navy"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={`/${otherLocale}`}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-brand-navy/15 bg-white/60 px-3 py-2 text-xs font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
              aria-label="Switch language"
            >
              <Globe className="h-3.5 w-3.5" />
              {otherLocale === 'ar' ? 'العربية' : 'EN'}
            </Link>

            <a href="#contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 !text-xs">
              {dict.nav.contactCta}
            </a>

            <button
              type="button"
              className="lg:hidden rounded-full p-2 text-brand-navy hover:bg-brand-grey-light"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-navy/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-page flex h-20 items-center justify-between md:h-24 lg:h-32">
              <LogoLockup locale={locale} variant="white" />
              <button
                type="button"
                className="rounded-full p-2 text-white hover:bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="container-page mt-12 flex flex-col gap-2">
              {items.map((item, i) => {
                const cls =
                  'rounded-2xl border-b border-white/10 py-4 text-2xl font-semibold text-white';
                if (item.kind === 'brands') {
                  return (
                    <motion.div
                      key="brands"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <button
                        type="button"
                        onClick={() => setBrandsMobileOpen((v) => !v)}
                        className={`flex w-full items-center justify-between ${cls}`}
                      >
                        {item.label}
                        <ChevronDown
                          className={clsx(
                            'h-5 w-5 transition-transform duration-300',
                            brandsMobileOpen && 'rotate-180'
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {brandsMobileOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-3 gap-3 py-4 sm:grid-cols-4">
                              {brands.map((b) => (
                                <Link
                                  key={b.id}
                                  href={`/${locale}/brands/${b.id}`}
                                  onClick={() => { setOpen(false); setBrandsMobileOpen(false); }}
                                  className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 p-3 transition-colors hover:bg-white/10"
                                >
                                  <span
                                    className="grid h-14 w-14 place-items-center rounded-full p-[2.5px]"
                                    style={{ background: `linear-gradient(135deg, ${b.accent}, ${b.bg})` }}
                                  >
                                    <span className="grid h-full w-full place-items-center rounded-full bg-white p-1.5">
                                      {b.logo ? (
                                        /* eslint-disable-next-line @next/next/no-img-element */
                                        <img src={b.logo} alt="" className="h-full w-full object-contain" draggable={false} />
                                      ) : (
                                        <span className="font-display text-xs font-bold text-brand-navy">{b.name.slice(0, 2)}</span>
                                      )}
                                    </span>
                                  </span>
                                  <span className="text-center text-[10px] font-bold leading-tight text-white/90">{b.name}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }
                return item.page ? (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link href={item.href} onClick={() => setOpen(false)} className={`block ${cls}`}>
                      {item.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className={cls}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
              <Link
                href={`/${otherLocale}`}
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white"
              >
                <Globe className="h-4 w-4" /> {otherLocale === 'ar' ? 'العربية' : 'English'}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
