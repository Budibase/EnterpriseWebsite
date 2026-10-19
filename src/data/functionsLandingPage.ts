import type { PlatformLandingContent } from "./landingPageTypes";

export const functionsLandingPage = {
  title: "Functions — Custom code for your processes",
  metaDescription:
    "Write JavaScript functions or generate them with AI. Version your logic, debug with your own AI assistant, and run functions from automation triggers.",
  proof: "none",
  hero: {
    headline: "Build functions that power your processes",
    subtitle:
      "Write custom JavaScript or generate functions with AI. Add the logic your processes need, then put it to work in your automations.",
    imageAlt:
      "Function editor showing JavaScript that prepares a purchase request, with an AI prompt and structured output",
  },
  features: [
    {
      headline: "The flexibility of code",
      body: "Write JavaScript to transform data, apply business rules, and handle the logic your processes need. Use functions in your automations to extend what you can build.",
      bullets: [],
    },
    {
      headline: "Generate functions with AI",
      body: "Describe the logic you need and generate a function with AI. Review and refine the code before putting it to work in your process.",
      bullets: [],
    },
  ],
  cardCluster: {
    title: "Code that fits the way you work",
    description:
      "Version your logic, troubleshoot with familiar tools, and run it when your process needs it.",
    columns: 3,
    responsiveLayout: "stack",
    cards: [
      {
        title: "Version your functions",
        description:
          "Keep track of function versions as your business logic changes, with a clear history of your work.",
      },
      {
        title: "Debug with your own AI assistant",
        description:
          "Copy and paste your code into your preferred AI assistant to troubleshoot errors and refine your logic.",
      },
      {
        title: "CRON, webhooks, data triggers, and more",
        description:
          "Use functions in automations to benefit from scheduled runs, webhooks, data changes, and the other triggers your processes need.",
        link: "/product/automations/",
      },
    ],
  },
} as const satisfies PlatformLandingContent;

export const functionsFaqs = [
  {
    question: "What can I build with functions?",
    answer:
      "Write JavaScript for the business rules, calculations, validation, and data transformations your processes need. Use functions within automations to add custom logic to a workflow.",
  },
  {
    question: "Can AI generate a function for me?",
    answer:
      "Yes. Describe the logic you need and generate a function with AI. Review the code, adjust it to your requirements, and test it before using it in your process.",
  },
  {
    question: "Can I version my functions?",
    answer:
      "Yes. Version your functions to keep track of changes as your logic evolves. Function versioning tracks your code changes within Budibase.",
  },
  {
    question: "How can I get help debugging a function?",
    answer:
      "Copy your code and the relevant error into your preferred AI assistant. Use its suggestions to troubleshoot the issue, then review and test any changes in Budibase.",
  },
  {
    question: "How do I trigger a function?",
    answer:
      "Add your function to an automation. The automation's trigger determines when it runs, including CRON schedules, webhooks, and data changes.",
  },
] as const;
