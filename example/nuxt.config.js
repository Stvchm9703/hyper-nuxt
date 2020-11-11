import ssrMod from '../lib/index'
const { resolve } = require('path')

module.exports = {
  target: 'static',
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  generate: {
    dir: 'dist_example'
  },
  modules: [ssrMod],
  hyperSSR: {}
}
