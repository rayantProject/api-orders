import type {Config} from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    preset: 'ts-jest',
    roots: ['<rootDir>/../../src', '<rootDir>/../../test', '<rootDir>/../../config', '<rootDir>', '<rootDir>/../..'],
    testEnvironment: 'node',
    // testMatch: ['**/*.test.ts'],
    moduleFileExtensions: ['ts', 'js'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
  };
};