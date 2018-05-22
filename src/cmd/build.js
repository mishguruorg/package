/* @flow */

const flowCopy = require('flow-copy-source')

const {SRC_PATH, DIST_PATH} = require('../shared/constants')

const babel = require('../babel')
const BABEL_CONFIG = require('../babel/config')

const clean = require('../cmd/clean')

const build = async () => {
  await clean()

  console.log(`Building from ${SRC_PATH} to ${DIST_PATH}`)
  await babel(SRC_PATH, DIST_PATH, BABEL_CONFIG)

  console.log('Copying flow source files...')
  await flowCopy([SRC_PATH], DIST_PATH)
}

module.exports = build
