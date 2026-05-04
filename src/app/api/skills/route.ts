import { NextRequest, NextResponse } from "next/server";
import resumeData from "@/data/resume";
import { appendCustomSkill, readCustomSkills } from "@/lib/custom-skills-store";
import {
  customSkillToApi,
  normalizeSkillCategory,
  proficiencyToLevel,
  resumeSkillToApi,
} from "./skill-map";

// Resume skills are read from `resume.ts`. Admin-added skills persist in
// `content/skills/custom-skills.json` and are merged here.

export async function GET() {
  try {
    const fromResume = resumeData.skills.map((skill, index) => resumeSkillToApi(skill, index + 1));
    const custom = await readCustomSkills();
    const fromFile = custom.map((s) => customSkillToApi(s));
    return NextResponse.json([...fromResume, ...fromFile]);
  } catch (error) {
    console.error("Error serving skills:", error);
    return NextResponse.json({ error: "Failed to load skills" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    if (!name) {
      return NextResponse.json({ error: "Skill name is required" }, { status: 400 });
    }

    const category = normalizeSkillCategory(
      typeof body.category === "string" && body.category.trim() !== ""
        ? body.category
        : "technical"
    );
    const proficiencyRaw = body.proficiencyLevel ?? body.level;
    const proficiencyLevel = Number(proficiencyRaw);
    const level = Number.isFinite(proficiencyLevel)
      ? proficiencyToLevel(proficiencyLevel)
      : 50;

    let iconUrl: string | null = null;
    if (typeof body.iconUrl === "string" && body.iconUrl.trim() !== "") {
      iconUrl = body.iconUrl.trim();
    }

    const stored = await appendCustomSkill({ name, category, level, iconUrl });
    return NextResponse.json(customSkillToApi(stored));
  } catch (error) {
    console.error("Error creating skill:", error);
    return NextResponse.json({ error: "Failed to create skill" }, { status: 500 });
  }
}
