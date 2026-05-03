/**
 * Import ADPA governance markdown (and JSON) from GitHub branch
 * into content/blog/*.md with portfolio frontmatter.
 *
 * Run: node scripts/import-adpa-governance-posts.mjs
 */
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const BLOG_DIR = path.join(ROOT, "content", "blog");

const REF = "adpa-project-charter";
const RAW_BASE = `https://raw.githubusercontent.com/mdresch/adpa/${REF}/governance`;
const HTML_BASE = `https://github.com/mdresch/adpa/blob/${REF}/governance`;

/** Paths under governance/ (no leading slash) */
const FILES = [
  "AMD-2026-04-12-0001-Security-Hardening.md",
  "AMD-2026-04-13-0002-Resource-Efficiency.md",
  "AMD-2026-04-13-0003-Governor-Portal-Cockpit.md",
  "AMD-2026-04-16-0001-Directory-Boundary.md",
  "CONTRIBUTING.md",
  "CP7-SHADOW-EVALUATION-PLAN.md",
  "PR-GOVERNANCE.md",
  "README.md",
  "RPAS-COL.md",
  "RPAS-ESC.md",
  "RPAS-HIL.md",
  "RPAS-LAW-HARDENING.md",
  "RPAS-OPM.md",
  "RPAS-PRE.md",
  "RPAS-TAR-COL.md",
  "RPAS-TAR.md",
  "RPAS-TCL.md",
  "RPAS.md",
  "v2.2.0-Release-Notes.md",
  "v2.3.0-Release-Notes.md",
  "v2.4.1-Release-Notes.md",
  "visuals/Gate-5-Flow.md",
  "visuals/RPAS-TAR-COL-Matrix.md",
  "security/archive/2026-04-remediation/REMEDIATION_REPORT.md",
  "agent-handover.json",
  "rpas-attestation.json",
  "rpas-guardrails.json",
  "schemas/rpas-tar-col.schema.json",
];

function rawUrl(relPath) {
  return `${RAW_BASE}/${relPath.split("/").map(encodeURIComponent).join("/")}`;
}

function htmlUrl(relPath) {
  return `${HTML_BASE}/${relPath.split("/").map(encodeURIComponent).join("/")}`;
}

function toSlug(relPath) {
  const base = relPath.replace(/\.(md|json)$/i, "");
  return (
    "adpa-governance-" +
    base
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );
}

function inferDate(relPath) {
  const m = relPath.match(/(\d{4}-\d{2}-\d{2})/);
  if (m) return m[1];
  if (relPath.includes("v2.2.0")) return "2026-04-10";
  if (relPath.includes("v2.3.0")) return "2026-04-15";
  if (relPath.includes("v2.4.1")) return "2026-04-22";
  if (relPath.includes("2026-04-remediation")) return "2026-04-18";
  return "2026-05-02";
}

function humanize(s) {
  return s.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function extractTitle(body, relPath, isJson) {
  if (isJson) {
    const name = path.basename(relPath, path.extname(relPath));
    return `ADPA governance: ${humanize(name)} (JSON)`;
  }
  const lines = body.split(/\r?\n/);
  for (const line of lines) {
    const h = line.match(/^#\s+(.+)/);
    if (h) return h[1].trim().replace(/\*\*/g, "");
  }
  return humanize(path.basename(relPath, ".md"));
}

function proseAfterHeadingsAndHR(chunk) {
  const lines = chunk.split("\n");
  let i = 0;
  while (i < lines.length) {
    const t = lines[i].trim();
    if (!t) {
      i++;
      continue;
    }
    if (/^#{1,6}\s/.test(t)) {
      i++;
      continue;
    }
    if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(t)) {
      i++;
      continue;
    }
    break;
  }
  return lines.slice(i).join("\n").trim();
}

function excerptFromBody(body, title, isJson, relPath) {
  if (isJson) {
    return `Machine-readable governance artifact: governance/${relPath}.`;
  }
  let t = body.trim();
  if (t.startsWith("---")) {
    const end = t.indexOf("\n---", 3);
    if (end !== -1) t = t.slice(end + 4).trimStart();
  }
  t = t.replace(/^#\s+.+\n+/, "");
  const blocks = t.split(/\n\n+/);
  for (const block of blocks) {
    const prose = proseAfterHeadingsAndHR(block.trim());
    if (!prose || prose.startsWith("|")) continue;
    if (/^(\*\*)?Certification(\*\*)?\s*:/i.test(prose)) continue;
    if (prose.length < 35) continue;
    const plain = prose.replace(/[#*_`[\]]/g, "").replace(/\s+/g, " ").trim();
    if (plain.length < 35) continue;
    return plain.slice(0, 280);
  }
  return title.slice(0, 220);
}

function yamlString(s) {
  return JSON.stringify(s);
}

async function main() {
  await mkdir(BLOG_DIR, { recursive: true });

  for (const relPath of FILES) {
    const isJson = relPath.endsWith(".json");
    const url = rawUrl(relPath);
    const srcHtml = htmlUrl(relPath);
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Skip (HTTP ${res.status}): ${relPath}`);
      continue;
    }
    const bodyRaw = await res.text();
    const slug = toSlug(relPath);
    const date = inferDate(relPath);
    const title = extractTitle(bodyRaw, relPath, isJson);
    const description = excerptFromBody(bodyRaw, title, isJson, relPath);

    let body = "";
    if (isJson) {
      body = [
        `> **Source:** [\`governance/${relPath}\`](${srcHtml}) — branch \`${REF}\`, repository [mdresch/adpa](https://github.com/mdresch/adpa).`,
        "",
        "```json",
        bodyRaw.trimEnd(),
        "```",
        "",
      ].join("\n");
    } else {
      let md = bodyRaw.trimEnd();
      if (md.startsWith("---")) {
        const end = md.indexOf("\n---", 3);
        if (end !== -1) md = md.slice(end + 4).trimStart();
      }
      body = [
        `> **Source:** [\`governance/${relPath}\`](${srcHtml}) — branch \`${REF}\`, repository [mdresch/adpa](https://github.com/mdresch/adpa).`,
        "",
        md,
        "",
      ].join("\n");
    }

    const frontmatter = [
      "---",
      `title: ${yamlString(title)}`,
      `date: ${date}`,
      `slug: ${yamlString(slug)}`,
      `description: ${yamlString(description)}`,
      `categories:`,
      `  - ADPA`,
      `  - Governance`,
      `  - RPAS`,
      `author: "Menno Drescher"`,
      `sourceRepo: "https://github.com/mdresch/adpa"`,
      `sourceBranch: ${yamlString(REF)}`,
      `sourcePath: ${yamlString(`governance/${relPath}`)}`,
      "---",
      "",
    ].join("\n");

    const outPath = path.join(BLOG_DIR, `${slug}.md`);
    await writeFile(outPath, frontmatter + body, "utf8");
    console.log("Wrote", path.relative(ROOT, outPath));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
