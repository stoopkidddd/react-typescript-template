// jest.config.js
module.exports = {
  preset: "ts-jest/presets/js-with-babel",
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: 'jest-coverage',
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js"
  ],

  moduleNameMapper: {
    "^@root(.*)$": "<rootDir>/src$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@translations(.*)$": "<rootDir>/src/translations$1",
  },

  moduleDirectories: [
    'node_modules',
    'utils', // a utility folder
    __dirname, // the root directory
  ],


};
