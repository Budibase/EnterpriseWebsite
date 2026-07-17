export interface ProductFeatureSection {
  headline: string;
  body: string;
  bullets: readonly {
    icon: string;
    text: string;
  }[];
}

export interface ProductFeatureCard {
  title: string;
  description: string;
}

export interface ProductFeatureLandingContent {
  title: string;
  metaDescription: string;
  hero: {
    badgeLabel: string;
    badgeIcon: string;
    headline: string;
    subtitle: string;
    imageAlt: string;
    logosHeading: string;
  };
  features: readonly [ProductFeatureSection, ProductFeatureSection];
  cardCluster: {
    title: string;
    description: string;
    cards: readonly [
      ProductFeatureCard,
      ProductFeatureCard,
      ProductFeatureCard,
    ];
  };
}

export const productFeatureLandingPages = {
  functions: {
    title: "Functions",
    metaDescription:
      "Add reusable server-side logic to Budibase workflows, transform data, and connect operational systems.",
    hero: {
      badgeLabel: "Functions",
      badgeIcon: "Lightning",
      headline: "Bring custom logic to every workflow",
      subtitle:
        "Create reusable server-side functions that validate data, connect services, and handle the logic behind your most important operations.",
      imageAlt: "Operational function connected to an automated workflow",
      logosHeading: "Trusted by teams building enterprise operations",
    },
    features: [
      {
        headline: "Build the logic your operation needs",
        body: "Go beyond fixed workflow steps with functions designed around your systems, rules, and processes.",
        bullets: [
          {
            icon: "Wrench",
            text: "Create reusable logic for specialised operational requirements.",
          },
          {
            icon: "GitFork",
            text: "Validate, transform, and route data before the next step runs.",
          },
          {
            icon: "Lightning",
            text: "Trigger functions from the workflows and automations that need them.",
          },
        ],
      },
      {
        headline: "Connect logic across your stack",
        body: "Keep business rules close to the workflows they support while integrating securely with external services.",
        bullets: [
          {
            icon: "Path",
            text: "Call connected systems and APIs from one controlled workflow.",
          },
          {
            icon: "Keyhole",
            text: "Use protected configuration without exposing sensitive credentials.",
          },
          {
            icon: "CheckCircle",
            text: "Return consistent outputs that downstream steps can rely on.",
          },
        ],
      },
    ],
    cardCluster: {
      title: "Extend every operational workflow",
      description:
        "Use functions wherever a process needs more control, context, or connectivity.",
      cards: [
        {
          title: "Custom workflow logic",
          description:
            "Handle the decisions and calculations that make each process unique.",
        },
        {
          title: "Data transformation",
          description:
            "Shape incoming and outgoing data for every connected system.",
        },
        {
          title: "External services",
          description:
            "Connect APIs and services without breaking the flow of work.",
        },
      ],
    },
  },
  knowledge: {
    title: "Knowledge",
    metaDescription:
      "Ground Budibase agents in trusted knowledge so they can answer questions and support operational work with useful context.",
    hero: {
      badgeLabel: "Knowledge",
      badgeIcon: "Sparkle",
      headline: "Give every agent the right context",
      subtitle:
        "Connect trusted knowledge to your agents so they can answer questions, understand requests, and support operational work with relevant context.",
      imageAlt: "Agent instructions connected to operational knowledge",
      logosHeading: "Trusted by teams building enterprise operations",
    },
    features: [
      {
        headline: "Connect the knowledge your teams rely on",
        body: "Bring operational guidance and business context into the same place as the agents that use it.",
        bullets: [
          {
            icon: "Cube",
            text: "Attach knowledge sources to the agents responsible for each process.",
          },
          {
            icon: "Path",
            text: "Retrieve relevant context as questions and requests arrive.",
          },
          {
            icon: "UserSwitch",
            text: "Give different agents knowledge aligned to their responsibilities.",
          },
        ],
      },
      {
        headline: "Turn questions into useful next steps",
        body: "Help people find answers quickly while keeping agents focused on approved operational knowledge.",
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
  requests: {
    title: "Requests and Approvals",
    metaDescription:
      "Collect, route, approve, and resolve operational requests with connected Budibase apps, agents, and automations.",
    hero: {
      badgeLabel: "Requests and approvals",
      badgeIcon: "EnvelopeOpen",
      headline: "Make every request easier to resolve",
      subtitle:
        "Give employees a clear way to ask for help, then route, approve, and resolve each request through one connected operational workflow.",
      imageAlt: "Operational request intake and approval interface",
      logosHeading: "Trusted by teams building enterprise operations",
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
      badgeLabel: "Activity and insights",
      badgeIcon: "Gauge",
      headline: "See the work behind every operation",
      subtitle:
        "Track requests, decisions, agent actions, and automated steps so teams know what happened, what is moving, and what needs attention.",
      imageAlt: "Operational activity and insights dashboard",
      logosHeading: "Trusted by teams building enterprise operations",
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
  "self-host": {
    title: "Self-hosting",
    metaDescription:
      "Deploy Budibase on your own infrastructure with flexible self-hosting options for controlled and regulated environments.",
    hero: {
      badgeLabel: "Self-hosting",
      badgeIcon: "CloudCheck",
      headline: "Deploy Budibase on your terms",
      subtitle:
        "Run Budibase in the environment you control, close to your systems and data, with deployment options designed for secure enterprise operations.",
      imageAlt: "Secure self-hosted enterprise operations",
      logosHeading: "Trusted by teams building enterprise operations",
    },
    features: [
      {
        headline: "Run in the environment you control",
        body: "Deploy Budibase across the infrastructure and network boundaries that fit your organisation.",
        bullets: [
          {
            icon: "Cube",
            text: "Deploy using established container and orchestration workflows.",
          },
          {
            icon: "CloudCheck",
            text: "Run on-premise, in a private cloud, or in public cloud infrastructure.",
          },
          {
            icon: "ShieldCheck",
            text: "Support isolated and air-gapped operational environments.",
          },
        ],
      },
      {
        headline: "Keep critical systems close",
        body: "Connect operational data, models, and services without moving them outside your chosen environment.",
        bullets: [
          {
            icon: "Path",
            text: "Reach internal systems within your existing network controls.",
          },
          {
            icon: "Keyhole",
            text: "Retain control over infrastructure, credentials, and operational data.",
          },
          {
            icon: "Wrench",
            text: "Manage deployment and updates through your established practices.",
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
            "Support private networks and air-gapped operational workloads.",
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
      "Manage access, governance, identity, and audit controls for secure enterprise operations with Budibase.",
    hero: {
      badgeLabel: "Admin and security",
      badgeIcon: "ShieldCheck",
      headline: "Control operations with confidence",
      subtitle:
        "Give administrators the identity, access, and governance controls to protect operational work without slowing teams down.",
      imageAlt: "Enterprise administration and security controls",
      logosHeading: "Trusted by teams building enterprise operations",
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
} as const satisfies Record<string, ProductFeatureLandingContent>;

export type ProductFeatureSlug = keyof typeof productFeatureLandingPages;

export const productFeatureSlugs = Object.keys(
  productFeatureLandingPages,
) as ProductFeatureSlug[];
