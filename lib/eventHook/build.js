var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { state, info, warn } from '../util/log';
// extract 
export function before(opt, generator) {
    return __awaiter(this, void 0, void 0, function* () {
        //  inject rules 
        state('Hyper SSR : build:before');
        warn(opt);
        this.options.build.extend = (config, ctx) => {
            if (ctx.isClient) {
                info({ 'config': config });
                info({ 'ctx': ctx });
                if (ctx.isDev) {
                    config.module.rules.push({
                        resourceQuery: /blockType=i18n/,
                        type: 'javascript/auto',
                        loader: '@intlify/vue-i18n-loader'
                    });
                }
                else {
                    config.module.rules.push({
                        resourceQuery: /blockType=i18n/,
                        type: 'javascript/auto',
                        loader: '../webpack_loader/i18nRenderTag.ts',
                    });
                }
            }
        };
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
