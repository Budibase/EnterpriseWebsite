import { getCollection } from "astro:content";

export const opsLibraryDepartments = [
  { id: "all", label: "All" },
  { id: "it", label: "IT" },
  { id: "operations", label: "Operations" },
  { id: "company-wide", label: "Company-wide" },
  { id: "hr", label: "HR" },
  { id: "sales", label: "Sales" },
  { id: "marketing", label: "Marketing" },
  { id: "finance", label: "Finance" },
  { id: "internal-tools", label: "Internal tools" },
] as const;

export type DepartmentId = (typeof opsLibraryDepartments)[number]["id"];
export type AgentCardDepartmentId = Exclude<DepartmentId, "all">;

export interface AgentCardItem {
  slug: string;
  name: string;
  departmentId: AgentCardDepartmentId;
  department: string;
  description: string;
  linkUrl: string;
}

const cardLabelBySlug: Record<string, string> = {
  "access-request": "Access Requests",
  "internal-knowledge-assistant": "Knowledge Assistant",
  "password-reset-agent": "Password Reset",
  "ticket-follow-up-agent": "Ticket Follow Ups",
};

const mapRoleToDepartmentId = (role: string): AgentCardDepartmentId => {
  const normalizedRole = role.toLowerCase();

  if (normalizedRole.includes("finance")) return "finance";
  if (normalizedRole.includes("marketing")) return "marketing";
  if (normalizedRole.includes("sales")) return "sales";
  if (normalizedRole.includes("hr")) return "hr";
  if (normalizedRole.includes("internal")) return "internal-tools";
  if (
    normalizedRole.includes("it") ||
    normalizedRole.includes("security") ||
    normalizedRole.includes("support")
  ) {
    return "it";
  }

  return "operations";
};

const getDepartmentId = (slug: string, role: string): AgentCardDepartmentId => {
  if (slug === "internal-knowledge-assistant") return "company-wide";

  return mapRoleToDepartmentId(role);
};

const getDepartmentLabel = (id: AgentCardDepartmentId) =>
  opsLibraryDepartments.find((department) => department.id === id)?.label ??
  "Operations";

export async function getOpsLibraryCards(): Promise<AgentCardItem[]> {
  const opsLibraryEntries = await getCollection("opsLibrary");

  return opsLibraryEntries
    .map((entry) => {
      const slug = entry.data.slug ?? entry.id;
      const departmentId = getDepartmentId(slug, entry.data.role);

      return {
        slug,
        name: cardLabelBySlug[slug] ?? entry.data.title,
        departmentId,
        department: getDepartmentLabel(departmentId),
        description: entry.data.outcome,
        linkUrl: `/ops/${slug}`,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}
