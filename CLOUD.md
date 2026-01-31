# Local Run + Smoke Tests (Demo)

## 0) Prereqs
- Node 20+
- pnpm 9+

## 1) Install
pnpm install

## 2) Build/Type Safety
pnpm lint
pnpm tsc --noEmit
pnpm build

## 3) Run (dev)
pnpm dev

## 4) Smoke Test Checklist (2–3 min)
### Home
- Hero image is CRISP (no white veil/washed overlay)
- HeroStats shows directly below Hero (mobile 2x2, desktop 4 columns)
- No layout shift (CLS) on load

### Scroll / Flicker
- Fast scroll + stop on Hero / FeaturedProjects
- Confirm no flicker/jank
- If flicker exists: open DevTools → Rendering → enable Paint Flashing and re-test

### Execution Standard
- Scroll through Execution/Process section
- Confirm it scrolls fully (not cut off)
- Confirm no nested overflow traps (no internal scroll unless intended)

### Nav
- Click Navbar + Footer links (no 404)

## 5) Quick Debug Notes
### If flicker persists:
- Ensure only transform/opacity are animated (no top/height/margin)
- Check for large backdrop-filter on scrolling layers
- Verify will-change: transform only on animated elements
- Check any dynamic text (clock/counters) uses tabular-nums to avoid reflow
