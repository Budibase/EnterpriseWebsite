export interface DocsNavItem {
  label: string;
  href?: string;
  children?: DocsNavItem[];
  toggleOnly?: boolean;
  startCollapsed?: boolean;
}

export interface DocsNavGroup {
  title: string;
  items: DocsNavItem[];
}

export const docsNavData: DocsNavGroup[] = [
  {
    title: "Agent",
    items: [
      { label: "Overview", href: "#" },
      { label: "Modes", href: "#" },
      { label: "Review", href: "#" },
      { label: "Terminal", href: "#" },
      { label: "Browser", href: "#" },
      { label: "Security", href: "#" },
      {
        label: "Hooks",
        toggleOnly: true,
        children: [
          { label: "Overview", href: "#" },
          { label: "Third Party Hooks", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Automations",
    items: [
      { label: "Rules", href: "#" },
      { label: "Commands", href: "#" },
      { label: "Skills", href: "#" },
      { label: "Subagents", href: "#" },
      { label: "Semantic Search", href: "#" },
      { label: "@ Mentions", href: "#" },
      {
        label: "Model Context Protocol (MCP)",
        toggleOnly: true,
        children: [
          { label: "Overview", href: "#" },
          { label: "Servers", href: "#" },
          { label: "Transports", href: "#" },
        ],
      },
    ],
  },
  {
    title: "Platform",
    items: [
      {
        label: "Data",
        toggleOnly: true,
        startCollapsed: true,
        children: [
          { label: "Introduction to data", href: "/docs/data" },
          { label: "Dev/prod switcher", href: "/docs/data/dev-prod-switcher" },
          { label: "Views", href: "/docs/data/views" },
          { label: "Users table", href: "/docs/data/users-table" },
          { label: "Budibase DB", href: "/docs/data/budibasedb" },
          { label: "AI column", href: "/docs/data/budibasedb/ai-column" },
          { label: "Attachments", href: "/docs/data/budibasedb/attachments" },
          { label: "Barcode/QR", href: "/docs/data/budibasedb/barcodeqr" },
          {
            label: "Boolean / true-false",
            href: "/docs/data/budibasedb/boolean-truefalse",
          },
          { label: "Date and time", href: "/docs/data/budibasedb/datetime" },
          { label: "JSON", href: "/docs/data/budibasedb/json" },
          { label: "Multi-select", href: "/docs/data/budibasedb/multi-select" },
          { label: "Number", href: "/docs/data/budibasedb/number" },
          {
            label: "Relationships",
            href: "/docs/data/budibasedb/relationships",
          },
          { label: "Text", href: "/docs/data/budibasedb/text" },
          { label: "Users", href: "/docs/data/budibasedb/users-1" },
          { label: "Options", href: "/docs/data/budibasedb/options" },
          { label: "Data sources", href: "/docs/data/data-sources" },
          { label: "CouchDB", href: "/docs/data/data-sources/couchdb" },
          { label: "CSV import", href: "/docs/data/data-sources/csv-import" },
          { label: "DynamoDB", href: "/docs/data/data-sources/dynamodb" },
          {
            label: "Elasticsearch",
            href: "/docs/data/data-sources/elasticsearch",
          },
          { label: "Firestore", href: "/docs/data/data-sources/firestore" },
          {
            label: "Google Sheets",
            href: "/docs/data/data-sources/google-sheets",
          },
          { label: "MongoDB", href: "/docs/data/data-sources/mongodb" },
          {
            label: "MS SQL Server",
            href: "/docs/data/data-sources/ms-sql-server",
          },
          {
            label: "MySQL/MariaDB",
            href: "/docs/data/data-sources/mysql-mariadb",
          },
          { label: "Oracle", href: "/docs/data/data-sources/oracle" },
          { label: "PostgreSQL", href: "/docs/data/data-sources/postgresql" },
          { label: "Redis", href: "/docs/data/data-sources/redis" },
          { label: "S3", href: "/docs/data/data-sources/s3" },
          { label: "Snowflake", href: "/docs/data/data-sources/snowflake" },
          { label: "REST", href: "/docs/data/rest" },
          { label: "REST templates", href: "/docs/data/rest/rest-templates" },
          { label: "REST queries", href: "/docs/data/rest/rest-queries" },
          { label: "REST bindings", href: "/docs/data/rest/rest-bindings" },
          {
            label: "REST query import",
            href: "/docs/data/rest/rest-query-import",
          },
          {
            label: "REST authentication",
            href: "/docs/data/rest/rest-authentication",
          },
          { label: "REST variables", href: "/docs/data/rest/rest-variables" },
          {
            label: "REST pagination",
            href: "/docs/data/rest/rest-pagination",
          },
          { label: "REST OAuth2", href: "/docs/data/rest/rest-oauth2" },
          { label: "REST example", href: "/docs/data/rest/rest-example" },
          { label: "SQL datasource", href: "/docs/data/sql-datasource" },
          { label: "Transformers", href: "/docs/data/transformers" },
          {
            label: "Environment variables",
            href: "/docs/data/environment-variables",
          },
          { label: "PDF exporting", href: "/docs/data/pdf-exporting" },
          {
            label: "AI-powered table generation",
            href: "/docs/data/ai-powered-table-generation",
          },
        ],
      },
      {
        label: "Apps",
        toggleOnly: true,
        children: [
          { label: "Overview", href: "#" },
          { label: "Builder", href: "#" },
          { label: "Publishing", href: "#" },
        ],
      },
      {
        label: "API Explorer",
        toggleOnly: true,
        children: [
          { label: "Overview", href: "#" },
          { label: "Requests", href: "#" },
          { label: "Authentication", href: "#" },
        ],
      },
      {
        label: "Connections",
        toggleOnly: true,
        children: [
          { label: "Overview", href: "#" },
          { label: "Databases", href: "#" },
          { label: "REST APIs", href: "#" },
        ],
      },
    ],
  },
];
