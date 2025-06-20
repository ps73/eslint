import config from './index.js';

export default [
  ...config,
  {
    languageOptions: {
      globals: {
        module: true,
      },
    },
  },
];
