import globby from 'globby'
import { resolve } from 'path'

import { SRC_PATH, TESTS_NAME, DIST_PATH } from '../shared/constants'
import BABEL_CONFIG from '../babel/config'

const BABEL_REGISTER_PATH = require.resolve('../babel/register')

const getConfig = async () => {
  const files = await globby(TESTS_NAME, { cwd: SRC_PATH })
  const relativeFiles = files.map((file) => resolve(SRC_PATH, file))

  return {
    cache: false,
    verbose: true,
    require: [BABEL_REGISTER_PATH],
    babel: {
      testOptions: BABEL_CONFIG,
    },
    files: [...relativeFiles, `!${DIST_PATH}/`],
  }
}

export default getConfig
