import build from './build'

import withTestHelpers from '../shared/withTestHelpers'
import exec from '../shared/exec'
import { log, fmt } from '../shared/log'
import { USE_TSC } from '../shared/constants'

const AVA_TSC_PATH = require.resolve('../shim/ava-tsc')
const AVA_BABEL_PATH = require.resolve('../shim/ava-babel')
const AVA_PLAIN_PATH = require.resolve('../shim/ava-plain')

const test = async (): Promise<void> => {
  let avaPath = AVA_BABEL_PATH

  const args = process.argv.slice(2)

  if (USE_TSC) {
    const fileArgs = args.filter((arg) => arg.startsWith('-') === false)
    const shouldBuild = args.includes('--pkg-skip-build') === false

    if (fileArgs.length > 0) {
      avaPath = AVA_TSC_PATH
    } else {
      process.argv = []
      if (shouldBuild) {
        await build()
      }
      avaPath = AVA_PLAIN_PATH
    }
  }

  await withTestHelpers(async () => {
    log(fmt`Running ${'ava'} ${args}`)
    await exec('node', avaPath, ...args)
  })
}

export default test
