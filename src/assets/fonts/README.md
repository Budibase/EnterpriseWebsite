# Official website fonts

One variable WOFF2 derivative provides the official Geist typography across
the website.

- **Budibase Geist** derives from the full official Geist v1.8.1 release.
  Weights 400–700 remain variable. Size: 39,812 bytes.

Geist supplies every sans-serif role at native width, retaining existing sizes
and weights. It has no optical-size axis. Ligatures and alternate numbers
(`ss09`, alternative one and slashed zero) are enabled globally. Prices, stats,
times and tables use tabular figures (`tnum`). Technical identifiers retain
proportional figures with `ss09`: this release's tabular zero/one do not receive
the alternate forms. Do not request Inter's `opsz`, `ss07` or `zero` features.
Homepage customer-proof display numbers also use proportional lining figures
to retain the alternate one and slashed zero.
The logo remains a supplied vector asset, and code retains system monospace.

All text, including headings and the brand display specimen, uses Geist's
default R and G (`ss04` and `ss06` remain disabled). Ligatures and alternate
numbers remain enabled. Default square punctuation remains enabled by leaving
Geist's rounded-dot feature off.

The subset retains Latin letters (including accents), combining marks, numbers,
punctuation, currencies and symbols available in the originals. Other writing
systems use the page's fallback font. All original OpenType feature tags remain.
Add language coverage before using these files for non-Latin translations.

Internal derivative family names differ from the originals to respect reserved
font names. Copyright and license metadata are retained. Original source files,
licence and provenance are in `public/fonts/geist/` and `public/fonts/SOURCE.md`.

Regenerate from the repository root in a temporary Python environment:

```sh
python3 -m venv /tmp/budibase-font-optimization
/tmp/budibase-font-optimization/bin/pip install 'fonttools[woff]==4.60.1' 'brotli==1.2.0'
/tmp/budibase-font-optimization/bin/python scripts/optimize-brand-fonts.py
```

Astro imports these files as URLs, emits content-hashed assets and supplies
immutable caching through its Cloudflare build. The shared `BrandFonts.astro`
component preloads only Geist and uses `font-display: swap`.

The shared font file is 39,812 bytes, down from the previous Inter file's
201,112 bytes (80.2% smaller). These are file sizes, not measured page-load
timings or Core Web Vitals.
