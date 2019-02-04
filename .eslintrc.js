module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true,
        "jest/globals": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["jest"],
    "rules": {
        "indent": ["error", 2],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "comma-dangle": ["error", "never"],
        "eol-last": ["error", "always"],
        "no-multiple-empty-lines": [
            "error",
            { "max": 1, "maxBOF": 0, "maxEOF": 0 }
        ],
        "no-console": "warn",
        "no-unused-vars": "warn",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    },
    "globals": {
        "__dirname": true
    }
};