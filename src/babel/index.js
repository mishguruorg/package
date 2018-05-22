/* @flow */

const {promisify} = require('util')
const {dirname, join, resolve, relative} = require('path')
const fs = require('fs')
const chalk = require('chalk')
const babel = require('@babel/core')
const globby = require('globby')
const mkdirpCb = require('mkdirp')

const mkdirp = promisify(mkdirpCb)
const writeFile = promisify(fs.writeFile)
const transformFile = promisify(babel.transformFile)

const transform = async (
  file /* : string */,
  src /* : string */,
  dest /* : string */,
  options /* : Object */
) => {
  const srcPath = join(src, file)
  const destPath = join(dest, file)

  const {code} = await transformFile(srcPath, options)

  console.log(chalk.white(`  - ${relative(src, srcPath)}`))

  await mkdirp(dirname(destPath))
  await writeFile(destPath, code)
}

const transformDirectory = async (
  src /* : string */,
  dest /* : string */,
  options /* : Object */
) => {
  src = resolve(src)
  dest = resolve(dest)

  const transformFile = (file) => {
    return transform(file, src, dest, {
      filename: file,
      ...options,
    })
  }

  const files = await globby('**/*.js', {cwd: src})

  return Promise.all(files.map(transformFile))
}

module.exports = transformDirectory
