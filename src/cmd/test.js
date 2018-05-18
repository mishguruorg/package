/* @flow */

const exec = require('../shared/exec')

const AVA = require.resolve('../ava')

const test = async () => {
  await exec('node', [`${process.cwd()}/testHelpers/beforeAll.js`])

  const args = process.argv.slice(2)
  await exec(AVA, args)

  await exec('node', [`${process.cwd()}/testHelpers/afterAll.js`])
}

module.exports = test
