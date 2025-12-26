import { NextResponse } from 'next/server';

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
      // Return a helpful fallback response instead of an error
      const userMessage = messages[messages.length - 1]?.content || '';
      const fallbackResponse = generateFallbackResponse(userMessage);
      return NextResponse.json({ message: fallbackResponse });
    }
    
    // Azure AI service disabled - using fallback response
    const userMessage = messages[messages.length - 1]?.content || '';
    const fallbackResponse = generateFallbackResponse(userMessage);
    return NextResponse.json({ message: fallbackResponse });
  } catch (error) {
    console.error('API Error:', error);
    // Return fallback response instead of error
    const userMessage = messages[messages.length - 1]?.content || '';
    const fallbackResponse = generateFallbackResponse(userMessage);
    return NextResponse.json({ message: fallbackResponse });
  }
}

/**
 * Generate a helpful fallback response when AI service is unavailable
 */
function generateFallbackResponse(userMessage) {
  const message = userMessage.toLowerCase();

  // Portfolio-specific responses
  if (message.includes('project') || message.includes('work')) {
    return "Hi! I'd love to tell you about Menno's projects! While the AI service is currently unavailable, you can explore the portfolio to see various projects including web applications, data analysis tools, and more. Check out the Projects section for detailed information about each project, including technologies used and live demos.";
  }

  if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
    return "Great question about skills! Menno works with a variety of technologies including React, Next.js, TypeScript, Python, and cloud platforms. While the AI assistant is temporarily unavailable, you can find a comprehensive list of skills and technologies in the Skills section of the portfolio.";
  }

  if (message.includes('experience') || message.includes('background')) {
    return "Thanks for asking about Menno's experience! While the AI service is currently unavailable, you can learn about his professional background, education, and career journey in the About section of the portfolio. There you'll find detailed information about his work experience and achievements.";
  }

  if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
    return "I'd be happy to help you get in touch! While the AI assistant is temporarily unavailable, you can find contact information and reach out directly through the Contact section of the portfolio. There are multiple ways to connect including email and social media links.";
  }

  if (message.includes('blog') || message.includes('article') || message.includes('post')) {
    return "Interested in Menno's writing? While the AI service is currently unavailable, you can explore the Blog section to read articles about technology, development insights, and project experiences. New posts are added regularly!";
  }

  // Default helpful response
  return `Hello! Thanks for your message: "${userMessage}".

The AI assistant is currently unavailable (missing API configuration), but I can still help! This portfolio contains detailed information about:

🚀 **Projects** - Web applications, tools, and demos
💻 **Skills** - Technologies, frameworks, and expertise
📝 **Blog** - Articles and insights
👤 **About** - Background and experience
📧 **Contact** - Ways to get in touch

Please explore the different sections of the portfolio, or feel free to reach out directly through the contact form. The AI assistant will be back online once the API keys are configured!`;
}
