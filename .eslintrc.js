module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-pascal-case": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/no-unknown-property": ["error", { ignore: ["sx"] }],
    "import/no-unresolved": ["error", { ignore: ["^next/"] }],
  },
};
