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
}

export interface ProductDetailContent {
  features: readonly [ProductDetailSection, ProductDetailSection];
  cardCluster: {
    title: string;
    description: string;
    cards: readonly [ProductDetailCard, ProductDetailCard, ProductDetailCard];
  };
}

export interface PlatformLandingContent extends ProductDetailContent {
  title: string;
  metaDescription: string;
  hero: {
    headline: string;
    subtitle: string;
    imageAlt: string;
  };
}
