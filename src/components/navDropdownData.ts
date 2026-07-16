import platformCardImage from "../assets/images/navigation/platform-card.webp?url";
import resourcesCardImage from "../assets/images/navigation/resources-card.webp?url";
import solutionsCardImage from "../assets/images/navigation/solutions-card.webp?url";
import companyCardImage from "../assets/images/homepage/platform/bg.png?url";

export interface NavDropdownItem {
  href: string;
  label: string;
  description?: string;
  prefetch?: boolean;
  badge?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

export interface NavDropdownColumn {
  heading: string;
  items: NavDropdownItem[];
  columnSpan?: 1 | 2;
}

export interface NavFeaturedCard {
  href: string;
  title: string;
  description: string;
  ctaLabel: string;
  image: string;
  imageTint?: boolean;
}

export interface NavDropdownMenu {
  featuredCard: NavFeaturedCard;
  columns: NavDropdownColumn[];
}

export const platformDropdownMenu: NavDropdownMenu = {
  featuredCard: {
    href: "/",
    title: "Overview",
    description:
      "See how Budibase brings agents, apps, and automations together.",
    ctaLabel: "View overview",
    image: platformCardImage,
  },
  columns: [
    {
      heading: "Products",
      items: [
        {
          href: "/product/agents/",
          label: "Agents",
          description: "AI agents that handle operational work.",
          prefetch: true,
        },
        {
          href: "/product/apps/",
          label: "Apps",
          description: "Secure internal tools for every team.",
          prefetch: true,
        },
        {
          href: "/product/automations/",
          label: "Automations",
          description: "Event-driven workflows across your stack.",
          prefetch: true,
        },
        {
          href: "/blog/ai-agents/digital-workers/",
          label: "Functions",
          description: "Server-side functions for your workflows.",
          prefetch: true,
        },
      ],
    },
    {
      heading: "Features",
      items: [
        {
          href: "/product/data/",
          label: "Tables",
          description: "Structured data for apps and workflows.",
          prefetch: true,
        },
        {
          href: "/product/connections/",
          label: "Connections",
          description: "Connect data, tools, models, and APIs.",
          prefetch: true,
        },
        {
          href: "/product/apis/",
          label: "API Explorer",
          description: "Explore and connect external APIs.",
          prefetch: true,
        },
        {
          href: "/product/agents/",
          label: "Knowledge",
          description: "Ground agents with retrieval workflows.",
          prefetch: true,
        },
      ],
    },
    {
      heading: "Scale",
      items: [
        {
          href: "/ops/access-request/",
          label: "Requests & Approvals",
          description: "Handle intake, approvals, and follow-up.",
          prefetch: true,
        },
        {
          href: "/product/agents/",
          label: "Activity & Insights",
          description: "Track activity across operational workflows.",
          prefetch: true,
        },
        {
          href: "/security/",
          label: "Admin & Security",
          description: "Controls for secure enterprise operations.",
          prefetch: true,
        },
        {
          href: "/enterprise/",
          label: "Self-hosting",
          description: "Deploy Budibase in your own environment.",
          prefetch: true,
        },
      ],
    },
  ],
};

export const solutionsDropdownMenu: NavDropdownMenu = {
  featuredCard: {
    href: "/enterprise/",
    title: "Enterprise",
    description:
      "Scale Budibase across teams with governance, security, and deployment control.",
    ctaLabel: "Explore enterprise",
    image: solutionsCardImage,
    imageTint: true,
  },
  columns: [
    {
      heading: "Industries",
      items: [
        {
          href: "/ops/",
          label: "Public sector",
          description: "Secure workflows for public service teams.",
          prefetch: true,
        },
        {
          href: "/ops/",
          label: "Finance",
          description: "Controlled tools for finance operations.",
          prefetch: true,
        },
        {
          href: "/ops/",
          label: "Utilities",
          description: "Operational workflows for utility teams.",
          prefetch: true,
        },
        {
          href: "/ops/",
          label: "Manufacturing",
          description: "Digitize manufacturing operations.",
          prefetch: true,
        },
      ],
    },
    {
      heading: "Use cases",
      columnSpan: 2,
      items: [
        {
          href: "/ops/",
          label: "Use Cases",
          description: "Common operational apps and agents.",
          prefetch: true,
        },
        {
          href: "/ops/access-request/",
          label: "Access Requests",
          description: "Manage employee access requests.",
          prefetch: true,
        },
        {
          href: "/ops/software-installation-request/",
          label: "Software Requests",
          description: "Standardize software intake and approval.",
          prefetch: true,
        },
        {
          href: "/ops/vendor-onboarding-review/",
          label: "Vendor Onboarding",
          description: "Review and approve vendor onboarding.",
          prefetch: true,
        },
        {
          href: "/ops/purchase-order-request/",
          label: "Purchase Orders",
          description: "Coordinate purchasing workflows.",
          prefetch: true,
        },
        {
          href: "/ops/invoice-approval-workflow/",
          label: "Invoice Approvals",
          description: "Route invoices for review.",
          prefetch: true,
        },
        {
          href: "/ops/deal-desk-approval/",
          label: "Deal Desk",
          description: "Approve non-standard sales deals.",
          prefetch: true,
        },
        {
          href: "/ops/customer-refund-request/",
          label: "Refund Requests",
          description: "Review customer refund requests.",
          prefetch: true,
        },
      ],
    },
  ],
};

export const resourcesDropdownMenu: NavDropdownMenu = {
  featuredCard: {
    href: "/ops/",
    title: "Templates",
    description: "Start faster with ready-to-build operational templates.",
    ctaLabel: "Browse templates",
    image: resourcesCardImage,
  },
  columns: [
    {
      heading: "Build",
      items: [
        {
          href: "https://docs.budibase.com/docs/installation",
          label: "Install",
          description: "Install Budibase in your own environment.",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "https://docs.budibase.com",
          label: "Docs",
          description: "Read the Budibase documentation.",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "/product/apis/",
          label: "API reference",
          description: "Explore Budibase API resources.",
          prefetch: true,
        },
        {
          href: "https://github.com/budibase/budibase",
          label: "Source code",
          description: "View the Budibase source code.",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "/ops/",
          label: "Templates",
          description: "Start from ready-to-build operational templates.",
          prefetch: true,
        },
      ],
    },
    {
      heading: "Explore",
      items: [
        {
          href: "/customers/",
          label: "Customer stories",
          description: "See how teams build with Budibase.",
          prefetch: true,
        },
        {
          href: "/blog/",
          label: "Blog",
          description: "Guides, comparisons, and product thinking.",
          prefetch: true,
        },
        {
          href: "/changelog/",
          label: "Changelog",
          description: "Product updates and release notes.",
          prefetch: true,
        },
        {
          href: "https://github.com/Budibase/budibase/discussions",
          label: "Community forum",
          description: "Join the Budibase community.",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "/support/",
          label: "Support",
          description: "Support terms and service information.",
          prefetch: true,
        },
      ],
    },
    {
      heading: "Company",
      items: [
        {
          href: "/roadmap/",
          label: "Roadmap",
          description: "See what the Budibase team is building.",
        },
        {
          href: "/about/",
          label: "About",
          description: "Learn more about Budibase.",
        },
        {
          href: "/jobs/",
          label: "Jobs",
          description: "Explore open roles at Budibase.",
        },
        {
          href: "/events/",
          label: "Events",
          description: "Join upcoming Budibase events.",
        },
        {
          href: "/leadership/",
          label: "Leadership",
          description: "Meet the Budibase leadership team.",
        },
      ],
    },
  ],
};

export const companyDropdownMenu: NavDropdownMenu = {
  featuredCard: {
    href: "/customers/",
    title: "Company",
    description:
      "Learn how Budibase supports teams building secure operational software at scale.",
    ctaLabel: "Meet Budibase",
    image: companyCardImage,
  },
  columns: [
    {
      heading: "Company",
      items: [
        {
          href: "/customers/",
          label: "Customers",
          description: "Customer stories and case studies.",
          prefetch: true,
        },
        {
          href: "/partners/",
          label: "Partners",
          description: "Work with the Budibase partner team.",
          prefetch: true,
        },
        {
          href: "/enterprise/",
          label: "Enterprise",
          description: "Security, control, and support at scale.",
          prefetch: true,
        },
        {
          href: "/security/",
          label: "Security",
          description: "How Budibase protects teams and data.",
          prefetch: true,
        },
        {
          href: "/contact/",
          label: "Contact",
          description: "Talk to the Budibase team.",
          prefetch: true,
        },
      ],
    },
  ],
};

export const navDropdownMenus = [
  {
    label: "Platform",
    menu: platformDropdownMenu,
  },
  {
    label: "Solutions",
    menu: solutionsDropdownMenu,
  },
  {
    label: "Resources",
    menu: resourcesDropdownMenu,
  },
  {
    label: "Company",
    menu: companyDropdownMenu,
  },
];

export const flattenMenuItems = (menu: NavDropdownMenu): NavDropdownItem[] => [
  {
    href: menu.featuredCard.href,
    label: menu.featuredCard.title,
    description: menu.featuredCard.description,
    prefetch: menu.featuredCard.href.startsWith("/"),
  },
  ...menu.columns.flatMap((column) => column.items),
];
