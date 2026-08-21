import type { PlatformLandingContent } from "./landingPageTypes";

export const platformLandingPages = {
  data: {
    title: "Tables",
    metaDescription:
      "Manage structured operational data that powers AI agents, workflows, and internal apps.",
    hero: {
      headline: "Structure data for every operation",
      subtitle:
        "Store new data or connect PostgreSQL, MySQL, Google Sheets, and more. Work with data in a spreadsheet-style interface, create views, and run AI on rows.",
      imageAlt: "Structured operational data in Budibase tables",
    },
    features: [
      {
        headline: "Keep operational data clean and accessible",
        body: "Give teams a familiar interface for managing the structured data behind apps, workflows, and agents.",
        bullets: [
          {
            icon: "Table",
            text: "Create built-in tables for operational records and requests.",
          },
          {
            icon: "Browser",
            text: "Work quickly through a familiar spreadsheet-style interface.",
          },
          {
            icon: "CheckCircle",
            text: "Apply validation rules that keep incoming data dependable.",
          },
        ],
      },
      {
        headline: "Connect data without disrupting your stack",
        body: "Use built-in tables or work directly with external databases while retaining the controls each operation needs.",
        bullets: [
          {
            icon: "PlugsConnected",
            text: "Connect PostgreSQL, MySQL, and other existing data sources.",
          },
          {
            icon: "Code",
            text: "Build queries visually or use SQL for flexible retrieval.",
          },
          {
            icon: "ShieldCheck",
            text: "Control table access with roles and review changes through audit history.",
          },
        ],
      },
    ],
    cardCluster: {
      title: "Build a reliable data foundation",
      description:
        "Give every operational app, workflow, and agent structured data it can depend on.",
      cards: [
        {
          title: "Built-in database",
          description:
            "Create structured tables without provisioning another data service.",
        },
        {
          title: "External data sources",
          description:
            "Use existing databases without migrating operational data.",
        },
        {
          title: "Secure data access",
          description:
            "Apply roles, validation, and audit history around critical records.",
        },
      ],
    },
  },
  requests: {
    title: "Requests and Approvals",
    metaDescription:
      "Collect, route, approve, and resolve operational requests with connected Budibase apps, agents, and automations.",
    hero: {
      headline: "Make every request easier to resolve",
      subtitle:
        "Give employees a clear way to ask for help, then route, approve, and resolve each request through one connected operational workflow.",
      imageAlt: "Operational request intake and approval interface",
    },
    features: [
      {
        headline: "Create one clear front door for requests",
        body: "Replace scattered inboxes, messages, and spreadsheets with structured intake that gives teams the information they need.",
        bullets: [
          {
            icon: "Browser",
            text: "Create simple forms and apps for every request type.",
          },
          {
            icon: "ChatCircle",
            text: "Let employees submit requests through familiar channels.",
          },
          {
            icon: "CheckCircle",
            text: "Capture complete, consistent information from the start.",
          },
        ],
      },
      {
        headline: "Automate approvals and next steps",
        body: "Keep work moving with routing, decisions, and follow-up built directly into the request process.",
        bullets: [
          {
            icon: "GitFork",
            text: "Route each request using the rules that fit your operation.",
          },
          {
            icon: "UserSwitch",
            text: "Send approvals to the right owner with the right context.",
          },
          {
            icon: "Lightning",
            text: "Trigger fulfilment and notifications as soon as decisions are made.",
          },
        ],
      },
    ],
    cardCluster: {
      title: "Build request workflows for every team",
      description:
        "Standardise common requests while keeping each process flexible.",
      cards: [
        {
          title: "Access requests",
          description:
            "Collect access needs, route approvals, and record every decision.",
        },
        {
          title: "Service requests",
          description:
            "Give employees a simple path from issue submission to resolution.",
        },
        {
          title: "Purchase requests",
          description:
            "Coordinate budgets, approvals, and purchasing from one workflow.",
        },
      ],
    },
  },
  activity: {
    title: "Activity and Insights",
    metaDescription:
      "Track operational activity across Budibase workflows, agents, apps, and automations with clear, actionable visibility.",
    hero: {
      headline: "See the work behind every operation",
      subtitle:
        "Track requests, decisions, agent actions, and automated steps so teams know what happened, what is moving, and what needs attention.",
      imageAlt: "Operational activity and insights dashboard",
    },
    features: [
      {
        headline: "Bring operational activity into view",
        body: "Give teams a shared understanding of work across connected apps, agents, and automations.",
        bullets: [
          {
            icon: "Gauge",
            text: "Follow work as it moves through each operational stage.",
          },
          {
            icon: "Sparkle",
            text: "Understand the actions agents take on behalf of your teams.",
          },
          {
            icon: "Lightning",
            text: "Review automated steps and the outcomes they produce.",
          },
        ],
      },
      {
        headline: "Make follow-up predictable",
        body: "Use clear activity history to investigate issues, improve processes, and keep important work on track.",
        bullets: [
          {
            icon: "Timer",
            text: "Spot work that is waiting, delayed, or ready for attention.",
          },
          {
            icon: "Path",
            text: "Trace decisions and actions across the complete workflow.",
          },
          {
            icon: "CheckCircle",
            text: "Keep a dependable record of completed operational work.",
          },
        ],
      },
    ],
    cardCluster: {
      title: "Insights for the work that matters",
      description:
        "Understand activity across people, agents, and automated processes.",
      cards: [
        {
          title: "Workflow activity",
          description:
            "See requests, decisions, and status changes in one clear history.",
        },
        {
          title: "Agent activity",
          description:
            "Review the questions, actions, and outcomes handled by agents.",
        },
        {
          title: "Audit-ready history",
          description:
            "Keep an accessible record for investigation and governance.",
        },
      ],
    },
  },
} as const satisfies Record<string, PlatformLandingContent>;

export type PlatformLandingSlug = keyof typeof platformLandingPages;

export const platformLandingSlugs = Object.keys(
  platformLandingPages,
) as PlatformLandingSlug[];
