import { generateStrategicSections, generateRequirements } from './index.js';
import { writeFile } from 'fs/promises';

(async () => {
  // Step 1: Generate strategic sections
  const strategic = await generateStrategicSections({
    businessProblem: 'A SaaS platform for remote team collaboration',
    technologyStack: ["Node.js", "React", "PostgreSQL"],
    contextBundle: 'The platform enables real-time chat, file sharing, and project management for distributed teams.'
  });
  console.log('Strategic:', strategic);

  // Step 2: Generate requirements
  const requirements = await generateRequirements({
    businessProblem: 'A SaaS platform for remote team collaboration',
    technologyStack: ["Node.js", "React", "PostgreSQL"],
    contextBundle: 'The platform enables real-time chat, file sharing, and project management for distributed teams.'
  });
  console.log('Requirements:', requirements);

  // Step 3: Write outputs to files with granular error handling
  const techStackDoc = `# Technology Stack\n\n${["Node.js", "React", "PostgreSQL"].map(t => `- ${t}`).join('\n')}`;
  const processFlowsDoc = `# Process Flows\n\n- Real-time chat workflow\n- File sharing workflow\n- Project management workflow`;
  const dataModelDoc = `# Data Model\n\n- User\n- Team\n- Message\n- File\n- Project\n- Task`;
  const requirementsOutput = JSON.stringify(requirements, null, 2);
  const businessStatement = `# Business Statement\n\n**Vision:** ${strategic.vision}\n\n**Mission:** ${strategic.mission}\n\n**Core Values:**\n${strategic.coreValues.map(v => `- ${v}`).join('\n')}\n\n**Purpose:** ${strategic.purpose}\n`;

  try {
    await writeFile('./requirements-gathering-agent/docs/business-statement.md', businessStatement);
    console.log('Wrote business-statement.md');
  } catch (err) {
    console.error('Error writing business-statement.md:', err);
  }
  try {
    await writeFile('./requirements-gathering-agent/docs/technology-stack.md', techStackDoc);
    console.log('Wrote technology-stack.md');
  } catch (err) {
    console.error('Error writing technology-stack.md:', err);
  }
  try {
    await writeFile('./requirements-gathering-agent/docs/process-flows.md', processFlowsDoc);
    console.log('Wrote process-flows.md');
  } catch (err) {
    console.error('Error writing process-flows.md:', err);
  }
  try {
    await writeFile('./requirements-gathering-agent/docs/data-model.md', dataModelDoc);
    console.log('Wrote data-model.md');
  } catch (err) {
    console.error('Error writing data-model.md:', err);
  }
  try {
    await writeFile('./requirements-gathering-agent/docs/requirements-agent-output.json', requirementsOutput);
    console.log('Wrote requirements-agent-output.json');
  } catch (err) {
    console.error('Error writing requirements-agent-output.json:', err);
  }

  console.log('All documentation generation attempts complete.');
})();
