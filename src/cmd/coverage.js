/* @flow */

const exec = require('../shared/exec')
const {log, fmt} = require('../shared/log')

const NYC = require.resolve('nyc/bin/nyc')
const TEST = require.resolve('../../bin/test')

const lint = async () => {
  log(fmt`Running ${'nyc'}`)
  await exec(NYC, TEST)

  log(fmt`Generating report...`)
  await exec(NYC, 'report', '--reporter', 'html')

  log(fmt`Cleaning up...`)
  await exec('rm', '-r', '.nyc_output')
}

module.exports = lint
