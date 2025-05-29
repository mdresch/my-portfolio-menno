import { NextRequest, NextResponse } from 'next/server';
import { getRequirementsFromGithubAI } from './github-openai';

/**
 * POST /api/requirements-agent
 * Request body: { businessProblem: string }
 * Response: { roles: Array<{ role: string, needs: string[], processes?: string[] }> }
 */
export async function POST(req: NextRequest) {
  try {
    const { businessProblem, technologyStack } = await req.json();
    if (!businessProblem || typeof businessProblem !== 'string') {
      return NextResponse.json({ error: 'Missing or invalid businessProblem' }, { status: 400 });
    }
    if (
      typeof technologyStack !== 'undefined' &&
      (!Array.isArray(technologyStack) || !technologyStack.every((t) => typeof t === 'string'))
    ) {
      return NextResponse.json({ error: 'Invalid technologyStack: must be an array of strings' }, { status: 400 });
    }
    // Use the GitHub OpenAI model (mocked or real)
    const roles = await getRequirementsFromGithubAI(businessProblem, { includeProcesses: true, technologyStack });
    return NextResponse.json({ roles });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
