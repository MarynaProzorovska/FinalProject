/**
 * ESLint конфігурація для Playwright тестового проекту
 * Використовує ESLint 9 flat config формат
 */

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  // ============================================
  // Базові правила ESLint для JavaScript
  // ============================================
  js.configs.recommended,

  // ============================================
  // Правила TypeScript-ESLint
  // ============================================
  ...tseslint.configs.recommended,

  // ============================================
  // Prettier - вимикає конфліктуючі правила
  // ============================================
  prettierConfig,

  // ============================================
  // Глобальні виключення
  // ============================================
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
      'dist/**',
      '.git/**',
    ],
  },

  // ============================================
  // Конфігурація для TypeScript файлів
  // ============================================
  {
    files: ['**/*.{ts,mts,cts}'],
    plugins: {
      prettier, // Додаємо Prettier плагін
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // === Prettier ===
      'prettier/prettier': 'warn', // Показує помилки форматування як попередження

      // === TypeScript правила ===
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },

  // ============================================
  // Конфігурація для Playwright тестів
  // ============================================
  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**/*.spec.ts', 'specs/**/*.spec.ts'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,

      // === Якість тестів ===
      'playwright/expect-expect': 'warn',
      'playwright/no-conditional-in-test': 'warn',
      'playwright/valid-expect': 'error',

      // === Заборонені практики ===
      'playwright/no-focused-test': 'error', // Забороняє test.only()
      'playwright/no-skipped-test': 'warn',
      'playwright/no-wait-for-timeout': 'warn',
      'playwright/no-networkidle': 'error',

      // === Рекомендації ===
      'playwright/no-useless-await': 'warn',
      'playwright/prefer-web-first-assertions': 'warn',
    },
  }
);