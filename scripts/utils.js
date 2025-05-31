// scripts/utils.js
// Utility functions for file system, JSON, string, and logging operations

const fs = require('fs');
const path = require('path');
const glob = require('glob');

/**
 * Safely reads a file and returns its content, or null if error.
 * @param {string} filePath
 * @param {string} [encoding='utf-8']
 * @returns {string|null}
 */
function safeReadFile(filePath, encoding = 'utf-8') {
  try {
    return fs.readFileSync(filePath, encoding);
  } catch (error) {
    logError(`Error reading file: ${filePath}`, error);
    return null;
  }
}

/**
 * Safely writes content to a file, returns true if successful.
 * @param {string} filePath
 * @param {string} content
 * @param {string} [encoding='utf-8']
 * @returns {boolean}
 */
function safeWriteFile(filePath, content, encoding = 'utf-8') {
  try {
    fs.writeFileSync(filePath, content, encoding);
    return true;
  } catch (error) {
    logError(`Error writing file: ${filePath}`, error);
    return false;
  }
}

/**
 * Safely parses a JSON string, returns object or null if error.
 * @param {string} str
 * @returns {object|null}
 */
function safeParseJSON(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    logError('Error parsing JSON string', error);
    return null;
  }
}

/**
 * Safely stringifies an object to JSON, returns string or null if error.
 * @param {object} obj
 * @returns {string|null}
 */
function safeStringifyJSON(obj) {
  if (obj === undefined || obj === null) return null;
  try {
    return JSON.stringify(obj, null, 2);
  } catch (error) {
    logError('Error stringifying JSON object', error);
    return null;
  }
}

/**
 * Ensures a directory exists, creates it if not present.
 * @param {string} dirPath
 */
function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

/**
 * Gets files matching a glob pattern in a directory.
 * @param {string} pattern
 * @param {string} cwd
 * @returns {string[]}
 */
function getFilesByGlob(pattern, cwd) {
  try {
    return glob.sync(pattern, { cwd });
  } catch (error) {
    logError(`Error with glob pattern: ${pattern} in ${cwd}`, error);
    return [];
  }
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

module.exports = {
  safeReadFile,
  safeWriteFile,
  safeParseJSON,
  safeStringifyJSON,
  ensureDirExists,
  getFilesByGlob,
  extractFirstParagraph,
  truncateString,
  logError
};
