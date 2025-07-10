import { NextRequest, NextResponse } from "next/server";
import { VertexAI } from "@google-cloud/vertexai";

// Types
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface RagContext {
  skills: any[];
  projects: any[];
  blogPosts: any[];
}

interface GeminiResponse {
  response: string;
  sources?: string[];
  confidence?: number;
}

// Configuration
const isProduction = process.env.NODE_ENV === 'production';
const useMockGemini = process.env.USE_MOCK_GEMINI === 'true' || 
  (!process.env.GOOGLE_CLOUD_PROJECT_ID || 
   (!process.env.GOOGLE_APPLICATION_CREDENTIALS && !process.env.GOOGLE_SERVICE_ACCOUNT_KEY));

const projectId = process.env.VERTEX_AI_PROJECT_ID || process.env.GOOGLE_CLOUD_PROJECT_ID;
const location = process.env.VERTEX_AI_LOCATION || 'us-central1';
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.DOTNET_API_BASE_URL;

console.log('🤖 RAG Chat Configuration:', {
  isProduction,
  useMockGemini,
  hasProjectId: !!projectId,
  hasCredentials: !!(process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
  location,
  apiBaseUrl
});

// Initialize Vertex AI (only in production mode)
let vertexAI: VertexAI | null = null;
let generativeModel: any = null;

if (!useMockGemini && projectId) {
  try {
    // Initialize Google Cloud credentials
    const authConfig: any = { project: projectId, location: location };
    
    if (process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      // For Vercel/cloud deployment - use service account key as JSON string
      const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
      authConfig.credentials = credentials;
      console.log('✅ Using service account key from environment');
    } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
      console.log('✅ Using service account key file:', process.env.GOOGLE_APPLICATION_CREDENTIALS ? '***' + process.env.GOOGLE_APPLICATION_CREDENTIALS.slice(-10) : 'Not Set');
    }

    vertexAI = new VertexAI(authConfig);

    generativeModel = vertexAI.getGenerativeModel({
      model: 'gemini-1.5-pro',
      generationConfig: {
        maxOutputTokens: 8192,
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      },
    });

    console.log('✅ Vertex AI initialized successfully');
  } catch (error) {
    console.error('❌ Failed to initialize Vertex AI:', error);
    console.log('🔄 Falling back to mock mode');
    // Note: We don't set useMockGemini here as it's const, but the error handling below will catch this
  }
}

// Fetch portfolio data with caching
async function fetchPortfolioData(): Promise<RagContext> {
  try {
    const baseUrl = apiBaseUrl?.replace(/\/api$/, '') || 'http://localhost:3000';
    
    const [skillsRes, projectsRes, blogPostsRes] = await Promise.all([
      fetch(`${baseUrl}/api/skills`, { 
        headers: { 'Content-Type': 'application/json' },
        next: { revalidate: 300 } // Cache for 5 minutes
      }),
      fetch(`${baseUrl}/api/projects`, { 
        headers: { 'Content-Type': 'application/json' },
        next: { revalidate: 300 }
      }),
      fetch(`${baseUrl}/api/blogposts`, { 
        headers: { 'Content-Type': 'application/json' },
        next: { revalidate: 300 }
      })
    ]);

    const [skills, projects, blogPosts] = await Promise.all([
      skillsRes.ok ? skillsRes.json() : [],
      projectsRes.ok ? projectsRes.json() : [],
      blogPostsRes.ok ? blogPostsRes.json() : []
    ]);

    console.log('📊 Portfolio data fetched:', {
      skills: skills.length,
      projects: projects.length,
      blogPosts: blogPosts.length
    });

    return { skills, projects, blogPosts };
  } catch (error) {
    console.error('❌ Error fetching portfolio data:', error);
    return { skills: [], projects: [], blogPosts: [] };
  }
}

// Build comprehensive RAG context prompt
function buildRagPrompt(query: string, context: RagContext): string {
  const skillsContext = context.skills.length > 0 
    ? `Skills (${context.skills.length} total): ${context.skills.map(skill => 
        `${skill.name} (Level: ${skill.level || skill.proficiencyLevel || 'N/A'})`
      ).slice(0, 15).join(', ')}`
    : 'Skills: Not available';

  const projectsContext = context.projects.length > 0
    ? `Projects (${context.projects.length} total): ${context.projects.map(project => 
        `"${project.title || project.name}" - ${project.description} (Technologies: ${
          Array.isArray(project.technologies) ? project.technologies.join(', ') : 'N/A'
        })`
      ).slice(0, 5).join('. ')}`
    : 'Projects: Not available';

  const blogContext = context.blogPosts.length > 0
    ? `Recent Blog Posts (${context.blogPosts.length} total): ${context.blogPosts.slice(0, 8).map(post => 
        `"${post.title}" - ${post.excerpt || post.description || 'No description'} (Categories: ${
          Array.isArray(post.categories) ? post.categories.join(', ') : 'N/A'
        })`
      ).join('. ')}`
    : 'Blog Posts: Not available';

  return `You are an AI assistant representing Menno Drescher's professional portfolio. Answer questions about his skills, projects, and experience based on the following context:

PROFESSIONAL CONTEXT:
${skillsContext}

PROJECT PORTFOLIO:
${projectsContext}

TECHNICAL WRITING & INSIGHTS:
${blogContext}

USER QUESTION: ${query}

Please provide a helpful, accurate response based on the portfolio data above. If the question cannot be answered with the available information, politely explain what information is available instead. Be specific and reference actual projects, skills, or blog posts when relevant.`.trim();
}

// Intelligent mock response system
async function getMockResponse(query: string, context: RagContext): Promise<GeminiResponse> {
  // Simulate API delay
  const delay = parseInt(process.env.MOCK_RESPONSE_DELAY || '1000');
  await new Promise(resolve => setTimeout(resolve, delay));

  const lowerQuery = query.toLowerCase();
  
  // Skills and technology queries
  if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('tech stack') || lowerQuery.includes('programming')) {
    const topSkills = context.skills.slice(0, 8).map(s => `${s.name} (${s.level || s.proficiencyLevel})`);
    const skillsByCategory = context.skills.reduce((acc: any, skill) => {
      const category = skill.category || 'General';
      if (!acc[category]) acc[category] = [];
      acc[category].push(skill.name);
      return acc;
    }, {});
    
    const categoryText = Object.entries(skillsByCategory).map(([cat, skills]) => 
      `${cat}: ${(skills as string[]).join(', ')}`
    ).join('. ');
    
    return {
      response: `Based on Menno's portfolio, his technical expertise spans ${context.skills.length} documented skills across multiple categories. Key technical skills include: ${topSkills.join(', ')}. His skills are organized by category: ${categoryText}. He has extensive experience in full-stack development with a focus on modern web technologies, cloud platforms, and enterprise-grade solutions.`,
      sources: ['Skills Database', 'Portfolio Analysis'],
      confidence: 0.95
    };
  }
  
  // Project and work queries
  if (lowerQuery.includes('project') || lowerQuery.includes('work') || lowerQuery.includes('built') || lowerQuery.includes('developed')) {
    const featuredProjects = context.projects.slice(0, 4);
    const projectDetails = featuredProjects.map(p => 
      `"${p.title || p.name}": ${p.description} (Technologies: ${Array.isArray(p.technologies) ? p.technologies.join(', ') : 'Various'})`
    ).join('. ');
    
    const techCounts = context.projects.reduce((acc: any, project) => {
      if (Array.isArray(project.technologies)) {
        project.technologies.forEach((tech: string) => {
          acc[tech] = (acc[tech] || 0) + 1;
        });
      }
      return acc;
    }, {});
    
    const topTechs = Object.entries(techCounts)
      .sort(([,a], [,b]) => (b as number) - (a as number))
      .slice(0, 5)
      .map(([tech, count]) => `${tech} (${count} projects)`)
      .join(', ');
    
    return {
      response: `Menno has developed ${context.projects.length} documented projects showcasing his expertise across various domains. Featured projects include: ${projectDetails}. His most frequently used technologies across projects are: ${topTechs}. These projects demonstrate his ability to build scalable, modern applications using cutting-edge technologies.`,
      sources: ['Project Portfolio', 'Technology Analysis'],
      confidence: 0.92
    };
  }
  
  // Blog and writing queries
  if (lowerQuery.includes('blog') || lowerQuery.includes('article') || lowerQuery.includes('writing') || lowerQuery.includes('content')) {
    const recentPosts = context.blogPosts.slice(0, 5);
    const postSummary = recentPosts.map(p => `"${p.title}"`).join(', ');
    
    const allCategories = context.blogPosts.reduce((acc: string[], post) => {
      if (Array.isArray(post.categories)) {
        acc.push(...post.categories);
      }
      return acc;
    }, []);
    
    const categoryCount = allCategories.reduce((acc: any, cat) => {
      acc[cat] = (acc[cat] || 0) + 1;
      return acc;
    }, {});
    
    const topCategories = Object.entries(categoryCount)
      .sort(([,a], [,b]) => (b as number) - (a as number))
      .slice(0, 5)
      .map(([cat, count]) => `${cat} (${count} posts)`)
      .join(', ');
    
    return {
      response: `Menno actively shares technical insights through his blog with ${context.blogPosts.length} published posts. Recent articles include: ${postSummary}. His writing covers diverse topics with focus areas including: ${topCategories}. His content demonstrates deep technical knowledge and practical experience in modern development practices.`,
      sources: ['Blog Posts', 'Content Analysis'],
      confidence: 0.88
    };
  }
  
  // Experience and background queries
  if (lowerQuery.includes('experience') || lowerQuery.includes('background') || lowerQuery.includes('career') || lowerQuery.includes('about')) {
    const projectCount = context.projects.length;
    const skillCount = context.skills.length;
    const blogCount = context.blogPosts.length;
    
    return {
      response: `Menno Drescher is an experienced full-stack developer with a comprehensive portfolio demonstrating expertise across ${skillCount} technical skills, ${projectCount} projects, and ${blogCount} technical blog posts. His experience spans modern web development, cloud technologies, AI integration, and enterprise software architecture. He has demonstrated proficiency in both frontend and backend development, with particular expertise in React, Next.js, .NET, and cloud platforms. His work showcases a strong focus on building scalable, maintainable applications with modern development practices.`,
      sources: ['Portfolio Overview', 'Professional Analysis'],
      confidence: 0.90
    };
  }
  
  // Contact and collaboration queries
  if (lowerQuery.includes('contact') || lowerQuery.includes('reach') || lowerQuery.includes('hire') || lowerQuery.includes('collaborate')) {
    return {
      response: `You can connect with Menno through his portfolio website or professional networks. Based on his portfolio, he's experienced in collaborative development and has worked on projects involving modern web technologies, AI integration, and enterprise solutions. His diverse skill set and project experience make him well-suited for full-stack development roles, technical consulting, and innovative project collaboration.`,
      sources: ['Portfolio Contact Information'],
      confidence: 0.85
    };
  }
  
  // Default comprehensive response
  return {
    response: `Menno Drescher's portfolio showcases a comprehensive technical background with ${context.skills.length} documented skills, ${context.projects.length} projects, and ${context.blogPosts.length} blog posts. His expertise spans full-stack development, cloud technologies, AI integration, and modern web frameworks. Feel free to ask specific questions about his technical skills, project experience, blog content, or professional background for more detailed information!`,
    sources: ['Portfolio Overview'],
    confidence: 0.85
  };
}

// Production Gemini API call
async function getGeminiResponse(query: string, context: RagContext): Promise<GeminiResponse> {
  if (!generativeModel) {
    console.log('⚠️ Gemini model not initialized, falling back to mock mode');
    return getMockResponse(query, context);
  }

  try {
    const prompt = buildRagPrompt(query, context);
    console.log('🤖 Sending prompt to Gemini Pro');

    const result = await generativeModel.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    console.log('✅ Gemini response received');

    return {
      response: text,
      sources: ['Portfolio Data', 'AI Analysis via Gemini Pro'],
      confidence: 0.9
    };
  } catch (error) {
    console.error('❌ Gemini API error:', error);
    console.log('🔄 Falling back to mock response due to Gemini error');
    return getMockResponse(query, context);
  }
}

// Main API handler
export async function POST(request: NextRequest) {
  try {
    const { message, conversation } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    console.log(`📨 RAG Chat Query: "${message}" (Mode: ${useMockGemini ? 'Mock' : 'Production'})`);

    // Fetch portfolio context
    const context = await fetchPortfolioData();

    // Validate that we have some portfolio data
    if (context.skills.length === 0 && context.projects.length === 0 && context.blogPosts.length === 0) {
      console.warn('⚠️ No portfolio data available');
    }

    // Get AI response (mock or production)
    const aiResponse = useMockGemini 
      ? await getMockResponse(message, context)
      : await getGeminiResponse(message, context);

    // Prepare response
    const response = {
      message: aiResponse.response,
      sources: aiResponse.sources || [],
      confidence: aiResponse.confidence || 0.8,
      timestamp: new Date().toISOString(),
      mode: useMockGemini ? 'mock' : 'production',
      context: {
        skillsCount: context.skills.length,
        projectsCount: context.projects.length,
        blogPostsCount: context.blogPosts.length
      }
    };

    console.log('✅ RAG response generated successfully');
    return NextResponse.json(response);

  } catch (error) {
    console.error('❌ RAG Chat API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Failed to process chat request',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

// Status endpoint
export async function GET() {
  return NextResponse.json({
    status: 'RAG Chat API is running',
    mode: useMockGemini ? 'mock' : 'production',
    configuration: {
      hasProjectId: !!projectId,
      hasCredentials: !!(process.env.GOOGLE_APPLICATION_CREDENTIALS || process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
      location,
      vertexAIInitialized: !!generativeModel,
      apiBaseUrl
    },
    timestamp: new Date().toISOString()
  });
}
