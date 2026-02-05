import js from "@eslint/js";
import tanstackQuery from "@tanstack/eslint-plugin-query";
import { defineConfig, globalIgnores } from "eslint/config";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier/flat";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores([
    ".react-router",
    ".storybook",
    "app/__mocks__",
    "build",
    "eslint.config.js",
  ]),
  {
    name: "project",
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    name: "javascript",
    extends: [js.configs.recommended],
  },
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    name: "react",
    extends: [
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat["jsx-runtime"],
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  jsxA11y.flatConfigs.recommended,
  tanstackQuery.configs["flat/recommended"],
  storybook.configs["flat/recommended"],
  unicorn.configs.unopinionated,
  // Any other config imports go at the top
  prettier,
  {
    name: "overrides",
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
