import { mockWithContext } from 'unwire'
import * as pkgConf from 'pkg-conf'

import { SRC_PATH } from '../shared/constants'

const start = async (config: any) => {
  mockWithContext('pkg-conf', require.resolve('ava/cli'), () => ({
    sync: (pkgName: string, opts: any) => {
      if (pkgName === 'ava') {
        return config
      }
      return pkgConf.sync(pkgName, opts)
    },
    filepath: () => SRC_PATH
  }))

  return require('ava/cli')
}

export default start
