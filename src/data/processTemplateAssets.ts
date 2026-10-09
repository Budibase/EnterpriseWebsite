export interface TemplateAssetData {
  tags: string[];
  integrations: string[];
  aiModelRequired?: boolean;
  assetsUsed?: {
    apps?: string[];
    automations?: string[];
    functions?: string[];
    knowledgeSources?: ("SharePoint" | "PDF")[];
    aiModel?: string[];
  };
}

export function normalizeTemplateConnection(name: string): string {
  const aliases: Record<string, string> = {
    teams: "Microsoft Teams",
    "microsoft teams": "Microsoft Teams",
    slack: "Slack",
    discord: "Discord",
    sharepoint: "Microsoft SharePoint",
    "microsoft sharepoint": "Microsoft SharePoint",
    pdf: "PDF",
  };
  return aliases[name.trim().toLowerCase()] ?? name.trim();
}

export function getTemplateAssets(data: TemplateAssetData) {
  const tags = data.tags.map((tag) => tag.toLowerCase());
  const declared = data.assetsUsed;
  const integrations = [
    ...new Set(
      data.integrations.flatMap((name) =>
        /^(slack\s*\/\s*teams|teams\s*\/\s*slack)$/i.test(name.trim())
          ? ["Slack", "Microsoft Teams"]
          : [normalizeTemplateConnection(name)],
      ),
    ),
  ];
  const channelNames = new Set(["Slack", "Microsoft Teams"]);
  const channels = tags.includes("chat")
    ? integrations.filter((name) => channelNames.has(name))
    : [];
  const knowledge = [
    ...new Set(
      (declared?.knowledgeSources ?? []).map(normalizeTemplateConnection),
    ),
  ];
  const separateSources = new Set([...knowledge, ...channels]);
  return {
    agent: tags.includes("agents"),
    app:
      declared?.apps !== undefined
        ? declared.apps.length > 0
        : tags.includes("apps"),
    automation:
      declared?.automations !== undefined
        ? declared.automations.length > 0
        : tags.includes("automations"),
    function:
      declared?.functions !== undefined
        ? declared.functions.length > 0
        : tags.includes("functions"),
    operationsCenter: tags.includes("operations center"),
    knowledge,
    channels,
    connections: integrations.filter((name) => !separateSources.has(name)),
    aiModelRequired:
      data.aiModelRequired ??
      (tags.includes("agents") || Boolean(declared?.aiModel?.length)),
  };
}
