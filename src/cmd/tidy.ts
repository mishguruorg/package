import { SRC_PATH } from '../shared/constants'

import exec from '../shared/exec'
import { log, fmt } from '../shared/log'

const PRETTIER_PATH = require.resolve('prettier/bin-prettier')

const config = [
  '--single-quote',
  '--trailing-comma=all',
  '--arrow-parens=always',
  '--no-semi',
  '--write'
]

const prettier = async () => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'prettier'} ${args}`)

  const files =
    args.length > 0
      ? args
      : [`./${SRC_PATH}/**/*.{js,jsx,css,scss,ts,md,yml,json,less}`]

  await exec('node', PRETTIER_PATH, ...config, ...files)
}

export default prettier
