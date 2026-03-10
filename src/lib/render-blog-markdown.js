import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGemoji from "remark-gemoji";

import remarkHugoShortcodes from "./remark-hugo-shortcodes.js";

function visit(node, callback) {
  callback(node);

  if (!Array.isArray(node?.children)) {
    return;
  }

  for (const child of node.children) {
    visit(child, callback);
  }
}

function remarkHeadingIds() {
  return function transformer(tree) {
    visit(tree, (node) => {
      if (node.type !== "heading" || !Array.isArray(node.children) || node.children.length === 0) {
        return;
      }

      const lastChild = node.children.at(-1);

      if (lastChild?.type !== "text") {
        return;
      }

      const match = lastChild.value.match(/^(.*)\s+\{#([A-Za-z0-9_-]+)\}$/);

      if (!match) {
        return;
      }

      const [, headingText, id] = match;

      lastChild.value = headingText;
      node.data = {
        ...node.data,
        hProperties: {
          ...(node.data?.hProperties ?? {}),
          id,
        },
      };
    });
  };
}

export async function renderBlogMarkdown(body) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkHugoShortcodes)
    .use(remarkHeadingIds)
    .use(remarkGemoji)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(body);

  return String(file);
}
