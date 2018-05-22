/* @flow */

const {promisify} = require('util')
const {dirname, join, resolve, relative} = require('path')
const fs = require('fs')
const babel = require('@babel/core')
const globby = require('globby')
const mkdirpCb = require('mkdirp')

const mkdirp = promisify(mkdirpCb)
const writeFile = promisify(fs.writeFile)
const transformFile = promisify(babel.transformFile)

const transform = async (file, src, dest, options) => {
  const srcPath = join(src, file)
  const destPath = join(dest, file)

  const {code} = await transformFile(srcPath, options)

  console.log('  - ', relative(src, srcPath))

  await mkdirp(dirname(destPath))
  await writeFile(destPath, code)
}

const transformDirectory = async (src, dest, options) => {
  src = resolve(src)
  dest = resolve(dest)

  const transformFile = file => {
    return transform(file, src, dest, {
      filename: file,
      ...options
    })
  }

  const files = await globby('**/*.js', {cwd: src})

  return Promise.all(files.map(transformFile))
}

module.exports = transformDirectory
