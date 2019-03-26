import { log, fmt } from '../shared/log'
import exec from '../shared/exec'
import clean from '../cmd/clean'

const TSC_SHIM_PATH = require.resolve('../shim/tsc')

const build = async () => {
  await clean()

  const args = process.argv.slice(2)
  log(fmt`Running ${'tsc'} ${args}`)
  await exec('node', TSC_SHIM_PATH, ...args)
}

export default build
