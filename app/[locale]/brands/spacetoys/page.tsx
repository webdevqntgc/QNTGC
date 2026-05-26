import type { Metadata } from 'next';
import { getDict, locales, type Locale } from '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SpaceToysPage } from '@/components/sub-brands/SpaceToysPage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Space Toys — Just The Right Toys!',
  description:
    "Qatar's trusted toy destination since 2003. Original toys, collectibles, LEGO & blocks, plush, outdoor play and more — with same-day delivery and gift wrapping.",
};

interface Props {
  params: { locale: string };
}

export default function SpaceToysSubBrand({ params }: Props) {
  const { locale: rawLocale } = params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDict(locale);

  return (
    <>
      <Navigation locale={locale} dict={dict} />
      <div className="h-20 md:h-24 lg:h-32" aria-hidden />
      <SpaceToysPage locale={locale} />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
