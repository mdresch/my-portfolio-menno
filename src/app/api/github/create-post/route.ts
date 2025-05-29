import { NextRequest, NextResponse } from "next/server";

// Helper function to detect default branch (same as above)
async function getDefaultBranch(owner: string, repo: string, token: string) {
  const repoUrl = `https://api.github.com/repos/${owner}/${repo}`;
  
  const response = await fetch(repoUrl, {
    headers: {
      "Accept": "application/vnd.github.v3+json",
      "Authorization": `token ${token}`
    }
  });
  
  if (!response.ok) {
    throw new Error(`Failed to get repository info: ${response.status}`);
  }
  
  const repoInfo = await response.json();
  return repoInfo.default_branch;
}

export async function POST(request: NextRequest) {
  try {
    // Get token from header for better security
    const token = request.headers.get("X-GitHub-Token");
    const { content, path, message } = await request.json();
    
    if (!token || !content || !path) {
      return NextResponse.json({ 
        error: "Missing required parameters" 
      }, { status: 400 });
    }
    
    // GitHub API details
    const owner = "mdresch"; // Your GitHub username
    const repo = "my-portfolio-menno"; // Your repository name
    
    // Get the default branch name dynamically
    const defaultBranch = await getDefaultBranch(owner, repo, token);
    console.log(`Using repository default branch: ${defaultBranch}`);
    
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    
    // Encode content to base64
    const contentBase64 = Buffer.from(content).toString("base64");
    
    // Make request to GitHub API
    const response = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `token ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message,
        content: contentBase64,
        branch: defaultBranch // Use detected branch name
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("GitHub API error:", {
        status: response.status,
        message: errorData.message,
        errors: errorData.errors,
        documentationUrl: errorData.documentation_url
      });
      
      let errorMessage = errorData.message || `Error: ${response.status}`;
      
      // Add more context for specific error cases
      if (errorData.message?.includes("branch not found")) {
        errorMessage = `Branch not found. Detected branch name '${defaultBranch}'. Please check your repository settings.`;
      } else if (errorData.message?.includes("Not Found")) {
        errorMessage = `Repository not found. Please verify owner (${owner}) and repo name (${repo}).`;
      } else if (errorData.message?.includes("Bad credentials")) {
        errorMessage = "Invalid GitHub token. Please check your personal access token.";
      }
      
      return NextResponse.json({
        error: errorMessage,
        details: errorData
      }, { status: response.status });
    }
    
    return NextResponse.json({
      success: true,
      data: {
        path: data.content.path,
        url: data.content.html_url
      }
    });
    
  } catch (error) {
    console.error("Error creating post via GitHub:", error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : "An unknown error occurred"
    }, { status: 500 });
  }
}