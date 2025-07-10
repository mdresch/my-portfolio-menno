import { NextResponse } from "next/server";

// Configuration check
const useMockGemini = process.env.USE_MOCK_GEMINI === 'true' || 
  (!process.env.GOOGLE_CLOUD_PROJECT_ID || 
   (!process.env.GOOGLE_APPLICATION_CREDENTIALS && !process.env.GOOGLE_SERVICE_ACCOUNT_KEY));

const projectId = process.env.VERTEX_AI_PROJECT_ID || process.env.GOOGLE_CLOUD_PROJECT_ID;
const location = process.env.VERTEX_AI_LOCATION || 'us-central1';

export async function GET() {
  // Fetch portfolio data stats
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';
  
  try {
    const [skillsResponse, projectsResponse, blogResponse] = await Promise.allSettled([
      fetch(`${apiBaseUrl}/api/skills`),
      fetch(`${apiBaseUrl}/api/projects`),
      fetch(`${apiBaseUrl}/api/blogposts`)
    ]);

    let skillsCount = 0, projectsCount = 0, blogPostsCount = 0;
    
    if (skillsResponse.status === 'fulfilled' && skillsResponse.value.ok) {
      const skills = await skillsResponse.value.json();
      skillsCount = Array.isArray(skills) ? skills.length : skills?.data?.length || 0;
    }
    
    if (projectsResponse.status === 'fulfilled' && projectsResponse.value.ok) {
      const projects = await projectsResponse.value.json();
      projectsCount = Array.isArray(projects) ? projects.length : projects?.data?.length || 0;
    }
    
    if (blogResponse.status === 'fulfilled' && blogResponse.value.ok) {
      const blogPosts = await blogResponse.value.json();
      blogPostsCount = Array.isArray(blogPosts) ? blogPosts.length : blogPosts?.data?.length || 0;
    }

    return NextResponse.json({
      status: 'RAG Chat API is running',
      mode: useMockGemini ? 'mock' : 'production',
      vertexAIInitialized: !useMockGemini && !!projectId,
      hasCredentials: !!(process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
      skillsEndpoint: `${apiBaseUrl}/api/skills`,
      projectsEndpoint: `${apiBaseUrl}/api/projects`,
      blogpostsEndpoint: `${apiBaseUrl}/api/blogposts`,
      dataStats: {
        skills: skillsCount,
        projects: projectsCount,
        blogPosts: blogPostsCount
      },
      configuration: {
        projectId,
        location,
        useMockGemini,
        mockResponseDelay: process.env.MOCK_RESPONSE_DELAY || '1000'
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Status check error:', error);
    return NextResponse.json({
      status: 'RAG Chat API is running',
      mode: useMockGemini ? 'mock' : 'production',
      vertexAIInitialized: false,
      hasCredentials: !!(process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
      error: 'Could not fetch portfolio data stats',
      timestamp: new Date().toISOString()
    });
  }
}
