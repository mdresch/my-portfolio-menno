import { NextRequest, NextResponse } from "next/server";
import { VertexAI } from "@google-cloud/vertexai";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.DOTNET_API_BASE_URL;
const vertexAI = new VertexAI({
  project: process.env.VERTEX_AI_PROJECT_ID || "my-portfolio-menno",
  location: process.env.VERTEX_AI_LOCATION || "us-central1",
});
const model = vertexAI.getGenerativeModel({ model: "gemini-pro" });

function buildPrompt({ skills, blogPosts, projects }, userQuestion: string) {
  const skillsText = skills.map((s: any) => s.name).join(", ");
  const blogPostsText = blogPosts.map((p: any) => `- ${p.title}: ${p.summary || p.excerpt || ""}`).join("\n");
  const projectsText = projects.map((p: any) => `- ${p.name}: ${p.description || ""}`).join("\n");

  return `
You are an expert assistant answering questions about Menno's portfolio.

Portfolio Data:
Skills: ${skillsText}

Blog Posts:
${blogPostsText}

Projects:
${projectsText}

User Question: ${userQuestion}

Answer as helpfully and concisely as possible, referencing specific projects, blog posts, or skills if relevant.
  `.trim();
}

export async function POST(req: NextRequest) {
  try {
    const { message: userQuestion } = await req.json();

    // Check required environment variables
    const missingVars = [];
    if (!process.env.NEXT_PUBLIC_API_BASE_URL && !process.env.DOTNET_API_BASE_URL) missingVars.push('NEXT_PUBLIC_API_BASE_URL or DOTNET_API_BASE_URL');
    if (!process.env.VERTEX_AI_PROJECT_ID) missingVars.push('VERTEX_AI_PROJECT_ID');
    if (!process.env.VERTEX_AI_LOCATION) missingVars.push('VERTEX_AI_LOCATION');
    if (missingVars.length > 0) {
      return NextResponse.json({
        error: 'Missing required environment variables',
        missing: missingVars
      }, { status: 500 });
    }

    // Fetch portfolio data from .NET API
    const [skillsRes, blogPostsRes, projectsRes] = await Promise.all([
      fetch(`${apiBaseUrl}/api/skills`),
      fetch(`${apiBaseUrl}/api/blogposts`),
      fetch(`${apiBaseUrl}/api/projects`)
    ]);
    if (!skillsRes.ok || !blogPostsRes.ok || !projectsRes.ok) {
      return NextResponse.json({
        error: "Failed to fetch portfolio data",
        details: {
          skills: skillsRes.status,
          blogPosts: blogPostsRes.status,
          projects: projectsRes.status
        }
      }, { status: 500 });
    }
    const [skills, blogPosts, projects] = await Promise.all([
      skillsRes.json(),
      blogPostsRes.json(),
      projectsRes.json()
    ]);

    // Build prompt and call Gemini
    const prompt = buildPrompt({ skills, blogPosts, projects }, userQuestion);

    let aiResponse: string;
    try {
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2, maxOutputTokens: 512 },
      });
      aiResponse = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No answer generated.";
    } catch (modelErr: any) {
      return NextResponse.json({
        error: "VertexAI model call failed",
        details: modelErr?.message || modelErr,
        fullError: typeof modelErr === 'object' ? JSON.stringify(modelErr, Object.getOwnPropertyNames(modelErr)) : String(modelErr)
      }, { status: 500 });
    }

    return NextResponse.json({ response: aiResponse });
  } catch (err: any) {
    return NextResponse.json({
      error: err.message || "Unknown error",
      fullError: typeof err === 'object' ? JSON.stringify(err, Object.getOwnPropertyNames(err)) : String(err)
    }, { status: 500 });
  }
}
