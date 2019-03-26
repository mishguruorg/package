import withTestHelpers from '../shared/withTestHelpers'
import { log, fmt } from '../shared/log'

import getConfig from '../config/ava'
import ava from '../shim/ava'

const test = async () => {
  const config = await getConfig()

  await withTestHelpers(async () => {
    const args = process.argv.slice(2)
    log(fmt`Running ${'ava'} ${args}`)
    await ava(config)
  })
}

export default test
