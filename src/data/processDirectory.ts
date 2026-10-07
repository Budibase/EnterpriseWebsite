import { getCollection } from "astro:content";

export const processAssetTypes = [
  { id: "agents", label: "Agent", icon: "Sparkle" },
  { id: "apps", label: "Apps", icon: "AppWindow" },
  { id: "automations", label: "Automations", icon: "Lightning" },
  { id: "functions", label: "Functions", icon: "Code" },
  { id: "operations-center", label: "Operations center", icon: "SquaresFour" },
  { id: "agent-channels", label: "Agent channels", icon: "ChatsCircle" },
] as const;

export async function getProcessDirectoryRows() {
  const entries = await getCollection("opsLibrary");
  return entries
    .map((entry) => {
      const data = entry.data;
      const tags = data.tags.map((tag) => tag.toLowerCase());
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
      const tables = declared?.tables ?? sectionAssets("data", "Tables");
      const channels = tags.includes("chat")
        ? data.integrations.filter((name) =>
            /^(slack|teams|microsoft teams|discord)$/i.test(name),
          )
        : [];
      const assets = processAssetTypes.filter(({ id }) => {
        switch (id) {
          case "agents":
            return tags.includes("agents");
          case "apps":
            return apps.length > 0 || tags.includes("apps");
          case "automations":
            return automations.length > 0 || tags.includes("automations");
          case "functions":
            return tags.includes("functions");
          case "operations-center":
            return tags.includes("operations center");
          case "agent-channels":
            return channels.length > 0;
        }
      });
      const inventory = [
        ...apps,
        ...automations,
        ...tables,
        ...(declared?.tools ?? []),
        ...(declared?.aiModel ?? []),
        ...channels,
      ];
      // Older guides without a named inventory should not display a made-up total.
      const completeInventory =
        (!tags.includes("apps") || apps.length > 0) &&
        (!tags.includes("automations") || automations.length > 0);
      const totalAssets = completeInventory
        ? inventory.length + (tags.includes("agents") ? 1 : 0)
        : null;
      const slug = data.slug ?? entry.id;
      return {
        name: data.title,
        description: data.outcome,
        href: `/process/${slug}/`,
        assets,
        channels,
        totalAssets,
        inventory,
        ai:
          tags.includes("agents") ||
          data.aiAssists.length > 0 ||
          Boolean(declared?.aiModel?.length),
        connections: data.integrations,
        updated: data.lastUpdated,
      };
    })
    .sort(
      (a, b) =>
        b.updated.getTime() - a.updated.getTime() ||
        a.name.localeCompare(b.name),
    );
}
