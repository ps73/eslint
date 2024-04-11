module.exports = {
  root: true,

  ignorePatterns: ['dist', 'node_modules', '.temp'],
  extends: ['eslint:recommended'],
  plugins: ['prettier'],

  parserOptions: {
    ecmaVersion: 2022,
  },

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
      },
    },

    {
      files: ['**/*.cjs'],
      parserOptions: {
        sourceType: 'script',
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
