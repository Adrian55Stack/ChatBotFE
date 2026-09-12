module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/src/app/mocks/'],
    transform: {
        '^.+\\.ts$': 'ts-jest'
    },
    transformIgnorePatterns: [
        '/node_modules/(?!flat)/',
    ],
    coverageReporters: ["json", "lcov", "text", "clover"]
};