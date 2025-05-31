// scripts/utils.js
// Utility functions for file system, JSON, string, and logging operations

import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';

/**
 * Security function to sanitize content for logging
 * Prevents log injection attacks by sanitizing user input before logging
 * @param {string} content - Content to sanitize
 * @returns {string} Sanitized content safe for logging
 */
function sanitizeForLogging(content) {
  if (typeof content !== 'string') {
    content = String(content);
  }
  // Remove or escape potentially dangerous characters for log injection
  return content
    .replace(/[\r\n]/g, ' ') // Replace newlines with spaces
    .replace(/[\x00-\x1F\x7F]/g, '') // Remove control characters
    .replace(/[<>'"&]/g, (char) => { // Escape HTML/XML chars
      const escapeMap = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '&': '&amp;' };
      return escapeMap[char] || char;
    });
}

/**
 * Reads a file and returns its contents as a string.
 * Returns null if the file does not exist or an error occurs.
 * @param {string} filePath
 * @returns {Promise<string|null>}
 */
async function safeReadFile(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch (err) {
    return null;
  }
}

/**
 * Writes data to a file. Creates the parent directory if it doesn't exist.
 * @param {string} filePath
 * @param {string|Buffer} data
 * @returns {Promise<void>}
 */
async function safeWriteFile(filePath, data) {
  try {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, data);
  } catch (err) {
    throw err;
  }
}

/**
 * Checks if a given path exists.
 * @param {string} targetPath
 * @returns {Promise<boolean>}
 */
async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Ensures a directory exists, creating it if necessary.
 * @param {string} dirPath
 * @returns {Promise<void>}
 */
async function ensureDirectory(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

/**
 * Parses a JSON string or file contents safely.
 * Returns null if parsing fails.
 * @param {string} jsonString
 * @returns {any|null}
 */
function safeParseJson(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
}

/**
 * Stringifies an object to JSON with standard indentation (2 spaces).
 * Returns null if stringification fails.
 * @param {any} obj
 * @returns {string|null}
 */
function safeStringifyJson(obj) {
  if (obj === undefined || obj === null) return null;
  try {
    return JSON.stringify(obj, null, 2);
  } catch {
    return null;
  }
}

/**
 * Loads and parses a JSON file safely.
 * Returns null if the file does not exist or parsing fails.
 * @param {string} filePath
 * @returns {Promise<any|null>}
 */
async function loadJsonFile(filePath) {
  const content = await safeReadFile(filePath);
  if (content === null) return null;
  return safeParseJson(content);
}

/**
 * Extracts the first non-empty paragraph from text.
 * @param {string} text
 * @returns {string}
 */
function extractFirstParagraph(text) {
  if (!text) return '';
  const paragraphs = text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  return paragraphs[0] || '';
}

/**
 * Truncates a string to a max length, adding ellipsis if needed.
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
function truncateString(text, maxLength) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Standardized error logging with log injection mitigation.
 * Sanitizes the message to prevent log line splitting.
 * @param {string} message
 * @param {Error|any} error  // JSDoc updated to reflect 'any' for the error param
 */
function logError(message, error) {
  // Sanitize message: replace \r and \n with spaces to prevent log line splitting
  const sanitizedMessage = String(message).replace(/[\r\n]+/g, ' ');
  if (error instanceof Error) {
    // Let console.error handle Error objects for full stack trace readability
    console.error(`[ERROR] ${sanitizedMessage}\n`, error);
  } else if (error !== undefined) {
    // Sanitize non-Error error values
    const sanitizedError = String(error).replace(/[\r\n]+/g, ' ');
    console.error(`[ERROR] ${sanitizedMessage}\n`, sanitizedError);
  } else {
    console.error(`[ERROR] ${sanitizedMessage}`);
  }
}

/**
 * Logs an info message with a standard prefix.
 * @param {string} message
 */
function logInfo(message) {
  console.log(`[INFO] ${message}`);
}

/**
 * Logs a warning message with a standard prefix.
 * @param {string} message
 */
function logWarning(message) {
  console.warn(`[WARN] ${message}`);
}

/**
 * Gets files matching a glob pattern in a directory (sync for compatibility).
 * @param {string} pattern The glob pattern to match.
 * @param {string} [cwd=process.cwd()] Optional. The current working directory. Defaults to `process.cwd()`.
 * @returns {string[]} An array of matching file paths, or an empty array on error.
 */
function getFilesByGlobSync(pattern, cwd = process.cwd()) {
  if (typeof pattern !== 'string' || pattern.trim() === '') {
    logError('Error with glob: Pattern must be a non-empty string.', { pattern });
    return [];
  }
  // Validate cwd
  if (typeof cwd !== 'string' || cwd.trim() === '') {
    logError('Error with glob: CWD must be a non-empty string.', { cwd });
    return [];
  }
  try {
    // Use glob.sync for synchronous matching
    return glob.sync(pattern, { cwd });
  } catch (error) {
    logError(`Error with glob pattern: "${pattern}" in CWD: "${cwd}"`, error);
    return [];
  }
}

/**
 * Gets files matching a glob pattern in a directory (async for better performance).
 * @param {string} pattern The glob pattern to match.
 * @param {string} [cwd=process.cwd()] Optional. The current working directory. Defaults to `process.cwd()`.
 * @returns {Promise<string[]>} A promise that resolves to an array of matching file paths, or an empty array on error.
 */
async function getFilesByGlob(pattern, cwd = process.cwd()) {
  if (typeof pattern !== 'string' || pattern.trim() === '') {
    logError('Error with glob: Pattern must be a non-empty string.', { pattern });
    return [];
  }
  // Validate cwd
  if (typeof cwd !== 'string' || cwd.trim() === '') {
    logError('Error with glob: CWD must be a non-empty string.', { cwd });
    return [];
  }
  try {
    return await glob(pattern, { cwd });
  } catch (error) {
    logError(`Error with glob pattern: "${pattern}" in CWD: "${cwd}"`, error);
    return [];
  }
}

// At the end of the file, export all functions as named exports
export {
  sanitizeForLogging,
  safeReadFile,
  safeWriteFile,
  pathExists,
  ensureDirectory,
  safeParseJson,
  safeStringifyJson,
  loadJsonFile,
  logInfo,
  logWarning,
  logError,
  getFilesByGlob,
  getFilesByGlobSync,
  extractFirstParagraph,
  truncateString,
};
