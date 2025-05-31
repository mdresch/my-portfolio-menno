// scripts/auto-requirements-refactored.js
// Main orchestrator for automated requirements gathering and documentation generation
// This refactored version is much cleaner and modular

console.log('SCRIPT_TOP: auto-requirements.js starting');

import { ensureDirectory, logInfo } from './utils.js';
import { REQUIREMENTS_DIR } from '../config/paths.js';

// Import refactored modules
import { generateBusinessProblemLLM, analyzeProject } from './modules/business-analysis.js';
import { 
  gatherProjectContext, 
  saveProjectContext, 
  fitContextToTokenLimit 
} from './modules/project-context.js';
import { 
  generateStrategicSections, 
  saveStrategicSections 
} from './modules/strategic-docs.js';
import { 
  shouldRunRequirementsAgent, 
  callRequirementsAgent, 
  saveRequirementsOutput 
} from './modules/requirements-agent.js';
import { getTechnologyStack, saveTechnologyStack } from './modules/technology-stack.js';
import { saveProcessFlows, saveDataModel } from './modules/documentation-generators.js';

console.log('SCRIPT_INFO: REQUIREMENTS_DIR is:', REQUIREMENTS_DIR);

/**
 * Generate business statement and strategic documentation using AI
 */
async function generateBusinessDocumentation() {
  console.log('MAIN_IIFE_DEBUG: Calling saveBusinessStatementWithLLM...');
  
  const stack = await getTechnologyStack();
  const contextBundle = await gatherProjectContext();
  await saveProjectContext(contextBundle);
  
  const fittedContext = await fitContextToTokenLimit(contextBundle);
  const businessProblem = await generateBusinessProblemLLM(stack, fittedContext);
  const strategicSections = await generateStrategicSections(businessProblem, stack, fittedContext);
  await saveStrategicSections(businessProblem, strategicSections);
  
  console.log('MAIN_IIFE_DEBUG: saveBusinessStatementWithLLM completed.');
  return businessProblem;
}

/**
 * Generate user requirements using the requirements agent
 */
async function generateUserRequirements(businessProblem) {
  console.log('MAIN_IIFE_DEBUG: Preparing for requirements agent call...');
  
  const stack = await getTechnologyStack();
  const contextBundle = await gatherProjectContext();
  await saveProjectContext(contextBundle);
  
  // Use fresh business problem or analyze project
  const statement = businessProblem || await analyzeProject();
  
  console.log('MAIN_IIFE_DEBUG: Business problem for agent (first 100 chars):', statement.slice(0, 100));
  console.log('MAIN_IIFE_DEBUG: Running requirements agent...');
  
  let roles = [];
  if (shouldRunRequirementsAgent(statement)) {
    roles = await callRequirementsAgent(statement, stack);
  }
  
  console.log('MAIN_IIFE_DEBUG: Requirements agent call completed. Roles:', roles);
  await saveRequirementsOutput(roles);
  
  console.log('MAIN_IIFE_DEBUG: Requirements output saved.');
}

/**
 * Generate all technical documentation
 */
async function generateTechnicalDocumentation() {
  console.log('MAIN_IIFE_DEBUG: Calling saveTechnologyStack...');
  await saveTechnologyStack();
  console.log('MAIN_IIFE_DEBUG: saveTechnologyStack completed.');
  
  console.log('MAIN_IIFE_DEBUG: Calling saveProcessFlows...');
  await saveProcessFlows();
  console.log('MAIN_IIFE_DEBUG: saveProcessFlows completed.');
  
  console.log('MAIN_IIFE_DEBUG: Calling saveDataModel...');
  await saveDataModel();
  console.log('MAIN_IIFE_DEBUG: saveDataModel completed.');
}

/**
 * Main execution function - orchestrates the entire requirements gathering process
 */
async function main() {
  try {
    console.log('MAIN_IIFE_START: Main execution block started.');
    
    // Ensure requirements directory exists
    await ensureDirectory(REQUIREMENTS_DIR);
    logInfo(`Ensured requirements directory exists: ${REQUIREMENTS_DIR}`);
    console.log('MAIN_IIFE_DEBUG: Requirements directory ensured.');
    
    // Step 1: Generate business documentation with AI
    const businessProblem = await generateBusinessDocumentation();
    
    // Step 2: Generate technical documentation
    await generateTechnicalDocumentation();
    
    // Step 3: Generate user requirements
    await generateUserRequirements(businessProblem);
    
    console.log('MAIN_IIFE_END: Main execution block finished.');
  } catch (error) {
    console.error('Error in main execution:', error);
    process.exit(1);
  }
}

// Execute main function
main();

console.log('SCRIPT_BOTTOM: auto-requirements.js finished defining main execution.');
