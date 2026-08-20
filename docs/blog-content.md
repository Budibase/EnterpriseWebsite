# Blog content authoring

Blog posts use standard Markdown with small semantic HTML blocks for content
that Markdown cannot express. Hugo shortcode syntax (`{{< ... >}}`) is not
supported; the production build rejects it.

## Code, headings, and figures

- Use fenced Markdown code blocks with a language identifier.
- Use normal Markdown headings. When an existing inbound anchor must be
  preserved, use an HTML heading with an explicit `id`.
- Use Markdown images for ordinary images. Use `<figure class="blog-figure">`
  with an optional `<figcaption>` when attribution or a linked image is needed.

## Embedded media

Wrap YouTube and Vimeo iframes in
`<div class="blog-embed blog-embed--video">`. Every iframe must have a useful
`title` and `loading="lazy"`.

Interactive Budibase examples use
`<div class="blog-embed blog-embed--app">` with the same title and loading
requirements.

## Inline calls to action and callouts

Use `<aside class="blog-inline-cta" aria-label="Budibase call to action">`
with an optional `blog-inline-cta__message` paragraph and a
`blog-inline-cta__button` link. External actions that open a new tab must use
`rel="noopener noreferrer"`.

Informational notes use `<aside class="blog-callout blog-callout--info">`;
positive notes use `blog-callout--positive`. Preserve the original article
copy and do not add customer, security, compliance, or performance claims
without approval.
