import { getEntry } from "astro:content";
import { marketplacePlugins } from "./marketplacePlugins";

export const productMarketplaceIntro = {
  title: "Build more with the marketplace",
  description:
    "Start with a template, extend your apps with plugins, or find a partner to help you deliver.",
};

export type MarketplaceListingReference =
  | { type: "template"; id: string }
  | { type: "plugin"; id: string }
  | { type: "partner"; id: string };

export type MarketplaceSelection = readonly [
  MarketplaceListingReference,
  MarketplaceListingReference,
  MarketplaceListingReference,
  MarketplaceListingReference,
];

interface MarketplaceCard {
  title: string;
  description: string;
  type: "Template" | "Community plugin" | "Partner";
  href: string;
  preview: "purchase" | "access" | "kanban" | "template" | "plugin" | "partner";
  logo?: string;
  steps?: readonly string[];
}

const defaults: MarketplaceSelection = [
  { type: "template", id: "purchase-order-request" },
  { type: "template", id: "access-request" },
  { type: "plugin", id: "Kanban Board" },
  { type: "partner", id: "teiva-systems" },
];

export async function getProductMarketplaceCards(
  listings: MarketplaceSelection = defaults,
): Promise<MarketplaceCard[]> {
  return Promise.all(
    listings.map(async (listing): Promise<MarketplaceCard> => {
      if (listing.type === "template") {
        const entry = await getEntry("opsLibrary", listing.id);
        if (!entry)
          throw new Error(`Missing marketplace template: ${listing.id}`);
        const bespoke = {
          "purchase-order-request": {
            preview: "purchase" as const,
            description:
              "Collect purchase requests and route them for approval.",
          },
          "access-request": {
            preview: "access" as const,
            description:
              "Give teams a structured way to request and review access.",
          },
        }[listing.id];
        return {
          title: entry.data.title,
          description: bespoke?.description ?? entry.data.outcome,
          type: "Template",
          href: `/process/${entry.data.slug}/`,
          preview: bespoke?.preview ?? "template",
          steps: entry.data.steps.slice(0, 3).map((step) => step.title),
        };
      }
      if (listing.type === "plugin") {
        const plugin = marketplacePlugins.find(
          (item) => item.name === listing.id,
        );
        if (!plugin)
          throw new Error(`Missing marketplace plugin: ${listing.id}`);
        return {
          title: plugin.name,
          description: plugin.description,
          type: "Community plugin",
          href: plugin.href,
          preview: plugin.name === "Kanban Board" ? "kanban" : "plugin",
        };
      }
      const partner = await getEntry("partners", listing.id);
      if (!partner)
        throw new Error(`Missing marketplace partner: ${listing.id}`);
      return {
        title: partner.data.name,
        description:
          "Explore this service partner in the Budibase partner network.",
        type: "Partner",
        href: `/marketplace/partners/#partner-${partner.id}`,
        preview: "partner",
        logo: partner.data.logo?.src,
      };
    }),
  );
}
