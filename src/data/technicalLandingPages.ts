export type TechnicalMediaKey = "primary" | "secondary";
export type TechnicalEvidenceVisual =
  | "api-request"
  | "controls"
  | "deployment"
  | "image"
  | "observability"
  | "workflow";

export interface TechnicalNarrativeBlock {
  type: "narrative";
  headline: string;
  paragraphs: readonly string[];
}

interface TechnicalEvidenceBlockBase {
  type: "evidence";
  alt: string;
  caption: string;
}

export interface TechnicalImageEvidenceBlock extends TechnicalEvidenceBlockBase {
  visual: "image";
  media: TechnicalMediaKey;
}

export interface TechnicalSystemEvidenceBlock extends TechnicalEvidenceBlockBase {
  visual: Exclude<TechnicalEvidenceVisual, "image">;
  media?: never;
}

export type TechnicalEvidenceBlock =
  TechnicalImageEvidenceBlock | TechnicalSystemEvidenceBlock;

export interface TechnicalProofBlock {
  type: "proof";
  statement: string;
  attribution: string;
  role?: string;
  action?: {
    label: string;
    href: string;
  };
}

export interface TechnicalDetailBlock {
  type: "detail";
  headline: string;
  body: string;
  tone?: "default" | "surface";
  bullets?: readonly {
    icon: string;
    text: string;
  }[];
  action?: {
    label: string;
    href: string;
  };
}

export type TechnicalStoryBlock =
  | TechnicalNarrativeBlock
  | TechnicalEvidenceBlock
  | TechnicalProofBlock
  | TechnicalDetailBlock;

export interface TechnicalLandingContent {
  title: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    icon: string;
    headline: string;
    subtitle: string;
  };
  blocks: readonly TechnicalStoryBlock[];
}

export const technicalLandingPages = {
  apis: {
    title: "API Explorer",
    metaDescription:
      "Explore, test, and reuse API calls so Budibase apps, agents, and automations can securely act across operational systems.",
    hero: {
      eyebrow: "API Explorer",
      icon: "Code",
      headline: "Connect every operational system",
      subtitle:
        "Explore, test, and reuse API calls so apps, agents, and automations can take controlled action across your stack.",
    },
    blocks: [
      {
        type: "narrative",
        headline: "Operational work rarely lives in one system",
        paragraphs: [
          "Critical workflows depend on data and actions spread across databases, internal services, and third-party APIs. Each connection needs to behave predictably before it becomes part of everyday operations.",
          "API Explorer gives technical teams one place to configure requests, inspect responses, and make tested actions available across Budibase.",
        ],
      },
      {
        type: "evidence",
        visual: "api-request",
        alt: "REST API request configured in Budibase API Explorer",
        caption:
          "Configure request methods, authentication, parameters, and response handling before an API action enters an operational workflow.",
      },
      {
        type: "detail",
        headline: "Explore and test APIs in one place",
        body: "Configure external services through one controlled explorer before using them in operational workflows.",
        bullets: [
          {
            icon: "Code",
            text: "Build and execute REST API requests from a unified interface.",
          },
          {
            icon: "Keyhole",
            text: "Keep authentication configuration with the connection that uses it.",
          },
          {
            icon: "GitFork",
            text: "Map request inputs and response outputs into structured data.",
          },
        ],
      },
      {
        type: "evidence",
        visual: "workflow",
        alt: "API actions connected to Budibase operational workflows",
        caption:
          "Turn tested requests into reusable actions for apps, automations, and agents.",
      },
      {
        type: "detail",
        tone: "surface",
        headline: "Reuse reliable actions across the platform",
        body: "Define an API action once, then use it wherever operational work needs the same controlled connection.",
        bullets: [
          {
            icon: "Path",
            text: "Reuse API actions across apps, automations, and agents.",
          },
          {
            icon: "Lightning",
            text: "Use webhooks to start connected operational workflows.",
          },
          {
            icon: "Gauge",
            text: "Inspect execution history when connected work needs attention.",
          },
        ],
      },
      {
        type: "detail",
        headline: "Evaluate the complete connection",
        body: "Review authentication, input mapping, output structure, reuse, and execution visibility together. The result is a connection that is easier to understand before it becomes part of critical work.",
      },
    ],
  },
  knowledge: {
    title: "Knowledge",
    metaDescription:
      "Ground Budibase agents in trusted operational knowledge with controlled retrieval and context aligned to each agent's role.",
    hero: {
      eyebrow: "Knowledge",
      icon: "BookOpen",
      headline: "Give every agent the right context",
      subtitle:
        "Connect trusted knowledge to agents so they can answer questions and support operational work with relevant context.",
    },
    blocks: [
      {
        type: "narrative",
        headline: "Useful answers start with controlled context",
        paragraphs: [
          "Operational knowledge is distributed across guidance, records, and connected systems. Agents need access to the right context for their responsibility without treating every source as equally relevant.",
          "Budibase lets teams connect focused knowledge to the agents that need it and retrieve relevant context as work arrives.",
        ],
      },
      {
        type: "evidence",
        visual: "image",
        media: "primary",
        alt: "Budibase agent preview using connected operational knowledge",
        caption:
          "Preview how an agent responds with the knowledge and instructions configured for its role.",
      },
      {
        type: "detail",
        headline: "Connect the knowledge your teams rely on",
        body: "Bring operational guidance and business context into the same controlled system as the agents that use it.",
        bullets: [
          {
            icon: "Cube",
            text: "Attach focused knowledge sources to the agents responsible for each process.",
          },
          {
            icon: "Path",
            text: "Retrieve relevant context as questions and requests arrive.",
          },
          {
            icon: "UserSwitch",
            text: "Align each agent's knowledge with its operational responsibility.",
          },
        ],
      },
      {
        type: "evidence",
        visual: "image",
        media: "secondary",
        alt: "Instructions defining controlled Budibase agent behaviour",
        caption:
          "Combine retrieved context with explicit instructions that keep an agent focused on its operational job.",
      },
      {
        type: "detail",
        tone: "surface",
        headline: "Turn questions into accountable next steps",
        body: "Help people find answers quickly while keeping agent behaviour aligned with approved operational context.",
        bullets: [
          {
            icon: "ChatCircle",
            text: "Answer everyday questions in the channels where work happens.",
          },
          {
            icon: "Keyhole",
            text: "Keep access to knowledge aligned with operational controls.",
          },
          {
            icon: "CheckCircle",
            text: "Use retrieved context to guide consistent actions and responses.",
          },
        ],
      },
      {
        type: "detail",
        headline: "Evaluate sources, scope, and behaviour together",
        body: "A dependable knowledge workflow connects the right sources, retrieves useful context, and keeps the agent's instructions visible. Test the complete response before putting it into operational use.",
      },
    ],
  },
  "self-host": {
    title: "Self-hosting",
    metaDescription:
      "Deploy Budibase on your own infrastructure with flexible self-hosting options for controlled and regulated environments.",
    hero: {
      eyebrow: "Self-hosting",
      icon: "CloudCheck",
      headline: "Deploy Budibase on your terms",
      subtitle:
        "Run Budibase in the environment you control, close to the systems and data that support critical operations.",
    },
    blocks: [
      {
        type: "narrative",
        headline: "Deployment is part of operational control",
        paragraphs: [
          "Regulated and security-conscious organisations need software to fit their infrastructure, network boundaries, and operating practices. Deployment cannot be separated from ownership of data and critical systems.",
          "Self-hosting gives platform teams control over where Budibase runs and how it connects to the services their operations depend on.",
        ],
      },
      {
        type: "evidence",
        visual: "deployment",
        alt: "Budibase supporting controlled enterprise operations",
        caption:
          "Place operational apps, automations, agents, and their connections inside the environment selected by your organisation.",
      },
      {
        type: "detail",
        headline: "Run in the environment you control",
        body: "Deploy Budibase across the infrastructure and network boundaries that fit your organisation.",
        bullets: [
          {
            icon: "Cube",
            text: "Use established container and orchestration workflows.",
          },
          {
            icon: "CloudCheck",
            text: "Run on-premise, in a private cloud, or in public cloud infrastructure.",
          },
          {
            icon: "ShieldCheck",
            text: "Support isolated operational environments where required.",
          },
        ],
      },
      {
        type: "evidence",
        visual: "observability",
        alt: "Budibase platform connected within a controlled environment",
        caption:
          "Keep apps, data, automations, agents, and connected services within the architecture you operate.",
      },
      {
        type: "detail",
        tone: "surface",
        headline: "Keep critical systems close",
        body: "Connect operational data, models, and services without moving them outside your chosen environment.",
        bullets: [
          {
            icon: "Path",
            text: "Reach internal systems through your existing network controls.",
          },
          {
            icon: "Keyhole",
            text: "Retain control over infrastructure, credentials, and operational data.",
          },
          {
            icon: "Wrench",
            text: "Manage deployment and updates through established practices.",
          },
        ],
      },
      {
        type: "detail",
        headline: "Evaluate ownership across the full lifecycle",
        body: "Choose a deployment model by considering network access, data location, operations, updates, and the teams responsible for the environment—not hosting location alone.",
      },
    ],
  },
  "admin-security": {
    title: "Admin and Security",
    metaDescription:
      "Manage identity, access, governance, and audit controls for secure enterprise operations with Budibase.",
    hero: {
      eyebrow: "Admin and Security",
      icon: "ShieldCheck",
      headline: "Control operations with confidence",
      subtitle:
        "Give administrators identity, access, and governance controls without slowing the teams responsible for operational work.",
    },
    blocks: [
      {
        type: "narrative",
        headline: "Control must follow the operation",
        paragraphs: [
          "Operational software brings people, private data, automated actions, and connected systems together. Administration has to cover that complete system rather than sit apart from it.",
          "Budibase gives administrators a central place to manage access and keep operational activity visible as the platform grows.",
        ],
      },
      {
        type: "evidence",
        visual: "controls",
        alt: "Governed Budibase workflow supporting critical operations",
        caption:
          "Apply identity and access decisions to the apps, data, agents, and workflows people use to complete operational work.",
      },
      {
        type: "detail",
        headline: "Centralise access and administration",
        body: "Manage how people enter the platform, what they can use, and which operational resources they can access.",
        bullets: [
          {
            icon: "UserSwitch",
            text: "Organise users and groups around operational responsibilities.",
          },
          {
            icon: "Keyhole",
            text: "Apply role-based access controls across apps and data.",
          },
          {
            icon: "ShieldCheck",
            text: "Connect enterprise identity and sign-on processes.",
          },
        ],
      },
      {
        type: "evidence",
        visual: "observability",
        alt: "Connected systems governed through the Budibase platform",
        caption:
          "Keep control visible as more teams, resources, and connected systems become part of an operation.",
      },
      {
        type: "detail",
        tone: "surface",
        headline: "Build governance into everyday work",
        body: "Keep operational activity visible and controlled as more teams, workflows, and systems join the platform.",
        bullets: [
          {
            icon: "Path",
            text: "Maintain audit trails for user and system activity.",
          },
          {
            icon: "CheckCircle",
            text: "Standardise controls across critical operational workflows.",
          },
          {
            icon: "Gauge",
            text: "Scale administration without losing operational visibility.",
          },
        ],
      },
      {
        type: "detail",
        headline: "Evaluate access in operational context",
        body: "Review identity, roles, resource access, and activity history together. Controls are most useful when administrators can understand both who has access and how that access supports the operation.",
      },
    ],
  },
} as const satisfies Record<string, TechnicalLandingContent>;

export type TechnicalLandingSlug = keyof typeof technicalLandingPages;

export const technicalLandingSlugs = Object.keys(
  technicalLandingPages,
) as TechnicalLandingSlug[];
