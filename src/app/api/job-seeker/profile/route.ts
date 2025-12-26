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

    // Sanitize and validate profile data to prevent prototype pollution
    const sanitizedProfileData = {
      personalInfo: {
        fullName: profileData.personalInfo?.fullName?.toString().trim().slice(0, 100) || '',
        title: profileData.personalInfo?.title?.toString().trim().slice(0, 100) || '',
        location: profileData.personalInfo?.location?.toString().trim().slice(0, 100) || '',
        email: profileData.personalInfo?.email?.toString().trim().slice(0, 100) || '',
        phone: profileData.personalInfo?.phone?.toString().trim().slice(0, 20) || '',
        linkedin: profileData.personalInfo?.linkedin?.toString().trim().slice(0, 200) || '',
        github: profileData.personalInfo?.github?.toString().trim().slice(0, 200) || '',
        website: profileData.personalInfo?.website?.toString().trim().slice(0, 200) || '',
      },
      summary: profileData.summary?.toString().trim().slice(0, 1000) || '',
      experience: Array.isArray(profileData.experience) ? profileData.experience.slice(0, 20).map((exp: any) => ({
        id: exp.id?.toString().slice(0, 50) || '',
        company: exp.company?.toString().trim().slice(0, 100) || '',
        position: exp.position?.toString().trim().slice(0, 100) || '',
        startDate: exp.startDate?.toString().slice(0, 10) || '',
        endDate: exp.endDate?.toString().slice(0, 10) || '',
        current: Boolean(exp.current),
        description: exp.description?.toString().trim().slice(0, 1000) || '',
        achievements: Array.isArray(exp.achievements) ? exp.achievements.slice(0, 10).map((a: any) => a?.toString().trim().slice(0, 200) || '') : []
      })) : [],
      education: Array.isArray(profileData.education) ? profileData.education.slice(0, 10).map((edu: any) => ({
        id: edu.id?.toString().slice(0, 50) || '',
        institution: edu.institution?.toString().trim().slice(0, 100) || '',
        degree: edu.degree?.toString().trim().slice(0, 100) || '',
        field: edu.field?.toString().trim().slice(0, 100) || '',
        startDate: edu.startDate?.toString().slice(0, 10) || '',
        endDate: edu.endDate?.toString().slice(0, 10) || '',
        gpa: edu.gpa?.toString().trim().slice(0, 10) || ''
      })) : [],
      skills: Array.isArray(profileData.skills) ? profileData.skills.slice(0, 50).map((skill: any) => ({
        id: skill.id?.toString().slice(0, 50) || '',
        name: skill.name?.toString().trim().slice(0, 100) || '',
        level: Math.max(0, Math.min(100, Number(skill.level) || 0)),
        category: ['technical', 'soft', 'language', 'tool'].includes(skill.category) ? skill.category : 'technical'
      })) : [],
      certifications: Array.isArray(profileData.certifications) ? profileData.certifications.slice(0, 20).map((cert: any) => ({
        id: cert.id?.toString().slice(0, 50) || '',
        name: cert.name?.toString().trim().slice(0, 100) || '',
        issuer: cert.issuer?.toString().trim().slice(0, 100) || '',
        date: cert.date?.toString().slice(0, 10) || '',
        expiryDate: cert.expiryDate?.toString().slice(0, 10) || ''
      })) : []
    };

    // Add metadata with safe object creation
    const profileWithMetadata = Object.assign(Object.create(null), {
      ...sanitizedProfileData,
      userId: userId.toString().trim().slice(0, 100),
      lastUpdated: new Date().toISOString(),
      version: profiles.has(userId) ? (profiles.get(userId).version || 0) + 1 : 1
    });

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

    // Sanitize profile data for updates
    const sanitizedUpdates = {};
    if (profileData.personalInfo) {
      sanitizedUpdates.personalInfo = {
        fullName: profileData.personalInfo?.fullName?.toString().trim().slice(0, 100) || existingProfile.personalInfo?.fullName || '',
        title: profileData.personalInfo?.title?.toString().trim().slice(0, 100) || existingProfile.personalInfo?.title || '',
        location: profileData.personalInfo?.location?.toString().trim().slice(0, 100) || existingProfile.personalInfo?.location || '',
        email: profileData.personalInfo?.email?.toString().trim().slice(0, 100) || existingProfile.personalInfo?.email || '',
        phone: profileData.personalInfo?.phone?.toString().trim().slice(0, 20) || existingProfile.personalInfo?.phone || '',
        linkedin: profileData.personalInfo?.linkedin?.toString().trim().slice(0, 200) || existingProfile.personalInfo?.linkedin || '',
        github: profileData.personalInfo?.github?.toString().trim().slice(0, 200) || existingProfile.personalInfo?.github || '',
        website: profileData.personalInfo?.website?.toString().trim().slice(0, 200) || existingProfile.personalInfo?.website || '',
      };
    }
    if (profileData.summary !== undefined) {
      sanitizedUpdates.summary = profileData.summary?.toString().trim().slice(0, 1000) || '';
    }
    if (profileData.experience) {
      sanitizedUpdates.experience = Array.isArray(profileData.experience) ? profileData.experience.slice(0, 20).map((exp: any) => ({
        id: exp.id?.toString().slice(0, 50) || '',
        company: exp.company?.toString().trim().slice(0, 100) || '',
        position: exp.position?.toString().trim().slice(0, 100) || '',
        startDate: exp.startDate?.toString().slice(0, 10) || '',
        endDate: exp.endDate?.toString().slice(0, 10) || '',
        current: Boolean(exp.current),
        description: exp.description?.toString().trim().slice(0, 1000) || '',
        achievements: Array.isArray(exp.achievements) ? exp.achievements.slice(0, 10).map((a: any) => a?.toString().trim().slice(0, 200) || '') : []
      })) : existingProfile.experience || [];
    }
    if (profileData.education) {
      sanitizedUpdates.education = Array.isArray(profileData.education) ? profileData.education.slice(0, 10).map((edu: any) => ({
        id: edu.id?.toString().slice(0, 50) || '',
        institution: edu.institution?.toString().trim().slice(0, 100) || '',
        degree: edu.degree?.toString().trim().slice(0, 100) || '',
        field: edu.field?.toString().trim().slice(0, 100) || '',
        startDate: edu.startDate?.toString().slice(0, 10) || '',
        endDate: edu.endDate?.toString().slice(0, 10) || '',
        gpa: edu.gpa?.toString().trim().slice(0, 10) || ''
      })) : existingProfile.education || [];
    }
    if (profileData.skills) {
      sanitizedUpdates.skills = Array.isArray(profileData.skills) ? profileData.skills.slice(0, 50).map((skill: any) => ({
        id: skill.id?.toString().slice(0, 50) || '',
        name: skill.name?.toString().trim().slice(0, 100) || '',
        level: Math.max(0, Math.min(100, Number(skill.level) || 0)),
        category: ['technical', 'soft', 'language', 'tool'].includes(skill.category) ? skill.category : 'technical'
      })) : existingProfile.skills || [];
    }
    if (profileData.certifications) {
      sanitizedUpdates.certifications = Array.isArray(profileData.certifications) ? profileData.certifications.slice(0, 20).map((cert: any) => ({
        id: cert.id?.toString().slice(0, 50) || '',
        name: cert.name?.toString().trim().slice(0, 100) || '',
        issuer: cert.issuer?.toString().trim().slice(0, 100) || '',
        date: cert.date?.toString().slice(0, 10) || '',
        expiryDate: cert.expiryDate?.toString().slice(0, 10) || ''
      })) : existingProfile.certifications || [];
    }

    // Merge with existing profile safely
    const updatedProfile = Object.assign(Object.create(null), {
      ...existingProfile,
      ...sanitizedUpdates,
      userId: userId.toString().trim().slice(0, 100),
      lastUpdated: new Date().toISOString(),
      version: (existingProfile.version || 0) + 1
    });

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