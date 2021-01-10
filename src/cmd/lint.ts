import execLinter from '../shared/execLinter'
import { USE_TSC } from '../shared/constants'

const LINTER_PATH = USE_TSC
  ? require.resolve('../shim/eslint-tsc')
  : require.resolve('../shim/eslint')

const lint = async (): Promise<void> => {
  const args = process.argv.slice(2)
  await execLinter(LINTER_PATH, args)
}

export default lint
