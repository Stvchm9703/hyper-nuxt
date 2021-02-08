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
  hyperSSR: {
    component: {
      tagName: 'HyperSSRText',
      tagType: 'span',
    },
    injection: {
      outDir: '',
      template: {
        langType : "golang",
        templateType : "pongo",
        tagPreflexBefore : "{{",
        tagPreflexAfter : "}}",
      },
      createStruct: null, // default : null
      extractI18n: true,
      extractedI18nFormat: 'yaml', // json / yaml / csv / sql / code 
      extractedI18nDir: '' // default:"/i18n"
    }
  }

}
