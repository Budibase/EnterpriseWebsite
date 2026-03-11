import { existsSync } from "node:fs";
import path from "node:path";

const publicRoot = path.resolve(process.cwd(), "public");
const publicAssetCache = new Map();

function normalizeRootRelativePath(value) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmedValue = value.trim();

  if (!trimmedValue.startsWith("/") || trimmedValue.startsWith("//")) {
    return null;
  }

  if (trimmedValue.startsWith("/.netlify/images")) {
    return null;
  }

  return trimmedValue.split("?", 1)[0].split("#", 1)[0];
}

function hasPublicAsset(value) {
  const normalizedPath = normalizeRootRelativePath(value);

  if (!normalizedPath) {
    return true;
  }

  let decodedPath = normalizedPath;

  try {
    decodedPath = decodeURIComponent(normalizedPath);
  } catch {
    decodedPath = normalizedPath;
  }

  if (publicAssetCache.has(decodedPath)) {
    return publicAssetCache.get(decodedPath);
  }

  const assetPath = path.resolve(publicRoot, `.${decodedPath}`);
  const exists = assetPath.startsWith(publicRoot) && existsSync(assetPath);

  publicAssetCache.set(decodedPath, exists);

  return exists;
}

function hasMeaningfulContent(node) {
  if (!node) {
    return false;
  }

  if (node.type === "text") {
    return Boolean(node.value?.trim());
  }

  if (node.type === "element") {
    if (node.tagName === "img") {
      return hasPublicAsset(String(node.properties?.src ?? ""));
    }

    return Array.isArray(node.children) && node.children.some(hasMeaningfulContent);
  }

  return false;
}

function shouldRemoveNode(node) {
  if (node?.type === "element" && node.tagName === "img") {
    return !hasPublicAsset(String(node.properties?.src ?? ""));
  }

  if (
    node?.type === "element" &&
    ["a", "p", "figure"].includes(node.tagName)
  ) {
    return !hasMeaningfulContent(node);
  }

  return false;
}

function sanitizeTree(node) {
  if (!Array.isArray(node?.children)) {
    return;
  }

  for (const child of node.children) {
    sanitizeTree(child);
  }

  node.children = node.children.filter((child) => !shouldRemoveNode(child));
}

export default function rehypeStripMissingImages() {
  return function transformer(tree) {
    sanitizeTree(tree);
  };
}
