import { getEntry } from "astro:content";
import { marketplacePlugins } from "./marketplacePlugins";

export const productMarketplaceIntro = {
  title: "Build more with the marketplace",
  description:
    "Start with a template, extend your apps with plugins, or find a partner to help you deliver.",
};

export async function getProductMarketplaceCards() {
  const [purchase, access, partner] = await Promise.all([
    getEntry("opsLibrary", "purchase-order-request"),
    getEntry("opsLibrary", "access-request"),
    getEntry("partners", "teiva-systems"),
  ]);
  const plugin = marketplacePlugins.find(
    (item) => item.name === "Kanban Board",
  );
  if (!purchase || !access || !partner || !plugin) {
    throw new Error("A product marketplace listing is missing.");
  }
  return [
    {
      title: purchase.data.title,
      description: "Collect purchase requests and route them for approval.",
      type: "Template",
      href: `/process/${purchase.data.slug}/`,
      preview: "purchase",
    },
    {
      title: access.data.title,
      description: "Give teams a structured way to request and review access.",
      type: "Template",
      href: `/process/${access.data.slug}/`,
      preview: "access",
    },
    {
      title: plugin.name,
      description: plugin.description,
      type: "Community plugin",
      href: plugin.href,
      preview: "kanban",
    },
    {
      title: partner.data.name,
      description:
        "Explore this service partner in the Budibase partner network.",
      type: "Partner",
      href: "/marketplace/partners/#partner-teiva-systems",
      preview: "partner",
      logo: partner.data.logo?.src,
    },
  ] as const;
}
