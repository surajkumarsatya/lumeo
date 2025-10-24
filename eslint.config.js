// eslint.config.js

import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

// Use an array export to define multiple configuration objects (Flat Config standard)
export default [
  {
    // Ignores should be at the top level or within a separate config object
    ignores: ['node_modules', '.next', 'dist', 'build'],
  },

  // 1. Typescript Configuration
  ...tseslint.configs.recommended, // Loads recommended TS rules

  // Configuration to disable the rule for the Next.js generated file.
  {
    files: ['next-env.d.ts'], // Target ONLY the file that is auto-generated
    rules: {
      // Disable the rule that conflicts with Next.js's generated code
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },

  // 2. React Hooks Recommended Rules
  // FIX: Load the 'recommended' rules object from the reactHooksPlugin directly.
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      // NOTE: This object usually exports rules, which are merged here.
      // If using a very modern version of eslint-plugin-react-hooks,
      // you might prefer reactHooksPlugin.configs.flat.recommended
      ...reactHooksPlugin.configs.recommended.rules,

      // Keep only the warning level for exhaustive-deps if you want it
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // 3. Main Configuration (Applies to all files, after recommended configs)
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      // Keep only the plugins that don't export a configuration you already loaded
      prettier: prettierPlugin,
      react: reactPlugin,
    },
    settings: {
      // This is crucial for React plugin to determine the version
      react: { version: 'detect' },
    },
    rules: {
      // ✅ React (Use the official 'jsx-runtime' config to turn off 'react/react-in-jsx-scope')
      // NOTE: react/react-in-jsx-scope is likely not needed if using Next.js/React 17+
      'react/react-in-jsx-scope': 'off', // Keep this explicitly off

      // You can remove 'react/rules-of-hooks' because it's included in the 'reactHooksPlugin' load above.

      'react/jsx-boolean-value': ['warn', 'never'],
      'react/self-closing-comp': 'warn',

      // ✅ Code Style & Safety
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-multi-spaces': 'error',
      // ... (rest of your rules) ...

      // ✅ Formatting
      'prettier/prettier': 'error',

      // NOTE: You should also install and extend 'eslint-config-prettier'
      // to ensure no formatting rules conflict with Prettier.
    },
  },
];
