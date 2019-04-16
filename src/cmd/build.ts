import { USE_TSC, SRC_PATH, DIST_PATH } from '../shared/constants'
import { log, fmt } from '../shared/log'
import exec from '../shared/exec'

import clean from '../cmd/clean'

import babel from '../babel'
import BABEL_CONFIG from '../babel/config'
import flowCopySource from 'flow-copy-source'

const TSC_SHIM_PATH = require.resolve('../shim/tsc')

const build = async () => {
  await clean()

  log(fmt`Building from ${SRC_PATH} to ${DIST_PATH} directory`)

  if (USE_TSC) {
    const args = process.argv.slice(2)
    log(fmt`Running ${'tsc'} ${args}`)
    await exec('node', TSC_SHIM_PATH, ...args)
  } else {
    await babel(SRC_PATH, DIST_PATH, BABEL_CONFIG)
    log(fmt`Copying flow source files...`)
    await flowCopySource([SRC_PATH], DIST_PATH)
  }
}

export default build
