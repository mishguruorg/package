/* @flow */

const BABEL_CONFIG = {
  presets: [require.resolve('@babel/preset-flow')],
  plugins: [
    [
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
      {useBuiltIns: true}
    ],
    require.resolve('@babel/plugin-transform-modules-commonjs')
  ]
}

module.exports = BABEL_CONFIG
