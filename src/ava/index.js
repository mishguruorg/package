const { unwireWithContext } = require('unwire')
const globby = require('globby')
const { resolve } = require('path')

const { SRC_PATH, TESTS_NAME } = require('../shared/constants')

const BABEL_REGISTER = require.resolve('../babel/register')

const files = await globby(TESTS_NAME, { cwd: SRC_PATH })
const relativeFiles = files.map((file) => resolve(SRC_PATH, file))

unwireWithContext('pkg-conf', require.resolve('ava/cli'), () => ({
  sync: () => ({
    cache: false,
    require: [ BABEL_REGISTER ],
    files: relativeFiles
  }),
  filepath: () => SRC_PATH
}))

require('ava/cli')
