# Partner profiles

Add one approved public partner profile per Markdown file. Partner logos should
be stored in `src/assets/images/partners/` and referenced with a relative path.

```yaml
---
name: Example Partner
type: Service
tier: Silver
summary: A short, approved description of the partner and the work they deliver.
logo: ../../../assets/images/partners/example-partner.svg
logoBackground: light
website: https://example.com
regions:
  - Europe
featured: false
order: 100
---
```

Allowed partner types (`Technology` and `Service`), tiers, and regions are
defined in `src/data/partnerDirectory.ts`.
The Marketplace directory displays `NA` as the tier for Technology partners.
Only add names, logos, descriptions, and claims approved for public use.

Service partner assignments approved on 9 October 2026: large agencies are Gold,
small agencies are Silver, and individuals are Bronze. Technology partners stay
NA. A tier describes the approved partnership level, not certification.

Logos appear in square 42px containers, with the symbol contained inside at 30px.
Use `logoBackground: dark` for light artwork such as Gutilab's supplied symbol;
the default is `light`. Use `transparent` to leave the container unfilled.
Official website favicons are suitable compact symbols.
Record the source of each retrieved asset in `src/assets/images/partners/SOURCES.md`.
Profiles without a verified logo display a decorative 42px square of nine
touching blocks in a 3 × 3 grid using existing Budibase color tokens.

Logo, website, and summary may be omitted until supplied. The directory shows
Partner, Type, Partner tier, and Regions. Service partners offer Budibase
development and support; there is no Services column or filter. Emails and
industries are not included in public profiles.

Profiles appear at `/marketplace/partners/`. Empty directories show a preparation
message rather than fictional entries. Unassigned Service tiers show `—`.
The shared join destination is `partnerJoinUrl` in `src/data/partnerDirectory.ts`;
replace it when the Budibase-hosted application form is ready.
