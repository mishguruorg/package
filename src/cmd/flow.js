/* @flow */

const flow = require('flow-bin')
const exec = require('../shared/exec')
 
const typecheck = async (args /*: Array<string> */) => {
  exec(flow, ...args)
}

module.exports = typecheck
