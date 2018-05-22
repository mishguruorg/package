/* @flow */

const {spawn} = require('child_process')
const chalk = require('chalk')

const exec = (cmd /* : string */, ...args /* : Array<string> */) => {
  return new Promise((resolve, reject) => {
    console.log(chalk.grey(`> ${cmd} ${args.join(' ')}`))

    const child = spawn(cmd, args, {
      stdio: [process.stdin, process.stdout, process.stderr],
      cwd: process.cwd()
    })

    child.on('close', resolve)
    child.on('error', reject)
  })
}

module.exports = exec
