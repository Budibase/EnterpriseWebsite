# Website font source assets

Geist was downloaded unmodified from the official Vercel release v1.8.1 on
20 October 2026. `geist/` contains `Geist-Variable.ttf` (the release's
`Geist/variable/Geist[wght].ttf`) and the accompanying SIL Open Font License.

- [Official release](https://github.com/vercel/geist-font/releases/tag/v1.8.1)
- [Download archive](https://github.com/vercel/geist-font/releases/download/v1.8.1/geist-font-v1.8.1.zip)

These files are reproducible inputs to `scripts/optimize-brand-fonts.py`.
The website loads the optimized WOFF2 derivative in `src/assets/fonts/`, with
its OpenType features retained. See `src/assets/fonts/README.md` for coverage,
derivative naming and regeneration.
