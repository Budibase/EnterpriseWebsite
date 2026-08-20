# Component guide

This guide describes the components used by the current website. Check these
building blocks before adding a new component so that typography, spacing,
responsive behavior, and interaction patterns remain consistent.

## Where components belong

- `src/layouts/` contains page shells. Use `MainLayout.astro` for standard site
  pages and `MarkdownPostLayout.astro` for article content.
- `src/components/` contains components intended for reuse across multiple
  pages.
- `src/components/cards/` contains individual cards and card collection
  layouts.
- `src/pages/**/_components/` contains components owned by a specific page or
  page family. Move one into `src/components/` when unrelated pages begin using
  it.
- `src/components/ui/` contains small, reusable interface primitives that do
  not fit a content-specific family. `FilterTabs` is currently the canonical
  component in this directory.

## Core components

### Page shell

Use `src/layouts/MainLayout.astro` for navigation, document metadata, global
styles, and the footer. Do not create page-specific copies of the site shell.

### Buttons and links

- Use `src/components/Button.astro` for styled actions. It can render either an
  anchor or a button and supports the production variants and sizes.
- Use `src/components/Link.astro` for inline or quiet links that should not look
  like buttons.
- Use a small wrapper around `Button` when an action needs additional behavior,
  such as scheduling metadata. Pass specialized HTML attributes through the
  `attributes` prop and keep the visual treatment in `Button`.

### Titles and sections

- Use `src/components/TitleBlock.astro` for all page and section title markup,
  including split-color titles and introductory descriptions.
- Use `src/components/SectionBlock.astro` when a `TitleBlock` introduces a larger
  section of slotted content. `SectionBlock` owns layout, width, alignment, and
  spacing; it delegates the title and description markup to `TitleBlock`.
- Use `src/components/SectionGrid.astro` for the standard site-width section
  grid.

Prefer extending one of these components with a small, reusable variant over
copying its typography into a page.

Shared landing-page headings use semantic size roles rather than component-
specific values:

- `heading-hero` for page and product heroes: 40px mobile, 52px tablet, and
  64px desktop.
- `heading-section` for major content sections and CTAs: 36px mobile, 42px
  tablet, and 48px desktop.
- `heading-subsection` for supporting groups and stat headings: 26px mobile,
  28px tablet, and 30px desktop.
- `heading-card` for card and compact feature titles: 18px at every breakpoint.

The tokens control hierarchy through size and line height. Components retain
their role-appropriate typeface, weight, letter spacing, and casing so the
condensed display face remains reserved for decisive brand moments.

### Cards

- Use `src/components/cards/Card.astro` for a single general-purpose card.
- Use `src/components/cards/CardCluster.astro` for a responsive collection of
  simple cards supplied as data. `CardCluster` controls the grid; it is not an
  alternative implementation of `Card`.
- Use `src/components/cards/FourColumnFeatureGrid.astro` for its specific
  feature-grid presentation.

Archive pages use `CardCluster` with four desktop columns and the stack
responsive layout.

### Filters and pagination

- Use `src/components/ui/FilterTabs.astro` for URL-based archive filters. Page
  families can provide thin typed wrappers, such as `BlogTopicPills` and
  `CustomerIndustryPills`.
- Use `src/components/Pagination.astro` for paginated archives.

### Heroes

- Use `src/components/HeroLarge.astro` for the media- or demo-led product hero.
- Use `src/components/HeroSmall.astro` for the compact product hero with an
  image, optional badge, action, and customer logos.

These heroes serve different layouts and should remain separate. For a unique
homepage hero, keep the implementation page-scoped unless another page adopts
the same pattern.

### Product page layouts

- Use `src/components/ProductPageLayout.astro` for product pages with bespoke
  body content and the standard compact product header.
- Use `ProductFeatureLandingPage.astro` for data-driven product feature pages
  that combine `HeroSmall` with the canonical `ProductFeatureBody` composition.
- Use `ProductFeatureBody.astro` after a bespoke product hero when the page needs
  the standard three-card overview, two feature sections, stats, and canonical
  product footer.
- Use `ProductPageFooter.astro` as the canonical ending for the 12 platform
  pages. It renders the homepage CTA followed by `ProductFeatureNav.astro`,
  leaving platform navigation immediately above the global footer.

`ProductPageLayout` accepts a custom `header` slot for pages such as the
connections directory that need controls inside the header. It does not infer
layout behavior from the current URL.

### Page composition

- `ProductFeatureBody.astro` is the canonical product-page body composition. It
  owns the card overview, feature sections, stats, site-grid wrappers, and
  `ProductPageFooter` shared by the standard platform landing pages, including
  Functions, Tables, API Explorer, Agents, Apps, and Automations. Its sequence
  is overview, detail, proof, and next action.
- `ProductFeatureNav.astro` reads labels, destinations, grouping, prefetch
  behavior, and icons from the platform dropdown data so both navigation
  surfaces stay in sync.
- `ProductFeatureLandingPage.astro` composes `HeroSmall` with
  `ProductFeatureBody.astro` for data-driven product feature pages.
- `SolutionLandingPage.astro` provides the corresponding solution-page
  composition.
- `FeatureSection.astro`, `StatSection.astro`, and the page-scoped
  `EnterpriseSection.astro` are the main reusable content sections.
- `CTA.astro` is the full-width closing call to action.
- `ContactSalesCTA.astro` is the smaller inline sales call to action. The two CTA
  components have different layout roles and should not be combined into one
  highly conditional component.

## Blog and customer archives

Blog and customer archives share these lower-level components:

- `FilterTabs` for link-based filters.
- `CardCluster` for the four-column listing.
- `Pagination` for archive pages.

Their topic and industry wrappers should remain thin: they own labels, URLs,
ordering, and the active item, while `FilterTabs` owns the presentation and
accessibility behavior.

## Before creating a component

1. Search `src/components/` and nearby page `_components/` for an existing
   building block.
2. Decide whether the component is reusable or belongs to one page family.
3. Prefer composition over adding many unrelated variants to one component.
4. Check light and dark modes and the mobile, tablet, and desktop layouts.
5. Run `npm run format` and `npm run build`.

When checking whether a component is unused, search Astro pages, JavaScript and
TypeScript modules, and MDX content. MDX files can import Astro components even
when no page imports them directly.
