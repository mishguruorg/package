/* @flow */

const chalk = require('chalk')

const { SRC_PATH, DIST_PATH } = require('./constants')

const log = (...args /* : Array<string> */) => console.log(...args)

const fmt = (
  strings /* : Array<string> */,
  ...values /* : Array<string> */
) => {
  const message = strings.reduce((total, current, index) => {
    total += current
    if (Object.hasOwnProperty.call(values, index)) {
      let value = values[index]

      if (Array.isArray(value)) {
        value = value.join(' ')
      }

      switch (value) {
        case SRC_PATH:
          total += chalk.blue(value)
          break

        case DIST_PATH:
          total += chalk.yellow(value)
          break

        default:
          total += chalk.green(value)
          break
      }
    }
    return total
  }, '')

  return chalk.whiteBright(message)
}

module.exports = {
  log,
  fmt
}
