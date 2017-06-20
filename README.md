# Package

## Recommended Scripts

```
"scripts": {
  "build": "pkg-build",
  "coverage": "NODE_ENV=test_local pkg-coverage",
  "flow": "pkg-flow",
  "lint": "pkg-lint",
  "prepublish": "pkg-build",
  "test": "NODE_ENV=test_local pkg-test"
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
