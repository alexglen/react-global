module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', { configFile: './babel.test-config.js' }],
  },
  testMatch: ['**/__tests__/*.(js|jsx)'],
  testPathIgnorePatterns: ['./node_modules/'],
};
