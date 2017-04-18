# Package

## Recommended Scripts

```
"scripts": {
  "build": "pkg-build",
  "lint": "pkg-lint",
  "test": "pkg-test",
  "coverage": "pkg-coverage"
}
```

## Recommended Babel Config

```
"babel": {
  "presets": [
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
