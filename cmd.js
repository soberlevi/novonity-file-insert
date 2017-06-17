#!/usr/bin/env node
/**
 * Created by soberlevi on 2017/6/17.
 */
let fileInsert = require('../');
let minimist = require('minimist');
let argv = minimist(process.argv.slice(2), {
    boolean: ['r']
});
let line = argv.l;
let file = argv.f;
let content = argv.c;
let replace = argv.r;
if (replace) {
    content = content.replace(/'/g, "\"");
}

(function exec() {
    fileInsert(file, line, content, callback);
    function callback (err) {
        if (err) {
            console.error(err.message);
            process.exit(1);
        } else {
            process.exit(0);
        }
    }
})();
