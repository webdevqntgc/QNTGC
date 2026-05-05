# QNTGC — Shaping the Future of Fun

The official corporate website for **Qatar National Trading Group Company (QNTGC)** — a regional ecosystem of retail, entertainment, lifestyle, and family experience brands across Qatar, the UAE, Oman, Kuwait, Australia, and the United States.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · React Three Fiber**.
Bilingual **English / Arabic** with full **RTL** support. Deployable as a fully static export.

---

## 1. Prerequisites

- **Node.js 20+**
- npm 10+ ships with Node

Verify the install:
```bash
node --version
npm --version
```

## 2. Install & run

From the project root:

```bash
npm install
npm run dev
```

You will be redirected to `/en` for English.
Switch language via the header globe icon → `/ar` for Arabic with RTL support.

## 3. Build a static production site

```bash
npm run build
```

The static site is emitted to `./out/`.

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
├── public/                     # Static assets
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

## 6. Wiring the contact form to a real backend

`components/Contact.tsx` currently shows a success state without sending data anywhere. To connect it:

- **Easiest** — point the `<form>` at a Formspree or Web3Forms endpoint:
  ```tsx
  <form action="https://formspree.io/f/your-id" method="POST" ...>
  ```
- **Custom API** — switch the build away from `output: 'export'` in `next.config.mjs` and add a Route Handler at `app/api/contact/route.ts` that posts to Resend / SendGrid / your CRM.

---

## 7. The 10 sections delivered

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

## 8. Customising content

All copy lives in two places:
- **UI labels & section copy** → `messages/en.json` and `messages/ar.json`
- **Brand portfolio** → `lib/brands.ts` (per-brand year, accent color, EN+AR description, locations)

Edit either, save, and the dev server hot-reloads.

---

## 9. Notes on the 3D hero

- Renders in a `<Canvas>` from React Three Fiber, dynamically imported with no SSR so the rest of the page stays statically pre-rendered.
- Three torus ribbons (red / navy / grey) approximate the QNTGC orbital mark, with a navy core and 6 planet brand-color satellites.
- `OrbitControls` auto-rotates slowly; the user can drag to orbit.
- The scene falls back to a subtle radial-gradient watermark while loading or when the user has `prefers-reduced-motion` set.

---

## 10. License

© Qatar National Trading Group Company. All rights reserved.
