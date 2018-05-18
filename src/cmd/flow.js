/* @flow */

const flow = require('flow-bin')
const exec = require('../shared/exec')
 
const typecheck = async () => {
  const args = process.argv.slice(2)
  await exec(flow, ...args)
}

module.exports = typecheck
