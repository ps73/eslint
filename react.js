module.exports = {
  extends: ['@ps73/eslint-config'],

  env: {
    browser: true,
    es2022: true,
  },

  ignorePatterns: ['*.html'],

  overrides: [
    {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true,
        },
      },
      files: ['*.tsx', '*.jsx'],
      plugins: ['react', 'jsx-a11y', 'react-refresh'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      settings: {
        'react': {
          version: 'detect',
        },
        'formComponents': ['Form'],
        'linkComponents': [
          { name: 'Link', linkAttribute: 'to' },
          { name: 'NavLink', linkAttribute: 'to' },
        ],
        'import/resolver': {
          typescript: {},
        },
      },
    },
  ],
};
