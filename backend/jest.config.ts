import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    setupFiles: ['dotenv/config'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testPathIgnorePatterns: ['dist', 'jest.setup.ts', 'test-utils.tsx'],
};
export default config;
