import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      },
      ecmaVersion: 2022,
      sourceType: "commonjs"
    },
    rules: {
      "no-unused-vars": "error",
      "no-console": "off",
      "indent": ["error", 4],
      "quotes": ["error", "single"],
      "semi": ["error", "always"]
    }
  }
];
