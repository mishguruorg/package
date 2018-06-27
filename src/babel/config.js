/* @flow */

const BABEL_CONFIG = {
  presets: [
    require.resolve('@babel/preset-flow'),

    // Just for admin-portal, I'd love to remove this preset if possible.
    require.resolve('@babel/preset-es2015')
  ],
  plugins: [
    [
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
      { useBuiltIns: true }
    ],
    require.resolve('@babel/plugin-transform-modules-commonjs')
  ]
}

module.exports = BABEL_CONFIG
