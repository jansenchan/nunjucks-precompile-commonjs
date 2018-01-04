var path = require('path');
var fs = require('fs');
var nunjucks = require('nunjucks');
var wrapper = require('..').wrapper;

var ROOT = path.resolve(__dirname);

var tmpl = nunjucks.precompile(path.join(ROOT, 'tmpl'), {
    include: ['\\.html$'],
    wrapper: wrapper
});

fs.writeFileSync(path.join(ROOT, 'compiled-tmpl.js'), tmpl, 'utf8');