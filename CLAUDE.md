# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is `@ps73/eslint-config`, a shareable ESLint configuration package that provides opinionated linting rules for JavaScript, TypeScript, React, and React Native projects. The package is published to npm and uses ESLint 9's flat config format.

## Architecture

The configuration is structured as follows:

- **`index.js`** - Core ESLint configuration with TypeScript support (ESM flat config)
- **`react.js`** - Extends core config with React-specific rules  
- **`react-native.js`** - ~~Removed due to ESLint 9 compatibility issues~~
- **`prettier.json`** - Prettier configuration with import sorting

The configurations use ESLint 9's flat config format and are ES modules. Each specialization imports and extends the base configuration.

## Commands

### Linting
- `npm run lint` - Run ESLint with cache and unused disable directive reporting
- `npm run lint:fix` - Run ESLint with automatic fixes

### Git Hooks
- `npm run git-hooks:commit-msg` - Validate commit messages (commitlint)
- `npm run git-hooks:pre-commit` - Run lint-staged on staged files

### Package Management
- `npm run prepare` - Setup husky git hooks

## Configuration Details

### Commitlint
Uses conventional commits with custom scopes: `core`, `react`, `prettier`

### ESLint Configuration Structure
- Uses ESLint 9 flat config format (array of config objects)
- Base config supports ES2022, CommonJS/ESM modules  
- TypeScript config uses typescript-eslint v8 and requires `tsconfig.json` in target projects
- React config adds JSX, accessibility, and React-specific rules
- React Native config temporarily removed due to `eslint-plugin-react-native` not supporting ESLint 9

### Prettier Integration
- Import sorting via `@trivago/prettier-plugin-sort-imports`
- Enforces consistent code formatting across all configurations
- 120 character line length limit

## Publishing

This is an npm package with version managed in `package.json`. The `files` array controls what gets published to npm.