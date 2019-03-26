import withTestHelpers from '../shared/withTestHelpers'
import exec from '../shared/exec'
import { log, fmt } from '../shared/log'

const AVA_PATH = require.resolve('../shim/ava')

const test = async () => {
  await withTestHelpers(async () => {
    const args = process.argv.slice(2)
    log(fmt`Running ${'ava'} ${args}`)
    await exec('node', AVA_PATH, ...args)
  })
}

export default test
