/* @flow */

const BABEL_CONFIG = require('./babelConfig.js')

module.exports = [
  require('@babel/register')({
    ...BABEL_CONFIG
  })
]
