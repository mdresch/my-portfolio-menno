// scripts/utils.test.js
// Unit tests for scripts/utils.js utility functions

const fs = require('fs');
const path = require('path');
const utils = require('./utils');

describe('utils.js', () => {
  const tmpFile = path.join(__dirname, 'tmp-test-file.txt');
  const tmpDir = path.join(__dirname, 'tmp-test-dir');
  const tmpJsonFile = path.join(__dirname, 'tmp-test-file.json');

  afterEach(async () => {
    if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
    if (fs.existsSync(tmpJsonFile)) fs.unlinkSync(tmpJsonFile);
    if (fs.existsSync(tmpDir)) fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  test('safeReadFile and safeWriteFile (async)', async () => {
    await utils.safeWriteFile(tmpFile, 'hello');
    const content = await utils.safeReadFile(tmpFile);
    expect(content).toBe('hello');
    const missing = await utils.safeReadFile('nonexistent.txt');
    expect(missing).toBeNull();
  });

  test('safeParseJson and safeStringifyJson', () => {
    const obj = { a: 1 };
    const str = utils.safeStringifyJson(obj);
    expect(str).toBe(JSON.stringify(obj, null, 2));
    expect(utils.safeParseJson(str)).toEqual(obj);
    expect(utils.safeParseJson('not json')).toBeNull();
    expect(utils.safeStringifyJson(undefined)).toBeNull();
  });

  test('ensureDirectory and pathExists (async)', async () => {
    await utils.ensureDirectory(tmpDir);
    const exists = await utils.pathExists(tmpDir);
    expect(exists).toBe(true);
  });

  test('loadJsonFile (async)', async () => {
    const obj = { test: 123 };
    await utils.safeWriteFile(tmpJsonFile, JSON.stringify(obj));
    const loaded = await utils.loadJsonFile(tmpJsonFile);
    expect(loaded).toEqual(obj);
    const missing = await utils.loadJsonFile('nonexistent.json');
    expect(missing).toBeNull();
  });

  test('logInfo, logWarning, logError', () => {
    expect(() => utils.logInfo('Test info')).not.toThrow();
    expect(() => utils.logWarning('Test warning')).not.toThrow();
    expect(() => utils.logError('Test error', new Error('fail'))).not.toThrow();
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
});
