import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get token from request headers
    const token = request.headers.get('authorization')?.replace('token ', '');
    
    // Extract repo info from environment variables
    const repoFullName = process.env.NEXT_PUBLIC_GITHUB_REPO || 'mdresch/my-portfolio-menno';
    const [owner, repo] = repoFullName.split('/');
    
    // Default values
    const defaultInfo = {
      owner,
      repo,
      defaultBranch: 'master'
    };
    
    // If no token, return default values
    if (!token) {
      return NextResponse.json(defaultInfo);
    }
    
    // Fetch repository information
    const repoUrl = `https://api.github.com/repos/${owner}/${repo}`;
    const response = await fetch(repoUrl, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${token}`
      }
    });
    
    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`);
      return NextResponse.json(defaultInfo);
    }
    
    const repoData = await response.json();
    
    return NextResponse.json({
      owner,
      repo,
      defaultBranch: repoData.default_branch || 'master'
    });
    
  } catch (error) {
    console.error('Error fetching repository information:', error);
    return NextResponse.json({
      owner: 'mdresch',
      repo: 'my-portfolio-menno',
      defaultBranch: 'master'
    });
  }
}