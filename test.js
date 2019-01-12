var assert = require("assert");
var format = require(".");

var start = 'pewpew';
var hex = format.encodeHex(format.decodeUTF8(start));
var end = format.encodeUTF8(format.decodeHex(hex));
//console.log(hex, end);

assert(start === end);

