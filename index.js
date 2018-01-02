'use strict';

var precompileWrapper = require('./src/precompile-wrapper');
var PrecompiledLoader = require('./src/precompiled-loader');

precompileWrapper.PrecompiledLoader = PrecompiledLoader;

module.exports = precompileWrapper;