import chalk from 'chalk';
import util from 'util';
const _log = console.log;
const _style = {
    status: chalk.bold.white.bgHex('235a97'),
    success: chalk.greenBright.bold,
    warn_header: chalk.hex('#333333').bgYellowBright.bold,
    warn_content: chalk.hex('#FFCA1C'),
    error_header: chalk.hex('#333333').bgHex('#D91C26').bold,
    error_content: chalk.hex('#E93700'),
    trace: chalk.hex('#555555'),
};
export function state(msg) { _log(_style.status('    ' + msg, '     ')); }
export function success(msg) { _log(_style.success('\t', msg, '\t')); }
export function info(msg) { _log(msg); }
export function warn(msg) {
    _log(_style.warn_header(' ====  [  WARN  ]  ==== '));
    if (typeof msg === 'string') {
        _log(_style.warn_content(msg));
    }
    else {
        _log(util.formatWithOptions({ colors: true }, '%O', msg));
    }
    console.trace(_style.trace(msg));
    _log(_style.warn_content(' ------------------------ '));
}
export function error(msg) {
    _log(_style.error_header(' ====  [  ERROR  ]  ==== '));
    if (typeof msg === 'string') {
        _log(_style.error_content(msg));
    }
    else {
        _log(util.formatWithOptions({ colors: true }, '%O', msg));
    }
    console.trace(_style.trace(msg));
    _log(_style.error_content(' ------------------------ '));
}
// export function group()
export default info;
