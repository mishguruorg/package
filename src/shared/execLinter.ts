import { SRC_PATH } from '../shared/constants'
import exec from '../shared/exec'
import { log, fmt } from '../shared/log'

const execLinter = async (linterPath: string) => {
  const args = process.argv.slice(2)
  log(fmt`Running ${'eslint'} ${args}`)

  const options = args.filter((input) => input.startsWith('--'))
  if (options.length > 0) {
    const fixIndex = args.indexOf(options[0])
    if (fixIndex > -1) {
      args.splice(fixIndex, options.length)
    }
  }

  const files = args.length === 0 ? [`${SRC_PATH}`] : args
  options.push('--ext', '.jsx', '--ext', '.js', '--ext', '.ts')

  await exec('node', linterPath, ...options, ...files)
}

export default execLinter
