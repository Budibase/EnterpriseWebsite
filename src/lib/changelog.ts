import { readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import { getCollection, type CollectionEntry } from "astro:content";

const CHANGELOG_DIR = resolve("src/content/changelog");

async function hasMarkdownFiles(directory: string): Promise<boolean> {
  try {
    const entries = await readdir(directory, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith(".md")) {
        return true;
      }

      if (entry.isDirectory()) {
        const nestedDirectory = join(directory, entry.name);
        if (await hasMarkdownFiles(nestedDirectory)) {
          return true;
        }
      }
    }

    return false;
  } catch {
    return false;
  }
}

export async function getPublishedChangelogEntries(): Promise<
  CollectionEntry<"changelog">[]
> {
  if (!(await hasMarkdownFiles(CHANGELOG_DIR))) {
    return [];
  }

  return getCollection("changelog", ({ data }) => !data.draft);
}
