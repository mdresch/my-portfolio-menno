import { BlogPost } from "./markdown";

interface HashnodeResponse {
  data?: {
    createPublication?: {
      post?: {
        slug: string;
        url: string;
      }
    }
  };
  errors?: Array<{message: string}>;
}

export async function crossPostToHashnode(post: BlogPost, personalToken: string): Promise<{success: boolean, url?: string, error?: string}> {
  try {
    // Hashnode GraphQL API endpoint
    const endpoint = "https://api.hashnode.com/";
    
    // Prepare markdown content - fix image URLs to be absolute
    const content = post.content.replace(
      /!\[(.*?)\]\((\/.*?)\)/g, 
      `![$1](${process.env.NEXT_PUBLIC_BASE_URL}$2)`
    );
    
    // Convert HTML back to markdown if needed
    // For a proper implementation, you might want to use an HTML to Markdown converter
    
    // GraphQL mutation to create a post
    const mutation = `
      mutation createPublication($input: CreatePublicationInput!) {
        createPublication(input: $input) {
          post {
            slug
            url
          }
        }
      }
    `;
    
    // Variables for the mutation
    const variables = {
      input: {
        title: post.title,
        contentMarkdown: content,
        tags: post.categories.map(category => ({
          slug: category.toLowerCase().replace(/\s+/g, "-"),
          name: category
        })),
        isRepublished: {
          originalArticleURL: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.slug}`
        }
      }
    };
    
    // Make the API request
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": personalToken
      },
      body: JSON.stringify({
        query: mutation,
        variables
      })
    });
    
    const result: HashnodeResponse = await response.json();
    
    if (result.errors) {
      return {
        success: false,
        error: result.errors[0].message
      };
    }
    
    if (result.data?.createPublication?.post) {
      return {
        success: true,
        url: result.data.createPublication.post.url
      };
    }
    
    return {
      success: false,
      error: "Unknown error occurred"
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unknown error occurred"
    };
  }
}