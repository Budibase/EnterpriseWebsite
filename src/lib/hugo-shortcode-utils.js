const shortcodeNameOverrides = {
  CTA: "cta",
  YouTube: "youtube",
};

const componentNameOverrides = {
  cta: "CTA",
  youtube: "YouTube",
};

export function componentFileNameToShortcodeName(fileName) {
  if (shortcodeNameOverrides[fileName]) {
    return shortcodeNameOverrides[fileName];
  }

  if (/^[A-Z0-9]+$/.test(fileName)) {
    return fileName.toLowerCase();
  }

  return fileName
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

export function shortcodeNameToComponentName(shortcodeName) {
  if (componentNameOverrides[shortcodeName]) {
    return componentNameOverrides[shortcodeName];
  }

  return shortcodeName
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

export function escapeAttribute(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
