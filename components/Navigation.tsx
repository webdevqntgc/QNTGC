'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import type { Locale, Dict } from '@/lib/i18n';
import { LogoLockup } from './LogoMark';
import clsx from 'clsx';

interface Props {
  locale: Locale;
  dict: Dict;
}

export function Navigation({ locale, dict }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Anchor links are prefixed with the locale home so they work from any page
  // (homepage, /career, etc). Careers is its own page.
  const home = `/${locale}`;
  const items = [
    { href: `${home}#about`,       label: dict.nav.about,       page: false },
    { href: `${home}#brands`,      label: dict.nav.brands,      page: false },
    { href: `${home}#milestones`,  label: dict.nav.milestones,  page: false },
    { href: `${home}#market`,      label: dict.nav.market,      page: false },
    { href: `${home}#csr`,         label: dict.nav.csr,         page: false },
    { href: `${home}#leadership`,  label: dict.nav.leadership,  page: false },
    { href: `${home}/career`,      label: dict.nav.careers,     page: true  },
    { href: `${home}#contact`,     label: dict.nav.contact,     page: false },
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
            {items.map((item) =>
              item.page ? (
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
              )
            )}
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
