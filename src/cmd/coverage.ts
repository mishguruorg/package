import exec from '../shared/exec'
import { log, fmt } from '../shared/log'

const NYC_PATH = require.resolve('nyc/bin/nyc')
const TEST_PATH = require.resolve('../../bin/test')

const lint = async (): Promise<void> => {
  log(fmt`Running ${'nyc'}`)
  await exec(NYC_PATH, TEST_PATH)

  log(fmt`Generating report...`)
  await exec(NYC_PATH, 'report', '--reporter', 'html')

  log(fmt`Cleaning up...`)
  await exec('rm', '-r', '.nyc_output')
}

export default lint
