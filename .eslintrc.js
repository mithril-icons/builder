module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: "standard-with-typescript",
  parserOptions: {
    project: "./tsconfig.json"
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/restrict-template-expressions": ["error", { allowNumber: true }]
  }
};
