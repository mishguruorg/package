/* @flow */

const BABEL_CONFIG = require('./config.js')

module.exports = [
  require('@babel/register')({
    ...BABEL_CONFIG
  })
]
