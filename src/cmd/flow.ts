import exec from '../shared/exec'
import { log, fmt } from '../shared/log'

const FLOW_BIN = require('flow-bin')

const flow = async () => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'flow'} ${args}`)
  await exec(FLOW_BIN, ...args)
}

export default flow
