import { NextRequest, NextResponse } from 'next/server';

// Hashnode's current GraphQL API endpoint
const HASHNODE_API_URL = 'https://gql.hashnode.com';

export async function POST(request: NextRequest) {
  try {
    const { post, token } = await request.json();

    if (!post || !token) {
      return NextResponse.json({ 
        error: 'Post data and token are required' 
      }, { status: 400 });
    }

    // Update the tag formatting:
    const tags = post.categories?.map(category => ({
      name: category, // Keep original name
      slug: category.toLowerCase()
        .replace(/\s+/g, '-')    // Replace spaces with hyphens
        .replace(/\./g, '-')     // Replace periods with hyphens
        .replace(/[^a-z0-9-]/g, '') // Remove any other non-allowed characters
    })).slice(0, 5) || []; // Hashnode only allows 5 tags max

    // Clean up the markdown content for Hashnode
    let contentMarkdown = post.content;

    // If the content is HTML (happens with some posts), do basic conversion to markdown
    if (contentMarkdown.includes('<h1>') || contentMarkdown.includes('<p>')) {
      contentMarkdown = contentMarkdown
        .replace(/<h1>(.*?)<\/h1>/g, '# $1\n\n')
        .replace(/<h2>(.*?)<\/h2>/g, '## $1\n\n')
        .replace(/<h3>(.*?)<\/h3>/g, '### $1\n\n')
        .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
        .replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)')
        .replace(/<code>(.*?)<\/code>/g, '`$1`')
        .replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, '```\n$1\n```\n')
        .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
        .replace(/<em>(.*?)<\/em>/g, '*$1*')
        .replace(/<ul>([\s\S]*?)<\/ul>/g, (match) => {
          return match
            .replace(/<li>(.*?)<\/li>/g, '- $1\n')
            .replace(/<ul>|<\/ul>/g, '');
        })
        .replace(/<ol>([\s\S]*?)<\/ol>/g, (match, index) => {
          let num = 1;
          return match
            .replace(/<li>(.*?)<\/li>/g, () => `${num++}. $1\n`)
            .replace(/<ol>|<\/ol>/g, '');
        });
    }

    // Step 1: Create a draft first with updated query structure
    // Note: Removed 'success' field as it's no longer available
    const createDraftQuery = {
      query: `
        mutation CreateDraft($input: CreateDraftInput!) {
          createDraft(input: $input) {
            draft {
              id
              title
              slug
            }
          }
        }
      `,
      variables: {
        input: {
          title: post.title,
          contentMarkdown: contentMarkdown,
          tags: tags,
          subtitle: post.excerpt || undefined,
          originalArticleURL: process.env.SITE_URL + '/blog/' + post.slug,
          publicationId: process.env.HASHNODE_PUBLICATION_ID || undefined
        }
      }
    };

    console.log('Creating draft on Hashnode with data:', {
      title: post.title,
      tagsCount: tags.length,
      publicationId: process.env.HASHNODE_PUBLICATION_ID || 'not set'
    });

    // Make the API request to create draft
    const draftResponse = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(createDraftQuery)
    });

    const draftData = await draftResponse.json();
    console.log('Hashnode create draft response:', JSON.stringify(draftData, null, 2));

    // Check for GraphQL errors in draft creation
    if (draftData.errors) {
      const errorMessage = draftData.errors.map(e => e.message).join(', ');
      return NextResponse.json({
        error: `GraphQL Error: ${errorMessage}`,
        details: draftData.errors
      }, { status: 400 });
    }

    // Check if we have draft data
    if (!draftData.data?.createDraft?.draft?.id) {
      return NextResponse.json({
        error: 'Failed to create draft on Hashnode: No draft ID returned',
        details: draftData
      }, { status: 400 });
    }

    const draftId = draftData.data.createDraft.draft.id;
    
    // Step 2: Publish the draft with the CORRECT input structure
    const publicationId = process.env.HASHNODE_PUBLICATION_ID || undefined;

    // Define the input object based on Hashnode's expected structure
    const publishInput = {
      draftId: draftId,
      // publicationId: publicationId, // REMOVED - Not part of PublishDraftInput
    };

    // Update the GraphQL query to use the input object
    const publishQuery = {
      query: `
        mutation PublishDraft($input: PublishDraftInput!) {
          publishDraft(input: $input) {
            post {
              id
              title
              slug
              url
            }
          }
        }
      `,
      variables: {
        input: publishInput // Pass the input object here
      }
    };

    console.log('Publishing draft with input:', JSON.stringify(publishInput, null, 2));

    // Make the API request to publish the draft
    const publishResponse = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify(publishQuery)
    });

    const publishData = await publishResponse.json();
    console.log('Hashnode publish response:', JSON.stringify(publishData, null, 2));

    // Check for GraphQL errors in publishing
    if (publishData.errors) {
      const errorMessage = publishData.errors.map(e => e.message).join(', ');
      return NextResponse.json({
        error: `GraphQL Error when publishing: ${errorMessage}`,
        details: publishData.errors,
        draftId: draftId // Return draft ID so user can manually publish
      }, { status: 400 });
    }

    // Check if we have post data
    if (!publishData.data?.publishDraft?.post) {
      // Check if the response indicates success even without post data (unlikely but possible)
      // Adapt this check based on actual Hashnode API behavior if needed
      return NextResponse.json({
        error: 'Draft created but failed to publish on Hashnode: No post data returned',
        draftId: draftId,
        details: publishData
      }, { status: 400 });
    }

    const publishedPost = publishData.data.publishDraft.post;

    // Return success with post info
    return NextResponse.json({
      success: true,
      message: 'Post successfully published to Hashnode',
      url: publishedPost.url || `https://hashnode.com/draft/${draftId}`, // Fallback URL
      postId: publishedPost.id,
      slug: publishedPost.slug
    });

  } catch (error) {
    console.error('Error in Hashnode cross-post API:', error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }, { status: 500 });
  }
}