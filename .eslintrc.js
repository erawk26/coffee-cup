module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "impliedStrict": true,
            "classes": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "prefer-const": [
            "error",
            {
                "destructuring": "all"
            }
        ],
        "no-unused-vars": [
            1,
            {
                "argsIgnorePattern": "res|next|jsx|^err"
            }
        ],
        "no-unused-expressions": [
            2,
            {
                "allowTaggedTemplates": true
            }
        ],
        "no-console": 0,
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 100
            }
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            2,
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
    }
};