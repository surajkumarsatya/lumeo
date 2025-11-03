// eslint.config.js

import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import nextPlugin from 'eslint-config-next'; // 👈 NEW: Import the Next.js config

// Use an array export to define multiple configuration objects (Flat Config standard)
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  // --- 0. Base Configuration & Next.js Plugin ---

  // 1. Ignores should be at the top level
  {
    ignores: ['node_modules', '.next', 'dist', 'build'],
  },

  // 2. ✅ FIX: Load the Next.js configuration array directly.
  //    This replaces the problematic { extends: ['next/core-web-vitals'] } block.
  ...nextPlugin,

  // 3. Typescript Configuration
  ...tseslint.configs.recommended, // Loads recommended TS rules

  // --- 1. Custom Rules & Overrides ---

  // 4. Configuration to disable the rule for the Next.js generated file.
  {
    files: ['next-env.d.ts'], // Target ONLY the file that is auto-generated
    rules: {
      // Disable the rule that conflicts with Next.js's generated code
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },

  // 5. React Hooks Recommended Rules
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      // Load the recommended rules from react-hooks
      ...reactHooksPlugin.configs.recommended.rules,

      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // 6. Main Configuration (Applies to all files, after recommended configs)
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      // Use the parser loaded by tseslint.configs.recommended
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      prettier: prettierPlugin,
      react: reactPlugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // ✅ React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/self-closing-comp': 'warn',

      // ✅ Code Style & Safety
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-multi-spaces': 'error',

      // ✅ Formatting
      'prettier/prettier': 'error',
    },
  },
];
