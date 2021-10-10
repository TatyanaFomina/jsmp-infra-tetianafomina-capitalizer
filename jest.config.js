module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./'],
  silent: true,
  verbose: true,
  testMatch: ['**/tests/*.test.ts'],
  collectCoverageFrom: ['src/*.{ts}'],
  coverageReporters: ['html', 'text', 'text-summary']
};
