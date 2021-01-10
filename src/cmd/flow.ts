import exec from '../shared/exec'
import { log, fmt } from '../shared/log'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const FLOW_BIN = require('flow-bin')

const flow = async (): Promise<void> => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'flow'} ${args}`)
  await exec(FLOW_BIN, ...args)
}

export default flow
