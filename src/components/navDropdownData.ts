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
  icon?: string;
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
  footerLink?: NavDropdownItem;
  footerLinks?: NavDropdownItem[];
  groupMobileColumns?: boolean;
}

export const platformDropdownMenu: NavDropdownMenu = {
  featuredCard: {
    href: "/platform/",
    title: "Platform",
    description: "Explore the Budibase platform.",
    ctaLabel: "View overview",
    image: platformCardImage,
  },
  groupMobileColumns: true,
  columns: [
    {
      heading: "Connect",
      items: [
        {
          href: "/product/agents/",
          label: "AI models",
          description: "Choose your models.",
          prefetch: true,
          icon: "StarFour",
        },
        {
          href: "/product/apis/",
          label: "APIs",
          description: "Connect business system actions.",
          prefetch: true,
          icon: "Code",
        },
        {
          href: "/product/data/",
          label: "Data tables",
          description: "Connect and store data.",
          prefetch: true,
          icon: "Table",
        },
        {
          href: "/product/knowledge/",
          label: "Knowledge",
          description: "Ground agents in knowledge.",
          prefetch: true,
          icon: "BookOpen",
        },
      ],
    },
    {
      heading: "Automate",
      items: [
        {
          href: "/product/agents/",
          label: "Agents",
          description: "Handle work with oversight.",
          prefetch: true,
          icon: "Robot",
        },
        {
          href: "/product/automations/",
          label: "Automations",
          description: "Run event-driven workflows.",
          prefetch: true,
          icon: "Lightning",
        },
        {
          href: "/product/functions/",
          label: "Functions",
          description: "Build reusable workflow logic.",
          prefetch: true,
          badge: "Alpha",
          icon: "Function",
        },
      ],
    },
    {
      heading: "Interact",
      items: [
        {
          href: "/product/agents/",
          label: "Chat with agents",
          description: "Use Slack or Teams.",
          prefetch: true,
          icon: "ChatCircle",
        },
        {
          href: "/product/apps/",
          label: "Apps",
          description: "Build secure operational interfaces.",
          prefetch: true,
          icon: "AppWindow",
        },
        {
          href: "/product/requests/",
          label: "Operations center",
          description: "Track requests and tasks.",
          prefetch: true,
          icon: "EnvelopeOpen",
        },
      ],
    },
    {
      heading: "Govern",
      items: [
        {
          href: "/product/activity/",
          label: "Activity",
          description: "Monitor and audit actions.",
          prefetch: true,
          icon: "Gauge",
        },
        {
          href: "/product/requests/",
          label: "Human approvals",
          description: "Review consequential actions.",
          prefetch: true,
          icon: "UserSwitch",
        },
        {
          href: "/product/admin-security/",
          label: "Permissions",
          description: "Control access and actions.",
          prefetch: true,
          icon: "Keyhole",
        },
      ],
    },
  ],
  footerLinks: [
    {
      href: "/security/",
      label: "Security & compliance",
      prefetch: true,
      icon: "ShieldCheck",
    },
    {
      href: "/product/self-host/",
      label: "Self-hosting",
      prefetch: true,
      icon: "CloudCheck",
    },
  ],
};

export const solutionsDropdownMenu: NavDropdownMenu = {
  featuredCard: {
    href: "/enterprise/",
    title: "Enterprise",
    description: "Scale with enterprise controls.",
    ctaLabel: "Explore enterprise",
    image: solutionsCardImage,
    imageTint: true,
  },
  columns: [
    {
      heading: "Use cases",
      items: [
        {
          href: "/solutions/requests-and-approvals/",
          label: "Requests and approvals",
          description: "Route requests through approvals.",
          prefetch: true,
        },
        {
          href: "/solutions/case-management/",
          label: "Case management",
          description: "Assign owners, resolve cases.",
          prefetch: true,
        },
        {
          href: "/solutions/data-collection-processes/",
          label: "Data collection and review",
          description: "Collect and review data.",
          prefetch: true,
        },
        {
          href: "/solutions/knowledge-assistants/",
          label: "Knowledge assistants",
          description: "Find answers from knowledge.",
          prefetch: true,
        },
      ],
    },
    {
      heading: "Industries",
      items: [
        {
          href: "/solutions/public-sector/",
          label: "Public sector",
          description: "Modernize public service workflows.",
          prefetch: true,
        },
        {
          href: "/solutions/finance/",
          label: "Finance",
          description: "Control finance operations.",
          prefetch: true,
        },
        {
          href: "/solutions/utilities/",
          label: "Utilities",
          description: "Connect utility operations.",
          prefetch: true,
        },
        {
          href: "/solutions/manufacturing/",
          label: "Manufacturing",
          description: "Digitize manufacturing operations.",
          prefetch: true,
        },
      ],
    },
  ],
  footerLink: {
    href: "/process/",
    label: "Templates",
    description: "Start with operational templates.",
    prefetch: true,
  },
};

export const resourcesDropdownMenu: NavDropdownMenu = {
  featuredCard: {
    href: "/process/",
    title: "Templates",
    description: "Start with operational templates.",
    ctaLabel: "Browse templates",
    image: resourcesCardImage,
  },
  columns: [
    {
      heading: "Build",
      items: [
        {
          href: "https://docs.budibase.com/docs/hosting-methods",
          label: "Install",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "https://docs.budibase.com/",
          label: "Docs",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "https://docs.budibase.com/reference/appcreate",
          label: "API reference",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "https://github.com/Budibase/budibase",
          label: "Source code",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "/process/",
          label: "Templates",
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
          prefetch: true,
        },
        {
          href: "/blog/",
          label: "Blog",
          prefetch: true,
        },
        {
          href: "https://github.com/Budibase/budibase/releases",
          label: "Changelog",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "https://github.com/Budibase/budibase/discussions",
          label: "Community forum",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "/support/",
          label: "Support",
          prefetch: true,
        },
      ],
    },
    {
      heading: "Company",
      items: [
        {
          href: "https://github.com/orgs/Budibase/projects/15/views/7",
          label: "Roadmap",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "/about/",
          label: "About",
          prefetch: true,
        },
        {
          href: "https://budibase.bamboohr.com/careers/",
          label: "Jobs",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "/events/",
          label: "Events",
        },
      ],
    },
  ],
  footerLinks: [
    {
      href: "/partners/",
      label: "Partners",
      prefetch: true,
    },
  ],
};

export const companyDropdownMenu: NavDropdownMenu = {
  featuredCard: {
    href: "/customers/",
    title: "Company",
    description: "Meet the Budibase team.",
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
          description: "Explore customer stories.",
          prefetch: true,
        },
        {
          href: "/partners/",
          label: "Partners",
          description: "Find a delivery partner.",
          prefetch: true,
        },
        {
          href: "/enterprise/",
          label: "Enterprise",
          description: "Enterprise controls and support.",
          prefetch: true,
        },
        {
          href: "/security/",
          label: "Security",
          description: "Explore Budibase security practices.",
          prefetch: true,
        },
        {
          href: "/contact/",
          label: "Contact",
          description: "Talk to our team.",
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
  ...(menu.footerLink ? [menu.footerLink] : []),
  ...(menu.footerLinks ?? []),
];
