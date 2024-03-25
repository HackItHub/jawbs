module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["import", "react", "@typescript-eslint", "prettier"],
  rules: {
    "no-restricted-syntax": ["error", "Literal[value=/\\b__\\b/i]"],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "no-console": ["error"],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/jsx-uses-react": ["off"],
    "react/react-in-jsx-scope": ["off"],
    "react/jsx-props-so-spreading": ["off"],
    "no-shadow": "off",
  },
};
