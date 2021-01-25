// jest.config.js
module.exports = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: 'jest-coverage',
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js"
  ],

  moduleDirectories: [
    'node_modules',
    'utils', // a utility folder
    __dirname, // the root directory
  ],


};
