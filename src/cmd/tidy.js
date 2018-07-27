/* @flow */

const { SRC_PATH } = require('../shared/constants')

const exec = require('../shared/exec')
const { log, fmt } = require('../shared/log')

const PRETTIER = require.resolve('prettier/bin-prettier')

const prettier = async () => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'prettier'} ${args}`)
  await exec('node', PRETTIER, '--write', ...args, `**/SRC_PATH/**`)
}

module.exports = prettier
