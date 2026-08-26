# Hemp Deadline — Sleep Gummies Campaign

Three landing pages built around a real, verifiable regulatory deadline: the federal
total-THC cap that takes effect **November 12, 2026**.

| # | File | Angle | Best traffic source |
|---|------|-------|---------------------|
| 01 | `explainer.html` | Cited regulatory breakdown, retailer disclosure up top | Organic search, Reddit, email list |
| 02 | `sale.html` | Direct-response sales page, sticky CTA, 3-tier pricing | Paid social / search |
| 03 | `advertorial.html` | Native advertorial with persistent "Sponsored Content" label | Taboola / Outbrain / native |
| — | `index.html` | Hub linking all three, with build notes | Internal |

## The underlying fact

**Public Law 119-37, §781** (Continuing Appropriations Act, 2026 — H.R. 5371), signed
November 12, 2025, does two things:

1. Redefines hemp from **delta-9 THC only** to **total THC** (folding in THCA, delta-8, delta-10).
2. Caps finished consumer products at **0.4 mg total THC per container**.

Effective **November 12, 2026**. A delay to December 11 passed the Senate on August 8, 2026
but **has not been enacted** — November 12 remains operative.

The arithmetic that drives all three pages: a 5 mg × 20-count gummy bag holds **100 mg per
container** against a **0.4 mg** cap — roughly **250×** over. The cap is written per
*container*, not per serving, so there is no compliant reformulation. The U.S. Hemp Roundtable
estimates ~95% of hemp cannabinoid products fall outside the revised definition.

CBD, CBN and melatonin are **not** banned — only the THC content is capped.

## Configuration

Everything configurable lives in one block at the top of `assets/site.js`:

```js
window.SITE = {
  DEADLINE: '2026-11-12T00:00:00-05:00',
  DELAY_ENACTED: false,
  BUY:          'https://purekana.com/products/thc-sleep-gummies?variant=48855575068912',
  BUY_THC_FREE: 'https://purekana.com/products/thc-sleep-gummies',
  SHOP:         'https://purekana.com/collections/thc-gummies'
};
```

Every CTA on every page reads its `href` from a `data-link="BUY"` attribute, so swapping
`SITE.BUY` for your tracked affiliate URL updates all of them at once. Countdown timers and
every "78 days" figure (`data-days-left`) derive from `DEADLINE` — no hardcoded numbers to chase.

If the December 11 delay is ever signed into law, set `DEADLINE` to `'2026-12-11T00:00:00-05:00'`
and flip `DELAY_ENACTED` to `true`.

## Before you run traffic

- [ ] **Replace the testimonial slots on `sale.html`.** They render with dashed borders and
      bracketed placeholder text. Paste real, verbatim reviews from your own verified review
      platform. Do not paraphrase and do not invent — fabricated testimonials are the fastest
      route to an FTC enforcement action.
- [ ] **Verify pricing.** Figures were taken from the PureKana product page at build time
      ($26.21 single / $39.32 B2G1 / $52.42 B3G1) and change frequently.
- [ ] **Swap in tracked affiliate URLs** in `assets/site.js`.
- [ ] **Confirm the guarantee terms** on `sale.html` match the merchant's actual return policy.
- [ ] **Check state shipping restrictions** referenced in the FAQ still hold.

## Compliance notes

These pages are built to be persuasive without being deceptive — the urgency is real, so
nothing needs inventing. Specifically:

- Affiliate disclosure appears in the footer of all three pages, and above the fold on
  `explainer.html` and `advertorial.html`.
- `advertorial.html` carries a **sticky** "Sponsored Content" bar that stays visible while
  scrolling, per FTC native advertising guidance. It also states plainly in the footer that it
  is not independent journalism.
- No page is branded as a news organization, and no page carries a fabricated byline or a
  fabricated publication identity.
- FDA disclaimer, 21+ notice, pregnancy/nursing warning, drug-interaction warning, driving
  warning and drug-screen warning appear on the two product-facing pages.
- Statutory claims are cited and independently verifiable. The comparison table on `sale.html`
  is explicitly labeled as reflecting reported user experience rather than clinical trial data.

## Embedded video

All three pages embed The Hill's report *"Federal THC Ban Sends Hemp Companies Scrambling"*
(YouTube `Pj7OqIDjmEg`) as third-party corroboration of the deadline:

- **sale.html** — inside the hero: two-column on desktop, and on mobile the DOM
  order is headline -> video -> CTA so it clears the fold
- **explainer.html** — inside the hero, between the CTA pair and the countdown
- **advertorial.html** — lead visual under the byline, above the CTA pair

Verified above the fold at 390/768/1440px on all three, with zero horizontal overflow.

Served from `youtube-nocookie.com` with `loading="lazy"`, so it sets no cookies and costs
nothing on first paint until the viewer clicks play.

Every instance carries the line: *"The Hill is an independent news organisation. It is not
affiliated with, and does not endorse, any product referenced on this page."* Keep it. Using
news footage inside an ad without it invites an implied-endorsement claim, which is a
different and worse problem than an ordinary affiliate disclosure.

## Assets

Hero imagery generated with FLUX1.1 [pro] ultra via fal.ai and stored locally in `assets/`
so nothing depends on an expiring CDN. No image depicts a branded product package.

## Local preview

```bash
npx serve .
# or
python -m http.server 8000
```

Pure static HTML/CSS/JS — no build step, no dependencies, no framework.
