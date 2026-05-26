import type { Metadata } from 'next';
import { getDict, locales, type Locale } from '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { RondvillPage } from '@/components/sub-brands/RondvillPage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Rondvill — A Premium Gift & Toy Destination',
  description:
    'A luxury toy and gift destination at Katara Gift Box, Doha. Step inside a refined world of toys, gifts, collectibles, and memorable family discoveries.',
};

interface Props {
  params: { locale: string };
}

export default function RondvillSubBrand({ params }: Props) {
  const { locale: rawLocale } = params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDict(locale);

  return (
    <>
      <Navigation locale={locale} dict={dict} />
      <div className="h-20 md:h-24 lg:h-32" aria-hidden />
      <RondvillPage locale={locale} />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
