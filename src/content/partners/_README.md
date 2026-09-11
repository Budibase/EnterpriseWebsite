# Partner profiles

Add one approved public partner profile per Markdown file. Partner logos should
be stored in `src/assets/images/partners/` and referenced with a relative path.

```yaml
---
name: Example Partner
summary: A short, approved description of the partner and the work they deliver.
logo: ../../assets/images/partners/example-partner.svg
website: https://example.com
regions:
  - Europe
services:
  - Solution design
  - Apps, automations and agents
featured: false
order: 100
---
```

Allowed regions and services are defined in `src/data/partnerDirectory.ts`.
Only add names, logos, descriptions, and claims approved for public use.
