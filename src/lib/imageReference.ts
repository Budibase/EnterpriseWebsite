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
  return isRootRelativeImageReference(normalizedValue);
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
