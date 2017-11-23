module.exports = {
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        'prettier'
    ],
    plugins: [
        'prettier'
    ],
    rules: {
        // Custom prettier rules
        'prettier/prettier': [
            'error', {
                singleQuote: true, 
                trailingComma: 'all',
            }
        ],
        // Custom eslint rules
        eqeqeq: ['error', 'always']
    }
};