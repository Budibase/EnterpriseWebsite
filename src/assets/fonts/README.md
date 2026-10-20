# Official website fonts

One variable WOFF2 derivative provides the official Inter typography across
the website.

- **Budibase Text** derives from Inter. Weights 400–700 and the original
  optical-size axis remain variable. Size: 201,112 bytes.

Headings use Inter's display optical size (`opsz` 32); other roles retain
automatic optical sizing. Square punctuation (`ss07`) is enabled globally,
alongside ligatures and contextual alternates. All sans-serif font aliases
resolve to Inter. The logo remains a supplied vector asset, and code retains
the system monospace stack.

The subset retains Latin letters (including accents), combining marks, numbers,
punctuation, currencies and symbols available in the originals. Other writing
systems use the page's fallback font. All original OpenType feature tags remain.
Add language coverage before using these files for non-Latin translations.

Internal derivative family names differ from the originals to respect reserved
font names. Copyright and license metadata are retained. Original source files,
licence and provenance are in `public/fonts/inter/` and `public/fonts/SOURCE.md`.

Regenerate from the repository root in a temporary Python environment:

```sh
python3 -m venv /tmp/budibase-font-optimization
/tmp/budibase-font-optimization/bin/pip install 'fonttools[woff]==4.60.1' 'brotli==1.2.0'
/tmp/budibase-font-optimization/bin/python scripts/optimize-brand-fonts.py
```

Astro imports these files as URLs, emits content-hashed assets and supplies
immutable caching through its Cloudflare build. The shared `BrandFonts.astro`
component preloads only Inter and uses `font-display: swap`.

The shared font load is 201,112 bytes, down from 258,908 bytes for the previous
Encode Sans with Inter pairing (57,796 bytes / 22.3% less).
These are file sizes, not measured page-load timings or Core Web Vitals.
