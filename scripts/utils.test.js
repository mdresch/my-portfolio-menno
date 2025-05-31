// scripts/utils.test.js
// Unit tests for scripts/utils.js utility functions

const fs = require('fs');
const path = require('path');
const utils = require('./utils');

describe('utils.js', () => {
  const tmpFile = path.join(__dirname, 'tmp-test-file.txt');
  const tmpDir = path.join(__dirname, 'tmp-test-dir');

  afterEach(() => {
    if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
    if (fs.existsSync(tmpDir)) fs.rmdirSync(tmpDir, { recursive: true });
  });

  test('safeReadFile and safeWriteFile', () => {
    expect(utils.safeWriteFile(tmpFile, 'hello')).toBe(true);
    expect(utils.safeReadFile(tmpFile)).toBe('hello');
    expect(utils.safeReadFile('nonexistent.txt')).toBeNull();
  });

  test('safeParseJSON and safeStringifyJSON', () => {
    const obj = { a: 1 };
    const str = utils.safeStringifyJSON(obj);
    expect(str).toBe(JSON.stringify(obj, null, 2));
    expect(utils.safeParseJSON(str)).toEqual(obj);
    expect(utils.safeParseJSON('not json')).toBeNull();
    expect(utils.safeStringifyJSON(undefined)).toBeNull();
  });

  test('ensureDirExists', () => {
    utils.ensureDirExists(tmpDir);
    expect(fs.existsSync(tmpDir)).toBe(true);
  });

  test('getFilesByGlob', () => {
    utils.safeWriteFile(tmpFile, 'glob test');
    const files = utils.getFilesByGlob('*.txt', __dirname);
    expect(files).toContain('tmp-test-file.txt');
  });

  test('extractFirstParagraph', () => {
    const text = 'First paragraph.\n\nSecond paragraph.';
    expect(utils.extractFirstParagraph(text)).toBe('First paragraph.');
    expect(utils.extractFirstParagraph('')).toBe('');
  });

  test('truncateString', () => {
    expect(utils.truncateString('abcdef', 4)).toBe('abcd...');
    expect(utils.truncateString('abc', 4)).toBe('abc');
  });

  test('logError', () => {
    // Should not throw
    expect(() => utils.logError('Test error', new Error('fail'))).not.toThrow();
  });
});
