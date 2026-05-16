import type { Metadata } from 'next';
import { getDict, locales, type Locale } from '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Careers } from '@/components/Careers';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join QNTGC — a regional ecosystem of brands creating joyful experiences for families. View our open roles and apply.',
};

interface Props {
  params: { locale: string };
}

export default function CareerPage({ params }: Props) {
  const { locale: rawLocale } = params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDict(locale);

  return (
    <main>
      <Navigation locale={locale} dict={dict} />
      {/* Spacer so the fixed navbar doesn't overlap the page content */}
      <div className="h-20 md:h-24 lg:h-32" aria-hidden />
      <Careers dict={dict} />
      <Footer locale={locale} dict={dict} />
    </main>
  );
}
