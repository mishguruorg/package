import { SRC_PATH, DIST_PATH } from '../shared/constants'

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
    paths: {
      '*': ['node_modules/*', `${SRC_PATH}/types/*`],
    },
  },
  include: [`${SRC_PATH}/**/*`],
}

const tsconfigJSON = JSON.stringify(config, null, 2)

export default tsconfigJSON
