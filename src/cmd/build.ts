import { SRC_PATH, DIST_PATH } from '../shared/constants'
import { log, fmt } from '../shared/log'

import babel from '../babel'
import BABEL_CONFIG from '../babel/config'

import clean from '../cmd/clean'

const flowCopy = require('flow-copy-source')

const build = async () => {
  await clean()

  log(fmt`Building from ${SRC_PATH} to ${DIST_PATH} directory`)
  await babel(SRC_PATH, DIST_PATH, BABEL_CONFIG)

  log(
    fmt`Copying flow source files from ${SRC_PATH} to ${DIST_PATH} directory...`
  )
  await flowCopy([SRC_PATH], DIST_PATH)
}

export default build
