import { NextResponse } from 'next/server';
import ModelClient, { isUnexpected } from '@azure-rest/ai-inference';
import { AzureKeyCredential } from '@azure/core-auth';

export async function POST(request) {
  try {
    const body = await request.text();
    if (!body || body.trim() === '') {
      return NextResponse.json({ error: 'Request body is required' }, { status: 400 });
    }
    
    const { messages } = JSON.parse(body);
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'messages array is required' }, { status: 400 });
    }
    
    // Determine token
    const token = process.env.REQUIREMENTS_AGENT_TOKEN || process.env.GITHUB_TOKEN;
    if (!token) {
      return NextResponse.json({ error: 'Missing API token' }, { status: 500 });
    }
    
    const endpoint = 'https://models.github.ai/inference';
    const model = 'openai/gpt-4.1';

    // Initialize Azure REST AI-inference client
    const client = ModelClient(endpoint, new AzureKeyCredential(token));
    
    // Add system message if not present
    const systemMessage = { role: 'system', content: 'You are a helpful assistant for a portfolio website. You can help answer questions about the portfolio owner, their projects, skills, and general inquiries.' };
    const formattedMessages = messages[0]?.role === 'system' ? messages : [systemMessage, ...messages];
    
    const response = await client.path('/chat/completions').post({
      body: {
        model,
        messages: formattedMessages,
        temperature: 1.0,
        top_p: 1.0,
        max_tokens: 1000
      }
    });

    if (isUnexpected(response)) {
      console.error('Inference API error:', response.body.error);
      return NextResponse.json({ error: response.body.error }, { status: response.status });
    }
    
    const message = response.body.choices[0].message.content;
    return NextResponse.json({ message });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
  }
}
