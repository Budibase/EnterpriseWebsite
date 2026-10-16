import type { PlatformLandingContent } from "./landingPageTypes";

export const chatWithAgentsLandingPage = {
  title: "Chat with agents — Work in Slack and Microsoft Teams",
  metaDescription:
    "Chat with Budibase agents in Slack and Teams. Make requests, receive approval alerts, connect company knowledge, and govern access through Budibase.",
  proof: "none",
  hero: {
    headline: "Chat with agents where work happens",
    subtitle:
      "Give teams a direct line to your agents in Slack and Microsoft Teams. Answer questions, make requests, and keep work moving without switching tools.",
    imageAlt:
      "Knowledge assistant in Microsoft Teams answering a question using SharePoint and PDF sources",
  },
  features: [
    {
      headline: "Meet your teams in Slack and Teams",
      body: "Put agents in the conversations your teams already use. Let people ask questions, provide context, and request actions from connected systems.",
      bullets: [],
    },
    {
      headline: "Keep requests and approvals in the conversation",
      body: "Send request updates and approval alerts directly to Slack or Teams. Bring the next step to the person responsible, where they already work.",
      bullets: [],
    },
  ],
  cardCluster: {
    title: "Connected knowledge. Controlled actions.",
    description:
      "Give agents the context they need, control what they can do, and keep a view of the work in Budibase.",
    columns: 3,
    responsiveLayout: "stack",
    cards: [
      {
        title: "Give your agents company knowledge",
        description:
          "Connect SharePoint and upload PDFs so agents can answer questions using your team’s content.",
        link: "/product/knowledge/",
      },
      {
        title: "Keep access under control",
        description:
          "Link Slack and Teams members to Budibase users. Apply roles and permissions to control the data and tools each agent can access.",
        link: "/product/admin-security/",
      },
      {
        title: "See requests and activity in Budibase",
        description:
          "Review requests, follow their progress, and inspect activity in one platform.",
        link: "/product/activity/",
      },
    ],
  },
} as const satisfies PlatformLandingContent;

export const chatWithAgentsFaqs = [
  {
    question: "Where can teams chat with agents?",
    answer:
      "Deploy Budibase agents in Slack and Microsoft Teams so people can ask questions and make requests in the tools they already use.",
  },
  {
    question: "Can people receive request and approval alerts?",
    answer:
      "Yes. Send request updates and approval notifications into Slack and Teams so the people responsible know when their input is needed.",
  },
  {
    question: "Can agents use our SharePoint content and PDFs?",
    answer:
      "Yes. Connect SharePoint and upload PDFs to give agents knowledge from your organization.",
  },
  {
    question: "How is access controlled?",
    answer:
      "Link team members in Slack and Teams to their Budibase users, then apply roles and permissions to the data and tools available to agents.",
  },
  {
    question: "Where can I review requests and activity?",
    answer:
      "Use Budibase to view requests and their progress, manage approvals, and inspect activity from the work your agents perform.",
  },
] as const;
