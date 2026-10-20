# Compact lined landing-page template

`src/components/GridLandingPage.astro` is the reusable version of the approved
AI models landing page. `src/pages/product/_components/AIModelsLandingPage.astro`
is the working reference adapter.

The template owns the split hero, olive background with staggered
lime blocks, outlined customer logos, alternating feature rows, white
use-case cards with 4:3 media, bordered FAQ, padded grid CTAs, and platform
navigation. It uses the shared typography and cut-corner buttons. Page
sections lead with Book a demo, followed by Try Budibase.
Page titles/H1s use Inter Display at native width, retaining uppercase weight-700 heroes;
H2–H6 headings, labels, buttons, body copy and navigation use Inter.
Headings use display optical size (`opsz` 32), with square punctuation throughout.
Shared primary actions use full Lime fills, sentence-case Inter labels and bold arrows.
Hero Book a demo actions use a square marker without an arrow. Other primary
hero and feature actions show plain arrows in the current trial;
secondary actions use labels only. The closing demo CTA also uses a plain arrow. Secondary buttons use
white fills and grey-800 outlines. Keep native font widths and the shared
responsive type scale.
Use the canonical Olive (`#233207`) and Lime (`#A5FF00`) tokens for the hero
and actions, white for
light page sections and product interfaces, Coconut for supporting panels,
and Graphite for body text. Brand headings and links use Olive. Supporting
illustrations use the named accent pairs from `global.css`; pale fills mix
10% or 20% of their light accent with Coconut. Reuse the shared interaction,
border, and text tokens, and keep text contrast at WCAG AA.

The hero shares the navigation's bottom border as its top edge; do not add a
second top border. Retain its side and bottom borders for the lined grid.

The hero adds 60px of vertical breathing room across desktop and stacked
layouts, with content-driven height.
For media-led product pages, `heroLayout="stacked"` centers the copy and
actions above media flanked by empty bordered panels at desktop widths. The
media occupies approximately 81.8% of the row, with 9.1% on each side; below 960px
the panels disappear and media fills the row. Apps is the
first adapter; Agents, Automations, Operations center, and Chat with agents
use the same variant. The split variant remains
the default for existing feature pages.

## Page inputs

| Input             | Purpose                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `slug`            | Unique prefix for feature headings and FAQ accordion IDs.                                                                                                     |
| `content`         | Existing `PlatformLandingContent`: hero, two feature rows, and card copy.                                                                                     |
| `heroImage`       | Product screenshot when a custom hero slot is not needed.                                                                                                     |
| `heroAspectRatio` | Preview frame ratio; defaults to the AI models ratio, `2760 / 1710`.                                                                                          |
| `heroLayout`      | `split` by default; `stacked` centers the copy above media with bordered desktop side panels. Use `heroAspectRatio="auto"` for naturally sized demos.        |
| `featureMedia`    | Images, videos, or Astro demos, in feature-row order.                                                                                                         |
| `featureActions`  | Optional `{ label, url, appearance }` actions for each feature row. Use `appearance: "button"` for the shared cut-corner button; the default is a quiet link. |
| `cards`           | CardCluster cards, including page-specific screenshots, demos, or media scenes; defaults to the content cards.                                                |
| `faqs`            | Optional `{ question, answer }` entries; the first opens initially and only one can remain open. Omit to hide the FAQ.                                        |
| `faqTitle`        | Optional FAQ heading.                                                                                                                                         |

Use named slots `hero-media`, `feature-0`, and `feature-1` for custom product
visuals. The AI models adapter demonstrates all three. The screenshot crop is
AI-specific and stays in that adapter; other screenshots render uncropped.
Use the optional `before-faq` slot for an additional page-owned section, such as
the shared product marketplace showcase. Omitting it leaves the standard layout unchanged.

Platform content remains in `src/data/platformLandingPages.ts`. Keep visual assets,
demo configuration, FAQ answers, and custom media styling in the page adapter.
Do not copy the template or reuse AI model claims on unrelated pages.

## Solution-page adapter

`SolutionLandingPage.astro` adapts this same template for eight `/solutions/`
pages and `/enterprise/`. Its required `slug` comes from either route entry
point and prefixes heading and accordion IDs with `solution-`.

Use cases (Requests and approvals, Case management, Data collection and review,
and Knowledge assistants) use stacked heroes and Olive `ProductDemoFrame`
surrounds. Public sector, Finance, Utilities, Manufacturing, and Enterprise use
split heroes. Public sector, Finance, Utilities, and Manufacturing set
`hero.backgroundImage` to the existing industry photo, shown as a decorative
cover backdrop behind the hero demo. The shared adapter passes this through
`heroBackgroundImage` and uses a transparent demo frame. Enterprise and use-case
surrounds retain their existing treatment. Industry feature rows pair the
corresponding demo with resource permissions.

`solutionLandingPages.ts` and `useCaseLandingPages.ts` supply each page's hero
orientation and media, two main benefits, exactly three supporting cards,
four marketplace listing references, and five FAQs. Preserve route metadata
and the two main narratives when changing presentation. The complete order is
hero, outlined customer logos, two benefits, three supporting cards, marketplace,
bordered FAQs, shared CTA, and platform navigation.

`ProductMarketplaceSection` accepts `listings`, a four-item tuple of existing
`template`, `plugin`, or `partner` references. Template and partner IDs are
content-entry IDs; plugin IDs are existing listing names. Omission retains the
product-page defaults. Listings resolve centrally and missing entries fail the
build. Generic template previews use their first three workflow step titles.
Solution pages select three relevant templates and the existing Teiva Systems
listing, without implying industry specialization.

## Adoption example

This minimal API adapter uses existing content and images. Supply approved
API FAQs and richer use-case visuals as those are prepared.

```astro
---
import GridLandingPage from "@components/GridLandingPage.astro";
import { platformLandingPages } from "../../../data/platformLandingPages";
import Hero from "@assets/images/backgrounds/light/api-explorer-sunset.png?url";
import FeatureOne from "@assets/images/backgrounds/light/api.png?url";
import FeatureTwo from "@assets/images/backgrounds/dark/apis.png?url";
import ApiVideo from "@assets/videos/api-explorer.webm?url";
---

<GridLandingPage
  slug="apis"
  content={platformLandingPages.apis}
  heroImage={Hero}
  featureMedia={[{ image: FeatureOne, video: ApiVideo }, { image: FeatureTwo }]}
/>
```

Add the adapter to the existing product route when adopting the template.
Leave `MainLayout` responsible for navigation and page metadata.

| Page                    | Existing route/data key                                          |
| ----------------------- | ---------------------------------------------------------------- |
| APIs                    | `/product/apis/` / `apis`                                        |
| Data tables             | `/product/data/` / `data`                                        |
| Knowledge               | `/product/knowledge/` / `knowledge`                              |
| Activity                | `/product/activity/` / `activity`                                |
| Human approvals         | `/product/requests/` / `requests`                                |
| Permissions             | `/product/admin-security/` / `admin-security`                    |
| Security and compliance | `/security/` / `securityLandingPage.ts`                          |
| Self-hosting            | `/product/self-host/` / `self-host`                              |
| Apps                    | `/product/apps/` / `appsLandingPage.ts`                          |
| Agents                  | `/product/agents/` / `agentsLandingPage.ts`                      |
| Automations             | `/product/automations/` / `automationsLandingPage.ts`            |
| Chat with agents        | `/product/chat-with-agents/` / `chatWithAgentsLandingPage.ts`    |
| Operations center       | `/product/operations-center/` / `operationsCenterLandingPage.ts` |

AI models, APIs, Data tables, Knowledge, Activity, Human approvals, and Permissions use the
extracted template. The API
adapter is `src/pages/product/_components/APIsLandingPage.astro`; its
illustrations use configuration samples and its hero reuses the existing API
Explorer recording. `DataLandingPage.astro` supplies SQL connectors, BudibaseDB
table fields, secured views, and data environments, with a framed version of
the existing `OnePlatformData` preview in its hero.
`ActivityLandingPage.astro` supplies an actions overview, live agent requests,
and supporting visuals for errors, workspace usage, and totals. Its illustrated
records and counts are demonstration data rather than customer results.
`HumanApprovalsLandingPage.astro` supplies approval conditions and policies,
tool-data and notification illustrations, and the existing operations-center
preview in its compact presentation. Its route remains `/product/requests/`.
`PermissionsLandingPage.astro` supplies resource role requirements, group access
across workspaces, custom roles, identity systems, and onboarding illustrations.
Its route remains `/product/admin-security/`.
`KnowledgeLandingPage.astro` reuses the homepage knowledge-assistant demo and
supplies uploaded knowledge, Budibase AI, SharePoint, PDFs, and source references.
`security/_components/SecurityLandingPage.astro` supplies security controls,
air-gapped deployment, and evidence cards for ISO 27001, Iron Bank, and data
protection terms. The page preserves its negotiated Markdown response using
the same content. Security details jump to the controls FAQ on the current page.
`SelfHostingLandingPage.astro` supplies Docker/Kubernetes deployment, custom
domains, data ownership, CLI, plugins, and upgrade control. Upgrade control
describes choosing the Budibase release and rollout timing.
`AppsLandingPage.astro` uses the stacked hero with the existing interactive
app-builder demo, two main benefits, three secondary cards, and FAQs. Its
content also supplies the Apps route's Markdown response.
For each adoption,
check desktop, tablet, and mobile layout, correct screenshot framing, relevant
card visuals, FAQ keyboard behavior, and the standard build.

## Functions

`product/_components/FunctionsLandingPage.astro` uses the same vertical hero as
Apps, with an Olive demo surround, outlined logos, two benefit rows, three
supporting cards, the shared marketplace, five bordered FAQs, and the standard
closing actions and platform navigation. `functionsLandingPage.ts` owns the
copy for JavaScript flexibility, AI generation, function versioning, personal
AI-assisted debugging, and automation triggers. Its static `FunctionsVisual`
previews remain page-owned; they do not execute code or send it to an AI service.
The route remains `/product/functions/` and retains its Markdown response.
