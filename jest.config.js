module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  "transform": {
    "\\.(gql|graphql)$": "jest-transform-graphql",
    ".*": "babel-jest"
  }
};