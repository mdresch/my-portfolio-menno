// Jest setup file for global test configuration

// Suppress console output during tests unless specifically testing them
const originalError = console.error;
const originalLog = console.log;
const originalWarn = console.warn;

beforeEach(() => {
  // Suppress console output during tests
  console.error = jest.fn();
  console.log = jest.fn();
  console.warn = jest.fn();
});

afterEach(() => {
  console.error = originalError;
  console.log = originalLog;
  console.warn = originalWarn;
});
