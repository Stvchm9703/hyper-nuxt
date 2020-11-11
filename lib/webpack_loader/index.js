// import type { Buffer } from "@types/node";
import loaderUtils from "loader-utils";
import { parse } from "querystring";
import { generateCode } from "./gen";
import { state } from '../util/log';
const loader = function (source, sourceMap) {
    const loaderContext = this;
    const options = loaderUtils.getOptions(loaderContext) || {};
    state(`webpack version :     ${this.version}`);
    if (this.version && Number(this.version) >= 2) {
        try {
            // this.cacheable && this.cacheable();
            const code = `${generateCode(source, parse(this.resourceQuery), options)}`;
            this.callback(null, code, sourceMap);
        }
        catch (err) {
            this.emitError(err.message);
            this.callback(err);
        }
    }
    else {
        const message = "support webpack 2 later";
        this.emitError(message);
        this.callback(new Error(message));
    }
};
export default loader;
