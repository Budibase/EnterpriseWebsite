import type { PlatformLandingContent } from "./landingPageTypes";

// Evidence checked against the linked Budibase pages and Iron Bank repository
// on 15 October 2026. ISO 27001 concerns the ISMS; Iron Bank is image availability.
export const securityLandingPage = {
  title: "Security and compliance — Budibase",
  metaDescription:
    "Build with sensitive data confidently using built-in security controls, encryption and independently audited practices. Deploy in air-gapped environments and support your security and data protection reviews.",
  proof: "none",
  hero: {
    headline: "Protect the processes your business relies on",
    subtitle:
      "Build apps, agents and automations with security controls and independent assurance. Keep sensitive operations in your environment, including fully isolated, air-gapped deployments.",
    imageAlt:
      "Apps, agents and automations within a controlled environment with access controls, encryption and audit logging",
  },
  features: [
    {
      headline: "Build with sensitive data confidently",
      body: "Protect your apps, agents, and automations with built-in security controls, encryption, and independently audited practices.",
      bullets: [],
    },
    {
      headline: "Run in fully isolated environments",
      body: "Deploy Budibase in air-gapped environments to keep sensitive operations disconnected from the public internet.",
      bullets: [],
    },
  ],
  cardCluster: {
    title: "Evidence for your security review",
    description:
      "Explore our certification, container images and data protection commitments.",
    columns: 3,
    responsiveLayout: "stack",
    cards: [
      {
        title: "Simplify security reviews with ISO 27001",
        description:
          "Build on a platform backed by ISO 27001-certified information security management.",
        link: "/blog/updates/iso27001/",
      },
      {
        title: "Support defense deployment requirements",
        description:
          "Access Budibase container images through Iron Bank for use in controlled environments.",
        link: "https://repo1.dso.mil/dsop/budibase/budibase/apps",
      },
      {
        title: "Support your GDPR obligations",
        description:
          "Self-host to keep personal data within your infrastructure. Review the terms for self-hosted deployments.",
        link: "/terms-self-host/",
      },
    ],
  },
} as const satisfies PlatformLandingContent;

export const securityFaqs = [
  {
    question: "What security controls does Budibase provide?",
    answer:
      "Budibase provides role-based access, authentication, audit logging and environment variables for credentials. Budibase Cloud encrypts data in transit with TLS 1.3 and at rest with AES-256. Security practices include independent penetration testing and audits.",
  },
  {
    question: "Can Budibase run without public internet access?",
    answer:
      "Yes. Deploy Budibase in isolated, air-gapped environments to keep sensitive operations disconnected from the public internet.",
  },
  {
    question: "What does the ISO 27001 certification cover?",
    answer:
      "Budibase's information security management system is independently audited and ISO 27001 certified. Follow the certification details above to learn more.",
  },
  {
    question: "Where can I find Budibase images in Iron Bank?",
    answer:
      "The Iron Bank repository linked above provides access to Budibase container images for controlled environments.",
  },
  {
    question: "How does Budibase support our GDPR obligations?",
    answer:
      "Self-hosting lets you keep personal data within infrastructure you manage. The self-hosted terms linked above apply to those deployments. Budibase Cloud has separate terms, available in the footer, including restrictions on processing sensitive information. Review the terms for your chosen deployment as part of your data protection assessment.",
  },
] as const;
