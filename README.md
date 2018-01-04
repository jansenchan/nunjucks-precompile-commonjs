# nunjucks precompile commonjs

## precompile

``` javascript
var fs = require('fs');
var nunjucks = require('nunjucks');
var wrapper = require('nunjucks-precompile-commonjs').wrapper;

var tmpl = nunjucks.precompile('path to views', {
    include: ['\\.html$'],
    wrapper: wrapper
});

fs.writeFileSync('path to output compiled-template.js', tmpl, 'utf8');
```

## usage

``` javascript
var nunjucks = require('nunjucks');
var PrecompiledLoader = require('nunjucks-precompile-commonjs').Loader;

var tmpl = require('path to output compiled-template.js');
var loader = new PrecompiledLoader(tmpl);
// var originPrecompiledLoader = new nunjucks.PrecompiledLoader(tmpl);
var env = new nunjucks.Environment([loader]); // or: var env = new nunjucks.Environment([loader, originPrecompiledLoader]);

var templateContext = {xxx: 'xxx'}

console.log(env.render('template name', templateContext));
```