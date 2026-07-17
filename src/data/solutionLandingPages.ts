export interface SolutionFeature {
  headline: string;
  body: string;
  bullets: readonly {
    icon: string;
    iconWeight?: string;
    text: string;
  }[];
  variant: "white" | "light";
}

export interface SolutionLandingContent {
  title: string;
  metaDescription: string;
  hero: {
    badgeLabel: string;
    badgeIcon: string;
    badgeIconWeight?: string;
    headline: string;
    subtitle: string;
    logosHeading: string;
  };
  features: readonly [SolutionFeature, SolutionFeature];
}

export const solutionLandingPages = {
  "public-sector": {
    title: "Public sector",
    metaDescription:
      "Secure, reliable operational software for public sector teams.",
    hero: {
      badgeLabel: "For public sector organisations",
      badgeIcon: "City",
      badgeIconWeight: "fill",
      headline: "Public services, built around people",
      subtitle:
        "Give service teams secure tools and automations that reduce administration, improve visibility, and keep essential work moving.",
      logosHeading: "Trusted by public service teams worldwide",
    },
    features: [
      {
        headline: "Modernise citizen services",
        body: "Create clear, accessible workflows that help teams respond quickly and deliver better public services.",
        bullets: [
          {
            icon: "City",
            iconWeight: "fill",
            text: "Bring casework, requests, and approvals into one secure workspace.",
          },
          {
            icon: "Users",
            text: "Give every team the tools they need without creating more operational overhead.",
          },
          {
            icon: "Gauge",
            iconWeight: "fill",
            text: "Track service delivery with the clarity leaders need to act quickly.",
          },
        ],
        variant: "light",
      },
      {
        headline: "Operate with confidence",
        body: "Protect sensitive information while giving teams the flexibility to adapt services as community needs change.",
        bullets: [
          {
            icon: "ShieldCheck",
            iconWeight: "fill",
            text: "Apply governance and access controls across every operational workflow.",
          },
          {
            icon: "CloudCheck",
            iconWeight: "fill",
            text: "Deploy in the environment that meets your organisation’s requirements.",
          },
          {
            icon: "CheckCircle",
            iconWeight: "fill",
            text: "Standardise processes while retaining the flexibility to support local teams.",
          },
        ],
        variant: "white",
      },
    ],
  },
  finance: {
    title: "Finance",
    metaDescription:
      "Controlled operational software for modern finance teams.",
    hero: {
      badgeLabel: "For finance organisations",
      badgeIcon: "Gauge",
      badgeIconWeight: "fill",
      headline: "Move finance operations forward",
      subtitle:
        "Build connected workflows that give finance teams the control, accuracy, and speed to keep critical processes moving.",
      logosHeading: "Trusted by leading finance teams globally",
    },
    features: [
      {
        headline: "Simplify critical workflows",
        body: "Replace fragmented spreadsheets and inboxes with operational tools that make financial work easier to manage.",
        bullets: [
          {
            icon: "CheckCircle",
            iconWeight: "fill",
            text: "Route approvals through clear, auditable processes from the first request.",
          },
          {
            icon: "Timer",
            text: "Reduce manual follow-up and keep time-sensitive work on track.",
          },
          {
            icon: "Gauge",
            iconWeight: "fill",
            text: "Give leaders real-time visibility into the work that matters most.",
          },
        ],
        variant: "light",
      },
      {
        headline: "Build in the right controls",
        body: "Keep processes secure, consistent, and ready to scale as your organisation grows.",
        bullets: [
          {
            icon: "ShieldCheck",
            iconWeight: "fill",
            text: "Protect sensitive data with enterprise-grade governance and access controls.",
          },
          {
            icon: "CloudCheck",
            iconWeight: "fill",
            text: "Connect securely to the systems that power your finance operations.",
          },
          {
            icon: "CheckCircle",
            iconWeight: "fill",
            text: "Create repeatable processes that keep every team aligned and accountable.",
          },
        ],
        variant: "white",
      },
    ],
  },
  utilities: {
    title: "Utilities",
    metaDescription:
      "Reliable operational software for utility teams and essential services.",
    hero: {
      badgeLabel: "For utility organisations",
      badgeIcon: "Lightning",
      headline: "Keep essential operations flowing",
      subtitle:
        "Give field, service, and operations teams the tools they need to respond faster and run reliably every day.",
      logosHeading: "Trusted by teams running essential services",
    },
    features: [
      {
        headline: "Connect work across the network",
        body: "Coordinate requests, maintenance, and service operations from one dependable operational platform.",
        bullets: [
          {
            icon: "Path",
            iconWeight: "fill",
            text: "Connect field activity, service requests, and back-office workflows.",
          },
          {
            icon: "Lightning",
            text: "Respond to operational changes quickly with automation built around your teams.",
          },
          {
            icon: "Gauge",
            iconWeight: "fill",
            text: "See the health of critical work in one clear operational view.",
          },
        ],
        variant: "light",
      },
      {
        headline: "Designed for dependable delivery",
        body: "Build workflows that remain secure, resilient, and easy to improve as services evolve.",
        bullets: [
          {
            icon: "ShieldCheck",
            iconWeight: "fill",
            text: "Keep essential systems and information protected with built-in controls.",
          },
          {
            icon: "CloudCheck",
            iconWeight: "fill",
            text: "Deploy flexibly across the infrastructure your operations depend on.",
          },
          {
            icon: "CheckCircle",
            iconWeight: "fill",
            text: "Standardise dependable processes across every operational team.",
          },
        ],
        variant: "white",
      },
    ],
  },
  manufacturing: {
    title: "Manufacturing",
    metaDescription:
      "Connected, reliable operational software for manufacturing teams.",
    hero: {
      badgeLabel: "For manufacturing organisations",
      badgeIcon: "Wrench",
      headline: "Make every operation work smarter",
      subtitle:
        "Connect people, processes, and systems so manufacturing teams can improve delivery without slowing production.",
      logosHeading: "Trusted by manufacturing teams worldwide",
    },
    features: [
      {
        headline: "Improve work on the floor",
        body: "Give teams simple, connected tools for the operational work that keeps production moving.",
        bullets: [
          {
            icon: "Wrench",
            text: "Digitise maintenance, quality, and operational requests in one place.",
          },
          {
            icon: "Path",
            iconWeight: "fill",
            text: "Connect shop-floor processes with the systems teams already rely on.",
          },
          {
            icon: "Gauge",
            iconWeight: "fill",
            text: "Give operators and leaders visibility into every stage of the workflow.",
          },
        ],
        variant: "light",
      },
      {
        headline: "Scale proven processes",
        body: "Create repeatable operational standards that improve consistency across plants, teams, and regions.",
        bullets: [
          {
            icon: "CheckCircle",
            iconWeight: "fill",
            text: "Standardise the processes that support quality, safety, and production.",
          },
          {
            icon: "ShieldCheck",
            iconWeight: "fill",
            text: "Control access to the work and data that keeps operations running.",
          },
          {
            icon: "CloudCheck",
            iconWeight: "fill",
            text: "Deploy in the environment that best supports your manufacturing estate.",
          },
        ],
        variant: "white",
      },
    ],
  },
  enterprise: {
    title: "Enterprise",
    metaDescription:
      "The secure, flexible platform for enterprise operations at scale.",
    hero: {
      badgeLabel: "For enterprise operations",
      badgeIcon: "BuildingOffice",
      headline: "Built for operations at scale",
      subtitle:
        "Give complex organisations the secure tools, automation, and control to improve critical operations with confidence.",
      logosHeading: "Trusted by leading organisations globally",
    },
    features: [
      {
        headline: "Transform critical operations",
        body: "Give teams the building blocks to create reliable operational software without compromising control.",
        bullets: [
          {
            icon: "Lightning",
            text: "Automate the work that slows teams down and creates operational risk.",
          },
          {
            icon: "Users",
            text: "Equip every team with tools that fit the way they work.",
          },
          {
            icon: "Gauge",
            iconWeight: "fill",
            text: "Bring the right information together for faster, more confident decisions.",
          },
        ],
        variant: "light",
      },
      {
        headline: "Control how you scale",
        body: "Run secure, governed operations across the environments, teams, and systems your business depends on.",
        bullets: [
          {
            icon: "ShieldCheck",
            iconWeight: "fill",
            text: "Apply enterprise governance, access controls, and auditability by default.",
          },
          {
            icon: "CloudCheck",
            iconWeight: "fill",
            text: "Deploy on-premise, in private cloud, or on public cloud infrastructure.",
          },
          {
            icon: "CheckCircle",
            iconWeight: "fill",
            text: "Create repeatable standards without limiting teams that need to move fast.",
          },
        ],
        variant: "white",
      },
    ],
  },
} as const satisfies Record<string, SolutionLandingContent>;

export const solutionSlugs = [
  "public-sector",
  "finance",
  "utilities",
  "manufacturing",
] as const;

export type SolutionSlug = (typeof solutionSlugs)[number];
