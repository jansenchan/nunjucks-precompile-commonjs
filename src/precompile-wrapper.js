/**
 * @file nunjuncks commonjs wrapper
 * @author cdatou <chen.zsheng@gmail.com>
 */

'use strict';

function precompileWrapper(templates, opts) {
    var output = '';
    var name = null;
    var tpl = null;
    var tplStr = null;

    for (var i = 0; i < templates.length; i++) {
        tpl = templates[i];
        name = JSON.stringify(tpl.name);
        tplStr = tpl.template;

        output += [
            'module.exports[' + name + '] = ',
            '(function() {\n' + tplStr + '\n})();\n'
        ].join('')
    }

    return output;
}

module.exports = precompileWrapper;