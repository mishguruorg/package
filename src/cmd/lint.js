/* @flow */

const { SRC_PATH } = require('../shared/constants')
const exec = require('../shared/exec')
const { log, fmt } = require('../shared/log')

const LINTER = require.resolve('../shim/eslint')

const lint = async () => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'eslint'} ${args}`)

  const options = args.filter(input => input.startsWith('--'))
  if (options.length > 0) {
    const fixIndex = args.indexOf(options[0])
    if (fixIndex > -1) {
      args.splice(fixIndex, options.length)
    }
  } 

  let files = args.length === 0 ? [`${SRC_PATH}`] : args

  await exec('node', LINTER, ...options, ...files)
}

module.exports = lint
