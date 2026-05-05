import type { ReactNode } from 'react';
import { locales, localeMeta, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params }: Props) {
  const { locale } = params;
  if (!locales.includes(locale as Locale)) notFound();
  const dir = localeMeta[locale as Locale].dir;

  return (
    <div dir={dir} lang={locale} className={dir === 'rtl' ? 'font-ar' : 'font-sans'}>
      {children}
    </div>
  );
}
