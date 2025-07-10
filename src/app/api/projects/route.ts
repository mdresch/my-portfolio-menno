import { NextRequest, NextResponse } from "next/server";
import { readFile, readdir } from "fs/promises";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/project");

export async function GET(request: NextRequest) {
  try {
    // Read all markdown files from the projects directory
    const fileNames = await readdir(projectsDirectory);
    const projectFiles = fileNames.filter(name => name.endsWith('.md'));
    
    const projects = await Promise.all(
      projectFiles.map(async (fileName) => {
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = await readFile(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        const slug = fileName.replace(/\.md$/, '');
        
        return {
          id: slug,
          name: data.title || slug,
          title: data.title || slug,
          description: data.description || '',
          technologies: data.technologies || [],
          link: data.link || '',
          datePublished: data.datePublished || '',
          category: data.category || '',
          screenshots: data.screenshots || [],
          outcomes: data.outcomes || [],
          challenges: data.challenges || [],
          caseStudy: content || '',
          slug
        };
      })
    );

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error loading projects:", error);
    return NextResponse.json(
      { error: "Failed to load projects" },
      { status: 500 }
    );
  }
}
