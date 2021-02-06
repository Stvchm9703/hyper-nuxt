import { Module } from '@nuxt/types'
import initOptions, { HyperSSROption as HyOptions } from './options'
import { state, info, success, error, warn } from './util/log';
import G from './eventHook/generate';
import B from './eventHook/build';
// module.exports.meta = require('../package.json');
const HyperSSRModule: Module<HyOptions> = function (moduleOptions: any) {
  
  this.nuxt.hook('build:before', async (generator: any) =>
    B.before.call(this, initOptions.call(this, moduleOptions), generator));


  this.nuxt.hook('build:compiled', async (generator: any) => {
    state(' build:compiled');
    // state(generator);
  });

  this.nuxt.hook('build:after', async (generator: any) => {
    state('build:after');
    // state(generator);
  });

  this.nuxt.hook('build:routeCreated', async (generator: any) => {
    state('build:routeCreated');
    // state(generator);
  });

  this.nuxt.hook('build:extendRoutes', async (generator: any) =>
    B.compiled.call(this, initOptions.call(this, moduleOptions), generator));

  this.nuxt.hook('build:resource', async (generator: any) => {
    state('build:resource');
    // state(generator);
  });

  this.nuxt.hook('build:done', async (generator: any) => {
    state('build:done');
    // state(generator);
  });
  // -------------------------------------------------------------------------------
  this.nuxt.hook('generate:before', async (generator: any) => {
    state('generate:before');
    // state(generator);
  });

  this.nuxt.hook('generate:compiled', async (generator: any) => {
    state('generate:compiled');
    // state(generator);
  });

  this.nuxt.hook('generate:after', async (generator: any) => {
    state('generate:after');
    // state(generator);
  });

  this.nuxt.hook('generate:routeCreated',
    async (gen: any) =>
      G.routeCreated.call(this, initOptions.call(this, moduleOptions), gen)
  );
  this.nuxt.hook('generate:extendRoutes', async (generator: any) => {
    state('generate:extendRoutes');
    // state(generator);
  });
  this.nuxt.hook('generate:resource', async (generator: any) => {
    state('generate:resource');
    // state(generator);
  });

  this.nuxt.hook('generate:done', async (generator: any) => {
    state('generate:done');
    // state(generator);
  });

  // -------------------------------------------------------------------------------

}
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
