/* @flow */

const {log, fmt} = require('../shared/log')
const exec = require('../shared/exec')
const {DIST_PATH} = require('../shared/constants')

const clean = async () => {
  log(fmt`Cleaning ${DIST_PATH} directory`)
  await exec('rm', '-rf', DIST_PATH)
  await exec('mkdir', '-p', DIST_PATH)
}

module.exports = clean
