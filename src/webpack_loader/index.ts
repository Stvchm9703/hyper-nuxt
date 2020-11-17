// import type { Buffer } from "@types/node";
// "webpack-env": "^0.8.0"
import webpack from "webpack";
import loaderUtils from "loader-utils";
import { parse } from "querystring";
import { RawSourceMap } from "source-map";
import { generateCode, VueI18nLoaderOptions } from "./gen";
import { state, info, warn } from '../util/log';

const loader: webpack.loader.Loader = function (
  source: string | Buffer,
  sourceMap: RawSourceMap | undefined,
): void {
  const loaderContext = this; 
  const options = loaderUtils.getOptions(loaderContext) || {};
  state(`webpack version :     ${this.version}`);
  if (this.version && Number(this.version) >= 2) {
    try {
      // this.cacheable && this.cacheable();
      const code = `${
        generateCode(
          source,
          parse(this.resourceQuery),
          options as VueI18nLoaderOptions,
        )
      }`;
      this.callback(null, code, sourceMap);
    } catch (err) {
      this.emitError(err.message);
      this.callback(err);
    }
  } else {
    const message = "support webpack 2 later";
    this.emitError(message);
    this.callback(new Error(message));
  }
};

export default loader;
