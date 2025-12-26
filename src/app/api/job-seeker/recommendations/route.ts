import { NextRequest, NextResponse } from "next/server";

interface ProfileData {
  personalInfo: {
    title: string;
    location: string;
  };
  skills: Array<{
    name: string;
    level: number;
    category: string;
  }>;
  experience: Array<{
    position: string;
    company: string;
    description: string;
  }>;
}

// Sample recommendation data
const recommendationsData = {
  skillRecommendations: [
    {
      skill: "React",
      reason: "High demand in your area",
      priority: "high",
      learningResources: [
        { title: "React Official Documentation", url: "https://react.dev", type: "documentation" },
        { title: "React Course on Coursera", url: "https://coursera.org/react", type: "course" },
        { title: "React Certification", url: "https://reactcertification.com", type: "certification" }
      ]
    },
    {
      skill: "TypeScript",
      reason: "Complements your JavaScript skills",
      priority: "medium",
      learningResources: [
        { title: "TypeScript Handbook", url: "https://typescriptlang.org", type: "documentation" },
        { title: "TypeScript Course", url: "https://udemy.com/typescript", type: "course" }
      ]
    }
  ],
  jobRecommendations: [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      salary: "$120,000 - $150,000",
      matchScore: 92,
      matchReasons: ["React experience", "JavaScript skills", "Frontend focus"],
      url: "https://example.com/job/1"
    },
    {
      title: "Full Stack Engineer",
      company: "Startup Inc",
      location: "Remote",
      salary: "$100,000 - $130,000",
      matchScore: 87,
      matchReasons: ["Full stack experience", "Remote work preference", "Startup experience"],
      url: "https://example.com/job/2"
    }
  ],
  networkingRecommendations: [
    {
      name: "Sarah Johnson",
      title: "Senior Engineering Manager",
      company: "Google",
      reason: "Works in your target industry",
      mutualConnections: 3,
      profileUrl: "https://linkedin.com/in/sarahjohnson"
    },
    {
      name: "Michael Chen",
      title: "Frontend Architect",
      company: "Facebook",
      reason: "Similar technical background",
      mutualConnections: 1,
      profileUrl: "https://linkedin.com/in/michaelchen"
    }
  ],
  contentRecommendations: [
    {
      title: "10 React Best Practices for 2024",
      type: "article",
      source: "Medium",
      relevanceScore: 95,
      url: "https://medium.com/react-best-practices"
    },
    {
      title: "Frontend Development Trends",
      type: "video",
      source: "YouTube",
      relevanceScore: 88,
      url: "https://youtube.com/frontend-trends"
    }
  ]
};

function generatePersonalizedRecommendations(profileData: ProfileData) {
  const recommendations = {
    skills: [],
    jobs: [],
    networking: [],
    content: []
  };

  // Analyze user's skills and experience to generate personalized recommendations
  const userSkills = profileData.skills?.map(s => s.name.toLowerCase()) || [];
  const userTitle = profileData.personalInfo?.title?.toLowerCase() || "";
  const userLocation = profileData.personalInfo?.location || "";

  // Skill recommendations based on current skills
  if (userSkills.includes("javascript") && !userSkills.includes("typescript")) {
    recommendations.skills.push({
      skill: "TypeScript",
      reason: "Natural progression from JavaScript",
      priority: "high",
      estimatedLearningTime: "2-3 months",
      demandGrowth: "+35%"
    });
  }

  if (userSkills.includes("react") && !userSkills.includes("next.js")) {
    recommendations.skills.push({
      skill: "Next.js",
      reason: "Popular React framework with high demand",
      priority: "medium",
      estimatedLearningTime: "1-2 months",
      demandGrowth: "+28%"
    });
  }

  if (userTitle.includes("developer") || userTitle.includes("engineer")) {
    recommendations.skills.push({
      skill: "Cloud Computing (AWS/Azure)",
      reason: "Essential for modern development roles",
      priority: "high",
      estimatedLearningTime: "3-4 months",
      demandGrowth: "+42%"
    });
  }

  // Job recommendations based on skills and location
  if (userSkills.includes("react") || userSkills.includes("javascript")) {
    recommendations.jobs.push({
      title: "Frontend Developer",
      estimatedSalary: userLocation.includes("San Francisco") ? "$130,000" : "$95,000",
      matchScore: 88,
      demandLevel: "high",
      requiredSkills: ["React", "JavaScript", "CSS"]
    });
  }

  if (userSkills.length >= 8) {
    recommendations.jobs.push({
      title: "Full Stack Developer",
      estimatedSalary: userLocation.includes("San Francisco") ? "$145,000" : "$110,000",
      matchScore: 82,
      demandLevel: "high",
      requiredSkills: ["Frontend", "Backend", "Database"]
    });
  }

  // Networking recommendations
  recommendations.networking.push({
    suggestion: "Join React Developer Community",
    reason: "Connect with other React developers",
    platform: "Discord/Slack",
    memberCount: "50,000+"
  });

  recommendations.networking.push({
    suggestion: "Attend local tech meetups",
    reason: "Build local professional network",
    frequency: "Monthly",
    expectedConnections: "5-10 per event"
  });

  // Content recommendations
  if (userSkills.includes("react")) {
    recommendations.content.push({
      title: "Advanced React Patterns",
      type: "course",
      provider: "Frontend Masters",
      relevanceScore: 92,
      estimatedTime: "6 hours"
    });
  }

  recommendations.content.push({
    title: "Industry Trends Newsletter",
    type: "newsletter",
    provider: "JavaScript Weekly",
    relevanceScore: 85,
    frequency: "Weekly"
  });

  return recommendations;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // 'skills' | 'jobs' | 'networking' | 'content'
    const userId = searchParams.get('userId');

    // In a real application, you would fetch the user's profile data
    // For now, we'll use sample data
    const sampleProfile: ProfileData = {
      personalInfo: {
        title: "Frontend Developer",
        location: "San Francisco, CA"
      },
      skills: [
        { name: "JavaScript", level: 85, category: "technical" },
        { name: "React", level: 80, category: "technical" },
        { name: "CSS", level: 75, category: "technical" }
      ],
      experience: [
        {
          position: "Frontend Developer",
          company: "Tech Startup",
          description: "Built responsive web applications using React"
        }
      ]
    };

    const personalizedRecommendations = generatePersonalizedRecommendations(sampleProfile);

    if (type) {
      switch (type) {
      case 'skills':
        return NextResponse.json({
          recommendations: personalizedRecommendations.skills,
          trending: recommendationsData.skillRecommendations
        });
      case 'jobs':
        return NextResponse.json({
          recommendations: personalizedRecommendations.jobs,
          featured: recommendationsData.jobRecommendations
        });
      case 'networking':
        return NextResponse.json({
          recommendations: personalizedRecommendations.networking,
          suggested: recommendationsData.networkingRecommendations
        });
      case 'content':
        return NextResponse.json({
          recommendations: personalizedRecommendations.content,
          trending: recommendationsData.contentRecommendations
        });
      default:
        return NextResponse.json(
          { error: "Invalid recommendation type" },
          { status: 400 }
        );
      }
    }

    // Return all recommendations
    return NextResponse.json({
      personalized: personalizedRecommendations,
      featured: recommendationsData
    });
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return NextResponse.json(
      { error: "Failed to fetch recommendations" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, profileData, preferences } = body;

    if (!userId || !profileData) {
      return NextResponse.json(
        { error: "User ID and profile data are required" },
        { status: 400 }
      );
    }

    // Generate personalized recommendations based on the provided profile
    const recommendations = generatePersonalizedRecommendations(profileData);

    // In a real application, you would save these recommendations to a database
    // and potentially use machine learning to improve them over time

    return NextResponse.json({
      message: "Recommendations generated successfully",
      recommendations,
      generatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error("Error generating recommendations:", error);
    return NextResponse.json(
      { error: "Failed to generate recommendations" },
      { status: 500 }
    );
  }
}