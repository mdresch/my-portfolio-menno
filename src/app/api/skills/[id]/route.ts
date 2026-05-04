import { NextRequest, NextResponse } from "next/server";
import { removeCustomSkill } from "@/lib/custom-skills-store";
import { CUSTOM_SKILL_ID_MIN } from "@/lib/skills-constants";

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id: idParam } = await context.params;
    const id = Number(idParam);
    if (!Number.isFinite(id) || id < CUSTOM_SKILL_ID_MIN) {
      return NextResponse.json(
        {
          error:
            "Only skills created via the admin panel can be deleted. Resume skills are managed in src/data/resume.ts.",
        },
        { status: 400 }
      );
    }
    const ok = await removeCustomSkill(id);
    if (!ok) {
      return NextResponse.json({ error: "Skill not found" }, { status: 404 });
    }
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Error deleting skill:", error);
    return NextResponse.json({ error: "Failed to delete skill" }, { status: 500 });
  }
}
