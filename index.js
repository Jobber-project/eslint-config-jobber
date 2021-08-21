module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-prettier'),
    require.resolve('eslint-config-prettier/react'),
  ],
  parser: 'babel-eslint',
  plugins: ['prettier', 'react-hooks'],
  env: {
    browser: true,
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'import/prefer-default-export': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'comma-dangle': ['error', 'always-multiline'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': 'off',
    'react/sort-comp': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  overrides: [
    {
      files: ['*Slice.js'], // Redux-toolkit slices use immer
      rules: {
        'no-param-reassign': 0,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['prettier', 'react-hooks', '@typescript-eslint'],
    },
    {
      files: ['*.test.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['prettier', 'react-hooks', '@typescript-eslint', 'jest'],
    },
  ],
}
