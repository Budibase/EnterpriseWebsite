import { homepageFeatureMedia } from "./homepageFeatureMedia";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { ComponentProps } from "astro/types";
import type CardCluster from "../components/cards/CardCluster.astro";
import type {
  PlatformLandingContent,
  ProductDetailSection,
} from "./landingPageTypes";
import type { MarketplaceSelection } from "./productMarketplace";
import { useCaseLandingPages } from "./useCaseLandingPages";
import FactoryInspectionsDemo from "../pages/_components/landing-page/FactoryInspectionsDemo.astro";
import AssetTrackingDemo from "../pages/_components/landing-page/AssetTrackingDemo.astro";
import ApprovalVisual from "../pages/product/_components/ApprovalVisual.astro";
import ActivityVisual from "../pages/product/_components/ActivityVisual.astro";
import PermissionsVisual from "../pages/product/_components/PermissionsVisual.astro";
import OperationsCenterDemo from "../components/demos/OperationsCenterDemo.astro";
import OperationsCenterVisual from "../pages/product/_components/OperationsCenterVisual.astro";
import SelfHostingVisual from "../pages/product/_components/SelfHostingVisual.astro";
import IndustryHeroPhoto from "../assets/images/solutions/industry-hero.png?url";

export interface SolutionMedia {
  image?: string;
  imageAlt: string;
  demo?: AstroComponentFactory;
  demoProps?: Record<string, unknown>;
}
type SupportingCard = NonNullable<
  ComponentProps<typeof CardCluster>["cards"]
>[number] & { description: string };
type FAQ = { question: string; answer: string };
export interface SolutionLandingContent extends PlatformLandingContent {
  heroLayout: "split" | "stacked";
  hero: PlatformLandingContent["hero"] & {
    media: SolutionMedia;
    backgroundImage?: string;
  };
  features: readonly [
    ProductDetailSection & { media: SolutionMedia },
    ProductDetailSection & { media: SolutionMedia },
  ];
  cardCluster: {
    title: string;
    description: string;
    cards: readonly [SupportingCard, SupportingCard, SupportingCard];
  };
  marketplace: MarketplaceSelection;
  faqs: readonly [FAQ, FAQ, FAQ, FAQ, FAQ];
}

export const solutionLandingPages = {
  ...useCaseLandingPages,

  "public-sector": {
    title: "Public sector",
    metaDescription:
      "Secure, reliable operational software for public sector teams.",
    heroLayout: "split",
    hero: {
      headline: "Public services, built around people",
      backgroundImage: IndustryHeroPhoto,
      subtitle:
        "Give service teams secure tools and automations that reduce administration, improve visibility, and keep essential work moving.",
      imageAlt:
        "Operations center showing the progress of operational requests",
      media: {
        demo: OperationsCenterDemo,
        imageAlt:
          "Operations center showing the progress of operational requests",
      },
    },
    features: [
      {
        headline: "Modernise citizen services",
        body: "Create clear, accessible workflows that help teams respond quickly and deliver better public services. Bring casework, requests, and approvals into a shared workspace with clear ownership.",
        bullets: [],
        media: {
          demo: OperationsCenterDemo,
          imageAlt:
            "Operations center showing the progress of operational requests",
        },
      },
      {
        headline: "Operate with confidence",
        body: "Protect sensitive information while giving teams the flexibility to adapt services as community needs change. Apply access controls and repeatable standards while retaining flexibility for local teams.",
        bullets: [],
        media: {
          demo: PermissionsVisual,
          imageAlt:
            "Role requirements controlling access to tables, APIs, automations, tools and screens",
          demoProps: {
            variant: "access",
          },
        },
      },
    ],
    cardCluster: {
      title: "Support the work behind public services",
      description:
        "Connect service intake with the access and deployment controls IT needs.",
      cards: [
        {
          title: "Service intake",
          description:
            "Give teams one place to access services and follow requests through to completion.",
          mediaDemo: OperationsCenterDemo,
          mediaDemoProps: { compact: true },
        },
        {
          title: "Access controls",
          description:
            "Limit access to sensitive records and actions with granular roles.",
          mediaDemo: PermissionsVisual,
          mediaDemoProps: {
            variant: "access",
          },
        },
        {
          title: "Deployment choice",
          description:
            "Use Budibase Cloud or deploy within infrastructure your organisation manages.",
          mediaDemo: SelfHostingVisual,
          mediaDemoProps: {
            variant: "deployment",
          },
        },
      ],
    },
    marketplace: [
      {
        type: "template",
        id: "access-request",
      },
      {
        type: "template",
        id: "purchase-order-request",
      },
      {
        type: "template",
        id: "new-starter-account-setup",
      },
      {
        type: "partner",
        id: "teiva-systems",
      },
    ],
    faqs: [
      {
        question: "What public service workflows can we build?",
        answer:
          "Create casework, service intake, requests, and approvals around your organisation’s processes. Give teams clear ownership and visibility into the work they deliver.",
      },
      {
        question: "Can Budibase connect to our existing systems?",
        answer:
          "Yes. Connect databases and REST APIs so service workflows can use the records and systems your teams already rely on.",
      },
      {
        question: "How do we protect sensitive information?",
        answer:
          "Apply roles and permissions to tables, APIs, automations, tools, and screens. Add human approval where your process requires a decision.",
      },
      {
        question: "Can we choose where Budibase runs?",
        answer:
          "Yes. Use Budibase Cloud or self-host in an environment that meets your organisation’s security and operational requirements.",
      },
      {
        question: "How do we begin with templates?",
        answer:
          "Start with access requests, purchase orders, or new-starter setup. Adapt the connections, roles, and approval rules to your service before publishing.",
      },
    ],
  },
  finance: {
    title: "Finance",
    metaDescription:
      "Controlled operational software for modern finance teams.",
    heroLayout: "split",
    hero: {
      headline: "Move finance operations forward",
      backgroundImage: IndustryHeroPhoto,
      subtitle:
        "Build connected workflows that give finance teams the control, accuracy, and speed to keep critical processes moving.",
      imageAlt: "Approval conditions and policy for a finance request",
      media: {
        demo: ApprovalVisual,
        imageAlt: "Approval conditions and policy for a finance request",
        demoProps: {
          variant: "overview",
        },
      },
    },
    features: [
      {
        headline: "Simplify critical workflows",
        body: "Replace fragmented spreadsheets and inboxes with operational tools that make financial work easier to manage. Route approvals, automate follow-up, and keep the status of each request visible.",
        bullets: [],
        media: {
          demo: ApprovalVisual,
          imageAlt: "Approval conditions and policy for a finance request",
          demoProps: {
            variant: "overview",
          },
        },
      },
      {
        headline: "Build in the right controls",
        body: "Keep processes secure, consistent, and ready to scale as your organisation grows. Connect existing finance systems and protect sensitive records with granular access controls.",
        bullets: [],
        media: {
          demo: PermissionsVisual,
          imageAlt:
            "Role requirements controlling access to tables, APIs, automations, tools and screens",
          demoProps: {
            variant: "access",
          },
        },
      },
    ],
    cardCluster: {
      title: "Keep finance work accountable",
      description:
        "Bring routing, connected systems, and activity into the same process.",
      cards: [
        {
          title: "Approval routing",
          description:
            "Send requests to the right approver with clear conditions and time limits.",
          mediaDemo: ApprovalVisual,
          mediaDemoProps: {
            variant: "policy",
          },
        },
        {
          title: "Connected finance systems",
          description:
            "Connect finance databases and APIs to reduce re-entry and manual follow-up.",
          mediaBadges: homepageFeatureMedia.apis.mediaBadges,
        },
        {
          title: "Activity visibility",
          description:
            "Review actions and requests to understand progress and investigate errors.",
          mediaDemo: ActivityVisual,
          mediaDemoProps: {
            variant: "actions",
          },
        },
      ],
    },
    marketplace: [
      {
        type: "template",
        id: "invoice-approval-workflow",
      },
      {
        type: "template",
        id: "purchase-order-request",
      },
      {
        type: "template",
        id: "vendor-onboarding-review",
      },
      {
        type: "partner",
        id: "teiva-systems",
      },
    ],
    faqs: [
      {
        question: "Which finance processes can we build?",
        answer:
          "Create workflows for invoices, purchases, vendor onboarding, and other finance requests. Capture context, route decisions, and coordinate follow-up.",
      },
      {
        question: "Can we connect our finance systems?",
        answer:
          "Yes. Connect databases and REST APIs to retrieve records and update your existing systems through configured workflows.",
      },
      {
        question: "How do we control financial approvals and access?",
        answer:
          "Set approval conditions and approvers, then use granular roles to control access to sensitive data and actions.",
      },
      {
        question: "Can finance workflows run on our infrastructure?",
        answer:
          "Yes. Choose self-hosting or Budibase Cloud to fit your organisation’s data, security, and operational requirements.",
      },
      {
        question: "Which finance templates are available?",
        answer:
          "Start with invoice approvals, purchase orders, or vendor onboarding. Configure your systems, approvers, and rules before using a template in production.",
      },
    ],
  },
  utilities: {
    title: "Utilities",
    metaDescription:
      "Reliable operational software for utility teams and essential services.",
    heroLayout: "split",
    hero: {
      headline: "Keep essential operations flowing",
      backgroundImage: IndustryHeroPhoto,
      subtitle:
        "Give field, service, and operations teams the tools they need to respond faster and run reliably every day.",
      imageAlt:
        "Asset records, maintenance status and connected operational data",
      media: {
        demo: AssetTrackingDemo,
        imageAlt:
          "Asset records, maintenance status and connected operational data",
      },
    },
    features: [
      {
        headline: "Connect work across the network",
        body: "Coordinate requests, maintenance, and service operations from one dependable operational platform. Connect field activity and back-office workflows so teams can see what needs attention.",
        bullets: [],
        media: {
          demo: AssetTrackingDemo,
          imageAlt:
            "Asset records, maintenance status and connected operational data",
        },
      },
      {
        headline: "Designed for dependable delivery",
        body: "Build workflows that remain secure, resilient, and easy to improve as services evolve. Apply access controls and standardise processes on infrastructure that fits your operations.",
        bullets: [],
        media: {
          demo: PermissionsVisual,
          imageAlt:
            "Role requirements controlling access to tables, APIs, automations, tools and screens",
          demoProps: {
            variant: "access",
          },
        },
      },
    ],
    cardCluster: {
      title: "Connect the teams keeping services running",
      description: "Coordinate operational work with clear updates and access.",
      cards: [
        {
          title: "Field and office coordination",
          description:
            "Give field and service teams access to shared records and requests across devices.",
          mediaDemo: OperationsCenterVisual,
          mediaDemoProps: {
            variant: "devices",
          },
        },
        {
          title: "Automated updates",
          description:
            "Trigger notifications and system updates as operational records change.",
          mediaScene: homepageFeatureMedia.automations.mediaScene,
        },
        {
          title: "Controlled access",
          description:
            "Give each team access to the data and actions their work requires.",
          mediaDemo: PermissionsVisual,
          mediaDemoProps: {
            variant: "roles",
          },
        },
      ],
    },
    marketplace: [
      {
        type: "template",
        id: "device-replacement-request",
      },
      {
        type: "template",
        id: "cybersecurity-incident-reporting",
      },
      {
        type: "template",
        id: "software-installation-request",
      },
      {
        type: "partner",
        id: "teiva-systems",
      },
    ],
    faqs: [
      {
        question: "What utility workflows can we build?",
        answer:
          "Coordinate maintenance, asset requests, service issues, and back-office work. Build around your teams’ responsibilities and existing operational processes.",
      },
      {
        question: "Can we connect field records to existing systems?",
        answer:
          "Yes. Use database connections and REST APIs to bring records into apps and automate updates across connected systems.",
      },
      {
        question: "How do we control access and exceptions?",
        answer:
          "Apply granular roles to resources and actions. Route exceptions to people and require approval wherever your process calls for oversight.",
      },
      {
        question: "Where can we deploy Budibase?",
        answer:
          "Use Budibase Cloud or self-host on infrastructure your team manages, according to your operational and security requirements.",
      },
      {
        question: "Which templates can help us start?",
        answer:
          "Explore device replacement, cybersecurity incident reporting, and software installation requests. Adapt the data, routing, and controls to your organisation.",
      },
    ],
  },
  manufacturing: {
    title: "Manufacturing",
    metaDescription:
      "Connected, reliable operational software for manufacturing teams.",
    heroLayout: "split",
    hero: {
      headline: "Make every operation work smarter",
      backgroundImage: IndustryHeroPhoto,
      subtitle:
        "Connect people, processes, and systems so manufacturing teams can improve delivery without slowing production.",
      imageAlt:
        "Factory inspection records connected to a mobile inspection form",
      media: {
        demo: FactoryInspectionsDemo,
        imageAlt:
          "Factory inspection records connected to a mobile inspection form",
      },
    },
    features: [
      {
        headline: "Improve work on the floor",
        body: "Give teams simple, connected tools for the operational work that keeps production moving. Digitise maintenance, quality, and service requests around the systems you already use.",
        bullets: [],
        media: {
          demo: FactoryInspectionsDemo,
          imageAlt:
            "Factory inspection records connected to a mobile inspection form",
        },
      },
      {
        headline: "Scale proven processes",
        body: "Create repeatable operational standards that improve consistency across plants, teams, and regions. Reuse processes that support quality and safety, with access controls for each team.",
        bullets: [],
        media: {
          demo: PermissionsVisual,
          imageAlt:
            "Role requirements controlling access to tables, APIs, automations, tools and screens",
          demoProps: {
            variant: "access",
          },
        },
      },
    ],
    cardCluster: {
      title: "Bring consistency to everyday operations",
      description: "Connect inspections and systems across teams and sites.",
      cards: [
        {
          title: "Inspections",
          description:
            "Capture inspection records with structured forms and clear follow-up.",
          mediaDemo: FactoryInspectionsDemo,
        },
        {
          title: "Connected systems",
          description:
            "Connect shop-floor workflows to the databases and APIs teams already use.",
          mediaBadges: homepageFeatureMedia.apis.mediaBadges,
        },
        {
          title: "Consistent processes across sites",
          description:
            "Reuse operational standards while controlling access for each team.",
          mediaDemo: PermissionsVisual,
          mediaDemoProps: {
            variant: "groups",
          },
        },
      ],
    },
    marketplace: [
      {
        type: "template",
        id: "device-replacement-request",
      },
      {
        type: "template",
        id: "purchase-order-request",
      },
      {
        type: "template",
        id: "vendor-onboarding-review",
      },
      {
        type: "partner",
        id: "teiva-systems",
      },
    ],
    faqs: [
      {
        question: "What manufacturing workflows can we build?",
        answer:
          "Create tools for inspections, maintenance, quality checks, and operational requests. Connect the work teams do on the floor with the follow-up it needs.",
      },
      {
        question: "Can Budibase connect to our production systems?",
        answer:
          "Connect systems that expose supported database connections or REST APIs. IT configures the records and actions available to each workflow.",
      },
      {
        question: "How do we keep processes controlled across sites?",
        answer:
          "Use shared workflow standards and granular roles. Add approval steps where quality, safety, or operational exceptions need human review.",
      },
      {
        question: "Can we run Budibase in our own environment?",
        answer:
          "Yes. Self-host on your infrastructure or use Budibase Cloud, according to your manufacturing estate’s requirements.",
      },
      {
        question: "Which templates are useful starting points?",
        answer:
          "Start with device replacement, purchase orders, or vendor onboarding. Adapt the records, connected systems, and approval rules to your teams.",
      },
    ],
  },
  enterprise: {
    title: "Enterprise",
    metaDescription:
      "The secure, flexible platform for enterprise operations at scale.",
    heroLayout: "split",
    hero: {
      headline: "Built for operations at scale",
      subtitle:
        "Give complex organisations the secure tools, automation, and control to improve critical operations with confidence.",
      imageAlt:
        "Operations center showing the progress of operational requests",
      media: {
        demo: OperationsCenterDemo,
        imageAlt:
          "Operations center showing the progress of operational requests",
      },
    },
    features: [
      {
        headline: "Transform critical operations",
        body: "Give teams the building blocks to create reliable operational software without compromising control. Connect apps, agents, and automations around the work your teams need to deliver.",
        bullets: [],
        media: {
          demo: OperationsCenterDemo,
          imageAlt:
            "Operations center showing the progress of operational requests",
        },
      },
      {
        headline: "Control how you scale",
        body: "Run secure, governed operations across the environments, teams, and systems your business depends on. Apply shared access controls and operational standards while choosing where Budibase runs.",
        bullets: [],
        media: {
          demo: PermissionsVisual,
          imageAlt:
            "Role requirements controlling access to tables, APIs, automations, tools and screens",
          demoProps: {
            variant: "access",
          },
        },
      },
    ],
    cardCluster: {
      title: "Deliver more without losing control",
      description:
        "Keep permissions, systems, and deployment aligned with your organisation.",
      cards: [
        {
          title: "Granular permissions",
          description:
            "Protect tables, APIs, automations, agent tools, and screens with role requirements.",
          mediaDemo: PermissionsVisual,
          mediaDemoProps: {
            variant: "access",
          },
        },
        {
          title: "Connected systems",
          description:
            "Build around existing databases and APIs while IT manages the connections.",
          mediaBadges: homepageFeatureMedia.apis.mediaBadges,
        },
        {
          title: "Flexible deployment",
          description:
            "Choose Budibase Cloud or run on infrastructure your team owns and manages.",
          mediaDemo: SelfHostingVisual,
          mediaDemoProps: {
            variant: "deployment",
          },
        },
      ],
    },
    marketplace: [
      {
        type: "template",
        id: "access-request",
      },
      {
        type: "template",
        id: "purchase-order-request",
      },
      {
        type: "template",
        id: "new-starter-account-setup",
      },
      {
        type: "partner",
        id: "teiva-systems",
      },
    ],
    faqs: [
      {
        question: "What can enterprise IT build with Budibase?",
        answer:
          "Build and run apps, automations, and agents around operational processes. Connect existing data and APIs, define the rules, and give teams tools that fit their work.",
      },
      {
        question: "How does Budibase fit our existing systems?",
        answer:
          "Connect supported databases and REST APIs, then extend with datasource and automation plugins where needed. IT manages the connections and credentials.",
      },
      {
        question: "How do we govern users and actions?",
        answer:
          "Use granular roles, groups, and identity integrations to control access. Set approval conditions and policies where actions need human oversight.",
      },
      {
        question: "Which deployment options are available?",
        answer:
          "Use Budibase Cloud or self-host with Docker or Kubernetes on your infrastructure. Choose the environment that meets your data and operational requirements.",
      },
      {
        question: "How can we start with a repeatable workflow?",
        answer:
          "Begin with access requests, purchase orders, or new-starter setup. Adapt the template to your systems and controls, then test it with the team responsible for the process.",
      },
    ],
  },
} as const satisfies Record<string, SolutionLandingContent>;

export const solutionSlugs = [
  "requests-and-approvals",
  "case-management",
  "data-collection-processes",
  "knowledge-assistants",
  "public-sector",
  "finance",
  "utilities",
  "manufacturing",
] as const;

export type SolutionSlug = (typeof solutionSlugs)[number];
