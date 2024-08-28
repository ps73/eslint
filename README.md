# ps73/eslint-config

This package provides a shared ESLint configuration for my projects. It includes typescript, prettier and react configurations.

```bash
npm install @ps73/eslint-config -D
```

## Usage

To lint `.ts`, `.js`, `.mjs` and `.cjs` files add the following to your `.eslintrc.cjs` file:

```cjs
module.exports = {
  root: true,

  extends: ['@ps73/eslint-config'],
};
```

Add to your package.json

```json
{
  "prettier": "@ps73/eslint-config/prettier.json"
}
```

### Other EcmaScript Versions

By default the configuration uses ES2022. If you want to use a different version, add the following to your `.eslintrc.cjs` file:

```cjs
module.exports = {
  root: true,

  extends: ['@ps73/eslint-config'],

  parserOptions: {
    ecmaVersion: 2023, // or 2022, 2021, 2020, 2019, ...
  },

  // when using react
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      env: {
        es2023: true, // or 2022, 2021, 2020, 2019, ...
      },
    },
  ],
};
```

### For React Projects

To lint `.ts`, `.tsx`, `.js`, `.jsx`, `.mjs` and `.cjs` files use the react configuration:

```cjs
module.exports = {
  root: true,

  extends: ['@ps73/eslint-config/react'],
};
```

### For React Native Projects

To lint `.ts`, `.tsx`, `.js`, `.jsx`, `.mjs` and `.cjs` files use the react configuration:

```cjs
module.exports = {
  root: true,

  extends: ['@ps73/eslint-config/react-native'],
};
```

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
