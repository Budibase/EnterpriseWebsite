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

## Asset comparison columns

The directory compares Agent, App, Automation, Ops center,
Knowledge, Agent chat, Connections, and AI required.
The Function column is temporarily hidden; its metadata is retained.
Updated dates remain in the data for sorting but are not displayed.
An absent asset leaves its cell blank; the directory does not show asset totals.

- Use `Agents`, `Apps`, `Automations`, `Functions`, and `Operations center` tags
  only for assets the template includes. Named `assetsUsed.apps`,
  `assetsUsed.automations`, and `assetsUsed.functions` inventories take precedence
  over tags. An explicit empty inventory leaves the relevant column blank.
- `assetsUsed.knowledgeSources` is an optional array of `SharePoint` and `PDF`.
  Record sources documented in the guide, including stated source options.
  Do not assume uploaded files are PDFs. Other knowledge integrations remain
  in Connections.
- For templates tagged `Chat`, Slack and Teams/Microsoft Teams
  integrations appear in Agent chat. `Slack/Teams` expands to both channels.
- Integrations shown in Knowledge or Agent chat are omitted from Connections.
  Keep source names in `integrations` for search and template documentation.
- `aiModelRequired` is an optional boolean override. Otherwise, an Agent or a
  named `assetsUsed.aiModel` requires a model. `aiAssists` alone does not establish
  a requirement. Set `aiModelRequired: false` when AI is optional.

```yaml
assetsUsed:
  functions:
    - Normalize request
  knowledgeSources:
    - SharePoint
    - PDF
aiModelRequired: true
```

This example illustrates the fields; only add entries supported by the guide.

## Routing

- The directory lives at `/marketplace/templates/`.
- The old `/process/` landing page permanently redirects to the directory.
- Each entry lives at `/process/[slug]`.

## Update links

- Directory navigation should point to `/marketplace/templates/`.
- Template links should point to `/process/[slug]/`.
