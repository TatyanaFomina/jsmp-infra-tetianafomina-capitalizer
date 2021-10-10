module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['./'],
    silent: true,
    verbose: true,
    testMatch: ['**/*.test.ts'],
    collectCoverageFrom: ['/*.{ts}'],
    coverageReporters: ['html', 'text', 'text-summary'],
};