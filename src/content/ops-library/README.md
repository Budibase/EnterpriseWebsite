# Ops Library content

This folder contains the Ops Library entries for `/ops`.

## Add a new entry
1. Create a new markdown file in `src/content/ops-library/`.
2. Name the file with the slug you want in the URL (for example, `holiday-approval.md`).
3. Include all required frontmatter fields:
   - `slug`, `title`, `outcome`
   - `setupTime`, `difficulty`
   - `tags`, `aiAssists`, `humansDecide`
   - `steps` (array of `{ title, description, humanDecision }`)
   - `integrations`, `faq` (array of `{ question, answer }`)
   - `lastUpdated` (ISO date)
4. Add 2–3 short paragraphs in the markdown body describing what the entry solves.

## Routing
- The directory lives at `/ops`.
- Each entry lives at `/ops/[slug]`.

## Update links
- Navigation should point to `/ops`.
