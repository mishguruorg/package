import globby from 'globby'
import { join, basename } from 'path'

import { SRC_PATH, DIST_PATH } from '../shared/constants'

const D_TS_PATH = `./types/*.d.ts`

const createTSConfig = (): string => {
  const declarationFiles = globby.sync(D_TS_PATH, { cwd: SRC_PATH })

  const paths: Record<string, string[]> = {
    '*': ['node_modules/*', `${SRC_PATH}/types/*`],
  }

  for (const filepath of declarationFiles) {
    const moduleName = basename(filepath)
      .replace(/\.d\.ts$/, '')
    paths[moduleName] = [join(SRC_PATH, filepath)]
  }

  const config = {
    compilerOptions: {
      baseUrl: '.',
      declaration: true,
      esModuleInterop: true,
      module: 'commonjs',
      moduleResolution: 'node',
      noImplicitAny: true,
      outDir: DIST_PATH,
      resolveJsonModule: true,
      sourceMap: true,
      target: 'es2018',
      paths,
    },
    include: [`${SRC_PATH}/**/*`],
  }

  const configString = JSON.stringify(config, null, 2)

  return configString
}

export default createTSConfig
