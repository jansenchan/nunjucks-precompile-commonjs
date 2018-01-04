/**
 * @file entry
 * @author cdatou <chen.zsheng@gmail.com>
 */

'use strict';

var precompileWrapper = require('./src/precompile-wrapper');
var PrecompiledLoader = require('./src/precompiled-loader');

module.exports = {
    wrapper: precompileWrapper,
    Loader: PrecompiledLoader
}