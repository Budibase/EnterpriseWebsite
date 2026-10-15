import type { PlatformLandingContent } from "./landingPageTypes";

export const platformLandingPages = {
  "ai-models": {
    title: "AI models — Bring your own model or use Budibase AI",
    metaDescription:
      "Connect Anthropic, Gemini, OpenAI, or Mistral directly, access more models through OpenRouter and Groq, or use Budibase AI. Power agents, automations, code, and data.",
    proof: "none",
    hero: {
      badge: "AI models",
      headline: "Connect AI models to power your processes",
      subtitle:
        "Bring your own AI model or use Budibase AI. Put it to work across agents, automations, code, and data, with model choice in IT’s hands.",
      imageAlt:
        "Bring your own model or use Budibase AI to power operational software",
    },
    features: [
      {
        headline: "Bring your own model",
        body: "Connect directly to models from Anthropic, Gemini, OpenAI, and Mistral. Access more models through OpenRouter and Groq, using your own provider credentials.",
        bullets: [
          {
            icon: "PlugsConnected",
            text: "Use the providers and models that fit your organization.",
          },
          {
            icon: "Keyhole",
            text: "Keep model choice aligned with your architecture and policies.",
          },
        ],
      },
      {
        headline: "Or use Budibase AI",
        body: "We test models, refine instructions, and evaluate results to give you the best possible AI experience in Budibase. Spend less time configuring AI and more time delivering the software your organization needs.",
        bullets: [
          {
            icon: "Sparkle",
            text: "Models tested for work in Budibase.",
          },
          {
            icon: "Wrench",
            text: "Instructions refined for the tasks you need to deliver.",
          },
        ],
      },
    ],
    cardCluster: {
      title: "One model. More ways to put it to work.",
      description:
        "Use your AI model across the software IT builds for business operations.",
      columns: 3,
      responsiveLayout: "stack",
      cards: [
        {
          title: "Power your agents",
          description:
            "Give agents a model to reason over requests, use connected tools, and act with human oversight.",
          link: "/product/agents/",
        },
        {
          title: "Add AI to automations",
          description:
            "Summarize, classify, and generate content with AI steps in your existing workflows.",
          link: "/product/automations/",
        },
        {
          title: "Generate code",
          description:
            "Describe the logic you need. Generate JavaScript, then review and adapt it for your apps and automations.",
          link: "/product/functions/",
        },
      ],
    },
  },
  data: {
    title: "Data tables — SQL and BudibaseDB",
    metaDescription:
      "Connect, sync and view SQL data in Budibase, generate CRUD APIs and tools, or build tables with BudibaseDB. Control table access, secured views and dev/prod data.",
    proof: "none",
    hero: {
      headline: "Data to power your processes",
      subtitle:
        "Bring your SQL data into Budibase or build a table from scratch with BudibaseDB. Put it to work across apps, agents and automations, with control over access, views and data environments.",
      imageAlt:
        "Budibase data table showing operational access request records",
    },
    features: [
      {
        headline: "First-class SQL support",
        body: "Connect, sync and view your SQL data inside Budibase. Generate CRUD APIs and tools for apps, agents and automations, while keeping your existing database at the center.",
        bullets: [],
      },
      {
        headline: "Build tables from scratch with BudibaseDB",
        body: "Start with BudibaseDB when a process needs a new data table. Define fields, add records and build the data structure your apps, agents and automations need.",
        bullets: [],
      },
    ],
    cardCluster: {
      title: "Your data. The right access.",
      description:
        "Control who can use each table, what data they can see, and which environment they work in.",
      columns: 3,
      responsiveLayout: "stack",
      cards: [
        {
          title: "Control table access",
          description:
            "Use role-based access control to decide which users can access each table.",
        },
        {
          title: "Create secured views",
          description:
            "Create filtered views of your data and secure them by role, so users see the rows and fields they need.",
        },
        {
          title: "Separate dev and prod data",
          description:
            "Build and test with development data, then run your processes against production data using separate data environments.",
        },
      ],
    },
  },
  requests: {
    title: "Human approvals — Keep people in control with Budibase",
    metaDescription:
      "Define when human approval is required, who approves, where they approve, and how long they have. Use tool data, notify Teams and Slack, and manage requests in the operations center.",
    proof: "none",
    hero: {
      headline: "Keep people in control of your processes",
      subtitle:
        "Define when approval is required and how it happens. Set the conditions, approvers, channels and time limits that keep your processes accountable.",
      imageAlt:
        "Human approval with a condition, approver, channel and time limit",
    },
    features: [
      {
        headline: "Define when approval is required",
        body: "Set approval conditions around the actions that need human oversight. Use the data available to your process to decide when a person needs to review an action before it proceeds.",
        bullets: [],
      },
      {
        headline: "Set the policy for every approval",
        body: "Choose who approves, where they approve, and how long they have to make a decision. Make the approval process clear for the people responsible for it.",
        bullets: [],
      },
    ],
    cardCluster: {
      title: "Bring the right context to every decision",
      description:
        "Connect tool data, notify approvers, and manage requests in one place.",
      columns: 3,
      responsiveLayout: "stack",
      cards: [
        {
          title: "Use data from tools",
          description:
            "Use data returned by tools in your approval conditions, so decisions reflect the action and its context.",
        },
        {
          title: "Notify Teams and Slack",
          description:
            "Send approval notifications to Microsoft Teams and Slack, where your approvers already work.",
        },
        {
          title: "Manage work in the operations center",
          description:
            "Manage requests and approvals in the operations center, with a clear view of the work waiting for a decision.",
        },
      ],
    },
  },
  activity: {
    title: "Activity — Oversight across your Budibase workspaces",
    metaDescription:
      "Gain oversight of every action across your Budibase workspaces. Follow agent requests in real time, surface errors, understand usage, and see totals at a glance.",
    proof: "none",
    hero: {
      headline: "See every action across your workspaces",
      subtitle:
        "Keep oversight of the work happening in Budibase. Review actions, follow live agent requests, and understand usage across your workspaces.",
      imageAlt:
        "Budibase activity overview showing actions, requests and errors",
    },
    features: [
      {
        headline: "An overview of every action",
        body: "Gain oversight of every single action across your workspaces. See what happened, where it happened, and its status, so IT can keep track of the processes it runs.",
        bullets: [],
      },
      {
        headline: "Follow agent requests in real time",
        body: "View live requests as users interact with agents. Follow each request and its progress to understand what your agents are doing for the teams that rely on them.",
        bullets: [],
      },
    ],
    cardCluster: {
      title: "Know what needs your attention",
      description:
        "Surface issues, understand how Budibase is used, and keep the totals in view.",
      columns: 3,
      responsiveLayout: "stack",
      cards: [
        {
          title: "Surface errors",
          description:
            "See failed actions and errors so you can identify the work that needs investigation.",
        },
        {
          title: "Understand usage",
          description:
            "Understand activity across your workspaces and see where teams are putting Budibase to work.",
        },
        {
          title: "See totals at a glance",
          description:
            "Use stat cards to get a quick overview of action, request and error totals.",
        },
      ],
    },
  },
  apis: {
    title: "APIs — Connect your systems with Budibase",
    metaDescription:
      "Connect any REST API with API Explorer, upload API specs, or start with 100+ OpenAPI templates. Control API access, pass values with bindings, and protect secrets.",
    proof: "none",
    hero: {
      headline: "Connect APIs to power your processes",
      subtitle:
        "Connect any REST API with our simple-to-use API Explorer. Upload your API specs or start with 100+ OpenAPI templates, then put your connections to work across apps, agents and automations.",
      imageAlt:
        "Budibase API Explorer configuring and testing a REST API request",
    },
    features: [
      {
        headline: "Connect to any REST API",
        body: "Configure and test requests in our simple-to-use API Explorer. Upload your API specs to bring endpoints into Budibase, then reuse your connections across apps, agents and automations.",
        bullets: [],
      },
      {
        headline: "Start with 100+ OpenAPI templates",
        body: "Quickly connect to the tools your organization already uses. Choose from 100+ OpenAPI spec templates, add your credentials, and start using API actions in your processes.",
        bullets: [],
      },
    ],
    cardCluster: {
      title: "Connected systems. Controlled access.",
      description:
        "Give your APIs the right inputs, permissions and credentials for the work they need to do.",
      columns: 3,
      responsiveLayout: "stack",
      cards: [
        {
          title: "Control API access",
          description:
            "Use role-based access control to decide which users can access each API.",
        },
        {
          title: "Pass values with bindings",
          description:
            "Pass values from apps, agents and automations into API requests, so each call uses the right operational context.",
        },
        {
          title: "Keep secrets out of sight",
          description:
            "Let builders configure and use API connections without seeing the environment variables that hold credentials and other sensitive values.",
        },
      ],
    },
  },
  knowledge: {
    title: "Knowledge — Turn your knowledge into answers with Budibase",
    metaDescription:
      "Give agents the knowledge they need with uploaded PDFs and SharePoint content. Get started out of the box with Budibase AI and see source references in answers.",
    proof: "none",
    hero: {
      headline: "Turn your knowledge into answers",
      subtitle:
        "Let agents answer questions using your team's knowledge. Upload PDFs or connect SharePoint, get started with Budibase AI, and give users answers that reference their sources.",
      imageAlt:
        "Knowledge assistant answering a question with SharePoint and PDF source references",
    },
    features: [
      {
        headline: "Give agents the knowledge they need",
        body: "Let agents answer questions using the knowledge you upload.",
        bullets: [],
      },
      {
        headline: "Get started without extra setup",
        body: "Knowledge works out of the box when you use Budibase AI.",
        bullets: [],
      },
    ],
    cardCluster: {
      title: "Your content. Answers with context.",
      description:
        "Put your team's content to work and help users explore the sources behind each answer.",
      columns: 3,
      responsiveLayout: "stack",
      cards: [
        {
          title: "Put your SharePoint knowledge to work",
          description:
            "Connect SharePoint so agents can answer questions using your team's content.",
        },
        {
          title: "Turn PDFs into answers",
          description:
            "Upload PDFs to make their content available to your agents.",
        },
        {
          title: "See where answers come from",
          description:
            "Answers reference their sources, helping users verify information and explore further.",
        },
      ],
    },
  },
  "self-host": {
    title: "Self-hosting — Deploy Budibase on your terms",
    metaDescription:
      "Run Budibase with Docker or Kubernetes on your own domain. Keep control of your data and infrastructure, extend with plugins, and upgrade on your schedule.",
    proof: "none",
    hero: {
      headline: "Deploy Budibase on your terms",
      subtitle:
        "Run apps, agents and automations on your own infrastructure. Choose where your data lives, fit your operational requirements, and upgrade when your team is ready.",
      imageAlt:
        "Budibase running on your infrastructure with Docker or Kubernetes and a custom domain",
    },
    features: [
      {
        headline: "Deploy on your own infrastructure",
        body: "Run Budibase with Docker or Kubernetes and make it available on your own custom domain.",
        bullets: [],
      },
      {
        headline: "Keep control of your data and infrastructure",
        body: "Choose where your data lives and manage Budibase within your own security and operational requirements.",
        bullets: [],
      },
    ],
    cardCluster: {
      title: "Self-hosting that fits your team",
      description:
        "Simplify setup, extend your platform, and keep upgrade control with your team.",
      columns: 3,
      responsiveLayout: "stack",
      cards: [
        {
          title: "Simplify setup with the Budibase CLI",
          description:
            "Set up and manage your self-hosted deployment from the command line.",
        },
        {
          title: "Extend Budibase to fit your systems",
          description:
            "Use datasource and automation plugins to connect custom systems and add functionality.",
        },
        {
          title: "Upgrade on your schedule",
          description:
            "Control which Budibase version you run and roll out updates when your team is ready.",
        },
      ],
    },
  },
  "admin-security": {
    title: "Permissions — Control access across Budibase",
    metaDescription:
      "Protect tables, APIs, automations, agent tools and screens with granular roles. Manage groups across workspaces, connect identity systems, and onboard users quickly.",
    proof: "none",
    hero: {
      headline: "Control access across your processes",
      subtitle:
        "Give every user the access they need. Protect your resources with granular role requirements, and manage users and groups across your workspaces as your organization grows.",
      imageAlt:
        "Budibase role requirements for tables, APIs, automations, agent tools and screens",
    },
    features: [
      {
        headline: "Give every user the right level of access",
        body: "Protect tables, APIs, automations, agent tools, and screens with granular role requirements.",
        bullets: [],
      },
      {
        headline: "Manage access as your organization grows",
        body: "Organize users into groups and control access across workspaces without managing everyone individually.",
        bullets: [],
      },
    ],
    cardCluster: {
      title: "Access that fits your organization",
      description:
        "Tailor roles, connect your identity systems, and get new users up and running.",
      columns: 3,
      responsiveLayout: "stack",
      cards: [
        {
          title: "Match permissions to how your team works",
          description:
            "Create custom roles that reflect your teams and responsibilities.",
        },
        {
          title: "Connect your existing identity systems",
          description:
            "Simplify sign-in and user management with SSO, SAML, and Active Directory sync.",
        },
        {
          title: "Get new users up and running quickly",
          description:
            "Onboard users through email invitations or generated passwords.",
        },
      ],
    },
  },
} as const satisfies Record<string, PlatformLandingContent>;

export type PlatformLandingSlug = keyof typeof platformLandingPages;

export const platformLandingSlugs = Object.keys(
  platformLandingPages,
) as PlatformLandingSlug[];
