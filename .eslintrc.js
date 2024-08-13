export default {
    "parser": "@typescript-eslint/parser",
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
      "ecmaVersion": 2020,
      "sourceType": "module"
    },
    "rules": {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-inferrable-types": "warn",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/typedef": [
        "warn",
        {
          "arrayDestructuring": true,
          "arrowParameter": false,
          "memberVariableDeclaration": true,
          "objectDestructuring": true,
          "parameter": true,
          "propertyDeclaration": true,
          "variableDeclaration": true
        }
      ],
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/member-delimiter-style": [
        "error",
        {
          "multiline": {
            "delimiter": "semi",
            "requireLast": true
          },
          "singleline": {
            "delimiter": "semi",
            "requireLast": false
          }
        }
      ]
    }
  }
  