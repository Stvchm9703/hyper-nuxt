import loaderUtils from "loader-utils";
import { parse } from "querystring";
import { generateCode } from "./gen";
const loader = function (source, sourceMap) {
    const loaderContext = this; // eslint-disable-line @typescript-eslint/no-this-alias
    const options = loaderUtils.getOptions(loaderContext) || {};
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
