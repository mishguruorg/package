/* @flow */

const {SRC_PATH} = require('../shared/constants')
const exec = require('../shared/exec')
const {log, fmt} = require('../shared/log')

const XO = require.resolve('../shim/xo')

const lint = async () => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'xo'} ${args}`)
  await exec('node', XO, ...args, SRC_PATH)
}

module.exports = lint
