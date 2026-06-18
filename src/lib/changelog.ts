import { getCollection, type CollectionEntry } from "astro:content";

export async function getPublishedChangelogEntries(): Promise<
  CollectionEntry<"changelog">[]
> {
  return getCollection("changelog", ({ data }) => !data.draft);
}
