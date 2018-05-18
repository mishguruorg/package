/* @flow */

const { unwireWithContext } = require('unwire')
const globby = require('globby')
const { resolve } = require('path')

const { SRC_PATH, TESTS_NAME } = require('./constants')
const utils = require('./utils')
const BABEL_CONFIG = require('./babelConfig')

const test = async () => {
  const files = await globby(TESTS_NAME, { cwd: SRC_PATH })

  const relativeFiles = files.map((file) => resolve(SRC_PATH, file))

  unwireWithContext('pkg-conf', require.resolve('ava/cli'), () => ({
    sync: () => ({
      cache: false,
      require: [
        require.resolve('./babelRegister')
      ],
      files: relativeFiles[0]
    }),
    filepath: () => SRC_PATH
  }))

  require('ava/cli')

}

module.exports = test
