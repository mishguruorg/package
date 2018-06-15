# Package

## Installation

```
npm install --save-dev @mishguru/package
```

## Recommended Scripts

Copy same (or all) of the following into your `package.json`.

```
"scripts": {
  "build": "pkg-build",
  "prepublish": "npm run build",
  "postpublish": "git push --tags",
  "flow": "pkg-flow",
  "lint": "pkg-lint",
  "test": "NODE_ENV=test_local pkg-test",
  "coverage": "NODE_ENV=test_local pkg-coverage"
}
```

## Changelog

### 4.0.0
- All bash scripts have been rewritten to use JavaScript. So this should work
  on Windows (not tested yet though!)
- You no longer need to define the babel and ava config inside the
  `package.json` files -- please delete any old config. All config is now
  completely internal to this module.
- Removed `pkg-test-only`. Now you can just use `pkg-test` and pass it files
  you want to test.
- Prettier logs with colours and formatting!
- `pkg-coverage` cleans up the `.nyc_output` folder after it's finished.
- The babel config has been reduced to just flow, object spread and commonjs.
  We used to include the `env` config. You should notice faster babel builds!

### 2.0.0
- `standard` updated to v11

## Lifecycle Test Helpers

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
