import type { PlatformLandingContent } from "./landingPageTypes";

export const automationsLandingPage = {
  title: "Automations — Run production workflows with control",
  metaDescription:
    "Build visual production workflows that coordinate agents, people, and systems. Add human approvals, connect hundreds of tools, and extend processes with JavaScript.",
  proof: "none",
  hero: {
    headline: "Automate the work behind your operations",
    subtitle:
      "Build production workflows that connect your systems, coordinate agents, and bring people in when it matters. From trigger to outcome, keep every process under your control.",
    imageAlt:
      "Budibase visual automation builder showing connected workflow steps and execution controls",
  },
  features: [
    {
      headline: "Visual workflows built for production",
      body: "Set a trigger, connect your systems, and add the logic your process needs. Test your workflow, then deploy in one click.",
      bullets: [],
    },
    {
      headline: "Orchestrate agents, people, and systems",
      body: "Coordinate end-to-end business processes with agentic orchestration. Blend deterministic automation with AI reasoning and human decisions in one governed process.",
      bullets: [],
    },
  ],
  cardCluster: {
    title: "Build the logic your business needs",
    description:
      "Connect your tools, add custom logic, and keep people in control of consequential actions.",
    columns: 3,
    responsiveLayout: "stack",
    cards: [
      {
        title: "Human approvals",
        description:
          "Require a human decision at the points you define, with clear approval conditions and policies.",
        link: "/product/requests/",
      },
      {
        title: "Connect hundreds of tools",
        description:
          "Read data and take action across your existing systems with reusable API connections.",
        link: "/product/apis/",
      },
      {
        title: "Add custom code",
        description:
          "Use JavaScript functions to add business rules, transform data, and extend your process.",
        link: "/product/functions/",
      },
    ],
  },
} as const satisfies PlatformLandingContent;

export const automationsFaqs = [
  {
    question: "What can trigger an automation?",
    answer:
      "Start workflows from schedules, webhooks, data changes, apps, and agents. Choose the trigger that matches how work enters your process.",
  },
  {
    question: "Can I combine agents with deterministic steps?",
    answer:
      "Yes. Combine agent steps with defined conditions, system actions, and human approvals in the same workflow.",
  },
  {
    question: "Can I add JavaScript to a workflow?",
    answer:
      "Yes. Use JavaScript functions for custom business logic and data transformations within your process.",
  },
  {
    question: "How do human approvals work?",
    answer:
      "Define when approval is required and configure who approves, where they approve, and how long they have to respond.",
  },
  {
    question: "Can I test a workflow before deploying it?",
    answer:
      "Yes. Test your automation before launch, inspect the inputs and outputs, and deploy when the workflow is ready.",
  },
] as const;
