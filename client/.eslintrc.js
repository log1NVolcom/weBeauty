module.exports = {
    parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'airbnb',
        'prettier',
        'prettier/@typescript-eslint', 
        'prettier/react',
        'plugin:jest/recommended'
    ],
    plugins: [
        'react',
        'jsx-a11y',
        'import',
        'prettier',
        'jest',
        'jquery',
        'markdown'
    ],
    parserOptions: {
        ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',  // Allows for the use of imports
        ecmaFeatures: {
            jsx: true,  // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        //typescript

        //general
        'react/jsx-filename-extension': 0,
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to']
            }
        ],
        'import/order': [
            'error',
            {
                groups: [
                    'external',
                    'index',
                    'sibling',
                    'parent',
                    'internal',
                    'builtin'
                ]
            }
        ],
        'react/require-default-props': 'warn',
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'no-underscore-dangle': [
            'error',
            {
                allow: ['_id']
            }
        ],
        'prettier/prettier': ['error'],
        'jquery/no-ajax': 2,
        'jquery/no-ajax-events': 2,
        'jquery/no-animate': 2,
        'jquery/no-attr': 2,
        'jquery/no-bind': 2,
        'jquery/no-class': 2,
        'jquery/no-clone': 2,
        'jquery/no-closest': 2,
        'jquery/no-css': 2,
        'jquery/no-data': 2,
        'jquery/no-deferred': 2,
        'jquery/no-delegate': 2,
        'jquery/no-each': 2,
        'jquery/no-extend': 2,
        'jquery/no-fade': 2,
        'jquery/no-filter': 2,
        'jquery/no-find': 2,
        'jquery/no-global-eval': 2,
        'jquery/no-grep': 2,
        'jquery/no-has': 2,
        'jquery/no-hide': 2,
        'jquery/no-html': 2,
        'jquery/no-in-array': 2,
        'jquery/no-is-array': 2,
        'jquery/no-is-function': 2,
        'jquery/no-is': 2,
        'jquery/no-load': 2,
        'jquery/no-map': 2,
        'jquery/no-merge': 2,
        'jquery/no-param': 2,
        'jquery/no-parent': 2,
        'jquery/no-parents': 2,
        'jquery/no-parse-html': 2,
        'jquery/no-prop': 2,
        'jquery/no-proxy': 2,
        'jquery/no-ready': 2,
        'jquery/no-serialize': 2,
        'jquery/no-show': 2,
        'jquery/no-size': 2,
        'jquery/no-sizzle': 2,
        'jquery/no-slide': 2,
        'jquery/no-submit': 2,
        'jquery/no-text': 2,
        'jquery/no-toggle': 2,
        'jquery/no-trigger': 2,
        'jquery/no-trim': 2,
        'jquery/no-val': 2,
        'jquery/no-when': 2,
        'jquery/no-wrap': 2
    },
};