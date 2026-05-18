import type { Metadata } from 'next';
import { getDict, locales, type Locale } from '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CandyVillPage } from '@/components/sub-brands/CandyVillPage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'CandyVill — A Magical Village of Sweetness',
  description:
    "Qatar's sweetest destination, where every corner tells a delicious story. Discover Chocovill, Cornvill, Icevill and Slushvill — four sweet worlds in one magical village.",
};

interface Props {
  params: { locale: string };
}

export default function CandyVillSubBrand({ params }: Props) {
  const { locale: rawLocale } = params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDict(locale);

  return (
    <>
      <Navigation locale={locale} dict={dict} />
      <div className="h-20 md:h-24 lg:h-32" aria-hidden />
      <CandyVillPage />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
