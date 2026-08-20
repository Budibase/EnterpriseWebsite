import fs from "node:fs";
import path from "node:path";

const blogRoot = new URL("../src/content/blog/", import.meta.url);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory()
      ? walk(entryPath)
      : entry.name.endsWith(".md")
        ? [entryPath]
        : [];
  });
}

const failures = [];

for (const file of walk(blogRoot.pathname)) {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, index) => {
    if (/\{\{\s*[<%]/.test(line)) {
      failures.push(`${path.relative(process.cwd(), file)}:${index + 1}`);
    }
  });
}

if (failures.length) {
  console.error("Legacy Hugo shortcode syntax found:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log("Blog content check passed: no Hugo shortcode syntax found.");
}
