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

      // Read named assets from the authored guide, rather than generating counts
      // from the illustrative product demonstrations or integration list.
      const sectionAssets = (id: string, subsection?: string) => {
        let section =
          (entry.body ?? "")
            .split(new RegExp(`<h2 id="${id}">[^<]*</h2>`))[1]
            ?.split(/<h2 /)[0] ?? "";
        if (subsection)
          section =
            section.split(`### ${subsection}`)[1]?.split(/\n### /)[0] ?? "";
        return [...section.matchAll(/^\*\*([^*]+)\*\*:/gm)].map(
          (match) => match[1],
        );
      };
      const declared = data.assetsUsed;
      const apps = declared?.apps ?? sectionAssets("screens");
      const automations = declared?.automations ?? sectionAssets("automations");
      const resolved = getTemplateAssets({
        ...data,
        assetsUsed: {
          ...declared,
          ...(apps.length > 0 ? { apps } : {}),
          ...(automations.length > 0 ? { automations } : {}),
        },
      });
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
