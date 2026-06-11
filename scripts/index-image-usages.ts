/**
 * Scan blog markdown for /media/ references and register ImageUsage rows.
 * Run: npm run index:image-usages
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { prisma } from "../src/lib/prisma";
import {
  buildBlogUsageEntries,
  syncUsagesForReference,
} from "../src/lib/image-library-usage";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

async function main(): Promise<void> {
  if (!fs.existsSync(BLOG_DIR)) {
    console.error(`Blog directory not found: ${BLOG_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  let registered = 0;
  let skipped = 0;

  for (const file of files) {
    const refSlug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const coverImage =
      typeof data.coverImage === "string" ? data.coverImage : null;
    const entries = buildBlogUsageEntries(refSlug, coverImage, content);
    const result = await syncUsagesForReference({
      refSlug,
      refPath: `content/blog/${refSlug}.md`,
      replaceUsageTypes: ["blog_cover", "blog_inline"],
      entries,
    });
    registered += result.registered;
    skipped += result.skipped;
    console.log(`${refSlug}: +${result.registered} registered, ${result.skipped} skipped`);
  }

  console.log(
    `Indexed ${files.length} posts — ${registered} usages registered, ${skipped} skipped (unknown slugs).`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
