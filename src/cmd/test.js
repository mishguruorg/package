/* @flow */

const { join } = require('path')
const fileExists = require('file-exists')

const exec = require('../shared/exec')

const AVA = require.resolve('../ava')

const test = async () => {
  const beforeAll = join(process.cwd(), '/testHelpers/beforeAll.js')
  const afterAll = join(process.cwd(), '/testHelpers/afterAll.js')

  if (fileExists(beforeAll)) {
    await exec('node', beforeAll)
  }

  const args = process.argv.slice(2)
  await exec('node', AVA, ...args)

  if (fileExists(afterAll)) {
    await exec('node', afterAll)
  }
}

module.exports = test
