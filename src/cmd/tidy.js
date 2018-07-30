/* @flow */

const { SRC_PATH } = require('../shared/constants')

const exec = require('../shared/exec')
const { log, fmt } = require('../shared/log')

const PRETTIER = require.resolve('prettier/bin-prettier')

const config = [
  '--single-quote',
  '--trailing-comma=none',
  '--no-semi',
  '--write'
]

const prettier = async () => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'prettier'} ${args}`)

  const files = args.length > 0 
    ? args 
    : [`**/${SRC_PATH}/**`]
    
  await exec('node', PRETTIER, ...config, ...files)
}

module.exports = prettier
