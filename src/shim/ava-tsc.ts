import { mockWithContext } from 'unwire'
import * as pkgConf from 'pkg-conf'
import { Config } from 'pkg-conf'
import readPkgUp from 'read-pkg-up'

import getAVAConfig from '../config/ava-tsc'

console.log('Using AVA with ts-node')

const start = async () => {
  const avaConfig = await getAVAConfig()
  const filepath = readPkgUp.sync().path

  mockWithContext('pkg-conf', require.resolve('ava/cli'), () => ({
    sync: (pkgName: string, opts: Record<string, unknown>) => {
      if (pkgName === 'ava') {
        return avaConfig
      }
      return pkgConf.sync(pkgName, opts)
    },
    filepath: (c: Config) => {
      if (c === avaConfig) {
        return filepath
      }
      return pkgConf.filepath(c)
    },
  }))

  return require('ava/cli')
}

start().catch(console.error)
