import readPkgUp from 'read-pkg-up'

const { packageJson: pkg } = readPkgUp.sync()

export const USE_TSC = pkg.types != null && pkg.types !== 'types.d.ts'
export const SRC_PATH = pkg.srcPath || 'src'
export const DIST_PATH = pkg.distPath || 'dist'
export const TESTS_NAME = pkg.testsPath || '**/*.spec.*'
