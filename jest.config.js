module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|scss|sass|less)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
};
