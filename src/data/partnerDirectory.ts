export const partnerTypes = ["Technology", "Service"] as const;

export const partnerRegions = [
  "Global",
  "Africa",
  "Asia Pacific",
  "Europe",
  "Latin America",
  "Middle East",
  "North America",
] as const;

// Service tiers use the approved assignments stored on each partner profile.
export const partnerTiers = ["Bronze", "Silver", "Gold", "NA"] as const;

// Replace with the Budibase-hosted partner form URL when available.
export const partnerJoinUrl = "/contact/?op=become-a-partner#book-a-call";
