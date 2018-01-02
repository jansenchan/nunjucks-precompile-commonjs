'use strict';

var path = require('path').posix;
var PrecompiledLoader = require('nunjucks').PrecompiledLoader;

var EnhancePrecompiledLoader = PrecompiledLoader.extend({
    resolve: function(from, to) {
        return path.normalize(path.join(path.dirname(from), to));
    }
});

module.exports = EnhancePrecompiledLoader;
