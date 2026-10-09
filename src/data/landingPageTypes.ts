import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface ProductDetailSection {
  headline: string;
  body: string;
  bullets: readonly {
    icon: string;
    text: string;
  }[];
}

export interface ProductDetailCard {
  title: string;
  description: string;
  link?: string;
  number?: string;
}

export interface ProductDetailContent {
  proof?: "stats" | "none";
  features: readonly [ProductDetailSection, ProductDetailSection];
  cardCluster: {
    title: string;
    description: string;
    cards: readonly ProductDetailCard[];
    columns?: 2 | 3 | 4 | 5;
    responsiveLayout?: "scroll" | "stack";
    background?: "forest-green" | "surface";
  };
}

export interface ProductDetailMedia {
  image: string;
  demo?: AstroComponentFactory;
  demoProps?: Record<string, unknown>;
  imageAlt?: string;
  video?: string;
  videoType?: string;
  fit?: "cover" | "contain";
}

export interface PlatformLandingContent extends ProductDetailContent {
  title: string;
  metaDescription: string;
  hero: {
    headline: string;
    subtitle: string;
    imageAlt: string;
    badge?: string;
  };
}
