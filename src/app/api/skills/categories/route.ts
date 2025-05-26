import { NextRequest, NextResponse } from 'next/server';
import { resumeData } from '@/data/resume';

// This API route serves skill categories directly from resume.ts

export async function GET(request: NextRequest) {
  try {
    // Extract unique categories from skills in resume.ts
    const categories = [...new Set(
      resumeData.skills
        .map(skill => skill.category || 'General')
        .filter(Boolean)
    )].sort();

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error serving skill categories from resume.ts:', error);
    return NextResponse.json(
      { error: 'Failed to load skill categories' },
      { status: 500 }
    );
  }
}
