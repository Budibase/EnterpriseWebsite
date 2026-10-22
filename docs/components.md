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

Navigation dropdown links use `ui/NavStatusLight.astro` for their decorative
8px square markers, all using `--bb-olive-1000` across desktop and mobile
menus. Dropdown column headings use the stored geometric shapes through
`PlatformGroupMark` and `navigationGroupShapes`.

The Platform dropdown has four desktop columns: an unlabelled
`PlatformNavCard`, then Products, Capabilities, and Evaluate and deploy.
Its desktop panel is 76rem wide, capped at the viewport minus 2rem, with equal
grid tracks and an extra 1rem of space after the featured card.
Set `featuredCard.presentation="platform"` in the shared menu data to enable
the card; other dropdowns retain their existing layouts. The card uses a
Graphite pixel field with grey squares, bright Orange highlights from
`--bb-orange`, and the headline “Modernize processes.”
Hover and keyboard focus turn the highlighted squares Lime and reveal more
squares and underline the label. The pattern changes instantly.
The upper panel sits flush with the card edges; the padded lower row has a 40px
inverted forward-chevrons shape beside “Explore platform,” with no trailing
arrow. It links to `/platform/`.
The three group headings use arrow tiles, joined blocks, and the circle,
respectively. Roadmap and Changelog remain in the bottom strip.
Mobile uses a compact Explore platform link above the same three groups.
Product-page platform navigation and the global footer share these links;
the product-page navigation uses three columns on desktop.
Operations center is temporarily omitted from desktop, mobile, and product-page
navigation; `Footer.astro` retains it as a footer-only link under Products.

Resources has three dropdown groups: Build, Marketplace, and Explore. The
Marketplace group starts with the Marketplace overview link. About and Jobs
belong only to the footer's Company column; there is no Company dropdown or
Company group in Resources. Mobile omits a separate overview link when the
same destination already appears in a group.

## Palette roles

The five core brand colors are Lime (`--bb-lime`, `#A5FF00`), Olive
(`--bb-olive`, `#233207`), Orange (`--bb-orange`, `#FE6B1B`), Teal
(`--bb-teal`, `#016B83`), and Coconut (`--bb-coconut`, `#F7F7F4`). Lime and
Olive carry the identity, Orange supplies emphasis, Teal provides calmer
contrast, and Coconut is the main marketing canvas.

The supporting accents are Pink (`--bb-pink`, `#FFAFA5`), Orchid (`--bb-orchid`,
`#C8AFF0`), and Cloud (`--bb-cloud`, `#B4C8E1`), used selectively for illustration
fills and details. Aubergine (`--bb-aubergine`, `#78286E`) identifies Operations
center in asset symbols and interface demo accents, using Coconut foregrounds.
Public names use only the color name. The full Spectrum
palette and its utilities are no longer part of the active site.

Oat (`--bb-oat`, `#EBE9E4`) is the shared neutral for listings, company logo
tiles, panels, and supporting section backgrounds. The legacy `--bb-sand`
token aliases Oat. It replaces the previous separate Sand
and warm-grey card background roles.
Graphite is for body text; all twenty warm greys remain unchanged.
Subtle text uses grey 650 for contrast on Oat, decorative borders grey 100,
and control boundaries grey 500. Raised surfaces and product interfaces retain white.

Orange and Teal tint fills use 30% and 15% of their anchors with Coconut;
soft and subtle fills use 10% and 5%. `--bb-orange-strong` mixes 45% Orange
with Graphite for text on pale fills. Use Graphite on Orange, Pink, Orchid,
and Cloud, and Coconut on Teal. `--bb-danger` preserves functional error red.
Meaningful icons and focus indicators need at least 3:1 contrast; text must
meet AA on its actual surface. Keep semantic aliases in components.

## Core components

### Page shell

Use `src/layouts/MainLayout.astro` for navigation, document metadata, global
styles, and the footer. Do not create page-specific copies of the site shell.
Its optional `navLogoSrc` and `navDemoVariant="lime"` props let a page
provide a logo and select the lime demo button in desktop and mobile
navigation. MainLayout and Nav default to the full-width grid: 56px tall on
tablet/desktop and 48px below 768px, with 14px top-level labels and button text,
32px desktop buttons, separate link/action cells, no dropdown carets, and no
GitHub counter. The grid switches to the mobile accordion menu below 1200px.
Desktop dropdown top borders meet the navigation's bottom border without a gap.
Match Camunda's immediate desktop dropdown opening/closing, without a container
fade or slide; retain the subtle color transitions on links.
Light pages use Coconut with Olive controls. The homepage retains its transparent
overlay, white links, Lime logo/demo action and white secondary action. Geometry
stays consistent across themes. Shared navigation-height tokens match the grid
before JavaScript measures the rendered height.

Navigation buttons omit directional arrows in the current trial. The
homepage retains the hero's overlay-nav spacing. Former `/homepage-nav/` and
`/pricing-nav/` previews redirect to their adopted pages.

`src/components/NavLegacy.astro` preserves the previous navigation as a separate
component, including the GitHub counter, dropdown carets, 1024px mobile breakpoint,
80px desktop/64px mobile bar and 38px desktop buttons. Import it in place of Nav
when needed; do not render both headers together because they share element IDs
and interaction handlers. It continues to use the shared menu data and buttons.

`src/data/brandAssets.ts` owns the shared lime logo used by the homepage
navigation and global footer. The footer uses Olive with Lime
headings and Coconut links; homepage demo backdrops also use olive 1300.

### Buttons and links

The website `Button` component is for marketing CTAs. Inside product demos,
use native buttons (or anchors for navigation) with normal pill shapes,
sentence-case labels and compact product-interface sizing. Do not import
`Button` or apply its notches or decorative markers inside demos.

- The Lime color family lives in `global.css` as `--bb-lime-100` through
  `--bb-lime-1600`. `--bb-lime` aliases lime 300 (`#A5FF00`).
- When paired with another action, place **Contact sales** first in markup and
  visual order in page sections. The main navigation is the exception:
  **Try Budibase** comes before **Contact sales**.
- Use `src/components/Button.astro` for styled actions. It can render either an
  anchor or a button and supports the production variants and sizes.
  All variants include a 10px top-right corner cut; outlined variants trace
  the diagonal edge automatically.
  Secondary and outline buttons use white backgrounds, dark text, and
  `--bb-button-border` (grey 800) outlines, including the cut corner. Their hover surface
  uses the shared light-surface token, including on dark page sections.
- Use `variant="lime"` for the explicit `#A5FF00` action style. The `primary`,
  `cta-on-base`, and `bright-on-dark` variants also use Lime defaults and the
  shared olive-mixed interaction states. Primary labels use Olive. The homepage navigation, hero, and
  solutions select the explicit variant.
- Use `variant="olive"` for the Cloud pricing trial button and Contact sales
  in light-page navigation and primary actions in light landing-page heroes. It uses Olive, Coconut text, and Olive 1400/1500
  interaction states. The dark homepage navigation keeps its Lime demo button.
- The `cta` and legacy `large` variants retain their APIs and now use the same
  full-Lime treatment as other primary actions. CTA interaction aliases point to
  the shared Lime hover and pressed tokens. All action labels use sentence-case
  Geist at weight 500. Regular right/up-right arrows resolve to their
  bold Phosphor variants; other icon choices retain their existing behavior.
  Desktop nav buttons are 32px tall; mobile menu targets remain at least 44px.
  In the current arrow trial, primary page actions show a plain right/up-right
  arrow in the label color, except hero “Contact sales” buttons, which keep
  their square marker without an arrow. Navigation and secondary/outlined actions omit
  directional arrows. Functional icons such as download or dropdown indicators
  retain their behavior. Both large closing CTA actions use plain arrows
  in the label color. The large closing CTA cards use a 24px top-right cut corner.
- Shared buttons labeled “Try Budibase” or “Contact sales” show a static 7px
  decorative square before the label, with a 7px gap. Try Budibase uses
  Orange; Contact sales matches the label (Graphite on Lime, Olive on white)
  and uses Lime on Olive fills.
  These markers are hidden from assistive technology and do not represent live status.
  Every button with a marker adds 2px to its size's normal right padding;
  this spacing is owned by `Button`, including navigation and hero actions.
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
- Use `src/components/ui/Divider.astro` for an inset horizontal rule between
  adjacent page sections.
- Use the shared `page-section` spacing utilities for standard page sections.
  Apply the smallest matching modifier for hero, logo-row, flush-top, or
  section-surface treatments.

Prefer extending one of these components with a small, reusable variant over
copying its typography into a page.

Shared landing-page headings use semantic size roles rather than component-
specific values:

- `heading-hero` for page and product heroes: 32–42px mobile, 46px tablet, and
  56px desktop. Mobile heroes use `clamp(32px, 8.75vw, 42px)`. Compact split
  heroes retain TitleBlock’s 14px reduction above mobile. The homepage keeps its
  own 34–48px desktop, 48px tablet and 32–44px mobile treatment.
- `heading-section` for major content sections and CTAs: 30px mobile, 36px
  tablet, and 42px desktop.
- `heading-subsection` for supporting groups and stat headings: 26px mobile,
  28px tablet, and 30px desktop.
- `heading-card` for card and compact feature titles: 18px at every breakpoint.

The tokens control hierarchy through size and line height. Components retain
their role-appropriate typeface, weight, letter spacing, and casing so the
display face remains reserved for decisive brand moments.

`TitleBlock` has two variants: `hero` uses Geist at weight 700 in
uppercase for page-level statements, while `section` uses Geist
in sentence case for content sections. The `section` variant uses the semantic
`heading-section` scale at weight 500 with natural letter spacing. Use weight
500 and natural letter spacing for all `h2`, `h3`, and `h4` headings.

Use `--bb-text-body` for paragraphs and descriptive copy on light surfaces. It
maps to Graphite. Keep headings on their role-specific heading or
brand token, and use the appropriate `--bb-text-on-base*` token on dark
surfaces.

Page titles and H1s use Geist at normal width without changing their
existing size, weight, casing, spacing, or content.
The Budibase logo wordmark uses TikTok Sans; use the supplied logo assets
rather than recreating it with live text. The Budibase product UI uses Inter.
Geist is used for
H2–H6 headings, section/card titles, labels, buttons, body copy and navigation.
Use weight 400 for regular copy, 500 for supporting headings, labels and
navigation, and 500 for standard action-button labels. Closing CTA actions
use Geist at 400. Its Graphite action has no
decorative block mosaic. Retain existing semibold/bold emphasis and 700 hero
headlines. Tailwind classes express their actual weights.
The global H1 rule resolves to `--font-headline`; `--font-display-sans`
resolves to Geist, as does the legacy `--font-display` alias. Closing CTA actions use `--font-sans` (Geist), including
their scoped `--font-label` alias. Use `--font-heading-sans`
for supporting headings and `--font-label` or `brand-label` for labels; these
resolve to Geist. Geist has no optical-size axis. Enable ligatures and alternate
numbers (`ss09`) globally; do not carry over Inter's `opsz` or `ss07` settings.
Use Geist's default R and G throughout, including headings and the brand display
specimen. Keep the alternate-letter features `ss04` and `ss06` disabled.
`BrandFonts.astro` supplies one self-hosted,
preloaded Geist WOFF2 file through `Head.astro`. Use native width without
horizontal transforms. See `src/assets/fonts/README.md` for
coverage, licenses and regeneration.
Use `operational-data` for tabular figures in prices, stats and other comparable
values; times and tables also use tabular figures. `technical-identifier` uses
proportional figures and `ss09` for a slashed zero and alternate one. In this
Geist release, `ss09` does not alter the tabular zero/one, so do not combine
tabular figures with identifiers when the slashed zero is needed.
The homepage customer-proof cards use proportional lining figures, so Geist's
alternate one and slashed zero remain visible in their display numbers.

### Cards

Light feature card bodies use `--bb-background-feature-card` (Coconut,
`#F7F7F4`). Apply `card-cluster--feature` to feature collections; regular
listing cards retain `--bb-background-card` (Oat, `#EBE9E4`). This distinction
keeps feature surfaces independent of listings and logo tiles.
The homepage Apps equipment-inventory demo also uses Coconut for its screen,
table, and alert panel; its surrounding workspace uses Oat.

Keep card backgrounds unchanged on hover and focus; use borders, underlines,
and visible focus outlines for feedback. Use `--bb-text-card-subtle` (grey 700)
for card secondary copy. Pricing retains Coconut for neutral plan cards and
Oat for special packages. Keep colored and dark variants explicit, and retain
white product interface surfaces. Company logo tiles use Oat with no tile borders or grid separators; logo
rows with transparent backgrounds retain that treatment.

- Use `src/components/cards/Card.astro` for a single general-purpose card.
- Use `src/components/cards/CardCluster.astro` for a responsive collection of
  simple cards supplied as data. `CardCluster` controls the grid; it is not an
  alternative implementation of `Card`.
  The homepage platform section adds a 5px top-right notch to its card arrows,
  including the diagonal outline. Keep this treatment scoped to that section.
- Use `src/components/cards/FourColumnFeatureGrid.astro` for its specific
  feature-grid presentation.

Archive pages use `CardCluster` with four desktop columns and the stack
responsive layout.

### Filters and pagination

- Use `src/components/ui/FilterTabs.astro` for URL-based archive filters. Page
  families can provide thin typed wrappers, such as `BlogTopicPills` and
  `CustomerIndustryPills`.
- Use `src/components/Pagination.astro` for paginated archives.

### Asset symbols

`src/data/brandShapes.ts` is the registry for reusable geometric designs.
Render one with `ui/BrandShape.astro`, for example
`<BrandShape name="paired-switchers" size={32} />`. All designs share a 32 × 32
viewBox and use olive-1300 and lime tokens. Optional
`--brand-shape-background` and `--brand-shape-foreground` variables can adapt
the palette. Keep the default decorative treatment beside visible text; use
`decorative={false}` and a label when the shape conveys information on its own.
The default shape palette uses `--bb-olive-1300` for backgrounds and
`--bb-lime` (`#A5FF00`) for foreground fills and outlines.
The homepage announcement uses bright backgrounds with dark shapes:
Orange/dark Orange for Automate, light Teal/Teal for Interact, and Lime/Olive for
Govern. Each tile has a distinct background pairing.
Pass `inverted` to `BrandShape` or `PlatformGroupMark` to swap the background
and foreground colors, including any custom palette overrides. For example:
`<BrandShape name="four-point-spark" size={32} inverted />`.
The registry retains current marks, original alternatives, and geometric
studies in the project source; it has no public gallery or navigation entry.
Additional studies include `forward-chevrons`, `overlapping-orbits`,
`converging-rays`, `striped-orbit`, `four-point-spark`, and `cellular-field`.
Use the fine rays, striped orbit, and cellular field at larger decorative sizes.
Pricing plan titles use dedicated 32px inverted `BrandShape` marks:
`community-foundation`, `enterprise-framework`, and `cloud-current`.

Use `ui/PlatformGroupMark.astro` for the Connect, Automate, Interact, and Govern
group headings. It provides four decorative geometric marks with the shared
olive-1300 background and lime shapes: 24px beside navigation labels and 32px beside homepage group
labels. Desktop and mobile navigation share the same marks. Keep the visible
text label alongside each mark; these do not replace asset or integration icons.
Connect uses joined blocks, Automate uses four diagonal arrow-like tiles,
Interact uses two opposing toggle shapes, and Govern uses a simple circle.
This component selects from the registry; `variant="original"` restores the
earlier group design without duplicating SVG markup.

Use `ui/AssetTypeIcon.astro` for the homepage solution switcher, template
comparison symbols, and plugin directory icons. Plugin components use App,
datasources use Table, and automation plugins use Automation. It owns the 22px square container, 14px filled icon,
foreground colors, and shared type palette: Agent/Teal, App/Orange,
Automation/Orchid, Operations center/Aubergine, Table/Cloud, and Function/Lime.
Teal and Aubergine use Coconut icons; the other fills use Graphite. Parent markup
provides accessible labels and any focus or tooltip behavior. Navigation link
lights use olive 1000; group shapes and missing partner-logo marks use the
Olive/Lime pair. Decorative mosaics use the named supporting accents.

### Heroes

Platform/product landing-page hero and feature buttons use trailing bold arrow
tiles through `Button`, including both Contact sales and Try Budibase. The large
closing demo action uses a plain arrow; secondary actions use labels only.

- The homepage hero keeps “Make critical work” above “move faster.” The latter
  uses a tightly padded Lime highlight, Olive text, and a 10px top-right cut.
  Keep this page-owned treatment in `HomepageHero.astro`.

- `HomepageContent.astro` owns the production homepage composition, including
  its original hero video, solution demos, product cards, and closing CTA.
  `HomepageCustomerProof.astro` places three linked customer outcome cards
  directly beneath the logo strip, with an equal-width desktop grid and a
  single-column mobile layout. Keep projected savings and first-draft delivery
  qualifiers alongside their statistics.

- `HomepageProductOverview.astro` places a scroll-driven product overview after
  customer proof and before use cases, numbered Apps, Agents, Automations,
  and Requests & approvals. On desktop, sticky product navigation and the
  active headline and product link occupy roughly 22% of the grid; large 4:3 graphics scroll
  in the remaining space. Scrolling updates the active product, and clicking
  a product jumps to its graphic. Below 960px, a sticky horizontal navigation
  follows vertically stacked headlines, product links, and graphics. Omit the
  per-product description paragraphs in both layouts. Scroll updates are
  animation-frame throttled, and anchor navigation respects reduced motion.
  Local SVG images in `src/assets/images/homepage/products/` are temporary
  placeholders. Requests & approvals leads with the job; its product page can
  introduce the Operations center workspace. The default feature-switcher
  presentation is unchanged.

- Use `src/components/BlockMosaic.astro` for static, decorative solid-color
  mosaics. The `marketplace` preset retains the varied rectangular composition
  with Teal and Orange, selective Pink, Orchid, and Cloud fills, Oat, and
  restrained Lime and Olive;
  the `hero` preset uses three columns of two blocks with varied heights. Parent
  wrappers control sizing and placement; the component owns the shared palette.

- Use `src/components/ui/PixelField.astro` for the animated square field above
  the Platform hero title. It recreates the canvas field at
  [Craft, engineered](https://craft.wild.as/): 8px solid squares on a 9px grid,
  layered sine waves, per-cell variation, a 1.6-second entrance, and a ragged
  lower edge. Its first two bands both use Olive, followed by Teal, Orange,
  and Lime. Olive dominates, with the brighter colors appearing selectively.
  `src/lib/pixelField.ts` owns palette-independent sampling shared by the canvas
  and the server-rendered SVG fallback. Optional `seed`, `cellSize`, and `class`
  props allow reuse; `--pixel-field-height` sets its reserved responsive height
  and `--pixel-field-color-0` through `-4` expose the band colors. Mouse movement
  creates a small arrow-shaped fireball brush with a fading trail;
  double-clicking creates an expanding circular ripple.
  The pointer brush samples the original logo arrow at 9 × 7 cells with a soft
  halo, retaining the fireball's additive heat, color blending, and decay.
  Hovering maintains the heat, which fades when the pointer leaves. Keep colors
  driven by the heat field rather than a solid logo overlay.
  Both effects follow the same square grid and palette. Its background is
  transparent so empty cells and gutters reveal the page surface and grain,
  with no separate background grid or playback controls. Reduced motion renders a still
  frame, and the animation stops off-screen, in hidden tabs, and on disconnection.

- Use `src/components/HeroLarge.astro` for the media- or demo-led product hero.
- Use `src/components/HeroSmall.astro` for the compact product hero with an
  image, optional badge, action, and customer logos.

These heroes serve different layouts and should remain separate. For a unique
homepage hero, keep the implementation page-scoped unless another page adopts
the same pattern.

### Product page layouts

Product and platform page heroes use light surfaces and light navigation. Keep
this treatment consistent across both shared landing-page compositions.

- Use `src/components/ProductPageLayout.astro` for product pages with bespoke
  body content and the standard compact product header.
- Use `GridLandingPage.astro` for the approved compact lined landing-page
  template: split hero, olive/lime block background, borderless logo
  row, alternating feature rows, neutral use-case cards, flush bordered FAQ, inset
  grid CTA, and product navigation. Page content, media, card scenes, feature
  links, and FAQs are supplied separately. Custom demos use named media slots.
  See [the template guide](grid-landing-page.md) for its contract and adoption.
- `product/_components/AppsLandingPage.astro` uses `GridLandingPage` with
  `heroLayout="stacked"`: centered title, description and actions, then media
  centered between empty bordered side panels on desktop and spanning the full
  hero width below 960px. It reuses `AppDemo` without a backdrop or
  breakout. Mobile omits the demo's builder/sidebar to keep the app in view.
  Feature graphics are provisional; layout, copy and FAQs are shared-template
  content. The Apps route preserves its negotiated Markdown response.
  `ProductMarketplaceSection.astro` adds four linked template, plugin, and partner
  cards above its FAQ through the `before-faq` slot. It is shared with Agents;
  listings resolve from `productMarketplace.ts` and existing Marketplace data.
  Its small interface illustrations are decorative. Pass an optional `listings`
  tuple of exactly four `{ type, id }` references to select existing templates,
  plugins, or partners. Omitting it preserves the product-page selection.
  Titles, links, descriptions, and partner logos resolve from marketplace data;
  templates without a bespoke illustration use a preview of their first three
  workflow steps.
- `product/_components/FunctionsLandingPage.astro` uses the Apps-style stacked
  `GridLandingPage` composition with an Olive `ProductDemoFrame`. Its page-owned
  `FunctionsVisual` illustrates JavaScript, AI generation, function versions,
  copying code into a personal AI assistant, and automation triggers. These are
  static conceptual previews, not a live editor or a direct debugging integration.
  `functionsLandingPage.ts` supplies the two main benefits, three supporting
  cards, and five FAQs. The existing `/product/functions/` route uses
  `productLandingMarkdown.ts` to keep its negotiated Markdown response aligned.
- `product/_components/AgentsLandingPage.astro` uses the same stacked hero and
  lined body as Apps. It reuses `AgentDemo` without a backdrop, `OnePlatformAgent`
  for requests, and `ApprovalVisual` for deterministic approval conditions and
  policies. Secondary cards use existing model, tool, and channel logos.
  `agentsLandingPage.ts` supplies the HTML and negotiated Markdown copy.
- `product/_components/ActivityLandingPage.astro` uses the stacked hero with
  `GridLandingPage.technicalGrid`, matching the Platform overview's technical
  drawing treatment: continuous rails, fading hero grid, grid spacers,
  intersection marks, edge rulers, and subtle grain. Its full-width hero has
  Orange intersection squares, set through the shared
  decoration's four `--technical-grid-corner-*` custom properties, and
  a neutral inset and the shared `demos/PlatformActivityDemo.astro` from
  the Platform hero. The demo retains its dark interface, status filters,
  action detail dialogs opened from asset names, and a log that fits its
  container. Smaller previews omit supporting columns to keep assets, statuses,
  and action counts readable without horizontal scrolling.
- Automations, Chat with agents, and Operations center use the same stacked
  `GridLandingPage` composition with `ProductDemoFrame`, customer logos, two
  main benefits, three cards, the shared marketplace showcase, and FAQs.
  Their page adapters live in `product/_components/`. Automations reuses
  `AutomationDemo` and the homepage Human approvals, API, and Function visuals.
  `homepageFeatureMedia.apis` owns the shared API logo configuration.
  Chat with agents reuses the homepage solution's `KnowledgeAssistantDemo` in its hero.
  `ChatChannelDemo` illustrates channel alerts; `ChatAccessVisual`
  shows channel members linked to Budibase identities and tool role requirements.
  `OperationsCenterVisual` illustrates the app directory, branding, and mobile
  experience alongside the existing request and approval demos.
  These illustrative interfaces use example process data, not customer evidence.
  New pages use `productLandingMarkdown.ts` to keep negotiated Markdown aligned
  with their page data. Dedicated routes are `/product/chat-with-agents/` and
  `/product/operations-center/`; `/product/requests/` remains Human approvals.
- `product/_components/AIModelsLandingPage.astro` is the reference adapter. It
  supplies the AI providers, process panel, screenshot crop, FAQs, and three
  homepage card scenes; the shared template owns layout and spacing.
- `product/_components/APIsLandingPage.astro` also uses the template. It supplies
  the existing API Explorer video, OpenAPI template logos, specification import
  illustration, and three example visuals for API access, bindings, and secrets
  through the page-scoped `APICapabilityVisual.astro`.
- `product/_components/DataLandingPage.astro` uses the same template for SQL and
  BudibaseDB. Its hero reuses `OnePlatformData` with `presentation="framed"`;
  the default presentation remains the scenic homepage composition. The
  table-builder row reuses `OnePlatformData` with `showFieldMenu`, replacing its
  Status column with a plus and a field-type menu. The adapter configures the
  shared access visual with a table name and uses `DataCapabilityVisual` for
  secured views and data environments.
- `product/_components/ActivityLandingPage.astro` uses the template for actions
  across workspaces and live agent requests. `ActivityVisual` supplies its
  dashboard, request list, error, usage, and totals illustrations.
- `product/_components/HumanApprovalsLandingPage.astro` uses the template for
  approval conditions and policies. `ApprovalVisual` illustrates tool data,
  approvers, channels, time limits, and notifications. The operations-center
  card reuses the homepage `OperationsCenterDemo` with `compact` enabled.
- `product/_components/PermissionsLandingPage.astro` uses the template for
  granular resource access and group access across workspaces. Its page-scoped
  `PermissionsVisual` supplies role requirements, groups, custom roles,
  identity systems, and onboarding illustrations.
- `product/_components/KnowledgeLandingPage.astro` uses the template for uploaded
  knowledge and Budibase AI. Its first feature reuses `KnowledgeAssistantDemo`
  from the homepage. `KnowledgeVisual` supplies an answer with source references,
  the Budibase AI setup panel, SharePoint, PDFs, and sources.
- `product/_components/SelfHostingLandingPage.astro` uses the grid template for
  deployment and data ownership. `SelfHostingVisual` supplies Docker/Kubernetes,
  custom domain, CLI, plugin, and upgrade-control illustrations. Use “upgrade
  control” for choosing releases and rollout timing.
- `/security/` uses `security/_components/SecurityLandingPage.astro` with the
  shared grid template. `securityLandingPage.ts` supplies HTML and negotiated
  Markdown from the same copy. `SecurityVisual` supplies conceptual controls,
  isolated deployment, and evidence panels; assurance cards link to their sources.
- Use `ProductDetailBody.astro` when a Product or Platform page needs the
- standard card overview, two feature sections, stats, and canonical
  product footer. The overview supports configurable columns and responsive
  stacking; pages can omit stats when they need capability-specific evidence.
- Use `ProductPageFooter.astro` as the canonical ending for product and platform
  pages. It renders the homepage CTA followed by `ProductFeatureNav.astro`,
  leaving platform navigation immediately above the global footer.

`ProductPageLayout` accepts a custom `header` slot for pages that need
controls inside the header. It does not infer
layout behavior from the current URL.

### Page composition

- `/platform/` owns its technical drawing layout and
  `platform/_components/PlatformGridFrame.astro`. The frame adds section rules,
  shared `ui/TechnicalGridDecoration.astro` with decorative 6px intersection squares filled with the shared Coconut token,
  without borders, and edge ruler ticks. The page owns
  continuous side rails, faint grain, and the fading hero grid. The grain
  uses the small tiled `src/assets/images/platform/surface-grain.png` asset,
  multiply-blended at 3% opacity beneath the content. Shared product
  cards receive page-scoped grid styling. The hero leads directly into
  “One platform for every operation.”, a 2×2 CardCluster with the existing
  Apps inventory demo, embedded Chat with agents UI (`OnePlatformAgent`), shared
  Automations scene, and Human approvals demo, stacking on mobile. The grouped
  homepage product overview is omitted.
  These previews have larger responsive insets inside their colored panels,
  with more space horizontally than vertically to keep the demos bounded.
  The shared foundation uses six illustrated cards in a 3-column, 2-row desktop grid,
  two tablet columns, and one mobile column, with the same roomy demo insets.
  It reuses existing product visuals for Data tables, Connections, API Explorer,
  Functions, Activity & Insights, and Admin & Security.
  Functions occupies the first card in the second row of the foundation grid;
  Requests & Approvals occupies the fourth product card in the 2×2 grid.
  Its main frame uses the shared
  `--site-container-max` width without additional outer padding, matching
  the other lined landing pages. Keep shared component defaults unchanged.
  Its hero starts with `ui/PixelField.astro`, followed by the centered title,
  description and actions. Below the copy it uses the shared
  `demos/PlatformActivityDemo.astro`, implementing
  Figma node `4369:4887` with local SVG assets. The dark product interface
  retains its colors in either theme, with a responsive log that fits its
  container without horizontal scrolling. Status cards and action detail dialogs operate on
  illustrative sample records.
- `ProductDetailBody.astro` is the shared Product and Platform body composition. It
  owns the card overview, feature sections, stats, page-section wrappers, and
  `ProductPageFooter`. Its sequence is overview, detail, proof, and next action.
- `ProductFeatureNav.astro` reads labels, destinations, grouping, and prefetch
  behavior from the platform dropdown data so both navigation
  surfaces stay in sync. Its Explore the platform section uses uppercase group
  labels with geometric group marks and shared 8px Olive-1000 `NavStatusLight`
  squares before every link, including footer links, matching the dropdown.
  Its optional `lined` treatment keeps the heading left-aligned and encloses
  the three link groups and footer links in divided grid cells. Activity's
  technical grid opts into this treatment within its continuous outer rails;
  other pages retain the standard navigation layout.
- `ProductLandingPage.astro` composes `HeroLarge` with `ProductDetailBody.astro`
  for the four primary product surfaces.
- `PlatformLandingPage.astro` composes `HeroSmall` with
  `ProductDetailBody.astro` for data-driven platform capability pages.
- `FeatureSection.astro` supports intentionally authored WebM product
  demonstrations alongside its standard image media. Videos load only near the
  viewport and must retain a static fallback for reduced-motion and
  no-JavaScript users. Use contained media sizing when cropping would obscure
  product UI.
- `SolutionLandingPage.astro` is a thin `GridLandingPage` adapter for all eight
  `/solutions/` routes and `/enterprise/`. Both route entry points pass a unique
  slug. Use cases have stacked heroes with Olive demo surrounds; industries and
  Enterprise use split heroes. Industry hero demos use the existing industry
  photo through `hero.backgroundImage`; `GridLandingPage.heroBackgroundImage`
  replaces the decorative blocks with a cover image behind the demo, and
  `ProductDemoFrame` uses its transparent background variant. Use cases and
  Enterprise retain their existing surrounds. Content in `solutionLandingPages.ts` and
  `useCaseLandingPages.ts` supplies two main benefits, three supporting cards,
  four marketplace references, and five FAQs. The adapter uses the approved
  borderless customer row without implying industry-specific endorsements, then
  closes with the shared CTA and platform navigation. Do not reintroduce legacy
  badges, standalone generic photography, separate statistics, or extra enterprise grids.
- `FeatureSection.astro`, `StatSection.astro`, and the page-scoped
  `EnterpriseSection.astro` are the main reusable content sections.
- `CTA.astro` is the full-width closing call to action.
  Its demo action uses brand lime and the shared lime hover and pressed colors.
  Both large actions use a 24px top-right corner cut; navigation buttons retain
  their 10px cut.
  Use `insetActions` with the grid variant to pad each action inside its lined
  grid cell.
- `ContactSalesCTA.astro` is the smaller inline sales call to action. The two CTA
  components have different layout roles and should not be combined into one
  highly conditional component.

## Marketplace directories

- `MarketplaceLayout.astro` preserves the global navigation and provides the
  Marketplace title, secondary navigation, and community links. Its shared
  header uses Coconut with Olive text across Marketplace pages.
- The page-scoped `MarketplacePromotion.astro` supports the olive welcome
  banner and future image or process promotions. Configure it through
  `marketplacePromotion` in `src/data/marketplaceHomepage.ts`; `variant: "welcome"`
  selects the decorative block mosaic. Eyebrow and action fields are optional.
  Welcome banners can select `illustration: "shapes"` for the square geometric
  composition in `MarketplaceShapes.astro`. Pass a unique `titleId` when showing
  multiple promotions on one page.
- `MarketplaceTable.astro` provides searchable, filterable directories for
  Connections, Plugins, Partners, and contribution paths. Connection rows use
  stable IDs for links from the Marketplace homepage.
- Individual template details use `MarketplaceLayout` with Templates selected,
  `TemplateUseMenu` for Cloud import/self-host downloads, `TemplateAgentPreview`
  for a static illustrative product preview, and `TemplateMetadata` for the
  documented inventory beside the description below the full-width preview.
  Request previews reuse the shared `demos/PurchaseApprovalsDemo` inbox and
  mobile Teams composition with static template text; the homepage retains
  its default animated purchase example. Preview copy and the request/activity
  layout belong to each template's frontmatter.
  Template request previews use a centered, bounded composition with 12px
  content, 10px supporting labels, an 18px inbox heading, and 16px interface
  icons. Below 900px of available space, show the selected phone alone;
  do not shrink the two interfaces or their text to fit. Keep these rules
  scoped to the template variant so homepage sizing stays independent.
  Preview phones are optional: `agentPreview.phone` selects Teams chat, a
  documented form, or no phone. Desktop-only previews remain visible at every
  width. Request and background activity layouts share the same composition
  and type scale; form copy belongs in `agentPreview.form`.
  Missing destinations remain disabled; no signup/contact substitutes are used.
  `TemplateSourceIcon` shares integration artwork between the directory and
  detail metadata. Template pages contain no prompt cards or system prompts.
- `ProcessDirectory.astro` provides the Templates directory at
  `/marketplace/templates/`; individual templates remain at `/process/[slug]/`.
  It compares individual asset types with blank cells for absent assets,
  named knowledge/channel/connection symbols, and an AI model requirement.
  Knowledge is limited to documented SharePoint/PDF sources. Sources displayed
  in dedicated columns are omitted from Connections. `processTemplateAssets.ts`
  normalizes integration aliases and resolves inventory presence and AI
  requirements; see the template content README for authoring fields.
- Partner profiles come only from the approved partners content collection.
  Store approved tiers on each profile. Logos and websites
  can be omitted until supplied; do not create placeholders for missing claims.
  `partnerJoinUrl` in `src/data/partnerDirectory.ts` owns the shared join link.
  Partner logos use 42px square containers and contained 30px symbols; profiles
  can select a dark logo background for light artwork. Store official asset
  sources in `src/assets/images/partners/SOURCES.md`.
  Missing partner logos use the existing `circle-square` BrandShape as an
  abstract person mark, filling the 42px container with Olive and Lime.
  Keep this fallback decorative; the adjacent partner name supplies identity.

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
