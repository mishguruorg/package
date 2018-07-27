/* @flow */

const { SRC_PATH } = require('../shared/constants')

const exec = require('../shared/exec')
const { log, fmt } = require('../shared/log')

const PRETTIER = require.resolve('prettier/bin-prettier')

const config = [
  '--single-quote',
  '--trailing-comma',
  '--no-semi',
  '--list-different',
  '--print-width 100',
  '--write'
].join(' ')

const prettier = async () => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'prettier'} ${args}`)
  await exec('node', PRETTIER, config, ...args, `**/${SRC_PATH}/**`)
}

module.exports = prettier
