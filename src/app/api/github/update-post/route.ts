import { NextRequest, NextResponse } from "next/server";

// Helper function to detect default branch
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
    const { token, content, oldPath, newPath, message } = await request.json();
    
    if (!token || !content || !oldPath) {
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
    
    // First, we need to get the current file SHA
    const getFileUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${oldPath}`;
    
    const getFileResponse = await fetch(getFileUrl, {
      headers: {
        "Accept": "application/vnd.github.v3+json",
        "Authorization": `token ${token}`
      }
    });
    
    if (!getFileResponse.ok) {
      const errorData = await getFileResponse.json();
      console.error("GitHub API error:", {
        status: getFileResponse.status,
        message: errorData.message,
        errors: errorData.errors,
        documentationUrl: errorData.documentation_url
      });
      
      let errorMessage = errorData.message || `Error: ${getFileResponse.status}`;
      
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
      }, { status: getFileResponse.status });
    }
    
    const fileData = await getFileResponse.json();
    const fileSha = fileData.sha;
    
    // Encode content to base64
    const contentBase64 = Buffer.from(content).toString("base64");
    
    // Determine if we need to update in place or rename (move) the file
    const isFileBeingRenamed = oldPath !== newPath;
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${isFileBeingRenamed ? newPath : oldPath}`;
    
    // If we're renaming, delete the old file first
    if (isFileBeingRenamed) {
      const deleteResponse = await fetch(getFileUrl, {
        method: "DELETE",
        headers: {
          "Accept": "application/vnd.github.v3+json",
          "Authorization": `token ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: `Delete ${oldPath} as part of rename operation`,
          sha: fileSha,
          branch: defaultBranch // Use detected branch name instead of 'main'
        })
      });
      
      if (!deleteResponse.ok) {
        const errorData = await deleteResponse.json();
        console.error("GitHub API error:", {
          status: deleteResponse.status,
          message: errorData.message,
          errors: errorData.errors,
          documentationUrl: errorData.documentation_url
        });
        
        let errorMessage = errorData.message || `Error: ${deleteResponse.status}`;
        
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
        }, { status: deleteResponse.status });
      }
    }
    
    // Create the new file or update existing one
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
        sha: isFileBeingRenamed ? undefined : fileSha, // Only provide SHA if updating in place
        branch: defaultBranch // Use detected branch name instead of 'main'
      })
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error("GitHub API error:", {
        status: response.status,
        message: data.message,
        errors: data.errors,
        documentationUrl: data.documentation_url
      });
      
      let errorMessage = data.message || `Error: ${response.status}`;
      
      // Add more context for specific error cases
      if (data.message?.includes("branch not found")) {
        errorMessage = `Branch not found. Detected branch name '${defaultBranch}'. Please check your repository settings.`;
      } else if (data.message?.includes("Not Found")) {
        errorMessage = `Repository not found. Please verify owner (${owner}) and repo name (${repo}).`;
      } else if (data.message?.includes("Bad credentials")) {
        errorMessage = "Invalid GitHub token. Please check your personal access token.";
      }
      
      return NextResponse.json({
        error: errorMessage,
        details: data
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
    console.error("Error updating post via GitHub:", error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : "An unknown error occurred"
    }, { status: 500 });
  }
}