import { resolve } from 'path'
import { mockWithContext } from 'unwire'
import globby from 'globby'
import * as pkgConf from 'pkg-conf'

import { SRC_PATH, TESTS_NAME } from '../shared/constants'

const TS_NODE_PATH = require.resolve('ts-node')

const start = async () => {
  const files = await globby(TESTS_NAME, { cwd: SRC_PATH })
  const relativeFiles = files.map((file) => resolve(SRC_PATH, file))

  mockWithContext('pkg-conf', require.resolve('ava/cli'), () => ({
    sync: (pkgName: string, opts: any) => {
      if (pkgName === 'ava') {
        return {
          verbose: true,
          require: [TS_NODE_PATH],
          compileEnhancements: false,
          extensions: ['ts'],
          files: relativeFiles
        }
        return pkgConf.sync(pkgName, opts)
      }
    },
    filepath: () => SRC_PATH
  }))

  return require('ava/cli')
}

start()
