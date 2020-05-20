import { promisify } from 'util'
import { dirname, join, resolve, relative } from 'path'
import fs from 'fs'
import chalk from 'chalk'
import globby from 'globby'
import mkdirp from 'mkdirp'

const babel = require('@babel/core')

const writeFile = promisify(fs.writeFile)
const transformFile = promisify(babel.transformFile)

const transform = async (
  file: string,
  src: string,
  dest: string,
  options: object
) => {
  const srcPath = join(src, file)
  const destPath = join(dest, file)

  const { code } = await transformFile(srcPath, options)

  console.log(chalk.white(`  - ${relative(src, srcPath)}`))

  await mkdirp(dirname(destPath))
  await writeFile(destPath, code)
}

const transformDirectory = async (
  src: string,
  dest: string,
  options: object
) => {
  src = resolve(src)
  dest = resolve(dest)

  const transformFile = (file: string) => {
    return transform(file, src, dest, {
      filename: file,
      ...options,
    })
  }

  const files = await globby('**/*.js', { cwd: src })

  return Promise.all(files.map(transformFile))
}

export default transformDirectory
