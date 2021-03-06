module.exports = {
  extends: ["airbnb"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  rules: {
    "max-len": [
      "error",
      {
        ignorePattern: "(\bimports+|:\\s(\\'.*?\\'))",
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        code: 80
      }
    ],
    "react/jsx-wrap-multilines": "off",
    "arrow-parens": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore"
      }
    ]
  }
};
