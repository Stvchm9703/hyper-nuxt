var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import ;
// import type { Module } from "@nuxt/types";
// import wp from 'webpack';
import path from 'path';
import { state, info, warn } from '../util/log';
// extract 
export function before(opt, generator) {
    return __awaiter(this, void 0, void 0, function* () {
        //  inject rules 
        state('Hyper SSR : build:before');
        warn(opt);
        // check webpack 
        info('= [webpack checking] ==========');
        this.options.build.extend = (config, ctx) => {
            if (ctx.isClient) {
                info('--- config ------');
                // info(JSON.stringify(config))
                info('--- ctx ------');
                // info(JSON.stringify(ctx));
                if (ctx.isDev) {
                    config.module.rules.push({
                        resourceQuery: /blockType=i18n/,
                        type: 'javascript/auto',
                        loader: '@intlify/vue-i18n-loader'
                    });
                    // add the testing component 
                    console.log(__dirname);
                }
                else {
                    // config.module.rules.push({
                    //   resourceQuery: /blockType=i18n/,
                    //   type: 'javascript/auto',
                    //   loader: path.resolve(__dirname,'../webpack_loader/i18nRenderTag.js'),
                    // });
                }
            }
        };
        info('= [vue plugin checking] ====');
        let optionsPath = this.nuxt.resolver.resolveAlias(path.join(this.options.dir.app || 'app', 'options.js'));
        if (this.options.dev) {
            this.addPlugin({
                fileName: 'hyperNuxtMod/component.js',
                src: path.resolve(__dirname, '../../templates', 'component.dev.js'),
                options: opt
            });
        }
        this.addTemplate({
            fileName: `nuxt-hyper-ssr/option.${optionsPath && optionsPath.endsWith('ts') ? 'ts' : 'js'}`,
            src: path.resolve(__dirname, '../../templates', 'options.js'),
            options: opt,
        });
    });
}
export function created() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
export function compiled(option, generator) {
    return __awaiter(this, void 0, void 0, function* () {
        state('build:compiled');
        info(generator);
    });
}
export default {
    compiled,
    before,
};
