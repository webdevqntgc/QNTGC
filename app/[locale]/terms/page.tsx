import type { Metadata } from 'next';
import { getDict, locales, type Locale } from '@/lib/i18n';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { LegalPage } from '@/components/LegalPage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'The terms and conditions that govern your use of the Qatar National Trading Group Company (QNTGC) website and services.',
};

interface Props {
  params: { locale: string };
}

export default function TermsPage({ params }: Props) {
  const { locale: rawLocale } = params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDict(locale);

  return (
    <main>
      <Navigation locale={locale} dict={dict} />
      <div className="h-20 md:h-24 lg:h-32" aria-hidden />
      <LegalPage
        title="Terms of Use"
        lastUpdated="May 2026"
        intro="These Terms of Use (the “Terms”) govern your access to and use of the website operated by Qatar National Trading Group Company (“QNTGC”, “we”, “our”, or “us”). By visiting or using this website, you agree to be bound by these Terms. If you do not agree, please discontinue use of the site."
        sections={[
          {
            heading: 'Acceptance of Terms',
            body: (
              <p>
                Your continued use of this website signifies your acceptance of these Terms and any future amendments. We may update these Terms from time to time; the “Last updated” date at the top reflects the most recent revision.
              </p>
            ),
          },
          {
            heading: 'Use of the Website',
            body: (
              <>
                <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
                <ul>
                  <li>Infringe the rights of, or restrict or inhibit the use of the site by, any third party.</li>
                  <li>Attempt to gain unauthorised access to any part of the website, the server, or any connected database.</li>
                  <li>Introduce viruses, trojans, worms, or other malicious code.</li>
                  <li>Scrape, harvest, or otherwise collect content from the website without our written permission.</li>
                </ul>
              </>
            ),
          },
          {
            heading: 'Intellectual Property',
            body: (
              <p>
                All content on this website — including text, graphics, logos, brand names, icons, characters, photos, videos, and software — is owned by QNTGC or its licensors and is protected by Qatari and international intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.
              </p>
            ),
          },
          {
            heading: 'Brands and Trademarks',
            body: (
              <p>
                QNTGC, Kiddy Zone, Spacetoys, Rondvill, Candyvill, PhotoBrick, Trampo Extreme, West Fun, Ecolandia, L’Art du Café, and all related logos and characters are trademarks of QNTGC or its affiliates. Nothing on this website grants you any licence or right to use any of these trademarks without our prior written permission.
              </p>
            ),
          },
          {
            heading: 'User Submissions',
            body: (
              <p>
                When you submit information through this website — including job applications, enquiries, or feedback — you confirm that the information is accurate and that you have the right to share it. We may use such submissions for the purpose for which they were provided, in line with our <a href="/en/privacy/">Privacy Policy</a>.
              </p>
            ),
          },
          {
            heading: 'External Links',
            body: (
              <p>
                This website may include links to third-party websites. Such links are provided for convenience only and do not constitute an endorsement by QNTGC. We are not responsible for the content, accuracy, or privacy practices of external sites and recommend you review their terms before use.
              </p>
            ),
          },
          {
            heading: 'Disclaimer',
            body: (
              <p>
                The website and its content are provided on an “as is” and “as available” basis without warranties of any kind, express or implied. While we make reasonable efforts to keep information accurate and up to date, we do not warrant that the website will be uninterrupted, error-free, or free of viruses or harmful components.
              </p>
            ),
          },
          {
            heading: 'Limitation of Liability',
            body: (
              <p>
                To the maximum extent permitted by law, QNTGC and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill arising from your use of, or inability to use, this website.
              </p>
            ),
          },
          {
            heading: 'Governing Law',
            body: (
              <p>
                These Terms are governed by the laws of the State of Qatar. Any dispute arising out of or in connection with your use of this website shall be subject to the exclusive jurisdiction of the competent courts of Qatar.
              </p>
            ),
          },
          {
            heading: 'Contact',
            body: (
              <p>
                For questions about these Terms, please contact us at <a href="mailto:info@qntgc.com">info@qntgc.com</a> or call <a href="tel:+97477441910">+974 7744 1910</a>. Postal address: B2 Building, Salwa Road, Al Waab, Doha, Qatar.
              </p>
            ),
          },
        ]}
      />
      <Footer locale={locale} dict={dict} />
    </main>
  );
}
