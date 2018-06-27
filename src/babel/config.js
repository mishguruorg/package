/* @flow */

const BABEL_CONFIG = {
  presets: [
    require.resolve('@babel/preset-flow')
  ],
  plugins: [
    [
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
      { useBuiltIns: true }
    ],
    require.resolve('@babel/plugin-transform-modules-commonjs'),
    // Just for admin-portal, I'd love to remove this preset if possible.
    require.resolve('@babel/plugin-transform-shorthand-properties')
  ]
}

module.exports = BABEL_CONFIG
