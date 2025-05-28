import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

// This is a utility to call the GitHub OpenAI model (mocked for now)
// In the future, replace this with a real call to the GitHub OpenAI API when available

const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

export async function getRequirementsFromGithubAI(businessProblem: string, options?: { includeProcesses?: boolean }) {
  if (!token) {
    // fallback to mock if no token
    console.warn('[Requirements Agent] Using mock data as fallback: No GITHUB_TOKEN provided.');
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

  const prompt = `You are a requirements agent. Analyze the following business problem and generate a list of user roles. For each role, provide a bulleted list of their needs and the most probable processes that should be maintained based on the role's purpose. Respond in JSON as an array of { role: string, needs: string[], processes: string[] }.\nBusiness problem: ${businessProblem}`;

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

  // Try to parse the model's response as JSON
  try {
    const content = response.body.choices[0].message.content ?? '';
    return JSON.parse(content);
  } catch (e) {
    // fallback to mock if parsing fails
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
