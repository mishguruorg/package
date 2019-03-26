import execLinter from '../shared/execLinter'

const LINTER_PATH = require.resolve('../shim/eslint')

const lint = async () => {
  await execLinter(LINTER_PATH)
}

export default lint
