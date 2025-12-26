import { NextRequest, NextResponse } from "next/server";

// In a real application, you would use a proper database
// For now, we'll simulate with in-memory storage
const profiles = new Map();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const profile = profiles.get(userId);
    
    if (!profile) {
      return NextResponse.json(
        { error: "Profile not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, profileData } = body;

    if (!userId || !profileData) {
      return NextResponse.json(
        { error: "User ID and profile data are required" },
        { status: 400 }
      );
    }

    // Validate profile data structure
    const requiredFields = ['personalInfo', 'summary', 'experience', 'education', 'skills'];
    for (const field of requiredFields) {
      if (!(field in profileData)) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Add metadata
    const profileWithMetadata = {
      ...profileData,
      userId,
      lastUpdated: new Date().toISOString(),
      version: profiles.has(userId) ? (profiles.get(userId).version || 0) + 1 : 1
    };

    profiles.set(userId, profileWithMetadata);

    return NextResponse.json({
      message: "Profile saved successfully",
      profile: profileWithMetadata
    });
  } catch (error) {
    console.error("Error saving profile:", error);
    return NextResponse.json(
      { error: "Failed to save profile" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, profileData } = body;

    if (!userId || !profileData) {
      return NextResponse.json(
        { error: "User ID and profile data are required" },
        { status: 400 }
      );
    }

    const existingProfile = profiles.get(userId);
    if (!existingProfile) {
      return NextResponse.json(
        { error: "Profile not found" },
        { status: 404 }
      );
    }

    // Merge with existing profile
    const updatedProfile = {
      ...existingProfile,
      ...profileData,
      userId,
      lastUpdated: new Date().toISOString(),
      version: (existingProfile.version || 0) + 1
    };

    profiles.set(userId, updatedProfile);

    return NextResponse.json({
      message: "Profile updated successfully",
      profile: updatedProfile
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    if (!profiles.has(userId)) {
      return NextResponse.json(
        { error: "Profile not found" },
        { status: 404 }
      );
    }

    profiles.delete(userId);

    return NextResponse.json({
      message: "Profile deleted successfully"
    });
  } catch (error) {
    console.error("Error deleting profile:", error);
    return NextResponse.json(
      { error: "Failed to delete profile" },
      { status: 500 }
    );
  }
}