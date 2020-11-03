const { resolve } = require('path')
import ssrMod from '../lib';
module.exports = {
  target: 'static',
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  generate: {
    dir: 'dist_example',
  },
  modules: [ssrMod],
  hyperSSR : {}
}
