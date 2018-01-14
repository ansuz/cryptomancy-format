var Format = module.exports;

var Util = require("tweetnacl-util");
var proquint = require("proquint");
var bigint = require("jsbn").BigInteger;

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

Format.decodeProquint = function (pq) {
    return new Uint8Array(proquint.decode(pq));
};
Format.encodeProquint = function (u8) {
    return proquint.encode(new Buffer(u8));
};

