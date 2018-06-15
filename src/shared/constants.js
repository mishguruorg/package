/* @flow */

module.exports = {
  SRC_PATH: process.env.npm_package_srcPath || 'src',
  DIST_PATH: process.env.npm_package_distPath || 'dist',
  TESTS_NAME: process.env.npm_package_testsPath || '**/*.spec.js'
}
