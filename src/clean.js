/* @flow */

const utils = require('./utils')
const { SRC_PATH, DIST_PATH } = require('./constants')

const clean = async () => {
  console.log(`> Cleaning ${DIST_PATH}`)
  await utils.exec('rm', '-rf', DIST_PATH)
  await utils.exec('mkdir', '-p', DIST_PATH)
}

module.exports = clean
