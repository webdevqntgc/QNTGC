import type { Metadata } from 'next';
import { Poppins, Almarai } from 'next/font/google';
import './globals.css';
import { ContentProtection } from '@/components/ContentProtection';
import { BackToTop } from '@/components/BackToTop';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'],
  variable: '--font-almarai',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'QNTGC — Shaping the Future of Fun',
    template: '%s | QNTGC',
  },
  description:
    'Qatar National Trading Group Company is a regional ecosystem of trusted retail, entertainment, lifestyle, and family experience brands, shaping the future of fun across the Gulf and beyond.',
  keywords: [
    'QNTGC',
    'Qatar National Trading Group',
    'Kiddy Zone',
    'Spacetoys',
    'Trampo Extreme',
    'family entertainment Qatar',
    'toys Qatar',
  ],
  metadataBase: new URL('https://qntgc.com'),
  icons: {
    icon: '/QNTGC%20Logo.png',
    apple: '/QNTGC%20Logo.png',
  },
  openGraph: {
    title: 'QNTGC — Shaping the Future of Fun',
    description:
      'A regional ecosystem of retail, entertainment, lifestyle, and family experience brands.',
    type: 'website',
    locale: 'en_QA',
    siteName: 'QNTGC',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${poppins.variable} ${almarai.variable}`}>
      <body className="font-sans">
        <ContentProtection />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
