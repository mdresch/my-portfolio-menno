import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";
import util from "util";

// Convert exec to a promise-based function
const execAsync = util.promisify(exec);

export async function POST(request: NextRequest) {
  try {
    // Check for authorization (add proper auth in production)
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const token = authHeader.substring(7);
    // In production, validate this token properly
    if (token !== process.env.REFRESH_RAG_TOKEN) {
      return NextResponse.json({ error: "Invalid token" }, { status: 403 });
    }
    
    // Execute content extraction scripts
    const projectRoot = process.cwd();
    
    console.log("Starting RAG content extraction...");
    
    // For production, you might want to use a more robust approach than exec
    const { stdout, stderr } = await execAsync("npm run extract-all-content", { 
      cwd: projectRoot 
    });
    
    console.log("Content extraction completed");
    console.log("STDOUT:", stdout);
    
    if (stderr) {
      console.warn("STDERR:", stderr);
    }
    
    return NextResponse.json({ 
      success: true, 
      message: "RAG content refreshed successfully",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error("Error refreshing RAG content:", error);
    return NextResponse.json({ 
      error: "Failed to refresh RAG content",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
