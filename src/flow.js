/* @flow */

const flow = require('flow-bin')
const utils = require('./utils')
 
const typecheck = async (args /*: Array<string> */) => {
  console.log(`> flow ${args.join(' ')}`)
  utils.exec(flow, ...args)
}

module.exports = typecheck
