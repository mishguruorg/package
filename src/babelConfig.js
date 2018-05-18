const BABEL_CONFIG = {
  presets: [
    require('@babel/preset-flow')
  ],
  plugins: [
    [ 
      require('@babel/plugin-proposal-object-rest-spread'), 
      { useBuiltIns: true }
    ],
    require('@babel/plugin-transform-modules-commonjs')
  ]
}

module.exports = BABEL_CONFIG
