import type { PlatformLandingContent } from "./landingPageTypes";
import {
  productMarketplaceIntro,
  getProductMarketplaceCards,
} from "./productMarketplace";

export async function productLandingMarkdown(
  content: PlatformLandingContent,
  faqs: readonly { question: string; answer: string }[],
) {
  const marketplaceCards = await getProductMarketplaceCards();
  return [
    `# ${content.hero.headline}`,
    content.hero.subtitle,
    ...content.features.flatMap((feature) => [
      `## ${feature.headline}`,
      feature.body,
    ]),
    `## ${content.cardCluster.title}`,
    content.cardCluster.description,
    ...content.cardCluster.cards.flatMap((card) => [
      `### ${card.title}`,
      card.description,
    ]),
    `## ${productMarketplaceIntro.title}`,
    productMarketplaceIntro.description,
    ...marketplaceCards.flatMap((card) => [
      `### ${card.title} (${card.type})`,
      card.description,
      `[Explore ${card.title}](${card.href})`,
    ]),
    "[Explore the marketplace](/marketplace/)",
    "## Frequently asked questions",
    ...faqs.flatMap((faq) => [`### ${faq.question}`, faq.answer]),
    "[Contact sales](https://budibase.com/contact/)",
    "[Try Budibase](https://account.budibase.app/register)",
  ].join("\n\n");
}
