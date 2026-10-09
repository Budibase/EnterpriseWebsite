import assert from "node:assert/strict";
import test from "node:test";
import { getTemplateAssets } from "../src/data/processTemplateAssets.ts";

test("combined channel aliases and knowledge sources are not repeated as connections", () => {
  const assets = getTemplateAssets({
    tags: ["Agents", "Chat"],
    integrations: [
      "Slack/Teams",
      "Teams",
      "sharepoint",
      "PDF",
      "Notion",
      "Unlisted API",
    ],
    assetsUsed: { knowledgeSources: ["SharePoint", "PDF", "SharePoint"] },
  });
  assert.deepEqual(assets.channels, ["Slack", "Microsoft Teams"]);
  assert.deepEqual(assets.knowledge, ["Microsoft SharePoint", "PDF"]);
  assert.deepEqual(assets.connections, ["Notion", "Unlisted API"]);
});

test("notification connections are not treated as agent channels without Chat", () => {
  const assets = getTemplateAssets({
    tags: ["Automations"],
    integrations: ["Slack", "Teams", "Discord"],
  });
  assert.deepEqual(assets.channels, []);
  assert.deepEqual(assets.connections, ["Slack", "Microsoft Teams", "Discord"]);
});

test("Agent chat includes only Slack and Microsoft Teams", () => {
  const assets = getTemplateAssets({
    tags: ["Agents", "Chat"],
    integrations: ["Slack", "Teams", "Discord"],
  });
  assert.deepEqual(assets.channels, ["Slack", "Microsoft Teams"]);
  assert.deepEqual(assets.connections, ["Discord"]);
});

test("an explicit AI override wins and optional assistance alone does not require a model", () => {
  assert.equal(
    getTemplateAssets({
      tags: ["Agents"],
      integrations: [],
      aiModelRequired: false,
    }).aiModelRequired,
    false,
  );
  assert.equal(
    getTemplateAssets({
      tags: [],
      integrations: [],
      assetsUsed: { aiModel: ["Model provider"] },
    }).aiModelRequired,
    true,
  );
  assert.equal(
    getTemplateAssets({
      tags: ["Apps"],
      integrations: [],
      aiAssists: ["Optional summarization"],
    }).aiModelRequired,
    false,
  );
});

test("named inventories override tags; Functions and Operations center require asset evidence", () => {
  const empty = getTemplateAssets({
    tags: ["Apps", "Functions", "Automations"],
    integrations: ["Custom REST API"],
    assetsUsed: { apps: [], functions: [], automations: [] },
  });
  assert.equal(empty.app, false);
  assert.equal(empty.function, false);
  assert.equal(empty.automation, false);
  assert.equal(empty.operationsCenter, false);
  const present = getTemplateAssets({
    tags: ["Operations center"],
    integrations: [],
    assetsUsed: { functions: ["Normalize request"] },
  });
  assert.equal(present.function, true);
  assert.equal(present.operationsCenter, true);
});

test("knowledge is explicitly recorded rather than inferred from integration or upload mentions", () => {
  const assets = getTemplateAssets({
    tags: ["Agents"],
    integrations: ["Microsoft SharePoint", "PDF", "GitHub"],
  });
  assert.deepEqual(assets.knowledge, []);
  assert.deepEqual(assets.connections, [
    "Microsoft SharePoint",
    "PDF",
    "GitHub",
  ]);
});
