'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import type { Dict } from '@/lib/i18n';

export function Contact({ dict }: { dict: Dict }) {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual endpoint integration (e.g. Formspree, Resend, custom API)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="eyebrow mb-4 justify-center">{dict.contact.eyebrow}</span>
          <h2 className="heading-display mb-6">{dict.contact.title}</h2>
          <p className="text-lg text-brand-navy/70">{dict.contact.subtitle}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Info column */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 space-y-4"
          >
            {[
              { Icon: MapPin, label: dict.contact.info.address },
              { Icon: Mail, label: dict.contact.info.email, href: `mailto:${dict.contact.info.email}` },
              { Icon: Phone, label: dict.contact.info.phone, href: `tel:${dict.contact.info.phone}` },
            ].map(({ Icon, label, href }, i) => (
              <a
                key={i}
                href={href || '#'}
                className="flex items-start gap-4 rounded-2xl border border-brand-navy/10 bg-white p-5 transition-all hover:border-brand-red/40 hover:shadow-glow-red"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-red text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-medium text-brand-navy pt-2">{label}</div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="aspect-square overflow-hidden rounded-2xl bg-brand-grey-light">
              <iframe
                title="QNTGC location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=51.45,25.25,51.6,25.35&amp;layer=mapnik"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </motion.aside>

          {/* Form column */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 rounded-3xl bg-white p-8 shadow-card md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={dict.contact.name} name="name" required />
              <Field label={dict.contact.company} name="company" />
              <Field label={dict.contact.email} name="email" type="email" required />
              <Field label={dict.contact.phone} name="phone" type="tel" />
              <Field label={dict.contact.subject} name="subject" className="sm:col-span-2" />

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-navy/60">
                  {dict.contact.interestedIn}
                </label>
                <div className="flex flex-wrap gap-2">
                  {dict.contact.interestOptions.map((opt) => (
                    <label
                      key={opt}
                      className="cursor-pointer rounded-full border border-brand-navy/20 bg-white px-4 py-2 text-sm text-brand-navy/70 transition-all has-[:checked]:bg-brand-navy has-[:checked]:text-white has-[:checked]:border-brand-navy"
                    >
                      <input type="radio" name="interest" value={opt} className="sr-only" />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-navy/60">
                  {dict.contact.message}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-2xl border border-brand-navy/15 bg-brand-grey-light/50 px-4 py-3 text-brand-navy outline-none transition-colors focus:border-brand-red focus:bg-white"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              {submitted ? (
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-700">
                  <CheckCircle2 className="h-4 w-4" /> Message sent — we’ll be in touch soon.
                </span>
              ) : (
                <span className="text-xs text-brand-navy/40">We respect your privacy.</span>
              )}
              <button type="submit" className="btn-primary">
                {dict.contact.send} <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  className = '',
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-navy/60">
        {label}
        {required && <span className="text-brand-red">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-2xl border border-brand-navy/15 bg-brand-grey-light/50 px-4 py-3 text-brand-navy outline-none transition-colors focus:border-brand-red focus:bg-white"
      />
    </div>
  );
}
