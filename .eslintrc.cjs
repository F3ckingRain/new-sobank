module.exports = {
  "env": {
    "jest": true,
    "browser": true,
    "es2021": true
  },
  "extends": ["airbnb", "prettier", "plugin:@typescript-eslint/recommended", "plugin:storybook/recommended"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "prettier", "react-hooks", "@typescript-eslint"],
  "globals": {
    "cy": true,
    "describe": true,
    "it": true
  },
  "rules": {
    "no-shadow": "off",
    "no-alert": "error",
    "no-debugger": "error",
    "no-plusplus": "off",
    "no-unused-vars": "off",
    "no-magic-numbers": "off",
    "func-names": "off",
    "default-param-last": "off",
    "no-use-before-define": "off",
    "no-restricted-syntax": "off",
    "no-param-reassign": [2, {
      "props": false
    }],
    "guard-for-in": "off",
    "no-multiple-empty-lines": ["error", {
      "max": 1
    }],
    "quote-props": ["error", "as-needed"],
    "no-restricted-imports": "off",
    "@typescript-eslint/no-restricted-imports": [
      "warn"
    ],
    "@typescript-eslint/no-var-requires": 0,
    "react/jsx-no-useless-fragment": [2, {
      "allowExpressions": true
    }],
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "prettier/prettier": "error",
    "react/prop-types": 0,
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "no-nested-ternary": "off",
    "camelcase": "off",
    "no-promise-executor-return": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "react/jsx-filename-extension": [1, {
      "extensions": [".ts", ".jsx", ".tsx"]
    }],
    "react/button-has-type": "off",
    "react/function-component-definition": [2, {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function"
    }],
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/order": ["error", {
      "newlines-between": "always",
      "pathGroupsExcludedImportTypes": ["react"],
      "alphabetize": {
        "order": "asc",
        "caseInsensitive": true
      },
      "groups": ["builtin", "external", "parent", "sibling", "index"],
      "pathGroups": [{
        "pattern": "react",
        "group": "external",
        "position": "before"
      }]
    }],
    "import/no-extraneous-dependencies": ["off", {
      "devDependencies": true,
      "optionalDependencies": true,
      "peerDependencies": true
    }]
  },
  "settings": {
    "import/resolver": {
      "typescript": {},
      "alias": {
        "map": ["@", "./src"]
      },
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};