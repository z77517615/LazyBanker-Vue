import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
  features: {
    stylistic: {
      braceStyle: '1tbs',
      semi: true,
    },
  },
})
  .withOverrides([
    {
      files: ['**/*.js', '**/*.ts', '**/*.vue'], 
      rules: {
        'curly': ['error', 'all'],
        'dot-notation': 'error',
        'no-console': ['warn', { allow: ['warn', 'error', 'debug'] }],
        'no-lonely-if': 'error',
        'no-useless-rename': 'error',
        'object-shorthand': 'error',
        'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: false }],
        'require-await': 'error',
        'sort-imports': ['error', { ignoreDeclarationSort: true }],
      },
    },
    {
      files: ['**/*.ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ]);
