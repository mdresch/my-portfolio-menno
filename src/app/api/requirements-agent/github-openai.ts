import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

// This is a utility to call the GitHub OpenAI model (mocked for now)
// In the future, replace this with a real call to the GitHub OpenAI API when available

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

export async function getRequirementsFromGithubAI(businessProblem: string, options?: { includeProcesses?: boolean, technologyStack?: string[], requestStrategicSections?: boolean, contextBundle?: string }) {
  if (!token) {
    // fallback to mock if no token
    if (options?.requestStrategicSections) {
      return {
        vision: 'To be the leading platform for individuals to showcase their work, connect with opportunities, and inspire others through their digital presence.',
        mission: 'To provide an intuitive, feature-rich platform that enables users to easily build, manage, and share their personal portfolios and content, while integrating with leading developer services and ensuring data security and scalability.',
        coreValues: [
          'User empowerment and creativity',
          'Simplicity and usability',
          'Openness and integration',
          'Data privacy and security',
          'Continuous improvement and innovation'
        ],
        purpose: 'To help individuals and professionals effectively showcase their skills, projects, and stories, fostering opportunities for collaboration, recognition, and personal growth in the digital world.'
      };
    }
    return [
      {
        role: 'Project Stakeholder',
        needs: [
          'Clear project goals',
          'Regular status updates',
          'Risk management',
        ],
        processes: options?.includeProcesses ? [
          'Project planning and review',
          'Stakeholder communication',
          'Risk assessment and mitigation'
        ] : undefined
      },
      {
        role: 'End User',
        needs: [
          'Intuitive user interface',
          'Reliable performance',
          'Accessible support',
        ],
        processes: options?.includeProcesses ? [
          'User onboarding',
          'Support request handling',
          'Feedback collection'
        ] : undefined
      },
    ];
  }

  const techStackText = options?.technologyStack && options.technologyStack.length > 0
    ? `\nTechnology stack: ${options.technologyStack.join(', ')}`
    : '';

  const contextBundle = options?.contextBundle ? `\nContext: ${options.contextBundle}` : '';

  let prompt;
  if (options?.requestStrategicSections) {
    prompt = `You are a requirements and strategy agent. Carefully analyze the following business problem, technology stack, and project context. Your task is to draft a vision statement, a mission statement, a bulleted list of core values, and a purpose statement for this project.\n\nSTRICT REQUIREMENTS:\n- Each section must be unique, actionable, and tailored to the specific business problem, technology, and context provided.\n- DO NOT use generic, vague, or boilerplate language.\n- Reference and incorporate details from the context bundle.\n- Make each section concrete and differentiating.\n- If possible, cite or echo specific project details, goals, or features from the context.\n- Double-check that your output is not generic and is clearly written for this project.\n- If you cannot find enough context, explain what is missing and suggest what would make the output more specific.\n\nRespond ONLY in valid minified JSON as {\"vision\":string,\"mission\":string,\"coreValues\":[string],\"purpose\":string}. Do not include markdown, comments, or any other text.\n\nBusiness problem: ${businessProblem}${techStackText}${contextBundle}`;
  } else {
    prompt = `You are a requirements agent. Analyze the following business problem, technology stack, and project context, then generate a list of user roles. For each role, provide a bulleted list of their needs and the most probable processes that should be maintained based on the role's purpose. Respond ONLY in valid minified JSON as an array of {role:string,needs:[string],processes:[string]}. Do not include markdown, comments, or any other text.\nBusiness problem: ${businessProblem}${techStackText}${contextBundle}`;
  }

  const client = ModelClient(
    endpoint,
    new AzureKeyCredential(token),
  );

  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      top_p: 1.0,
      model: model
    }
  });

  if (isUnexpected(response)) {
    throw response.body.error;
  }

  // Debug: Output raw LLM response to console
  const rawContent = response.body.choices[0].message.content ?? '';
  console.log('[Requirements Agent] Raw LLM output:', rawContent);

  // Try to parse the model's response as JSON
  try {
    const content = rawContent;
    return JSON.parse(content);
  } catch (e) {
    // fallback to mock if parsing fails
    if (options?.requestStrategicSections) {
      return {
        vision: 'To be the leading platform for individuals to showcase their work, connect with opportunities, and inspire others through their digital presence.',
        mission: 'To provide an intuitive, feature-rich platform that enables users to easily build, manage, and share their personal portfolios and content, while integrating with leading developer services and ensuring data security and scalability.',
        coreValues: [
          'User empowerment and creativity',
          'Simplicity and usability',
          'Openness and integration',
          'Data privacy and security',
          'Continuous improvement and innovation'
        ],
        purpose: 'To help individuals and professionals effectively showcase their skills, projects, and stories, fostering opportunities for collaboration, recognition, and personal growth in the digital world.'
      };
    }
    console.warn('[Requirements Agent] Using mock data as fallback: Model response could not be parsed as JSON.');
    return [
      {
        role: 'Project Stakeholder',
        needs: [
          'Clear project goals',
          'Regular status updates',
          'Risk management',
        ],
        processes: options?.includeProcesses ? [
          'Project planning and review',
          'Stakeholder communication',
          'Risk assessment and mitigation'
        ] : undefined
      },
      {
        role: 'End User',
        needs: [
          'Intuitive user interface',
          'Reliable performance',
          'Accessible support',
        ],
        processes: options?.includeProcesses ? [
          'User onboarding',
          'Support request handling',
          'Feedback collection'
        ] : undefined
      },
    ];
  }
}
