import type { SolutionLandingContent } from "./solutionLandingPages";
import OperationsCenterDemo from "../components/demos/OperationsCenterDemo.astro";
import HumanApprovalsDemo from "../components/demos/HumanApprovalsDemo.astro";
import AgentInstructions from "../assets/images/platform/AgentInstructions.png?url";
import AgentPreview from "../assets/images/platform/AgentPreview.png?url";
import KnowledgeTable from "../assets/images/AgentsSpace/InternalKnowledgeAssistant/notion-pages-table.svg?url";

const requestMedia = {
  demo: OperationsCenterDemo,
  imageAlt:
    "Example operations center showing requests in review, in progress, and complete",
};
const approvalMedia = {
  demo: HumanApprovalsDemo,
  imageAlt: "Example access request presented for a human approval decision",
};
const instructionMedia = {
  image: AgentInstructions,
  imageAlt:
    "IT help desk agent instructions with knowledge retrieval and approval before creating a Jira issue",
};
const agentMedia = {
  image: AgentPreview,
  imageAlt:
    "IT help desk agent instructions alongside a chat preview using a Jira search tool",
};
const tableMedia = {
  image: KnowledgeTable,
  imageAlt:
    "Budibase table containing Notion page names and identifiers for knowledge retrieval",
};

export const useCaseLandingPages = {
  "requests-and-approvals": {
    title: "Requests and approvals",
    metaDescription:
      "Build request intake, routing, and approval workflows with Budibase. Give teams a clear path to a decision while IT retains control.",
    proofStyle: "none",
    hero: {
      badgeLabel: "Requests and approvals",
      badgeIcon: "EnvelopeOpen",
      headline: "Move requests from intake to decision",
      subtitle:
        "Give teams a clear way to request what they need. IT builds the forms, routing, and approval steps around your systems, so work moves forward with the right oversight.",
      logosHeading: "",
      media: requestMedia,
    },
    features: [
      {
        headline: "Capture and route requests",
        body: "Replace scattered messages and inboxes with an intake process that captures the context each team needs to act.",
        bullets: [
          {
            icon: "AppWindow",
            text: "Build forms and apps for access, purchasing, and service requests.",
          },
          {
            icon: "GitFork",
            text: "Route requests using the rules and responsibilities of your organisation.",
          },
          {
            icon: "EnvelopeOpen",
            text: "Give requesters a place to follow progress and respond when more information is needed.",
          },
        ],
        variant: "light",
        media: requestMedia,
      },
      {
        headline: "Apply approvals and coordinate next steps",
        body: "Bring the request and supporting context to the right person before an automation or agent takes the next action.",
        bullets: [
          {
            icon: "UserSwitch",
            text: "Send decisions to the responsible approver with the request details.",
          },
          {
            icon: "ShieldCheck",
            text: "Require human approval where your process calls for oversight.",
          },
          {
            icon: "Lightning",
            text: "Use automations to send notifications and update connected systems after a decision.",
          },
        ],
        variant: "white",
        media: approvalMedia,
      },
    ],
    examples: [
      {
        title: "Access requests",
        description:
          "Capture access needs and route them through a controlled approval process.",
        link: "/process/access-request/",
      },
      {
        title: "Purchase orders",
        description:
          "Gather purchasing details and coordinate review before the next step.",
        link: "/process/purchase-order-request/",
      },
      {
        title: "Invoice approvals",
        description:
          "Route invoices to the right reviewers and follow up on decisions.",
        link: "/process/invoice-approval-workflow/",
      },
    ],
  },
  "case-management": {
    title: "Case management",
    metaDescription:
      "Build case management software around your teams and systems with Budibase. Capture cases, assign ownership, and coordinate resolution under IT governance.",
    proofStyle: "none",
    hero: {
      badgeLabel: "Case management",
      badgeIcon: "FolderOpen",
      headline: "Keep every case moving toward resolution",
      subtitle:
        "Bring case details, owners, and follow-up into one connected workflow. IT gives teams purpose-built tools to manage exceptions, incidents, and service work within your existing controls.",
      logosHeading: "",
      media: agentMedia,
    },
    features: [
      {
        headline: "Capture cases and assign ownership",
        body: "Build a consistent record of each case so the responsible team has the context it needs to investigate and respond.",
        bullets: [
          {
            icon: "AppWindow",
            text: "Create forms for incidents, disputes, and service issues.",
          },
          {
            icon: "Table",
            text: "Keep case details and status in structured records connected to your systems.",
          },
          {
            icon: "UserSwitch",
            text: "Route each case to an owner using your triage rules.",
          },
        ],
        variant: "light",
        media: requestMedia,
      },
      {
        headline: "Coordinate updates and follow-up",
        body: "Connect the work around a case without asking teams to piece together messages, records, and decisions by hand.",
        bullets: [
          {
            icon: "Lightning",
            text: "Send updates and reminders through configurable automations.",
          },
          {
            icon: "Robot",
            text: "Use agents to retrieve context and support triage within the tools IT permits.",
          },
          {
            icon: "ShieldCheck",
            text: "Escalate exceptions to people and apply access controls to case information.",
          },
        ],
        variant: "white",
        media: agentMedia,
      },
    ],
    examples: [
      {
        title: "Cybersecurity incident reporting",
        description:
          "Capture incident details and route urgent reports for human review.",
        link: "/process/cybersecurity-incident-reporting/",
      },
      {
        title: "Sales credit disputes",
        description:
          "Collect dispute context and coordinate investigation and resolution.",
        link: "/process/sales-credit-dispute-resolution/",
      },
      {
        title: "Ticket follow-ups",
        description:
          "Retrieve ticket context and help teams coordinate the next response.",
        link: "/process/ticket-follow-up-agent/",
      },
    ],
  },
  "data-collection-processes": {
    title: "Data collection and review",
    metaDescription:
      "Build data collection and review workflows with Budibase forms, apps, and automations. Connect submissions to existing systems under IT control.",
    proofStyle: "none",
    hero: {
      badgeLabel: "Data collection and review",
      badgeIcon: "Table",
      headline: "Turn data collection into connected work",
      subtitle:
        "Give teams a consistent way to capture information and put it to work. IT connects forms, structured records, and follow-up to the systems your organisation already uses.",
      logosHeading: "",
      media: tableMedia,
    },
    features: [
      {
        headline: "Capture consistent information",
        body: "Build an intake process around the information your operation needs, with clear fields and a structured destination for every submission.",
        bullets: [
          {
            icon: "AppWindow",
            text: "Create forms and apps for onboarding, incident reports, and operational registers.",
          },
          {
            icon: "CheckCircle",
            text: "Use required fields and validation to improve the consistency of incoming data.",
          },
          {
            icon: "Table",
            text: "Store records in Budibase tables or connect to your existing data sources.",
          },
        ],
        variant: "light",
        media: tableMedia,
      },
      {
        headline: "Connect submissions to operational processes",
        body: "Make a submission the start of a workflow, with review, notifications, and updates configured around your requirements.",
        bullets: [
          {
            icon: "Lightning",
            text: "Trigger automations when records are created or updated.",
          },
          {
            icon: "UserSwitch",
            text: "Route submissions to people when review or approval is required.",
          },
          {
            icon: "PlugsConnected",
            text: "Use APIs and connections to pass approved information into the systems that need it.",
          },
        ],
        variant: "white",
        media: approvalMedia,
      },
    ],
    examples: [
      {
        title: "Vendor onboarding",
        description:
          "Collect supplier information and route onboarding details for review.",
        link: "/process/vendor-onboarding-review/",
      },
      {
        title: "Cybersecurity risk register",
        description:
          "Capture risk information in structured records for assessment and follow-up.",
        link: "/process/cybersecurity-risk-register/",
      },
      {
        title: "Incident reporting",
        description:
          "Capture consistent incident details and start the response process.",
        link: "/process/cybersecurity-incident-reporting/",
      },
    ],
  },
  "knowledge-assistants": {
    title: "Knowledge assistants",
    metaDescription:
      "Build knowledge assistants grounded in your organisation's sources with Budibase. Help teams find answers while IT controls tools, access, and escalation.",
    proofStyle: "none",
    hero: {
      badgeLabel: "Knowledge assistants",
      badgeIcon: "BookOpen",
      headline: "Give teams answers grounded in your knowledge",
      subtitle:
        "Connect agents to the sources your organisation relies on. IT defines the retrieval tools, instructions, and access so teams can ask questions and get useful context in their daily work.",
      logosHeading: "",
      media: instructionMedia,
    },
    features: [
      {
        headline: "Retrieve information from connected sources",
        body: "Bring operational guidance into an assistant that retrieves the information relevant to a question rather than relying on general answers.",
        bullets: [
          {
            icon: "PlugsConnected",
            text: "Connect knowledge sources through APIs and retrieval tools.",
          },
          {
            icon: "BookOpen",
            text: "Write instructions that require answers to use retrieved source material.",
          },
          {
            icon: "ChatCircle",
            text: "Give teams access to agents through your chosen apps and supported chat channels.",
          },
        ],
        variant: "light",
        media: agentMedia,
      },
      {
        headline: "Control access and handle unanswered questions",
        body: "Define what an assistant can retrieve and how it should respond when the available sources do not contain an answer.",
        bullets: [
          {
            icon: "ShieldCheck",
            text: "Configure the tools, credentials, and platform permissions available to each agent.",
          },
          {
            icon: "BookOpen",
            text: "Instruct agents to cite sources and acknowledge when an answer cannot be found.",
          },
          {
            icon: "UserSwitch",
            text: "Route uncertain questions to people and require approval for consequential actions.",
          },
        ],
        variant: "white",
        media: instructionMedia,
      },
    ],
    examples: [
      {
        title: "Internal knowledge assistant",
        description:
          "Retrieve documented answers from GitHub and Notion with links to the sources.",
        link: "/process/internal-knowledge-assistant/",
      },
      {
        title: "Password reset agent",
        description:
          "Use policy context to support password reset requests and escalation.",
        link: "/process/password-reset-agent/",
      },
      {
        title: "Ticket follow-up agent",
        description:
          "Retrieve ticket context to support useful responses and next steps.",
        link: "/process/ticket-follow-up-agent/",
      },
    ],
  },
} as const satisfies Record<string, SolutionLandingContent>;
