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

  let files = [`${SRC_PATH}`]

  if (args.length > minArgCount) {
    const fixIndex = args.indexOf('--fix')
    if (fixIndex > -1) {
      args.splice(fixIndex, 1)
    }
    files = args
  }

  await exec('node', LINTER, isFix ? '--fix' : '', ...files)
}

module.exports = lint
