import { getDict, locales, type Locale } from '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { VisionMission } from '@/components/VisionMission';
import { BrandEcosystem } from '@/components/BrandEcosystem';
import { Timeline } from '@/components/Timeline';
import { MarketPresence } from '@/components/MarketPresence';
import { CSR } from '@/components/CSR';
import { Leadership } from '@/components/Leadership';
import { LookingAhead } from '@/components/LookingAhead';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface Props { params: { locale: string } }

export default function Home({ params }: Props) {
  const { locale: rawLocale } = params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDict(locale);

  return (
    <main>
      <Navigation locale={locale} dict={dict} />
      <Hero locale={locale} dict={dict} />
      <About dict={dict} />
      <VisionMission dict={dict} />
      <BrandEcosystem dict={dict} locale={locale} />
      <Timeline dict={dict} />
      <MarketPresence dict={dict} />
      <CSR dict={dict} />
      <Leadership dict={dict} />
      <LookingAhead dict={dict} />
      <Contact dict={dict} />
      <Footer locale={locale} dict={dict} />
    </main>
  );
}
