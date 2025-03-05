import path from "node:path";
import { fileURLToPath } from "node:url";

import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...fixupConfigRules(
    compat.extends(
      "plugin:import/recommended",
      "plugin:unicorn/recommended",
      "plugin:prettier/recommended",
    ),
  ),
  {
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
      "@typescript-eslint": typescriptEslintPlugin,
    },
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "unicorn/no-array-callback-reference": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            env: true,
            param: true,
          },
          replacements: {
            props: false,
            ref: false,
            params: false,
          },
        },
      ],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "unicorn/prefer-module": "off",
    },
  },
  {
    files: ["**/*.js"],
    rules: {
      "unicorn/prefer-module": "off",
    },
  },
];

export default eslintConfig;
