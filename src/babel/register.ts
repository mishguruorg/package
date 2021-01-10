import BABEL_CONFIG from './config.js'

export default [
  /* eslint-disable-next-line @typescript-eslint/no-var-requires */
  require('@babel/register')({
    ...BABEL_CONFIG,
  }),
]
