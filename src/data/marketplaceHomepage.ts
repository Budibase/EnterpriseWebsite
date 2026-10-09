export type ListingReference =
  | { type: "Template"; slug: string }
  | { type: "Connection"; name: string }
  | { type: "Community plugin"; name: string };

export interface MarketplacePromotion {
  variant?: "feature" | "welcome";
  illustration?: "blocks" | "shapes";
  eyebrow?: string;
  title: string;
  description: string;
  linkLabel?: string;
  href?: string;
  image?: { src: string; alt: string };
  steps?: { label: string; icon: string }[];
}

// Swap the welcome banner or feature promotion here. Feature promotions can
// include an eyebrow, action, image, or process overview.
export const marketplacePromotion: MarketplacePromotion = {
  variant: "welcome",
  title: "Welcome to the Budibase marketplace",
  description:
    "Make critical work move faster with templates, partners, connections, plugins and more.",
};

// Alternative geometric welcome treatment, retained for future promotion swaps.
export const marketplaceShapesPromotion: MarketplacePromotion = {
  ...marketplacePromotion,
  illustration: "shapes",
};

// These listings joined the Marketplace preview on 8 October 2026.
// addedAt records Marketplace inclusion, not a vendor or plugin release date.
// Add new references with their actual inclusion date; the homepage sorts them.
export const newArrivalListings: (ListingReference & { addedAt: string })[] = [
  { type: "Connection", name: "Anthropic", addedAt: "2026-10-08" },
  { type: "Community plugin", name: "JSON Editor", addedAt: "2026-10-08" },
  { type: "Connection", name: "Microsoft SharePoint", addedAt: "2026-10-08" },
  { type: "Community plugin", name: "CSV Export", addedAt: "2026-10-08" },
];
