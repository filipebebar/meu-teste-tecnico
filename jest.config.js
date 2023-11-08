/* eslint-disable @typescript-eslint/no-var-requires */
const { moduleNameMapper } = require('tsconfig-paths-jest/jest.config')

module.exports = {
  rootDir: '',
  moduleFileExtensions: ['js', 'json', 'ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'utils',
    'schemas',
    'provider',
    '.mock.ts$',
    '.dto.ts$',
    '.errors.ts$',
    '.exception.ts$',
    '.schema.ts$',
    '.middleware.ts$',
    '.entity.ts$',
    '.migration.ts$',
    '.processor.ts$',
    '.decorator.ts$',
    '.abstract.ts$',
    '.interface.ts$',
    '.constants.ts$',
    '.interceptor.ts$',
  ],
  testRegex: '.spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleNameMapper,
}
