import ssrMod from '../lib/index'
const { resolve } = require('path')

module.exports = {
  target: "static",
  rootDir: resolve(__dirname, ".."),
  buildDir: resolve(__dirname, ".nuxt"),
  srcDir: __dirname,
  generate: {
    dir: "dist_example",
  },
  vue:{
    config:{
      devTools : true  
    }
  },
  build: {
    analyze: false,
    minifyCSS: false,
    minifyJS: false,
    cache: false,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    postcss: {
      preset: {
        features: {
          customProperties: true,
        },
      },
    },
    publicPath: "/_nxt_mod/",
    indicator: false,
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: ["raw-loader"],
      });
    },
    extractCSS: true,
    vendor: ["vuex", "axios"],
    filenames: {
      app: ({ isDev }) => "[name].js",
      chunk: ({ isDev }) => "[name].js",
      css: ({ isDev }) => "[name].css",
      img: ({ isDev }) => "img/[path][name].[ext]",
      font: ({ isDev }) => "fonts/[name].[ext]",
      video: ({ isDev }) => "videos/[name].[ext]",
    },
  

    transpile: ["@stylelib", "swiper", "dom7"],
    optimization: {
      minimize: false,
      splitChunks: {
        chunks: "all",
        automaticNameDelimiter: ".",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            // cacheGroupKey here is `commons` as the key of the cacheGroup
            name: (mod) => {
              const packageName = mod.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `npm.${packageName.replace("@", "")}`;
            },
            chunks: "all",
            enforce: true,
          },
         
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
      
    },
   
  },
  modules: [ssrMod],
  hyperSSR: {
    component: {
      tagName: "HyperSSRText",
      tagType: "span",
    },
    injection: {
      outDir: "",
      template: {
        langType: "golang",
        templateType: "pongo",
        tagPreflexBefore: "{{",
        tagPreflexAfter: "}}",
      },
      createStruct: null, // default : null
      extractI18n: true,
      extractedI18nFormat: "yaml", // json / yaml / csv / sql / code
      extractedI18nDir: "", // default:"/i18n"
    },
  },
};
