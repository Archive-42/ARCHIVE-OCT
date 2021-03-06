var crypto = require("crypto");
var promisify = require("./_promisify.js");
var bind = function (c, f) {
  return f && f.bind(c);
};
Object.defineProperties(module.exports, {
  Certificate: { enumerable: true, value: crypto.Certificate },
  Cipher: { enumerable: true, value: crypto.Cipher },
  Cipheriv: { enumerable: true, value: crypto.Cipheriv },
  Credentials: { enumerable: true, value: crypto.Credentials },
  DEFAULT_ENCODING: {
    enumerable: true,
    get: function () {
      return crypto.DEFAULT_ENCODING;
    },
    set: function (v) {
      crypto.DEFAULT_ENCODING = v;
    },
  },
  Decipher: { enumerable: true, value: crypto.Decipher },
  Decipheriv: { enumerable: true, value: crypto.Decipheriv },
  DiffieHellman: { enumerable: true, value: crypto.DiffieHellman },
  DiffieHellmanGroup: { enumerable: true, value: crypto.DiffieHellmanGroup },
  ECDH: { enumerable: true, value: crypto.ECDH },
  Hash: { enumerable: true, value: crypto.Hash },
  Hmac: { enumerable: true, value: crypto.Hmac },
  Sign: { enumerable: true, value: crypto.Sign },
  Verify: { enumerable: true, value: crypto.Verify },
  //_toBuf: // skipping
  constants: {
    enumerable: true,
    get: function () {
      return crypto.constants;
    },
    set: function (v) {
      crypto.constants = v;
    },
  },
  createCipher: { enumerable: true, value: bind(crypto, crypto.createCipher) },
  createCipheriv: {
    enumerable: true,
    value: bind(crypto, crypto.createCipheriv),
  },
  createCredentials: {
    enumerable: true,
    value: bind(crypto, crypto.createCredentials),
  },
  createDecipher: {
    enumerable: true,
    value: bind(crypto, crypto.createDecipher),
  },
  createDecipheriv: {
    enumerable: true,
    value: bind(crypto, crypto.createDecipheriv),
  },
  createDiffieHellman: {
    enumerable: true,
    value: bind(crypto, crypto.createDiffieHellman),
  },
  createDiffieHellmanGroup: {
    enumerable: true,
    value: bind(crypto, crypto.createDiffieHellmanGroup),
  },
  createECDH: { enumerable: true, value: bind(crypto, crypto.createECDH) },
  createHash: { enumerable: true, value: bind(crypto, crypto.createHash) },
  createHmac: { enumerable: true, value: bind(crypto, crypto.createHmac) },
  createSign: { enumerable: true, value: bind(crypto, crypto.createSign) },
  createVerify: { enumerable: true, value: bind(crypto, crypto.createVerify) },
  getCiphers: { enumerable: true, value: bind(crypto, crypto.getCiphers) },
  getCurves: { enumerable: true, value: bind(crypto, crypto.getCurves) },
  getDiffieHellman: {
    enumerable: true,
    value: bind(crypto, crypto.getDiffieHellman),
  },
  getHashes: { enumerable: true, value: bind(crypto, crypto.getHashes) },
  pbkdf2: { enumerable: true, value: promisify(crypto, crypto.pbkdf2, 5) },
  pbkdf2Sync: { enumerable: true, value: bind(crypto, crypto.pbkdf2Sync) },
  privateDecrypt: {
    enumerable: true,
    value: bind(crypto, crypto.privateDecrypt),
  },
  privateEncrypt: {
    enumerable: true,
    value: bind(crypto, crypto.privateEncrypt),
  },
  prng: { enumerable: true, value: bind(crypto, crypto.prng) },
  pseudoRandomBytes: {
    enumerable: true,
    value: promisify(crypto, crypto.pseudoRandomBytes, 1),
  },
  pseudoRandomBytesSync: {
    enumerable: true,
    value: crypto.pseudoRandomBytes.bind(crypto),
  },
  publicDecrypt: {
    enumerable: true,
    value: bind(crypto, crypto.publicDecrypt),
  },
  publicEncrypt: {
    enumerable: true,
    value: bind(crypto, crypto.publicEncrypt),
  },
  randomBytes: {
    enumerable: true,
    value: promisify(crypto, crypto.randomBytes, 1),
  },
  randomBytesSync: { enumerable: true, value: crypto.randomBytes.bind(crypto) },
  randomFill: {
    enumerable: true,
    value: promisify(crypto, crypto.randomFill, 1),
  },
  randomFillSync: {
    enumerable: true,
    value: bind(crypto, crypto.randomFillSync),
  },
  rng: { enumerable: true, value: bind(crypto, crypto.rng) },
  setEngine: { enumerable: true, value: bind(crypto, crypto.setEngine) },
  timingSafeEqual: {
    enumerable: true,
    value: bind(crypto, crypto.timingSafeEqual),
  },
});
