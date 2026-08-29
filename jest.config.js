module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    transform: {
        '^.+\\.ts$': 'ts-jest', // Only transform .ts files
    },
    transformIgnorePatterns: [
        '/node_modules/(?!flat)/', // Exclude modules except 'flat' from transformation
    ],
    collectCoverage: true,
  
    // Specifies 'lcov' and 'text' (for console visibility) as outputs
    coverageReporters: ["json", "lcov", "text", "clover"],
  
    // Directs Jest to output reports directly into your ./coverage folder
    coverageDirectory: "./coverage"
};