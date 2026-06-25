export type ChangelogTag =
  | "Added"
  | "Changed"
  | "Deprecated"
  | "Removed"
  | "Fixed"
  | "Security";

export interface ChangelogEntry {
  id: string;
  body?: string;
  data: {
    title: string;
    date: Date;
    version: string;
    tags: ChangelogTag[];
    description?: string;
    image?: {
      src: string;
      alt?: string;
    };
    draft?: boolean;
  };
}

export async function getPublishedChangelogEntries(): Promise<
  ChangelogEntry[]
> {
  return [];
}
