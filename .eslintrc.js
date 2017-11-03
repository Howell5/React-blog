module.exports = {
  extends: "airbnb",
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
  },
  rules: {
    "no-console": 'off',
  },
  plugins: [
    "html",
    "react",
    "jsx-a11y",
  ]
};