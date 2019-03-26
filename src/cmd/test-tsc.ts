import withTestHelpers from '../shared/withTestHelpers'
import exec from '../shared/exec'
import { log, fmt } from '../shared/log'

const AVA_TSC_PATH = require.resolve('../shim/ava-tsc')

const test = async () => {
  await withTestHelpers(async () => {
    const args = process.argv.slice(2)
    log(fmt`Running ${'ava'} ${args}`)
    await exec('node', AVA_TSC_PATH, ...args)
  })
}

export default test
