import type { PlatformLandingContent } from "./landingPageTypes";

export const appsLandingPage = {
  title: "Apps — Build apps for business operations",
  metaDescription:
    "Create production-ready enterprise apps with data, automations and screens. Apply built-in governance, extend with custom components, and run in the cloud or self-host.",
  proof: "none",
  hero: {
    headline: "Build apps for business operations",
    subtitle:
      "Create production-ready apps with your data, automations and screens. Give teams the tools they need, with governance and security built in.",
    imageAlt:
      "Budibase app builder showing a request inbox, connected data and reusable components",
  },
  features: [
    {
      headline: "Business-grade building blocks",
      body: "Create production-ready apps with data, automations, and screens. No coding required.",
      bullets: [],
    },
    {
      headline: "Governance and security out of the box",
      body: "Connect your identity provider for single sign-on. Apply role-based access and data-level permissions so users can access only the screens, records and actions their role allows.",
      bullets: [],
    },
  ],
  cardCluster: {
    title: "A faster way to build enterprise apps",
    description:
      "Extend your apps, connect your systems, and deploy where your business needs them.",
    columns: 3,
    responsiveLayout: "stack",
    cards: [
      {
        title: "Custom components",
        description:
          "Build and reuse custom components to match the interfaces your processes need.",
      },
      {
        title: "Limitless integrations",
        description:
          "Connect your apps to existing databases, REST APIs and tools, keeping your systems at the center.",
      },
      {
        title: "Run in the cloud or self-host",
        description:
          "Run in Budibase Cloud or on your own infrastructure to meet your security and operational requirements.",
      },
    ],
  },
} as const satisfies PlatformLandingContent;

export const appsFaqs = [
  {
    question: "Do I need to code to build an app?",
    answer:
      "No. Create apps with data, automations and screens using Budibase's visual building blocks. Add custom components when your interface needs something more specific.",
  },
  {
    question: "Can I connect an app to our existing systems?",
    answer:
      "Yes. Connect your apps to existing databases, REST APIs and tools, then use that data in your screens and processes.",
  },
  {
    question: "How do I control access to apps and data?",
    answer:
      "Connect your identity provider for single sign-on and apply role-based access. Use screen access and data-level permissions to control what users can see and do.",
  },
  {
    question: "Can I create custom components?",
    answer:
      "Yes. Build reusable custom components to extend the interfaces you create with Budibase.",
  },
  {
    question: "Can I self-host my apps?",
    answer:
      "Yes. Run Budibase on your own infrastructure, or use Budibase Cloud. Choose the deployment that fits your security and operational requirements.",
  },
] as const;
