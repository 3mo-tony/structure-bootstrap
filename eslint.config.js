const eslint = require('@eslint/js')
const tseslint = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')
const eslintConfigPrettier = require('eslint-config-prettier')
const prettier = require('eslint-plugin-prettier')
const globals = require('globals')

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'migrations/**',
      'seeders/**',
      'models/**',
      '**/*.js'
    ]
  },

  eslint.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      globals: {
        ...globals.node,
        ...globals.es2021
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'prettier': prettier
    },
    rules: {
      'explicit-function-return-type': 'off',
      'explicit-module-boundary-types': 'off',
      'no-explicit-any': 'off',
      'no-unused-vars': 'off',
      'prettier/prettier': 'error'
    }
  },
  eslintConfigPrettier
]
