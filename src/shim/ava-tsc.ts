import { mockWithContext } from 'unwire'
import * as pkgConf from 'pkg-conf'
import { join, dirname, resolve } from 'path'

import { SRC_PATH } from '../shared/constants'

import getAVAConfig from '../config/ava-tsc'
import tsconfigJSON from '../config/tsconfig'

console.log('Using AVA with ts-node')

const TSCONFIG_PATH = join(dirname(resolve(SRC_PATH)), 'tsconfig.json')

const MOCK_FILE = {
  isFile: () => true,
  isDirectory: () => false,
}

const start = async () => {
  const avaConfig = await getAVAConfig()

  mockWithContext('pkg-conf', require.resolve('ava/cli'), () => ({
    sync: (pkgName: string, opts: object) => {
      if (pkgName === 'ava') {
        return avaConfig
      }
      return pkgConf.sync(pkgName, opts)
    },
    filepath: () => SRC_PATH,
  }))

  mockWithContext('fs', require.resolve('typescript'), (fs) => ({
    ...fs,
    statSync: (path: string, options: object) => {
      if (path === TSCONFIG_PATH) {
        return MOCK_FILE
      }
      return fs.statSync(path, options)
    },
    readFileSync: (path: string, options: object) => {
      if (path === TSCONFIG_PATH) {
        return Buffer.from(tsconfigJSON, 'utf8')
      }
      return fs.readFileSync(path, options)
    },
  }))

  return require('ava/cli')
}

start().catch(console.error)
