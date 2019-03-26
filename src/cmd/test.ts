import { join } from 'path'
import fileExists from 'file-exists'

import exec from '../shared/exec'
import { log, fmt } from '../shared/log'

const AVA_PATH = require.resolve('../shim/ava-tsc')

const test = async () => {
  const beforeAll = join(process.cwd(), '/testHelpers/beforeAll.js')
  const afterAll = join(process.cwd(), '/testHelpers/afterAll.js')

  if (await fileExists(beforeAll)) {
    log(fmt`Running beforeAll.js`)
    await exec('node', beforeAll)
  }

  const args = process.argv.slice(2)
  log(fmt`Running ${'ava'} ${args}`)
  try {
    await exec('node', AVA_PATH, ...args)
  } catch (err) {
    throw err
  } finally {
    if (await fileExists(afterAll)) {
      log(fmt`Running afterAll.js`)
      await exec('node', afterAll)
    }
  }
}

export default test
