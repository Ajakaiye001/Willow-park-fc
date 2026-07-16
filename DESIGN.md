# Willow Park FC — Design System

## Aesthetic lane
Terrace poster × matchday programme. Named references: Wrexham AFC rebrand
confidence, vintage Umbro catalogues, Irish GAA club posters. NOT editorial
magazine, NOT tech-minimal.

## Color strategy
**Committed → Drenched red.** Red carries the hero and the join section as a
full drench. Black carries fixtures (floodlit night section). Paper off-white
for story sections. Willow green appears only as a small ritual accent
(crest, one rule line, live badges).

Tokens (OKLCH):
- `--red`:        oklch(0.52 0.21 27)   — kit red, the drench
- `--red-deep`:   oklch(0.38 0.17 27)   — shadowed red
- `--black`:      oklch(0.17 0.01 27)   — kit black, tinted to red hue
- `--ink`:        oklch(0.22 0.012 27)  — body ink on paper
- `--paper`:      oklch(0.965 0.006 75) — warm programme paper
- `--paper-dim`:  oklch(0.93 0.008 75)
- `--green`:      oklch(0.55 0.13 150)  — willow green, ≤5% usage
- `--white-soft`: oklch(0.97 0.005 27)  — text on red/black

## Typography
- Display: **Anton** — condensed poster caps, tight tracking, enormous sizes
  via clamp(). The terrace voice.
- Body/UI: **Archivo** (variable) — humanist grotesque, real italics,
  tabular numerals for fixtures.
- Scale ratio ≥ 1.3. Body max 70ch.

## Layout
- Full-bleed drenched sections alternating with paper. Long scroll,
  one dominant idea per fold.
- Grid is visible in the programme section (hairline rules like printed
  fixture sheets). Hero breaks the grid with oversized stacked type.
- The crest (white-background JPG) is always presented as a "woven patch":
  on a paper chip with a hard offset shadow, slightly rotated.

## Motion
- Staggered hero reveal on load (translate + clip, ease-out-expo).
- IntersectionObserver reveals per section, 60–90ms stagger.
- Marquee ticker (est. 1972 / Athlone / Westmeath) — pauses on
  prefers-reduced-motion.
- No bounce, no elastic. Nothing animates layout properties.

## Components
- Ticker bar, patch-crest, roundel (rotating circular text badge),
  programme fixture rows with tabular numbers, jersey-number team list,
  news as dated list rows (not card grids).
