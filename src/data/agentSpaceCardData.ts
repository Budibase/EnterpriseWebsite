import { getCollection } from "astro:content";

export const agentSpaceDepartments = [
  { id: "all", label: "All" },
  { id: "it", label: "IT" },
  { id: "operations", label: "Operations" },
  { id: "hr", label: "HR" },
  { id: "sales", label: "Sales" },
  { id: "marketing", label: "Marketing" },
  { id: "finance", label: "Finance" },
  { id: "internal-tools", label: "Internal tools" },
] as const;

export type DepartmentId = (typeof agentSpaceDepartments)[number]["id"];
export type AgentCardDepartmentId = Exclude<DepartmentId, "all">;

export interface AgentCardItem {
  slug: string;
  name: string;
  departmentId: AgentCardDepartmentId;
  department: string;
  description: string;
  linkUrl: string;
}

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

const getDepartmentLabel = (id: AgentCardDepartmentId) =>
  agentSpaceDepartments.find((department) => department.id === id)?.label ??
  "Operations";

export async function getAgentSpaceCards(): Promise<AgentCardItem[]> {
  const workflowEntries = await getCollection("workflows");

  return workflowEntries
    .map((entry) => {
      const departmentId = mapRoleToDepartmentId(entry.data.role);

      return {
        slug: entry.data.slug ?? entry.id,
        name: entry.data.title,
        departmentId,
        department: getDepartmentLabel(departmentId),
        description: entry.data.outcome,
        linkUrl: `/agent-space/${entry.data.slug ?? entry.id}`,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}
