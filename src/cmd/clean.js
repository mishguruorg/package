/* @flow */

const exec = require('../shared/exec')
const { SRC_PATH, DIST_PATH } = require('../shared/constants')

const clean = async () => {
  console.log(`Cleaning ${DIST_PATH}`)
  await exec('rm', '-rf', DIST_PATH)
  await exec('mkdir', '-p', DIST_PATH)
}

module.exports = clean
