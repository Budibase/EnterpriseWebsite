import type { PlatformLandingContent } from "./landingPageTypes";

export const operationsCenterLandingPage = {
  title: "Operations center — One place for apps, requests, and approvals",
  metaDescription:
    "Give teams one place to access Budibase apps and services, track requests, and complete approvals. Customize your branding and work across desktop and mobile.",
  proof: "none",
  hero: {
    headline: "One place to get work moving",
    subtitle:
      "Give your teams a central place to access apps and services, follow their requests, and complete approvals. Bring the work IT delivers together in your operations center.",
    imageAlt:
      "Budibase operations center with apps, services, personal requests, and approval tasks",
  },
  features: [
    {
      headline: "Your apps and services, in one place",
      body: "Give users a clear starting point for the apps and services your team provides. Make it easy to find the right tool and start the work they need to do.",
      bullets: [],
    },
    {
      headline: "Keep every requester in the loop",
      body: "Let users see the requests they’ve made and follow their progress. Keep the status of their work easy to find, without chasing updates across conversations.",
      bullets: [],
    },
  ],
  cardCluster: {
    title: "A workspace built around your teams",
    description:
      "Bring decisions, familiar branding, and access on the go into the same experience.",
    columns: 3,
    responsiveLayout: "stack",
    cards: [
      {
        title: "Act on assigned approvals",
        description:
          "Give users one place to review, approve, or reject the requests assigned to them.",
        link: "/product/requests/",
      },
      {
        title: "Make it your own",
        description:
          "Customize the operations center with your branding so it feels familiar to your organization.",
      },
      {
        title: "Work across desktop and mobile",
        description:
          "Access apps, follow requests, and complete approvals from a desktop or mobile device.",
      },
    ],
  },
} as const satisfies PlatformLandingContent;

export const operationsCenterFaqs = [
  {
    question: "What is the operations center?",
    answer:
      "The operations center gives your users a central place to access apps and services, follow requests, and complete approvals.",
  },
  {
    question: "Can users track the requests they’ve made?",
    answer:
      "Yes. Users can view their requests and see how the work is progressing.",
  },
  {
    question: "Can users approve or reject assigned requests?",
    answer:
      "Yes. Users can review the requests assigned to them and approve or reject them from the operations center.",
  },
  {
    question: "Can we use our own branding?",
    answer:
      "Yes. Customize the operations center with your organization’s branding.",
  },
  {
    question: "Does the operations center work on mobile?",
    answer:
      "Yes. Users can access the operations center across desktop and mobile devices.",
  },
] as const;
