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
The Function column and filter are temporarily hidden; its metadata is retained.
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

## Template details

All entries use the shared Marketplace template detail layout and keep their
existing URLs. The body is a customer-facing description: explain the operational problem,
workflow, human oversight, and how to adapt the template. Keep detailed builder
instructions, CSV samples, and large app demonstrations out of the main body.
Do not include system/agent prompts or prompt cards.

- Set `owner.name` to the approved template owner; the current collection is
  owned by Budibase. `owner.href` is optional.
- `cloudImportUrl` is an optional HTTPS/HTTP Cloud import URL.
- `selfHostedDownloadUrl` is an optional site-relative export path or HTTPS/HTTP
  export URL. Supply a real importable template, not a signup/docs substitute.
  Each Use this template option is enabled independently when supplied; absent
  destinations display Coming soon. The download label is Download and import locally.
- Record named `assetsUsed.agents`, `apps`, `automations`, and `tables` from the
  guide. Empty named inventories mean the asset is absent. Do not generate
  review workspaces, model names, or assets from generic integrations.
- For agent templates, add `agentPreview.agentName`, `request`, `response`, and
  `activity`. Keep this illustrative copy consistent with documented behavior.
  Set `agentPreview.layout` to `request` for request-led processes or `activity`
  for knowledge/background agents. Request previews use the Operations center
  request inbox; activity previews use an agent activity panel. The optional
  `agentPreview.phone` selects `teams`, `form`, or `none`. Without an override,
  a phone is shown only when Microsoft Teams is a documented chat channel.
  For `form`, supply `agentPreview.form.title` and `fields` (label/value pairs)
  from the documented request form. Keep background workflows desktop-only.
  These are static product views; inventory metadata still comes from the
  documented assets. The homepage demo retains its own content and animation.

```yaml
owner:
  name: Budibase
agentPreview:
  agentName: Purchase Order Request agent
  request: Can you process this purchase order request?
  response: I’ll check the vendor and budget, then create the PO or send it for approval.
  activity: Vendor and budget checked.
```
