module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "react-app",
    "react-app/jest",
    "eslint:recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
  },
};
