# Radhika Traders — Premium Showroom Demo

A responsive React + Vite + TypeScript multi-page product discovery website for Radhika Traders. This is a client presentation demo, not the production website.

## Run locally

Use Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). Stop an older Vite process with `Ctrl+C` before starting another copy.

## Checks

```bash
npm run typecheck
npm run build
npm run preview
```

Or run both checks together:

```bash
npm run check
```

## Project structure

- `src/components/` — shared header, visual collection menu, search, footer, product cards, quote form and layout
- `src/config/business.ts` — one source of truth for verified contact details
- `src/data/products.ts` — illustrative catalogue and collection data
- `src/pages/` — home, collection, product detail, gallery, about, contact and 404 routes
- `src/styles/global.css` — design system, showroom styling and responsive layouts
- `public/images/` — locally bundled illustrative product photography
- `public/brand-reference/` — supplied signboard photograph and extracted gold emblem

## Brand and logo

The supplied signboard image is retained at `public/brand-reference/radhika-signboard-reference.png`. The distinctive original symbol has been isolated from the signboard and recoloured champagne gold in `radhika-mark-gold.png`. It is used in the website header and footer. The primary wordmark reads **RADHIKA TRADERS**, as requested for this demo. Confirm the final wordmark with the shop owner before production.

The extracted PNG preserves the source sign's photographed silhouette. It is a presentation-ready raster mark, not a clean-room vector trace. A designer can trace it to SVG later if the owner wants a fully scalable master logo.

## Demo content and configuration

All catalogue entries, product photographs and specifications are illustrative demo references, not confirmed stock. No fixed prices, customer testimonials, years of experience, certifications, brand partnerships, phone numbers, opening hours or address are fabricated.

Update `src/config/business.ts` only after the business verifies its contact details. WhatsApp and phone actions remain inactive while their values are blank. When a WhatsApp number is configured, the quotation form prepares a pre-filled message for the customer to review and send.

The attachment picker is a visual demo only: the selected file name is included in the draft message, but the file itself is not uploaded or transmitted. Google Fonts are loaded remotely; system font fallbacks remain available when offline.

## Included functionality

- Responsive multi-page navigation with an accessible mobile menu
- Visual desktop collections menu and catalogue search
- Six dedicated collection routes
- Product search, type/finish filtering and sorting
- Product reference detail pages and related products
- Quote form with category/product prefill
- Configurable WhatsApp and telephone actions
- Gallery, About and Contact pages
- Page-specific document titles and social sharing metadata

## Explicitly out of scope

- No production backend, database, admin dashboard or inventory sync
- No payment or checkout flow
- No live stock, pricing or verified brand claims
- No production deployment

When this demo is approved and the actual production project begins, use the agreed client-owned Cloudflare architecture: client-owned Cloudflare account and domain, suitable static/React or Next.js frontend, Workers backend, D1 database, R2 media storage, manual Wrangler deployment, and a production security/ownership checklist.

## If the browser shows a blank page

This build includes a startup fallback and a React error boundary. If the app cannot start, the page should show the startup or component error instead of staying blank.

1. Stop every running Vite terminal with `Ctrl+C`.
2. Open a terminal in this project folder.
3. Run `npm run dev:clean` to force Vite to rebuild its dependency cache.
4. Open the exact local URL printed in the terminal.
5. Hard-refresh with `Ctrl+Shift+R`.
6. If an error card appears, copy its full error detail. If the startup fallback remains, copy the detail shown there and the terminal output.

If the page still appears completely blank, inspect DevTools → Console and send the first red error (including the file and line number). Do not run the old preview server from another extracted folder at the same time.

## 2.0.2 build fixes

This patch addresses two strict TypeScript errors found during local verification:

- The Instagram footer mark is now rendered using a small inline SVG instead of importing a brand icon that `lucide-react` does not export.
- `src/vite-env.d.ts` declares Vite client types and CSS side-effect imports so `src/main.tsx` can import the global stylesheet under strict TypeScript settings.

Run `npm install`, then `npm run check`. The full production build should be considered verified only after this command completes successfully on the target machine.
