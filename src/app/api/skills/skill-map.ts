import type { Skill as ResumeSkill } from "@/data/resume";
import type { StoredCustomSkill } from "@/lib/custom-skills-store";
import { RESUME_SKILL_CATEGORY_VALUES } from "@/lib/skills-constants";

/** Public API shape for skills (GET /api/skills). */
export type ApiSkillRow = {
  id: number;
  name: string;
  category: string;
  proficiencyLevel: number;
  iconUrl: string | null;
  level: number;
};

export function resumeSkillToApi(skill: ResumeSkill, id: number): ApiSkillRow {
  return {
    id,
    name: skill.name,
    category: skill.category || "General",
    proficiencyLevel: Math.ceil(skill.level / 20),
    iconUrl: (skill as ResumeSkill & { iconUrl?: string }).iconUrl ?? null,
    level: skill.level,
  };
}

export function customSkillToApi(skill: StoredCustomSkill): ApiSkillRow {
  return {
    id: skill.id,
    name: skill.name,
    category: skill.category || "General",
    proficiencyLevel: Math.ceil(skill.level / 20),
    iconUrl: skill.iconUrl ?? null,
    level: skill.level,
  };
}

const ALLOWED_CATEGORIES = new Set<string>(RESUME_SKILL_CATEGORY_VALUES);

export function normalizeSkillCategory(raw: string | undefined | null): string {
  const c = String(raw ?? "technical")
    .toLowerCase()
    .trim();
  if (ALLOWED_CATEGORIES.has(c)) return c;
  return "technical";
}

/** Map admin form proficiency (1–10) to resume `level` (1–100). */
export function proficiencyToLevel(proficiencyLevel: number): number {
  const p = Math.min(10, Math.max(1, Math.round(Number(proficiencyLevel))));
  return Math.min(100, Math.max(1, p * 10));
}
