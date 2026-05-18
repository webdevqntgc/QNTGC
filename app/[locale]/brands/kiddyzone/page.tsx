import type { Metadata } from 'next';
import { getDict, locales, type Locale } from '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { KiddyZonePage } from '@/components/sub-brands/KiddyZonePage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Kiddy Zone — Gift from Another Planet',
  description:
    "Qatar's largest toy retail chain. Fourteen branches and growing across Qatar, the UAE and Oman. A Kiddy Zone gift is a gift from another planet.",
};

interface Props {
  params: { locale: string };
}

export default function KiddyZoneSubBrand({ params }: Props) {
  const { locale: rawLocale } = params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDict(locale);

  return (
    <>
      <Navigation locale={locale} dict={dict} />
      <div className="h-20 md:h-24 lg:h-32" aria-hidden />
      <KiddyZonePage />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
