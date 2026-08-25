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
  apis: {
    title: "API Explorer",
    metaDescription:
      "Explore, test, and reuse API calls so Budibase apps, agents, and automations can securely act across operational systems.",
    hero: {
      headline: "Connect every operational system",
      subtitle:
        "Explore, test, and reuse API calls so apps, agents, and automations can take controlled action across your stack.",
      imageAlt: "API connection configured for an operational workflow",
    },
    features: [
      {
        headline: "Explore and test APIs in one place",
        body: "Configure external services through one controlled explorer before using them in operational workflows.",
        bullets: [
          {
            icon: "Code",
            text: "Build and execute REST API requests from a unified interface.",
          },
          {
            icon: "Keyhole",
            text: "Keep authentication configuration with the connection that uses it.",
          },
          {
            icon: "GitFork",
            text: "Map request inputs and response outputs into structured data.",
          },
        ],
      },
      {
        headline: "Reuse reliable actions across the platform",
        body: "Define an API action once, then use it wherever operational work needs the same controlled connection.",
        bullets: [
          {
            icon: "Path",
            text: "Reuse API actions across apps, automations, and agents.",
          },
          {
            icon: "Lightning",
            text: "Use webhooks to start connected operational workflows.",
          },
          {
            icon: "Gauge",
            text: "Inspect execution history when connected work needs attention.",
          },
        ],
      },
    ],
    cardCluster: {
      title: "Build reusable API connections",
      description:
        "Connect external systems once and make dependable actions available across the platform.",
      cards: [
        {
          title: "REST API connector",
          description:
            "Configure requests to the external services your operation relies on.",
        },
        {
          title: "Secure credentials",
          description:
            "Centralise authentication without exposing sensitive values.",
        },
        {
          title: "Reusable API actions",
          description:
            "Use tested integrations throughout apps, agents, and automations.",
        },
      ],
    },
  },
  knowledge: {
    title: "Knowledge",
    metaDescription:
      "Ground Budibase agents in trusted operational knowledge with controlled retrieval and context aligned to each agent's role.",
    hero: {
      headline: "Give every agent the right context",
      subtitle:
        "Connect trusted knowledge to agents so they can answer questions and support operational work with relevant context.",
      imageAlt: "Agent instructions connected to operational knowledge",
    },
    features: [
      {
        headline: "Connect the knowledge your teams rely on",
        body: "Bring operational guidance and business context into the same controlled system as the agents that use it.",
        bullets: [
          {
            icon: "Cube",
            text: "Attach focused knowledge sources to the agents responsible for each process.",
          },
          {
            icon: "Path",
            text: "Retrieve relevant context as questions and requests arrive.",
          },
          {
            icon: "UserSwitch",
            text: "Align each agent's knowledge with its operational responsibility.",
          },
        ],
      },
      {
        headline: "Turn questions into accountable next steps",
        body: "Help people find answers quickly while keeping agent behaviour aligned with approved operational context.",
        bullets: [
          {
            icon: "ChatCircle",
            text: "Answer everyday questions in the channels where work happens.",
          },
          {
            icon: "Keyhole",
            text: "Keep access to knowledge aligned with operational controls.",
          },
          {
            icon: "CheckCircle",
            text: "Use retrieved context to guide consistent actions and responses.",
          },
        ],
      },
    ],
    cardCluster: {
      title: "Knowledge that works with your agents",
      description:
        "Ground agent behaviour in the information that matters to each operation.",
      cards: [
        {
          title: "Knowledge retrieval",
          description:
            "Find relevant context when an agent needs to answer or act.",
        },
        {
          title: "Focused sources",
          description:
            "Connect each agent to knowledge suited to its role and scope.",
        },
        {
          title: "Context-aware answers",
          description:
            "Give teams useful responses grounded in operational information.",
        },
      ],
    },
  },
  "self-host": {
    title: "Self-hosting",
    metaDescription:
      "Deploy Budibase on your own infrastructure with flexible self-hosting options for controlled and regulated environments.",
    hero: {
      headline: "Deploy Budibase on your terms",
      subtitle:
        "Run Budibase in the environment you control, close to the systems and data that support critical operations.",
      imageAlt: "Secure self-hosted enterprise operations",
    },
    features: [
      {
        headline: "Run in the environment you control",
        body: "Deploy Budibase across the infrastructure and network boundaries that fit your organisation.",
        bullets: [
          {
            icon: "Cube",
            text: "Use established container and orchestration workflows.",
          },
          {
            icon: "CloudCheck",
            text: "Run on-premise, in a private cloud, or in public cloud infrastructure.",
          },
          {
            icon: "ShieldCheck",
            text: "Support isolated operational environments where required.",
          },
        ],
      },
      {
        headline: "Keep critical systems close",
        body: "Connect operational data, models, and services without moving them outside your chosen environment.",
        bullets: [
          {
            icon: "Path",
            text: "Reach internal systems through your existing network controls.",
          },
          {
            icon: "Keyhole",
            text: "Retain control over infrastructure, credentials, and operational data.",
          },
          {
            icon: "Wrench",
            text: "Manage deployment and updates through established practices.",
          },
        ],
      },
    ],
    cardCluster: {
      title: "Flexible deployment for enterprise operations",
      description:
        "Choose the hosting model that aligns with your infrastructure and governance requirements.",
      cards: [
        {
          title: "Container deployment",
          description:
            "Run Budibase with the container tooling your platform teams use.",
        },
        {
          title: "Isolated environments",
          description:
            "Support private networks and isolated operational workloads.",
        },
        {
          title: "Infrastructure control",
          description:
            "Keep deployment, data location, and operations in your hands.",
        },
      ],
    },
  },
  "admin-security": {
    title: "Admin and Security",
    metaDescription:
      "Manage identity, access, governance, and audit controls for secure enterprise operations with Budibase.",
    hero: {
      headline: "Control operations with confidence",
      subtitle:
        "Give administrators identity, access, and governance controls without slowing the teams responsible for operational work.",
      imageAlt: "Enterprise administration and security controls",
    },
    features: [
      {
        headline: "Centralise access and administration",
        body: "Manage how people enter the platform, what they can use, and which operational resources they can access.",
        bullets: [
          {
            icon: "UserSwitch",
            text: "Organise users and groups around operational responsibilities.",
          },
          {
            icon: "Keyhole",
            text: "Apply role-based access controls across apps and data.",
          },
          {
            icon: "ShieldCheck",
            text: "Connect enterprise identity and sign-on processes.",
          },
        ],
      },
      {
        headline: "Build governance into everyday work",
        body: "Keep operational activity visible and controlled as more teams, workflows, and systems join the platform.",
        bullets: [
          {
            icon: "Path",
            text: "Maintain audit trails for user and system activity.",
          },
          {
            icon: "CheckCircle",
            text: "Standardise controls across critical operational workflows.",
          },
          {
            icon: "Gauge",
            text: "Scale administration without losing operational visibility.",
          },
        ],
      },
    ],
    cardCluster: {
      title: "Enterprise controls built into the platform",
      description:
        "Manage identity, access, and accountability from one operational foundation.",
      cards: [
        {
          title: "Role-based access",
          description:
            "Give users access to the data and tools required for their role.",
        },
        {
          title: "Identity and provisioning",
          description:
            "Connect sign-on and user management to enterprise identity systems.",
        },
        {
          title: "Audit logging",
          description:
            "Review activity across users, resources, and operational workflows.",
        },
      ],
    },
  },
} as const satisfies Record<string, PlatformLandingContent>;

export type PlatformLandingSlug = keyof typeof platformLandingPages;

export const platformLandingSlugs = Object.keys(
  platformLandingPages,
) as PlatformLandingSlug[];
