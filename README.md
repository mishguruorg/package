# Package

## Installation

```
npm install --save-dev @mishguru/package
```

## Recommended Scripts

Copy same (or all) of the following into your `package.json`.

```
"scripts": {
  "precommit": "pkg-precommit",
  "build": "pkg-build",
  "prepublish": "npm run build",
  "postpublish": "git push --tags",
  "flow": "pkg-flow",
  "lint": "pkg-lint",
  "test": "NODE_ENV=test_local pkg-test",
  "coverage": "NODE_ENV=test_local pkg-coverage",
  "tidy": "pkg-tidy"
}
```

## Changelog

### 5.0.0
- Husky got a major bump update (0.14.3 => 1.1.1)

From: https://github.com/typicode/husky

Simply move your existing hooks to `husky.hooks` field and use raw Git hooks names. Also, if you're using the `GIT_PARAMS` env variable, rename it to `HUSKY_GIT_PARAMS`.

```diff
{
  "scripts": {
-   "precommit": "npm test",
-   "commitmsg": "commitlint -E GIT_PARAMS"
  },
+ "husky": {
+   "hooks": {
+     "pre-commit": "npm test",
+     "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
+   }
+ }
}
```

Alternatively, you can run the following command which will do the same automatically for you ;)

```
./node_modules/.bin/husky-upgrade
```

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
- `pkg-tidy` is now a thing, it runs prettier on all the files
- `pkg-precommit` is now a thing, it runs prettier and lint on all stage files before a commit happens

### 2.0.0
- `standard` updated to v11

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
