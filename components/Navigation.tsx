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

  const items = [
    { href: '#about', label: dict.nav.about },
    { href: '#brands', label: dict.nav.brands },
    { href: '#milestones', label: dict.nav.milestones },
    { href: '#csr', label: dict.nav.csr },
    { href: '#leadership', label: dict.nav.leadership },
    { href: '#contact', label: dict.nav.contact },
  ];

  const otherLocale = locale === 'en' ? 'ar' : 'en';

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-white/85 backdrop-blur-xl shadow-soft'
            : 'bg-transparent'
        )}
      >
        <div className="container-page flex h-24 items-center justify-between md:h-28 lg:h-32">
          <Link href={`/${locale}`} className="shrink-0">
            <LogoLockup locale={locale} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-brand-navy/80 transition-colors hover:bg-brand-grey-light hover:text-brand-navy"
              >
                {item.label}
              </a>
            ))}
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
            <div className="container-page flex h-24 items-center justify-between md:h-28 lg:h-32">
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
              {items.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-2xl border-b border-white/10 py-4 text-2xl font-semibold text-white"
                >
                  {item.label}
                </motion.a>
              ))}
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
