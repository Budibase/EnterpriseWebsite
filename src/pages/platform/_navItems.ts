export interface NavItem {
  text: string;
  link: string;
  sectionId: string;
  iconName: string;
  pageTitle: string;
  pageDescription: string;
  tag?: {
    label: string;
    variant: "primary" | "secondary" | "cta" | "orange";
  };
}

export interface NavGroup {
  header?: string;
  items: NavItem[];
}

export const platformNavItemsData: NavGroup[] = [
  {
    items: [
      {
        text: "Agents",
        link: "/platform/agents",
        sectionId: "agents",
        iconName: "Memory",
        pageTitle: "Agents",
        pageDescription:
          "Design intelligent agents that reason, act, and integrate directly into your existing systems.",
        tag: {
          label: "Beta",
          variant: "cta",
        },
      },
      {
        text: "Chat",
        link: "/platform/chat",
        sectionId: "chat",
        iconName: "ChatCircle",
        pageTitle: "Chat",
        pageDescription:
          "A secure, flexible chat experience for humans and agents to collaborate in real time.",
        tag: {
          label: "Alpha",
          variant: "secondary",
        },
      },
      {
        text: "Automations",
        link: "/platform/automations",
        sectionId: "automations",
        iconName: "Path",
        pageTitle: "Automations",
        pageDescription:
          "Automate complex processes by combining AI, logic, and integrations in a single visual flow.",
      },
      {
        text: "Apps",
        link: "/platform/apps",
        sectionId: "apps",
        iconName: "Browsers",
        pageTitle: "Apps",
        pageDescription:
          "Build powerful internal tools and AI-enabled apps at the speed your business moves.",
      },
    ],
  },
  {
    items: [
      {
        text: "Connections",
        link: "/platform/connections",
        sectionId: "connections",
        iconName: "Link",
        pageTitle: "Connections",
        pageDescription: "Connect your models, data, and tools in one place.",
      },
      {
        text: "API explorer",
        link: "/platform/apis",
        sectionId: "apis",
        iconName: "Webhooks",
        pageTitle: "API Explorer",
        pageDescription:
          "Explore, test, and manage APIs with a developer-friendly experience built in.",
      },
      {
        text: "Data tables",
        link: "/platform/data",
        sectionId: "data",
        iconName: "Database",
        pageTitle: "Data",
        pageDescription:
          "A flexible data layer that powers apps, workflows, and AI — without friction.",
      },
    ],
  },
];
