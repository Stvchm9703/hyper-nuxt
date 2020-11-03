import { Module } from "@nuxt/types";

import { HyperSSROption } from "./options";
import HSModule from './module';
// import setupBuild from "./build";
// import setupFont from "./font";
// import setupIcons from "./icons";
// import setupSass from "./sass";

declare module "@nuxt/types" {
  interface Configuration {
    hyperSSR?: HyperSSROption;
  }
}

export {
  HyperSSROption,
}

export default HSModule;
