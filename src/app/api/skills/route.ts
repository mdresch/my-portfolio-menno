import { NextRequest, NextResponse } from 'next/server';
import resumeData from '@/data/resume';

// This API route serves skills data directly from resume.ts
// This acts as a fallback when the .NET backend API is not available

export async function GET(request: NextRequest) {
  try {
    // Extract skills from resume.ts and transform them to the expected format
    const skills = resumeData.skills.map((skill, index) => ({
      id: index + 1, // Generate sequential IDs
      name: skill.name,
      category: skill.category || 'General', // Provide default category if missing
      proficiencyLevel: Math.ceil(skill.level / 20), // Convert 0-100 scale to 1-5 scale
      iconUrl: skill.iconUrl || null, // Include icon if available
      level: skill.level, // Keep original level for reference
    }));

    return NextResponse.json(skills);
  } catch (error) {
    console.error('Error serving skills from resume.ts:', error);
    return NextResponse.json(
      { error: 'Failed to load skills' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { error: 'POST method not supported for this endpoint. Skills are read-only from resume.ts' },
    { status: 405 }
  );
}

export async function DELETE(request: NextRequest) {
  return NextResponse.json(
    { error: 'DELETE method not supported for this endpoint. Skills are read-only from resume.ts' },
    { status: 405 }
  );
}
