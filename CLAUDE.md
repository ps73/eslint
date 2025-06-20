# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is `@ps73/eslint-config`, a shareable ESLint configuration package that provides opinionated linting rules for JavaScript, TypeScript, React, and React Native projects. The package is published to npm and used across multiple projects.

## Architecture

The configuration is structured as follows:

- **`index.js`** - Core ESLint configuration with TypeScript support
- **`react.js`** - Extends core config with React-specific rules  
- **`react-native.js`** - Extends React config for React Native projects
- **`prettier.json`** - Prettier configuration with import sorting

The configurations use a layered approach where each specialization extends the base configuration and adds environment-specific rules.

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
- Base config supports ES2022, CommonJS/ESM modules
- TypeScript override requires `tsconfig.json` in target projects
- React config adds JSX, accessibility, and React-specific rules
- React Native config disables browser globals and adds RN environment

### Prettier Integration
- Import sorting via `@trivago/prettier-plugin-sort-imports`
- Enforces consistent code formatting across all configurations
- 120 character line length limit

## Publishing

This is an npm package with version managed in `package.json`. The `files` array controls what gets published to npm.