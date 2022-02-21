module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        semi: ["error", "always"],
        quotes: ["error", "double", { "allowTemplateLiterals": true }],
        "eol-last": ["error", "never"],
        "linebeak-style": 0
    },
};