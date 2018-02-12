# Package

## Default Config

You don't need to add these to `package.json` unless you need to override them.

A common use case is changing the `srcPath` to `lib`.

```
"srcPath": "src",
"distPath": "dist",
"testsPath": "*.spec.js",
```

## Recommended Scripts

```
"scripts": {
  "build": "pkg-build",
  "prepublish": "npm run build",
  "postpublish": "git push --tags",
  "flow": "pkg-flow",
  "lint": "pkg-lint",
  "test": "NODE_ENV=test_local pkg-test",
  "test-only": "NODE_ENV=test_local pkg-test-only",
  "coverage": "NODE_ENV=test_local pkg-coverage"
}
```

## Recommended Babel Config

```
"babel": {
  "presets": [
    "flow",
    [
      "env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ],
  "plugins": [
    [
      "transform-object-rest-spread",
      {
        "useBuiltIns": true
      }
    ]
  ]
}
```

## Recommended AVA Config

```
"ava": {
  "require": [
    "babel-register"
  ],
  "babel": "inherit"
}
```

## Lifecycle Test Helpers

### Before All

Create a file called `testHelpers/beforeAll.js` in the root of your project,
and it will be executed before the tests begin.

### After All

Create a file called `testHelpers/afterAll.js` in the root of your project,
and it will be executed after the tests finish.

It will be called regardless of whether the tests passed or failed.
