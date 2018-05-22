/* @flow */

const exec = require('../shared/exec')
const { SRC_PATH } = require('../shared/constants')

const ESLINT = require.resolve('eslint/bin/eslint')
const CONFIG = require.resolve('@mishguru/eslint-config')

const lint = async () => {
  const args = process.argv.slice(2)
  await exec(ESLINT, '--ext', '.jsx', '--ext', '.js', '--config', CONFIG, ...args, '--', SRC_PATH)
}

module.exports = lint
