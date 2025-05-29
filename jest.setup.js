// Jest setup file for global test configuration

// Suppress console.error and console.log during tests unless specifically testing them
const originalError = console.error;
const originalLog = console.log;

beforeEach(() => {
  // Suppress console output during tests
  console.error = jest.fn();
  console.log = jest.fn();
});

afterEach(() => {
  console.error = originalError;
  console.log = originalLog;
});
