/* @flow */

const { SRC_PATH } = require('../shared/constants')
const exec = require('../shared/exec')
const { log, fmt } = require('../shared/log')

const LINTER = require.resolve('../shim/eslint')

const lint = async () => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'eslint'} ${args}`)
  await exec('node', LINTER, ...args, SRC_PATH)
}

module.exports = lint
