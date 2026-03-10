import {
  renderCTAHtml,
  renderCustomCTAHtml,
  renderTemplateCTAHtml,
  renderVimeoHtml,
  renderYouTubeHtml,
  renderFigureHtml,
} from "./hugo-shortcode-renderers.js";

const supportedShortcodes = new Set([
  "cta",
  "custom-cta",
  "template-cta",
  "vimeo",
  "youtube",
  "figure",
]);

function getParagraphText(node) {
  if (node?.type !== "paragraph") {
    return null;
  }

  if (!Array.isArray(node.children) || node.children.length !== 1) {
    return null;
  }

  const [child] = node.children;

  if (child.type !== "text") {
    return null;
  }

  return child.value.trim();
}

function getNodeSource(node, sourceLines) {
  const startLine = node?.position?.start?.line;
  const endLine = node?.position?.end?.line;

  if (typeof startLine !== "number" || typeof endLine !== "number") {
    return null;
  }

  return sourceLines.slice(startLine - 1, endLine).join("\n").trim();
}

function parseShortcodeArgs(input) {
  const named = {};
  const positional = [];
  const tokenPattern =
    /([A-Za-z0-9_-]+)\s*(=|:)\s*"([^"]*)"|([A-Za-z0-9._:/-]+)|"([^"]*)"/g;

  for (const match of input.matchAll(tokenPattern)) {
    const [, key, , quotedValue, bareValue, quotedPositional] = match;

    if (key) {
      named[key] = quotedValue ?? "";
      continue;
    }

    positional.push(bareValue ?? quotedPositional ?? "");
  }

  return { named, positional };
}

function getHighlightDetails(text) {
  const match = text.match(/^\s*\{\{<\s*highlight\s+(.+?)\s*>\}\}\s*$/);

  if (!match) {
    return null;
  }

  const { positional } = parseShortcodeArgs(match[1]);
  const [lang = "text"] = positional;

  return {
    lang: lang.toLowerCase(),
  };
}

function trimCodeFencePadding(value) {
  return value.replace(/^\s*\r?\n/, "").replace(/\r?\n\s*$/, "");
}

export default function remarkHugoShortcodes() {
  return function transformer(tree, file) {
    const source = String(file);
    const sourceLines = source.split(/\r?\n/);
    const nextChildren = [];

    for (let index = 0; index < tree.children.length; index += 1) {
      const node = tree.children[index];
      const text = getNodeSource(node, sourceLines) ?? getParagraphText(node);

      if (!text) {
        nextChildren.push(node);
        continue;
      }

      const highlight = getHighlightDetails(text);

      if (highlight) {
        let closingIndex = index + 1;

        while (closingIndex < tree.children.length) {
          const closingText = getParagraphText(tree.children[closingIndex]);

          if (closingText && /^\{\{<\s*\/highlight\s*>\}\}$/.test(closingText)) {
            break;
          }

          closingIndex += 1;
        }

        if (closingIndex >= tree.children.length) {
          nextChildren.push(node);
          continue;
        }

        const startOffset = node.position?.end?.offset;
        const endOffset = tree.children[closingIndex].position?.start?.offset;

        if (typeof startOffset !== "number" || typeof endOffset !== "number") {
          nextChildren.push(node);
          continue;
        }

        nextChildren.push({
          type: "code",
          lang: highlight.lang,
          value: trimCodeFencePadding(source.slice(startOffset, endOffset)),
        });

        index = closingIndex;
        continue;
      }

      const match = text.match(/^\s*\{\{<\s*([A-Za-z0-9-]+)([\s\S]*?)\s*>\}\}\s*$/);

      if (!match) {
        nextChildren.push(node);
        continue;
      }

      const [, shortcodeName, rawArgs] = match;

      if (!supportedShortcodes.has(shortcodeName)) {
        nextChildren.push(node);
        continue;
      }

      const args = parseShortcodeArgs(rawArgs);

      if (shortcodeName === "youtube" && !args.named.id && args.positional[0]) {
        args.named.id = args.positional[0];
      }

      const renderedHtml =
        shortcodeName === "cta"
          ? renderCTAHtml()
          : shortcodeName === "custom-cta"
            ? renderCustomCTAHtml(args.named)
            : shortcodeName === "template-cta"
              ? renderTemplateCTAHtml(args.named)
              : shortcodeName === "vimeo"
                ? renderVimeoHtml(args.named)
                : shortcodeName === "youtube"
                  ? renderYouTubeHtml(args.named)
                  : renderFigureHtml(args.named);

      nextChildren.push({
        type: "html",
        value: renderedHtml,
      });
    }

    tree.children = nextChildren;
  };
}
