# ps73/eslint-config

This package provides a shared ESLint configuration for my projects. It includes typescript, prettier and react configurations.

```bash
npm install @ps73/eslint-config --D
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

### For React Projects

To lint `.ts`, `.tsx`, `.js`, `.jsx`, `.mjs` and `.cjs` files use the react configuration:

```cjs
module.exports = {
  root: true,

  extends: ['@ps73/eslint-config/react'],
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
