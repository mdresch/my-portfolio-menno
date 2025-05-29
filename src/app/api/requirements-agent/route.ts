import { NextRequest, NextResponse } from 'next/server';
import { getRequirementsFromGithubAI } from './github-openai';

/**
 * POST /api/requirements-agent
 * Request body: { businessProblem: string, requestStrategicSections?: boolean, ... }
 * Response: { roles: Array<{ role: string, needs: string[], processes?: string[] }> } | { vision, mission, coreValues, purpose }
 */
export async function POST(req: NextRequest) {
  try {
    const { businessProblem, technologyStack, requestStrategicSections, contextBundle, instructions, requestBusinessProblem } = await req.json();
    if (requestBusinessProblem) {
      console.log('[API] requestBusinessProblem received. instructions:', instructions);
      // Generate business problem statement only
      // Use instructions if provided, else default prompt
      const prompt = instructions || `You are an expert requirements analyst. Given the technology stack and project context, generate a concise, specific, and actionable business problem statement for a modern developer portfolio platform. Avoid generic or vague language. Use details from the context. Return only the business problem statement as a plain string.`;
      const stackText = technologyStack && technologyStack.length > 0 ? `\nTechnology stack: ${technologyStack.join(', ')}` : '';
      const contextText = contextBundle ? `\nContext: ${contextBundle}` : '';
      const fullPrompt = `${prompt}${stackText}${contextText}`;
      const result = await getRequirementsFromGithubAI('', { instructions: fullPrompt });
      console.log('[API] LLM result for business problem:', result);
      // Add clear MOCK DATA reference if mock is used
      if (typeof result === 'string' && result.trim().toLowerCase().startsWith('mock:')) {
        return new NextResponse(`[MOCK DATA] ${result.replace(/^mock:/i, '').trim()}`, { status: 200, headers: { 'Content-Type': 'text/plain' } });
      } else if (typeof result === 'string') {
        return new NextResponse(result, { status: 200, headers: { 'Content-Type': 'text/plain' } });
      } else if (result && typeof result.businessProblem === 'string') {
        return new NextResponse(result.businessProblem, { status: 200, headers: { 'Content-Type': 'text/plain' } });
      } else {
        return new NextResponse('[MOCK DATA] Could not generate business problem statement.', { status: 200, headers: { 'Content-Type': 'text/plain' } });
      }
    }
    if (!requestBusinessProblem && (!businessProblem || typeof businessProblem !== 'string')) {
      return NextResponse.json({ error: 'Missing or invalid businessProblem' }, { status: 400 });
    }
    if (
      typeof technologyStack !== 'undefined' &&
      (!Array.isArray(technologyStack) || !technologyStack.every((t) => typeof t === 'string'))
    ) {
      return NextResponse.json({ error: 'Invalid technologyStack: must be an array of strings' }, { status: 400 });
    }
    if (requestStrategicSections) {
      // Strategic sections branch
      const strategicSections = await getRequirementsFromGithubAI(businessProblem, {
        requestStrategicSections: true,
        technologyStack,
        contextBundle
      });
      // Add clear MOCK DATA reference if mock is used
      if (strategicSections && typeof strategicSections === 'object' && strategicSections.vision && strategicSections.vision.toLowerCase().includes('mock')) {
        return NextResponse.json({ ...strategicSections, mock: true, note: '[MOCK DATA] This is mock output, not LLM generated.' });
      }
      return NextResponse.json(strategicSections);
    } else {
      // Roles/needs/processes branch
      const roles = await getRequirementsFromGithubAI(businessProblem, {
        includeProcesses: true,
        technologyStack,
        contextBundle
      });
      // Add clear MOCK DATA reference if mock is used
      if (Array.isArray(roles) && roles.length && roles[0].role && roles[0].role.toLowerCase().includes('mock')) {
        return NextResponse.json({ roles, mock: true, note: '[MOCK DATA] This is mock output, not LLM generated.' });
      }
      return NextResponse.json({ roles });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
