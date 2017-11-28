/**
 * 文件描述
 * @author ydr.me
 * @create 2017-11-28 11:01
 * @update 2017-11-28 11:01
 */


'use strict';

var path = require('blear.node.path');
var fs = require('fs');

var ECHARTS_DIRNAME = path.join(__dirname, '../src/echarts');
var ZRENDER_DIRNAME = path.join(__dirname, '../src/zrender');

var files = path.glob('**/*.js', {
    srcDirname: ECHARTS_DIRNAME
});

files.forEach(function (file) {
    var data = fs.readFileSync(file, 'utf8');
    var dirname = path.dirname(file);
    var relative = path.relative(dirname, ZRENDER_DIRNAME);
    var data2 = data.replace(/require\((["'])zrender\/lib\//g, 'require($1' + relative + '/');

    // console.log(file);
    // console.log(relative);
    // console.log(data2);

    fs.writeFileSync(file, data2, 'utf8');
    console.log('success', file);
});

console.log('success all');
