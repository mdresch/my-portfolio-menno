import { NextResponse } from 'next/server';
import ModelClient, { isUnexpected } from '@azure-rest/ai-inference';
import { AzureKeyCredential } from '@azure/core-auth';

export async function POST(request) {
  try {
    const { message } = await request.json();
    // Determine token
    const token = process.env.REQUIREMENTS_AGENT_TOKEN || process.env.GITHUB_TOKEN;
    if (!token) {
      return NextResponse.json({ error: 'Missing API token' }, { status: 500 });
    }
    const endpoint = 'https://models.github.ai/inference';
    const model = 'openai/gpt-4.1';

    // Initialize Azure REST AI-inference client
    const client = ModelClient(endpoint, new AzureKeyCredential(token));
    const response = await client.path('/chat/completions').post({
      body: {
        model,
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: message }
        ],
        temperature: 1.0,
        top_p: 1.0
      }
    });

    if (isUnexpected(response)) {
      console.error('Inference API error:', response.body.error);
      return NextResponse.json({ error: response.body.error }, { status: response.status });
    }
    const reply = response.body.choices[0].message.content;
    return NextResponse.json({ reply });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
  }
}
