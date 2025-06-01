import { NextRequest, NextResponse } from "next/server";
import { VertexAI } from "@google-cloud/vertexai";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.DOTNET_API_BASE_URL;
const vertexAI = new VertexAI({
  project: process.env.VERTEX_AI_PROJECT_ID,
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

    // Fetch portfolio data from .NET API
    const [skillsRes, blogPostsRes, projectsRes] = await Promise.all([
      fetch(`${apiBaseUrl}/api/skills`),
      fetch(`${apiBaseUrl}/api/blogposts`),
      fetch(`${apiBaseUrl}/api/projects`)
    ]);
    if (!skillsRes.ok || !blogPostsRes.ok || !projectsRes.ok) {
      return NextResponse.json({ error: "Failed to fetch portfolio data" }, { status: 500 });
    }
    const [skills, blogPosts, projects] = await Promise.all([
      skillsRes.json(),
      blogPostsRes.json(),
      projectsRes.json()
    ]);

    // Build prompt and call Gemini
    const prompt = buildPrompt({ skills, blogPosts, projects }, userQuestion);

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.2, maxOutputTokens: 512 },
    });

    const aiResponse = result?.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No answer generated.";

    return NextResponse.json({ response: aiResponse });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Unknown error" }, { status: 500 });
  }
}
