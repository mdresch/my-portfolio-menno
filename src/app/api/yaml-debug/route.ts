import { NextRequest, NextResponse } from "next/server";
import matter from "gray-matter";

export async function POST(request: NextRequest) {
  try {
    const { frontmatter } = await request.json();
    
    if (!frontmatter) {
      return NextResponse.json({ 
        error: "Missing frontmatter parameter" 
      }, { status: 400 });
    }
    
    // Attempt to parse the YAML
    try {
      const result = matter(`---\n${frontmatter}\n---\nTest content`);
      return NextResponse.json({
        success: true,
        parsed: result.data
      });
    } catch (error) {
      return NextResponse.json({
        success: false,
        error: error.message,
        suggestion: suggestFix(frontmatter, error.message)
      });
    }
  } catch (error) {
    return NextResponse.json({
      error: "Server error while processing YAML"
    }, { status: 500 });
  }
}

function suggestFix(yaml: string, errorMsg: string) {
  // For the specific error in the prompt
  if (errorMsg.includes("incomplete explicit mapping pair")) {
    if (errorMsg.includes("considerations and awareness points:")) {
      return `It looks like there's an issue with a field called 'considerations and awareness points:'. 
      
Possible fixes:
1. Make sure there's a space after the colon and before the value
2. If it's a multi-line value, indent the following lines
3. If there's no value, add a space and then a []

Example fix:
considerations and awareness points: []

Or for multi-line:
considerations and awareness points: |
  First point here
  Second point here`;
    }
    
    return `You have a YAML field with an incomplete mapping. This typically means:
1. You have a key with a colon but no value
2. Your multi-line value isn't properly indented
3. You have special characters in your value that need to be quoted`;
  }
  
  return "Check your YAML syntax and make sure all values are properly formatted.";
}