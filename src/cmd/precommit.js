/* @flow */

const exec = require('../shared/exec')
const { log, fmt } = require('../shared/log')

const LINT_STAGING = require.resolve('lint-staging')

const CONFIG_PATH = require.resolve('../config/lint-staging.json')

const precommit = async () => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'lint-staging'} ${args}`)
  await exec('node', LINT_STAGING, '--config', CONFIG_PATH, ...args)
}

module.exports = precommit
