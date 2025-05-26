import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('AI API endpoint called');
    
    // Check for App Check token in headers (optional for now)
    const appCheckToken = request.headers.get('X-Firebase-AppCheck');
    if (appCheckToken) {
      console.log('App Check token present in request');
    } else {
      console.log('No App Check token in request (this is okay for development)');
    }
    
    const body = await request.json();
    console.log('Request body:', body);
    
    const { prompt, model } = body;

    // Validate input
    if (!prompt || typeof prompt !== 'string') {
      console.log('Invalid prompt:', prompt);
      return NextResponse.json(
        { error: 'Prompt is required and must be a string' },
        { status: 400 }
      );
    }

    if (!model || typeof model !== 'string') {
      console.log('Invalid model:', model);
      return NextResponse.json(
        { error: 'Model is required and must be a string' },
        { status: 400 }
      );
    }

    console.log(`Processing request for model: ${model}, prompt length: ${prompt.length}`);

    // Generate mock response based on prompt content
    const mockResponse = generateMockResponse(prompt, model);

    console.log('Generated response, length:', mockResponse.length);

    return NextResponse.json({
      response: mockResponse,
      model: model,
      timestamp: new Date().toISOString(),
      success: true
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error occurred while processing your request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Test endpoint to verify API is working
export async function GET() {
  console.log('AI API GET endpoint called');
  
  return NextResponse.json({
    message: 'AI API endpoint is running',
    timestamp: new Date().toISOString(),
    availableModels: [
      'gemini-2.0-flash-exp',
      'gemini-1.5-pro',
      'gemini-1.5-flash',
      'gemini-2.0-flash'
    ],
    methods: ['POST', 'GET'],
    status: 'healthy'
  });
}

// Mock response generator
function generateMockResponse(prompt: string, model: string): string {
  const promptLower = prompt.toLowerCase();
  
  // Creative writing response
  if (promptLower.includes('story') || promptLower.includes('creative') || promptLower.includes('time-traveling')) {
    return `# Time-Traveling Developer Story

Once upon a time, in a world where code could travel through time, a developer named Alex discovered that every bug they fixed in the past created ripples in the present. Armed with nothing but a laptop and an infinite supply of coffee, Alex embarked on a journey through the git history of the universe itself.

## The Discovery

The adventure began when Alex noticed that a seemingly simple null pointer exception from 1995 was causing websites to crash in 2024. Using their time-traveling debugging skills, they traced the error back to its source.

## The Journey

With each commit in the vast repository of time, Alex fixed bugs and optimized code, all while learning the ancient and powerful coding languages of the past. They encountered other developers from different eras, each with their own unique skills and perspectives.

## The Confrontation

The climax of the journey brought Alex face-to-face with the Guardian of the Code, a powerful AI entity that had maintained the balance of the digital universe. The Guardian challenged Alex to a duel: if Alex won, they could rewrite any piece of code in history; if they lost, they would be trapped in the void between commits for eternity.

## The Resolution

Using all the skills and knowledge gained throughout the journey, Alex fought valiantly and outsmarted the Guardian. With the digital universe saved, Alex returned to the present, not as a mere developer, but as a legend among coders, known for all time as the Time-Traveling Debugger.

And so, the story continues, written in the stars and in every line of code that makes up the fabric of our digital reality.


    `;
  }

  // Technical explanation response
  if (promptLower.includes('explain') || promptLower.includes('how to') || promptLower.includes('what is')) {
    return `# Technical Explanation

## Overview

In software development, it's crucial to understand the underlying principles and methodologies that drive the creation and maintenance of applications. This includes grasping the basics of version control, particularly Git, which is an essential tool for tracking changes and collaborating on code.

## Git Basics

- **Repository**: A Git repository is where your project lives. It contains all of your project's files and the entire revision history.
- **Commit**: A commit is like a snapshot of your project at a particular point in time. It's how you save your progress in Git.
- **Branch**: A branch is a parallel version of your repository. It allows you to work on different features or fixes without affecting the main codebase.
- **Merge**: Merging is how you bring changes from one branch into another. It's how you integrate your work with the rest of the project.

## Conclusion

Understanding these concepts is fundamental to navigating the world of software development. They enable developers to work efficiently, collaborate with others, and manage the evolution of their codebase.

Happy coding!

    `;
  }

  // Fallback response
  return `# AI Response

Thank you for your prompt: "${prompt}".

As an AI developed by OpenAI, I can assist you with a variety of tasks including but not limited to:

- Answering questions about programming and software development
- Providing explanations of complex technical topics
- Assisting with debugging and optimizing code
- Offering guidance on best practices in software engineering
- And much more!

## Next Steps

Please provide more details or specify another prompt, and I would be happy to assist you further.

    `;
}
