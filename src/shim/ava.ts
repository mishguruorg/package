import { resolve } from 'path'
import { mockWithContext } from 'unwire'
import globby from 'globby'
import * as pkgConf from 'pkg-conf'

import { SRC_PATH, TESTS_NAME } from '../shared/constants'
import BABEL_CONFIG from '../babel/config'

const BABEL_REGISTER_PATH = require.resolve('../babel/register')

const start = async () => {
  const files = await globby(TESTS_NAME, { cwd: SRC_PATH })
  const relativeFiles = files.map((file) => resolve(SRC_PATH, file))

  mockWithContext('pkg-conf', require.resolve('ava/cli'), () => ({
    sync: (pkgName: string, opts: any) => {
      if (pkgName === 'ava') {
        return {
          cache: false,
          verbose: true,
          require: [BABEL_REGISTER_PATH],
          babel: {
            testOptions: BABEL_CONFIG
          },
          files: relativeFiles
        }
      }
      return pkgConf.sync(pkgName, opts)
    },
    filepath: () => SRC_PATH
  }))

  return require('ava/cli')
}

start()
