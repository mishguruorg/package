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
      diagnostics: true,
      esModuleInterop: true,
      forceConsistentCasingInFileNames: true,
      module: 'commonjs',
      moduleResolution: 'node',
      noImplicitAny: true,
      noImplicitReturns: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      outDir: DIST_PATH,
      paths,
      removeComments: true,
      resolveJsonModule: true,
      sourceMap: true,
      strict: false, // we should turn this on when data is ready :/
      target: 'es2018',
    },
    include: [`${SRC_PATH}/**/*`],
  }

  const configString = JSON.stringify(config, null, 2)

  return configString
}

export default createTSConfig
