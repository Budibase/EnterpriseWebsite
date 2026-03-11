# Mobile Responsiveness QA Report

Date: 2026-03-11

Audited base URL: `http://127.0.0.1:4325`

Canonical pages audited:
- `/`
- `/pricing`
- `/product/apps`
- `/product/automations`
- `/product/agents`
- `/product/data`

Viewport set:
- `390x844`
- `393x852`
- `430x932`
- `768x1024`

Screenshot artifact layout:
- `qa/mobile-responsive-2026-03-11/<page>/<viewport>/page.png`
- `qa/mobile-responsive-2026-03-11/<page>/<viewport>/mobile-nav-open.png`

## Severity Legend

- `P1`: broken layout or page-level overflow
- `P2`: clear mobile usability issue
- `P3`: minor polish or non-blocking behavior issue

## Route Context

The short URLs `/apps`, `/automations`, `/agents`, and `/data` return `404` locally in the dev server. This audit used the canonical product routes above and did not treat those `404` pages as the target product pages.

## Fixes Applied During Audit

Safe CSS-only fixes were applied before the final pass:
- Reflowed the home customer/logo rail and integration banner to remove page-level horizontal overflow on mobile/tablet.
- Reworked the apps faux UI layout for smaller viewports so the main hero demo no longer spills off-canvas.
- Stacked the automations flow vertically on mobile/tablet so workflow nodes stay in frame.
- Wrapped mobile tabs and token-chip content on the agents page to remove tab overflow and clipping.

## Findings

### `/`

- `390x844`: Pass. No page-level horizontal overflow. Hero, cards, logos, footer, CTA, and opened mobile nav remained stable. No visible layout shifts.
- `393x852`: Pass. Same result as `390x844`.
- `430x932`: Pass. Same result as `390x844`.
- `768x1024`: Pass. No page-level overflow. Sections remained stable. Internal decorative demo elements still use bounded overflow, but the page itself stayed contained.

### `/pricing`

- `390x844`: Pass. No horizontal overflow, no clipped pricing cards or table content, and footer/CTA spacing held up.
- `393x852`: Pass. Same result as `390x844`.
- `430x932`: Pass. Same result as `390x844`.
- `768x1024`: Pass. Same result as `390x844`.

### `/product/apps`

- `390x844`: `P2`. Page-level overflow is fixed, but the faux request-table content inside the hero demo is still heavily compressed and truncates request text. Buttons, nav spacing, footer, and CTA are stable.
- `393x852`: `P2`. Same residual truncation as `390x844`.
- `430x932`: `P2`. Same residual truncation, but readability is slightly better than the narrower mobile sizes.
- `768x1024`: `P3`. Main layout is stable and no section breaks remain. Minor clipping persists inside decorative preview cards (`AppRequestsPreview` and `AppDataSourcesPreview`), but the core page layout is intact.

### `/product/automations`

- `390x844`: Pass. No page overflow. Workflow nodes stay in frame after the responsive reflow. Cards, CTA, and footer are stable.
- `393x852`: Pass. Same result as `390x844`.
- `430x932`: Pass. Same result as `390x844`.
- `768x1024`: Pass. Same result as `390x844`.

### `/product/agents`

- `390x844`: Pass. No page-level overflow. Tabs now wrap cleanly on mobile. Hero, cards, footer, and CTA are stable.
- `393x852`: Pass. Same result as `390x844`.
- `430x932`: Pass. Same result as `390x844`.
- `768x1024`: Pass. No remaining clipping found in the final pass.

### `/product/data`

- `390x844`: Pass. No horizontal overflow. Hero, cards, footer, and CTA remain intact.
- `393x852`: Pass. Same result as `390x844`.
- `430x932`: Pass. Same result as `390x844`.
- `768x1024`: Pass. Same result as `390x844`.

## Cross-Page Mobile Nav Check

- Opened mobile-nav screenshots were captured for every audited page and viewport.
- Visual spacing, touch target size, and menu layout were acceptable after opening the mobile nav.
- `P3`: the mobile menu remains visually usable, but `#mobile-menu` keeps `aria-hidden="true"` while open. This is a behavior/accessibility issue, not a responsive CSS issue, so it was left unchanged.

## Layout Shift / Stability Notes

- No major layout shifts were observed during the final pass on the audited routes.
- Repeated console noise from missing `favicon-hidden.svg` was present during navigation, but it did not cause visible layout breakage and was intentionally left out of the CSS-only fix scope.

## Suggested Fixes By Impact

1. `P2` Simplify the faux request table on `/product/apps` for small screens by reducing visible columns further or switching that hero demo to a mobile card/list treatment below `430px`.
2. `P3` Update the mobile-menu open state to keep `aria-hidden` in sync with visual state.
3. `P3` Continue tuning the small decorative preview cards on `/product/apps` so compressed labels never truncate at tablet widths.
