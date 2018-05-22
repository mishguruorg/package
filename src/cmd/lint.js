/* @flow */

const {SRC_PATH} = require('../shared/constants')
const exec = require('../shared/exec')

const XO = require.resolve('../shim/xo')

const lint = async () => {
  await exec('node', XO, SRC_PATH)
}

module.exports = lint
