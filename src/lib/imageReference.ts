import { existsSync } from "node:fs";
import path from "node:path";

const publicRoot = path.join(process.cwd(), "public");
const assetExistsCache = new Map<string, boolean>();

function stripQueryAndHash(value: string): string {
  return value.split(/[?#]/, 1)[0] ?? value;
}

export function isHttpsImageReference(value: string): boolean {
  return /^https:\/\//i.test(value);
}

export function isRootRelativeImageReference(value: string): boolean {
  return value.startsWith("/");
}

export function hasPublicImageAsset(value: string): boolean {
  const normalizedValue = stripQueryAndHash(value);

  if (!isRootRelativeImageReference(normalizedValue)) {
    return false;
  }

  const cached = assetExistsCache.get(normalizedValue);
  if (cached !== undefined) {
    return cached;
  }

  const exists = existsSync(path.join(publicRoot, normalizedValue.slice(1)));
  assetExistsCache.set(normalizedValue, exists);
  return exists;
}

export function resolveImageReference(
  value?: string | null,
): string | undefined {
  if (!value) {
    return undefined;
  }

  if (isHttpsImageReference(value)) {
    return value;
  }

  if (hasPublicImageAsset(value)) {
    return value;
  }

  return undefined;
}
