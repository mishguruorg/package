/* @flow */

const exec = require('../shared/exec')
const { log, fmt } = require('../shared/log')

const LINT_STAGED = require.resolve('lint-staged')

const CONFIG_PATH = require.resolve('../config/lint-staging.json')

const precommit = async () => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'lint-staging'} ${args}`)
  await exec('node', LINT_STAGED, '--config', CONFIG_PATH, ...args)
}

module.exports = precommit
