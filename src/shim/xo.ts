import { mockWithContext, resolveModulePath } from 'unwire'

import { SRC_PATH } from '../shared/constants'
import rewire from '../shared/rewire'

// This is where the magic happens! rewire() will go through these dependencies
// and make sure they are all available from the current directory
rewire([
  [
    'xo',
    [
      'eslint-config-prettier',
      'eslint-config-xo/esnext',
      'eslint-plugin-ava',
      'eslint-plugin-no-use-extend-native',
      'eslint-plugin-node',
      'eslint-plugin-prettier',
      'eslint-plugin-promise',
      'eslint-plugin-unicorn',
      'eslint-plugin-import',
      ['eslint-plugin-import', ['eslint-import-resolver-node']],
      ['eslint-plugin-ava', ['espree']],
    ],
  ],
])

const start = async () => {
  mockWithContext(
    './third-party.js',
    resolveModulePath('prettier', require.resolve('xo')),
    (thirdParty: Record<string, unknown>) => {
      return {
        ...thirdParty,
        cosmiconfig: () => ({
          load: () => ({
            config: {
              arrowParens: 'always',
              bracketSpacing: false,
              jsxBracketSameLine: false,
              printWidth: 80,
              semi: false,
              singleQuote: true,
              tabWidth: 2,
              trailingComma: 'es5',
              useTabs: false,
            },
          }),
        }),
      }
    },
  )

  mockWithContext('pkg-conf', require.resolve('xo'), () => ({
    sync: () => ({
      semicolon: false,
      space: 2,
      prettier: true,
      rules: {
        'comma-dangle': ['error', 'only-multiline'],
        'arrow-parens': ['error', 'always'],
      },
    }),
    filepath: () => SRC_PATH,
  }))

  return require('xo/cli')
}

start()
