/* @flow */

const { join } = require('path')
const fileExists = require('file-exists')

const exec = require('../shared/exec')
const { log, fmt } = require('../shared/log')

const AVA = require.resolve('../shim/ava')

const test = async () => {
  const beforeAll = join(process.cwd(), '/testHelpers/beforeAll.js')
  const afterAll = join(process.cwd(), '/testHelpers/afterAll.js')

  if (await fileExists(beforeAll)) {
    log(fmt`Running beforeAll.js`)
    await exec('node', beforeAll)
  }

  const args = process.argv.slice(2)
  log(fmt`Running ${'ava'} ${args}`)
  try {
    await exec('node', AVA, ...args)
  } catch (err) {
    throw err
  } finally {
    if (await fileExists(afterAll)) {
      log(fmt`Running afterAll.js`)
      await exec('node', afterAll)
    }
  }
}

module.exports = test
