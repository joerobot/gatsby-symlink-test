# Gatsby Symlink Demo

This monorepo contains three packages:

1. A minimal gatsby site
1. A simple library built with rollup
1. A library with multiple entry points and outputs built with Vite

## Build

- Run `yarn` to install dependencies and symlink the libraries to gatsby
- Build the libraries using `yarn build-all`
- Run gatsby in develop with `yarn develop-gatsby`
- See output of vite and rollup libraries at localhost:8000

## Changes in single entry-point library

- Run `yarn develop-rollup` to build the library and watch
- Change the return value in `testFunction` in `packages/rollup-lib-build/main.js`
- Either see the change reflected in Gatsby immediately or after a page refresh in browser

## Changes in multi-entry-point library

- Run `yarn develop-vite` to build the library and watch
- Change the return value in `testFunction` in `packages/vite-lib-build/main.js`
- Change the return value in `testFunction` in `packages/vite-lib-build/alternate.js`
- Either see the change reflected in Gatsby immediately or after a page refresh in browser
