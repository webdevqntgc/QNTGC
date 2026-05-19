import type { Metadata } from 'next';
import { getDict, locales, type Locale } from '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { TrampoExtremePage } from '@/components/sub-brands/TrampoExtremePage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Trampo Extreme — Jump Into Extreme Fun',
  description:
    "Qatar's family destination for trampolines, climbing, Skytrail, Sky Tykes and soft play. Located at Aspire Park, Doha. Book tickets, plan birthdays, join Extreme Camps.",
};

interface Props {
  params: { locale: string };
}

export default function TrampoSubBrand({ params }: Props) {
  const { locale: rawLocale } = params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDict(locale);

  return (
    <>
      <Navigation locale={locale} dict={dict} />
      <div className="h-20 md:h-24 lg:h-32" aria-hidden />
      <TrampoExtremePage />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
