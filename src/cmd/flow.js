/* @flow */

const flow = require('flow-bin')

const exec = require('../shared/exec')
const { log, fmt } = require('../shared/log')

const typecheck = async () => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'flow'} ${args}`)
  await exec(flow, ...args)
}

module.exports = typecheck
