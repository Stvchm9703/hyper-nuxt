
import path from 'path';
import fs from 'fs';
import { ModuleThis } from "@nuxt/types/config/module";
import { HyperSSROption } from '../options';
import { state, info, warn } from '../util/log';
// extract


export async function before(this: ModuleThis, opt: HyperSSROption, generator: any) {
  state('Hyper SSR : dev:before');

  //  inject rules 
  state('Hyper SSR : build:before');
  warn(opt);
  // check webpack 
  info('= [webpack checking] ==========');
  this.options.build.extend = (config: any, ctx: any) => {

    if (ctx.isClient) {
      info('--- config ------')
      info(JSON.stringify(config))

      info('--- ctx ------')
      info(JSON.stringify(ctx));
      if (ctx.isDev) {
        config.module.rules.push({
          resourceQuery: /blockType=i18n/,
          type: 'javascript/auto',
          loader: '@intlify/vue-i18n-loader'
        });

        // add the testing component 
        console.log(__dirname);
        this.addPlugin({
          fileName: 'hyperNuxtMod/component.js',
          src: path.resolve(__dirname, '../../templates', 'component.dev.js'),
          options: opt
        })

      } else {
        this.addPlugin({
          fileName: 'hyperNuxtMod/component.js',
          src: path.resolve(__dirname, '../../templates', 'component.dev.js'),
          options: opt
        })
        config.module.rules.push({
          resourceQuery: /blockType=i18n/,
          type: 'javascript/auto',
          loader: './webpack_loader',
        });
      }

    }
  }

  info('= [vue plugin checking] ====');

  let optionsPath: string | null = this.nuxt.resolver.resolveAlias(
    path.join(
      this.options.dir!.app || 'app', 'options.js'
    )
  );



  this.addTemplate({
    fileName: `hyperNuxtMod/option.${optionsPath && optionsPath.endsWith('ts') ? 'ts' : 'js'}`,
    src: path.resolve(__dirname, '../../templates', 'options.js'),
    options: opt,
  })



}