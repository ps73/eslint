module.exports = {
  extends: ['@ps73/eslint-config'],

  env: {
    browser: true,
    es2023: true,
  },

  ignorePatterns: ['*.html'],

  overrides: [
    {
      files: ['*.jsx'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2023,
        sourceType: 'module',
      },
    },
    {
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
      rules: {
        'react-refresh/only-export-components': 'warn',
      },
    },
  ],
};
