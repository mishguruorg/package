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

### Recommended AVA Config

```
"ava": {
  "require": [
    "babel-register"
  ],
  "babel": "inherit"
}
```
