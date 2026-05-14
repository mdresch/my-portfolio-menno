/** IDs below this come from `resume.ts` order; admin-created skills use this range. */
export const CUSTOM_SKILL_ID_MIN = 1_000_000;

/** Matches `Skill["category"]` in `src/data/resume.ts`. */
export const RESUME_SKILL_CATEGORY_VALUES = ["technical", "soft", "language", "tool"] as const;
export type ResumeSkillCategory = (typeof RESUME_SKILL_CATEGORY_VALUES)[number];

export const RESUME_SKILL_CATEGORY_LABELS: Record<ResumeSkillCategory, string> = {
  technical: "Technical",
  soft: "Soft skills",
  language: "Language",
  tool: "Tool",
};
