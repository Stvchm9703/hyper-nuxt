import JSON5 from 'json5';
import yaml from 'js-yaml';
import { flatten } from 'flat';
import prettier from 'prettier';
import { baseCompile, generateFormatCacheKey, friendlyJSONstringify } from 'vue-i18n';
export function generateCode(source, query, options) {
    const value = merge(parse(source, query), query);
    let code = '';
    const preCompile = !!options.preCompile;
    if (preCompile) {
        code += generateCompiledCode(value);
        code += `export default function (Component) {
  Component.__i18n = Component.__i18n || _getResource
}\n`;
    }
    else {
        code += `export default function (Component) {
  Component.__i18n = Component.__i18n || []
  Component.__i18n.push(${stringify(value)})
}\n`;
    }
    return prettier.format(code, { parser: 'babel' });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function stringify(data) {
    return friendlyJSONstringify(data);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function merge(data, query) {
    if (query.locale && typeof query.locale === 'string') {
        return Object.assign({}, { [query.locale]: data });
    }
    else {
        return data;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parse(source, query) {
    const value = Buffer.isBuffer(source) ? source.toString() : source;
    const { lang } = query;
    switch (lang) {
        case 'yaml':
        case 'yml':
            return yaml.safeLoad(value);
        case 'json5':
            return JSON5.parse(value);
        default:
            return JSON.parse(value);
    }
}
function generateCompiledCode(messages) {
    let code = '';
    code += `function _register(functions, pathkey, msg) {
  const path = JSON.stringify(pathkey)
  functions[path] = msg
}
`;
    code += `const _getResource = () => {
  const functions = Object.create(null)
`;
    const locales = Object.keys(messages);
    locales.forEach(locale => {
        const message = flatten(messages[locale]);
        const keys = Object.keys(message);
        keys.forEach(key => {
            const format = message[key];
            let occured = false;
            const options = {
                mode: 'arrow',
                // TODO: source mapping !
                onError(err) {
                    console.error(err);
                    occured = true;
                }
            };
            const result = baseCompile(format, options);
            if (!occured) {
                code += `  _register(functions, ${generateFormatCacheKey(locale, key, format)}, ${result.code})\n`;
            }
        });
    });
    code += `
  return { functions }
}
`;
    return code;
}
