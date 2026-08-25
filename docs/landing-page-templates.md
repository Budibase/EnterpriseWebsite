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

Use `PlatformLandingPage.astro` for Tables, Requests and Approvals, Activity and
Insights, Knowledge, Admin and Security, Self-hosting, and API Explorer.

Platform pages use a split copy-and-media hero followed by the shared
`ProductDetailBody.astro` composition. They explain an enabling capability
through outcomes, feature detail, and product evidence.

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
