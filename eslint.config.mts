import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: [
      '**/coverage/**',
      '**/public',
      '**/dist',
      'pnpm-lock.yaml',
      'pnpm-workspace.yaml',
      'node_modules/',
      '**/dist/',
      '**/build/',
      '**/.next/',
      '**/out/',
      '**/.turbo/',
      '**/.vscode/',
      '**/coverage/',
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/build/**',
      '**/.turbo/**',
      '**/.vscode/**',
      '**/coverage/**',
      'pnpm-lock.yaml',
      'pnpm-workspace.yaml',
      '**/out/**',
    ],
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          jsxSingleQuote: true,
          semi: true,
          trailingComma: 'es5',
        },
      ],
    },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  tseslint.configs.recommended,

  eslintPluginPrettierRecommended,
]);
