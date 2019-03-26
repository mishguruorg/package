import { spawn } from 'child_process'

const exec = (cmd: string, ...args: Array<string>) => {
  return new Promise((resolve, reject) => {
    const error = new Error(`"${cmd} ${args}" failed!`)

    const child = spawn(cmd, args, {
      stdio: [process.stdin, process.stdout, process.stderr],
      cwd: process.cwd()
    })

    child.on('close', (code) => {
      if (code > 0) {
        reject(error)
      } else {
        resolve()
      }
    })
    child.on('error', reject)
  })
}

export default exec