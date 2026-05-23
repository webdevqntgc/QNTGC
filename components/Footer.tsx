'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import type { Dict, Locale } from '@/lib/i18n';
import { LogoLockup } from './LogoMark';

interface Props {
  locale: Locale;
  dict: Dict;
}

export function Footer({ locale, dict }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy-gradient text-white">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-navy-light/30 blur-3xl" />

      <div className="container-page relative grid gap-10 py-16 sm:grid-cols-2 sm:gap-12 lg:grid-cols-12 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-5 space-y-6">
          <LogoLockup locale={locale} variant="white" />
          <p className="max-w-md text-white/70 leading-relaxed">{dict.footer.tagline}</p>
          <div className="flex gap-3 pt-2">
            <a
              href="https://www.linkedin.com/company/qatar-national-trading-group"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-red"
              aria-label="QNTGC on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            {dict.footer.explore}
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href={`/${locale}#about`} className="text-white/80 hover:text-white">{dict.nav.about}</a></li>
            <li><a href={`/${locale}#brands`} className="text-white/80 hover:text-white">{dict.nav.brands}</a></li>
            <li><a href={`/${locale}#milestones`} className="text-white/80 hover:text-white">{dict.nav.milestones}</a></li>
            <li><a href={`/${locale}#market`} className="text-white/80 hover:text-white">{dict.nav.market}</a></li>
            <li><a href={`/${locale}#csr`} className="text-white/80 hover:text-white">{dict.nav.csr}</a></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            {dict.footer.company}
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href={`/${locale}#leadership`} className="text-white/80 hover:text-white">{dict.nav.leadership}</a></li>
            <li><Link href={`/${locale}/career`} className="text-white/80 hover:text-white">{dict.nav.careers}</Link></li>
            <li><a href={`/${locale}#contact`} className="text-white/80 hover:text-white">{dict.nav.contact}</a></li>
            <li><Link href={`/${locale === 'en' ? 'ar' : 'en'}`} className="text-white/80 hover:text-white">{locale === 'en' ? 'العربية' : 'English'}</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            {dict.footer.connect}
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5 text-white/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
              {dict.contact.info.address}
            </li>
            <li className="flex items-center gap-2.5 text-white/80">
              <Mail className="h-4 w-4 shrink-0 text-brand-red" />
              <a href={`mailto:${dict.contact.info.email}`} className="hover:text-white">{dict.contact.info.email}</a>
            </li>
            <li className="flex items-center gap-2.5 text-white/80">
              <Phone className="h-4 w-4 shrink-0 text-brand-red" />
              <a href={`tel:${dict.contact.info.phone}`} className="hover:text-white">{dict.contact.info.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {year} Qatar National Trading Group Company. {dict.footer.rights}</p>
          <div className="flex gap-6">
            <Link href={`/${locale}/privacy`} className="hover:text-white">{dict.footer.privacy}</Link>
            <Link href={`/${locale}/terms`} className="hover:text-white">{dict.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
