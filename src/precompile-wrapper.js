'use strict';

function precompileWrapper(templates, opts) {
    var output = '';
    var name = null;
    var tpl = null;
    var tplStr = null;

    for (var i = 0; i < templates.length; i++) {
        tpl = templates[i];
        name = JSON.stringify(tpl.name);
        tplStr = templates.template;

        output += [
            'module.exports[' + name + '] = ',
            '(function() {\n' + template + '\n})();\n'
        ].join('')
    }

    return output;
}

module.exports = precompileWrapper;