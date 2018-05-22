/* @flow */

const {resolve} = require('path')
const {mockWithContext} = require('unwire')
const globby = require('globby')

const {SRC_PATH, TESTS_NAME} = require('../shared/constants')

const BABEL_REGISTER = require.resolve('../babel/register')

const start = async () => {
  const files = await globby(TESTS_NAME, {cwd: SRC_PATH})
  const relativeFiles = files.map((file) => resolve(SRC_PATH, file))

  mockWithContext('pkg-conf', require.resolve('ava/cli'), () => ({
    sync: () => ({
      cache: false,
      verbose: true,
      require: [BABEL_REGISTER],
      files: relativeFiles,
    }),
    filepath: () => SRC_PATH,
  }))

  return require('ava/cli')
}

start()
