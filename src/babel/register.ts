import BABEL_CONFIG from './config.js'

export default [
  require('@babel/register')({
    ...BABEL_CONFIG
  })
]
