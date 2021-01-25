React Typescript template
=============================

This is a starter template for a React project with Typescript enabled. This does *NOT* use create-react-app, but is instead a more barebones template that exposes a basic babel/webpack setup. 

The template is already set up to use Jest/RTL for testing and react-intl-hooks for localization. 

Theming is purposefully left out for the user to decide (Material UI/Tailwind/Bootstrap/etc).

Documentation references npm, but yarn may be used as well.

- [React Typescript template](#react-typescript-template)
- [Setup](#setup)
  - [Recommended Extensions for VSCode](#recommended-extensions-for-vscode)
- [Available Scripts](#available-scripts)
  - [`npm run dev`](#npm-run-dev)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run start`](#npm-run-start)
- [Testing](#testing)
- [Documentation and References](#documentation-and-references)
  - [Typescript](#typescript)
  - [Jest](#jest)
  - [React Testing Library](#react-testing-library)
  - [React-Intl-Hooks](#react-intl-hooks)
  - [ESLint](#eslint)
  - [Webpack](#webpack)
  - [Babel](#babel)

# Setup

NPM/Yarn install and go.

## Recommended Extensions for VSCode

Some of these extensions will make development easier in VSCode.

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
* [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)


# Available Scripts

## `npm run dev`

Runs the app in development mode

## `npm test`

Runs jest runner for react-testing-library unit test suite

## `npm run build`

Creates static HTML/JS in dist folder

## `npm run start`

Servers up the static build files in dist folder

# Testing

Take note of `src/utils/test-utils.tsx`. This file is used to setup unit tests to supply any providers to the unit tests. In this template, only `IntlProvider` is used, but others can be added as needed. See `App.test.tsx` or `SampleComponent.test.tsx` for examples on how it can be used.

# Documentation and References


## [Typescript](https://www.typescriptlang.org/docs/)
## [Jest](https://jestjs.io/docs/en/getting-started) 
## [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
## [React-Intl-Hooks](https://github.com/CreateThrive/react-intl-hooks)
## [ESLint](https://eslint.org/docs/user-guide/getting-started)

  The project is using the [Airbnb Style Guide](https://github.com/airbnb/javascript) with [Typescript support](https://github.com/iamturns/eslint-config-airbnb-typescript)

## [Webpack](https://webpack.js.org/concepts/)

## [Babel](https://babeljs.io/docs/en)