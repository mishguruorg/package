import build from './build'

import withTestHelpers from '../shared/withTestHelpers'
import exec from '../shared/exec'
import { log, fmt } from '../shared/log'
import { USE_TSC } from '../shared/constants'

const AVA_PATH = USE_TSC
  ? require.resolve('../shim/ava-tsc')
  : require.resolve('../shim/ava')

const test = async () => {
  const args = process.argv.slice(2)

  if (USE_TSC) {
    process.argv = []
    await build()
  }

  await withTestHelpers(async () => {
    log(fmt`Running ${'ava'} ${args}`)
    await exec('node', AVA_PATH, ...args)
  })
}

export default test
