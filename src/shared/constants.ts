export const USE_TSC = process.env.npm_package_types != null
export const SRC_PATH = process.env.npm_package_srcPath || 'src'
export const DIST_PATH = process.env.npm_package_distPath || 'dist'
export const TESTS_NAME = process.env.npm_package_testsPath || '**/*.spec.*'
