var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import initOptions from './options';
import { state } from './util/log';
import G from './eventHook/generate';
import B from './eventHook/build';
// module.exports.meta = require('../package.json');
const HyperSSRModule = function (moduleOptions) {
    this.nuxt.hook('build:before', (generator) => __awaiter(this, void 0, void 0, function* () { return B.before.call(this, initOptions.call(this, moduleOptions), generator); }));
    this.nuxt.hook('build:compiled', (generator) => __awaiter(this, void 0, void 0, function* () {
        state(' build:compiled');
        // state(generator);
    }));
    this.nuxt.hook('build:after', (generator) => __awaiter(this, void 0, void 0, function* () {
        state('build:after');
        // state(generator);
    }));
    this.nuxt.hook('build:routeCreated', (generator) => __awaiter(this, void 0, void 0, function* () {
        state('build:routeCreated');
        // state(generator);
    }));
    this.nuxt.hook('build:extendRoutes', (generator) => __awaiter(this, void 0, void 0, function* () { return B.compiled.call(this, initOptions.call(this, moduleOptions), generator); }));
    this.nuxt.hook('build:resource', (generator) => __awaiter(this, void 0, void 0, function* () {
        state('build:resource');
        // state(generator);
    }));
    this.nuxt.hook('build:done', (generator) => __awaiter(this, void 0, void 0, function* () {
        state('build:done');
        // state(generator);
    }));
    // -------------------------------------------------------------------------------
    this.nuxt.hook('generate:before', (generator) => __awaiter(this, void 0, void 0, function* () {
        state('generate:before');
        // state(generator);
    }));
    this.nuxt.hook('generate:compiled', (generator) => __awaiter(this, void 0, void 0, function* () {
        state('generate:compiled');
        // state(generator);
    }));
    this.nuxt.hook('generate:after', (generator) => __awaiter(this, void 0, void 0, function* () {
        state('generate:after');
        // state(generator);
    }));
    this.nuxt.hook('generate:routeCreated', (gen) => __awaiter(this, void 0, void 0, function* () { return G.routeCreated.call(this, initOptions.call(this, moduleOptions), gen); }));
    this.nuxt.hook('generate:extendRoutes', (generator) => __awaiter(this, void 0, void 0, function* () {
        state('generate:extendRoutes');
        // state(generator);
    }));
    this.nuxt.hook('generate:resource', (generator) => __awaiter(this, void 0, void 0, function* () {
        state('generate:resource');
        // state(generator);
    }));
    this.nuxt.hook('generate:done', (generator) => __awaiter(this, void 0, void 0, function* () {
        state('generate:done');
        // state(generator);
    }));
    // -------------------------------------------------------------------------------
};
export default HyperSSRModule;
// 'server:devMiddleware': [Array],
// 'bundler:progress': [Array],
// 'cli:buildError': [Array],
// 'server:nuxt:renderLoading': [Array],
// 'build:before': [Array],
// 'build:done': [Array],
// 'build:compiled': [Array],
// 'build:resources': [Array],
// 'generate:before'
// 'generate:after': [Array],
// 'generate:extendRoutes': [Array],
// 'generate:routeCreated': [Array],
// 'generate:done': [Array],
// 'watch:restart': [Array],
// 'bundler:change': [Array]
