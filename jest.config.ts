import type { Config } from '@jest/types';

const JestConfig: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'test_reports',
  moduleDirectories: ['node_modules', 'src'],
  notify: true,
  silent: true,
  coverageThreshold: {
    global: {
      lines: 80,
      branches: 80,
      functions: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: ['./src/**'],
  coveragePathIgnorePatterns: [
    '\\w+.json',
    './src/types.ts',
    '__snapshots__',
  ],
  coverageReporters: ['json-summary', 'html'],
};

export default JestConfig;
