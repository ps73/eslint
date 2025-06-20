# ps73/eslint-config

This package provides a shared ESLint configuration for my projects. It includes typescript, prettier and react configurations.

```bash
npm install @ps73/eslint-config -D
```

## Usage

To lint `.ts`, `.js`, `.mjs` and `.cjs` files add the following to your `eslint.config.js` file:

```js
import config from '@ps73/eslint-config';

export default config;
```

Add to your package.json

```json
{
  "prettier": "@ps73/eslint-config/prettier.json"
}
```

### Other EcmaScript Versions

By default the configuration uses ES2022. If you want to use a different version, customize your `eslint.config.js` file:

```js
import config from '@ps73/eslint-config';

export default [
  ...config,
  {
    languageOptions: {
      ecmaVersion: 2023, // or 2022, 2021, 2020, 2019, ...
    },
  },
];
```

### For React Projects

To lint `.ts`, `.tsx`, `.js`, `.jsx`, `.mjs` and `.cjs` files use the react configuration:

```js
import config from '@ps73/eslint-config/react';

export default config;
```

### For React Native Projects

**Note**: React Native support is currently not available with ESLint 9 due to `eslint-plugin-react-native` not supporting ESLint 9 yet. 

For React Native projects, you can:
1. Use the React configuration as a base and manually configure React Native rules
2. Wait for `eslint-plugin-react-native` to add ESLint 9 support
3. Use `@eslint/compat` to wrap the plugin (requires installation: `npm install @eslint/compat`)

### Inside VSCode

Install [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

Add to .vscode/settings.json:

```jsonc
{
  "editor.formatOnPaste": false,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
  },
  "eslint.enable": true,
  "eslint.options": { "reportUnusedDisableDirectives": "error" },
  "eslint.codeAction.disableRuleComment": {
    "enable": true,
    "location": "separateLine",
    "commentStyle": "line",
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
}
```
