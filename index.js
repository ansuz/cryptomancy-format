var Format = module.exports;

var Util = require("tweetnacl-util");
var proquint = require("proquint");
var bigint = require("jsbn").BigInteger;
var Hexarray = require("hex-array");

Format.encodeBigInt = function (u8) {
    var num = bigint.ZERO;
    var l = u8.length;
    for (var i = 0;i < l; i++) {
        num = num.shiftLeft(8).add(new bigint(Number(u8[i]).toString()));
    }
    return num;
};

Format.decodeBigInt = function (num) {
    return new Uint8Array(num.toByteArray());
};

Format.encode64 = Util.encodeBase64;
Format.decode64 = Util.decodeBase64;
Format.encodeUTF8 = Util.encodeUTF8;
Format.decodeUTF8 = Util.decodeUTF8;

Format.encodeURL64 = function (uint8) {
    return Format.encode64(uint8).replace(/\//g, '-');
};

Format.decodeURL64 = function (b64) {
    return Format.decode64(b64.replace(/\-/g, '/'));
};

Format.encodeProquint = function (u8) {
    return proquint.encode(new Buffer(u8));
};

Format.decodeProquint = function (pq) {
    return new Uint8Array(proquint.decode(pq));
};

Format.encodeHex = function (u8) {
    return Hexarray.toString(u8);
};

Format.decodeHex = function (hex) {
    return Hexarray.fromString(hex);
};

