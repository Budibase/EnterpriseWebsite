// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { URL } from "node:url";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// Cloudflare optimizes server dependencies during both development and builds.
// Keep those processes from invalidating each other's generated dependency files.
const viteCacheDir = process.argv.includes("build")
  ? "node_modules/.vite-build"
  : "node_modules/.vite";

// https://astro.build/config
export default defineConfig({
  site: "https://budibase.com",
  session: false,

  prefetch: {
    prefetchAll: false,
  },

  redirects: {
    "/agent-space": "/product/agents",
    "/agents/integrations": "/product/connections",
    "/product": "/product/agents",
    "/product/integrations": "/product/connections",
    "/platform/integrations": "/product/connections",
    "/platform/agents": "/product/agents",
    "/platform/automations": "/product/automations",
    "/platform/apps": "/product/apps",
    "/platform/connections": "/product/connections",
    "/platform/apis": "/product/apis",
    "/platform/data": "/product/data",
    "/platform/resources": "/product/resources",
    "/platform/enterprise": "/product/enterprise",
    "/talk-to-our-team": "/contact",
    "/terms-of-service": "/terms",
    "/self-host-master-terms": "/terms-self-host",
  },

  vite: {
    cacheDir: viteCacheDir,
    // Prevent Cloudflare's worker from reloading against stale SSR chunks when
    // these Astro entrypoints are first discovered on a cold dev-server start.
    // https://github.com/withastro/astro/issues/17788
    optimizeDeps: {
      include: ["astro/assets/services/noop", "astro/logger/json"],
    },
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url),
        ),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@DataHeroBg": fileURLToPath(
          new URL("./src/assets/images/data/DataHeroBg.png", import.meta.url),
        ),
      },
    },
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "TikTok Sans",
      cssVariable: "--font-tiktok-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/TikTokSans-Variable.ttf"],
            weight: "300 900",
            stretch: "75% 150%",
            style: "normal",
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "TikTok Sans Condensed",
      cssVariable: "--font-tiktok-sans-condensed",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/TikTokSans-CondensedBlack.ttf"],
            weight: 900,
            style: "normal",
          },
        ],
      },
    },
  ],

  experimental: {
    clientPrerender: true,
    contentIntellisense: true,
  },

  adapter: cloudflare({
    configPath: "./wrangler.jsonc",
    imageService: "passthrough",
  }),
  integrations: [sitemap(), mdx()],
});
