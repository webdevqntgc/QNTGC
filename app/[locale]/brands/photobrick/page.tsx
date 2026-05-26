import type { Metadata } from 'next';
import { getDict, locales, type Locale } from '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { PhotoBrickPage } from '@/components/sub-brands/PhotoBrickPage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'PhotoBrick — Build Your Memories',
  description:
    'Turn your favourite photo into a stunning personalised brick mosaic. Hand-built, framed, and delivered. Branches in Qatar, UAE, USA & Australia.',
};

interface Props {
  params: { locale: string };
}

export default function PhotoBrickSubBrand({ params }: Props) {
  const { locale: rawLocale } = params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDict(locale);

  return (
    <>
      <Navigation locale={locale} dict={dict} />
      <div className="h-20 md:h-24 lg:h-32" aria-hidden />
      <PhotoBrickPage locale={locale} />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
