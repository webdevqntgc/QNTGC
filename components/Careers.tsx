'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Briefcase,
  Building2,
  Sparkles,
  X,
  Upload,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import type { Dict } from '@/lib/i18n';

const HR_EMAIL = 'hr@qntgc.com';

interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
}

const JOBS: Job[] = [
  {
    id: 'graphic-designer',
    title: 'Graphic Designer',
    type: 'Full Time',
    location: 'Doha, Qatar',
    department: 'Creative Department',
    description:
      'Shape the visual identity of QNTGC and its brands. From toy packaging and in-store displays to social campaigns and seasonal lookbooks, your designs will reach families across the region. We’re looking for a strong eye for typography, layout, and brand consistency.',
  },
  {
    id: 'video-editor',
    title: 'Video Editor',
    type: 'Full Time',
    location: 'Doha, Qatar',
    department: 'Marketing Department',
    description:
      'Create cinematic content for our brand launches, social channels, and family campaigns. You’ll work with raw footage from stores and events to produce stories that bring the QNTGC ecosystem to life. Mastery of Premiere or Final Cut required; motion graphics a plus.',
  },
  {
    id: 'sales-associate',
    title: 'Sales Associate',
    type: 'Full Time',
    location: 'Qatar Branches',
    department: 'Retail Operations',
    description:
      'Be the face of QNTGC across our retail network. Welcome families, recommend the right toys, and turn every visit into a joyful memory. Hiring across our Qatar branches — full training provided. Friendly, energetic communicators with a love for kids and great service.',
  },
];

export function Careers({ dict }: { dict: Dict }) {
  const [expanded, setExpanded] = useState<string | null>(JOBS[0].id);
  const [applyJob, setApplyJob] = useState<Job | null>(null);

  return (
    <section
      id="careers"
      className="relative overflow-hidden bg-brand-grey-light/40 py-16 md:py-32"
    >
      {/* Brand-tinted ambient blobs */}
      <div className="absolute -left-40 top-32 h-[28rem] w-[28rem] rounded-full bg-brand-red/8 blur-[140px]" />
      <div className="absolute -right-40 bottom-20 h-[28rem] w-[28rem] rounded-full bg-brand-navy/10 blur-[140px]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,_rgba(0,37,97,0.6)_1px,_transparent_0)] [background-size:32px_32px]"
      />
      <div className="absolute top-0 left-0 h-1.5 w-32 bg-brand-red md:w-48" />

      <div className="relative container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_100px_-20px_rgba(0,37,97,0.18)] ring-1 ring-brand-navy/5 md:rounded-[2.5rem]"
        >
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-red/12 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-brand-navy/10 blur-3xl" />

          <div className="grid gap-12 p-8 md:p-12 lg:grid-cols-12 lg:gap-14 lg:p-16">
            {/* ── Left sidebar ─────────────────────────────────────────── */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <span className="eyebrow">Careers</span>

              <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-brand-navy md:text-5xl lg:text-6xl">
                Join Our
                <span className="block">
                  <span className="relative inline-block">
                    Team
                    <motion.span
                      aria-hidden
                      className="absolute -bottom-1 left-0 h-1.5 rounded-full bg-brand-red"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                    />
                  </span>
                </span>
              </h2>

              <p className="mt-5 max-w-sm text-base leading-relaxed text-brand-navy/65">
                Build your career with QNTGC — a regional ecosystem of brands creating joyful experiences for families.
              </p>

              <div className="mt-10">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-navy/45">
                  or contact us with
                </div>
                <a
                  href={`mailto:${HR_EMAIL}`}
                  className="group mt-3 inline-flex items-center gap-3 rounded-full border-2 border-brand-red/40 bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-red hover:shadow-glow-red"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-red text-white">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  {HR_EMAIL}
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-brand-navy/50">
                <a href="/en#about" className="transition-colors hover:text-brand-red">About</a>
                <a href="/en#brands" className="transition-colors hover:text-brand-red">Brands</a>
                <a href="/en#contact" className="transition-colors hover:text-brand-red">Contact</a>
              </div>
            </aside>

            {/* ── Right main: jobs ─────────────────────────────────────── */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between border-b border-brand-navy/10 pb-5">
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.3em] text-brand-navy/55">
                  Open Roles
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-red/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-red">
                  <Sparkles className="h-3 w-3" />
                  {JOBS.length} positions
                </span>
              </div>

              <div className="divide-y divide-brand-navy/10">
                {JOBS.map((job, i) => (
                  <JobRow
                    key={job.id}
                    job={job}
                    index={i}
                    isExpanded={expanded === job.id}
                    onToggle={() => setExpanded(expanded === job.id ? null : job.id)}
                    onApply={() => setApplyJob(job)}
                  />
                ))}
              </div>

              <div className="mt-12 grid gap-8 border-t border-brand-navy/10 pt-10 sm:grid-cols-2">
                <BottomBlock
                  title="Why Join Us"
                  body="At QNTGC, we create joyful experiences for children and families through creativity, teamwork, and passion."
                />
                <BottomBlock
                  title="Grow With Us"
                  body="Join a growing retail and entertainment company with opportunities across stores, marketing, design, and operations."
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Application modal */}
      <AnimatePresence>
        {applyJob && <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />}
      </AnimatePresence>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function JobRow({
  job,
  index,
  isExpanded,
  onToggle,
  onApply,
}: {
  job: Job;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  onApply: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group py-6 first:pt-6 md:py-7"
    >
      <div className="flex flex-wrap items-start justify-between gap-4 md:flex-nowrap md:items-center md:gap-6">
        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
            Open Role
          </div>
          <h4 className="mt-2 font-display text-2xl font-bold tracking-tight text-brand-navy md:text-3xl">
            {job.title}
          </h4>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-brand-navy/60">
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5" /> {job.type}
            </span>
            <span className="text-brand-navy/25">•</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {job.location}
            </span>
            <span className="text-brand-navy/25">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5" /> {job.department}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={onApply}
            className="group/btn hidden items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white shadow-glow-red transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red-dark sm:inline-flex"
          >
            Submit Application
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
          <button
            type="button"
            onClick={onToggle}
            aria-label={isExpanded ? 'Hide details' : 'Show details'}
            aria-expanded={isExpanded}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-brand-navy/15 text-brand-navy transition-all duration-300 hover:border-brand-navy hover:bg-brand-navy hover:text-white"
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="mt-5 rounded-2xl bg-brand-grey-light/60 p-6 ring-1 ring-brand-navy/5">
              <p className="text-sm leading-relaxed text-brand-navy/75">{job.description}</p>
              <button
                type="button"
                onClick={onApply}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-glow-red transition-all hover:bg-brand-red-dark sm:hidden"
              >
                Submit Application
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function BottomBlock({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="mb-3 flex items-center gap-2.5">
        <span className="h-1 w-6 rounded-full bg-brand-red" />
        <h4 className="font-display text-lg font-bold text-brand-navy md:text-xl">{title}</h4>
      </div>
      <p className="text-sm leading-relaxed text-brand-navy/65">{body}</p>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Application modal                                                          */
/* -------------------------------------------------------------------------- */

function ApplyModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFileName(f ? f.name : '');
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: hook to a real submission endpoint (Formspree / Web3Forms / your API)
    // For now we just show a success state — file upload payload is read from the form.
    setSubmitted(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-brand-navy/70 backdrop-blur-sm"
      />

      {/* Card */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="apply-modal-title"
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-[0_40px_120px_-20px_rgba(0,0,0,0.5)]"
      >
        {/* Top brand red accent */}
        <div className="h-1.5 w-full bg-brand-red" />

        {/* Close */}
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-5 grid h-9 w-9 place-items-center rounded-full text-brand-navy/60 transition-colors hover:bg-brand-grey-light hover:text-brand-navy"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-7 sm:p-8">
          {submitted ? (
            <SuccessState job={job} onClose={onClose} />
          ) : (
            <form onSubmit={onSubmit}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-red">
                Apply for
              </div>
              <h3
                id="apply-modal-title"
                className="mt-1.5 font-display text-2xl font-bold text-brand-navy md:text-3xl"
              >
                {job.title}
              </h3>
              <p className="mt-1 text-xs text-brand-navy/55">
                {job.type} · {job.location} · {job.department}
              </p>

              <div className="mt-6 space-y-4">
                <Field label="Full Name" name="fullName" type="text" required autoComplete="name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
                <Field label="Phone Number" name="phone" type="tel" required autoComplete="tel" />

                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-navy/60">
                    Upload CV <span className="text-brand-red">*</span>
                  </label>
                  <label
                    htmlFor="cv"
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed px-4 py-4 transition-colors ${
                      fileName
                        ? 'border-brand-red bg-brand-red/5'
                        : 'border-brand-navy/15 bg-brand-grey-light/40 hover:border-brand-red/60 hover:bg-brand-red/5'
                    }`}
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-red text-white">
                      {fileName ? <FileText className="h-4 w-4" /> : <Upload className="h-4 w-4" />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-brand-navy">
                        {fileName || 'Choose a file…'}
                      </span>
                      <span className="block text-[11px] text-brand-navy/55">
                        {fileName ? 'Click to replace' : 'PDF, DOC or DOCX (max 5 MB)'}
                      </span>
                    </span>
                    <input
                      id="cv"
                      name="cv"
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf"
                      required
                      onChange={onFileChange}
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-semibold uppercase tracking-wider text-brand-navy/60 hover:text-brand-navy"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-glow-red transition-all hover:-translate-y-0.5 hover:bg-brand-red-dark"
                >
                  Submit Application
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-4 text-[10px] leading-relaxed text-brand-navy/40">
                By submitting you consent to QNTGC contacting you about this role.
              </p>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-navy/60"
      >
        {label} {required && <span className="text-brand-red">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border-2 border-brand-navy/12 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition-colors placeholder:text-brand-navy/30 focus:border-brand-red"
      />
    </div>
  );
}

function SuccessState({ job, onClose }: { job: Job; onClose: () => void }) {
  return (
    <div className="py-4 text-center">
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 14 }}
        className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-red text-white shadow-glow-red"
      >
        <CheckCircle2 className="h-8 w-8" />
      </motion.div>
      <h3 className="mt-5 font-display text-2xl font-bold text-brand-navy">
        Application received
      </h3>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-brand-navy/65">
        Thanks for applying to <span className="font-semibold">{job.title}</span>. Our HR team will
        review your application and reach out shortly.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-red"
      >
        Close
      </button>
    </div>
  );
}
