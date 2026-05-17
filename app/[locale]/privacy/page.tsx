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
  title: 'Privacy Policy',
  description:
    'How Qatar National Trading Group Company (QNTGC) collects, uses, and protects your personal information.',
};

interface Props {
  params: { locale: string };
}

export default function PrivacyPage({ params }: Props) {
  const { locale: rawLocale } = params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDict(locale);

  return (
    <main>
      <Navigation locale={locale} dict={dict} />
      <div className="h-20 md:h-24 lg:h-32" aria-hidden />
      <LegalPage
        title="Privacy Policy"
        lastUpdated="May 2026"
        intro="At Qatar National Trading Group Company (“QNTGC”, “we”, “our”, or “us”) we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and the choices you have."
        sections={[
          {
            heading: 'Information We Collect',
            body: (
              <>
                <p>We may collect the following categories of information when you interact with our website, brands, stores, or services:</p>
                <ul>
                  <li><strong>Contact details</strong> — name, email, phone number, and address when you contact us, apply for a role, or sign up for updates.</li>
                  <li><strong>Application data</strong> — CVs, work history, and other materials you submit through our Careers page.</li>
                  <li><strong>Usage data</strong> — browser type, device, IP address, pages visited, and similar analytics information.</li>
                  <li><strong>Cookies and similar technologies</strong> — to remember your preferences and improve site performance.</li>
                </ul>
              </>
            ),
          },
          {
            heading: 'How We Use Your Information',
            body: (
              <>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Respond to enquiries and provide customer support.</li>
                  <li>Process and review job applications.</li>
                  <li>Send service updates, marketing communications (where you have opted in), and information about our brands.</li>
                  <li>Improve our website, products, and user experience.</li>
                  <li>Comply with legal and regulatory obligations in the State of Qatar.</li>
                </ul>
              </>
            ),
          },
          {
            heading: 'Cookies',
            body: (
              <p>
                Our website uses essential cookies required for the site to function, plus optional analytics cookies that help us understand how visitors use the site. You can disable cookies through your browser settings, although some features may not work as intended.
              </p>
            ),
          },
          {
            heading: 'Sharing Your Information',
            body: (
              <>
                <p>We do not sell your personal information. We may share information with:</p>
                <ul>
                  <li>Trusted service providers (hosting, email, analytics) acting on our behalf under strict confidentiality.</li>
                  <li>Members of the QNTGC brand family (Kiddy Zone, Spacetoys, Rondvill, Candyvill, PhotoBrick, Trampo Extreme, West Fun, Ecolandia, L’Art du Café) when relevant to your enquiry.</li>
                  <li>Regulatory authorities when required by law.</li>
                </ul>
              </>
            ),
          },
          {
            heading: 'Data Security',
            body: (
              <p>
                We apply industry-standard physical, technical, and administrative safeguards to protect your information from unauthorised access, disclosure, alteration, or destruction. No method of transmission over the internet is 100 % secure, but we work continuously to maintain the highest practical standards.
              </p>
            ),
          },
          {
            heading: 'Data Retention',
            body: (
              <p>
                We retain personal information only for as long as is necessary for the purposes set out in this Policy or as required by law. Job application data is retained for up to 12 months unless you ask us to remove it sooner.
              </p>
            ),
          },
          {
            heading: 'Your Rights',
            body: (
              <>
                <p>You have the right to:</p>
                <ul>
                  <li>Access the personal information we hold about you.</li>
                  <li>Request correction of inaccurate information.</li>
                  <li>Request deletion of your information (subject to legal obligations).</li>
                  <li>Withdraw consent for marketing communications at any time.</li>
                </ul>
                <p>To exercise any of these rights, email us at <a href="mailto:info@qntgc.com">info@qntgc.com</a>.</p>
              </>
            ),
          },
          {
            heading: 'Children’s Privacy',
            body: (
              <p>
                Our website is not directed to children under 13. We do not knowingly collect personal information from children without parental consent. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.
              </p>
            ),
          },
          {
            heading: 'Updates to This Policy',
            body: (
              <p>
                We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page reflects the latest revision. Material changes will be highlighted on this page.
              </p>
            ),
          },
          {
            heading: 'Contact Us',
            body: (
              <p>
                Questions about this Privacy Policy or our handling of your data? Reach us at <a href="mailto:info@qntgc.com">info@qntgc.com</a> or by phone at <a href="tel:+97477441910">+974 7744 1910</a>. Postal address: B2 Building, Salwa Road, Al Waab, Doha, Qatar.
              </p>
            ),
          },
        ]}
      />
      <Footer locale={locale} dict={dict} />
    </main>
  );
}
