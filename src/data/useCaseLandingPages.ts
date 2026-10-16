import { homepageFeatureMedia } from "./homepageFeatureMedia";
import type { SolutionLandingContent } from "./solutionLandingPages";
import OperationsCenterDemo from "../components/demos/OperationsCenterDemo.astro";
import HumanApprovalsDemo from "../components/demos/HumanApprovalsDemo.astro";
import PurchaseApprovalsDemo from "../components/demos/PurchaseApprovalsDemo.astro";
import OnePlatformData from "../components/OnePlatformData.astro";
import IncidentManagementDemo from "../pages/_components/landing-page/IncidentManagementDemo.astro";
import FactoryInspectionsDemo from "../pages/_components/landing-page/FactoryInspectionsDemo.astro";
import KnowledgeAssistantDemo from "../pages/_components/landing-page/KnowledgeAssistantDemo.astro";
import ApprovalVisual from "../pages/product/_components/ApprovalVisual.astro";
import PermissionsVisual from "../pages/product/_components/PermissionsVisual.astro";
import KnowledgeVisual from "../pages/product/_components/KnowledgeVisual.astro";
import AgentInstructions from "../assets/images/platform/AgentInstructions.png?url";
import AgentPreview from "../assets/images/platform/AgentPreview.png?url";

export const useCaseLandingPages = {
  "requests-and-approvals": {
    title: "Requests and approvals",
    metaDescription:
      "Build request intake, routing, and approval workflows with Budibase. Give teams a clear path to a decision while IT retains control.",
    heroLayout: "stacked",
    hero: {
      headline: "Move requests from intake to decision",
      subtitle:
        "Give teams a clear way to request what they need. IT builds the forms, routing, and approval steps around your systems, so work moves forward with the right oversight.",
      imageAlt:
        "Purchase approval moving from a request to a decision in Microsoft Teams",
      media: {
        demo: PurchaseApprovalsDemo,
        imageAlt:
          "Purchase approval moving from a request to a decision in Microsoft Teams",
      },
    },
    features: [
      {
        headline: "Capture and route requests",
        body: "Replace scattered messages and inboxes with an intake process that captures the context each team needs to act. Build forms for access, purchasing, and service requests, then route work using your organisation’s rules.",
        bullets: [],
        media: {
          demo: OperationsCenterDemo,
          imageAlt: "Requests in review, in progress and complete",
        },
      },
      {
        headline: "Apply approvals and coordinate next steps",
        body: "Bring the request and supporting context to the right person before an automation or agent takes the next action. Notify approvers and use automations to update connected systems after a decision.",
        bullets: [],
        media: {
          demo: HumanApprovalsDemo,
          imageAlt: "Access request presented for human approval",
        },
      },
    ],
    cardCluster: {
      title: "Keep every request moving",
      description:
        "Set the rules, reach the right people, and make progress visible.",
      cards: [
        {
          title: "Approval policies",
          description:
            "Set who approves, where they approve, and how long they have to decide.",
          mediaDemo: ApprovalVisual,
          mediaDemoProps: {
            variant: "policy",
          },
        },
        {
          title: "Slack and Teams notifications",
          description:
            "Bring approval notifications to the channels your teams already use.",
          mediaDemo: ApprovalVisual,
          mediaDemoProps: {
            variant: "notifications",
          },
        },
        {
          title: "Request tracking",
          description:
            "Give requesters a clear view of work in review, in progress, and complete.",
          mediaDemo: OperationsCenterDemo,
          mediaDemoProps: {
            compact: true,
          },
        },
      ],
    },
    marketplace: [
      {
        type: "template",
        id: "access-request",
      },
      {
        type: "template",
        id: "purchase-order-request",
      },
      {
        type: "template",
        id: "invoice-approval-workflow",
      },
      {
        type: "partner",
        id: "teiva-systems",
      },
    ],
    faqs: [
      {
        question: "What request workflows can I build?",
        answer:
          "Build forms, routing, and approval steps for access, purchasing, invoices, and service requests. Adapt each workflow to your organisation’s responsibilities.",
      },
      {
        question: "Can requests update our existing systems?",
        answer:
          "Yes. Connect databases and REST APIs, then use automations to send notifications and update systems after a decision.",
      },
      {
        question: "How do I control who can approve?",
        answer:
          "Set approvers and approval conditions, then apply roles and permissions to the apps, data, and actions involved.",
      },
      {
        question: "Where can we run these workflows?",
        answer:
          "Use Budibase Cloud or self-host on your own infrastructure to fit your data and operational requirements.",
      },
      {
        question: "How do I start with a template?",
        answer:
          "Choose an access request, purchase order, or invoice approval template in the marketplace. Configure your connections, approvers, and rules before publishing.",
      },
    ],
  },
  "case-management": {
    title: "Case management",
    metaDescription:
      "Build case management software around your teams and systems with Budibase. Capture cases, assign ownership, and coordinate resolution under IT governance.",
    heroLayout: "stacked",
    hero: {
      headline: "Keep every case moving toward resolution",
      subtitle:
        "Bring case details, owners, and follow-up into one connected workflow. IT gives teams purpose-built tools to manage exceptions, incidents, and service work within your existing controls.",
      imageAlt:
        "Incident management showing a reported equipment issue and coordinated follow-up",
      media: {
        demo: IncidentManagementDemo,
        imageAlt:
          "Incident management showing a reported equipment issue and coordinated follow-up",
      },
    },
    features: [
      {
        headline: "Capture cases and assign ownership",
        body: "Build a consistent record of each case so the responsible team has the context it needs to investigate and respond. Capture structured case details, status, and ownership around your triage rules.",
        bullets: [],
        media: {
          demo: OperationsCenterDemo,
          imageAlt: "Shared case records and status",
        },
      },
      {
        headline: "Coordinate updates and follow-up",
        body: "Connect the work around a case without asking teams to piece together messages, records, and decisions by hand. Use automations for reminders and agents to retrieve context within the tools IT permits.",
        bullets: [],
        media: {
          image: AgentPreview,
          imageAlt:
            "IT help desk agent instructions alongside a chat preview using a Jira search tool",
        },
      },
    ],
    cardCluster: {
      title: "Give every case a clear next step",
      description: "Keep ownership, follow-up, and escalation connected.",
      cards: [
        {
          title: "Clear ownership",
          description:
            "Route cases to the responsible team and keep details and status in a shared record.",
          mediaDemo: PermissionsVisual,
          mediaDemoProps: {
            variant: "groups",
          },
        },
        {
          title: "Automated follow-up",
          description:
            "Send updates and reminders when a case changes or needs attention.",
          mediaScene: homepageFeatureMedia.automations.mediaScene,
        },
        {
          title: "Controlled escalation",
          description:
            "Bring exceptions to people with the context they need to decide.",
          mediaDemo: ApprovalVisual,
          mediaDemoProps: {
            variant: "conditions",
          },
        },
      ],
    },
    marketplace: [
      {
        type: "template",
        id: "cybersecurity-incident-reporting",
      },
      {
        type: "template",
        id: "sales-credit-dispute-resolution",
      },
      {
        type: "template",
        id: "ticket-follow-up-agent",
      },
      {
        type: "partner",
        id: "teiva-systems",
      },
    ],
    faqs: [
      {
        question: "What kinds of cases can we manage?",
        answer:
          "Build workflows for incidents, disputes, and service issues. Capture a structured record, assign an owner, and follow the case through resolution.",
      },
      {
        question: "Can we connect case data to other systems?",
        answer:
          "Yes. Connect your databases and APIs so teams can retrieve context and update the systems they already use.",
      },
      {
        question: "How are sensitive cases and escalations handled?",
        answer:
          "Use roles to limit access to case information. Configure escalation rules and human approval where a decision needs oversight.",
      },
      {
        question: "Can we self-host our case management tools?",
        answer:
          "Yes. Run on your own infrastructure or use Budibase Cloud, according to your organisation’s requirements.",
      },
      {
        question: "Which templates can we start with?",
        answer:
          "Explore cybersecurity incident reporting, sales credit dispute resolution, and ticket follow-up templates. Adapt the records, integrations, and routing to your process.",
      },
    ],
  },
  "data-collection-processes": {
    title: "Data collection and review",
    metaDescription:
      "Build data collection and review workflows with Budibase forms, apps, and automations. Connect submissions to existing systems under IT control.",
    heroLayout: "stacked",
    hero: {
      headline: "Turn data collection into connected work",
      subtitle:
        "Give teams a consistent way to capture information and put it to work. IT connects forms, structured records, and follow-up to the systems your organisation already uses.",
      imageAlt:
        "Factory inspection records connected to a mobile inspection form",
      media: {
        demo: FactoryInspectionsDemo,
        imageAlt:
          "Factory inspection records connected to a mobile inspection form",
      },
    },
    features: [
      {
        headline: "Capture consistent information",
        body: "Build an intake process around the information your operation needs, with clear fields and a structured destination for every submission. Store records in BudibaseDB or connect the databases your team already uses.",
        bullets: [],
        media: {
          demo: OnePlatformData,
          imageAlt: "Structured operational records in a Budibase table",
          demoProps: {
            presentation: "framed",
          },
        },
      },
      {
        headline: "Connect submissions to operational processes",
        body: "Make a submission the start of a workflow, with review, notifications, and updates configured around your requirements. Trigger automations when records change and pass approved information into connected systems.",
        bullets: [],
        media: {
          demo: HumanApprovalsDemo,
          imageAlt: "Submission presented for human review",
        },
      },
    ],
    cardCluster: {
      title: "Make every submission useful",
      description:
        "Capture consistent information and connect it to accountable follow-up.",
      cards: [
        {
          title: "Validated submissions",
          description:
            "Use required fields and validation to capture the information each process needs.",
          mediaDemo: OnePlatformData,
          mediaDemoProps: {
            presentation: "framed",
          },
        },
        {
          title: "Connected records",
          description:
            "Store records in BudibaseDB or pass information to existing databases and APIs.",
          mediaBadges: homepageFeatureMedia.apis.mediaBadges,
        },
        {
          title: "Human review",
          description:
            "Route submissions to the right person before the next action takes place.",
          mediaDemo: ApprovalVisual,
          mediaDemoProps: {
            variant: "overview",
          },
        },
      ],
    },
    marketplace: [
      {
        type: "template",
        id: "vendor-onboarding-review",
      },
      {
        type: "template",
        id: "cybersecurity-risk-register",
      },
      {
        type: "template",
        id: "cybersecurity-incident-reporting",
      },
      {
        type: "partner",
        id: "teiva-systems",
      },
    ],
    faqs: [
      {
        question: "What data collection workflows can I build?",
        answer:
          "Create forms and apps for inspections, onboarding, incident reports, and operational registers. Use structured fields and validation to keep submissions consistent.",
      },
      {
        question: "Where does collected data go?",
        answer:
          "Use BudibaseDB or connect an existing database. Automations and APIs can pass approved information to other systems.",
      },
      {
        question: "Can submissions require review?",
        answer:
          "Yes. Route submissions to reviewers or approvers and use roles to control access to the records and actions involved.",
      },
      {
        question: "Can we keep collected data on our infrastructure?",
        answer:
          "Yes. Self-host Budibase in your own environment or use Budibase Cloud, according to your data requirements.",
      },
      {
        question: "How can templates help us get started?",
        answer:
          "Start with vendor onboarding, a cybersecurity risk register, or incident reporting. Adapt the fields, connections, and review steps before publishing.",
      },
    ],
  },
  "knowledge-assistants": {
    title: "Knowledge assistants",
    metaDescription:
      "Build knowledge assistants grounded in your organisation's sources with Budibase. Help teams find answers while IT controls tools, access, and escalation.",
    heroLayout: "stacked",
    hero: {
      headline: "Give teams answers grounded in your knowledge",
      subtitle:
        "Connect agents to the sources your organisation relies on. IT defines the retrieval tools, instructions, and access so teams can ask questions and get useful context in their daily work.",
      imageAlt:
        "Knowledge assistant answering a Teams question with SharePoint and PDF source references",
      media: {
        demo: KnowledgeAssistantDemo,
        imageAlt:
          "Knowledge assistant answering a Teams question with SharePoint and PDF source references",
      },
    },
    features: [
      {
        headline: "Retrieve information from connected sources",
        body: "Bring operational guidance into an assistant that retrieves the information relevant to a question rather than relying on general answers. Connect knowledge through SharePoint, PDFs, and configured retrieval tools.",
        bullets: [],
        media: {
          demo: KnowledgeVisual,
          imageAlt: "Knowledge assistant using connected source material",
          demoProps: {
            variant: "overview",
          },
        },
      },
      {
        headline: "Control access and handle unanswered questions",
        body: "Define what an assistant can retrieve and how it should respond when the available sources do not contain an answer. Set the tools and permissions available to the agent, and route unanswered questions to people.",
        bullets: [],
        media: {
          image: AgentInstructions,
          imageAlt:
            "IT help desk agent instructions with knowledge retrieval and approval rules",
        },
      },
    ],
    cardCluster: {
      title: "Useful answers. Clear boundaries.",
      description:
        "Connect company knowledge while IT controls the sources and actions available.",
      cards: [
        {
          title: "Company knowledge",
          description:
            "Connect SharePoint and upload PDFs so agents can answer using your team’s content.",
          mediaDemo: KnowledgeVisual,
          mediaDemoProps: {
            variant: "sharepoint",
          },
        },
        {
          title: "Source references",
          description:
            "Help people verify answers and explore the material behind them.",
          mediaDemo: KnowledgeVisual,
          mediaDemoProps: {
            variant: "sources",
          },
        },
        {
          title: "Controlled access",
          description:
            "Set which users, tools, and resources an assistant can work with.",
          mediaDemo: PermissionsVisual,
          mediaDemoProps: {
            variant: "access",
          },
        },
      ],
    },
    marketplace: [
      {
        type: "template",
        id: "internal-knowledge-assistant",
      },
      {
        type: "template",
        id: "password-reset-agent",
      },
      {
        type: "template",
        id: "ticket-follow-up-agent",
      },
      {
        type: "partner",
        id: "teiva-systems",
      },
    ],
    faqs: [
      {
        question: "How does a knowledge assistant answer questions?",
        answer:
          "An agent retrieves relevant information from the sources IT connects and uses it to answer a question. Configure its instructions to use source material and acknowledge gaps.",
      },
      {
        question: "Which knowledge sources can we use?",
        answer:
          "Connect SharePoint, upload PDFs, or configure retrieval tools using APIs. Knowledge works out of the box with Budibase AI.",
      },
      {
        question: "How do we control access and unanswered questions?",
        answer:
          "Configure agent tools, credentials, and platform permissions. Instruct the assistant to cite sources and route unanswered questions to people; require approval for consequential actions.",
      },
      {
        question: "Where can we deploy our assistant?",
        answer:
          "Use Budibase Cloud or self-host. Connect the assistant to supported chat channels such as Microsoft Teams and Slack.",
      },
      {
        question: "Is there a template to start from?",
        answer:
          "Use the internal knowledge assistant template as a starting point. Password reset and ticket follow-up templates show related workflows; adapt their sources, tools, and instructions to your requirements.",
      },
    ],
  },
} as const satisfies Record<string, SolutionLandingContent>;
