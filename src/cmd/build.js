/* @flow */

const flowCopy = require('flow-copy-source')

const {SRC_PATH, DIST_PATH} = require('../shared/constants')
const {log, fmt} = require('../shared/log')

const babel = require('../babel')
const BABEL_CONFIG = require('../babel/config')

const clean = require('../cmd/clean')

const build = async () => {
  await clean()

  log(fmt`Building from ${SRC_PATH} to ${DIST_PATH} directory`)
  await babel(SRC_PATH, DIST_PATH, BABEL_CONFIG)

  log(
    fmt`Copying flow source files from ${SRC_PATH} to ${DIST_PATH} directory...`
  )
  await flowCopy([SRC_PATH], DIST_PATH)
}

module.exports = build
