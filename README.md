# Package

## Recommended Babel Config

"babel": {
  "babelrc": false,
  "presets": [["env", {
    "targets": {
      "node": "current"
    },
    "debug": false,
    "loose": true,
    "modules": false,
    "useBuiltIns": true
  }]],
  "plugins": [
    ["transform-object-rest-spread", {
      "useBuiltIns": true
    }]
  ]
}
