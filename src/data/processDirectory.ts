import { getCollection } from "astro:content";
import { getTemplateAssets } from "./processTemplateAssets";

export const processAssetTypes = [
  { id: "agents", label: "Agent", icon: "Sparkle" },
  { id: "apps", label: "Apps", icon: "AppWindow" },
  { id: "automations", label: "Automations", icon: "Lightning" },
  { id: "functions", label: "Functions", icon: "Code" },
  { id: "operations-center", label: "Ops center", icon: "SquaresFour" },
  { id: "agent-channels", label: "Agent chat", icon: "ChatsCircle" },
] as const;

export async function getProcessDirectoryRows() {
  const entries = await getCollection("opsLibrary");
  return entries
    .map((entry) => {
      const data = entry.data;

      const resolved = getTemplateAssets(data);
      const presence: Record<string, boolean> = {
        agents: resolved.agent,
        apps: resolved.app,
        automations: resolved.automation,
        functions: resolved.function,
        "operations-center": resolved.operationsCenter,
        "agent-channels": resolved.channels.length > 0,
      };
      const assets = processAssetTypes.filter(({ id }) => presence[id]);
      const slug = data.slug ?? entry.id;
      return {
        name: data.title,
        description: data.outcome,
        href: `/process/${slug}/`,
        assets,
        ...resolved,
        updated: data.lastUpdated,
      };
    })
    .sort(
      (a, b) =>
        b.updated.getTime() - a.updated.getTime() ||
        a.name.localeCompare(b.name),
    );
}
