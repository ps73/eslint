module.exports = {
  extends: ['@ps73/eslint-config/react'],

  plugins: ['react-native'],

  env: {
    'browser': false,
    'react-native/react-native': true,
  },

  globals: {
    window: false,
  },

  overrides: [
    {
      files: ['.eslintrc.js', '*.config.js'],

      globals: {
        module: true,
      },
    },
  ],
};
