import type { Metadata } from 'next';
import { getDict, locales, type Locale } from '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { EcolandiaPage } from '@/components/sub-brands/EcolandiaPage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Ecolandia — Where Fun Takes Flight!',
  description:
    "Qatar's eco-friendly family entertainment destination. Explore playful adventures, interactive activities, and unforgettable family moments with our cheerful bird mascot.",
};

interface Props {
  params: { locale: string };
}

export default function EcolandiaSubBrand({ params }: Props) {
  const { locale: rawLocale } = params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDict(locale);

  return (
    <>
      <Navigation locale={locale} dict={dict} />
      <div className="h-20 md:h-24 lg:h-32" aria-hidden />
      <EcolandiaPage locale={locale} />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
