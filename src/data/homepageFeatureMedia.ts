import PostgresLogo from "@assets/logos/Postgres.svg?url";
import MySQLLogo from "@assets/logos/MYSQL.svg?url";
import MSSQLLogo from "@assets/logos/MSSQL.svg?url";
import SAPLogo from "@assets/logos/SAP.svg?url";
import SharePointLogo from "@assets/logos/microsoft-sharepoint.svg?url";
import JiraLogo from "@assets/logos/Jira.svg?url";
import ServiceNowLogo from "@assets/logos/servicenow.svg?url";
import RestApiLogo from "@assets/logos/rest-api.svg?url";

// Shared feature visuals used by the homepage and product landing pages.
export const homepageFeatureMedia = {
  apis: {
    mediaBadges: [
      { label: "SharePoint", icon: SharePointLogo },
      { label: "Jira", icon: JiraLogo },
      { label: "ServiceNow", icon: ServiceNowLogo },
      { label: "Custom REST API", icon: RestApiLogo },
    ],
  },
  agents: {
    mediaScene: {
      type: "agent",
      role: "You are the Purchase Requisition Agent.",
      instructions: [
        { text: "Identify the requester" },
        { text: "Collect supplier and order details" },
        {
          text: "Validate with ",
          binding: "sap.suppliers.read",
          bindingBadge: true,
          bindingIcon: SAPLogo,
        },
        {
          text: "Create a draft with ",
          binding: "sap.req.create",
          bindingBadge: true,
          bindingIcon: SAPLogo,
        },
        { text: "Present the draft for confirmation" },
        { text: "Check whether approval is required" },
        {
          text: "Create the PO with ",
          binding: "sap.po.create",
          approval: true,
        },
        { text: "Return the PO number" },
      ],
    },
  },
  automations: {
    mediaScene: {
      type: "automation",
      nodes: [
        { label: "Request submitted", icon: "Lightning" },
        { label: "Amount over £5k?", icon: "GitFork" },
        { label: "Send for approval", icon: "CheckCircle" },
      ],
    },
  },
  functions: {
    mediaScene: {
      type: "function",
      name: "Function",
      code: [
        "async function sync(items) {",
        "  for (const item of items) {",
        "    await api.jira",
        "      .create_issue(item)",
        "  }",
        "  return items.length",
        "}",
      ],
    },
  },
  data: {
    mediaBadges: [
      { label: "Budibase Tables", icon: "/favicon.svg" },
      { label: "PostgreSQL", icon: PostgresLogo },
      { label: "MySQL", icon: MySQLLogo },
      { label: "MSSQL", icon: MSSQLLogo },
    ],
  },
} as const;
