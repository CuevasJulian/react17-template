module.exports = {
  settings: {
    "jest":{
      "version":27
    },
    "import/resolver":{
        "node":{
            "extensions":[".js",".jsx",".ts",".tsx"]
        }
    }
  },
  root:true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    "plugin:react/recommended",
    'airbnb',
    "plugin:jest/recommended",
    "prettier",
    "plugin:jsx-a11y/recommended",
    "eslint:recommended"
  ],
  rules: {
    "import/extensions":"off",
    "import/no-extraneous-dependencies":"off",
    "react/jsx-filename-extension":[1, { "extensions": [".tsx",".ts"]}],
    "import/prefer-default-export": "error",
    "react/jsx-props-no-spreading":"off",
    "react/react-in-jsx-scope":"off",
    "lit-a11y/click-events-have-key-events":"off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/function-component-definition":"off",
    "import/no-unresolved":"warn",
    "react/require-default-props":"off"
  },
};
