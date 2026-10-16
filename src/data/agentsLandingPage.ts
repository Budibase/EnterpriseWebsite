import type { PlatformLandingContent } from "./landingPageTypes";
import { productMarketplaceIntro } from "./productMarketplace";

export const agentsLandingPage = {
  title: "AI agents that run your operations",
  metaDescription:
    "Build AI agents that handle business requests with deterministic human approvals. Bring your own model, connect hundreds of tools, and deploy to Slack and Teams.",
  proof: "none",
  hero: {
    headline: "AI agents that run your operations",
    subtitle:
      "Build agents that handle requests, answer questions, and take action across your business. Connect your data, trigger automations, and let AI manage the routine work that keeps teams moving.",
    imageAlt:
      "Budibase agent builder with model selection, connected tools, instructions, and a live chat preview",
  },
  features: [
    {
      headline: "Designed to handle requests",
      body: "Turn everyday requests into action. Give agents instructions, knowledge, and tools to gather the right information and move work forward across your systems.",
      bullets: [],
    },
    {
      headline: "Deterministic human approvals",
      body: "Define exactly when an action needs human approval. Set who approves, where they approve, and how long they have, so review follows your rules.",
      bullets: [],
    },
  ],
  cardCluster: {
    title: "Agents that work within your rules",
    description:
      "Choose your model, connect your systems, and put agents where your teams already work.",
    columns: 3,
    responsiveLayout: "stack",
    cards: [
      {
        title: "Bring your own model",
        description:
          "Connect Anthropic, Gemini, OpenAI, Mistral, and more. Or use Budibase AI to get started without configuring a provider.",
        link: "/product/ai-models/",
      },
      {
        title: "Connect hundreds of tools",
        description:
          "Give agents the tools to read data and take action across your existing systems, databases, and REST APIs.",
        link: "/marketplace/connections/",
      },
      {
        title: "Deploy where work happens",
        description:
          "Let teams make requests and work with agents in Slack and Microsoft Teams, where conversations already happen.",
      },
    ],
  },
} as const satisfies PlatformLandingContent;

export const agentsMarketplaceIntro = {
  ...productMarketplaceIntro,
  description:
    "Find request workflows, community plugins, and delivery partners to help you build more.",
};

export const agentsFaqs = [
  {
    question: "What kinds of requests can agents handle?",
    answer:
      "Build agents for requests such as IT support, access, purchases, and workplace questions. Give each agent the instructions, knowledge, and tools its process needs.",
  },
  {
    question: "How do deterministic approvals work?",
    answer:
      "You define conditions for actions that require approval. Approval policies specify who reviews the action, where they review it, and how long they have. These rules determine when human review is required.",
  },
  {
    question: "Can I use my own AI model?",
    answer:
      "Yes. Connect models from Anthropic, Gemini, OpenAI, and Mistral directly. Access more models through OpenRouter and Groq, or use Budibase AI.",
  },
  {
    question: "How do agents connect to our systems?",
    answer:
      "Choose the tools an agent can use from your connected systems, databases, and REST APIs. Give it access to the data and actions needed for its requests.",
  },
  {
    question: "Can teams use agents in Slack and Microsoft Teams?",
    answer:
      "Yes. Deploy agents to Slack and Microsoft Teams so people can make requests and continue the conversation in the tools they already use.",
  },
] as const;
