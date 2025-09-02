
module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["airbnb", "plugin:react/recommended"],
  plugins: ["react"],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
};
