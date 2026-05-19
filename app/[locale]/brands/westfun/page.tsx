import type { Metadata } from 'next';
import { getDict, locales, type Locale } from '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { WestFunPage } from '@/components/sub-brands/WestFunPage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'West Fun — Take the Walk to the Wild',
  description:
    "Qatar's jungle-inspired family entertainment destination at West Walk. Explore the wild with safe play zones, adventure challenges, family moments, and birthday parties.",
};

interface Props {
  params: { locale: string };
}

export default function WestFunSubBrand({ params }: Props) {
  const { locale: rawLocale } = params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDict(locale);

  return (
    <>
      <Navigation locale={locale} dict={dict} />
      <div className="h-20 md:h-24 lg:h-32" aria-hidden />
      <WestFunPage />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
