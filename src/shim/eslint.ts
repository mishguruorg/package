import { resolveModulePath } from 'unwire'

import rewire from '../shared/rewire'

// This is where the magic happens! rewire() will go through these dependencies
// and make sure they are all available from the current directory
rewire([
  [
    '@mishguru/eslint-config',
    [
      'eslint',
      'eslint-plugin-ava',
      'eslint-plugin-babel',
      'eslint-plugin-flowtype',
      'eslint-plugin-mocha',
      'eslint-plugin-react',
      'eslint-plugin-standard',
      'babel-eslint',
      'eslint-config-standard-babel',
      'eslint-config-standard-jsx',
      'eslint-config-standard',
      'eslint-plugin-import',
      'eslint-plugin-node',
      'eslint-plugin-promise',
      ['eslint-plugin-import', ['eslint-import-resolver-node']],
    ],
  ],
])

const start = async () => {
  process.argv.push('--config', require.resolve('@mishguru/eslint-config'))
  const ESLINT = resolveModulePath(
    'eslint/bin/eslint',
    require.resolve('eslint'),
  )
  return require(ESLINT)
}

start()
