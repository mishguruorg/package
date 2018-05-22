const MODULE = require('module')
const {resolveModulePath, unwireWithContext} = require('unwire')

const XO = require.resolve('xo')
const ESLINT_CONFIG_PRETTIER = resolveModulePath('eslint-config-prettier', XO)
const ESLINT_CONFIG_XO = resolveModulePath('eslint-config-xo/esnext', XO)
const ESLINT_PLUGIN_NO_USE_EXTEND_NATIVE = resolveModulePath('eslint-plugin-no-use-extend-native', XO)
const ESLINT_PLUGIN_AVA = resolveModulePath('eslint-plugin-ava', XO)
const ESLINT_PLUGIN_UNICORN = resolveModulePath('eslint-plugin-unicorn', XO)
const ESLINT_PLUGIN_PROMISE = resolveModulePath('eslint-plugin-promise', XO)
const ESLINT_PLUGIN_IMPORT = resolveModulePath('eslint-plugin-import', XO)
const ESLINT_PLUGIN_NODE = resolveModulePath('eslint-plugin-node', XO)
const ESLINT_PLUGIN_PRETTIER = resolveModulePath('eslint-plugin-prettier', XO)
const ESLINT_IMPORT_RESOLVER_NODE = resolveModulePath('eslint-import-resolver-node', ESLINT_PLUGIN_IMPORT)

const findPath = MODULE._findPath
const load = MODULE._load

MODULE._findPath = (...args) => {
  const [path] = args

  switch (path) {
    case 'eslint-config-prettier':
    case 'ESLINT_CONFIG_PRETTIER.js':
      return 'ESLINT_CONFIG_PRETTIER.js'

    case 'eslint-plugin-unicorn':
    case 'ESLINT_PLUGIN_UNICORN.js':
      return 'ESLINT_PLUGIN_UNICORN.js'

    case 'eslint-plugin-ava':
    case 'ESLINT_PLUGIN_AVA.js':
      return 'ESLINT_PLUGIN_AVA.js'

    case 'eslint-config-xo/esnext':
    case 'ESLINT_CONFIG_XO.js':
      return 'ESLINT_CONFIG_XO.js'

    case 'eslint-import-resolver-node':
    case 'ESLINT_IMPORT_RESOLVER_NODE.js':
      return 'ESLINT_IMPORT_RESOLVER_NODE.js'

    default:
      return findPath(...args)
  }
}

MODULE._load = (...args) => {
  const [path] = args

  switch (path) {
    case 'ESLINT_CONFIG_XO.js':
      return require(ESLINT_CONFIG_XO)

    case 'ESLINT_CONFIG_PRETTIER.js':
      return require(ESLINT_CONFIG_PRETTIER)

    case 'eslint-plugin-ava':
    case 'ESLINT_PLUGIN_AVA.js':
      return require(ESLINT_PLUGIN_AVA)

    case 'eslint-plugin-no-use-extend-native':
      return require(ESLINT_PLUGIN_NO_USE_EXTEND_NATIVE)

    case 'eslint-plugin-unicorn':
    case 'ESLINT_PLUGIN_UNICORN.js':
      return require(ESLINT_PLUGIN_UNICORN)

    case 'eslint-plugin-promise':
      return require(ESLINT_PLUGIN_PROMISE)

    case 'eslint-plugin-import':
      return require(ESLINT_PLUGIN_IMPORT)

    case 'eslint-plugin-node':
      return require(ESLINT_PLUGIN_NODE)

    case 'eslint-plugin-prettier':
      return require(ESLINT_PLUGIN_PRETTIER)

    case 'ESLINT_IMPORT_RESOLVER_NODE.js':
      return require(ESLINT_IMPORT_RESOLVER_NODE)

    default:
      return load(...args)
  }
}

const {SRC_PATH} = require('../shared/constants')

const start = async () => {
  unwireWithContext('pkg-conf', require.resolve('xo/cli'), () => ({
    sync: () => ({
      semicolon: false,
      space: 2
    }),
    filepath: () => SRC_PATH
  }))

  require('xo/cli')
}

start()
