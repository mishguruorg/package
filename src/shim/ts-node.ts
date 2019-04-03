import { join, dirname, resolve } from 'path'
import { mockWithContext } from 'unwire'

import { SRC_PATH } from '../shared/constants'

import tsconfigJSON from '../config/tsconfig'

const TSCONFIG_PATH = join(dirname(resolve(SRC_PATH)), 'tsconfig.json')

const MOCK_FILE = {
  isFile: () => true,
  isDirectory: () => false,
}

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

require('ts-node/register')