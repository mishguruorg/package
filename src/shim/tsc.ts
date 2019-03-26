import { join, dirname, resolve } from 'path'
import { mockWithContext } from 'unwire'

import { SRC_PATH, DIST_PATH, TESTS_NAME } from '../shared/constants'

const TSCONFIG_PATH = join(dirname(resolve(SRC_PATH)), 'tsconfig.json')
const TSCONFIG_DATA = `
{
  "compilerOptions": {
    "baseUrl": ".",
    "declaration": true,
    "esModuleInterop": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "noImplicitAny": true,
    "outDir": "${DIST_PATH}",
    "sourceMap": true,
    "target": "es2018",
    "paths": {
      "*": [
        "node_modules/*",
        "${SRC_PATH}/types/*"
      ]
    }
  },
  "include": [
    "${SRC_PATH}/**/*"
  ]
}
`

const MOCK_FILE = {
  isFile: () => true,
  isDirectory: () => false
}

const start = async () => {
  mockWithContext('fs', require.resolve('typescript'), (fs) => ({
    ...fs,
    statSync: (path: string, options: any) => {
      if (path === TSCONFIG_PATH) {
        return MOCK_FILE
      }
      return fs.statSync(path, options)
    },
    readFileSync: (path: string, options: any) => {
      if (path === TSCONFIG_PATH) {
        return Buffer.from(TSCONFIG_DATA, 'utf8')
      }
      return fs.readFileSync(path, options)
    }
  }))

  return require('typescript/lib/tsc')
}

start()
