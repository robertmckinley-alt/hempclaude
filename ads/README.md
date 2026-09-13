# AppLovin static ads — 200 × 1080×1080

Two product lines × 10 concepts × 10 executions. Every ad is generated from a template +
copy data, so any headline can be changed and the ad re-rendered in seconds.

```
applovin-1080/
  sleep/<concept>/v01..v10.png     THC Sleep Gummies (Huckleberry, 5mg THC · 5mg CBN · 3mg melatonin)
  thc/<concept>/v01..v10.png       D9 THC Gummies (Watermelon · Blue Raspberry, 10mg, 200mg/bag)
  <concept>/_sheet.png             10-up contact sheet per concept
  _sleep-all-100.png               every sleep ad on one grid
  _thc-all-100.png                 every THC ad on one grid
```

Deadline everywhere: **December 11, 2026** (P.L. 119-37 §781, delayed by H.R. 6500 signed Sept 2, 2026).

## Concepts

| Sleep line | THC line |
|---|---|
| 01 Last Call — neon bar sign | 01 Happy Hour's Over — neon bar sign |
| 02 Endangered Species — nature-doc profile | 02 Prohibition 2.0 — 1919 speakeasy poster |
| 03 Gummy Prepper — bunker shelves | 03 The Gummy Run — 2020 toilet-paper energy |
| 04 The 0.4mg Rumor — 5mg vs legal limit | 04 Weekend Math — 13 weekends × 20 per bag |
| 05 Stocking Stuffers — Christmas | 05 Pick a Side — Watermelon vs Blue Raspberry |
| 06 Survive Thanksgiving — Nov 26 vs Dec 11 | 06 Dear January-Me — typewriter note to future self |
| 07 Farewell Tour — concert poster | 07 Be the Friend — social currency |
| 08 Sleep Through the Ban — calm night | 08 Stores Stop. You Don't. — cupboard |
| 09 No Grandfather Clause — cupboard | 09 The Last Harvest — season-finale doc |
| 10 Live Countdown — 89 → 1 days | 10 Live Countdown — 89 → 1 days |

Within each concept the 10 variants are different hooks on the same idea, rotating product
shots (3-bag lineup / hand shot / single gummy on sleep; Watermelon / Blue Raspberry on THC)
and CTAs — built for A/B testing, not ten copies of one ad.

## How it's built

```
gen/
  templates/*.html    11 parametric layouts (neon, doc, shelf, compare, stocking,
                      calendar, poster, night, cupboard, count, note)
  data.js             20 concepts × 10 variants — ALL the copy lives here
  build.js            data + templates → build/*.html (200 pages)
  render-all.ps1      build/*.html → applovin-1080/<line>/<concept>/vNN.png (parallel Chrome)
  sheets.py           contact sheets
  img/  fonts/  ad.css
```

### Change copy and re-render

1. Edit the variant in `gen/data.js` — `H1`, `SUB`, `CTA`, `IMG`, or any template slot.
2. `node gen/build.js`
3. `.\gen\render-all.ps1 -Filter thc-04` (substring of the page name; omit to do all 200 — ~70s)
4. `python gen/sheets.py` to refresh the contact sheets

Template slots are `{{UPPERCASE}}` placeholders; anything in a concept's `defaults` applies
to all 10 variants unless the variant overrides it. `CSS` is a free slot for per-concept
palette overrides on the `:root` custom properties each template exposes.

### The countdown concepts (sleep-10, thc-10)

The ten variants are a **series** — 89, 75, 60, 45, 30, 21, 14, 7, 3, 1 days — meant to be
swapped in as the real count passes each number. If you need an exact figure on a given
day, edit `NUM` and re-render that one variant.

## Product imagery

All product shots are PureKana's own, from purekana.com's Shopify CDN:

- `d9-watermelon.png`, `d9-blueraspberry.png` — shipped as transparent PNGs, trimmed
- `sleep-3bags.png` — 3-bag lineup, background removed (pixelcut via fal.ai), baked-in
  "200K customers" / "Best Seller" badges cropped off
- `sleep-hand.png` — hand holding the bag, background removed
- `gummy.png` — PureKana's single-gummy render

**Confirm with PureKana's affiliate program that use of their product photography in your
own creative is permitted.** Most programs allow it; some require their asset kit.

## Compliance built in

- `21+` roundel and "Hemp-derived THC" on every unit
- No cartoon mascots, no candy-aisle styling. The tone is adult-funny. Keep it that way —
  child-appeal is the fastest route to a state enforcement action for THC edibles.
- No health/efficacy claims beyond "sleep" as a category descriptor
- Every date is the statute's actual date
- The `0.4mg` / `250×` / `500×` figures are the statute's per-container cap against the
  products' labelled THC content — verifiable, not hype

## AppLovin note

AppLovin's advertiser policy treats cannabis and CBD as restricted categories. Hemp-derived
THC will almost certainly need account-level pre-approval before these serve. Get that
cleared before building the campaign around them.
