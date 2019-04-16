# Package

## Installation

```
npm install --save-dev @mishguru/package
```

## Recommended Scripts

Copy the following into your `package.json`.

```json
"scripts": {
  "build": "pkg-build",
  "lint": "pkg-lint",
  "tidy": "pkg-tidy",
  "test": "NODE_ENV=test pkg-test",
  "coverage": "NODE_ENV=test pkg-coverage",
  "precommit": "pkg-precommit"
}
```

## Using Typescript

To enable typescipt support, set the `types` property in your `package.json`.

```json
"main": "./dist/index.js",
"types": "./dist/index.d.ts",
```

If you are manually adding types for a non-typescript project, you should set
`"types": "types.d.ts"` and keep the types in the root of your project.
`@mishguru/package` will not run in typescript mode when building/testing your
project.

## Lifecycle Test Helpers

AVA does not support "before all" or "after all" functions, because it runs
everything in parallel.

Package has got your back though. If you need to setup/teardown a database,
then this is for you.

Please note, that if you run AVA in watch mode, the "after all" function will
not be called until you exit AVA.

### Before All

Create a file called `testHelpers/beforeAll.js` in the root of your project,
and it will be executed before the tests begin.

### After All

Create a file called `testHelpers/afterAll.js` in the root of your project,
and it will be executed after the tests finish.

It will be called regardless of whether the tests passed or failed.

## Different Folder Structure

### srcPath

If your code is kept in a folder that isn't `src` then you can change the path
by adding the following to your `package.json`

```
"srcPath": "lib",
```

### distPath

Would you like your compiled code to be in a folder that isn't named `dist`?

```
"distPath": "public"
```

### testsPath

Tests must be defined inside the `srcPath`, and by default match any files that
end in `.spec.js`.

```
"testsPath": "**/*.test.js",
```
