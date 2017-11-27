module.exports = {
  env: {
    // We're running in a node.js environment
    node: true,
    // We're using the Jest testing library, and its global functions
    'jest/globals': true
  },
  extends: [
    'eslint:recommended'
  ],
  plugins: [
    'jest'
  ],
  rules: {
    // Custom eslint rules
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'eqeqeq': ['error', 'always'],

    'no-console': ['warn']
  }
};
