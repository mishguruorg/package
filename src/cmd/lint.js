/* @flow */

const { SRC_PATH } = require('../shared/constants')
const exec = require('../shared/exec')
const { log, fmt } = require('../shared/log')

const LINTER = require.resolve('../shim/eslint')

const lint = async () => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'eslint'} ${args}`)

  const isFix = args.includes('--fix')

  const minArgCount = isFix ? 1 : 0

  const files = args.length > minArgCount 
    ? args 
    : [`**/${SRC_PATH}/**`]

  await exec('node', LINTER, isFix ? '--fix' : '', ...files)
}

module.exports = lint
