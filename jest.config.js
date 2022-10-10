module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
    '**/__tests__/**/*.+(ts|tsx|js)'
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.jest.json'
      }
    ]
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};
