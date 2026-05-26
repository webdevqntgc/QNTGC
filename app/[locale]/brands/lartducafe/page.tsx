import type { Metadata } from 'next';
import { getDict, locales, type Locale } from '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { LartDuCafePage } from '@/components/sub-brands/LartDuCafePage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "L'Art du Café — Where Art Meets Coffee",
  description:
    "A refined café experience in Katara, Doha — speciality coffees, artisan desserts, French pastries, and a curated atmosphere.",
};

interface Props {
  params: { locale: string };
}

export default function LartDuCafeSubBrand({ params }: Props) {
  const { locale: rawLocale } = params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDict(locale);

  return (
    <>
      <Navigation locale={locale} dict={dict} />
      <div className="h-20 md:h-24 lg:h-32" aria-hidden />
      <LartDuCafePage locale={locale} />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
