/* @flow */

const flowCopy = require('flow-copy-source')

const utils = require('./utils')
const { SRC_PATH, DIST_PATH } = require('./constants')

const babel = require('./babel')
const clean = require('./clean')
const BABEL_CONFIG = require('./babelConfig')

const build = async () => {
  await clean()

  console.log(`> Building from ${SRC_PATH} to ${DIST_PATH}`)
  await babel(SRC_PATH, DIST_PATH, BABEL_CONFIG)

  console.log('> Copying flow source files...')
  await flowCopy([SRC_PATH], DIST_PATH)
}

module.exports = build
