# AppLovin static ads — 1080×1080

Ten stills, one per concept, built around the **December 11, 2026** federal THC cap.
Final PNGs are in `applovin-1080/`. `00-contact-sheet.png` shows all ten at a glance.

| # | File | Concept | Product shown |
|---|------|---------|---------------|
| 01 | `01-last-call.png` | Neon bar "last call" | D9 THC Gummies (Watermelon + Blue Raspberry) |
| 02 | `02-endangered.png` | Nature-doc species profile | THC Sleep Gummies 3-bag lineup |
| 03 | `03-prepper.png` | Bunker shelves, "stockpile sleep" | Sleep lineup ×4 on shelves |
| 04 | `04-point-four.png` | 5mg gummy vs 0.4mg legal limit | Single gummy + magnifier |
| 05 | `05-stocking.png` | Christmas stocking, "Santa's bringing melatonin" | Sleep lineup in stocking |
| 06 | `06-thanksgiving.png` | Nov 26 vs Dec 11 calendar | Sleep bag (hand shot) |
| 07 | `07-farewell-tour.png` | Concert poster, "No encore" | Sleep lineup |
| 08 | `08-sleep-through.png` | Calm night, "Sleep through it" | Sleep bag (hand shot) |
| 09 | `09-cupboard.png` | "Retailers get a deadline, you get a cupboard" | Sleep lineup + both D9 flavours |
| 10 | `10-countdown.png` | Giant day count | Sleep bag (hand shot) |

## Editing and re-rendering

Every ad is a self-contained HTML page in `src/`. Change the copy, re-run:

```powershell
.\src\render.ps1                         # all ten
.\src\render.ps1 -Names 10-countdown     # just one
```

Output lands in `src/out/`. Copy to `applovin-1080/` when happy.

**`10-countdown` is a template.** The number is hardcoded (`<div class="num">89</div>`).
Re-render it with the live count each time you refresh the creative — that's the whole
point of the concept. Days from today to Dec 11: `(new Date('2026-12-11') - Date.now()) / 864e5`.

## Product imagery

All product shots are PureKana's own, pulled from purekana.com's Shopify CDN:

- `d9-watermelon.png`, `d9-blueraspberry.png` — shipped as transparent PNGs, trimmed
- `sleep-3bags.png` — from `product-photo-sleep-gummies-3-best-seller.png`, background
  removed (pixelcut via fal.ai), the baked-in "200K customers" / "Best Seller" badges cropped off
- `sleep-hand.png` — from `product-photo-sleep-gummies-2.png`, background removed
- `gummy.png` — PureKana's `glowing-gummy.png`, trimmed

**Confirm with PureKana's affiliate program that use of their product photography in your
own creative is permitted.** Most programs allow it; some require you to use their supplied
asset kit. Don't assume.

## Compliance built in

- `21+` roundel and "Hemp-derived THC" on every ad
- No cartoon mascots, no candy-aisle styling — the tone is adult-funny, not kid-appealing.
  Keep it that way; child-appeal is the fastest route to a state enforcement action for THC edibles.
- No health or efficacy claims beyond "sleep" as a category descriptor
- Every date claim is the statute's actual date (P.L. 119-37 §781 as amended by H.R. 6500)

## AppLovin note

AppLovin's advertiser policy treats cannabis and CBD as restricted categories. Hemp-derived
THC will almost certainly need account-level pre-approval before these serve. Get that
cleared before building the campaign around them.
