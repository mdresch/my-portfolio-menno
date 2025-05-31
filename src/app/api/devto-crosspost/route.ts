import { NextRequest, NextResponse } from "next/server";

const DEVTO_API_URL = "https://dev.to/api/articles";

export async function POST(request: NextRequest) {
  try {
    // Note: DEV.to expects 'apiKey' in the body based on your frontend code
    const { post, token: apiKey } = await request.json();

    if (!post || !apiKey) {
      return NextResponse.json({
        error: "Post data and DEV.to API key are required"
      }, { status: 400 });
    }

    // Construct the payload for DEV.to API
    // Required fields: title, body_markdown
    const devtoPayload = {
      article: {
        title: post.title,
        body_markdown: post.content, // Assuming post.content is markdown
        published: true, // Set to true to publish immediately, false for draft
        tags: post.categories?.map(tag => tag.toLowerCase().replace(/[^a-z0-9]/g, "")) || [], // DEV.to tags: letters and numbers only
        canonical_url: process.env.SITE_URL ? `${process.env.SITE_URL}/blog/${post.slug}` : undefined, // Set canonical URL
        // Add other optional fields if needed: series, main_image, etc.
      }
    };

    console.log("Sending request to DEV.to with payload:", JSON.stringify(devtoPayload, null, 2));

    // Make the API request to DEV.to
    const response = await fetch(DEVTO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey // DEV.to uses 'api-key' header for authentication
      },
      body: JSON.stringify(devtoPayload)
    });

    const responseData = await response.json();
    console.log("DEV.to API response:", JSON.stringify(responseData, null, 2));

    if (!response.ok) {
      // DEV.to often returns error details in the response body
      const errorMessage = responseData.error || `DEV.to API returned ${response.status}`;
      return NextResponse.json({
        error: errorMessage,
        details: responseData
      }, { status: response.status });
    }

    // Return success response with post info
    return NextResponse.json({
      success: true,
      message: "Post successfully published to DEV.to",
      url: responseData.url,
      postId: responseData.id,
      slug: responseData.slug
    });

  } catch (error) {
    console.error("Error in DEV.to cross-post API:", error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : "Unknown error occurred"
    }, { status: 500 });
  }
}