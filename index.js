module.exports = {
  root: true,

  ignorePatterns: ['dist', 'node_modules', '.temp'],
  extends: ['eslint:recommended'],
  plugins: ['prettier'],
  settings: {},
  globals: {},

  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': ['warn'],
  },

  overrides: [
    {
      files: ['**/*.mjs', '**/*.js'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2023,
      },
    },

    {
      files: ['**/*.cjs'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2023,
      },
      globals: {
        module: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },

    {
      files: ['**/*.ts', '**/*.tsx'],

      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 2023,
        ecmaFeatures: {
          jsx: true,
        },
      },

      extends: ['plugin:@typescript-eslint/recommended'],

      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            disallowTypeAnnotations: false,
            fixStyle: 'separate-type-imports',
            prefer: 'type-imports',
          },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
      },
    },
  ],
};
