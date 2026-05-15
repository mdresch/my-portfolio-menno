import fs from "fs/promises";
import path from "path";
import { CUSTOM_SKILL_ID_MIN } from "./skills-constants";

export { CUSTOM_SKILL_ID_MIN } from "./skills-constants";

const SKILLS_DIR = path.join(process.cwd(), "content", "skills");
const SKILLS_FILE = path.join(SKILLS_DIR, "custom-skills.json");

export type StoredCustomSkill = {
  id: number;
  name: string;
  category: string;
  level: number;
  iconUrl?: string | null;
};

type FileShape = { skills: StoredCustomSkill[] };

async function ensureDir(): Promise<void> {
  await fs.mkdir(SKILLS_DIR, { recursive: true });
}

export async function readCustomSkills(): Promise<StoredCustomSkill[]> {
  try {
    const raw = await fs.readFile(SKILLS_FILE, "utf8");
    const parsed = JSON.parse(raw) as FileShape;
    return Array.isArray(parsed.skills) ? parsed.skills : [];
  } catch (e: unknown) {
    const code = e && typeof e === "object" && "code" in e ? (e as NodeJS.ErrnoException).code : "";
    if (code === "ENOENT") return [];
    throw e;
  }
}

async function writeCustomSkills(skills: StoredCustomSkill[]): Promise<void> {
  await ensureDir();
  const payload: FileShape = { skills };
  await fs.writeFile(SKILLS_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
}

function nextCustomId(existing: StoredCustomSkill[]): number {
  const maxCustom = existing.reduce((m, s) => (s.id >= CUSTOM_SKILL_ID_MIN ? Math.max(m, s.id) : m), 0);
  return maxCustom >= CUSTOM_SKILL_ID_MIN ? maxCustom + 1 : CUSTOM_SKILL_ID_MIN;
}

export async function appendCustomSkill(input: {
  name: string;
  category: string;
  level: number;
  iconUrl?: string | null;
}): Promise<StoredCustomSkill> {
  const skills = await readCustomSkills();
  const id = nextCustomId(skills);
  const row: StoredCustomSkill = {
    id,
    name: input.name.trim(),
    category: input.category,
    level: input.level,
    iconUrl: input.iconUrl?.trim() || null,
  };
  skills.push(row);
  await writeCustomSkills(skills);
  return row;
}

export async function removeCustomSkill(id: number): Promise<boolean> {
  if (id < CUSTOM_SKILL_ID_MIN) return false;
  const skills = await readCustomSkills();
  const next = skills.filter((s) => s.id !== id);
  if (next.length === skills.length) return false;
  await writeCustomSkills(next);
  return true;
}
