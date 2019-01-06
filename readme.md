# Cryptomancy-format

This is a simple library which converts between Uint8Arrays and a variety of other encodings.

* encodeBigInt
  * convert a Uint8Array to a JSBN BigInteger
* decodeBigInt
  * convert a JSBN BigInteger to a Uint8Array
* encode64
  * convert a Uint8Array to base64
* decode64
  * convert base64 to a Uint8Array
* encodeUTF8
  * convert a Uint8Array to a utf8 string
* decodeUTF8
  * convert a utf8 string to a Uint8Array
* encodeURL64
  * convert a Uint8Array to a URL-safe base64 representation
* decodeURL64
  * convert a URL-safe base64 representation to a Uint8Array
* encodeProquint
  * convert a Uint8Array to a pronouncable binary encoding
* decodeProquint
  * convert a pronouncable binary encoding to a Uint8Array
* encodeHex
  * convert a Uint8Array to a hexadecimal string
* decodeHex
  * convert a hexadecimal string to a Uint8Array

## API

```Javascript
var Format = require('cryptomancy-format');

Format.encodeBigInt(uint8); // BigInteger
Format.decodeBigInt(BigInteger); // uint8
Format.encode64(uint8); // base64
Format.decode64(base64); // uint8
Format.encodeUTF8(uint8); // utf8
Format.decodeUTF8(utf8); // uint8
Format.encodeURL64(uint8); // URL-safe base64
Format.decodeURL64(any64); // uint8
Format.encodeProquint(uint8); // proquint
Format.decodeProquint(proquint); // uint8
Format.encodeHex(uint8); // hex
Format.decodeHex(hex); // uint8
```


