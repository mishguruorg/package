import { USE_TSC, SRC_PATH } from '../shared/constants'
import exec from '../shared/exec'
import { log, fmt } from '../shared/log'
import execLinter from '../shared/execLinter'

import config from '../config/prettier'

const PRETTIER_PATH = require.resolve('prettier/bin-prettier')
const LINTER_PATH = USE_TSC
  ? require.resolve('../shim/eslint-tsc')
  : require.resolve('../shim/eslint')

const prettier = async (): Promise<void> => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'prettier'} ${args}`)

  const files =
    args.length > 0
      ? args
      : [`./${SRC_PATH}/**/*.{js,jsx,css,scss,ts,md,yml,json,less}`]

  await exec('node', PRETTIER_PATH, ...config, ...files)

  await execLinter(LINTER_PATH, ['--fix'])
}

export default prettier
