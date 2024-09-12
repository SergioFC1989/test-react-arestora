import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "react/no-unescaped-entities": "off",
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          trailingComma: "none",
          tabWidth: 2,
          endOfLine: "auto",
        },
      ],
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "warn",
      indent: [
        "error",
        2,
        {
          SwitchCase: 1,
        },
      ],
      "comma-dangle": ["error", "never"],
    },
  },

  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
