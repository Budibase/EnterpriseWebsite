# Landing-page templates

Use the page family that matches what a visitor needs to understand. Page
routes and navigation groups do not determine the template on their own.

## Product landing pages

Use `ProductLandingPage.astro` for the primary Budibase product surfaces:
Apps, Agents, Automations, and Functions.

Product pages lead with a large media or interactive demonstration and then use
the shared `ProductDetailBody.astro` composition for capability overview,
feature detail, proof, and the next action.

## Platform landing pages

Use `PlatformLandingPage.astro` for Tables, Requests and Approvals, and Activity
and Insights.

Platform pages use a split copy-and-media hero followed by the shared
`ProductDetailBody.astro` composition. They explain an enabling capability
through outcomes, feature detail, and product evidence.

## Technical landing pages

Use `TechnicalLandingPage.astro` for Knowledge, Admin and Security,
Self-hosting, and API Explorer.

Technical pages use an editorial, proof-led sequence:

1. State the technical outcome.
2. Explain the operational stakes.
3. Show product, workflow, code, or architecture evidence.
4. Explain observable system behaviour.
5. Make governance, deployment, permissions, or human control visible.
6. Add approved proof when available.
7. Address evaluator questions and tradeoffs.
8. End with the canonical CTA and platform navigation.

Technical content is expressed through the constrained `TechnicalStoryBlock`
union: `narrative`, `evidence`, `proof`, and `detail`. Do not add an
unrestricted page-builder schema.

## Solution landing pages

Use `SolutionLandingPage.astro` for the existing industry and solution pages.
Its composition remains independent from product and platform templates.

## Bespoke pages

Keep a page bespoke when its primary interaction cannot be expressed by one of
the standard narratives. Connections remains bespoke because its searchable,
filterable directory is the product experience. It remains in the Platform
navigation and is not duplicated under Resources.

## Shared requirements

- Preserve the public route when changing a page's template.
- Lead with an operational outcome and show the system working.
- Use page-specific, supported evidence. Confirm public approval for customer
  names, logos, quotations, stories, and metrics.
- Reuse the site shell, buttons, title primitives, grids, CTA, and platform
  navigation.
- Check brand-dark and default treatments, keyboard focus, and layouts at
  mobile, tablet, and desktop widths.
