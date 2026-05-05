# QNTGC — Shaping the Future of Fun

The official corporate website for **Qatar National Trading Group Company (QNTGC)** — a regional ecosystem of retail, entertainment, lifestyle, and family experience brands across Qatar, the UAE, Oman, Kuwait, Australia, and the United States.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · React Three Fiber**.
Bilingual **English / Arabic** with full **RTL** support. Deployable as a fully static export.

---

## 1. Prerequisites

- **Node.js 20+** (download from <https://nodejs.org>)
- npm 10+ (ships with Node)

Verify the install:
```bash
node --version
npm --version
```

## 2. Install & run

From the project root (`C:\Users\MUHAMMAD\Downloads\Code`):

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. You will be redirected to `/en` (English).
Switch language via the header globe icon → `/ar` (Arabic, RTL).

## 3. Build a static production site

```bash
npm run build
```

The static site is emitted to `./out/`. Upload that folder to any static host (Netlify, Vercel static, S3, Cloudflare Pages, GitHub Pages, on-prem nginx, etc.).

---

## 4. Project structure

```
.
├── app/
│   ├── layout.tsx              # Root layout (fonts: Poppins + Almarai, metadata)
│   ├── page.tsx                # / → redirects to /en
│   ├── globals.css             # Tailwind base + brand component classes
│   └── [locale]/
│       ├── layout.tsx          # Sets dir="rtl|ltr" + lang per locale
│       └── page.tsx            # Composes the full homepage
├── components/
│   ├── Navigation.tsx          # Sticky header, mobile drawer, language switcher
│   ├── Hero.tsx                # Cinematic hero with 3D scene
│   ├── hero/OrbitScene.tsx     # R3F: ribbons, core, planets, sparkles
│   ├── About.tsx               # Story + animated stat counters + orbit visual
│   ├── VisionMission.tsx       # Vision, Mission, 7 brand values
│   ├── BrandEcosystem.tsx      # Filterable brand grid (9 brands)
│   ├── Timeline.tsx            # 2003 → Future, dual-axis timeline
│   ├── MarketPresence.tsx      # Stats + animated world map
│   ├── CSR.tsx                 # 4 pillars + sustainability metric
│   ├── Leadership.tsx          # CEO + COO message cards
│   ├── LookingAhead.tsx        # Future vision + dual CTA
│   ├── Contact.tsx             # Form + map + contact info
│   ├── Footer.tsx              # Navy footer with brand mark + social
│   └── LogoMark.tsx            # Inline SVG logo + lockup
├── lib/
│   ├── i18n.ts                 # Locale registry + dictionary loader
│   └── brands.ts               # All 9 QNTGC brands (EN + AR descriptions)
├── messages/
│   ├── en.json                 # English UI dictionary
│   └── ar.json                 # Arabic UI dictionary
├── public/                     # Static assets (drop logo.png here — see §6)
├── tailwind.config.ts          # Brand colors, fonts, animations, shadows
├── next.config.mjs             # Static export config
└── package.json
```

---

## 5. Brand system reference

| Token              | Value     | Used for                           |
|--------------------|-----------|------------------------------------|
| `brand-red`        | `#B01117` | Primary accent, CTAs, energy       |
| `brand-navy`       | `#002561` | Trust, headings, footer            |
| `brand-grey`       | `#919497` | Neutrals, secondary text           |
| `brand-grey-light` | `#F4F5F6` | Section backgrounds                |

Fonts:
- **Poppins** — English/Latin (`font-sans`)
- **Almarai** — Arabic (`font-ar`, automatically applied when `dir="rtl"`)

Both are loaded via `next/font/google` — no external font requests at runtime.

---

## 6. Replacing placeholder assets with real ones

The site ships with **inline-SVG approximations** of the QNTGC mark and brand initials so it runs immediately. To use the official assets:

1. **Master logo** — save the official QNTGC logo as `public/qntgc-logo.svg` (or `.png`). Then replace the `<LogoMark />` calls inside `components/LogoMark.tsx` with:
   ```tsx
   import Image from 'next/image';
   <Image src="/qntgc-logo.svg" alt="QNTGC" width={120} height={40} priority />
   ```
2. **Brand logos** — drop each into `public/brands/{brand-id}.svg` (e.g. `kiddyzone.svg`, `spacetoys.svg`). Then in `components/BrandEcosystem.tsx` replace the gradient initial tile with an `<img src={`/brands/${brand.id}.svg`} />`.
3. **Leadership portraits** — drop into `public/team/ceo.jpg` and `public/team/coo.jpg`, then replace the initial circle in `components/Leadership.tsx` with `<Image>`.
4. **CSR / lifestyle photography** — drop into `public/csr/` and reference inside `components/CSR.tsx`.

All assets live under `public/` so they’re served as-is in the static export.

---

## 7. Wiring the contact form to a real backend

`components/Contact.tsx` currently shows a success state without sending data anywhere. To connect it:

- **Easiest** — point the `<form>` at a [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) endpoint:
  ```tsx
  <form action="https://formspree.io/f/your-id" method="POST" ...>
  ```
- **Custom API** — switch the build away from `output: 'export'` (in `next.config.mjs`) and add a Route Handler at `app/api/contact/route.ts` that posts to Resend / SendGrid / your CRM.

---

## 8. The 10 sections delivered

| # | Section          | Component             |
|---|------------------|-----------------------|
| 1 | Hero (3D)        | `Hero` + `OrbitScene` |
| 2 | About QNTGC      | `About`               |
| 3 | Vision/Mission/Values | `VisionMission`  |
| 4 | Brand Ecosystem  | `BrandEcosystem`      |
| 5 | History/Milestones | `Timeline`          |
| 6 | Market Presence  | `MarketPresence`      |
| 7 | CSR & Sustainability | `CSR`             |
| 8 | Leadership       | `Leadership`          |
| 9 | Looking Ahead    | `LookingAhead`        |
|10 | Contact          | `Contact` + `Footer`  |

---

## 9. Customising content

All copy lives in two places:
- **UI labels & section copy** → `messages/en.json` and `messages/ar.json`
- **Brand portfolio** → `lib/brands.ts` (per-brand year, accent color, EN+AR description, locations)

Edit either, save, and the dev server hot-reloads.

---

## 10. Notes on the 3D hero

- Renders in a `<Canvas>` from React Three Fiber, dynamically imported (no SSR) so the rest of the page stays statically pre-rendered.
- Three torus ribbons (red / navy / grey) approximate the QNTGC orbital mark, with a navy core and 6 planet brand-color satellites.
- `OrbitControls` auto-rotates slowly; the user can drag to orbit.
- The scene falls back to a subtle radial-gradient watermark while loading or when the user has `prefers-reduced-motion` set.

---

## 11. License

© Qatar National Trading Group Company. All rights reserved.
