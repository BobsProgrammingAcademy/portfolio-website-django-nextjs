module.exports = {
  roots: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', './src'],
  moduleFileExtensions: ['js', 'jsx'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    // Handle image imports
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/tests/mocks/fileMock.js',

    // Handle CSS imports (without CSS modules)
    '\\.(css|less)$': '<rootDir>/src/tests/mocks/fileMock.css',
  },
};
