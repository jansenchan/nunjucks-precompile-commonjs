var path = require('path');
var nunjucks = require('nunjucks');
var PrecompiledLoader = require('../..').Loader;
var tmpl = require('../compiled-tmpl');
var loader = new PrecompiledLoader(tmpl);
var preEnv = new nunjucks.Environment([loader]);
var env = nunjucks.configure(path.join(__dirname, '..', 'tmpl'));
var tmplName = 'pages/absolute.html';
var tmplModel = {name: 'test'};

test('absolute path precompile render', () => {
    expect(preEnv.render(tmplName, tmplModel)).toBe(env.render(tmplName, tmplModel));
});