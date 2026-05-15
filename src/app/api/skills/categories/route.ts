import { NextRequest, NextResponse } from "next/server";
import resumeData from "@/data/resume";
import { readCustomSkills } from "@/lib/custom-skills-store";

export async function GET(_request: NextRequest) {
  try {
    const custom = await readCustomSkills();
    const fromResume = resumeData.skills.map((s) => s.category || "General");
    const fromCustom = custom.map((s) => s.category || "General");
    const categories = [...new Set([...fromResume, ...fromCustom].filter(Boolean))].sort();

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error serving skill categories from resume.ts:", error);
    return NextResponse.json(
      { error: "Failed to load skill categories" },
      { status: 500 }
    );
  }
}
