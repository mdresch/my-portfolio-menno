import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '../docs');
const REQUIREMENTS_DIR = path.join(DOCS_DIR, 'requirements');
const PROBLEM_STATEMENT_PATH = path.join(REQUIREMENTS_DIR, 'business-problem.md');
const REQUIREMENTS_OUTPUT_PATH = path.join(REQUIREMENTS_DIR, 'requirements-agent-output.md');
const TECHNOLOGY_STACK_PATH = path.join(REQUIREMENTS_DIR, 'technology-stack.md');
const PROCESS_FLOWS_PATH = path.join(REQUIREMENTS_DIR, 'process-flows.md');
const DATA_MODEL_PATH = path.join(REQUIREMENTS_DIR, 'data-model.md');

export {
  DOCS_DIR,
  REQUIREMENTS_DIR,
  PROBLEM_STATEMENT_PATH,
  REQUIREMENTS_OUTPUT_PATH,
  TECHNOLOGY_STACK_PATH,
  PROCESS_FLOWS_PATH,
  DATA_MODEL_PATH
};
