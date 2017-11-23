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
        eqeqeq: ['error', 'always'],
        'no-console': ['warn']
    }
};
