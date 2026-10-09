# Process template content

This folder contains the process templates listed in `/marketplace/templates/`.
Individual templates retain their `/process/[slug]/` URLs.

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

- The directory lives at `/marketplace/templates/`.
- The old `/process/` landing page permanently redirects to the directory.
- Each entry lives at `/process/[slug]`.

## Update links

- Directory navigation should point to `/marketplace/templates/`.
- Template links should point to `/process/[slug]/`.
