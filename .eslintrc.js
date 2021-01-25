module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    plugins: [
        '@typescript-eslint',
        'prettier'
    ],
    extends: [
        'airbnb-typescript',
        'prettier'
    ],
    rules: {
        "prettier/prettier": 2 // Means error
    },
    env: {
        browser: true,
        jest: true
    },
    // eslint complains when using arrow functions with typescript. 
    // You can double define the props but it seems overly verbose.
    // Disabling proptypes for tsx files instead
    // see here: https://github.com/yannickcr/eslint-plugin-react/issues/2353
    overrides: [
        {
            "files": ["**/*.tsx"],
            "rules": {
                "react/prop-types": "off",
                "react/jsx-wrap-multilines": ["error", {"declaration": false, "assignment": false}],
            }
        }
    ]

};