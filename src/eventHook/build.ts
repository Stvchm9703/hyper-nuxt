// import ;
// import type { Module } from "@nuxt/types";
import { ModuleThis } from "@nuxt/types/config/module";
import { HyperSSROption } from '../options';
import { state, info, warn } from '../util/log';
// extract 

export async function before(this: ModuleThis, opt: HyperSSROption, generator: any) {
  //  inject rules 
  state('Hyper SSR : build:before');
  warn(opt);
  this.options.build.extend = (config: any, ctx: any) => {
    if (ctx.isClient) {
      info({ 'config': config })
      info({ 'ctx': ctx });
      if (ctx.isDev) {
        config.module.rules.push({
          resourceQuery: /blockType=i18n/,
          type: 'javascript/auto',
          loader: '@intlify/vue-i18n-loader'
        });
      } else {
        config.module.rules.push({
          resourceQuery: /blockType=i18n/,
          type: 'javascript/auto',
          loader: '../loader'
        });
      }

    }
  }
}

export async function created() {

}

export async function compiled(this: ModuleThis, option: HyperSSROption, generator: any) {
  state('build:compiled');
  info(generator);
}


export default {
  compiled,
  before,
}