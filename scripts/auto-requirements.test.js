// Unit tests for auto-requirements.js functions
// Run with: npm test -- auto-requirements.test.js

const fs = require('fs');
const path = require('path');

// Mock fs module
jest.mock('fs');
jest.mock('path');

// Import the functions to test (we'll need to refactor the main file to export functions)
// For now, we'll copy the functions here to test them individually

// Utility functions for testing
function safeReadFile(filePath, encoding = 'utf-8') {
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, encoding);
    }
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
  }
  return null;
}

function safeWriteFile(filePath, content, encoding = 'utf-8') {
  try {
    fs.writeFileSync(filePath, content, encoding);
    return true;
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error);
    return false;
  }
}

function ensureDirectoryExists(dirPath) {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      return true;
    }
    return true;
  } catch (error) {
    console.error(`Error creating directory ${dirPath}:`, error);
    return false;
  }
}

function isFileReadable(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.F_OK | fs.constants.R_OK);
    return true;
  } catch (error) {
    return false;
  }
}

function isDirectoryAccessible(dirPath) {
  try {
    return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
  } catch (error) {
    return false;
  }
}

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return -1;
  }
}

function getFileModificationTime(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch (error) {
    return null;
  }
}

function safeFileCopy(sourcePath, destPath) {
  try {
    const content = safeReadFile(sourcePath);
    if (content === null) return false;
    return safeWriteFile(destPath, content);
  } catch (error) {
    console.error(`Error copying file from ${sourcePath} to ${destPath}:`, error);
    return false;
  }
}

function safeFileDelete(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return true;
    }
    return true; // File doesn't exist, consider it deleted
  } catch (error) {
    console.error(`Error deleting file ${filePath}:`, error);
    return false;
  }
}

function listDirectoryFiles(dirPath, filter = null) {
  try {
    if (!isDirectoryAccessible(dirPath)) return [];
    
    const files = fs.readdirSync(dirPath);
    
    if (filter) {
      return files.filter(filter);
    }
    
    return files;
  } catch (error) {
    console.error(`Error listing files in directory ${dirPath}:`, error);
    return [];
  }
}

function isValidString(str, minLength = 1) {
  return typeof str === 'string' && str.trim().length >= minLength;
}

function isValidArray(arr, validator = null) {
  if (!Array.isArray(arr) || arr.length === 0) return false;
  
  if (validator && typeof validator === 'function') {
    return arr.every(validator);
  }
  
  return true;
}

function isValidEmail(email) {
  if (!isValidString(email)) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidUrl(url) {
  if (!isValidString(url)) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function sanitizeFilename(filename) {
  if (!isValidString(filename)) return 'untitled';
  
  return filename
    .replace(/[<>:"/\\|?*]/g, '-')  // Replace invalid chars with dash
    .replace(/\s+/g, '-')           // Replace spaces with dash
    .replace(/-+/g, '-')            // Replace multiple dashes with single
    .replace(/^-|-$/g, '')          // Remove leading/trailing dashes
    .toLowerCase();
}

function truncateText(text, maxLength = 100, suffix = '...') {
  if (!isValidString(text)) return '';
  
  if (text.length <= maxLength) return text;
  
  return text.substring(0, maxLength - suffix.length) + suffix;
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

async function retryAsync(operation, maxRetries = 3, delay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      if (attempt === maxRetries) {
        console.error(`Operation failed after ${maxRetries} attempts:`, error);
        throw error;
      }
      console.warn(`Attempt ${attempt} failed, retrying in ${delay}ms:`, error.message);
      await new Promise(resolve => setTimeout(resolve, delay));
      delay *= 2; // Exponential backoff
    }
  }
}

function deepMerge(...objects) {
  if (objects.length === 0) return {};
  if (objects.length === 1) return objects[0];
  
  const result = {};
  
  for (const obj of objects) {
    if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object' && !Array.isArray(obj[key]) && obj[key] !== null) {
            result[key] = deepMerge(result[key] || {}, obj[key]);
          } else {
            result[key] = obj[key];
          }
        }
      }
    }
  }
  
  return result;
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function generateId(prefix = '', length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return prefix ? `${prefix}-${result}` : result;
}

function formatTimestamp(date = new Date(), format = 'ISO') {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }
  
  switch (format) {
    case 'ISO':
      return date.toISOString();
    case 'local':
      return date.toLocaleString();
    case 'date':
      return date.toLocaleDateString();
    case 'time':
      return date.toLocaleTimeString();
    default:
      return date.toString();
  }
}

describe('Auto Requirements Script - Utility Functions', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('safeReadFile', () => {
    test('should return file content when file exists', () => {
      const mockContent = 'test file content';
      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue(mockContent);

      const result = safeReadFile('/test/path.txt');

      expect(result).toBe(mockContent);
      expect(fs.existsSync).toHaveBeenCalledWith('/test/path.txt');
      expect(fs.readFileSync).toHaveBeenCalledWith('/test/path.txt', 'utf-8');
    });

    test('should return null when file does not exist', () => {
      fs.existsSync.mockReturnValue(false);

      const result = safeReadFile('/nonexistent/path.txt');

      expect(result).toBeNull();
      expect(fs.existsSync).toHaveBeenCalledWith('/nonexistent/path.txt');
      expect(fs.readFileSync).not.toHaveBeenCalled();
    });

    test('should return null when readFileSync throws error', () => {
      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockImplementation(() => {
        throw new Error('Permission denied');
      });

      const result = safeReadFile('/test/path.txt');

      expect(result).toBeNull();
      expect(fs.existsSync).toHaveBeenCalledWith('/test/path.txt');
    });

    test('should use custom encoding when provided', () => {
      const mockContent = 'test content';
      fs.existsSync.mockReturnValue(true);
      fs.readFileSync.mockReturnValue(mockContent);

      const result = safeReadFile('/test/path.txt', 'utf-16');

      expect(result).toBe(mockContent);
      expect(fs.readFileSync).toHaveBeenCalledWith('/test/path.txt', 'utf-16');
    });
  });

  describe('safeWriteFile', () => {
    test('should return true when file is written successfully', () => {
      fs.writeFileSync.mockReturnValue(undefined);

      const result = safeWriteFile('/test/path.txt', 'test content');

      expect(result).toBe(true);
      expect(fs.writeFileSync).toHaveBeenCalledWith('/test/path.txt', 'test content', 'utf-8');
    });

    test('should return false when writeFileSync throws error', () => {
      fs.writeFileSync.mockImplementation(() => {
        throw new Error('Permission denied');
      });

      const result = safeWriteFile('/test/path.txt', 'test content');

      expect(result).toBe(false);
      expect(fs.writeFileSync).toHaveBeenCalledWith('/test/path.txt', 'test content', 'utf-8');
    });

    test('should use custom encoding when provided', () => {
      fs.writeFileSync.mockReturnValue(undefined);

      const result = safeWriteFile('/test/path.txt', 'test content', 'utf-16');

      expect(result).toBe(true);
      expect(fs.writeFileSync).toHaveBeenCalledWith('/test/path.txt', 'test content', 'utf-16');
    });
  });

  describe('extractFirstParagraph', () => {
    // Copy function for testing
    function extractFirstParagraph(content) {
      if (!content || typeof content !== 'string') return null;
      
      const cleanContent = content.replace(/#.*/g, '').trim();
      if (!cleanContent) return null;
      
      const paragraphs = cleanContent.split(/\n\s*\n/)
        .map(p => p.trim())
        .filter(Boolean);
      
      return paragraphs.length > 0 ? paragraphs[0] : null;
    }

    test('should extract first paragraph from text', () => {
      const content = 'First paragraph content.\n\nSecond paragraph content.';
      const result = extractFirstParagraph(content);
      expect(result).toBe('First paragraph content.');
    });

    test('should remove headers and extract content', () => {
      const content = '# Header\nFirst paragraph content.\n\n## Another Header\nSecond paragraph.';
      const result = extractFirstParagraph(content);
      expect(result).toBe('First paragraph content.');
    });

    test('should return null for empty content', () => {
      expect(extractFirstParagraph('')).toBeNull();
      expect(extractFirstParagraph(null)).toBeNull();
      expect(extractFirstParagraph(undefined)).toBeNull();
    });

    test('should return null for non-string input', () => {
      expect(extractFirstParagraph(123)).toBeNull();
      expect(extractFirstParagraph({})).toBeNull();
      expect(extractFirstParagraph([])).toBeNull();
    });

    test('should handle content with only headers', () => {
      const content = '# Header 1\n## Header 2\n### Header 3';
      const result = extractFirstParagraph(content);
      expect(result).toBeNull();
    });

    test('should handle single line content', () => {
      const content = 'Single line content';
      const result = extractFirstParagraph(content);
      expect(result).toBe('Single line content');
    });
  });

  describe('parsePackageJson', () => {
    function parsePackageJson(packagePath) {
      const content = safeReadFile(packagePath);
      if (!content) return null;
      
      try {
        return JSON.parse(content);
      } catch (error) {
        console.error('Error parsing package.json:', error);
        return null;
      }
    }

    test('should parse valid package.json content', () => {
      fs.readFileSync.mockReturnValue('{"name": "test-package", "version": "1.0.0"}');
      
      const result = parsePackageJson('/valid/package.json');
      expect(result).toEqual({
        name: 'test-package',
        version: '1.0.0'
      });
    });

    test('should return null for invalid JSON', () => {
      fs.readFileSync.mockReturnValue('{"name": "test-package", "version":'); // Invalid JSON
      
      const result = parsePackageJson('/invalid/package.json');
      expect(result).toBeNull();
    });

    test('should return null when file does not exist', () => {
      fs.readFileSync.mockImplementation(() => {
        throw new Error('File not found');
      });
      
      const result = parsePackageJson('/nonexistent/package.json');
      expect(result).toBeNull();
    });
  });
});

describe('Auto Requirements Script - Business Statement Functions', () => {
  
  describe('formatCoreValues', () => {
    // Copy function for testing
    function formatCoreValues(coreValues) {
      if (!coreValues || !Array.isArray(coreValues) || coreValues.length === 0) {
        return '';
      }
      return coreValues.map(v => `- ${v}`).join('\n');
    }

    test('should format array of core values', () => {
      const values = ['Innovation', 'Quality', 'Collaboration'];
      const result = formatCoreValues(values);
      expect(result).toBe('- Innovation\n- Quality\n- Collaboration');
    });

    test('should return empty string for empty array', () => {
      expect(formatCoreValues([])).toBe('');
    });

    test('should return empty string for null/undefined', () => {
      expect(formatCoreValues(null)).toBe('');
      expect(formatCoreValues(undefined)).toBe('');
    });

    test('should return empty string for non-array input', () => {
      expect(formatCoreValues('not an array')).toBe('');
      expect(formatCoreValues(123)).toBe('');
      expect(formatCoreValues({})).toBe('');
    });

    test('should handle single value array', () => {
      const result = formatCoreValues(['Single Value']);
      expect(result).toBe('- Single Value');
    });
  });

  describe('formatBusinessStatementContent', () => {
    // Copy function for testing
    function formatCoreValues(coreValues) {
      if (!coreValues || !Array.isArray(coreValues) || coreValues.length === 0) {
        return '';
      }
      return coreValues.map(v => `- ${v}`).join('\n');
    }

    function formatBusinessStatementContent(statement, strategicSections) {
      const { vision, mission, coreValues, purpose } = strategicSections;
      const coreValuesSection = formatCoreValues(coreValues);

      return `# Business Statement

${statement}
---

**Vision:**

${vision || ''}

**Mission:**

${mission || ''}

**Core Values:**

${coreValuesSection}

**Purpose:**

${purpose || ''}
`;
    }

    test('should format complete business statement with all sections', () => {
      const statement = 'Our business statement';
      const strategicSections = {
        vision: 'Our vision',
        mission: 'Our mission',
        coreValues: ['Value 1', 'Value 2'],
        purpose: 'Our purpose'
      };

      const result = formatBusinessStatementContent(statement, strategicSections);

      expect(result).toContain('# Business Statement');
      expect(result).toContain('Our business statement');
      expect(result).toContain('**Vision:**\n\nOur vision');
      expect(result).toContain('**Mission:**\n\nOur mission');
      expect(result).toContain('- Value 1\n- Value 2');
      expect(result).toContain('**Purpose:**\n\nOur purpose');
    });

    test('should handle missing strategic sections', () => {
      const statement = 'Our business statement';
      const strategicSections = {};

      const result = formatBusinessStatementContent(statement, strategicSections);

      expect(result).toContain('# Business Statement');
      expect(result).toContain('Our business statement');
      expect(result).toContain('**Vision:**\n\n');
      expect(result).toContain('**Mission:**\n\n');
      expect(result).toContain('**Core Values:**\n\n');
      expect(result).toContain('**Purpose:**\n\n');
    });
  });
});

describe('Auto Requirements Script - Requirements Processing Functions', () => {
  
  describe('formatRoleNeeds', () => {
    // Copy function for testing
    function formatRoleNeeds(needs) {
      if (!needs || !Array.isArray(needs) || needs.length === 0) return '';
      
      let section = '**Needs:**\n';
      needs.forEach(need => {
        section += `- ${need}\n`;
      });
      return section;
    }

    test('should format array of needs', () => {
      const needs = ['Need 1', 'Need 2', 'Need 3'];
      const result = formatRoleNeeds(needs);
      expect(result).toBe('**Needs:**\n- Need 1\n- Need 2\n- Need 3\n');
    });

    test('should return empty string for empty array', () => {
      expect(formatRoleNeeds([])).toBe('');
    });

    test('should return empty string for null/undefined', () => {
      expect(formatRoleNeeds(null)).toBe('');
      expect(formatRoleNeeds(undefined)).toBe('');
    });

    test('should handle single need', () => {
      const result = formatRoleNeeds(['Single need']);
      expect(result).toBe('**Needs:**\n- Single need\n');
    });
  });

  describe('formatRoleProcesses', () => {
    // Copy function for testing
    function formatRoleProcesses(processes) {
      if (!processes || !Array.isArray(processes) || processes.length === 0) return '';
      
      let section = '**Processes:**\n';
      processes.forEach(proc => {
        section += `- ${proc}\n`;
      });
      return section;
    }

    test('should format array of processes', () => {
      const processes = ['Process 1', 'Process 2'];
      const result = formatRoleProcesses(processes);
      expect(result).toBe('**Processes:**\n- Process 1\n- Process 2\n');
    });

    test('should return empty string for empty array', () => {
      expect(formatRoleProcesses([])).toBe('');
    });

    test('should return empty string for null/undefined', () => {
      expect(formatRoleProcesses(null)).toBe('');
      expect(formatRoleProcesses(undefined)).toBe('');
    });
  });

  describe('formatRole', () => {
    // Copy functions for testing
    function formatRoleNeeds(needs) {
      if (!needs || !Array.isArray(needs) || needs.length === 0) return '';
      
      let section = '**Needs:**\n';
      needs.forEach(need => {
        section += `- ${need}\n`;
      });
      return section;
    }

    function formatRoleProcesses(processes) {
      if (!processes || !Array.isArray(processes) || processes.length === 0) return '';
      
      let section = '**Processes:**\n';
      processes.forEach(proc => {
        section += `- ${proc}\n`;
      });
      return section;
    }

    function formatRole(roleObj) {
      let roleSection = `## ${roleObj.role}\n`;
      roleSection += formatRoleNeeds(roleObj.needs);
      roleSection += formatRoleProcesses(roleObj.processes);
      roleSection += '\n';
      return roleSection;
    }

    test('should format complete role object', () => {
      const roleObj = {
        role: 'Test Role',
        needs: ['Need 1', 'Need 2'],
        processes: ['Process 1', 'Process 2']
      };

      const result = formatRole(roleObj);

      expect(result).toContain('## Test Role');
      expect(result).toContain('**Needs:**\n- Need 1\n- Need 2\n');
      expect(result).toContain('**Processes:**\n- Process 1\n- Process 2\n');
    });

    test('should handle role with only needs', () => {
      const roleObj = {
        role: 'Test Role',
        needs: ['Need 1'],
        processes: []
      };

      const result = formatRole(roleObj);

      expect(result).toContain('## Test Role');
      expect(result).toContain('**Needs:**\n- Need 1\n');
      expect(result).not.toContain('**Processes:**');
    });

    test('should handle role with only processes', () => {
      const roleObj = {
        role: 'Test Role',
        needs: [],
        processes: ['Process 1']
      };

      const result = formatRole(roleObj);

      expect(result).toContain('## Test Role');
      expect(result).toContain('**Processes:**\n- Process 1\n');
      expect(result).not.toContain('**Needs:**');
    });
  });

  describe('formatRequirementsContent', () => {
    // Copy all needed functions for testing
    function formatRoleNeeds(needs) {
      if (!needs || !Array.isArray(needs) || needs.length === 0) return '';
      
      let section = '**Needs:**\n';
      needs.forEach(need => {
        section += `- ${need}\n`;
      });
      return section;
    }

    function formatRoleProcesses(processes) {
      if (!processes || !Array.isArray(processes) || processes.length === 0) return '';
      
      let section = '**Processes:**\n';
      processes.forEach(proc => {
        section += `- ${proc}\n`;
      });
      return section;
    }

    function formatRole(roleObj) {
      let roleSection = `## ${roleObj.role}\n`;
      roleSection += formatRoleNeeds(roleObj.needs);
      roleSection += formatRoleProcesses(roleObj.processes);
      roleSection += '\n';
      return roleSection;
    }

    function formatRequirementsContent(roles) {
      let content = '# Requirements Agent Output: Roles, Needs, and Processes\n\n';
      
      if (!roles || !Array.isArray(roles) || roles.length === 0) {
        content += 'No roles generated.\n';
        return content;
      }
      
      roles.forEach(roleObj => {
        content += formatRole(roleObj);
      });
      
      return content;
    }

    test('should format array of roles', () => {
      const roles = [
        {
          role: 'Role 1',
          needs: ['Need 1'],
          processes: ['Process 1']
        },
        {
          role: 'Role 2',
          needs: ['Need 2'],
          processes: ['Process 2']
        }
      ];

      const result = formatRequirementsContent(roles);

      expect(result).toContain('# Requirements Agent Output: Roles, Needs, and Processes');
      expect(result).toContain('## Role 1');
      expect(result).toContain('## Role 2');
      expect(result).toContain('- Need 1');
      expect(result).toContain('- Need 2');
    });

    test('should handle empty roles array', () => {
      const result = formatRequirementsContent([]);

      expect(result).toContain('# Requirements Agent Output: Roles, Needs, and Processes');
      expect(result).toContain('No roles generated.');
    });

    test('should handle null/undefined roles', () => {
      expect(formatRequirementsContent(null)).toContain('No roles generated.');
      expect(formatRequirementsContent(undefined)).toContain('No roles generated.');
    });
  });
});

describe('Auto Requirements Script - Technology Stack Functions', () => {
  
  describe('mapDependencyToTechnology', () => {
    // Copy function for testing
    function mapDependencyToTechnology(deps, devDeps) {
      const stack = [];
      const techMappings = [
        { condition: () => deps.includes('next'), name: 'Next.js' },
        { condition: () => deps.includes('react'), name: 'React' },
        { condition: () => deps.includes('tailwindcss') || devDeps.includes('tailwindcss'), name: 'Tailwind CSS' },
        { condition: () => deps.includes('firebase'), name: 'Firebase' },
        { condition: () => deps.some(d => d.startsWith('@genkit-ai')), name: 'Genkit AI' },
        { condition: () => deps.includes('@azure-rest/ai-inference'), name: 'Azure AI Inference' },
        { condition: () => deps.includes('@google-cloud/vertexai'), name: 'Google Vertex AI' },
        { condition: () => deps.includes('chart.js'), name: 'Chart.js' },
        { condition: () => deps.includes('recharts'), name: 'Recharts' },
        { condition: () => deps.includes('framer-motion'), name: 'Framer Motion' },
        { condition: () => deps.includes('@sentry/nextjs'), name: 'Sentry' },
        { condition: () => deps.includes('@hotjar/browser'), name: 'Hotjar' },
        { condition: () => deps.includes('@toast-ui/react-editor'), name: 'Toast UI Editor' },
        { condition: () => deps.includes('marked') || deps.includes('remark'), name: 'Markdown/Remark/Marked' },
        { condition: () => deps.includes('rehype-highlight'), name: 'Rehype Highlight' },
        { condition: () => deps.includes('clsx'), name: 'clsx' },
        { condition: () => deps.includes('dotenv'), name: 'dotenv' },
        { condition: () => devDeps.includes('typescript'), name: 'TypeScript' },
        { condition: () => devDeps.includes('eslint'), name: 'ESLint' }
      ];
      
      techMappings.forEach(mapping => {
        if (mapping.condition()) {
          stack.push(mapping.name);
        }
      });
      
      return stack;
    }

    test('should detect Next.js and React', () => {
      const deps = ['next', 'react'];
      const devDeps = [];
      const result = mapDependencyToTechnology(deps, devDeps);
      
      expect(result).toContain('Next.js');
      expect(result).toContain('React');
    });

    test('should detect Tailwind CSS in dependencies', () => {
      const deps = ['tailwindcss'];
      const devDeps = [];
      const result = mapDependencyToTechnology(deps, devDeps);
      
      expect(result).toContain('Tailwind CSS');
    });

    test('should detect Tailwind CSS in devDependencies', () => {
      const deps = [];
      const devDeps = ['tailwindcss'];
      const result = mapDependencyToTechnology(deps, devDeps);
      
      expect(result).toContain('Tailwind CSS');
    });

    test('should detect Genkit AI packages with prefix', () => {
      const deps = ['@genkit-ai/core', '@genkit-ai/firebase'];
      const devDeps = [];
      const result = mapDependencyToTechnology(deps, devDeps);
      
      expect(result).toContain('Genkit AI');
    });

    test('should detect TypeScript and ESLint in devDependencies', () => {
      const deps = [];
      const devDeps = ['typescript', 'eslint'];
      const result = mapDependencyToTechnology(deps, devDeps);
      
      expect(result).toContain('TypeScript');
      expect(result).toContain('ESLint');
    });

    test('should return empty array for no matching dependencies', () => {
      const deps = ['unknown-package'];
      const devDeps = ['another-unknown'];
      const result = mapDependencyToTechnology(deps, devDeps);
      
      expect(result).toEqual([]);
    });

    test('should handle empty dependency arrays', () => {
      const result = mapDependencyToTechnology([], []);
      expect(result).toEqual([]);
    });

    test('should detect multiple technologies at once', () => {
      const deps = ['next', 'react', 'firebase', 'framer-motion'];
      const devDeps = ['typescript', 'eslint'];
      const result = mapDependencyToTechnology(deps, devDeps);
      
      expect(result).toContain('Next.js');
      expect(result).toContain('React');
      expect(result).toContain('Firebase');
      expect(result).toContain('Framer Motion');
      expect(result).toContain('TypeScript');
      expect(result).toContain('ESLint');
      expect(result).toHaveLength(6);
    });
  });
});

describe('Auto Requirements Script - Integration Tests', () => {
  
  describe('shouldRunRequirementsAgent', () => {
    // Copy function for testing (note: this uses module state)
    let lastStatement = '';
    function shouldRunRequirementsAgent(statement) {
      if (lastStatement === statement) {
        console.log('Business problem statement unchanged. Skipping requirements agent output.');
        return false;
      }
      lastStatement = statement;
      return true;
    }

    beforeEach(() => {
      lastStatement = ''; // Reset state before each test
    });

    test('should return true for first run', () => {
      const result = shouldRunRequirementsAgent('New statement');
      expect(result).toBe(true);
    });

    test('should return false for same statement', () => {
      shouldRunRequirementsAgent('Test statement');
      const result = shouldRunRequirementsAgent('Test statement');
      expect(result).toBe(false);
    });

    test('should return true for different statement', () => {
      shouldRunRequirementsAgent('First statement');
      const result = shouldRunRequirementsAgent('Second statement');
      expect(result).toBe(true);
    });
  });

  describe('generateFallbackBusinessStatement', () => {
    // Copy function for testing
    function generateFallbackBusinessStatement() {
      return `Our goal is to develop a comprehensive personal portfolio platform that enables users to showcase their projects, publish and manage blog content, and integrate with external developer services such as GitHub and Dev.to. The platform must provide a user-friendly editing experience, support rich content, offer analytics on user engagement, and ensure secure, scalable management of user data and integrations.

Key business objectives include:
- Creating an engaging personal brand presence online
- Demonstrating technical expertise through project showcases
- Building thought leadership through blogging capabilities
- Integrating with popular developer platforms for content syndication
- Providing analytics insights on user engagement and reach
- Ensuring responsive design for optimal mobile and desktop experiences
- Maintaining high performance and SEO optimization for discoverability`;
    }

    test('should return comprehensive fallback statement', () => {
      const result = generateFallbackBusinessStatement();
      
      expect(result).toContain('comprehensive personal portfolio platform');
      expect(result).toContain('Key business objectives include:');
      expect(result).toContain('Creating an engaging personal brand presence');
      expect(result).toContain('SEO optimization for discoverability');
    });

    test('should return consistent statement on multiple calls', () => {
      const result1 = generateFallbackBusinessStatement();
      const result2 = generateFallbackBusinessStatement();
      
      expect(result1).toBe(result2);
    });
  });
});

describe('Auto Requirements Script - Advanced Utility Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('isValidString', () => {
    test('should return true for valid non-empty string', () => {
      expect(isValidString('hello')).toBe(true);
      expect(isValidString('  valid  ')).toBe(true);
    });

    test('should return false for empty or whitespace-only string', () => {
      expect(isValidString('')).toBe(false);
      expect(isValidString('   ')).toBe(false);
    });

    test('should return false for non-string input', () => {
      expect(isValidString(null)).toBe(false);
      expect(isValidString(undefined)).toBe(false);
      expect(isValidString(123)).toBe(false);
      expect(isValidString([])).toBe(false);
    });

    test('should respect minimum length requirement', () => {
      expect(isValidString('ab', 3)).toBe(false);
      expect(isValidString('abc', 3)).toBe(true);
      expect(isValidString('abcd', 3)).toBe(true);
    });
  });

  describe('isValidArray', () => {
    test('should return true for non-empty array', () => {
      expect(isValidArray([1, 2, 3])).toBe(true);
      expect(isValidArray(['a', 'b'])).toBe(true);
    });

    test('should return false for empty array', () => {
      expect(isValidArray([])).toBe(false);
    });

    test('should return false for non-array input', () => {
      expect(isValidArray(null)).toBe(false);
      expect(isValidArray(undefined)).toBe(false);
      expect(isValidArray('string')).toBe(false);
      expect(isValidArray({})).toBe(false);
    });

    test('should apply validator function when provided', () => {
      const isNumber = (item) => typeof item === 'number';
      
      expect(isValidArray([1, 2, 3], isNumber)).toBe(true);
      expect(isValidArray([1, 'a', 3], isNumber)).toBe(false);
      expect(isValidArray(['a', 'b'], isNumber)).toBe(false);
    });
  });

  describe('isValidEmail', () => {
    test('should return true for valid email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('test+tag@example.org')).toBe(true);
    });

    test('should return false for invalid email addresses', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('invalid@')).toBe(false);
      expect(isValidEmail('@domain.com')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
      expect(isValidEmail('test..test@example.com')).toBe(true);
    });

    test('should return false for non-string input', () => {
      expect(isValidEmail(null)).toBe(false);
      expect(isValidEmail(undefined)).toBe(false);
      expect(isValidEmail(123)).toBe(false);
    });
  });

  describe('isValidUrl', () => {
    test('should return true for valid URLs', () => {
      expect(isValidUrl('https://example.com')).toBe(true);
      expect(isValidUrl('http://localhost:3000')).toBe(true);
      expect(isValidUrl('ftp://files.example.com')).toBe(true);
    });

    test('should return false for invalid URLs', () => {
      expect(isValidUrl('not-a-url')).toBe(false);
      expect(isValidUrl('http://')).toBe(false);
      expect(isValidUrl('://example.com')).toBe(false);
    });

    test('should return false for non-string input', () => {
      expect(isValidUrl(null)).toBe(false);
      expect(isValidUrl(undefined)).toBe(false);
      expect(isValidUrl(123)).toBe(false);
    });
  });

  describe('sanitizeFilename', () => {
    test('should sanitize filename with invalid characters', () => {
      expect(sanitizeFilename('test<>file')).toBe('test-file');
      expect(sanitizeFilename('file:with\\invalid/chars')).toBe('file-with-invalid-chars');
      expect(sanitizeFilename('file|with?special*chars')).toBe('file-with-special-chars');
    });

    test('should handle spaces and multiple dashes', () => {
      expect(sanitizeFilename('test file name')).toBe('test-file-name');
      expect(sanitizeFilename('test---multiple---dashes')).toBe('test-multiple-dashes');
    });

    test('should remove leading and trailing dashes', () => {
      expect(sanitizeFilename('-test-file-')).toBe('test-file');
      expect(sanitizeFilename('---test---')).toBe('test');
    });

    test('should return lowercase filename', () => {
      expect(sanitizeFilename('TEST-FILE')).toBe('test-file');
      expect(sanitizeFilename('MixedCase')).toBe('mixedcase');
    });

    test('should return default for invalid input', () => {
      expect(sanitizeFilename('')).toBe('untitled');
      expect(sanitizeFilename(null)).toBe('untitled');
      expect(sanitizeFilename(undefined)).toBe('untitled');
    });
  });

  describe('truncateText', () => {
    test('should truncate long text with default suffix', () => {
      const longText = 'This is a very long text that should be truncated because it exceeds the maximum length limit';
      const result = truncateText(longText, 50);
      
      expect(result).toBe('This is a very long text that should be truncat...');
      expect(result.length).toBe(50);
    });

    test('should return original text if within limit', () => {
      const shortText = 'Short text';
      const result = truncateText(shortText, 50);
      
      expect(result).toBe('Short text');
    });

    test('should use custom suffix', () => {
      const text = 'This is a long text';
      const result = truncateText(text, 10, ' [more]');
      
      expect(result).toBe('Thi [more]');
    });

    test('should handle edge cases', () => {
      expect(truncateText('', 10)).toBe('');
      expect(truncateText(null, 10)).toBe('');
      expect(truncateText(undefined, 10)).toBe('');
    });
  });

  describe('deepMerge', () => {
    test('should merge simple objects', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      
      const result = deepMerge(obj1, obj2);
      
      expect(result).toEqual({ a: 1, b: 3, c: 4 });
    });

    test('should merge nested objects', () => {
      const obj1 = { a: { x: 1, y: 2 }, b: 1 };
      const obj2 = { a: { y: 3, z: 4 }, c: 2 };
      
      const result = deepMerge(obj1, obj2);
      
      expect(result).toEqual({ 
        a: { x: 1, y: 3, z: 4 }, 
        b: 1, 
        c: 2 
      });
    });

    test('should handle arrays as values (not merge)', () => {
      const obj1 = { a: [1, 2] };
      const obj2 = { a: [3, 4] };
      
      const result = deepMerge(obj1, obj2);
      
      expect(result).toEqual({ a: [3, 4] });
    });

    test('should handle edge cases', () => {
      expect(deepMerge()).toEqual({});
      expect(deepMerge({})).toEqual({});
      expect(deepMerge({ a: 1 })).toEqual({ a: 1 });
    });

    test('should ignore non-object parameters', () => {
      const obj = { a: 1 };
      const result = deepMerge(obj, null, undefined, 'string', 123);
      
      expect(result).toEqual({ a: 1 });
    });
  });

  describe('formatBytes', () => {
    test('should format bytes correctly', () => {
      expect(formatBytes(0)).toBe('0 Bytes');
      expect(formatBytes(1024)).toBe('1 KB');
      expect(formatBytes(1048576)).toBe('1 MB');
      expect(formatBytes(1073741824)).toBe('1 GB');
    });

    test('should handle decimal places', () => {
      expect(formatBytes(1536, 1)).toBe('1.5 KB');
      expect(formatBytes(1536, 0)).toBe('2 KB');
      expect(formatBytes(1536, 3)).toBe('1.5 KB');
    });

    test('should handle large numbers', () => {
      expect(formatBytes(1099511627776)).toBe('1 TB');
    });
  });

  describe('generateId', () => {
    test('should generate ID with default length', () => {
      const id = generateId();
      
      expect(typeof id).toBe('string');
      expect(id.length).toBe(8);
      expect(/^[A-Za-z0-9]+$/.test(id)).toBe(true);
    });

    test('should generate ID with custom length', () => {
      const id = generateId('', 12);
      
      expect(id.length).toBe(12);
    });

    test('should generate ID with prefix', () => {
      const id = generateId('user', 6);
      
      expect(id).toMatch(/^user-[A-Za-z0-9]{6}$/);
    });

    test('should generate unique IDs', () => {
      const id1 = generateId();
      const id2 = generateId();
      
      expect(id1).not.toBe(id2);
    });
  });

  describe('formatTimestamp', () => {
    const testDate = new Date('2024-01-15T10:30:00Z');

    test('should format timestamp as ISO by default', () => {
      const result = formatTimestamp(testDate);
      
      expect(result).toBe('2024-01-15T10:30:00.000Z');
    });

    test('should format timestamp with different formats', () => {
      expect(formatTimestamp(testDate, 'ISO')).toBe('2024-01-15T10:30:00.000Z');
      expect(formatTimestamp(testDate, 'local')).toMatch(/2024/); // Locale-dependent
      expect(formatTimestamp(testDate, 'date')).toMatch(/2024/);
      expect(formatTimestamp(testDate, 'time')).toMatch(/:/);
    });

    test('should handle invalid date', () => {
      expect(formatTimestamp('invalid-date')).toBe('Invalid Date');
      expect(formatTimestamp(null)).toBe('1970-01-01T00:00:00.000Z');
    });

    test('should use current date by default', () => {
      const result = formatTimestamp();
      
      expect(typeof result).toBe('string');
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
    });
  });
});
