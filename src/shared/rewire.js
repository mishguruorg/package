/* @flow */

// $FlowFixMe
const Module = require('module')

const {resolveModulePath} = require('unwire')

const REWIRE_FINDPATH = new Map()
const findPath = Module._findPath
Module._findPath = (...args) => {
  const [path] = args
  if (REWIRE_FINDPATH.has(path)) {
    return REWIRE_FINDPATH.get(path)
  }
  return findPath(...args)
}

const REWIRE_LOAD = new Map()
const load = Module._load
Module._load = (...args) => {
  const [path] = args
  if (REWIRE_LOAD.has(path)) {
    return REWIRE_LOAD.get(path)
  }
  return load(...args)
}

/* ::
type $tree = [string, Array<string | $tree>]
*/

const rewireChildren = (
  context /* : string */,
  parent /* : string */,
  children /* : Array<string | $tree> */
) => {
  const parentPath = resolveModulePath(parent, context)

  children.forEach((child) => {
    if (Array.isArray(child)) {
      const [parent, children] = child
      return rewireChildren(parentPath, parent, children)
    }

    const childPath = resolveModulePath(child, parentPath)

    // $FlowFixMe
    const childModule = require(childPath)

    REWIRE_FINDPATH.set(child, childPath)
    REWIRE_LOAD.set(child, childModule)
  })
}

const rewire = (dependencyTree /* : Array<$tree> */) => {
  dependencyTree.forEach((item) => {
    const [parent, children] = item
    rewireChildren(__dirname, parent, children)
  })
}

module.exports = rewire
