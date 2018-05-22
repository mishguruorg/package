/* @flow */

const exec = require('../shared/exec')

const NYC = require.resolve('nyc/bin/nyc')
const TEST = require.resolve('../../bin/test')

const lint = async () => {
  await exec(NYC, TEST)
  await exec(NYC, 'report', '--reporter', 'html')
  await exec('rm', '-r', '.nyc_output')
}

module.exports = lint
