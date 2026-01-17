export interface NavItem {
  text: string;
  link: string;
  sectionId: string;
  iconName: string;
}

export interface NavGroup {
  header?: string;
  items: NavItem[];
}

export const platformNavItemsData: NavGroup[] = [
  {
    items: [
      {
        text: "Overview",
        link: "/platform",
        sectionId: "overview",
        iconName: "Circles",
      },
    ],
  },
  {
    header: "CORE",
    items: [
      {
        text: "Agents",
        link: "/platform/agents",
        sectionId: "agents",
        iconName: "Memory",
      },
      {
        text: "Chat",
        link: "/platform/chat",
        sectionId: "chat",
        iconName: "ChatCircle",
      },
      {
        text: "Automations",
        link: "/platform/automations",
        sectionId: "automations",
        iconName: "Path",
      },
      {
        text: "Apps",
        link: "/platform/apps",
        sectionId: "apps",
        iconName: "Browsers",
      },
    ],
  },
  {
    header: "RESOURCES",
    items: [
      {
        text: "Connections",
        link: "/platform/integrations",
        sectionId: "integrations",
        iconName: "Link",
      },
      {
        text: "API explorer",
        link: "/platform/apis",
        sectionId: "apis",
        iconName: "Webhooks",
      },
      {
        text: "Data tables",
        link: "/platform/data",
        sectionId: "data",
        iconName: "Database",
      },
      {
        text: "Scaling",
        link: "/platform/scaling",
        sectionId: "scaling",
        iconName: "TrendUp",
      },
      {
        text: "Hosting",
        link: "/platform/hosting",
        sectionId: "hosting",
        iconName: "Cloud",
      },
    ],
  },
];
