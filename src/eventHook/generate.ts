// import ;
import { Module } from "@nuxt/types";
import { ModuleThis } from "@nuxt/types/config/module";
import { HyperSSROption } from '../options';
import { state, info } from '../util/log';
// extract 
function getPageAttr(): void {
}


export async function created() {

}

export async function routeCreated(this: ModuleThis, option: HyperSSROption, generator: any) {
  state('generate:routeCreated');
  info(generator);
}

export default {
  routeCreated,
}